
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { BackButton } from "@/components/ui/BackButton";
import { Clock } from "lucide-react";

// Dummy history data
const historyData = [
  { time: "Today", event: "Agent 'Elara' deployed", status: "Success", iconColor: "text-green-400" },
  { time: "Yesterday", event: "Profile updated", status: "Info", iconColor: "text-blue-400" },
  { time: "2 days ago", event: "Agent 'Astra' reached 5k followers", status: "Achievement", iconColor: "text-purple-400" },
  { time: "3 days ago", event: "Settings changed", status: "Info", iconColor: "text-blue-400" },
];

const History = () => (
  <DashboardLayout
    title="History"
    subtitle="Review a chronological log of your actions, deployments, and updates."
  >
    <BackButton />
    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-gray-200 min-h-[300px] shadow animate-fade-in">
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
