
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  toggleChat: () => void;
  displayBadge?: boolean; // Add optional prop for the TikTok badge
}

const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, toggleChat, displayBadge = false }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {displayBadge && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 rounded-full border-2 border-white" />
      )}
      <Button 
        onClick={toggleChat} 
        size="lg" 
        className={`rounded-full w-14 h-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
    </div>
  );
};

export default ChatButton;
