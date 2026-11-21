import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, PhoneCall, ArrowRight } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export default function AnnouncementBar({ onOpenVisitModal }) {
  return (
    <div className="bg-gradient-to-r from-sunshine via-sunshine-300 to-peach text-navy font-body text-xs sm:text-sm font-semibold py-2 px-4 shadow-sm relative z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-navy px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
            Admissions Open 2026–27
          </span>
          <span className="hidden md:inline text-navy/90">
            Admissions Open for Playgroup, Nursery, Kindergarten & School Readiness!
          </span>
          <span className="md:hidden text-navy/90">
            Admissions Open | Lake Town
          </span>
        </div>

        <div className="flex items-center gap-4 mx-auto sm:mx-0 text-xs sm:text-sm">
          <a
            href={`tel:${schoolInfo.contact.primaryPhone}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-navy hover:text-navy-900 transition-colors font-bold"
          >
            <PhoneCall className="w-3.5 h-3.5 text-coral" />
            <span>{schoolInfo.contact.primaryPhone}</span>
          </a>

          <button
            onClick={onOpenVisitModal}
            className="inline-flex items-center gap-1 bg-navy text-white px-3 py-1 rounded-full text-xs font-heading font-semibold hover:bg-navy-800 transition-all hover:scale-105 active:scale-95 shadow-xs"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
