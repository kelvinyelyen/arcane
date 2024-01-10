import { DataTableDemo } from "@/components/subscriber-list"

export default function IndexPage() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-[18px] font-semibold">Audience</h1>
        <p className="text-sm">
          Your audience has 0 contact(s). 0 of these is subscribed.
        </p>
        <div className="mx-2">
          <DataTableDemo />
        </div>
      </div>
    </>
  )
}
