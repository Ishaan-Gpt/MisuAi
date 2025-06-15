
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { BarChart, LineChart, Line, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { BackButton } from "@/components/ui/BackButton";
import { TrendingUp } from "lucide-react";

// Dummy analytics data
const engagementData = [
  { week: "W1", Engagements: 900, Posts: 14 },
  { week: "W2", Engagements: 1200, Posts: 20 },
  { week: "W3", Engagements: 1500, Posts: 18 },
  { week: "W4", Engagements: 1800, Posts: 22 },
];

const followersData = [
  { name: "Apr", Followers: 4220 },
  { name: "May", Followers: 8213 },
  { name: "Jun", Followers: 12538 },
];

const Analytics = () => (
  <DashboardLayout
    title="Analytics"
    subtitle="Explore your performance metrics, growth analytics, and engagement trends."
  >
    <BackButton />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white shadow-lg animate-fade-in">
        <div className="flex items-center gap-2 mb-4 text-lg font-bold text-purple-300">
          <TrendingUp />
          Weekly Engagements
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={engagementData}>
            <CartesianGrid stroke="#444" strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Engagements" fill="#7c3aed" />
            <Bar dataKey="Posts" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white shadow-lg animate-fade-in">
        <div className="flex items-center gap-2 mb-4 text-lg font-bold text-cyan-300">
          <TrendingUp />
          Followers Growth
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={followersData}>
            <CartesianGrid stroke="#444" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="Followers" stroke="#06b6d4" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </DashboardLayout>
);

export default Analytics;
