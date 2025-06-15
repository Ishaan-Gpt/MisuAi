
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'MisuAi has completely transformed our email marketing. Our open rates increased by 340% and conversions by 220% in just 3 months. The AI-powered content suggestions are incredibly accurate.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      title: 'E-commerce Manager',
      company: 'RetailPro',
      content: 'The automation features saved us 15 hours per week while improving our results. The smart segmentation helped us reach the right customers with personalized messages.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Growth Lead',
      company: 'StartupXYZ',
      content: 'As a startup, we needed something powerful yet affordable. MisuAi delivered beyond expectations. The analytics insights helped us understand our audience like never before.',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'David Thompson',
      title: 'Marketing VP',
      company: 'Enterprise Corp',
      content: 'We switched from our previous platform and saw immediate improvements. The AI optimization continuously learns and improves our campaigns automatically.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Lisa Park',
      title: 'Digital Marketing Specialist',
      company: 'Creative Agency',
      content: 'The template customization and AI content generation features are game-changers. We can create professional campaigns in minutes instead of hours.',
      rating: 5,
      avatar: 'LP'
    },
    {
      name: 'James Wilson',
      title: 'Founder',
      company: 'InnovateCo',
      content: 'MisuAi helped us scale from 1,000 to 50,000 subscribers while maintaining high engagement rates. The platform grows with your business seamlessly.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> 50,000+ Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about their success with MisuAi
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">340%</div>
            <div className="text-gray-600">Average Open Rate Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">220%</div>
            <div className="text-gray-600">Conversion Rate Boost</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15hrs</div>
            <div className="text-gray-600">Time Saved Per Week</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-purple-600 mb-4 opacity-60" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join thousands of successful businesses
            </h3>
            <p className="text-gray-600 mb-6">
              Start your free trial today and see why MisuAi is the #1 choice for email marketing
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
              Start Free Trial - No Credit Card Required
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
