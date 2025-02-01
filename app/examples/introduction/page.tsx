"use client";

import DynamicBreadCrumb from "@/components/ui/dynamic-breadcrumb";
import { usePathname } from "next/navigation";
export default function Introduction() {
  const path = usePathname();
  return (
    <section>
      <DynamicBreadCrumb path={path} />
      <h1>Title</h1>
    </section>
  );
}
