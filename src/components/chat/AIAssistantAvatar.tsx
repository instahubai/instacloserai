
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AIAssistantAvatarProps {
  size?: 'sm' | 'md' | 'lg';
}

const AIAssistantAvatar = ({ size = 'md' }: AIAssistantAvatarProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  return (
    <Avatar className={`rounded-full border border-primary/20 ${sizeClasses[size]}`}>
      <AvatarImage 
        src="/lovable-uploads/6f313b69-41c5-4ab7-9631-9c9d963ce8f9.png" 
        alt="Nova" 
      />
      <AvatarFallback 
        className="bg-gradient-to-r from-primary to-secondary text-white"
      >
        AI
      </AvatarFallback>
    </Avatar>
  );
};

export default AIAssistantAvatar;
