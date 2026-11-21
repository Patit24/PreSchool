import React from 'react';

export default function SectionHeader({
  badge,
  badgeIcon = '✨',
  title,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunshine-200/80 border border-sunshine-400/50 text-navy text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-3.5 shadow-xs`}>
          <span>{badgeIcon}</span>
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 font-body text-base sm:text-lg text-navy/75 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
