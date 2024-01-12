import Link from "next/link"

import { MainNav } from "@/components/layout/main-nav"
import { SiteFooter } from "@/components/layout/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="container flex min-h-screen flex-col">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#f9d4e5,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#141414,transparent)]"></div>
      </div>
      <div className="flex-col md:flex">
        <div className="flex my-5 items-center">
          <Link
            href="/dashboard"
            className="text-lg flex items-center font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pyramid mr-1"
            >
              <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
              <path d="M12 2v20" />
            </svg>
            <span>Arcane</span>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <MainNav />
          </div>
        </div>
      </div>
      <main className="flex w-full flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  )
}
