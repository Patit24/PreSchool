import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export default function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group">
      {/* Friendly floating speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-1.5 bg-white text-navy font-heading font-semibold text-xs px-3.5 py-2 rounded-full shadow-lg border border-navy/10 animate-fade-in">
          <span>Need help? Chat with us!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-navy/40 hover:text-navy p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Circle */}
      <a
        href={schoolInfo.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat with Goldilocks Pre School on WhatsApp"
      >
        {/* Pulsating ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-70 animate-ping" />
        
        <MessageCircle className="w-7 h-7 relative z-10 fill-white text-emerald-500" />
      </a>
    </div>
  );
}
