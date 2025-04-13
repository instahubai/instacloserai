
import { toast } from "sonner";
import { Message } from '@/types/chat';
import { createPayPalCheckoutUrl } from '@/utils/chatUtils';

interface ChatPaymentHandlerProps {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  simulateWhatsAppMessage?: (text: string) => void;
  simulateInstagramMessage?: (text: string) => void;
  ownerNumber: string | null;
  ownerInstagram: string | null;
}

export const usePaymentHandler = ({
  setMessages,
  simulateWhatsAppMessage,
  simulateInstagramMessage,
  ownerNumber,
  ownerInstagram
}: ChatPaymentHandlerProps) => {
  
  const handlePayment = () => {
    // Redirect to PayPal checkout
    toast.success("Redirecting to secure connection...");

    const merchantId = "Af5oSuMKMMZ_LcoBRPMzXir5xWU1C8jm-asrSJfmseajXWC86GFVo_NXr-zm5Au6SSx95KlupTU36gWJ";
    const recipientEmail = "ledefiantones@gmail.com";
    const amount = "0.00"; // Removed specific price
    const currency = "USD";
    const description = "Instagram Sales AI Assistant - Monthly Subscription (100 clients)";
    
    try {
      // Create PayPal checkout URL with merchant ID
      const paypalCheckoutUrl = createPayPalCheckoutUrl(
        recipientEmail,
        description,
        amount,
        currency,
        merchantId
      );
      
      // Redirect to PayPal checkout
      window.open(paypalCheckoutUrl, "_blank");
    } catch (error) {
      toast.error("Failed to open PayPal connection. Please try again.");
      console.error("PayPal connection error:", error);
    }
    
    // Add a follow-up message after the user clicks the payment button
    setTimeout(() => {
      const followUpMessage: Message = {
        id: Date.now().toString(),
        text: "I've opened our secure connection page for you. Once your account is connected, you'll receive immediate access to our platform and our team will reach out within 24 hours to help set everything up. If you have any questions during the process, just let me know!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, followUpMessage]);
      
      // If owner's accounts are connected, simulate sending the follow-up message
      if (ownerNumber && simulateWhatsAppMessage) {
        simulateWhatsAppMessage(followUpMessage.text);
      }
      
      if (ownerInstagram && simulateInstagramMessage) {
        simulateInstagramMessage(followUpMessage.text);
      }
    }, 1500);
  };

  return { handlePayment };
};
