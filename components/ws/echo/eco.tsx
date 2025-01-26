"use client";

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Message must contain at least 1 characters." })
    .max(200, { message: "Message must contain at most 200 characters." }),
});

export default function WSEcho() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="center m-auto h-full max-w-lg p-1">
      <Card className="flex h-full w-full flex-col">
        <CardHeader className="bg-secondary">header</CardHeader>
        <CardContent className="flex-grow">content</CardContent>
        <CardFooter className="justify-center border-t-2 pb-12 pt-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-center space-x-8"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input placeholder="write here..." {...field} />
                    </FormControl>
                    <FormDescription>Talk to Echo!</FormDescription>
                    <FormMessage className="absolute text-nowrap" />
                  </FormItem>
                )}
              />
              <Button
                className="mt-1"
                type="submit"
                disabled={!form.formState.isValid}
              >
                Send
              </Button>
            </form>
          </Form>
        </CardFooter>
      </Card>
    </section>
  );
}
