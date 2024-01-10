import Link from "next/link"
 import { MainNav } from "@/components/layout/dashboard-nav"
 import { UserNav } from "@/components/layout/user-nav"
 import { SiteFooter } from "@/components/layout/site-footer"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="container flex min-h-screen flex-col">
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex my-5 items-center">
            <Link href="/dashboard" className="text-lg flex items-center font-normal">
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
              <MainNav className="mx-6" />
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
