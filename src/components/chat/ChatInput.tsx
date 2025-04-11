
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';

interface ChatInputProps {
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  isOpen: boolean;
}

const ChatInput = ({ newMessage, setNewMessage, handleSendMessage, isOpen }: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  return (
    <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex items-center gap-2">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700">
        <Send size={18} />
      </Button>
    </form>
  );
};

export default ChatInput;
