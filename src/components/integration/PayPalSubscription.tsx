
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard } from 'lucide-react';
import { toast } from "sonner";

const PayPalSubscription = () => {
  // Information only component without active PayPal link
  const handleInfoClick = () => {
    toast.info("PayPal connection is currently disabled. Please contact support for assistance.");
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
        onClick={handleInfoClick}
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
