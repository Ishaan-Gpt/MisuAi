
import React from "react";
import AgentPerformanceDashboard from "@/components/AgentPerformanceDashboard";

const DeployedAgents = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto pt-24 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Deployed Agents</h1>
        {/* In a real product, this could map over multiple agents */}
        <AgentPerformanceDashboard />
      </div>
    </div>
  );
};

export default DeployedAgents;
