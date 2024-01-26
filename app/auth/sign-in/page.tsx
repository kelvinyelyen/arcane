import { Metadata } from "next"
import Link from "next/link"
import { Pyramid } from "lucide-react"

import { UserAuthForm } from "@/components/auth/user-auth-form"

export const metadata: Metadata = {
  title: "Arcane | Sign-in",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative items-center justify-center lg:max-w-none lg:py-32 py-36">
        <div className="">
          <div className="mx-auto w-full justify-center space-y-6 sm:w-[350px]">
            <div className="space-y-2 text-center">
              <Pyramid className="h-9 w-9 mx-auto" />
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign in to <Link href="/">Arcane</Link>
              </h1>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
