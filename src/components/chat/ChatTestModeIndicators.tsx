
import React from 'react';
import { MessageSquare, Instagram } from 'lucide-react';

interface ChatTestModeIndicatorsProps {
  ownerNumber: string | null;
  ownerInstagram: string | null;
}

const ChatTestModeIndicators: React.FC<ChatTestModeIndicatorsProps> = ({ 
  ownerNumber, 
  ownerInstagram 
}) => {
  if (!ownerNumber && !ownerInstagram) return null;

  return (
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
  );
};

export default ChatTestModeIndicators;
