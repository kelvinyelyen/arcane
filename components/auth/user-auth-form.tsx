"use client"

import * as React from "react"
import {
  handleGoogle,
  createMagicURLSession,
  handleMagicURLLogin,
} from "@/appwrite/appwrite"
import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Mail } from "lucide-react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoadingEmail, setIsLoadingEmail] = React.useState<boolean>(false)
  const [isLoadingGoogle, setIsLoadingGoogle] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>("")
  const [isMagicLinkSent, setIsMagicLinkSent] = React.useState<boolean>(false)

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoadingEmail(true)
    try {
      const response = await createMagicURLSession(email)
      console.log(response)
      setIsMagicLinkSent(true)
    } catch (error) {
      console.error("Failed to create Magic URL session:", error)
    } finally {
      setIsLoadingEmail(false)
    }
  }

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const secret = urlParams.get("secret")
    const userId = urlParams.get("userId")

    if (secret && userId) {
      handleMagicURLLogin(userId, secret)
        .then((user) => {
          console.log("Successfully logged in:", user)
        })
        .catch((error) => {
          console.error("Login failed:", error)
        })
    }
  }, [])

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoadingEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button disabled={isLoadingEmail}>
            {isLoadingEmail && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>

      {isMagicLinkSent && (
        <div className="animate-fade-in z-0">
          <Alert>
            <Mail className="h-4 w-4" />
            <AlertDescription>
              Check your email for a login link.
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        onClick={handleGoogle}
        disabled={isLoadingGoogle}
      >
        {isLoadingGoogle ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  )
}
