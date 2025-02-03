"use client";

import DynamicBreadCrumb from "@/components/ui/dynamic-breadcrumb";
import { usePathname } from "next/navigation";

export default function WebSockets() {
  const path = usePathname();

  return (
    <section className="flex flex-col gap-4">
      <DynamicBreadCrumb path={path} />
      <h1 className="text-2xl font-bold">Websockets</h1>
      <p className="text-muted-foreground">Description</p>
    </section>
  );
}
