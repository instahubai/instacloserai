
import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/4bde7e54-feea-4029-995c-2c451dde1ab6.png" 
                alt="InstaCloser AI Logo" 
                className="w-8 h-8"
              />
              <span className="font-heading font-bold text-lg">InstaCloserAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Converting social media DMs to sales with the power of AI.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/instacloserai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@instacloserai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-teal transition-colors">
                {/* Custom TikTok SVG icon since lucide-react doesn't have a TikTok icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                  <path d="M10 9a8 8 0 0 1 8 8h5a14 14 0 0 0-14-14v6"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/instacloserai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@instacloserai.com" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-brand-teal transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-brand-teal transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-brand-teal transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-brand-teal transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} InstaCloser AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
