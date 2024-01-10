import * as React from "react"

import { cn } from "@/lib/utils"
import { ModeToggle } from "../mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              kelvinyelyen
            </a>
            .
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}
