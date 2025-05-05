
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AIAssistantAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const AIAssistantAvatar = ({ size = 'md', animated = false }: AIAssistantAvatarProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const animationClass = animated ? 'animate-pulse-slow hover:scale-105 transition-transform' : '';

  return (
    <div className={`relative ${animationClass}`}>
      <Avatar className={`rounded-full border-2 border-primary/80 ${sizeClasses[size]}`}>
        <AvatarImage 
          src="/lovable-uploads/6f313b69-41c5-4ab7-9631-9c9d963ce8f9.png" 
          alt="Nova" 
          className="object-cover"
        />
        <AvatarFallback 
          className="bg-gradient-to-r from-primary to-secondary text-white"
        >
          AI
        </AvatarFallback>
      </Avatar>
      {size === 'lg' && (
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
      )}
    </div>
  );
};

export default AIAssistantAvatar;
