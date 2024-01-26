import Link from "next/link"
import { MainNav } from "@/components/layout/dashboard-nav"
import { UserNav } from "@/components/layout/user-nav"
import { SiteFooter } from "@/components/layout/site-footer"
import { Pyramid } from "lucide-react"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="container flex min-h-screen flex-col">
      {/* <div className="absolute inset-0 -z-10 h-full w-full noise-background " /> */}
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex my-5 items-center">
            <Link
              href="/dashboard"
              className="text-lg flex items-center font-normal"
            >
            <Pyramid className="h-6 w-6" />
            <span className="m-2"> Arcane</span>
            </Link>
            <div className="ml-auto flex items-center space-x-4">
              <MainNav className="hidden md:flex mx-0 lg:mx-6" />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
