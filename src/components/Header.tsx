
import React, { useState, useEffect } from 'react';
import { Calendar, X, Menu } from 'lucide-react';

const Header = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openCalendly = () => {
    console.log("Opening Calendly modal");
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (showCalendly) {
      console.log("Calendly modal is now showing");
    }
  }, [showCalendly]);

  return (
    <header className="w-full py-4 px-6 md:px-8 lg:px-12 sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/4bde7e54-feea-4029-995c-2c451dde1ab6.png" 
            alt="InstaCloser AI Logo" 
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="font-heading font-bold text-lg md:text-xl text-brand-dark">InstaCloser AI</span>
        </div>
        
        <div className="md:hidden">
          <button className="p-2" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="https://www.instagram.com/instacloserai" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">Follow Us</a>
          <button onClick={openCalendly} className="modern-button">
            <Calendar size={18} />
            <span>Start Free Trial</span>
          </button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50">
          <div className="bg-white h-screen w-[80%] max-w-sm p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/4bde7e54-feea-4029-995c-2c451dde1ab6.png" 
                  alt="InstaCloser AI Logo" 
                  className="w-10 h-10"
                />
                <span className="font-heading font-bold text-lg">InstaCloser AI</span>
              </div>
              <button className="p-2" onClick={toggleMobileMenu}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <a href="#features" className="text-lg font-medium hover:text-primary transition-colors" onClick={toggleMobileMenu}>Features</a>
              <a href="#how-it-works" className="text-lg font-medium hover:text-primary transition-colors" onClick={toggleMobileMenu}>How It Works</a>
              <a href="#testimonials" className="text-lg font-medium hover:text-primary transition-colors" onClick={toggleMobileMenu}>Testimonials</a>
              <a href="https://www.instagram.com/instacloserai" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors" onClick={toggleMobileMenu}>Follow Us</a>
              <button onClick={() => { openCalendly(); toggleMobileMenu(); }} className="modern-button mt-4">
                <Calendar size={18} />
                <span>Start Free Trial</span>
              </button>
            </nav>
          </div>
        </div>
      )}

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
              onLoad={() => console.log("Calendly iframe loaded in Header")}
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
