
import React from "react";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: React.ReactNode;
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-b from-slate-950 to-gray-900">
        <AppSidebar />
        <main className="flex-1 w-full px-6 py-10 bg-transparent">
          <SidebarTrigger className="mb-6" />
          {title && (
            <div className="mb-5 flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
              {subtitle && <div className="text-gray-300 text-base">{subtitle}</div>}
            </div>
          )}
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
