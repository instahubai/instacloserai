
import React from 'react';
import AIAssistantAvatar from '../chat/AIAssistantAvatar';

const AIAssistantStatus = () => {
  return (
    <div className="rounded-lg p-4 bg-gray-100 mt-4">
      <div className="flex items-center gap-2 mb-2">
        <AIAssistantAvatar size="sm" />
        <h4 className="font-medium">Nova AI Assistant Status</h4>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        After connecting your social accounts and completing onboarding, Nova will:
      </p>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
        <li>Respond to customer inquiries 24/7 on Instagram and WhatsApp</li>
        <li>Qualify leads based on their responses using conversation analysis</li>
        <li>Schedule appointments automatically using your Calendly link</li>
        <li>Handle payments securely through your preferred gateway</li>
        <li>Log all interactions in your dashboard for review</li>
        <li>Handle up to 100 clients per month with your subscription</li>
      </ul>
    </div>
  );
};

export default AIAssistantStatus;
