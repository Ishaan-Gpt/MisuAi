
import React from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import AgentPerformanceDashboard from "@/components/AgentPerformanceDashboard";
import AgentManager from "@/components/AgentManager";
import { useSearchParams } from "react-router-dom";

const tabConfig: Record<string, { title: string; desc: string }> = {
  overview: {
    title: "Agent Performance Dashboard",
    desc: "All live metrics and trend tracking for your deployed agents.",
  },
  dashboard: {
    title: "Agent Performance Dashboard",
    desc: "All live metrics and trend tracking for your deployed agents.",
  },
  manage: {
    title: "Manage Agents",
    desc: "Add, review, and oversee all your deployed AI agents in one convenient workspace.",
  },
};

export default function DeployedAgents() {
  const [searchParams, setSearchParams] = useSearchParams();
  // "dashboard" and "overview" are considered the same tab.
  const tab = searchParams.get("tab") || "overview";
  const { title, desc } = tabConfig[tab] || tabConfig.overview;

  let mainContent;
  if (tab === "dashboard" || tab === "overview") {
    mainContent = <AgentPerformanceDashboard />;
  } else if (tab === "manage") {
    mainContent = <AgentManager />;
  } else {
    mainContent = <AgentPerformanceDashboard />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gradient-to-br from-gray-950 via-slate-950 to-black">
        <AppSidebar />
        <SidebarInset className="flex-1 min-w-0 px-0 md:px-8 py-8 md:py-12">
          {/* Mobile sidebar trigger */}
          <SidebarTrigger className="mb-6 md:hidden" />
          {/* Page context */}
          <div className="max-w-6xl mx-auto mb-8 px-4 md:px-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[1.15rem] md:text-3xl font-bold text-white">{title}</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-8">{desc}</p>
          </div>
          <div className="max-w-6xl mx-auto px-2 md:px-0">
            <div className="bg-slate-900/80 border border-white/15 md:rounded-2xl md:shadow-xl p-3 md:p-8">
              {mainContent}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
