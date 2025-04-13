
import React, { useRef, useEffect } from 'react';
import { Bot, Instagram, CreditCard, X } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Message } from '@/types/chat';
import CalendlyModal from './CalendlyModal';

interface ChatWindowProps {
  isOpen: boolean;
  messages: Message[];
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  handlePayment: () => void;
  typing: boolean;
  showCalendly: boolean;
  closeCalendly: () => void;
}

const ChatWindow = ({ 
  isOpen, 
  messages, 
  newMessage, 
  setNewMessage, 
  handleSendMessage, 
  handlePayment,
  typing,
  showCalendly,
  closeCalendly
}: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-xl shadow-xl z-40 flex flex-col border border-gray-200">
        {/* Chat Header */}
        <div className="px-4 py-3 bg-blue-600 text-white rounded-t-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <span className="font-medium">InstaCloserAI Assistant</span>
          </div>
          <div className="flex items-center gap-1">
            <Instagram size={16} className="opacity-70" />
            <CreditCard size={16} className="opacity-70" />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="opacity-70"
            >
              <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
              <path d="M10 9a8 8 0 0 1 8 8h5a14 14 0 0 0-14-14v6"/>
            </svg>
          </div>
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              handlePayment={handlePayment} 
            />
          ))}
          
          {/* Typing indicator */}
          {typing && (
            <div className="mb-3 mr-auto max-w-[85%]">
              <div className="p-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <ChatInput 
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSendMessage={handleSendMessage}
          isOpen={isOpen}
        />
      </div>

      {/* Calendly Modal */}
      {showCalendly && <CalendlyModal closeCalendly={closeCalendly} />}
    </>
  );
};

export default ChatWindow;
