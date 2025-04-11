
import React from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  closeCalendly: () => void;
}

const CalendlyModal = ({ closeCalendly }: CalendlyModalProps) => {
  return (
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
  );
};

export default CalendlyModal;
