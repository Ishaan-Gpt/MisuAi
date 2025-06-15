import React, { useEffect, useState } from "react";
import { Users, TrendingUp, Brain, Target, Instagram, Linkedin, Twitter, Youtube, Facebook, Loader2, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const personaIcons: Record<string, any> = {
  "personal-brand": Users,
  "growth-marketer": TrendingUp,
  "ai-influencer": Brain,
  "enterprise": Target,
};

const platformIcons: Record<string, any> = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  facebook: Facebook,
};

const onboardingStages = [
  {
    label: "Analyzing niche & audience",
    icon: Loader2,
    duration: 10, // seconds (simulated)
  },
  {
    label: "Generating content",
    icon: Rocket,
    duration: 10, // seconds
  },
  {
    label: "First posts live",
    icon: Rocket,
    duration: 10, // seconds
  },
  {
    label: "Performance updates incoming",
    icon: Rocket,
    duration: 10,
  }
];

const getProgressStage = (createdAt: number) => {
  const now = Date.now();
  const elapsed = Math.floor((now - createdAt) / 1000);
  let accum = 0;
  for (let i = 0; i < onboardingStages.length; i++) {
    accum += onboardingStages[i].duration;
    if (elapsed < accum) return { stage: i, progress: (elapsed - (accum - onboardingStages[i].duration)) / onboardingStages[i].duration };
  }
  return { stage: onboardingStages.length - 1, progress: 1 };
};

interface DeployedAgentsProps {
  source?: "home" | "page";
}

/**
 * DeployedAgents: Renders deployed agents.
 * - If `source` is "home", renders section.
 * - If `source` is "page", renders for inside a page.
 */
const DeployedAgents: React.FC<DeployedAgentsProps> = ({ source = "home" }) => {
  const [agents, setAgents] = React.useState<any[]>([]);

  React.useEffect(() => {
    const agentsRaw = localStorage.getItem("deployedAgents");
    if (agentsRaw) setAgents(JSON.parse(agentsRaw));
    // Listen for deployments from other tabs/windows
    const handler = () => {
      const refreshed = localStorage.getItem("deployedAgents");
      setAgents(refreshed ? JSON.parse(refreshed) : []);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  React.useEffect(() => {
    // Poll every 2s to update progress
    const interval = setInterval(() => {
      setAgents((prev) => [...prev]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!agents.length) {
    return (
      <div className="text-gray-400 text-center py-8">
        No deployed agents found.
      </div>
    );
  }

  return (
    <div className={source === "home"
      ? "py-12 bg-gradient-to-b from-slate-950 to-gray-900 border-t border-white/10"
      : ""}
      aria-labelledby="deployed-heading"
    >
      <div className={source === "page" ? "" : "max-w-3xl mx-auto px-4 sm:px-6"}>
        <div className="bg-white/5 border border-white/10 rounded-3xl shadow-lg animate-fade-in">
          <div className="flex flex-col gap-1 px-7 pt-7">
            <div id="deployed-heading" className="text-2xl font-bold text-white flex items-center gap-2 pb-1">
              <span className="w-7 h-7 rounded-full bg-purple-400/20 flex items-center justify-center">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-purple-400"><path d="M2 20h.01M7 20v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M17 20h.01M12 15v-2.5m0 0c-1.1 0-2-.9-2-2V7a2 2 0 0 1 2-2c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Deployed Agents
            </div>
            <p className="text-gray-300 text-sm">
              Your recently deployed agents and their statuses.
            </p>
          </div>
          <div className="pt-1 flex flex-col gap-5 px-7 pb-7">
            {agents.slice(0).reverse().map((agent) => {
              const PersonaIcon = personaIcons[agent.persona] || Users;
              const createdAt = agent.createdAt || Date.now();
              const { stage, progress } = getProgressStage(createdAt);
              return (
                <div
                  key={agent.agentName + agent.createdAt}
                  className="border border-white/10 rounded-xl p-5 my-2 bg-black/20"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <PersonaIcon className="w-8 h-8 text-blue-400" aria-label={agent.persona} />
                    <div>
                      <div className="font-semibold text-white text-lg">{agent.agentName}</div>
                      <div className="text-gray-400 text-sm">
                        Persona: <span className="capitalize">{agent.persona.replace("-", " ")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {agent.platforms.map((platform: string) => {
                      const PlatformIcon = platformIcons[platform];
                      return (
                        <div key={platform}>
                          <PlatformIcon className="w-5 h-5 text-purple-200" aria-label={platform} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mb-2">
                    <span className="text-blue-300 text-xs font-medium uppercase tracking-widest">
                      Status: {onboardingStages[stage].label}
                    </span>
                  </div>
                  <Progress value={progress * 100} className="mb-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployedAgents;
