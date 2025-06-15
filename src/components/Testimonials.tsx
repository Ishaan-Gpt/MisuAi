
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Sales Director',
      company: 'TechCorp',
      content: 'MisuAi increased our reply rate by 340%. The AI-generated emails sound so natural, prospects think they\'re personally written.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      title: 'Founder',
      company: 'StartupXYZ',
      content: 'We went from 2% to 15% reply rate in just one month. MisuAi is a game-changer for cold outreach.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Head of Growth',
      company: 'ScaleUp Inc',
      content: 'The automation features saved us 20 hours per week while improving our results. Absolutely worth it.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Park',
      title: 'Business Development',
      company: 'Enterprise Solutions',
      content: 'MisuAi helped us scale from 100 to 10,000 prospects without losing personalization. Incredible platform.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      title: 'Sales Manager',
      company: 'GrowthCo',
      content: 'The A/B testing feature helped us optimize our campaigns. We now know exactly what works.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      title: 'VP Sales',
      company: 'InnovateTech',
      content: 'Best cold email tool I\'ve used in 10 years. The deliverability is outstanding.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const stats = [
    { value: '10M+', label: 'Emails sent' },
    { value: '340%', label: 'Average reply rate increase' },
    { value: '50K+', label: 'Happy customers' },
    { value: '99.5%', label: 'Uptime guarantee' }
  ];

  return (
    <section className="sp-section bg-white" id="testimonials">
      <div className="sp-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="sp-badge mb-4">
            Customer success
          </div>
          <h2 className="sp-heading-lg text-gray-900 mb-4">
            Loved by
            <span className="sp-text-gradient"> sales teams worldwide</span>
          </h2>
          <p className="sp-body-lg text-gray-600 max-w-3xl mx-auto">
            See how companies like yours are using MisuAi to transform their cold email outreach
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center sp-animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 sp-text-gradient">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="sp-testimonial-card sp-animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="sp-heading-md text-gray-900 mb-4">
              Ready to join them?
            </h3>
            <p className="sp-body text-gray-600 mb-6">
              Start your free trial today and see why MisuAi is the #1 choice for cold email outreach
            </p>
            <button className="sp-btn-primary text-lg px-8 py-4">
              Start Free Trial - No Credit Card Required
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
