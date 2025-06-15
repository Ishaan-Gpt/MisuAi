
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import DeployedAgents from "@/components/DeployedAgents";

const DeployedAgentsPage = () => (
  <DashboardLayout
    title="Deployed Agents"
    subtitle="Your recently deployed agents and their statuses."
  >
    <DeployedAgents source="page" />
  </DashboardLayout>
);

export default DeployedAgentsPage;
