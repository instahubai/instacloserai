
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface TikTokIntegrationProps {
  isTikTokEnabled: boolean;
  setIsTikTokEnabled: (enabled: boolean) => void;
}

const TikTokIntegration: React.FC<TikTokIntegrationProps> = ({ 
  isTikTokEnabled, 
  setIsTikTokEnabled 
}) => {
  const [tikTokUsername, setTikTokUsername] = useState(
    localStorage.getItem('ownerTikTokAccount') || ''
  );
  const [isConnecting, setIsConnecting] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsTikTokEnabled(checked);
    if (!checked) {
      // If turning off, remove TikTok account from localStorage
      localStorage.removeItem('ownerTikTokAccount');
      setTikTokUsername('');
      toast.info("TikTok integration disabled");
    }
  };

  const handleConnect = () => {
    if (!tikTokUsername.trim()) {
      toast.error("Please enter your TikTok username");
      return;
    }

    setIsConnecting(true);
    
    // Simulate API connection
    setTimeout(() => {
      // Save TikTok username to localStorage
      localStorage.setItem('ownerTikTokAccount', tikTokUsername.trim());
      setIsConnecting(false);
      setIsTikTokEnabled(true);
      toast.success(`Connected to TikTok: @${tikTokUsername}`);
    }, 1500);
  };

  return (
    <Card className="border border-pink-200 bg-pink-50/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-pink-500"
            >
              <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
              <path d="M10 9a8 8 0 0 1 8 8h5a14 14 0 0 0-14-14v6"/>
            </svg>
            TikTok Integration
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Switch 
              id="tiktok-mode" 
              checked={isTikTokEnabled}
              onCheckedChange={handleToggle}
            />
            <Label htmlFor="tiktok-mode">
              {isTikTokEnabled ? 'Enabled' : 'Disabled'}
            </Label>
          </div>
        </div>
        <CardDescription>
          Connect your TikTok account to automatically respond to TikTok DMs with AI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isTikTokEnabled && !tikTokUsername && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tiktok-username">Your TikTok Username</Label>
              <Input
                id="tiktok-username"
                placeholder="@yourusername"
                value={tikTokUsername}
                onChange={(e) => setTikTokUsername(e.target.value)}
              />
            </div>
          </div>
        )}
        
        {isTikTokEnabled && tikTokUsername && (
          <div className="bg-green-100 border border-green-200 rounded-md p-3 text-sm text-green-800">
            <p className="font-medium">Connected to TikTok</p>
            <p>Your AI assistant will respond to messages sent to @{tikTokUsername}</p>
          </div>
        )}
      </CardContent>
      {isTikTokEnabled && !tikTokUsername && (
        <CardFooter>
          <Button 
            onClick={handleConnect} 
            className="w-full bg-pink-500 hover:bg-pink-600"
            disabled={isConnecting}
          >
            {isConnecting ? 'Connecting...' : 'Connect TikTok Account'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default TikTokIntegration;
