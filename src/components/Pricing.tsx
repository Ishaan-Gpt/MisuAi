
import React, { useState } from 'react';
import { Check, Star, Zap, Brain, Rocket, Crown } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter Agent',
      monthlyPrice: 97,
      annualPrice: 77,
      description: 'Perfect for solo creators and small businesses',
      features: [
        '1 Autonomous AI Agent',
        '10K AI-generated posts/month',
        'Basic trend prediction',
        'LinkedIn + Instagram automation',
        'Real-time analytics',
        'Community support'
      ],
      popular: false,
      buttonText: 'Deploy Starter Agent',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Growth Empire',
      monthlyPrice: 297,
      annualPrice: 237,
      description: 'For serious entrepreneurs and growing teams',
      features: [
        '5 Autonomous AI Agents',
        'Unlimited AI content generation',
        'Advanced viral trend prediction',
        'All platforms (LinkedIn, IG, TikTok, Twitter)',
        'Personality cloning technology',
        'A/B testing automation',
        'Priority support',
        'Custom integrations'
      ],
      popular: true,
      buttonText: 'Launch Growth Empire',
      icon: Rocket,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Domination Suite',
      monthlyPrice: 797,
      annualPrice: 597,
      description: 'For enterprises and influencer agencies',
      features: [
        'Unlimited AI Agents',
        'Custom AI model training',
        'Predictive trend analysis (72hr forecast)',
        'Network effect amplification',
        'White-label solutions',
        'Dedicated success manager',
        'SLA guarantee',
        'Enterprise security',
        'Custom onboarding'
      ],
      popular: false,
      buttonText: 'Claim Domination',
      icon: Crown,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="sp-section bg-gradient-to-b from-gray-900 to-slate-900" id="pricing">
      <div className="sp-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center sp-badge mb-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30">
            <Brain className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Choose Your AI Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Invest in Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"> Digital Domination</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Deploy autonomous AI agents that work 24/7 to explode your social media presence. 
            Choose the plan that matches your ambition.
          </p>

          {/* ROI Calculator */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 font-medium">Average ROI: 890% in first 90 days</span>
          </div>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                isAnnual
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-3xl border transition-all duration-500 hover:scale-105 sp-animate-scale-in ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-purple-900/50 to-pink-900/50 border-purple-500/50 shadow-2xl scale-105' 
                    : 'bg-white/5 backdrop-blur-sm border-white/20 hover:border-purple-500/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">${price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-green-400 font-medium">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'
                      : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:border-purple-500/50 hover:bg-white/20'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise note */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Custom AI Solutions?
            </h3>
            <p className="text-gray-300 mb-6">
              For enterprises with unique requirements, we offer custom AI agent development, 
              private cloud deployment, and dedicated infrastructure.
            </p>
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              Contact Enterprise Team
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-gray-400">
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-2" />
            Enterprise-grade security
          </div>
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Instant deployment
          </div>
          <div className="flex items-center">
            <Check className="w-4 h-4 mr-2" />
            30-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
