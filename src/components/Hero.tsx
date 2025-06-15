
import React from 'react';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 sp-animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 sp-animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 sp-animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative sp-container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center sp-badge mb-8 sp-animate-fade-in">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            New: AI-Powered Email Sequences
          </div>

          {/* Main headline */}
          <h1 className="sp-heading-xl text-gray-900 mb-6 sp-animate-fade-in-up">
            The{' '}
            <span className="sp-text-gradient">smartest way</span>
            <br />
            to send cold emails
          </h1>

          {/* Subtitle */}
          <p className="sp-body-lg text-gray-600 mb-8 max-w-2xl mx-auto sp-animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            MisuAi helps you send personalized cold emails that get replies. 
            Our AI writes, sends, and follows up automatically so you can focus on closing deals.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sp-animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button className="sp-btn-primary flex items-center text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="sp-btn-secondary flex items-center text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-16 sp-animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sp-animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
              <div className="text-gray-600">Emails sent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Happy customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Delivery rate</div>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative max-w-5xl mx-auto sp-animate-scale-in" style={{animationDelay: '1s'}}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 h-12 flex items-center px-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-6 text-sm text-gray-600">MisuAi Dashboard</div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">Email Campaigns</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                    <div className="h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                      <span className="text-purple-700 font-semibold">AI Analytics</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <span className="text-green-700 font-semibold">Lead Generation</span>
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
