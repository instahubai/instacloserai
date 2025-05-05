
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  source?: 'whatsapp' | 'instagram' | 'tiktok' | 'chat';
  createdAt: Date;
  timestamp?: number; // Add this field to fix TypeScript errors
}
