
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, X } from 'lucide-react';

const Header = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const openCalendly = () => {
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <header className="w-full py-4 px-6 md:px-8 lg:px-12 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-instagram-gradient flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-instagram-gradient"></div>
            </div>
          </div>
          <span className="font-bold text-lg">InstaCloser AI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
        </nav>
        
        <Button onClick={openCalendly} className="flex items-center gap-2">
          <Calendar size={16} />
          <span>Start Free Trial</span>
        </Button>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] relative">
            <button 
              onClick={closeCalendly}
              className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <iframe
              src="https://calendly.com/ledefiantones"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule your free consultation"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
