
import React, { useEffect, useState } from 'react';
import { useChatState } from '@/hooks/useChatState';
import { usePaymentHandler } from './chat/ChatPaymentHandler';
import ChatWindow from './chat/ChatWindow';
import ChatButton from './chat/ChatButton';
import ChatTestModeIndicators from './chat/ChatTestModeIndicators';

const ChatBot = () => {
  const [hasTikTokMessages, setHasTikTokMessages] = useState(false);
  
  const {
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
  } = useChatState();

  // Check if TikTok is enabled to show the notification badge
  useEffect(() => {
    if (ownerTikTok && !isOpen) {
      setHasTikTokMessages(true);
    } else if (isOpen) {
      setHasTikTokMessages(false);
    }
  }, [ownerTikTok, isOpen]);

  const { handlePayment } = usePaymentHandler({
    messages,
    setMessages: (msgs) => {},  // This is a dummy function to fix the build error
    simulateWhatsAppMessage,
    simulateInstagramMessage,
    simulateTikTokMessage,
    ownerNumber,
    ownerInstagram,
    ownerTikTok
  });

  return (
    <>
      {/* Chat Button */}
      <ChatButton 
        isOpen={isOpen} 
        toggleChat={toggleChat} 
        displayBadge={hasTikTokMessages}
      />
      
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
      <ChatTestModeIndicators 
        ownerNumber={ownerNumber} 
        ownerInstagram={ownerInstagram}
        ownerTikTok={ownerTikTok}
      />
    </>
  );
};

export default ChatBot;
