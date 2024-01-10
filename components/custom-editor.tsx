"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Tiptap from "./tiptap"

export default function CustomEditor() {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: " Hey the title is not long enough" })
      .max(100, { message: "Its too long" }),
    content: z
      .string()
      .min(5, { message: " Hey the title is not long enough" })
      .max(100, { message: "Its too long" })
      .trim(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

  }

  return (
    <>
      <main className="p-24">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Main title for your post" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Tiptap content={field.name} onChange={field.onChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="my-4" type="submit">
              Create
            </Button>
          </form>
        </Form>
      </main>
    </>
  )
}
