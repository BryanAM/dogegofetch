import type { MessageType } from "./types";

export default function Message(message: MessageType) {
  return (
    <article className="my-2 flex flex-col">
      <p
        className={`text-muted-foreground ${message.person === "me" && "text-right"} ${(message.person === "connected" || message.person === "closed") && "text-center"}`}
      >
        {message.person}
      </p>
      <p
        className={`peer self-start rounded-md border-[1px] border-solid p-2 ${
          message.person === "me"
            ? "self-end border-sky-500 bg-sky-400 text-right text-white"
            : "text-left"
        } ${(message.person === "connected" || message.person === "closed") && "hidden"}`}
      >
        {message.message}
      </p>
      <span
        className={`text-xs text-muted-foreground/50 opacity-0 transition-all duration-300 ease-in-out peer-hover:opacity-100 ${message.person === "me" && "text-right"} ${(message.person === "connected" || message.person === "closed") && "text-center opacity-100"}`}
      >
        {message.time}
      </span>
    </article>
  );
}
