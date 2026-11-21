import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function LightboxModal({ imageItem, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!imageItem) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageItem, onClose, onPrev, onNext]);

  if (!imageItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-navy transition-all duration-200"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-navy transition-all duration-200 hidden sm:flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-navy transition-all duration-200 hidden sm:flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal content container */}
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-sunshine"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video sm:aspect-[16/10] bg-navy-900 overflow-hidden flex items-center justify-center">
          <img
            src={imageItem.image}
            alt={imageItem.title}
            className="w-full h-full object-cover sm:object-contain select-none"
            loading="lazy"
          />
        </div>

        <div className="p-5 sm:p-6 bg-cream-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-sunshine text-navy px-2.5 py-0.5 rounded-full text-xs font-heading font-bold uppercase">
                <Tag className="w-3 h-3 text-navy" />
                {imageItem.category}
              </span>
              {imageItem.tag && (
                <span className="bg-white text-navy/70 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-navy/10">
                  {imageItem.tag}
                </span>
              )}
            </div>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-navy">
              {imageItem.title}
            </h4>
            <p className="text-xs sm:text-sm text-navy/70 font-body">
              {imageItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs font-bold text-navy/50">
              Goldilocks Pre School Moments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
