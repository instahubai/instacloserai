
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PayPal, Zap } from 'lucide-react';
import { toast } from "sonner";

const IntegrationOptions = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
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
        }),
      });

      // Since we're using no-cors, we show an informative message
      toast.success("Zapier webhook triggered successfully. Check your Zap's history.");
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast.error("Failed to trigger Zapier webhook. Please check the URL.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Integration Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PayPal Integration */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <PayPal className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold">PayPal Payments</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Accept payments easily with PayPal integration. Quick and secure checkout process.
              </p>
              <Button 
                onClick={handlePayPalCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <PayPal size={16} className="mr-2" />
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
                Connect your Zapier webhook to automate workflows when users sign up.
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
        </div>
      </div>
    </section>
  );
};

export default IntegrationOptions;
