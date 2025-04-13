
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard } from 'lucide-react';
import { toast } from "sonner";

const PayPalSubscription = () => {
  // PayPal checkout handler with merchant ID
  const handlePayPalCheckout = () => {
    const merchantId = "Af5oSuMKMMZ_LcoBRPMzXir5xWU1C8jm-asrSJfmseajXWC86GFVo_NXr-zm5Au6SSx95KlupTU36gWJ";
    const recipientEmail = "ledefiantones@gmail.com";
    const amount = "0.00"; // Removed specific price
    const currency = "USD";
    const description = "Instagram Sales AI Assistant - Monthly Subscription (100 clients)";
    
    toast.success("Redirecting to PayPal checkout...");
    
    try {
      // Create PayPal checkout URL with merchant ID
      const paypalCheckoutUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=${encodeURIComponent(recipientEmail)}&item_name=${encodeURIComponent(description)}&a3=${amount}&p3=1&t3=M&src=1&no_shipping=1&no_note=1&currency_code=${currency}&bn=PP-SubscriptionsBF&custom=${merchantId}`;
      
      // Redirect to PayPal checkout
      window.open(paypalCheckoutUrl, "_blank");
    } catch (error) {
      toast.error("Failed to open PayPal checkout. Please try again.");
      console.error("PayPal checkout error:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="text-blue-600" size={24} />
        <h3 className="text-xl font-semibold">Connect PayPal</h3>
      </div>
      <p className="text-gray-600 mb-4">
        Subscribe to our AI assistant service. Handles up to 100 clients automatically through Instagram and WhatsApp.
      </p>
      <Button 
        onClick={handlePayPalCheckout}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        <CreditCard size={16} className="mr-2" />
        Connect with PayPal
      </Button>
      <p className="text-xs text-gray-500 mt-2 text-center">
        Secure payment processed by PayPal. Cancel anytime.
      </p>
    </div>
  );
};

export default PayPalSubscription;
