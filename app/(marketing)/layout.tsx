import NavBar from "@/components/layout/navbar"
import { SiteFooter } from "@/components/layout/footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
