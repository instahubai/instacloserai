
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
      {/* Cyberpunk background with grid overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 cyberpunk-bg"></div>
        <div className="absolute inset-0 cyber-grid"></div>
      </div>
      
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm z-0"></div>
      
      {/* Animated accent elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#ff00ff]/20 rounded-full blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#00f0ff]/20 rounded-full blur-3xl animate-pulse-slow z-0" style={{animationDelay: "2s"}}></div>
      
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
