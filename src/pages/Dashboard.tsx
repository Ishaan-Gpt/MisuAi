
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Dashboard = () => (
  <DashboardLayout title="Dashboard" subtitle="Welcome to your AI Assistant dashboard.">
    <div className="text-lg text-slate-200 font-semibold mb-6">
      This is your hub to launch, monitor, and manage your AI-driven social presence.
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
        <div className="text-4xl font-bold text-blue-400 mb-2">—</div>
        <div className="text-gray-200">Posts Generated</div>
      </div>
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
        <div className="text-4xl font-bold text-purple-400 mb-2">—</div>
        <div className="text-gray-200">Followers Gained</div>
      </div>
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
        <div className="text-4xl font-bold text-green-400 mb-2">—</div>
        <div className="text-gray-200">Active Agents</div>
      </div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
