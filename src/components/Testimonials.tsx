
import React from 'react';
import { Star, Quote, TrendingUp, Users, Zap, Brain } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Chen',
      title: 'CEO & Founder',
      company: 'TechVenture AI',
      content: 'MisuAi\'s autonomous agents generated 2.3M impressions in our first month. The AI literally predicted a viral trend 3 days before it exploded - we rode that wave to 50K new followers.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      metrics: { followers: '+47K', engagement: '+890%', revenue: '+$340K' },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Sarah Martinez',
      title: 'Head of Growth',
      company: 'Quantum Dynamics',
      content: 'I was skeptical about AI agents until MisuAi. Now our LinkedIn engagement is through the roof. The personality cloning is so accurate, people think I\'m personally responding 24/7.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      metrics: { followers: '+23K', engagement: '+650%', revenue: '+$180K' },
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Marcus Johnson',
      title: 'Digital Marketing Director',
      company: 'InnovateCorp',
      content: 'The multi-platform coordination is insane. Our AI agents create cohesive campaigns across Instagram, TikTok, LinkedIn, and Twitter simultaneously. It\'s like having a 50-person team.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      metrics: { followers: '+156K', engagement: '+1200%', revenue: '+$650K' },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Elena Rodriguez',
      title: 'Influencer & Entrepreneur',
      company: 'Personal Brand',
      content: 'MisuAi transformed my entire social presence. The AI agents work while I sleep, creating content that perfectly matches my voice. I went from 10K to 500K followers in 4 months.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      metrics: { followers: '+490K', engagement: '+2100%', revenue: '+$850K' },
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'David Kim',
      title: 'Startup Founder',
      company: 'NextGen Solutions',
      content: 'The network effect amplification is revolutionary. Our AI agents collaborate with other users\' agents to create viral cascades. It\'s like having an army of content creators.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      metrics: { followers: '+78K', engagement: '+940%', revenue: '+$420K' },
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Rachel Thompson',
      title: 'VP of Marketing',
      company: 'ScaleUp Ventures',
      content: 'Best investment we\'ve ever made. The ROI is absolutely insane - we\'ve generated over $2M in revenue directly attributed to MisuAi in just 6 months. The AI never stops working.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      metrics: { followers: '+234K', engagement: '+1500%', revenue: '+$2.1M' },
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { 
      value: '2.8M+', 
      label: 'Posts Generated Daily',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      value: '890%', 
      label: 'Average Engagement Boost',
      icon: TrendingUp,
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      value: '50K+', 
      label: 'AI Agents Deployed',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      value: '99.7%', 
      label: 'Trend Prediction Accuracy',
      icon: Zap,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="sp-section bg-gradient-to-b from-slate-900 to-gray-900" id="testimonials">
      <div className="sp-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center sp-badge mb-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30">
            <Star className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Entrepreneurs Are
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"> Dominating</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See how visionary entrepreneurs and companies are using MisuAi's autonomous agents 
            to explode their social media presence and generate millions in revenue
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group sp-animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 sp-animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-black/20 border border-white/10">
                <div className="text-center">
                  <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient}`}>
                    {testimonial.metrics.followers}
                  </div>
                  <div className="text-xs text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient}`}>
                    {testimonial.metrics.engagement}
                  </div>
                  <div className="text-xs text-gray-400">Engagement</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient}`}>
                    {testimonial.metrics.revenue}
                  </div>
                  <div className="text-xs text-gray-400">Revenue</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center relative z-10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white/20"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}</div>
                  <div className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient}`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <Brain className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join the AI Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Deploy your autonomous AI agents today and watch your social media presence explode. 
              The future of content creation is here, and it's autonomous.
            </p>
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              Deploy Your AI Army - Start Free Trial
              <Zap className="inline-block w-5 h-5 ml-2 group-hover:animate-pulse" />
            </button>
            <div className="flex justify-center items-center gap-6 mt-6 text-sm text-gray-400">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Deploy in 60 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
