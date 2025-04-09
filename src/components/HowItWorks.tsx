
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Your Instagram",
      description: "Link your Instagram business account through our secure dashboard in just a few clicks."
    },
    {
      number: 2,
      title: "Train Your AI Assistant",
      description: "Upload your course details, FAQs, and brand voice to customize your automated responses."
    },
    {
      number: 3,
      title: "Let AI Handle Your DMs",
      description: "Our AI responds to customer inquiries instantly, qualifying leads and booking sales calls."
    },
    {
      number: 4,
      title: "Close More Sales",
      description: "Show up to pre-qualified sales calls with leads who are already interested in your course."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our platform automates your Instagram sales pipeline from initial inquiry to booked call, with no coding required.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <StepCard 
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <Button asChild className="flex items-center gap-2">
                <a href="#trial">
                  Start Free Trial <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right content */}
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20"></div>
              <div className="bg-white p-6 rounded-xl border">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="font-bold">Instagram DM Analytics</h3>
                  <span className="text-xs bg-brand-purple/10 text-brand-purple px-2 py-1 rounded-full">Last 7 days</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Total Messages</span>
                      <span className="font-bold">178</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-brand-purple h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">AI Responses</span>
                      <span className="font-bold">152</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-brand-blue h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Calls Booked</span>
                      <span className="font-bold">23</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-gradient-to-r from-brand-purple to-brand-blue h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Sales Closed</span>
                      <span className="font-bold">14</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-brand-pink h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Conversion Rate</span>
                    <span className="text-green-600 font-bold">7.9%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">2.3% higher than industry average</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
