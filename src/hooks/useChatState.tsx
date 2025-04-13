
import { useState, useEffect } from 'react';
import { Message } from '@/types/chat';
import { toast } from 'sonner';
import { respondToMessage } from '@/utils/chatUtils';

export const useChatState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showCalendly, setShowCalendly] = useState(false);
  const [typing, setTyping] = useState(false);
  const [ownerNumber, setOwnerNumber] = useState<string | null>(null);
  const [ownerInstagram, setOwnerInstagram] = useState<string | null>(null);
  const [ownerTikTok, setOwnerTikTok] = useState<string | null>(null);

  // Load owner's account details if available
  useEffect(() => {
    const savedOwnerNumber = localStorage.getItem('ownerWhatsappNumber');
    const savedInstagramAccount = localStorage.getItem('ownerInstagramAccount');
    const savedTikTokAccount = localStorage.getItem('ownerTikTokAccount');
    
    if (savedOwnerNumber) {
      setOwnerNumber(savedOwnerNumber);
    }
    
    if (savedInstagramAccount) {
      setOwnerInstagram(savedInstagramAccount);
    }
    
    if (savedTikTokAccount) {
      setOwnerTikTok(savedTikTokAccount);
    }
  }, []);

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
  }, [isOpen, messages.length, ownerNumber, ownerInstagram, ownerTikTok]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Show typing indicator
    setTyping(true);
    
    // Simulate bot thinking with a natural delay (between 1-2 seconds)
    const thinkingTime = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      handleBotResponse(newMessage);
      setTyping(false);
    }, thinkingTime);
  };

  const handleBotResponse = (userInput: string) => {
    const response = respondToMessage(userInput, messages);
    
    // Add bot response
    const botMessage: Message = {
      id: Date.now().toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
    
    // Handle special cases that require additional actions
    const input = userInput.toLowerCase();
    
    // If owner's accounts are connected, simulate sending the message
    if (ownerNumber) {
      simulateWhatsAppMessage(botMessage.text);
    }
    
    if (ownerInstagram) {
      simulateInstagramMessage(botMessage.text);
    }
    
    if (ownerTikTok) {
      simulateTikTokMessage(botMessage.text);
    }
    
    if (input.includes('yes') && messages.length > 0 && messages[messages.length-1]?.text.includes('payment link')) {
      // Add payment button message
      setTimeout(() => {
        const paymentMessage: Message = {
          id: Date.now().toString(),
          text: "<button-payment>Click to complete payment</button-payment>",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, paymentMessage]);
        
        // If owner's accounts are connected, simulate sending the payment request
        if (ownerNumber) {
          simulateWhatsAppMessage("Here's your payment link: [Payment Button]");
        }
        
        if (ownerInstagram) {
          simulateInstagramMessage("Here's your payment link: [Payment Button]");
        }
        
        if (ownerTikTok) {
          simulateTikTokMessage("Here's your payment link: [Payment Button]");
        }
      }, 500);
    } 
    else if ((input.includes('yes') || input.includes('time') || input.includes('available') || input.includes('when')) && messages.length > 0 && messages[messages.length-1]?.text.includes('see available times')) {
      // Open Calendly
      setTimeout(() => {
        setShowCalendly(true);
      }, 1000);
    }
  };

  // Simulate sending a message to the owner's WhatsApp
  const simulateWhatsAppMessage = (text: string) => {
    if (!ownerNumber) return;
    
    // Log the message and show a toast notification for testing purposes
    console.log(`[WhatsApp Test] Message to ${ownerNumber}: ${text}`);
    toast.info(`Test: Message to WhatsApp (${ownerNumber})`, {
      description: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
      duration: 3000,
    });
    
    // In a real implementation, this would connect to the WhatsApp Business API
    // to send an actual message to the owner's number
  };
  
  // Simulate sending a message to the owner's Instagram
  const simulateInstagramMessage = (text: string) => {
    if (!ownerInstagram) return;
    
    // Log the message and show a toast notification for testing purposes
    console.log(`[Instagram Test] Message to @${ownerInstagram}: ${text}`);
    toast.info(`Test: Message to Instagram (@${ownerInstagram})`, {
      description: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
      duration: 3000,
    });
    
    // In a real implementation, this would connect to the Instagram Graph API
    // to send an actual DM to the owner's account
  };
  
  // Simulate sending a message to the owner's TikTok
  const simulateTikTokMessage = (text: string) => {
    if (!ownerTikTok) return;
    
    // Log the message and show a toast notification for testing purposes
    console.log(`[TikTok Test] Message to @${ownerTikTok}: ${text}`);
    toast.info(`Test: Message to TikTok (@${ownerTikTok})`, {
      description: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
      duration: 3000,
      className: "bg-pink-50 border-pink-200 text-pink-800",
    });
    
    // In a real implementation, this would connect to the TikTok API
    // to send an actual message to the owner's account
  };

  const closeCalendly = () => {
    setShowCalendly(false);
    
    // Add a follow-up message after closing Calendly
    setTimeout(() => {
      const followUpMessage: Message = {
        id: Date.now().toString(),
        text: "Great! I'll send you a confirmation email with all the details for your upcoming call. Is there anything specific you'd like our coach to focus on during your strategy session?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, followUpMessage]);
      
      // If owner's accounts are connected, simulate sending the follow-up message
      if (ownerNumber) {
        simulateWhatsAppMessage(followUpMessage.text);
      }
      
      if (ownerInstagram) {
        simulateInstagramMessage(followUpMessage.text);
      }
      
      if (ownerTikTok) {
        simulateTikTokMessage(followUpMessage.text);
      }
    }, 500);
  };

  return {
    isOpen,
    toggleChat,
    messages,
    newMessage,
    setNewMessage,
    handleSendMessage,
    typing,
    showCalendly,
    closeCalendly,
    ownerNumber,
    ownerInstagram,
    ownerTikTok,
    simulateWhatsAppMessage,
    simulateInstagramMessage,
    simulateTikTokMessage
  };
};
