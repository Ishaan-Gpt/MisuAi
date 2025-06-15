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

const postTypes = [
  { type: "Video", count: 61 },
  { type: "Image", count: 32 },
  { type: "Text", count: 17 },
];

const demographyData = [
  { name: "USA", value: 4120 },
  { name: "India", value: 3150 },
  { name: "Brazil", value: 1287 },
  { name: "UK", value: 985 },
  { name: "Germany", value: 660 }
];

const deviceData = [
  { name: "Mobile", value: 78 },
  { name: "Desktop", value: 18 },
  { name: "Tablet", value: 4 },
];

const Analytics = () => (
  <DashboardLayout
    title="Analytics"
    subtitle={<span className="font-medium text-cyan-300">Visualize trends, user geography, and post performance like a pro.</span>}
  >
    <BackButton />
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
    <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="bg-gradient-to-tr from-cyan-900 via-purple-950 to-slate-950 border border-purple-600/40 rounded-2xl p-7 shadow-lg text-white">
        <div className="font-bold text-lg mb-2">Post Type Distribution</div>
        <ResponsiveContainer width="100%" height={130}>
          <BarChart data={postTypes}>
            <XAxis dataKey="type" tick={{ fill: "#fff" }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#818cf8" />
          </BarChart>
        </ResponsiveContainer>
        <div className="text-xs text-purple-200 mt-3">Posts by type in last 30 days</div>
      </div>
      <div className="bg-gradient-to-tr from-blue-950 via-slate-900 to-indigo-950 border border-cyan-600/40 rounded-2xl p-7 shadow-lg text-white">
        <div className="font-bold text-lg mb-2">Audience by Country</div>
        <ResponsiveContainer width="100%" height={130}>
          <BarChart data={demographyData} layout="vertical">
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" tick={{ fill: "#fff" }} />
            <Tooltip />
            <Bar dataKey="value" fill="#a5b4fc" />
          </BarChart>
        </ResponsiveContainer>
        <div className="text-xs text-blue-200 mt-3">Top 5 Audience Locations</div>
      </div>
      <div className="bg-gradient-to-tr from-green-950 via-teal-900 to-slate-800 border border-green-600/40 rounded-2xl p-7 shadow-lg text-white flex flex-col items-center">
        <div className="font-bold text-lg mb-2">Device Usage</div>
        <ResponsiveContainer width="80%" height={130}>
          <BarChart data={deviceData} layout="vertical">
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" tick={{ fill: "#fff" }} />
            <Tooltip />
            <Bar dataKey="value" fill="#6ee7b7" />
          </BarChart>
        </ResponsiveContainer>
        <div className="text-xs text-green-200 mt-3">Mobile is most used</div>
      </div>
    </div>
  </DashboardLayout>
);

export default Analytics;
