import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Calendar, ArrowRight, Heart, Star, CheckCircle, 
  MapPin, Phone, Users, ShieldCheck, Sun, Compass, Palette, 
  Sprout, Smile, Award, Clock, Eye, Layers, ChevronRight
} from 'lucide-react';
import FloatingDecorations from '../components/FloatingDecorations';
import ProgramCard from '../components/ProgramCard';
import SectionHeader from '../components/SectionHeader';
import LightboxModal from '../components/LightboxModal';
import { schoolInfo } from '../data/schoolInfo';
import { programsData } from '../data/programsData';
import { activitiesData } from '../data/activitiesData';
import { galleryData, galleryCategories } from '../data/galleryData';
import { testimonialsData } from '../data/testimonialsData';

export default function HomePage({ onOpenVisitModal }) {
  // Gallery state for homepage preview
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const filteredGallery = selectedCategory === 'All'
    ? galleryData.slice(0, 6)
    : galleryData.filter(item => item.category === selectedCategory).slice(0, 6);

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
    <div className="relative overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative pt-8 pb-20 lg:pt-14 lg:pb-32 overflow-hidden bg-gradient-to-b from-cream-100 via-sunshine-100/40 to-cream-100">
        <FloatingDecorations />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Floating Pill Tag */}
              <div className="inline-flex items-center gap-2 bg-white/90 border border-sunshine-400 px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-sunshine-500 text-sm">✨</span>
                <span className="font-heading font-bold text-xs sm:text-sm text-navy uppercase tracking-wider">
                  Lake Town's Premier Preschool Academy
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy tracking-tight leading-[1.12]">
                Little Steps Today,{' '}
                <span className="relative inline-block text-coral">
                  Big Dreams
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-sunshine"
                    height="12"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9C50 3 150 3 198 9"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                Tomorrow!
              </h1>

              {/* Supporting Text */}
              <p className="font-body text-base sm:text-xl text-navy/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Where little minds explore, little hearts grow, and every single day brings a thrilling new adventure of discovery, warmth, and laughter.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenVisitModal}
                  className="w-full sm:w-auto btn-yellow text-base py-4 px-8 shadow-button-yellow hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-5 h-5 text-navy" />
                  <span>Book a School Visit</span>
                </button>

                <Link
                  to="/about"
                  className="w-full sm:w-auto btn-blue text-base py-4 px-8 shadow-button-blue hover:scale-105 active:scale-95"
                >
                  <span>Explore Our School</span>
                  <ArrowRight className="w-5 h-5 text-navy" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 border-t border-navy/10">
                <div className="flex items-center gap-2">
                  <span className="text-xl">👶</span>
                  <div className="text-left">
                    <span className="font-heading font-bold text-xs sm:text-sm text-navy block leading-tight">Ages 1.5–7 Yrs</span>
                    <span className="text-[11px] text-navy/60 font-body">Four Stage Journey</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl">🧩</span>
                  <div className="text-left">
                    <span className="font-heading font-bold text-xs sm:text-sm text-navy block leading-tight">Play-Based</span>
                    <span className="text-[11px] text-navy/60 font-body">Montessori Approach</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl">🌱</span>
                  <div className="text-left">
                    <span className="font-heading font-bold text-xs sm:text-sm text-navy block leading-tight">1:8 Ratio</span>
                    <span className="text-[11px] text-navy/60 font-body">Loving Educators</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Organic decorative background shape */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sunshine via-peach to-skyblue rounded-blob opacity-70 filter blur-xl transform -rotate-6 scale-105" />

                {/* Main Hero Card */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white p-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80"
                      alt="Children engaged in joyful classroom learning at Goldilocks Pre School Lake Town"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    
                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-full bg-sunshine flex items-center justify-center font-bold text-navy">
                          🏫
                        </div>
                        <div>
                          <span className="font-heading font-bold text-xs sm:text-sm text-navy block">
                            Lake Town Campus
                          </span>
                          <span className="text-[11px] text-navy/70 font-body">
                            Block B, Opp. Mansa Mandir
                          </span>
                        </div>
                      </div>
                      <span className="bg-mint text-navy font-heading font-bold text-[11px] px-2.5 py-1 rounded-full">
                        Admissions Open
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Top Right */}
                <div className="absolute -top-5 -right-4 bg-white rounded-2xl p-3.5 shadow-xl border-2 border-sunshine transform rotate-6 animate-float-slow hidden sm:flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-coral/20 flex items-center justify-center text-coral text-base font-bold">
                    ❤️
                  </div>
                  <div>
                    <span className="font-heading font-bold text-xs text-navy block leading-none">Growing Together</span>
                    <span className="text-[10px] text-navy/60 font-body">Loving Second Home</span>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Left */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-3.5 shadow-xl border-2 border-skyblue transform -rotate-3 animate-float hidden sm:flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-skyblue/30 flex items-center justify-center text-navy text-base font-bold">
                    ⭐
                  </div>
                  <div>
                    <span className="font-heading font-bold text-xs text-navy block leading-none">20+ Years Legacy</span>
                    <span className="text-[10px] text-navy/60 font-body">Guided by Soma Kumar</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: WELCOME TO GOLDILOCKS
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Overlapping Photo Composition (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Background organic blob */}
                <div className="absolute -inset-4 bg-sunshine-100 rounded-blob-alt opacity-70 -rotate-3" />

                {/* Main Large Photo */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-card z-10">
                  <img
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80"
                    alt="Happy child in early childhood learning classroom at Goldilocks"
                    className="w-full h-[400px] sm:h-[460px] object-cover"
                  />
                </div>

                {/* Overlapping Colorful Text Card */}
                <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 z-20 max-w-xs bg-peach-100 border-4 border-white rounded-3xl p-5 sm:p-6 shadow-2xl transform rotate-1">
                  <div className="flex items-center gap-2 text-coral mb-2">
                    <Heart className="w-5 h-5 fill-coral" />
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-navy">
                      Our Promise
                    </span>
                  </div>
                  <p className="font-heading text-lg font-bold text-navy leading-snug">
                    "Every child enters with curiosity and leaves with wings of confidence."
                  </p>
                  <p className="font-body text-xs text-navy/70 mt-2 font-medium">
                    — Soma Kumar, Academic Director
                  </p>
                </div>

              </div>
            </div>

            {/* Right: Content & 3 Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach-100 border border-peach-400 text-navy text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
                <span>🧸</span>
                <span>Welcome to Goldilocks</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight">
                Every Child Is Special.{' '}
                <span className="text-coral">Every Journey Is Unique.</span>
              </h2>

              <p className="font-body text-base sm:text-lg text-navy/80 leading-relaxed">
                At Goldilocks Pre School, we believe childhood is the foundation of lifelong learning. We provide a joyful, caring, and stimulating environment where children discover their interests, develop confidence, and learn through exploration.
              </p>

              {/* Three Highlights */}
              <div className="space-y-4 pt-2">
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream-100 border border-navy/5 shadow-xs hover:bg-sunshine-100/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-coral/20 text-coral flex items-center justify-center shrink-0 text-xl font-bold">
                    ❤️
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">
                      Loving & Caring Environment
                    </h3>
                    <p className="font-body text-sm text-navy/70 mt-0.5">
                      Warm educators trained in emotional validation, separation comfort, and gentle encouragement make school feel like a second home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream-100 border border-navy/5 shadow-xs hover:bg-skyblue-100/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-skyblue/30 text-skyblue-600 flex items-center justify-center shrink-0 text-xl font-bold">
                    🎨
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">
                      Activity-Based Learning
                    </h3>
                    <p className="font-body text-sm text-navy/70 mt-0.5">
                      Montessori materials, sensory tables, yoga, and interactive phonics ensure concepts are discovered joyfully, never memorized under stress.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream-100 border border-navy/5 shadow-xs hover:bg-mint-100/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-mint/40 text-mint-600 flex items-center justify-center shrink-0 text-xl font-bold">
                    🌟
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">
                      Individual Attention
                    </h3>
                    <p className="font-body text-sm text-navy/70 mt-0.5">
                      Intimate class sizes guarantee that each child's quirks, developmental milestones, and natural curiosities are nurtured personally.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:text-coral transition-colors"
                >
                  <span>Read our complete story & philosophy</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: OUR LEARNING PROGRAMS
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Nurturing Every Milestone"
            badgeIcon="🎓"
            title="Our Early Learning Programs"
            subtitle="Thoughtfully structured for children aged 1.5 to 7 years, blending gentle emotional care with active cognitive and creative discovery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {programsData.map((prog) => (
              <ProgramCard
                key={prog.id}
                program={prog}
                onOpenVisitModal={onOpenVisitModal}
              />
            ))}
          </div>

          <div className="mt-12 p-6 rounded-3xl bg-white border-2 border-sunshine text-center max-w-3xl mx-auto shadow-sm">
            <h4 className="font-heading text-lg font-bold text-navy">
              Not sure which program matches your child's developmental age?
            </h4>
            <p className="font-body text-sm text-navy/70 mt-1 mb-4">
              Our academic counselors in Lake Town will gladly guide you and arrange a complimentary classroom observation visit.
            </p>
            <button
              onClick={onOpenVisitModal}
              className="btn-yellow text-sm py-2.5 px-6 shadow-button-yellow"
            >
              Talk to Our Academic Director
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: WHY PARENTS CHOOSE GOLDILOCKS
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="The Goldilocks Advantage"
            badgeIcon="💛"
            title="A Happy Place to Learn, Play & Grow"
            subtitle="Six core reasons why families across Lake Town, Bangur Avenue, South Dumdum, and Salt Lake choose us for their child's early education."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {schoolInfo.features.map((feat) => (
              <div
                key={feat.id}
                className="group rounded-3xl p-6 sm:p-8 border-2 border-navy/5 bg-cream-50 hover:bg-white hover:border-sunshine-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 border shadow-xs group-hover:scale-110 transition-transform ${feat.color}`}>
                    {feat.id === 'play-way' && '🧩'}
                    {feat.id === 'small-classes' && '👨‍👧‍👦'}
                    {feat.id === 'caring-educators' && '🤝'}
                    {feat.id === 'in-house-playground' && '🎠'}
                    {feat.id === 'creative-activities' && '🎨'}
                    {feat.id === 'school-admission' && '🏆'}
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy group-hover:text-coral transition-colors mb-2">
                    {feat.title}
                  </h3>

                  <p className="font-body text-navy/75 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-navy/5 flex items-center gap-1.5 text-xs font-bold text-navy/60 group-hover:text-navy">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Goldilocks Standard</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: LEARNING BEYOND CLASSROOMS
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-cream-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Holistic Enrichment"
            badgeIcon="🌈"
            title="Learning Beyond Classrooms"
            subtitle="Childhood is multi-dimensional. We stimulate physical vitality, sensory joy, and cultural appreciation through exciting weekly extracurriculars."
          />

          {/* Asymmetric Activity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {activitiesData.slice(0, 6).map((act, index) => (
              <div
                key={act.id}
                className={`group rounded-3xl overflow-hidden bg-white border-2 ${act.border} shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${act.badgeColor} shadow-sm`}>
                      {act.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy group-hover:text-coral transition-colors">
                      {act.title}
                    </h3>
                    <p className="font-heading text-xs font-bold text-navy/60 mb-2">
                      {act.tagline}
                    </p>
                    <p className="font-body text-navy/75 text-sm line-clamp-3">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-navy/10 flex items-center justify-between text-xs font-heading font-bold">
                    <span className="text-navy/60">{act.ageGroup}</span>
                    <Link
                      to="/activities"
                      className="text-navy hover:text-coral inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/activities"
              className="btn-navy text-sm py-3 px-8 shadow-button-navy inline-flex items-center gap-2"
            >
              <span>View All Weekly Activities & Schedules</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: OUR LEARNING PHILOSOPHY (3 PILLARS)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Childhood Centric Pedagogy"
            badgeIcon="🧭"
            title="Learning Should Feel Like an Adventure!"
            subtitle="Our educational blueprint is anchored on three foundational pillars designed to nurture the whole child — heart, mind, and spirit."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Visual connector line on desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-gradient-to-r from-skyblue via-peach to-mint -translate-y-12 z-0" />

            {schoolInfo.pillars.map((pil, idx) => (
              <div
                key={pil.id}
                className={`relative z-10 rounded-3xl p-8 border-3 ${pil.color} bg-white shadow-card hover:shadow-card-hover transition-all duration-300 text-center flex flex-col items-center`}
              >
                {/* Step index badge */}
                <div className="w-16 h-16 rounded-full bg-cream-100 border-2 border-navy/10 flex items-center justify-center font-heading font-extrabold text-2xl text-navy mb-4 shadow-sm">
                  {idx + 1}
                </div>

                <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-navy/5 text-navy mb-2">
                  {pil.badge}
                </span>

                <h3 className="font-heading text-3xl font-extrabold text-navy tracking-tight">
                  {pil.title}
                </h3>
                
                <h4 className="font-heading text-sm font-bold text-coral mb-3">
                  {pil.subtitle}
                </h4>

                <p className="font-body text-navy/75 text-sm leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: PRINCIPAL'S MESSAGE (SOMA KUMAR)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-sunshine-100/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-4xl p-6 sm:p-10 lg:p-14 border-3 border-sunshine shadow-card relative overflow-hidden">
            
            {/* Background sparkle accents */}
            <div className="absolute top-4 right-6 text-3xl opacity-30 select-none">✨</div>
            <div className="absolute bottom-4 left-6 text-3xl opacity-30 select-none">🌸</div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Principal Photo & Details (4 cols) */}
              <div className="lg:col-span-4 text-center lg:text-left space-y-4">
                <div className="relative mx-auto lg:mx-0 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-4 border-sunshine shadow-md bg-cream-50">
                  {schoolInfo.principal.image ? (
                    <>
                      <img
                        src={schoolInfo.principal.image}
                        alt={schoolInfo.principal.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-navy/70 text-white text-[10px] font-heading font-bold py-1 text-center backdrop-blur-xs">
                        Academic Leadership
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full border-2 border-dashed border-sunshine-400/80 bg-cream-50 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sunshine-200/80 flex items-center justify-center text-3xl sm:text-4xl mb-2 shadow-xs">
                        👩‍🏫
                      </div>
                      <span className="font-heading font-bold text-sm text-navy block">
                        {schoolInfo.principal.name}
                      </span>
                      <span className="text-xs text-navy/60 font-body block mt-0.5">
                        Founder & Academic Director
                      </span>
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-coral border border-coral/20">
                        Photo to be updated
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-navy">
                    {schoolInfo.principal.name}
                  </h3>
                  <p className="font-heading text-sm font-semibold text-coral">
                    {schoolInfo.principal.designation}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-sunshine/40 text-navy px-3 py-1 rounded-full text-xs font-bold">
                    <Award className="w-3.5 h-3.5 text-navy" />
                    <span>{schoolInfo.principal.experience}</span>
                  </div>
                </div>
              </div>

              {/* Message Content (8 cols) */}
              <div className="lg:col-span-8 space-y-4 text-navy">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-navy/70">
                  <span>🕊️</span>
                  <span>A Warm Message for Parents</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                  "Nurturing Childhood with Wonder, Love and Emotional Security"
                </h3>

                <blockquote className="font-body text-base sm:text-lg text-navy/85 leading-relaxed italic border-l-4 border-sunshine pl-4 sm:pl-6 my-4">
                  "{schoolInfo.principal.message}"
                </blockquote>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-body text-navy/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Personalized Mentoring</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Grade 1 Admission Guidance</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Open Door Parent Collaboration</span>
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenVisitModal}
                    className="btn-yellow text-xs sm:text-sm py-2.5 px-5 shadow-button-yellow"
                  >
                    <span>Schedule an Appointment with Mrs. Soma Kumar</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: HAPPY MOMENTS GALLERY (PREVIEW + LIGHTBOX)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Memories & Smiles"
            badgeIcon="📸"
            title="Happy Moments at Goldilocks"
            subtitle="Catch a glimpse into the everyday giggles, messy art discoveries, and proud milestones created inside our Lake Town campus."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-sunshine text-navy shadow-button-yellow scale-105'
                    : 'bg-white text-navy/70 hover:bg-white hover:text-navy border border-navy/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-white border-2 border-navy/5 shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-navy-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white">
                      <span className="bg-sunshine text-navy font-heading font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase mb-1 inline-block">
                        {item.category}
                      </span>
                      <h4 className="font-heading font-bold text-base leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/80 font-body mt-1 line-clamp-1">
                        Click to view full photo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white flex items-center justify-between sm:hidden">
                  <span className="font-heading font-bold text-xs text-navy">{item.title}</span>
                  <span className="text-[10px] bg-sunshine-100 px-2 py-0.5 rounded-full font-bold">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="btn-yellow text-sm py-3 px-8 shadow-button-yellow inline-flex items-center gap-2"
            >
              <span>Explore Complete Campus Gallery (12+ Moments)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 9: PARENT VOICES / TESTIMONIALS
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Parent Stories"
            badgeIcon="💬"
            title="Loved by Lake Town Families"
            subtitle="Hear what parents share about the warmth, learning culture, and visible transformation they experience at Goldilocks Pre School."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="rounded-3xl p-6 sm:p-8 bg-cream-50 border-2 border-navy/5 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-sunshine-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sunshine text-sunshine" />
                    ))}
                  </div>

                  <p className="font-body text-navy/80 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-navy/10">
                  <img
                    src={t.avatar}
                    alt={t.parentName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-sunshine"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy">
                      {t.parentName}
                    </h4>
                    <p className="text-xs text-navy/60 font-body">
                      {t.relation} • {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 10: PARENT ENQUIRY CTA BANNER
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-sunshine via-sunshine-300 to-peach text-navy relative overflow-hidden">
        {/* Floating background playful shapes */}
        <div className="absolute -top-10 -left-10 text-6xl opacity-20">🎈</div>
        <div className="absolute -bottom-10 -right-10 text-6xl opacity-20">🎨</div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-white/90 text-navy px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-coral" />
            Admissions Open 2026–27
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Let's Begin Your Child's Beautiful Journey!
          </h2>

          <p className="font-body text-base sm:text-lg text-navy/80 max-w-2xl mx-auto leading-relaxed">
            Come visit Goldilocks Pre School and discover a world of learning, laughter, and new possibilities. Tour our classrooms, meet our team, and let your child play!
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenVisitModal}
              className="w-full sm:w-auto btn-navy text-base py-4 px-8 shadow-button-navy hover:scale-105 active:scale-95"
            >
              <Calendar className="w-5 h-5 text-sunshine" />
              <span>Schedule a School Visit</span>
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white hover:bg-cream-50 text-navy font-heading font-bold text-base py-4 px-8 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <span>Contact Us & Directions</span>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-navy/70">
            <span>📍 Opposite Mansa Mandir / Axis Bank, Lake Town</span>
            <span>•</span>
            <span>📞 Call: +91 89105 74735</span>
            <span>•</span>
            <span>⏰ Mon–Sat: 8 AM–2 PM</span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 11: LOCATION & GOOGLE MAPS SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Address Details (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-skyblue-100 border border-skyblue-400 text-navy text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-coral" />
                <span>Our Lake Town Location</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Conveniently Situated in the Heart of Lake Town
              </h2>

              <div className="p-6 rounded-3xl bg-cream-100 border-2 border-navy/5 space-y-4 text-sm font-body">
                <div>
                  <span className="font-heading font-bold text-navy block text-base">Campus Address:</span>
                  <p className="text-navy/80 mt-1 leading-relaxed">
                    <strong>{schoolInfo.name}</strong><br />
                    48, Lake Town Road, Block B,<br />
                    Lake Town, South Dumdum, Kolkata,<br />
                    West Bengal – 700089.
                  </p>
                </div>

                <div className="p-3 bg-sunshine-100 rounded-2xl border border-sunshine-400 text-xs text-navy font-bold flex items-center gap-2">
                  <span>📍 Landmark:</span>
                  <span>Opposite row of Mansa Mandir / Axis Bank</span>
                </div>

                <div className="space-y-1.5 text-xs text-navy/70 pt-2 border-t border-navy/10">
                  <p><strong>Accessibility:</strong> 2 mins from Lake Town Clock Tower & VIP Road</p>
                  <p><strong>Environment:</strong> Safe, residential neighborhood with easy drop-off</p>
                  <p><strong>Visiting Hours:</strong> Monday – Saturday: 8:00 AM – 2:00 PM</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${schoolInfo.contact.primaryPhone}`}
                  className="btn-yellow text-xs py-2.5 px-5 shadow-button-yellow"
                >
                  <Phone className="w-4 h-4 text-navy" />
                  <span>Call {schoolInfo.contact.primaryPhone}</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=Lake+Town+Block+B+Kolkata+West+Bengal+700089`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue text-xs py-2.5 px-5 shadow-button-blue"
                >
                  <MapPin className="w-4 h-4 text-navy" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden border-4 border-sunshine shadow-card aspect-[4/3] sm:aspect-[16/10] bg-cream-200 relative">
                <iframe
                  title="Goldilocks Pre School Lake Town Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.567879482924!2d88.3995!3d22.6074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d970e7e1f4d%3A0x6b6c0e5a6f2b0c1!2sLake%20Town%2C%20Kolkata%2C%20West%20Bengal%20700089!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

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
