
import React from 'react';
import { MessageSquare, Instagram } from 'lucide-react';

interface ChatTestModeIndicatorsProps {
  ownerNumber: string | null;
  ownerInstagram: string | null;
  ownerTikTok: string | null;
}

const ChatTestModeIndicators: React.FC<ChatTestModeIndicatorsProps> = ({ 
  ownerNumber, 
  ownerInstagram, 
  ownerTikTok 
}) => {
  if (!ownerNumber && !ownerInstagram && !ownerTikTok) return null;

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
      
      {ownerTikTok && (
        <div className="bg-pink-100 border border-pink-300 rounded-md p-2 text-xs text-pink-800 flex items-center gap-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
            <path d="M10 9a8 8 0 0 1 8 8h5a14 14 0 0 0-14-14v6"/>
          </svg>
          TikTok Test Mode
        </div>
      )}
    </div>
  );
};

export default ChatTestModeIndicators;
