import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mt-10">
        <div>
          <h1 className="lg:text-6xl text-4xl">
            Minimal solution to newsletter management.
          </h1>
        </div>
        <div className="lg:mx-24 mx-0">
          <h1 className="flex mb-4">
            Arcane is your all-in-one solution for simplifying your newsletter
            journey. Focus on what truly matters – creating outstanding content
            – while we handle the rest.
          </h1>
          <Button>Get Started</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10 md:h-24 md:py-10">
        <div className="relative">
          <Card className="h-[300px] rounded-3xl">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
        <div className="relative">
          <Card className="h-[300px] rounded-3xl">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
        <div className="relative">
          <Card className="h-[300px] rounded-3xl">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
