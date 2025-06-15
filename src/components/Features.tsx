
import React from 'react';
import { Bot, Target, BarChart3, Zap, Users, Shield, Mail, Sparkles, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Email Writer',
      description: 'Our AI writes personalized emails that sound human and get replies. No templates needed.',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Find and verify email addresses automatically. Target the right prospects every time.',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track opens, clicks, and replies in real-time. See which emails perform best.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Auto Follow-ups',
      description: 'Set up smart follow-up sequences that adapt based on prospect behavior.',
      color: 'yellow'
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize your prospects and track every interaction in one place.',
      color: 'red'
    },
    {
      icon: Shield,
      title: 'Deliverability Tools',
      description: 'Advanced spam protection and email warming to ensure inbox delivery.',
      color: 'indigo'
    },
    {
      icon: Mail,
      title: 'Email Sequences',
      description: 'Create automated email campaigns that nurture leads and close deals.',
      color: 'pink'
    },
    {
      icon: Sparkles,
      title: 'A/B Testing',
      description: 'Test different subject lines and content to optimize your campaigns.',
      color: 'cyan'
    },
    {
      icon: TrendingUp,
      title: 'Performance Insights',
      description: 'Get actionable insights to improve your cold email strategy.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      pink: 'bg-pink-100 text-pink-600',
      cyan: 'bg-cyan-100 text-cyan-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="sp-section bg-white" id="features">
      <div className="sp-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="sp-badge mb-4">
            Everything you need
          </div>
          <h2 className="sp-heading-lg text-gray-900 mb-4">
            Powerful features for
            <span className="sp-text-gradient"> modern sales teams</span>
          </h2>
          <p className="sp-body-lg text-gray-600 max-w-3xl mx-auto">
            MisuAi combines AI-powered email writing with advanced automation tools
            to help you send better cold emails and get more replies.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="sp-card-feature sp-animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`sp-icon-wrapper ${getColorClasses(feature.color)} mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="sp-heading-md text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="sp-body text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            And 50+ more features to supercharge your sales
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
