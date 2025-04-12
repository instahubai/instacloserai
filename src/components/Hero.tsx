
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Instagram, Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden relative hero-gradient">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
              Turn Instagram DMs into Course Sales
              <span className="gradient-text"> Automatically.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Let our AI audit your profile, reply to DMs, and book sales calls while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg bg-primary hover:bg-primary/90">
                <a href="#trial" className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg border-primary text-primary hover:bg-primary/10">
                <a href="#demo" className="flex items-center gap-2">
                  Watch Demo
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="User"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="User"
                />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">1,000+</span> course creators trust InstaCloser AI
              </p>
            </div>
          </div>
          
          {/* Right content - Floating Messages */}
          <div className="flex-1 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-brand-purple/10 to-transparent rounded-full opacity-30"></div>
            
            {/* Instagram DM */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-4 max-w-xs animate-float">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-instagram-gradient"></div>
                <div>
                  <p className="text-sm font-medium">potential_student</p>
                  <p className="text-xs text-gray-500">via Instagram</p>
                </div>
              </div>
              <p className="text-sm mb-2">Hey, I saw your course. How does it work?</p>
              <div className="flex justify-end">
                <Instagram size={16} className="text-brand-purple" />
              </div>
            </div>
            
            {/* AI Response */}
            <div className="bg-gray-100 rounded-xl shadow-lg p-4 mb-4 ml-12 max-w-xs animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-teal flex items-center justify-center text-white">
                  <span className="text-xs font-bold">AI</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Your AI Assistant</p>
                  <p className="text-xs text-gray-500">Automated Response</p>
                </div>
              </div>
              <p className="text-sm mb-2">Thanks for your interest! Our 8-week program helps you master digital marketing. Would you like to schedule a call to learn more?</p>
              <div className="flex justify-end">
                <MessageSquare size={16} className="text-brand-purple" />
              </div>
            </div>
            
            {/* Calendar Booking */}
            <div className="bg-white rounded-xl shadow-lg p-4 ml-6 max-w-xs animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-teal to-brand-purple"></div>
                <div>
                  <p className="text-sm font-medium">Calendar Booking</p>
                  <p className="text-xs text-gray-500">Sales Call</p>
                </div>
              </div>
              <p className="text-sm mb-2">Sales call with potential_student scheduled for tomorrow at 2:00 PM</p>
              <div className="flex justify-end">
                <Calendar size={16} className="text-brand-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
