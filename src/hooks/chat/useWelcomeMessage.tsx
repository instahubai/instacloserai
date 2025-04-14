
import { useEffect } from 'react';
import { Message } from '@/types/chat';

export const useWelcomeMessage = (
  isOpen: boolean,
  messages: Message[],
  ownerNumber: string | null,
  ownerInstagram: string | null,
  ownerTikTok: string | null,
  setMessages: (messages: Message[]) => void,
  simulateWhatsAppMessage: (text: string) => void,
  simulateInstagramMessage: (text: string) => void,
  simulateTikTokMessage: (text: string) => void
) => {
  // Auto-welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Simulate a natural delay before showing the welcome message
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          text: "👋 Welcome to InstaCloserAI! I'm your personal sales assistant. I'm here to help you grow your business through Instagram, TikTok, Facebook, and WhatsApp to close more high-ticket clients. How can I assist you today?",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages([welcomeMessage]);
        
        // If owner's accounts are connected, simulate sending the welcome message
        if (ownerNumber) {
          simulateWhatsAppMessage(welcomeMessage.text);
        }
        
        if (ownerInstagram) {
          simulateInstagramMessage(welcomeMessage.text);
        }
        
        if (ownerTikTok) {
          simulateTikTokMessage(welcomeMessage.text);
        }
      }, 600);
    }
  }, [isOpen, messages.length, ownerNumber, ownerInstagram, ownerTikTok, setMessages, simulateWhatsAppMessage, simulateInstagramMessage, simulateTikTokMessage]);
};
