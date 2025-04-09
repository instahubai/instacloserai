
import React from 'react';
import { Bot, Search, CalendarClock, LineChart, ShieldCheck, Zap } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="feature-card">
      <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Bot size={24} className="text-brand-purple" />,
      title: "AI-Powered Responses",
      description: "Our AI learns your voice and responds to common questions instantly, giving personalized replies 24/7."
    },
    {
      icon: <Search size={24} className="text-brand-blue" />,
      title: "Profile Auditing",
      description: "Get an AI analysis of your Instagram profile with actionable advice to improve conversion rates."
    },
    {
      icon: <CalendarClock size={24} className="text-brand-pink" />,
      title: "Automated Booking",
      description: "Convert interested leads into scheduled sales calls without any manual work."
    },
    {
      icon: <LineChart size={24} className="text-brand-purple" />,
      title: "Conversion Analytics",
      description: "Track which conversations lead to sales and optimize your messaging for better results."
    },
    {
      icon: <ShieldCheck size={24} className="text-brand-blue" />,
      title: "Instagram Compliant",
      description: "Works within Instagram's terms of service to ensure your account stays safe."
    },
    {
      icon: <Zap size={24} className="text-brand-orange" />,
      title: "Quick Setup",
      description: "Get started in minutes with our guided onboarding process and templates."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All the Tools You Need</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Convert your Instagram audience into paying customers while you focus on creating great content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
