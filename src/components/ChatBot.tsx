
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
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Simulate a natural delay before showing the welcome message
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          text: "👋 Hi there! I'm your personal sales assistant. I can help with course information, schedule a strategy call, or process your payment. How can I help you succeed today?",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages([welcomeMessage]);
      }, 600);
    }
  }, [isOpen, messages.length]);

  // Focus on input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

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
    
    // Show typing indicator
    setTyping(true);
    
    // Simulate bot thinking with a natural delay (between 1-2 seconds)
    const thinkingTime = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      respondToMessage(newMessage);
      setTyping(false);
    }, thinkingTime);
  };

  // Enhanced bot logic to respond to messages - more sales-focused and professional
  const respondToMessage = (userInput: string) => {
    const input = userInput.toLowerCase();
    let response = '';

    // Handle different types of inquiries with a sales-focused approach
    if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
      response = "Our premium Instagram Sales Mastery course is currently available at $997 for the self-guided package and $1,997 for the VIP package with 1-on-1 coaching. Both options include lifetime access and free updates. Would you like to see the full comparison of what's included in each package?";
    } 
    else if (input.includes('payment') || input.includes('pay') || input.includes('purchase') || input.includes('buy')) {
      response = "You can securely pay via PayPal or credit card. Once payment is processed, you'll get immediate access to the course materials and our AI will automatically be connected to your Instagram and WhatsApp accounts. Would you like me to send you a payment link?";
    } 
    else if (input.includes('schedule') || input.includes('call') || input.includes('appointment') || input.includes('book') || input.includes('talk')) {
      response = "I'd be happy to schedule a free 30-minute strategy call with one of our coaches. During this call, we'll analyze your current Instagram strategy and identify key areas for improvement to help you attract higher-ticket clients. Would you like to see available times?";
    } 
    else if (input.includes('yes') && messages[messages.length-2]?.text.includes('payment link')) {
      response = "Great! Here's your secure payment link. You can also click the 'Pay Now' button below to complete your purchase. After payment, you'll receive an email with your login details within 5 minutes.";
      
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
    else if ((input.includes('yes') || input.includes('time') || input.includes('available') || input.includes('when')) && messages[messages.length-2]?.text.includes('see available times')) {
      response = "Perfect! Let me show you our available time slots. Our coaches are typically available Monday-Friday between 9am-5pm EST. Choose a time that works best for you:";
      
      // Open Calendly
      setTimeout(() => {
        setShowCalendly(true);
      }, 1000);
    }
    else if (input.includes('instagram') || input.includes('dm') || input.includes('direct message')) {
      response = "Our Instagram Sales Mastery course teaches you exactly how to convert DMs into high-ticket sales. Plus, when you subscribe to our service, our AI can handle your Instagram DMs automatically, pre-qualifying leads and booking calls while you sleep. Would you like to see how this works with a demo?";
    }
    else if (input.includes('whatsapp') || input.includes('text') || input.includes('message')) {
      response = "We offer complete WhatsApp automation as part of our service. After signing up, our AI will handle inquiries, qualify leads, and book calls through WhatsApp - all customized to sound exactly like you. Would you like to see how this integration works?";
    }
    else if (input.includes('course') || input.includes('program') || input.includes('learn') || input.includes('what') || input.includes('info')) {
      response = "Our flagship 'Instagram Sales Mastery' course is an 8-week program that teaches you a proven system for attracting and converting high-ticket clients through Instagram. It covers content strategy, automation, sales psychology, and our proprietary 'DM-to-Deal' framework. The course includes 42 video lessons, templates, scripts, and weekly group coaching calls. Would you like me to send you the detailed curriculum?";
    }
    else if (input.includes('testimonial') || input.includes('review') || input.includes('result') || input.includes('success')) {
      response = "Our clients typically see a 3-5x increase in qualified leads within 30 days of implementing our system. For example, Sarah J. went from 2 client bookings per month to 15, tripling her revenue in just 6 weeks. Marcos T. used our DM scripts to close a $14,000 client after just 3 days of implementing our approach. Would you like to hear more success stories?";
    }
    else if (input.includes('guarantee') || input.includes('refund') || input.includes('risk')) {
      response = "We offer a 30-day satisfaction guarantee. If you implement our strategies and don't see results, we'll refund your purchase in full. We're confident in our system because it's been tested and proven across 27 different industries. Would you like to know more about how we ensure your success?";
    }
    else if (input.includes('thank') || input.includes('great') || input.includes('awesome') || input.includes('helpful')) {
      response = "You're welcome! I'm here to help you succeed. Is there anything else you'd like to know about our courses or services? Or would you prefer to schedule a call with one of our coaches to get personalized advice?";
    }
    else {
      response = "Thanks for your message! I'm here to help you grow your business through Instagram. I can tell you about our proven sales system, help you schedule a strategy call with our team, or assist with payment. What specifically would you like to know about converting more Instagram followers into paying clients?";
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
    // Redirect to PayPal checkout
    toast.success("Redirecting to secure payment gateway...");
    
    // Simulate a redirect to PayPal checkout
    window.open("https://www.paypal.com/checkoutnow", "_blank");
    
    // Add a follow-up message after the user clicks the payment button
    setTimeout(() => {
      const followUpMessage: Message = {
        id: Date.now().toString(),
        text: "I've opened our secure payment page for you. Once your payment is complete, you'll receive immediate access to the course and our team will reach out within 24 hours to help set up your account. If you have any questions during checkout, just let me know!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, followUpMessage]);
    }, 1500);
  };
  
  const closeCalendly = () => {
    setShowCalendly(false);
    
    // Add a follow-up message after closing Calendly
    setTimeout(() => {
      const followUpMessage: Message = {
        id: Date.now().toString(),
        text: "Great! I'll send you a confirmation email with all the details for your upcoming call. Is there anything specific you'd like our coach to focus on during your strategy session?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, followUpMessage]);
    }, 500);
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
            
            {/* Typing indicator */}
            {typing && (
              <div className="mb-3 mr-auto max-w-[85%]">
                <div className="p-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
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
