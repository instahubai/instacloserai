
import React from 'react';
import PayPalSubscription from './integration/PayPalSubscription';
import SocialConnections from './integration/SocialConnections';

const IntegrationOptions = () => {
  return (
    <section className="py-12 bg-gray-50" id="integration-options">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Integration Options</h2>
          
          <div className="mb-10">
            <PayPalSubscription />
          </div>
          
          <SocialConnections />
        </div>
      </div>
    </section>
  );
};

export default IntegrationOptions;
