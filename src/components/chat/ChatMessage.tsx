
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Instagram, MessageSquare, MessageCircle } from "lucide-react";
import { Message } from '@/types/chat';
import AIAssistantAvatar from './AIAssistantAvatar';

interface ChatMessageProps {
  message: Message;
  handlePayment?: () => void;
}

const ChatMessage = ({ message, handlePayment }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';
  
  // Format payment link for display
  const formatMessageText = (text: string) => {
    return text.includes('payment link') 
      ? text.replace('payment link', '<span class="text-primary font-semibold">payment link</span>')
      : text;
  };
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      {isBot && (
        <div className="mr-2 flex-shrink-0 self-start">
          <AIAssistantAvatar size="sm" />
        </div>
      )}
      
      <div className={`max-w-[85%]`}>
        <div className={`p-3 rounded-lg ${
          isBot 
            ? 'bg-white shadow-sm text-gray-800 rounded-bl-none' 
            : 'bg-primary text-white rounded-br-none'
        }`}>
          <div 
            dangerouslySetInnerHTML={{ 
              __html: formatMessageText(message.text) 
            }}
            className="text-sm"
          />

          {/* Show buttons for specific bot messages */}
          {isBot && message.text.includes('available times') && (
            <div className="mt-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white text-primary border-primary mr-2 text-xs"
                onClick={handlePayment}
              >
                <Calendar size={14} className="mr-1" />
                Schedule Call
              </Button>
            </div>
          )}
          
          {/* Payment button */}
          {isBot && message.text.includes('secure connection link') && (
            <div className="mt-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white text-primary border-primary text-xs"
                onClick={handlePayment}
              >
                Complete Setup
              </Button>
            </div>
          )}
        </div>
        
        {/* Add message source indicator */}
        {isBot && message.source && (
          <div className="flex items-center text-xs text-gray-500 mt-1">
            {message.source === 'instagram' ? (
              <>
                <Instagram size={12} className="mr-1" />
                <span>via Instagram</span>
              </>
            ) : message.source === 'whatsapp' ? (
              <>
                <MessageCircle size={12} className="mr-1" />
                <span>via WhatsApp</span>
              </>
            ) : message.source === 'tiktok' ? (
              <>
                <MessageSquare size={12} className="mr-1" />
                <span>via TikTok</span>
              </>
            ) : (
              <>
                <MessageSquare size={12} className="mr-1" />
                <span>Chat</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
