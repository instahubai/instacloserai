
import { useState } from 'react';
import { Message } from '@/types/chat';
import { respondToMessage } from '@/utils/chatUtils';

export const useMessageHandlers = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  ownerNumber: string | null,
  ownerInstagram: string | null,
  ownerTikTok: string | null,
  setShowCalendly: (show: boolean) => void,
  simulateWhatsAppMessage: (text: string) => void,
  simulateInstagramMessage: (text: string) => void,
  simulateTikTokMessage: (text: string) => void
) => {
  const [typing, setTyping] = useState(false);
  const [newMessage, setNewMessage] = useState('');

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
    setMessages(prevMessages => {
      const response = respondToMessage(userInput, prevMessages);
      
      // Add bot response
      const botMessage: Message = {
        id: Date.now().toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      const updatedMessages = [...prevMessages, botMessage];
      
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
      
      if (input.includes('yes') && prevMessages.length > 0 && prevMessages[prevMessages.length-1]?.text.includes('payment link')) {
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
      else if ((input.includes('yes') || input.includes('time') || input.includes('available') || input.includes('when')) && prevMessages.length > 0 && prevMessages[prevMessages.length-1]?.text.includes('see available times')) {
        // Open Calendly
        setTimeout(() => {
          setShowCalendly(true);
        }, 1000);
      }

      return updatedMessages;
    });
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
    typing,
    newMessage,
    setNewMessage,
    handleSendMessage,
    closeCalendly
  };
};
