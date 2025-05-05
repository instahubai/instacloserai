
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  source?: 'whatsapp' | 'instagram' | 'tiktok' | 'chat';
  createdAt: number;
  timestamp?: number;
}
