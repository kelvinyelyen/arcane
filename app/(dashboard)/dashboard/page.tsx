"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RecentSubs } from "@/components/recent-subscribers"

const IndexPage = () => {
  return (
    <div className="mt-16 space-y-4">
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-5">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="mt-20">
            <h1 className="text-2xl mb-4">
              This section is your feed. Your most <br /> important activity
              will show up here.
            </h1>
            <p className="text-xs">
              Once you gain a few audience, things will look a lot more
              exciting.
            </p>
            <div className="py-4">
              <Button variant={"outline"}>Create a Campaign</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Subscriptions</CardTitle>
            <CardDescription>
              You had 15 subscriptions this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSubs />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default IndexPage
