"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function Tiptap({
    content,
    onChange,
}: {
    content: string
    onChange: (richText: string) => void
}) {
    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: content,
        editorProps: {
            attributes: {
                class:
                    "rounded-md border min-h-[500px] border-input bg-background"
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
            console.log(editor.getHTML())
        },
    })

    return (
        <div className="flex flex-col justify-stretch min-h-[250px]">
            <EditorContent editor={editor}/>
        </div>
    )
}