
import React from "react";
import { Users, Edit, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    id: "agent-1",
    name: "MarketBot",
    status: "Active",
    platforms: ["Twitter", "LinkedIn"],
    postsThisWeek: 42,
    accuracy: 99.2,
  },
  {
    id: "agent-2",
    name: "GrowthAI",
    status: "Idle",
    platforms: ["Instagram"],
    postsThisWeek: 18,
    accuracy: 98.6,
  },
  {
    id: "agent-3",
    name: "BrandOptimizer",
    status: "Active",
    platforms: ["Facebook", "TikTok"],
    postsThisWeek: 27,
    accuracy: 99.7,
  },
];

export default function AgentManager() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <Users className="text-blue-400" size={22} />
        <h2 className="text-2xl font-bold text-white">Manage Agents</h2>
      </div>
      <div className="bg-slate-900/80 border border-blue-900 shadow-lg rounded-2xl">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Platforms</th>
              <th className="px-5 py-3">Posts This Week</th>
              <th className="px-5 py-3">Trend Accuracy</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map(agent => (
              <tr key={agent.id} className="border-t border-blue-950 hover:bg-white/5 transition">
                <td className="px-5 py-3 text-white font-semibold">{agent.name}</td>
                <td className="px-5 py-3">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${agent.status === "Active" ? "bg-green-600/70 text-white" : "bg-yellow-600/40 text-yellow-200"}`}>
                    {agent.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-blue-300">
                  {agent.platforms.join(", ")}
                </td>
                <td className="px-5 py-3">{agent.postsThisWeek}</td>
                <td className="px-5 py-3">{agent.accuracy}%</td>
                <td className="px-5 py-3 flex gap-2">
                  <Button size="sm" variant="secondary" className="py-1 px-2 flex items-center gap-1">
                    <Eye size={14} />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="py-1 px-2 flex items-center gap-1">
                    <Edit size={14} />
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* In a real app, add agent creation/deletion here */}
      </div>
    </section>
  );
}
