
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const History = () => (
  <DashboardLayout
    title="History"
    subtitle="Review a chronological log of your actions, deployments, and updates."
  >
    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-gray-200 text-center h-64 flex flex-col justify-center items-center">
      <span className="text-lg font-medium mb-1">History Section</span>
      <span className="text-gray-400">Action logs and deployment history will be available soon.</span>
    </div>
  </DashboardLayout>
);

export default History;
