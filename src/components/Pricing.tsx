
import React, { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 39,
      annualPrice: 29,
      description: 'Perfect for individuals and small teams',
      features: [
        '1,000 emails per month',
        'AI email writer',
        'Basic templates',
        'Email finder',
        'Basic analytics',
        'Email support'
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      color: 'gray'
    },
    {
      name: 'Professional',
      monthlyPrice: 99,
      annualPrice: 79,
      description: 'Best for growing sales teams',
      features: [
        '5,000 emails per month',
        'Advanced AI writer',
        'Smart sequences',
        'A/B testing',
        'Advanced analytics',
        'Integrations',
        'Priority support',
        'Team collaboration'
      ],
      popular: true,
      buttonText: 'Start Free Trial',
      color: 'blue'
    },
    {
      name: 'Enterprise',
      monthlyPrice: 199,
      annualPrice: 159,
      description: 'For large organizations',
      features: [
        'Unlimited emails',
        'Custom AI training',
        'Advanced automation',
        'White-label options',
        'Custom integrations',
        'Dedicated manager',
        'SLA guarantee',
        'Custom onboarding'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      color: 'purple'
    }
  ];

  return (
    <section className="sp-section bg-gray-50" id="pricing">
      <div className="sp-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="sp-badge mb-4">
            Simple pricing
          </div>
          <h2 className="sp-heading-lg text-gray-900 mb-4">
            Choose the perfect plan for
            <span className="sp-text-gradient"> your business</span>
          </h2>
          <p className="sp-body-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start free, upgrade when you need more. All plans include a 14-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isAnnual
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isAnnual
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={index}
                className={`sp-pricing-card ${plan.popular ? 'popular' : ''} sp-animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="sp-heading-md text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">${price}</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-green-600 font-medium">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'sp-btn-primary'
                      : 'sp-btn-secondary'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include 24/7 support and a 30-day money-back guarantee
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Zap className="w-4 h-4 mr-2" />
            Upgrade, downgrade, or cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
