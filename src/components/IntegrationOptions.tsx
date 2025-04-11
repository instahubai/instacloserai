
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Instagram, Bot, MessageSquare, Check } from 'lucide-react';
import { toast } from "sonner";

const IntegrationOptions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [instagramUsername, setInstagramUsername] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [showInstagramForm, setShowInstagramForm] = useState(false);
  const [showWhatsappForm, setShowWhatsappForm] = useState(false);
  const [accountConnected, setAccountConnected] = useState({
    instagram: false,
    whatsapp: false
  });
  
  // PayPal checkout handler with merchant ID
  const handlePayPalCheckout = () => {
    const merchantId = "Af5oSuMKMMZ_LcoBRPMzXir5xWU1C8jm-asrSJfmseajXWC86GFVo_NXr-zm5Au6SSx95KlupTU36gWJ";
    const recipientEmail = "ledefiantones@gmail.com";
    const amount = "97.00";
    const currency = "USD";
    const description = "Instagram Sales AI Assistant - Monthly Subscription (100 clients)";
    
    toast.success("Redirecting to PayPal checkout...");
    
    // Create PayPal checkout URL with merchant ID
    const paypalCheckoutUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${recipientEmail}&item_name=${encodeURIComponent(description)}&amount=${amount}&currency_code=${currency}&a3=${amount}&p3=1&t3=M&src=1&no_shipping=1&no_note=1&bn=PP-BuyNowBF&charset=UTF-8&custom=${merchantId}`;
    
    // Redirect to PayPal checkout
    window.open(paypalCheckoutUrl, "_blank");
  };

  // Social account connection handler
  const handleAccountConnection = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data based on which social accounts are being connected
    if (showInstagramForm && !instagramUsername) {
      toast.error("Please enter your Instagram username");
      return;
    }

    if (showWhatsappForm && !whatsappNumber) {
      toast.error("Please enter your WhatsApp number");
      return;
    }

    setIsLoading(true);
    
    try {
      // Update the connected status based on which form was submitted
      if (showInstagramForm) {
        setAccountConnected(prev => ({ ...prev, instagram: true }));
        toast.success(`Instagram account @${instagramUsername} connected successfully!`);
      }
      
      if (showWhatsappForm) {
        setAccountConnected(prev => ({ ...prev, whatsapp: true }));
        toast.success(`WhatsApp number ${whatsappNumber} connected successfully!`);
      }

      // Clear the form
      if (showInstagramForm) setInstagramUsername('');
      if (showWhatsappForm) setWhatsappNumber('');
      
      // Collapse the form after successful submission
      setShowInstagramForm(false);
      setShowWhatsappForm(false);
      
    } catch (error) {
      console.error("Error connecting account:", error);
      toast.error("Failed to connect account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle forms
  const toggleInstagramForm = () => {
    setShowInstagramForm(!showInstagramForm);
    if (showWhatsappForm) setShowWhatsappForm(false);
  };

  const toggleWhatsappForm = () => {
    setShowWhatsappForm(!showWhatsappForm);
    if (showInstagramForm) setShowInstagramForm(false);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Integration Options</h2>
          
          <div className="mb-10">
            {/* PayPal Integration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold">PayPal Payments</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Subscribe to our AI assistant service for $97/month. Handles up to 100 clients automatically through Instagram and WhatsApp.
              </p>
              <Button 
                onClick={handlePayPalCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <CreditCard size={16} className="mr-2" />
                Subscribe with PayPal - $97/month
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Secure payment processed by PayPal. Cancel anytime.
              </p>
            </div>
          </div>
          
          {/* Social Connection Section - Enhanced with connection status */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Connect Social Accounts</h3>
            <p className="text-gray-600 mb-6">
              Connect your Instagram and WhatsApp accounts to automate responses and capture leads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                onClick={toggleInstagramForm} 
                className={`flex-1 ${showInstagramForm ? 'bg-purple-700' : accountConnected.instagram ? 'bg-green-600' : 'bg-purple-600 hover:bg-purple-700'}`}
              >
                {accountConnected.instagram ? (
                  <>
                    <Check size={16} className="mr-2" />
                    Instagram Connected
                  </>
                ) : (
                  <>
                    <Instagram size={16} className="mr-2" />
                    Connect Instagram
                  </>
                )}
              </Button>
              
              <Button 
                onClick={toggleWhatsappForm} 
                className={`flex-1 ${showWhatsappForm ? 'bg-green-700' : accountConnected.whatsapp ? 'bg-green-600' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {accountConnected.whatsapp ? (
                  <>
                    <Check size={16} className="mr-2" />
                    WhatsApp Connected
                  </>
                ) : (
                  <>
                    <MessageSquare size={16} className="mr-2" />
                    Connect WhatsApp
                  </>
                )}
              </Button>
            </div>
            
            {/* Instagram Form */}
            {showInstagramForm && (
              <div className="border border-purple-200 rounded-lg p-4 mb-4 bg-purple-50">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Instagram size={16} className="text-purple-600" />
                  Instagram Connection
                </h4>
                <form onSubmit={handleAccountConnection} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Instagram username"
                    value={instagramUsername}
                    onChange={(e) => setInstagramUsername(e.target.value)}
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Connecting..." : "Connect Account"}
                  </Button>
                  <p className="text-xs text-gray-500">
                    Our AI will monitor and respond to DMs on this account after payment is completed.
                  </p>
                </form>
              </div>
            )}
            
            {/* WhatsApp Form */}
            {showWhatsappForm && (
              <div className="border border-green-200 rounded-lg p-4 mb-4 bg-green-50">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <MessageSquare size={16} className="text-green-600" />
                  WhatsApp Connection
                </h4>
                <form onSubmit={handleAccountConnection} className="space-y-4">
                  <Input
                    type="tel"
                    placeholder="Your WhatsApp number (with country code)"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Connecting..." : "Connect Number"}
                  </Button>
                  <p className="text-xs text-gray-500">
                    Include country code (e.g., +1 for US). Our AI will monitor and respond to messages on this number.
                  </p>
                </form>
              </div>
            )}
            
            <div className="rounded-lg p-4 bg-gray-100 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Bot size={18} className="text-blue-600" />
                <h4 className="font-medium">AI Assistant Status</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                After connecting your social accounts and completing payment, your AI assistant will:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Respond to customer inquiries 24/7 on Instagram and WhatsApp</li>
                <li>Qualify leads based on their responses using conversation analysis</li>
                <li>Schedule appointments automatically using your Calendly link</li>
                <li>Process payments securely through PayPal</li>
                <li>Log all interactions in your dashboard for review</li>
                <li>Handle up to 100 clients per month with your subscription</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationOptions;
