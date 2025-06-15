
import React from "react";
import DeployedAgents from "@/components/DeployedAgents";

const DeployedAgentsPage = () => (
  <div className="max-w-3xl mx-auto py-20 px-4">
    <h1 className="text-3xl font-bold mb-6 text-white">Deployed Agents</h1>
    <DeployedAgents source="page" />
  </div>
);

export default DeployedAgentsPage;
