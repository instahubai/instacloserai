
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard } from 'lucide-react';
import { Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
  handlePayment: () => void;
}

const ChatMessage = ({ message, handlePayment }: ChatMessageProps) => {
  return (
    <div 
      className={`mb-3 ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'} max-w-[85%]`}
    >
      <div 
        className={`p-3 rounded-lg ${
          message.sender === 'user' 
            ? 'bg-blue-600 text-white rounded-br-none' 
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        {message.text.includes('<button-payment>') ? (
          <Button 
            onClick={handlePayment}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <CreditCard size={16} className="mr-2" />
            Pay Now
          </Button>
        ) : (
          message.text
        )}
      </div>
      <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
        {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>
    </div>
  );
};

export default ChatMessage;
