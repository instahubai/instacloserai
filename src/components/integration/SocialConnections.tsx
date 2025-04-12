
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, MessageSquare, Check } from 'lucide-react';
import { toast } from "sonner";
import AIAssistantStatus from './AIAssistantStatus';

const SocialConnections = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [instagramUsername, setInstagramUsername] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [showInstagramForm, setShowInstagramForm] = useState(false);
  const [showWhatsappForm, setShowWhatsappForm] = useState(false);
  const [accountConnected, setAccountConnected] = useState({
    instagram: false,
    whatsapp: false
  });

  // Owner's account details for testing
  const ownerNumber = '+61485970998';
  const ownerInstagram = 'instacloserai';
  
  // Check for existing connections on component mount
  useEffect(() => {
    const savedOwnerNumber = localStorage.getItem('ownerWhatsappNumber');
    const savedInstagramAccount = localStorage.getItem('ownerInstagramAccount');
    
    if (savedOwnerNumber) {
      setAccountConnected(prev => ({ ...prev, whatsapp: true }));
    }
    
    if (savedInstagramAccount) {
      setAccountConnected(prev => ({ ...prev, instagram: true }));
    }
  }, []);

  // Social account connection handler
  const handleAccountConnection = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data based on which social accounts are being connected
    if (showInstagramForm && !instagramUsername) {
      toast.error("Please enter your Instagram username");
      return;
    }

    if (showWhatsappForm && !whatsappNumber) {
      toast.error("Please enter your WhatsApp number");
      return;
    }

    setIsLoading(true);
    
    try {
      // Update the connected status based on which form was submitted
      if (showInstagramForm) {
        // Special handling for owner's Instagram
        if (instagramUsername === ownerInstagram || instagramUsername.toLowerCase() === ownerInstagram.toLowerCase()) {
          setAccountConnected(prev => ({ ...prev, instagram: true }));
          toast.success(`Owner's Instagram account @${ownerInstagram} connected for testing!`);
          
          // Save the owner's Instagram in localStorage for the ChatBot to use
          localStorage.setItem('ownerInstagramAccount', ownerInstagram);
          
          // Show a special notification for the test mode
          setTimeout(() => {
            toast.info("Instagram test mode activated! The AI will simulate responding to DMs on the owner's account.");
          }, 1000);
        } else {
          setAccountConnected(prev => ({ ...prev, instagram: true }));
          toast.success(`Instagram account @${instagramUsername} connected successfully!`);
          localStorage.setItem('connectedInstagramAccount', instagramUsername);
        }
      }
      
      if (showWhatsappForm) {
        // Special handling for owner's number
        if (whatsappNumber === ownerNumber || whatsappNumber === ownerNumber.replace('+', '')) {
          setAccountConnected(prev => ({ ...prev, whatsapp: true }));
          toast.success(`Owner's business WhatsApp number connected for testing! Messages will be sent here.`);
          
          // Save the owner's number in localStorage for the ChatBot to use
          localStorage.setItem('ownerWhatsappNumber', ownerNumber);
          
          // Show a special notification for the test mode
          setTimeout(() => {
            toast.info("WhatsApp test mode activated! All messages will be directed to the owner's business WhatsApp number.");
          }, 1000);
        } else {
          setAccountConnected(prev => ({ ...prev, whatsapp: true }));
          toast.success(`WhatsApp number ${whatsappNumber} connected successfully!`);
          localStorage.setItem('connectedWhatsappNumber', whatsappNumber);
        }
      }

      // Clear the form
      if (showInstagramForm) setInstagramUsername('');
      if (showWhatsappForm) setWhatsappNumber('');
      
      // Collapse the form after successful submission
      setShowInstagramForm(false);
      setShowWhatsappForm(false);
      
    } catch (error) {
      console.error("Error connecting account:", error);
      toast.error("Failed to connect account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle forms
  const toggleInstagramForm = () => {
    setShowInstagramForm(!showInstagramForm);
    if (showWhatsappForm) setShowWhatsappForm(false);
  };

  const toggleWhatsappForm = () => {
    setShowWhatsappForm(!showWhatsappForm);
    if (showInstagramForm) setShowInstagramForm(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-semibold mb-4">Connect Social Accounts</h3>
      <p className="text-gray-600 mb-6">
        Connect your Instagram and WhatsApp accounts to automate responses and capture leads.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Button 
          onClick={toggleInstagramForm} 
          className={`flex-1 ${showInstagramForm ? 'bg-purple-700' : accountConnected.instagram ? 'bg-green-600' : 'bg-purple-600 hover:bg-purple-700'}`}
        >
          {accountConnected.instagram ? (
            <>
              <Check size={16} className="mr-2" />
              Instagram Connected
            </>
          ) : (
            <>
              <Instagram size={16} className="mr-2" />
              Connect Instagram
            </>
          )}
        </Button>
        
        <Button 
          onClick={toggleWhatsappForm} 
          className={`flex-1 ${showWhatsappForm ? 'bg-green-700' : accountConnected.whatsapp ? 'bg-green-600' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {accountConnected.whatsapp ? (
            <>
              <Check size={16} className="mr-2" />
              WhatsApp Connected
            </>
          ) : (
            <>
              <MessageSquare size={16} className="mr-2" />
              Connect WhatsApp
            </>
          )}
        </Button>
      </div>
      
      {/* Instagram Form */}
      {showInstagramForm && (
        <div className="border border-purple-200 rounded-lg p-4 mb-4 bg-purple-50">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Instagram size={16} className="text-purple-600" />
            Instagram Connection
          </h4>
          <form onSubmit={handleAccountConnection} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Instagram username"
              value={instagramUsername}
              onChange={(e) => setInstagramUsername(e.target.value)}
            />
            <Button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isLoading}
            >
              {isLoading ? "Connecting..." : "Connect Account"}
            </Button>
            <p className="text-xs text-gray-500">
              For testing, use the owner's Instagram username: instacloserai
            </p>
          </form>
        </div>
      )}
      
      {/* WhatsApp Form */}
      {showWhatsappForm && (
        <div className="border border-green-200 rounded-lg p-4 mb-4 bg-green-50">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <MessageSquare size={16} className="text-green-600" />
            WhatsApp Connection
          </h4>
          <form onSubmit={handleAccountConnection} className="space-y-4">
            <Input
              type="tel"
              placeholder="Your WhatsApp number (with country code)"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
            <Button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={isLoading}
            >
              {isLoading ? "Connecting..." : "Connect Number"}
            </Button>
            <p className="text-xs text-gray-500">
              For testing, use the owner's business number: +61485970998
            </p>
          </form>
        </div>
      )}
      
      <AIAssistantStatus />
    </div>
  );
};

export default SocialConnections;
