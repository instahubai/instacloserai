
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  recipient?: string; // Optional field to specify where the message should be sent
}
