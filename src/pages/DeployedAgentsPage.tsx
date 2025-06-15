
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { BackButton } from "@/components/ui/BackButton";
import DeployedAgents from "@/components/DeployedAgents";
import { Rocket } from "lucide-react";

const DeployedAgentsPage = () => (
  <DashboardLayout
    title="Deployed Agents"
    subtitle="Your recently deployed agents and their statuses."
  >
    <BackButton />
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white shadow-lg animate-fade-in">
      <div className="flex items-center gap-2 mb-3 text-lg font-bold text-cyan-300">
        <Rocket />
        Active Deployments
      </div>
      <DeployedAgents source="page" />
    </div>
  </DashboardLayout>
);

export default DeployedAgentsPage;
