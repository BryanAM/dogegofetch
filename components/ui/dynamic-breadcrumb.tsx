"use client";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export default function DynamicBreadCrumb({ ...props }) {
  const pathArray = props.path.split("/");
  const end = pathArray.length - 1;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathArray.slice(0, end).map((path: string) => (
          <Fragment key={path}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={pathArray.slice(0, end).join("/")}
                className="capitalize"
              >
                {path}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">
            {pathArray[end]}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
