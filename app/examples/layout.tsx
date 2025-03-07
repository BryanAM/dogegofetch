import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="relative">
      <AppSidebar />
      <SidebarTrigger className="sticky top-0" />
      <main className="px-8 pt-8 md:px-8">{children}</main>
    </SidebarProvider>
  );
}
