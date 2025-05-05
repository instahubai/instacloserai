
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Calendar, X, Shield, Lock } from 'lucide-react';

const CTA = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const openCalendly = () => {
    console.log("Opening Calendly modal from CTA section");
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  useEffect(() => {
    if (showCalendly) {
      console.log("Calendly modal is now showing in CTA section");
    }
  }, [showCalendly]);

  return (
    <section id="trial" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="content-overlay">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6">
              Ready to Automate Your Instagram Sales?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stop missing opportunities while you sleep. Let AI handle your DMs and fill your calendar with qualified leads.
            </p>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand-purple mb-2">30%</h3>
                  <p className="text-gray-600">Average increase in response rate</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand-teal mb-2">24/7</h3>
                  <p className="text-gray-600">Always-on lead qualification</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand-purple mb-2">15+</h3>
                  <p className="text-gray-600">Hours saved per week</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="modern-button" onClick={openCalendly}>
                  <Calendar size={18} />
                  Start Free Trial
                </button>
                <button className="modern-button" onClick={openCalendly}>
                  <Calendar size={18} />
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-500" />
                  <span className="text-sm">14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-500" />
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-500" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-500" />
                  <span className="text-sm">Full support included</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-brand-purple" />
                  <span className="text-xs text-gray-500">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-brand-purple" />
                  <span className="text-xs text-gray-500">Data Protection</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              Questions? Contact us at <a href="mailto:support@instacloser.ai" className="text-brand-purple hover:underline">support@instacloser.ai</a>
            </p>
          </div>
        </div>
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
              onLoad={() => console.log("Calendly iframe loaded in CTA")}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
