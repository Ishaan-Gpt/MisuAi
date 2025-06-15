
import React from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import AgentPerformanceDashboard from "@/components/AgentPerformanceDashboard";
import AgentManager from "@/components/AgentManager";
import { useSearchParams } from "react-router-dom";

const DeployedAgents = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "overview";

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
      <div className="min-h-screen flex w-full bg-black">
        <AppSidebar />
        <SidebarInset className="p-6 md:p-10 flex-1">
          {/* Optionally add a sidebar trigger for mobile */}
          <SidebarTrigger className="mb-4" />
          {mainContent}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DeployedAgents;
