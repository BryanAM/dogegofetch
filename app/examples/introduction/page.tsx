"use client";

import DynamicBreadCrumb from "@/components/ui/dynamic-breadcrumb";
import { usePathname } from "next/navigation";
export default function Introduction() {
  const path = usePathname();
  return (
    <section className="flex flex-col gap-4">
      <DynamicBreadCrumb path={path} />
      <h1 className="text-2xl font-bold">Introduction</h1>
      <p className="text-muted-foreground">
        Web APIs integrated and built beautifully in NextJS and Shadcn/ui.
      </p>

      <p>
        This is <strong>NOT</strong> a full tutorial on how to integreate every
        web API, nor is it a robust approach to using fetch APIs. It is however
        an exercise to utilize opensource web APIs in an effor to integrate them
        into a component library.
      </p>

      <p className="font-bold">Why build this?</p>
      <p>
        The purpose and goal of this project is mainly for practice and
        improvement. Over the past several years of my development experience I
        only had the opportunity to work with certain types of web APIs due to
        client restrictinos. This small little app gives me the opportunity to
        test, playwith and try out a variety of web APIs and combine them with
        common Javascript patterns we might see in production.
      </p>

      <p>
        <i>
          There is no better way to learn, than to try, and to try is to learn.
        </i>
      </p>
    </section>
  );
}
