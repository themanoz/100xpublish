import AppBar from "@/components/AppBar";
import DashboardSideBar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden w-full p-2">
      <SidebarProvider>
        <DashboardSideBar />
        <main className="flex-1 overflow-y-auto rounded-md">
          <AppBar />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}

export default layout;
