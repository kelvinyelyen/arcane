import CustomEditor from "@/components/custom-editor"

export default function IndexPage() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold">Create</h1>
        <p className="text-sm">
          Your audience has 0 contact(s). 0 of these is subscribed.
        </p>
        <div className="mx-2">
         <CustomEditor />
        </div>
      </div>
    </>
  )
}