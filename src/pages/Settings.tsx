
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Settings = () => (
  <DashboardLayout
    title="Settings"
    subtitle="Adjust your AI Assistant settings, account, and integrations."
  >
    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-gray-300 h-64 flex flex-col gap-2 items-center justify-center">
      {/* Placeholder for settings forms */}
      <span className="text-lg font-semibold">Settings Coming Soon</span>
      <span className="text-gray-400">Toggle options and integrations will appear here.</span>
    </div>
  </DashboardLayout>
);

export default Settings;
