
import { useState, useEffect } from 'react';

export const useOwnerAccounts = () => {
  const [ownerNumber, setOwnerNumber] = useState<string | null>(null);
  const [ownerInstagram, setOwnerInstagram] = useState<string | null>(null);
  const [ownerTikTok, setOwnerTikTok] = useState<string | null>(null);

  // Load owner's account details if available
  useEffect(() => {
    const savedOwnerNumber = localStorage.getItem('ownerWhatsappNumber');
    const savedInstagramAccount = localStorage.getItem('ownerInstagramAccount');
    const savedTikTokAccount = localStorage.getItem('ownerTikTokAccount');
    
    if (savedOwnerNumber) {
      setOwnerNumber(savedOwnerNumber);
    }
    
    if (savedInstagramAccount) {
      setOwnerInstagram(savedInstagramAccount);
    }
    
    if (savedTikTokAccount) {
      setOwnerTikTok(savedTikTokAccount);
    }
  }, []);

  return {
    ownerNumber,
    ownerInstagram,
    ownerTikTok,
    setOwnerNumber,
    setOwnerInstagram,
    setOwnerTikTok
  };
};
