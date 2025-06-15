import React from "react";
import { Linkedin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const platforms = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    description: "Expand your professional reach with AI-powered content distribution and networking automation on LinkedIn.",
    color: "from-blue-700 to-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Automate Reels, Stories, and Posts across Instagram for exponential follower growth.",
    color: "from-pink-500 to-yellow-400",
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    description: "Go viral with advanced AI scheduling, trend prediction, and personality-driven threads.",
    color: "from-sky-600 to-black",
  },
  {
    name: "YouTube",
    icon: Youtube,
    description: "Let AI agents produce and optimize video content and scripts for your channel.",
    color: "from-red-600 to-yellow-400",
  },
  {
    name: "Facebook",
    icon: Facebook,
    description: "Automate posting, moderate communities, and manage ad content for massive reach.",
    color: "from-blue-800 to-blue-400",
  },
];

const Platforms = () => (
  <section id="platforms" className="py-20 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-950 border-y border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium mb-4">
          Supported Platforms
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          AI Power<br className="hidden md:inline" />On Every Platform
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Launch AI agents across every major social & content network—let them automate and optimize your growth everywhere you need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {platforms.map(({ name, icon: Icon, description, color }) => (
          <div
            key={name}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition-transform duration-200 group"
          >
            <div className={`w-14 h-14 mb-3 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow`}>
              <Icon className="w-7 h-7 text-white drop-shadow" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Platforms;
