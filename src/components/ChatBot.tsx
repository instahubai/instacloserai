
import React from 'react';
import { useChatState } from '@/hooks/useChatState';
import { usePaymentHandler } from './chat/ChatPaymentHandler';
import ChatWindow from './chat/ChatWindow';
import ChatButton from './chat/ChatButton';
import ChatTestModeIndicators from './chat/ChatTestModeIndicators';

const ChatBot = () => {
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
    simulateWhatsAppMessage,
    simulateInstagramMessage
  } = useChatState();

  const { handlePayment } = usePaymentHandler({
    setMessages,
    simulateWhatsAppMessage,
    simulateInstagramMessage,
    ownerNumber,
    ownerInstagram
  });

  return (
    <>
      {/* Chat Button */}
      <ChatButton isOpen={isOpen} toggleChat={toggleChat} />
      
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
      />
    </>
  );
};

export default ChatBot;
