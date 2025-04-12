
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Instagram } from 'lucide-react';
import { toast } from "sonner";
import { Message } from '@/types/chat';
import ChatWindow from './chat/ChatWindow';
import { respondToMessage, createPayPalCheckoutUrl } from '@/utils/chatUtils';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showCalendly, setShowCalendly] = useState(false);
  const [typing, setTyping] = useState(false);
  const [ownerNumber, setOwnerNumber] = useState<string | null>(null);
  const [ownerInstagram, setOwnerInstagram] = useState<string | null>(null);

  // Load owner's account details if available
  useEffect(() => {
    const savedOwnerNumber = localStorage.getItem('ownerWhatsappNumber');
    const savedInstagramAccount = localStorage.getItem('ownerInstagramAccount');
    
    if (savedOwnerNumber) {
      setOwnerNumber(savedOwnerNumber);
    }
    
    if (savedInstagramAccount) {
      setOwnerInstagram(savedInstagramAccount);
    }
  }, []);

  // Auto-welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Simulate a natural delay before showing the welcome message
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          text: "👋 Welcome to InstaCloser AI! I'm your personal sales assistant. I'm here to help you grow your business through Instagram and close more high-ticket clients. How can I assist you today?",
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
      }, 600);
    }
  }, [isOpen, messages.length, ownerNumber, ownerInstagram]);

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

  const handlePayment = () => {
    // Redirect to PayPal checkout
    toast.success("Redirecting to secure payment gateway...");

    const merchantId = "Af5oSuMKMMZ_LcoBRPMzXir5xWU1C8jm-asrSJfmseajXWC86GFVo_NXr-zm5Au6SSx95KlupTU36gWJ";
    const recipientEmail = "ledefiantones@gmail.com";
    const amount = "97.00";
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
      toast.error("Failed to open PayPal checkout. Please try again.");
      console.error("PayPal checkout error:", error);
    }
    
    // Add a follow-up message after the user clicks the payment button
    setTimeout(() => {
      const followUpMessage: Message = {
        id: Date.now().toString(),
        text: "I've opened our secure payment page for you. Once your payment is complete, you'll receive immediate access to the course and our team will reach out within 24 hours to help set up your account. If you have any questions during checkout, just let me know!",
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
    }, 1500);
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
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          onClick={toggleChat} 
          size="lg" 
          className={`rounded-full w-14 h-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </div>
      
      {/* Chat Window */}
      <ChatWindow 
        isOpen={isOpen}
        messages={messages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
        handlePayment={handlePayment}
        typing={typing}
        showCalendly={showCalendly}
        closeCalendly={closeCalendly}
      />

      {/* Show test mode indicators when owner's accounts are connected */}
      <div className="fixed bottom-24 right-6 space-y-2 z-30">
        {ownerNumber && (
          <div className="bg-green-100 border border-green-300 rounded-md p-2 text-xs text-green-800 flex items-center gap-1">
            <MessageSquare size={12} />
            WhatsApp Test Mode
          </div>
        )}
        
        {ownerInstagram && (
          <div className="bg-purple-100 border border-purple-300 rounded-md p-2 text-xs text-purple-800 flex items-center gap-1">
            <Instagram size={12} />
            Instagram Test Mode
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBot;
