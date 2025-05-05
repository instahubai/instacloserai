
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import IntegrationOptions from '@/components/IntegrationOptions';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-fixed relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm z-0"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 cyberpunk-bg animate-pulse-slow"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <IntegrationOptions />
          <CTA />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
