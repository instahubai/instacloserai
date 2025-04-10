
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
    <div className="flex flex-col min-h-screen">
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
  );
};

export default Index;
