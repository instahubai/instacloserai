
import React from 'react';
import AIAssistantAvatar from '../chat/AIAssistantAvatar';
import { Bot, Instagram, Calendar, CreditCard, MessageSquare, Users } from 'lucide-react';

const AIAssistantStatus = () => {
  return (
    <div className="rounded-lg p-5 bg-gradient-to-br from-white to-gray-50 shadow-md border border-gray-100 mt-4">
      <div className="flex items-center gap-3 mb-4">
        <AIAssistantAvatar size="lg" animated={true} />
        <div>
          <h3 className="font-bold text-lg text-primary">Nova</h3>
          <p className="text-sm text-gray-600">Your AI Sales Assistant</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <Bot size={18} className="text-primary mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">24/7 Availability</span> - Nova responds to customer inquiries instantly, any time of day
          </p>
        </div>
        
        <div className="flex items-start gap-2">
          <Instagram size={18} className="text-primary mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Social Integration</span> - Seamlessly handles conversations across Instagram and WhatsApp
          </p>
        </div>
        
        <div className="flex items-start gap-2">
          <Users size={18} className="text-primary mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Lead Qualification</span> - Evaluates prospect fit through conversation analysis
          </p>
        </div>
        
        <div className="flex items-start gap-2">
          <Calendar size={18} className="text-primary mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Scheduling</span> - Books appointments directly via your Calendly
          </p>
        </div>
        
        <div className="flex items-start gap-2">
          <CreditCard size={18} className="text-primary mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Payment Processing</span> - Handles secure transactions through your payment gateway
          </p>
        </div>
        
        <div className="flex items-start gap-2">
          <MessageSquare size={18} className="text-primary mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-medium">Capacity</span> - Handles up to 100 client conversations monthly per subscription
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantStatus;
