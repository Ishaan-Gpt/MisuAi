
import React from "react";
import { ChartContainer } from "./ui/chart";
import { ChartPie, TrendingUp, Timer, Workflow, BarChart, Activity } from "lucide-react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

// Example agent run data (could be fetched via API in real product)
const performanceData = [
  { date: "Mon", posts: 42, engagements: 1200, accuracy: 99 },
  { date: "Tue", posts: 38, engagements: 1500, accuracy: 99.4 },
  { date: "Wed", posts: 47, engagements: 2100, accuracy: 98.9 },
  { date: "Thu", posts: 53, engagements: 2300, accuracy: 99.7 },
  { date: "Fri", posts: 50, engagements: 1800, accuracy: 99.2 },
  { date: "Sat", posts: 46, engagements: 1780, accuracy: 99.6 },
  { date: "Sun", posts: 51, engagements: 2500, accuracy: 99.8 },
];

// Example process steps
const processSteps = [
  {
    label: "Research Trends",
    description: "Autonomous agent analyzes latest trends & audience signals.",
    icon: BarChart,
  },
  {
    label: "Content Creation",
    description: "Drafts media & text using multi-modal synthesis.",
    icon: Workflow,
  },
  {
    label: "Auto Scheduling",
    description: "Identifies optimal platforms & time slots.",
    icon: Timer,
  },
  {
    label: "Performance Optimization",
    description: "Monitors results, re-posts or boosts as needed.",
    icon: TrendingUp,
  },
  {
    label: "Human Review",
    description: "Manager option to review or approve key posts.",
    icon: Activity,
  },
];

const workLogs = [
  {
    time: "09:41 AM",
    task: "Published 7 LinkedIn posts",
    extra: "Targeted #AILeaders audience",
  },
  {
    time: "11:08 AM",
    task: "Analyzed 13K Twitter posts",
    extra: "Flagged trend: #AutoGPT",
  },
  {
    time: "2:15 PM",
    task: "Deployed viral meme image",
    extra: "4.2K impressions in 2 hrs",
  },
  {
    time: "4:06 PM",
    task: "Adjusted content plan",
    extra: "Swapped to trending topic",
  },
];

const chartConfig = {
  posts: {
    label: "Posts",
    icon: ChartPie,
    color: "#6366f1",
  },
  engagements: {
    label: "Engagements",
    icon: TrendingUp,
    color: "#10b981",
  },
  accuracy: {
    label: "Trend Accuracy (%)",
    icon: BarChart,
    color: "#f59e42",
  },
};

const AgentPerformanceDashboard = () => {
  return (
    <section 
      id="agent-dashboard"
      className="max-w-6xl mx-auto my-20 p-0 sm:px-8"
      aria-label="Agent Performance Dashboard"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Agent Performance Dashboard
      </h2>
      <div className="text-gray-400 mb-8">
        Live view of an AI agent's productivity, workflow, and results.
      </div>
      {/* Dashboard cards */}
      <div className="grid gap-8 md:grid-cols-3 mb-10">
        <div className="rounded-2xl border border-blue-900 p-6 bg-gradient-to-br from-slate-900/80 to-gray-900/80 shadow-xl">
          <div className="flex items-center gap-3 mb-1">
            <ChartPie className="text-blue-400" size={22} />
            <span className="text-gray-300">Total Posts This Week</span>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-blue-400">
            {performanceData.reduce((a, b) => a + b.posts, 0)}
          </div>
        </div>
        <div className="rounded-2xl border border-green-900 p-6 bg-gradient-to-br from-emerald-900/70 to-gray-900/80 shadow-xl">
          <div className="flex items-center gap-3 mb-1">
            <TrendingUp className="text-green-400" size={22} />
            <span className="text-gray-300">Engagements This Week</span>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-green-400">
            {performanceData.reduce((a, b) => a + b.engagements, 0).toLocaleString()}
          </div>
        </div>
        <div className="rounded-2xl border border-yellow-900 p-6 bg-gradient-to-br from-yellow-900/90 to-gray-900/80 shadow-xl">
          <div className="flex items-center gap-3 mb-1">
            <BarChart className="text-yellow-400" size={22} />
            <span className="text-gray-300">Avg Trend Accuracy</span>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-yellow-400">
            {
              (
                performanceData.reduce((a, b) => a + b.accuracy, 0) / 
                performanceData.length
              ).toFixed(2)
            }%
          </div>
        </div>
      </div>
      {/* Recharts - Performance Line Chart */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-14 shadow-2xl">
        <ChartContainer
          config={chartConfig}
          className="h-64 w-full"
        >
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip 
              contentStyle={{ background: "#18181B", border: "1px solid #27272a", color: "#fff" }} 
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="posts"
              stroke="#6366f1"
              strokeWidth={2.5}
              activeDot={{ r: 8 }}
              dot={{ r: 4, fill: "#6366f1" }}
            />
            <Line
              type="monotone"
              dataKey="engagements"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#10b981" }}
            />
            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#f59e42"
              strokeDasharray="6 5"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#f59e42" }}
            />
          </LineChart>
        </ChartContainer>
      </div>
      {/* Work log & Process */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Work Done Log */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Activity className="text-blue-400" size={20}/> Work Done (Today)
          </h3>
          <ul className="space-y-4">
            {workLogs.map((w, i) => (
              <li 
                key={i}
                className="bg-slate-900/70 border border-blue-900 px-5 py-3 rounded-lg"
              >
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>{w.time}</span>
                  <span>{w.extra}</span>
                </div>
                <div className="text-base text-white font-medium">
                  {w.task}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Process Followed */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Workflow className="text-green-400" size={20}/> Process Followed
          </h3>
          <ol className="relative border-l-2 border-blue-800 pl-6 space-y-4">
            {processSteps.map((step, idx) => (
              <li key={step.label} className="flex items-start gap-4 group">
                <div className="absolute -left-7 bg-blue-900 border border-blue-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors">
                  <step.icon className="text-blue-400" size={20}/>
                </div>
                <div>
                  <div className="font-semibold text-white">{step.label}</div>
                  <div className="text-gray-400 text-sm">{step.description}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AgentPerformanceDashboard;
