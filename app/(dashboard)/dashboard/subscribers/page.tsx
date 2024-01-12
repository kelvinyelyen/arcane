import { DataTableDemo } from "@/components/subscriber-list"

export default function IndexPage() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold">Audience</h1>
        <p className="text-sm">
          Your audience has <span className="text-pink-500">0</span> contact(s).
          <span className="text-pink-500"> 0</span> of these is subscribed.
        </p>
        <div className="">
          <DataTableDemo />
        </div>
      </div>
    </>
  )
}
