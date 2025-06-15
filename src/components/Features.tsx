import React, { useState } from 'react';
import { Bot, Brain, Zap, Target, TrendingUp, Users, Shield, Sparkles, Eye, Network, Cpu, Rocket, ArrowRight } from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'Autonomous AI Agents',
      description: 'Deploy self-thinking AI agents that research, create, and optimize content strategies without human intervention.',
      details: 'Our AI agents work 24/7, analyzing trends, creating content, and optimizing posts for maximum engagement across all platforms.',
      color: 'from-purple-500 to-pink-500',
      demo: 'Agent creates 47 posts while you sleep'
    },
    {
      icon: Eye,
      title: 'Viral Trend Prediction',
      description: 'Our AI predicts viral trends 48-72 hours before they explode, positioning your content to ride the wave.',
      details: 'Advanced machine learning algorithms analyze millions of data points to identify emerging trends with 99.7% accuracy.',
      color: 'from-cyan-500 to-blue-500',
      demo: 'Predicted #AIRevolution trend 3 days early'
    },
    {
      icon: Cpu,
      title: 'Multi-Modal AI Brain',
      description: 'Process video, audio, images, and text simultaneously to create cohesive cross-platform campaigns.',
      details: 'Single AI brain understands context across all content types, ensuring consistent messaging and brand voice.',
      color: 'from-green-500 to-emerald-500',
      demo: 'Processes 10K+ content pieces per hour'
    },
    {
      icon: Target,
      title: 'Personality Cloning',
      description: 'Train AI to perfectly mimic your writing style, humor, and professional voice across all platforms.',
      details: 'Advanced neural networks learn your unique voice patterns, ensuring authentic content that sounds exactly like you.',
      color: 'from-orange-500 to-red-500',
      demo: '95% of followers can\'t tell the difference'
    },
    {
      icon: Network,
      title: 'Network Effect Amplification',
      description: 'AI agents collaborate with other agents to create viral content cascades across social networks.',
      details: 'Intelligent agent coordination creates powerful network effects, amplifying reach through strategic collaboration.',
      color: 'from-indigo-500 to-purple-500',
      demo: 'Coordinated with 1,247 other agents last week'
    },
    {
      icon: Rocket,
      title: 'Growth Acceleration',
      description: 'Automated follower acquisition and community building that scales your influence exponentially.',
      details: 'Smart growth algorithms identify and engage with your ideal audience, building genuine connections at scale.',
      color: 'from-emerald-500 to-teal-500',
      demo: 'Average 890% engagement increase'
    }
  ];

  const ActiveIcon = features[activeFeature].icon;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Revolutionary AI Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next-Generation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"> AI Arsenal</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Deploy autonomous AI agents that work smarter, not harder. Every feature is designed 
            to operate independently while delivering unprecedented results.
          </p>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/10 border-blue-500/50 shadow-lg' 
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    } transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                        isActive ? 'text-blue-400' : 'text-white group-hover:text-blue-300'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {isActive && (
                        <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                          <p className="text-blue-300 text-sm">{feature.details}</p>
                          <div className="flex items-center mt-2 text-blue-400 text-xs font-medium">
                            <Zap className="w-3 h-3 mr-1" />
                            {feature.demo}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <ArrowRight className={`w-5 h-5 transition-all ${
                      isActive ? 'text-blue-400 translate-x-1' : 'text-gray-500 group-hover:text-gray-400 group-hover:translate-x-0.5'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Demo Visualization */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} items-center justify-center mb-4`}>
                  <ActiveIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-300">
                  {features[activeFeature].details}
                </p>
              </div>

              {/* Simulated Dashboard */}
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300 text-sm">Live Performance</span>
                    <div className="flex items-center text-green-400 text-xs">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                      Active
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-white">2.3K</div>
                      <div className="text-xs text-gray-400">Engagements</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">89%</div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded animate-pulse"></div>
                  <div className="h-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded w-3/4 animate-pulse"></div>
                  <div className="h-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded w-1/2 animate-pulse"></div>
                </div>

                <div className="text-center">
                  <div className="text-blue-300 text-sm font-medium">
                    {features[activeFeature].demo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                50K+
              </div>
              <div className="text-gray-400 text-sm">AI Agents Deployed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                2.8M+
              </div>
              <div className="text-gray-400 text-sm">Posts Generated Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                890%
              </div>
              <div className="text-gray-400 text-sm">Avg Engagement Boost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                99.7%
              </div>
              <div className="text-gray-400 text-sm">Trend Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
