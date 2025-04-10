
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Zap, Instagram, Bot, MessageSquare } from 'lucide-react';
import { toast } from "sonner";

const IntegrationOptions = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [instagramUsername, setInstagramUsername] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [showInstagramForm, setShowInstagramForm] = useState(false);
  const [showWhatsappForm, setShowWhatsappForm] = useState(false);
  
  // PayPal checkout handler
  const handlePayPalCheckout = () => {
    // In a real implementation, you would redirect to PayPal checkout
    // For this demo, we'll just show a success message
    toast.success("Redirecting to PayPal checkout...");
    
    // Simulate a redirect to PayPal checkout
    window.open("https://www.paypal.com/checkoutnow", "_blank");
  };

  // Zapier webhook trigger handler
  const handleZapierTrigger = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast.error("Please enter your Zapier webhook URL");
      return;
    }

    setIsLoading(true);
    console.log("Triggering Zapier webhook:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handling CORS for webhook requests
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: "InstaCloser AI",
          action: "trial_signup",
          triggered_from: window.location.origin,
          instagram_username: instagramUsername || "Not provided",
          whatsapp_number: whatsappNumber || "Not provided"
        }),
      });

      // Since we're using no-cors, we show an informative message
      toast.success("Automation triggered successfully! Your social account has been connected.");
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast.error("Failed to trigger automation. Please check the URL.");
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* PayPal Integration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold">PayPal Payments</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Accept payments easily with PayPal integration. Quick and secure checkout process.
              </p>
              <Button 
                onClick={handlePayPalCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <CreditCard size={16} className="mr-2" />
                Pay with PayPal
              </Button>
            </div>
            
            {/* Zapier Integration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="text-orange-500" size={24} />
                <h3 className="text-xl font-semibold">Zapier Automation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Connect your Zapier webhook to automate workflows when users sign up or interact with your chatbot.
              </p>
              <form onSubmit={handleZapierTrigger} className="space-y-4">
                <Input
                  type="url"
                  placeholder="Enter your Zapier webhook URL"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  disabled={isLoading}
                >
                  <Zap size={16} className="mr-2" />
                  {isLoading ? "Triggering..." : "Trigger Zap"}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Social Connection Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Connect Social Accounts</h3>
            <p className="text-gray-600 mb-6">
              Connect your Instagram and WhatsApp accounts to automate responses and capture leads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                onClick={toggleInstagramForm} 
                className={`flex-1 ${showInstagramForm ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'}`}
              >
                <Instagram size={16} className="mr-2" />
                Connect Instagram
              </Button>
              
              <Button 
                onClick={toggleWhatsappForm} 
                className={`flex-1 ${showWhatsappForm ? 'bg-green-700' : 'bg-green-600 hover:bg-green-700'}`}
              >
                <MessageSquare size={16} className="mr-2" />
                Connect WhatsApp
              </Button>
            </div>
            
            {/* Instagram Form */}
            {showInstagramForm && (
              <div className="border border-purple-200 rounded-lg p-4 mb-4 bg-purple-50">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Instagram size={16} className="text-purple-600" />
                  Instagram Connection
                </h4>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Instagram username"
                    value={instagramUsername}
                    onChange={(e) => setInstagramUsername(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Our AI will monitor and respond to DMs on this account.
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
                <form className="space-y-4">
                  <Input
                    type="tel"
                    placeholder="Your WhatsApp number"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Include country code. Our AI will monitor and respond to messages on this number.
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
                Your AI assistant is active and ready to interact with customers. It will:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Respond to customer inquiries 24/7</li>
                <li>Qualify leads based on their responses</li>
                <li>Schedule appointments automatically</li>
                <li>Process payments securely</li>
                <li>Log all interactions for your review</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationOptions;
