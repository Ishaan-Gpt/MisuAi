
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Users, BarChart2, Rocket, TrendingUp, MessageCircle, User } from "lucide-react";

const mainStats = [
  {
    icon: <Rocket className="text-cyan-500" size={34} />,
    label: "Active Agents",
    value: 3,
  },
  {
    icon: <Users className="text-orange-400" size={34} />,
    label: "Followers",
    value: 12538,
  },
  {
    icon: <MessageCircle className="text-green-400" size={34} />,
    label: "Engagements",
    value: 5412,
  },
];

const trending = [
  { title: "Growth Marketer", description: "Best overall engagement", value: "+31%", color: "text-green-400" },
  { title: "Personal Brand", description: "Highest followers increase", value: "+856", color: "text-blue-400" },
  { title: "AI Influencer", description: "Most shares this week", value: "+224", color: "text-purple-400" },
];

const Dashboard = () => (
  <DashboardLayout title="Dashboard" subtitle="Welcome to your AI Assistant dashboard.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-8">
      {mainStats.map((stat, i) => (
        <div
          key={i}
          className="rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-purple-950 border border-purple-700/20 p-7 flex flex-col items-center shadow-lg animate-fade-in"
        >
          {stat.icon}
          <div className="text-3xl font-bold text-white mt-4 mb-2">{stat.value}</div>
          <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className="bg-white/5 rounded-2xl border border-white/10 p-6 animate-fade-in">
        <div className="flex items-center mb-4 gap-2">
          <BarChart2 className="text-indigo-400" />
          <span className="font-bold text-lg text-white">Trending Agents</span>
        </div>
        <ul className="space-y-4">
          {trending.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 rounded-lg bg-slate-900/60 px-4 py-3 shadow hover-scale cursor-pointer transition">
              <User className="text-purple-400" />
              <div>
                <div className="text-sm text-white font-medium">{item.title}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </div>
              <div className={"ml-auto text-lg font-semibold " + item.color}>{item.value}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white/5 rounded-2xl border border-white/10 p-6 animate-fade-in flex flex-col justify-center items-center">
        <span className="text-xl font-bold text-white mb-2">Recent Achievements</span>
        <ul className="flex flex-col gap-2 w-full">
          <li className="rounded px-4 py-2 bg-green-500/10 text-green-300 font-semibold">Milestone: 10,000 followers 🚀</li>
          <li className="rounded px-4 py-2 bg-blue-500/10 text-blue-300 font-semibold">Best Week: +1500 engagements ⭐</li>
          <li className="rounded px-4 py-2 bg-purple-400/10 text-purple-300 font-semibold">Agent "Elara" featured! 🪐</li>
        </ul>
      </div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
