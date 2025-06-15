import React, { useState } from 'react';
import { Play, ArrowRight, CheckCircle, Zap, Brain, Sparkles } from 'lucide-react';
import AgentDeployModal from './AgentDeployModal';
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-16 overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sp-animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sp-animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sp-animate-bounce" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative sp-container">
        <div className="text-center max-w-5xl mx-auto">
          {/* Revolutionary badge */}
          <div className="inline-flex items-center sp-badge mb-8 sp-animate-fade-in bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30">
            <Brain className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Revolutionary Agentic AI • Now Live
            </span>
          </div>

          {/* Powerful headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 sp-animate-fade-in-up leading-tight">
            Deploy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Autonomous AI Agents
            </span>
            <br />
            That Dominate Social Media
          </h1>

          {/* Compelling subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto sp-animate-fade-in-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            MisuAi deploys intelligent agents that think, create, and optimize your entire social media presence autonomously. 
            <span className="text-purple-400 font-semibold"> Watch your engagement explode across LinkedIn, Instagram, TikTok, and Twitter.</span>
          </p>

          {/* Power stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 sp-animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center text-gray-300">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              <span>10x Faster Content Creation</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span>Viral Trend Prediction</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              <span>Autonomous Optimization</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sp-animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center"
              onClick={() => setModalOpen(true)}
            >
              <span className="relative z-10">Deploy Your AI Agent</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              className="group flex items-center text-lg px-8 py-4 border border-gray-600 text-gray-300 rounded-xl hover:border-purple-500 hover:text-white transition-all"
              onClick={() => toast({title: "Demo video coming soon!", description: "The AI in action preview will be available soon."})}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch AI in Action
            </button>
          </div>
          <AgentDeployModal open={modalOpen} onOpenChange={setModalOpen} />
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400 mb-16 sp-animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
              Enterprise-grade security
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
              No human intervention needed
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
              ROI guaranteed or money back
            </div>
          </div>

          {/* Revolutionary stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 sp-animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">2.8M+</div>
              <div className="text-gray-300">Posts Generated Daily</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">890%</div>
              <div className="text-gray-300">Average Engagement Boost</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300">Autonomous Operation</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">99.7%</div>
              <div className="text-gray-300">Trend Prediction Accuracy</div>
            </div>
          </div>

          {/* AI Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto sp-animate-scale-in" style={{animationDelay: '1s'}}>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="bg-gray-900/50 h-12 flex items-center px-6 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-6 text-sm text-gray-300">MisuAi Command Center</div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-purple-500/30 to-transparent rounded animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-cyan-500/30 to-transparent rounded w-3/4 animate-pulse"></div>
                    <div className="h-40 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <span className="text-purple-300 font-semibold">AI Content Generator</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-cyan-500/30 to-transparent rounded animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-500/30 to-transparent rounded w-2/3 animate-pulse"></div>
                    <div className="h-40 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                      <span className="text-cyan-300 font-semibold">Viral Trend Detector</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-green-500/30 to-transparent rounded animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-emerald-500/30 to-transparent rounded w-4/5 animate-pulse"></div>
                    <div className="h-40 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl flex items-center justify-center border border-green-500/30">
                      <span className="text-green-300 font-semibold">Engagement Optimizer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
