import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Sparkles } from 'lucide-react';

export default function ProgramCard({ program, onOpenVisitModal }) {
  return (
    <div
      className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 border-2 ${program.borderColor} ${program.bgColor} shadow-card hover:shadow-card-hover flex flex-col justify-between`}
    >
      {/* Top Tag & Illustration */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${program.badgeColor} shadow-xs`}>
            <Sparkles className="w-3 h-3" />
            {program.badge}
          </span>
          <div className="text-4xl sm:text-5xl group-hover:scale-125 transition-transform duration-300 select-none">
            {program.illustration}
          </div>
        </div>

        {/* Title & Age Range */}
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy group-hover:text-coral transition-colors">
          {program.title}
        </h3>
        
        <div className="mt-1 mb-3 inline-block font-heading text-sm font-bold text-navy/80 bg-white/70 px-3 py-0.5 rounded-full border border-navy/5">
          Age: {program.ageRange}
        </div>

        {/* Short Description */}
        <p className="font-body text-navy/80 text-sm leading-relaxed mb-6">
          {program.shortDescription}
        </p>

        {/* Quick specs */}
        <div className="space-y-1.5 pt-2 pb-4 border-t border-navy/10 text-xs font-body text-navy/70">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-navy/60 shrink-0" />
            <span>{program.timing}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-navy/60 shrink-0" />
            <span>Ratio {program.ratio}</span>
          </div>
        </div>
      </div>

      {/* Card Action Links */}
      <div className="pt-4 border-t border-navy/10 flex items-center justify-between gap-3">
        <Link
          to={`/programs#${program.id}`}
          className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-navy hover:text-coral transition-colors group-hover:translate-x-1"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <button
          onClick={() => onOpenVisitModal && onOpenVisitModal(`${program.title} (${program.ageRange})`)}
          className="text-xs font-heading font-semibold bg-white/90 hover:bg-white text-navy px-3 py-1.5 rounded-full border border-navy/10 shadow-xs hover:scale-105 active:scale-95 transition-all"
        >
          Enquire
        </button>
      </div>
    </div>
  );
}
