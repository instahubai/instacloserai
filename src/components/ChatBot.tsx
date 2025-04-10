
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Instagram, CreditCard, Calendar, Bot, X } from 'lucide-react';
import { toast } from "sonner";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showCalendly, setShowCalendly] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "👋 Hi there! I'm your AI assistant. I can help you learn about our courses, schedule a call, or process your payment. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate bot thinking
    setTimeout(() => {
      respondToMessage(newMessage);
    }, 1000);
  };

  // Bot logic to respond to messages
  const respondToMessage = (userInput: string) => {
    const input = userInput.toLowerCase();
    let response = '';

    // Handle different types of inquiries
    if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
      response = "Our course pricing starts at $997 for the basic package and $1997 for the premium package with 1-on-1 coaching. Would you like to know more about what's included?";
    } 
    else if (input.includes('payment') || input.includes('pay') || input.includes('purchase')) {
      response = "You can securely pay via PayPal or credit card. Would you like me to send you a payment link?";
    } 
    else if (input.includes('schedule') || input.includes('call') || input.includes('appointment') || input.includes('book')) {
      response = "I'd be happy to help you schedule a call with one of our experts. Would you like to see available time slots?";
    } 
    else if (input.includes('yes') && messages[messages.length-2]?.text.includes('payment link')) {
      response = "Great! Here's your secure payment link: [Payment Link]. You can also click the 'Pay Now' button below.";
      
      // Simulate payment button click after response
      setTimeout(() => {
        const paymentMessage: Message = {
          id: Date.now().toString(),
          text: "<button-payment>Click to complete payment</button-payment>",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, paymentMessage]);
      }, 500);
    } 
    else if (input.includes('yes') && messages[messages.length-2]?.text.includes('time slots')) {
      response = "Perfect! I can help you schedule a time. Let me get our calendar up for you.";
      
      // Open Calendly
      setTimeout(() => {
        setShowCalendly(true);
      }, 1000);
    }
    else if (input.includes('instagram') || input.includes('dm') || input.includes('direct message')) {
      response = "We respond to all Instagram DMs within 24 hours, but our AI assistant (that's me!) can help you right away. What would you like to know about our courses?";
    }
    else if (input.includes('whatsapp') || input.includes('text') || input.includes('message')) {
      response = "You can reach us on WhatsApp at +1-234-567-8900, or just continue chatting with me here. I can answer most questions immediately!";
    }
    else if (input.includes('course') || input.includes('program') || input.includes('learn') || input.includes('what') || input.includes('info')) {
      response = "Our flagship course 'Instagram Sales Mastery' teaches you how to attract high-ticket clients through Instagram. It includes content strategy, automation, sales psychology, and closing techniques. Would you like me to send you our detailed course curriculum?";
    }
    else {
      response = "Thanks for your message! I'd be happy to tell you about our courses, help you schedule a call with our team, or assist with payment. What specifically would you like to know?";
    }

    // Add bot response
    const botMessage: Message = {
      id: Date.now().toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
  };

  const handlePayment = () => {
    // Redirect to PayPal checkout (or open modal)
    toast.success("Redirecting to secure payment...");
    
    // Simulate a redirect to PayPal checkout
    window.open("https://www.paypal.com/checkoutnow", "_blank");
  };
  
  const closeCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          onClick={toggleChat} 
          size="lg" 
          className={`rounded-full w-14 h-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </div>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-xl shadow-xl z-40 flex flex-col border border-gray-200">
          {/* Chat Header */}
          <div className="px-4 py-3 bg-blue-600 text-white rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-medium">InstaCloser AI Assistant</span>
            </div>
            <div className="flex items-center gap-1">
              <Instagram size={16} className="opacity-70" />
              <CreditCard size={16} className="opacity-70" />
            </div>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'} max-w-[85%]`}
              >
                <div 
                  className={`p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text.includes('<button-payment>') ? (
                    <Button 
                      onClick={handlePayment}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <CreditCard size={16} className="mr-2" />
                      Pay Now
                    </Button>
                  ) : (
                    message.text
                  )}
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex items-center gap-2">
            <Input
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
        </div>
      )}
      
      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] relative">
            <button 
              onClick={closeCalendly}
              className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <iframe
              src="https://calendly.com/ledefiantones"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule your free consultation"
              className="rounded-xl"
              onLoad={() => console.log("Calendly iframe loaded in ChatBot")}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
