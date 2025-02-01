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
      <SidebarTrigger />
      <main className="px-20 pt-8 md:px-28">{children}</main>
    </SidebarProvider>
  );
}
