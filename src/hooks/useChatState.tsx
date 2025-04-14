
import { useState } from 'react';
import { Message } from '@/types/chat';
import { useOwnerAccounts } from './chat/useOwnerAccounts';
import { useWelcomeMessage } from './chat/useWelcomeMessage';
import { usePlatformMessages } from './chat/usePlatformMessages';
import { useMessageHandlers } from './chat/useMessageHandlers';

export const useChatState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showCalendly, setShowCalendly] = useState(false);

  // Get owner account information from localStorage
  const { 
    ownerNumber,
    ownerInstagram,
    ownerTikTok 
  } = useOwnerAccounts();

  // Platform messaging simulation
  const {
    simulateWhatsAppMessage,
    simulateInstagramMessage,
    simulateTikTokMessage
  } = usePlatformMessages(ownerNumber, ownerInstagram, ownerTikTok);

  // Message handling logic
  const {
    typing,
    newMessage,
    setNewMessage,
    handleSendMessage,
    closeCalendly
  } = useMessageHandlers(
    setMessages,
    ownerNumber,
    ownerInstagram,
    ownerTikTok,
    setShowCalendly,
    simulateWhatsAppMessage,
    simulateInstagramMessage,
    simulateTikTokMessage
  );

  // Welcome message on chat open
  useWelcomeMessage(
    isOpen,
    messages,
    ownerNumber,
    ownerInstagram,
    ownerTikTok,
    setMessages,
    simulateWhatsAppMessage,
    simulateInstagramMessage,
    simulateTikTokMessage
  );

  const toggleChat = () => {
    setIsOpen(!isOpen);
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
