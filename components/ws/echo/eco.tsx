"use client";

import { useEffect, useState, useRef } from "react";
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
import type { MessageType } from "./types";
import Message from "./message";

const formSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Message must contain at least 1 characters." })
    .max(200, { message: "Message must contain at most 200 characters." }),
});

export default function WSEcho() {
  const id = useRef(0);
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const [socket, setSoket] = useState<WebSocket | null>(null);
  const [chat, setChat] = useState<MessageType[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  function formatDateNow() {
    const date = new Date(Date.now());

    const shortWeekday = date.toLocaleString("en-US", { weekday: "short" });
    // e.g. "Mon"

    let hours = date.getHours(); // 0-23
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert 0-23 hours to 1-12
    hours = hours % 12 || 12;

    return `${shortWeekday} ${hours}:${minutes}${amOrPm}`;
  }

  const createNewMessage = (person: "me" | "echo", message: string) => {
    id.current += 1;
    return {
      person: person,
      message: message,
      id: id.current,
      time: formatDateNow(),
    };
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message: MessageType = createNewMessage("me", values.message);
    setChat((prev) => [...prev, message]);
    if (socket?.OPEN) {
      socket?.send(message.message);
    }
  }

  function handleScroll() {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    const ws = new WebSocket("https://echo.websocket.org", "TBC");
    ws.onopen = () => {
      console.log("Connected");
      setSoket(ws);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error", error);
      setSoket(null);
    };

    ws.onmessage = (event) => {
      const { data } = event;
      console.log("message recieved: ", data);
      const message: MessageType = createNewMessage("echo", data);
      setChat((prev) => [...prev, message]);
    };

    return () => {
      ws.close();
      setSoket(null);
    };
  }, []);

  useEffect(() => {
    handleScroll();
    form.reset();
  }, [chat]);

  return (
    <section className="center m-auto h-full max-w-lg p-1">
      <Card className="flex h-full w-full flex-col">
        <CardHeader className="bg-secondary p-2">
          <h3 className="text-md font-bold">Websockets with Echo</h3>
        </CardHeader>
        <CardContent
          ref={messageContainerRef}
          className="flex-grow overflow-y-scroll"
        >
          {chat.map((data: MessageType) => (
            <Message key={data.id} {...data} />
          ))}
        </CardContent>
        <CardFooter className="justify-center border-t-2 pb-8 pt-4">
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
                    <FormLabel hidden={true} aria-hidden>
                      Message
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="message echo here..." {...field} />
                    </FormControl>
                    <FormDescription hidden={true} aria-hidden>
                      Talk to Echo!
                    </FormDescription>
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
