
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      {/* AgentPerformanceDashboard has moved to DeployedAgents page */}
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
