
import React from 'react';
import { Bot, Brain, Zap, Target, TrendingUp, Users, Shield, Sparkles, Eye, Network, Cpu, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Autonomous AI Agents',
      description: 'Deploy self-thinking AI agents that research, create, and optimize content strategies without human intervention.',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Viral Trend Prediction',
      description: 'Our AI predicts viral trends 48-72 hours before they explode, positioning your content to ride the wave.',
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Cpu,
      title: 'Multi-Modal AI Brain',
      description: 'Process video, audio, images, and text simultaneously to create cohesive cross-platform campaigns.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Personality Cloning',
      description: 'Train AI to perfectly mimic your writing style, humor, and professional voice across all platforms.',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Real-Time Optimization',
      description: 'Continuously test thousands of content variations and optimize performance in real-time.',
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'Network Effect Amplification',
      description: 'AI agents collaborate with other agents to create viral content cascades across social networks.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Engagement Multiplication',
      description: 'Advanced algorithms that exponentially increase likes, shares, and comments through strategic timing.',
      color: 'rose',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Brand Safety AI',
      description: 'Intelligent content filtering that protects your brand while maximizing authentic engagement.',
      color: 'slate',
      gradient: 'from-slate-500 to-gray-500'
    },
    {
      icon: Rocket,
      title: 'Growth Acceleration',
      description: 'Automated follower acquisition and community building that scales your influence exponentially.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="sp-section bg-gradient-to-b from-slate-900 to-gray-900" id="features">
      <div className="sp-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center sp-badge mb-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30">
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Revolutionary Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next-Generation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"> AI Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            MisuAi combines cutting-edge artificial intelligence with autonomous agents 
            to revolutionize how brands dominate social media. Every feature is designed 
            to operate without human intervention while delivering unprecedented results.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 sp-animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-500/50 group-hover:to-cyan-500/50 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-purple-300">
            <Brain className="w-5 h-5 mr-3" />
            <span className="font-medium">And 50+ more autonomous AI capabilities to dominate every platform</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
