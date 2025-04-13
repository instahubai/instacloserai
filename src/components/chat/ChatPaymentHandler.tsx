
import { useState } from 'react';
import { toast } from 'sonner';
import { Message } from '@/types/chat';
import { createPayPalCheckoutUrl } from '@/utils/chatUtils';

interface UsePaymentHandlerProps {
  messages?: Message[];
  setMessages: (messages: Message[]) => void;
  simulateWhatsAppMessage: (message: string) => void;
  simulateInstagramMessage: (message: string) => void;
  simulateTikTokMessage: (message: string) => void;
  ownerNumber: string | null;
  ownerInstagram: string | null;
  ownerTikTok: string | null;
}

export const usePaymentHandler = ({
  messages = [],
  setMessages,
  simulateWhatsAppMessage,
  simulateInstagramMessage,
  simulateTikTokMessage,
  ownerNumber,
  ownerInstagram,
  ownerTikTok
}: UsePaymentHandlerProps) => {
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    if (processing) return;
    
    setProcessing(true);
    toast.loading("Processing payment...");
    
    // Simulate payment processing
    setTimeout(() => {
      // Success toast
      toast.success("Payment successful!");
      
      // Add confirmation message
      const confirmationMessage: Message = {
        id: Date.now().toString(),
        text: "Payment successful! You now have access to InstaCloserAI. We've sent a confirmation email with your login details. Your AI assistant is now active and ready to help you convert more leads across all your social platforms!",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages([...messages, confirmationMessage]);
      
      // Simulate sending messages on connected platforms
      if (ownerNumber) {
        simulateWhatsAppMessage(confirmationMessage.text);
      }
      
      if (ownerInstagram) {
        simulateInstagramMessage(confirmationMessage.text);
      }
      
      if (ownerTikTok) {
        simulateTikTokMessage(confirmationMessage.text);
      }
      
      setProcessing(false);
    }, 2000);
  };

  return { handlePayment };
};
