import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Sparkles, CheckCircle, Clock, Users, ArrowRight, 
  Calendar, BookOpen, Smile, Star, ShieldCheck 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { programsData } from '../data/programsData';

export default function ProgramsPage({ onOpenVisitModal }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(programsData[0].id);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const exists = programsData.find(p => p.id === id);
      if (exists) {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location.hash]);

  const activeProgram = programsData.find(p => p.id === activeTab) || programsData[0];

  return (
    <div className="overflow-hidden">
      
      {/* Top Banner */}
      <section className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 bg-gradient-to-b from-sunshine-100/50 via-cream-100 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-skyblue-100 border border-skyblue-400 text-navy text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
            <span>🎓</span>
            <span>Ages 1.5 to 7 Years</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto">
            Early Learning Programs at{' '}
            <span className="text-coral">Goldilocks</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-navy/75 max-w-2xl mx-auto leading-relaxed">
            Tailored developmental stages honoring each child’s rhythm. Structured to build curiosity, foundational literacy, numeracy, and confident socio-emotional skills.
          </p>

          {/* Quick Tab Switcher */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            {programsData.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`px-5 py-3 rounded-2xl font-heading text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === prog.id
                    ? `${prog.bgColor} ${prog.textColor} border-2 ${prog.borderColor} shadow-sm scale-105`
                    : 'bg-white text-navy/70 border border-navy/10 hover:bg-cream-100'
                }`}
              >
                <span>{prog.illustration}</span>
                <span>{prog.title}</span>
                <span className="text-[11px] opacity-75 hidden sm:inline">({prog.ageRange})</span>
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* Active Program Spotlight Section */}
      <section id={activeProgram.id} className="py-12 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className={`rounded-4xl p-6 sm:p-10 lg:p-14 border-4 ${activeProgram.borderColor} ${activeProgram.bgColor} shadow-card`}>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Program Overview & Header (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider ${activeProgram.badgeColor}`}>
                    {activeProgram.badge}
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-navy border border-navy/10">
                    Age Group: {activeProgram.ageRange}
                  </span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
                  {activeProgram.title} Program
                </h2>

                <p className="font-heading text-lg font-bold text-coral">
                  "{activeProgram.tagline}"
                </p>

                <p className="font-body text-navy/85 text-base sm:text-lg leading-relaxed">
                  {activeProgram.overview}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-body text-navy">
                  <div className="bg-white/80 p-3 rounded-2xl border border-navy/10">
                    <span className="font-heading font-bold block text-navy/60">Class Timing</span>
                    <span className="font-bold text-sm text-navy">{activeProgram.timing}</span>
                  </div>
                  <div className="bg-white/80 p-3 rounded-2xl border border-navy/10">
                    <span className="font-heading font-bold block text-navy/60">Educator Ratio</span>
                    <span className="font-bold text-sm text-navy">{activeProgram.ratio}</span>
                  </div>
                  <div className="bg-white/80 p-3 rounded-2xl border border-navy/10 col-span-2 sm:col-span-1">
                    <span className="font-heading font-bold block text-navy/60">Pedagogy</span>
                    <span className="font-bold text-sm text-navy">Play-Way Discovery</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenVisitModal}
                    className="btn-yellow text-sm py-3 px-6 shadow-button-yellow"
                  >
                    <Calendar className="w-4 h-4 text-navy" />
                    <span>Enquire for {activeProgram.title}</span>
                  </button>
                </div>

              </div>

              {/* Program Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-[4/3] sm:aspect-square">
                  <img
                    src={activeProgram.image}
                    alt={`${activeProgram.title} at Goldilocks Pre School Lake Town`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 text-5xl">
                    {activeProgram.illustration}
                  </div>
                </div>
              </div>

            </div>

            {/* Deep Dive: Milestones & Curriculum Highlights */}
            <div className="mt-12 pt-10 border-t border-navy/10 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Development Milestones */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-navy/5">
                <h3 className="font-heading text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Key Developmental Milestones</span>
                </h3>
                <ul className="space-y-3 font-body text-sm text-navy/80">
                  {activeProgram.keyMilestones.map((m, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-coral mt-1.5 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum Highlights */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-navy/5">
                <h3 className="font-heading text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-skyblue-600" />
                  <span>Curriculum & Learning Stations</span>
                </h3>
                <div className="space-y-3 font-body text-sm text-navy/80">
                  {activeProgram.curriculumHighlights.map((c, i) => (
                    <div key={i} className="pb-2 border-b border-navy/5 last:border-none">
                      <span className="font-heading font-bold text-navy block">{c.title}</span>
                      <span className="text-xs text-navy/70">{c.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Daily Routine */}
            <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-navy/5">
              <h3 className="font-heading text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-sunshine-600" />
                <span>Typical Daily Routine & Schedule</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeProgram.dailyRoutine.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-cream-50 border border-navy/5 text-xs">
                    <span className="font-heading font-bold text-coral block">{item.time}</span>
                    <span className="font-body text-navy/80 mt-0.5 block">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* All Programs Summary Grid */}
      <section className="py-16 lg:py-24 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full Academic Journey"
            badgeIcon="🌱"
            title="Overview of All Age Categories"
            subtitle="Click on any stage to switch details or schedule a personalized walk-through."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programsData.map((prog) => (
              <div
                key={prog.id}
                onClick={() => {
                  setActiveTab(prog.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border-2 ${prog.borderColor} ${prog.bgColor} hover:-translate-y-1 shadow-card`}
              >
                <div className="text-4xl mb-3">{prog.illustration}</div>
                <h4 className="font-heading text-xl font-bold text-navy">{prog.title}</h4>
                <span className="text-xs font-bold text-navy/70 block mt-1">Age: {prog.ageRange}</span>
                <p className="text-xs text-navy/80 mt-2 font-body line-clamp-2">{prog.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-heading font-bold text-coral">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenVisitModal}
              className="btn-navy text-sm py-3.5 px-8 shadow-button-navy inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-sunshine" />
              <span>Book a Visit to Observe Any Classroom</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
