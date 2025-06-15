import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AgentPerformanceDashboard from "@/components/AgentPerformanceDashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AgentPerformanceDashboard />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
