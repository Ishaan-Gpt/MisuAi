import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { BackButton } from "@/components/ui/BackButton";
import { Clock, BarChart2, Rocket, UserCircle2, Award } from "lucide-react";

// Dummy history data
const historyData = [
  { time: "Today", event: "Agent 'Elara' deployed", status: "Success", iconColor: "text-green-400" },
  { time: "Yesterday", event: "Profile updated", status: "Info", iconColor: "text-blue-400" },
  { time: "2 days ago", event: "Agent 'Astra' reached 5k followers", status: "Achievement", iconColor: "text-purple-400" },
  { time: "3 days ago", event: "Settings changed", status: "Info", iconColor: "text-blue-400" },
];

const stats = [
  { label: "Total Events", value: 131, icon: <BarChart2 className="text-purple-400"/> },
  { label: "Agent Deployments", value: 13, icon: <Rocket className="text-cyan-400"/> },
  { label: "Profile Changes", value: 29, icon: <UserCircle2 className="text-blue-400"/> },
  { label: "Achievements", value: 7, icon: <Award className="text-lime-400"/> }
];

const History = () => (
  <DashboardLayout
    title="History"
    subtitle={<span className="font-medium text-purple-300">Chronological log of all your actions, deployments, and achievements.</span>}
  >
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
      {stats.map((s, i) => (
        <div key={i} className="bg-gradient-to-tr from-purple-900 to-slate-950 border border-purple-600/30 rounded-2xl px-5 py-8 flex flex-col items-center shadow-lg">
          {s.icon}
          <div className="text-3xl font-extrabold mt-2 mb-1 text-white">{s.value}</div>
          <div className="text-purple-200 text-base">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-gray-200 min-h-[300px] shadow-lg animate-fade-in">
      <ul className="divide-y divide-purple-900/40">
        {historyData.map((h, idx) => (
          <li key={idx} className="flex items-center gap-4 py-4 px-2 hover:bg-slate-900/50 rounded transition">
            <Clock className={`w-6 h-6 ${h.iconColor}`} />
            <div className="flex-1">
              <div className="text-white font-medium">{h.event}</div>
              <div className="text-xs text-gray-400">{h.time}</div>
            </div>
            <span className="px-3 py-1 rounded bg-slate-900/60 text-xs font-semibold text-purple-300">{h.status}</span>
          </li>
        ))}
      </ul>
    </div>
  </DashboardLayout>
);
export default History;
