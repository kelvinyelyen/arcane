"use client"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RecentSubs } from "@/components/recent-subscribers"

const IndexPage = () => {
  return (
    <div className="mt-16">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        <Card className="lg:col-span-5 col-span-1">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="my-20">
            <h1 className="text-2xl mb-4 lg:w-[500px]">
              This section is your feed. Your most important activity will show
              up here.
            </h1>
            <p className="text-xs">
              Once you gain a few audience, things will look a lot more
              exciting.
            </p>
          </CardContent>
          <CardFooter>
            <div className="py-4">
              <Button asChild variant={"outline"}>
                <Link href="/dashboard/campaigns">Create a Campaign</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-2 col-span-1">
          <CardHeader>
            <CardTitle>Recent Subscriptions</CardTitle>
            <CardDescription>
              You had <span className="text-pink-500">15</span> subscriptions
              this month.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <RecentSubs />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default IndexPage
