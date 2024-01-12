"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Features
      </Link>
      <Button variant={"secondary"} asChild>
        <Link href="/sign-in">Sign-In</Link>
      </Button>
    </nav>
  )
}
