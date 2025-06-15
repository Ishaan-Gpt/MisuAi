
import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, CheckCircle, Zap, Brain, Sparkles, TrendingUp, Users, Target } from 'lucide-react';
import AgentDeployModal from './AgentDeployModal';
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '2.8M+', label: 'AI Posts Generated' },
    { value: '890%', label: 'Avg Engagement Boost' },
    { value: '50K+', label: 'Active AI Agents' },
    { value: '99.7%', label: 'Trend Accuracy' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
            <Brain className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">AI Agents • Production Ready</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Deploy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse">
              AI Agents
            </span>
            <br />
            That Scale Your Influence
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Autonomous AI agents that create viral content, predict trends, and optimize engagement 
            <span className="text-blue-400 font-semibold"> across all social platforms 24/7</span>
          </p>

          {/* Animated Stats */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stats[currentStat].value}
              </div>
              <div className="text-gray-300 text-sm">{stats[currentStat].label}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => setModalOpen(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center"
            >
              <Zap className="mr-2 h-5 w-5" />
              Deploy AI Agent Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => toast({title: "Demo Available Soon", description: "Live agent demo coming in next update!"})}
              className="group flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl text-lg hover:border-blue-500 hover:text-white transition-all hover:bg-white/5"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Live Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-16">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
              No setup required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
              Deploy in 60 seconds
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
              14-day free trial
            </div>
          </div>

          {/* Live Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gray-900/80 h-14 flex items-center justify-between px-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-gray-300 font-medium">MisuAi Command Center</span>
                </div>
                <div className="flex items-center text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  5 Agents Active
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Content Generator */}
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30">
                    <div className="flex items-center mb-4">
                      <Brain className="w-6 h-6 text-blue-400 mr-2" />
                      <h3 className="text-blue-300 font-semibold">AI Content Engine</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-blue-500/30 rounded animate-pulse"></div>
                      <div className="h-2 bg-blue-500/30 rounded w-3/4 animate-pulse"></div>
                      <div className="text-xs text-blue-200">Generating LinkedIn post...</div>
                    </div>
                  </div>

                  {/* Trend Detector */}
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 text-purple-400 mr-2" />
                      <h3 className="text-purple-300 font-semibold">Viral Trend Detector</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-purple-500/30 rounded animate-pulse"></div>
                      <div className="h-2 bg-purple-500/30 rounded w-2/3 animate-pulse"></div>
                      <div className="text-xs text-purple-200">Analyzing trends...</div>
                    </div>
                  </div>

                  {/* Engagement Optimizer */}
                  <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                    <div className="flex items-center mb-4">
                      <Target className="w-6 h-6 text-green-400 mr-2" />
                      <h3 className="text-green-300 font-semibold">Engagement Optimizer</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-green-500/30 rounded animate-pulse"></div>
                      <div className="h-2 bg-green-500/30 rounded w-4/5 animate-pulse"></div>
                      <div className="text-xs text-green-200">Optimizing timing...</div>
                    </div>
                  </div>
                </div>

                {/* Live Metrics */}
                <div className="mt-6 grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">156K</div>
                    <div className="text-xs text-gray-400">Impressions Today</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">89%</div>
                    <div className="text-xs text-gray-400">Engagement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">2.3K</div>
                    <div className="text-xs text-gray-400">New Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">47</div>
                    <div className="text-xs text-gray-400">Posts Generated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AgentDeployModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default Hero;
