
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Analytics = () => (
  <DashboardLayout
    title="Analytics"
    subtitle="Explore your performance metrics, growth analytics, and engagement trends."
  >
    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-gray-200 text-center h-64 flex flex-col justify-center items-center">
      <span className="text-lg font-medium mb-1">Analytics Dashboard</span>
      <span className="text-gray-400">Charts and insights about your agent will be displayed here.</span>
    </div>
  </DashboardLayout>
);

export default Analytics;
