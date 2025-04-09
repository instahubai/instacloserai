
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-8 lg:px-12 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-instagram-gradient flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-instagram-gradient"></div>
            </div>
          </div>
          <span className="font-bold text-lg">DMtoCourse</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
        </nav>
        
        <Button asChild>
          <a href="#trial">Start Free Trial</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
