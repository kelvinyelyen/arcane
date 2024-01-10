import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="container flex flex-col justify-between gap-4 py-10 md:h-24 md:flex-row md:py-10">
      <div className="w-full md:w-3/5">
        <p className="text-6xl md:text-left">
          Power Up Your Newsletters With Arcane.
        </p>
      </div>
      <div className="w-full md:w-2/5">
        <p>
          Arcane is your all-in-one solution for simplifying your newsletter
          journey. Focus on what truly matters – creating outstanding content –
          while we handle the rest.
        </p>
        <div className="py-5">
          <Button asChild>
            <Link href="/register">
              Get Started
              <ArrowRight className="h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
