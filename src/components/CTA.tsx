
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const CTA = () => {
  return (
    <section id="trial" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Automate Your Instagram Sales?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop missing opportunities while you sleep. Let AI handle your DMs and fill your calendar with qualified leads.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-purple mb-2">30%</h3>
                <p className="text-gray-600">Average increase in response rate</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-blue mb-2">24/7</h3>
                <p className="text-gray-600">Always-on lead qualification</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-pink mb-2">15+</h3>
                <p className="text-gray-600">Hours saved per week</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <a href="#demo">Schedule Demo</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm">Full support included</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Questions? Contact us at support@instacloser.ai
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
