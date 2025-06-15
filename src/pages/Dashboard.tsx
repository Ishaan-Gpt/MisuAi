
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Users, BarChart2, MessageCircle, User, Flame, TrendingUp, ArrowUpRight, ShieldCheck, DollarSign, Award } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, BarChart as ReBarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const mainStats = [
  {
    icon: <Flame className="text-pink-500" size={34} />,
    label: "Active Agents",
    value: 7,
    change: "+2%",
    desc: "Compared to last week"
  },
  {
    icon: <Users className="text-orange-400" size={34} />,
    label: "Followers",
    value: 27412,
    change: "+683",
    desc: "This month"
  },
  {
    icon: <MessageCircle className="text-green-400" size={34} />,
    label: "Engagements",
    value: 19834,
    change: "+13%",
    desc: "In last 7 days"
  },
  {
    icon: <Award className="text-blue-400" size={34} />,
    label: "Achievements",
    value: 9,
    change: "+1 new",
    desc: "Just now"
  },
];

const trendData = [
  { name: "Mon", Engagements: 2300, Followers: 50, Revenue: 230 },
  { name: "Tue", Engagements: 3400, Followers: 80, Revenue: 350 },
  { name: "Wed", Engagements: 2750, Followers: 65, Revenue: 310 },
  { name: "Thu", Engagements: 4000, Followers: 120, Revenue: 430 },
  { name: "Fri", Engagements: 4580, Followers: 140, Revenue: 540 },
  { name: "Sat", Engagements: 3560, Followers: 100, Revenue: 420 },
  { name: "Sun", Engagements: 3900, Followers: 110, Revenue: 470 },
];

const performanceCards = [
  {
    icon: <ShieldCheck className="text-emerald-400" size={22} />,
    title: "Agent Health",
    stat: "Stable",
    desc: "0 issues detected last week"
  },
  {
    icon: <DollarSign className="text-yellow-300" size={22} />,
    title: "Revenue",
    stat: "$7,150",
    desc: "+17% increase"
  },
  {
    icon: <ArrowUpRight className="text-purple-400" size={22} />,
    title: "Conversion Rate",
    stat: "5.4%",
    desc: "Best this month"
  },
];

const recentActivity = [
  { desc: "Agent 'Elara' deployed", time: "1h ago" },
  { desc: "Profile info updated", time: "4h ago" },
  { desc: "Agent 'Astra' hit 10k followers", time: "Yesterday" },
  { desc: "Created campaign for Q2", time: "2 days ago" },
];

const topAgents = [
  { name: "Astra", score: 96, followers: 10500 },
  { name: "Elara", score: 93, followers: 9300 },
  { name: "Nova", score: 89, followers: 8700 },
];

const Dashboard = () => (
  <DashboardLayout title="Dashboard" subtitle={<span className="font-medium text-cyan-300">AI Assistant: Analyze, deploy, and master your digital presence.</span>}>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {mainStats.map((stat, i) => (
        <div key={i} className="rounded-xl bg-gradient-to-tr from-slate-950 via-indigo-950 to-purple-950 border border-purple-600/30 p-7 flex flex-col items-center shadow-lg hover-scale animate-fade-in group cursor-pointer relative overflow-hidden">
          {stat.icon}
          <div className="text-4xl font-bold mt-3 mb-1 text-white group-hover:scale-110 transition-transform">{stat.value}</div>
          <div className="text-gray-300 text-lg font-semibold">{stat.label}</div>
          <div className="flex items-center gap-2 text-green-400 mt-2">
            <TrendingUp className="w-4 h-4" /> {stat.change}
          </div>
          <span className="absolute right-3 top-4 text-xs text-gray-400">{stat.desc}</span>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-gradient-to-br from-purple-900/60 to-slate-900/80 border border-purple-700/20 rounded-2xl p-7 shadow-xl flex flex-col">
        <span className="font-bold text-lg text-purple-300 mb-2">Engagements This Week</span>
        <ResponsiveContainer width="100%" height={210}>
          <AreaChart data={trendData}>
            <defs>
              <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tick={{ fill: "#c7d2fe" }} />
            <YAxis tick={{ fill: "#c7d2fe" }} />
            <Tooltip />
            <Area type="monotone" dataKey="Engagements" stroke="#a78bfa" fillOpacity={1} fill="url(#colorEng)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-gradient-to-br from-sky-900/60 to-slate-900/70 border border-cyan-600/30 rounded-2xl p-7 shadow-xl flex flex-col">
        <span className="font-bold text-lg text-cyan-300 mb-2">Followers Growth & Revenue</span>
        <ResponsiveContainer width="100%" height={210}>
          <LineChart data={trendData}>
            <XAxis dataKey="name" tick={{ fill: "#67e8f9" }} />
            <YAxis tick={{ fill: "#67e8f9" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Followers" stroke="#22d3ee" strokeWidth={3} />
            <Line type="monotone" dataKey="Revenue" stroke="#fde68a" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {performanceCards.map((card, idx) => (
        <div key={idx} className="rounded-xl bg-gradient-to-tr from-gray-900 via-gray-800 to-purple-900 border border-white/10 p-6 flex flex-col items-center shadow animate-fade-in">
          <div>{card.icon}</div>
          <div className="font-bold text-xl text-white mt-2">{card.title}</div>
          <div className="text-2xl font-bold text-purple-200 mb-1">{card.stat}</div>
          <div className="text-gray-400 text-sm">{card.desc}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 rounded-2xl border border-white/10 p-6 shadow flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <BarChart2 className="text-indigo-400" />
          <span className="font-bold text-lg text-white">Recent Activity</span>
        </div>
        <ul className="space-y-3">
          {recentActivity.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 rounded-lg px-3 py-2 bg-slate-900/60 shadow transition">
              <User className="text-purple-400" />
              <div className="flex-1 text-white">{item.desc}</div>
              <div className="text-xs text-gray-400">{item.time}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white/5 rounded-2xl border border-white/10 p-6 shadow flex flex-col">
        <span className="font-bold text-lg text-white mb-3">Top Performing Agents</span>
        <table className="w-full text-left">
          <thead>
            <tr className="text-purple-300 text-xs uppercase">
              <th className="py-1">Agent</th>
              <th className="py-1">Score</th>
              <th className="py-1">Followers</th>
            </tr>
          </thead>
          <tbody>
            {topAgents.map((a, idx) => (
              <tr key={a.name} className="border-t border-white/5 hover:bg-purple-900/20">
                <td className="py-2 text-white">{a.name}</td>
                <td className="py-2 text-purple-200 font-bold">{a.score}</td>
                <td className="py-2 text-blue-200">{a.followers.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
