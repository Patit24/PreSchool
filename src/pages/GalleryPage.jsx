import React, { useState } from 'react';
import { Eye, Tag, Sparkles, Filter, Calendar, Camera, Info } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import LightboxModal from '../components/LightboxModal';
import { galleryData, galleryCategories } from '../data/galleryData';

export default function GalleryPage({ onOpenVisitModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const filteredGallery = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  const handleLightboxNav = (direction) => {
    if (!activeLightboxImage) return;
    const currentIndex = galleryData.findIndex(item => item.id === activeLightboxImage.id);
    if (currentIndex === -1) return;
    
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % galleryData.length;
    } else {
      nextIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    }
    setActiveLightboxImage(galleryData[nextIndex]);
  };

  return (
    <div className="overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 bg-gradient-to-b from-sunshine-100/50 via-cream-100 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunshine-200 border border-sunshine-400 text-navy text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
            <span>📷</span>
            <span>Moments of Wonder</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto">
            Goldilocks Life in{' '}
            <span className="text-coral">Pictures</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-navy/75 max-w-2xl mx-auto leading-relaxed">
            A window into the joyful smiles, hands-on learning, creative masterpieces, and proud milestones at our Lake Town campus.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-sunshine text-navy shadow-button-yellow scale-105'
                    : 'bg-white text-navy/75 hover:bg-cream-100 border border-navy/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* Gallery Masonry Grid */}
      <section className="py-12 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-cream-50 border-2 border-navy/5 shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-sunshine text-navy font-heading font-bold text-xs px-3 py-1 rounded-full uppercase shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-1.5 text-sunshine text-xs font-bold mb-1">
                      <Eye className="w-4 h-4" />
                      <span>Click to enlarge photo</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-white/80 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy group-hover:text-coral transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-navy/60 font-body">
                      {item.tag || item.category}
                    </span>
                  </div>
                  <span className="text-xs font-heading font-bold bg-cream-100 text-navy px-2.5 py-1 rounded-full">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Note Regarding Campus Imagery */}
          <div className="mt-14 p-5 rounded-2xl bg-cream-100 border border-navy/10 text-xs font-body text-navy/70 flex items-start gap-3 max-w-3xl mx-auto">
            <Info className="w-5 h-5 text-coral shrink-0 mt-0.5" />
            <p>
              <strong>Notice for Prospective Parents:</strong> The visual moments above represent actual educational activities conducted under our curriculum. We welcome you to schedule an on-site visit to inspect our physical classrooms, play zones, and observe our educators in action.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <button
              onClick={onOpenVisitModal}
              className="btn-yellow text-sm py-3.5 px-8 shadow-button-yellow inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-navy" />
              <span>Book a Visit to Tour Our Lake Town Campus</span>
            </button>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        imageItem={activeLightboxImage}
        onClose={() => setActiveLightboxImage(null)}
        onPrev={() => handleLightboxNav('prev')}
        onNext={() => handleLightboxNav('next')}
      />

    </div>
  );
}
