
import { Message } from '@/types/chat';

export const respondToMessage = (userInput: string, messages: Message[]): string => {
  const input = userInput.toLowerCase();
  let response = '';

  // Handle different types of inquiries with a sales-focused approach
  if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
    response = "Our Instagram Sales Mastery course includes everything you need to automate your Instagram DMs and convert followers into course sales. We offer flexible payment options. Would you like to speak with a member of our team to discuss pricing that fits your needs?";
  } 
  else if (input.includes('payment') || input.includes('pay') || input.includes('purchase') || input.includes('buy')) {
    response = "You can securely connect via PayPal. Once your account is set up, you'll get immediate access to the course materials and our AI will automatically be connected to your Instagram and WhatsApp accounts. Would you like me to help you get started?";
  } 
  else if (input.includes('schedule') || input.includes('call') || input.includes('appointment') || input.includes('book') || input.includes('talk')) {
    response = "I'd be happy to schedule a free 30-minute strategy call with one of our coaches. During this call, we'll analyze your current Instagram strategy and identify key areas for improvement to help you attract higher-ticket clients. Would you like to see available times?";
  } 
  else if (input.includes('yes') && messages.length > 0 && messages[messages.length-1]?.text.includes('payment link')) {
    response = "Great! Here's your secure connection link. You can also click the button below to complete your setup. After connecting, you'll receive an email with your login details within 5 minutes.";
  } 
  else if ((input.includes('yes') || input.includes('time') || input.includes('available') || input.includes('when')) && messages.length > 0 && messages[messages.length-1]?.text.includes('see available times')) {
    response = "Perfect! Let me show you our available time slots. Our coaches are typically available Monday-Friday between 9am-5pm EST. Choose a time that works best for you:";
  }
  else if (input.includes('instagram') || input.includes('dm') || input.includes('direct message')) {
    response = "Our Instagram Sales Mastery course teaches you exactly how to convert DMs into high-ticket sales. Plus, when you subscribe to our service, our AI can handle your Instagram DMs automatically, pre-qualifying leads and booking calls while you sleep. Would you like to see how this works with a demo?";
  }
  else if (input.includes('whatsapp') || input.includes('text') || input.includes('message')) {
    response = "We offer complete WhatsApp automation as part of our service. After signing up, our AI will handle inquiries, qualify leads, and book calls through WhatsApp - all customized to sound exactly like you. Would you like to see how this integration works?";
  }
  else if (input.includes('facebook') || input.includes('fb') || input.includes('messenger')) {
    response = "Yes! Our AI can also integrate with Facebook Messenger to engage with potential clients, answer questions, and book sales calls - all while maintaining your unique brand voice. Would you like to learn more about our Facebook integration?";
  }
  else if (input.includes('tiktok') || input.includes('tik tok')) {
    response = "We've recently added TikTok messaging capabilities to our platform! Our AI can help convert TikTok followers into course sales by handling DMs, qualifying leads, and scheduling calls. Would you like to see how this works?";
  }
  else if (input.includes('email') || input.includes('mail')) {
    response = "Our platform includes email follow-up capabilities that work alongside our social media integrations. When a lead is qualified through Instagram or other channels, our system can automatically send personalized email sequences to nurture the relationship. Would you like to learn more about our email features?";
  }
  else if (input.includes('course') || input.includes('program') || input.includes('learn') || input.includes('what') || input.includes('info')) {
    response = "Our flagship 'Instagram Sales Mastery' course is an 8-week program that teaches you a proven system for attracting and converting high-ticket clients through Instagram. It covers content strategy, automation, sales psychology, and our proprietary 'DM-to-Deal' framework. The course includes 42 video lessons, templates, scripts, and weekly group coaching calls. Would you like me to send you the detailed curriculum?";
  }
  else if (input.includes('testimonial') || input.includes('review') || input.includes('result') || input.includes('success')) {
    response = "Our clients typically see a 3-5x increase in qualified leads within 30 days of implementing our system. For example, Sarah J. went from 2 client bookings per month to 15, tripling her revenue in just 6 weeks. Marcos T. used our DM scripts to close a $14,000 client after just 3 days of implementing our approach. Would you like to hear more success stories?";
  }
  else if (input.includes('guarantee') || input.includes('refund') || input.includes('risk')) {
    response = "We offer a satisfaction guarantee. If you implement our strategies and don't see results, we'll work with you to optimize your approach until you do. We're confident in our system because it's been tested and proven across 27 different industries. Would you like to know more about how we ensure your success?";
  }
  else if (input.includes('thank') || input.includes('great') || input.includes('awesome') || input.includes('helpful')) {
    response = "You're welcome! I'm here to help you succeed with InstaCloserAI. Is there anything else you'd like to know about our courses or services? Or would you prefer to schedule a call with one of our coaches to get personalized advice?";
  }
  else {
    response = "Thanks for your message! I'm here to help you grow your business with InstaCloserAI. I can tell you about our proven sales system, help you schedule a strategy call with our team, or assist with connecting your social accounts. What specifically would you like to know about converting more social media followers into paying clients?";
  }

  return response;
};

export const createPayPalCheckoutUrl = (
  recipientEmail: string,
  description: string,
  amount: string,
  currency: string,
  merchantId: string
): string => {
  return `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=${encodeURIComponent(recipientEmail)}&item_name=${encodeURIComponent(description)}&a3=${amount}&p3=1&t3=M&src=1&no_shipping=1&no_note=1&currency_code=${currency}&bn=PP-SubscriptionsBF&custom=${merchantId}`;
};
