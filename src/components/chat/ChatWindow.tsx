
import React, { useRef, useEffect } from 'react';
import { X, CreditCard } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Message } from '@/types/chat';
import CalendlyModal from './CalendlyModal';
import AIAssistantAvatar from './AIAssistantAvatar';

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
        <div className="px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-t-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AIAssistantAvatar size="sm" animated={true} />
            <div>
              <span className="font-medium">Nova</span>
              <p className="text-xs text-white/80">InstaCloser AI Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-white opacity-70 hover:opacity-100 transition-opacity">
              <X size={18} onClick={closeCalendly} />
            </button>
          </div>
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
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
              <div className="flex items-start gap-2">
                <AIAssistantAvatar size="sm" />
                <div className="p-3 rounded-lg bg-white shadow-sm text-gray-800 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
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
