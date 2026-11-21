import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Sparkles, Target, Compass, Award, CheckCircle, 
  Shield, Sun, BookOpen, Users, MapPin, Calendar, ArrowRight, Star
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { schoolInfo } from '../data/schoolInfo';

export default function AboutPage({ onOpenVisitModal }) {
  return (
    <div className="overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative pt-12 pb-20 lg:pt-18 lg:pb-28 bg-gradient-to-b from-sunshine-100/60 via-cream-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach-100 border border-peach-400 text-navy text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
            <span>✨</span>
            <span>Discover Goldilocks Pre School</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto">
            A Journey of Love, Wonder &{' '}
            <span className="text-coral">Purposeful Play</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-navy/75 max-w-2xl mx-auto leading-relaxed">
            Founded in Lake Town, Kolkata with an unwavering dedication to joyful, stress-free, and developmentally sound early childhood learning.
          </p>
        </div>
      </section>


      {/* Section 1: Our Story */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-sunshine shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                  alt="Story of Goldilocks Pre School Lake Town"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-md text-xs font-heading font-bold text-navy">
                  📍 Est. Lake Town, Kolkata
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-heading font-bold text-coral uppercase tracking-wider">
                <span>📖</span>
                <span>Our Story</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy leading-tight">
                Born From a Passion for Nurturing Young Minds
              </h2>

              <p className="font-body text-navy/80 text-base leading-relaxed">
                Goldilocks Pre School was founded with a singular conviction: early childhood should never be a high-pressure race. It is a sacred window of discovery, where curiosity must be stoked with affection, sensory exploration, and creative safety.
              </p>

              <p className="font-body text-navy/80 text-base leading-relaxed">
                Located on Lake Town Road opposite Mansa Mandir / Axis Bank, our school provides a tranquil, vibrant sanctuary away from the hustle of Kolkata traffic. Over the years, we have nurtured hundreds of young minds into articulate, kind, and confident learners ready for the best formal institutions across the city.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-cream-100 border border-navy/5">
                  <span className="font-heading font-bold text-2xl text-navy block">20+</span>
                  <span className="text-xs text-navy/60 font-body">Years Educator Experience</span>
                </div>
                <div className="p-4 rounded-2xl bg-cream-100 border border-navy/5">
                  <span className="font-heading font-bold text-2xl text-navy block">1:8</span>
                  <span className="text-xs text-navy/60 font-body">Personal Care & Attention</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Section 2: Vision & Mission */}
      <section className="py-16 lg:py-24 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Guiding Lights"
            badgeIcon="🎯"
            title="Vision & Mission"
            subtitle="The core values guiding every interaction, lesson plan, and smile at Goldilocks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-sunshine shadow-card space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sunshine/40 text-navy flex items-center justify-center text-2xl font-bold">
                👁️
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Our Vision
              </h3>
              <p className="font-body text-navy/80 text-base leading-relaxed">
                To be Kolkata's most cherished early learning haven — a place where every child’s innate potential is unlocked with joy, where curiosity is celebrated as the highest virtue, and where children build an enduring love for knowledge that lasts a lifetime.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm font-body text-navy/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Emotionally grounded, resilient children</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Respect for cultural values and global empathy</span>
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-peach-400 shadow-card space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-peach-100 text-coral flex items-center justify-center text-2xl font-bold">
                🚀
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Our Mission
              </h3>
              <p className="font-body text-navy/80 text-base leading-relaxed">
                To provide a play-way, child-centered curriculum led by warm, highly empathetic educators; fostering independent thinking, expressive communication, sensory coordination, and flawless readiness for formal Grade 1 admissions.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm font-body text-navy/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Holistic physical, cognitive & artistic development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Transparent, collaborative partnership with parents</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* Section 3: Meet Our Principal */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-100 rounded-4xl p-8 sm:p-12 border-2 border-navy/5 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-4 text-center space-y-4">
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-sunshine shadow-md bg-cream-50">
                  {schoolInfo.principal.image ? (
                    <img
                      src={schoolInfo.principal.image}
                      alt={schoolInfo.principal.name}
                      className="w-full h-full object-cover"
                    />
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
                    Founder & Academic Director
                  </p>
                  <p className="text-xs font-bold text-navy/70 mt-1">
                    {schoolInfo.principal.experience}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-navy/70">
                  <span>🎓</span>
                  <span>Leadership With Heart</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                  Guiding Young Hearts With Experience and Gentle Wisdom
                </h2>

                <p className="font-body text-navy/80 text-base leading-relaxed">
                  With more than two decades at the forefront of early childhood education in Kolkata, Mrs. Soma Kumar brings a deep pedagogical understanding of toddler milestones and primary school entry expectations.
                </p>

                <p className="font-body text-navy/80 text-base leading-relaxed">
                  "My goal is simple: that no child ever wakes up not wanting to come to school. When school is a place of smiles, acceptance, and gentle discovery, learning happens naturally and joyfully."
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenVisitModal}
                    className="btn-yellow text-xs sm:text-sm py-2.5 px-6 shadow-button-yellow"
                  >
                    <span>Meet Mrs. Soma Kumar in Person</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Section 4: Why Early Childhood Education Matters */}
      <section className="py-16 lg:py-24 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Scientific Foundations"
            badgeIcon="🧠"
            title="Why Early Childhood Education Matters"
            subtitle="Ninety percent of a human brain develops before age five. How children spend these formative years shapes their lifelong relationship with learning and relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-white border border-navy/5 shadow-card space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-skyblue-100 text-skyblue-600 flex items-center justify-center text-xl font-bold">
                💡
              </div>
              <h3 className="font-heading text-xl font-bold text-navy">
                Cognitive Wiring
              </h3>
              <p className="font-body text-sm text-navy/75 leading-relaxed">
                Play stimulates neural synapses. Block building teaches spatial math, while storytelling unlocks complex linguistic sequencing.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-navy/5 shadow-card space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-peach-100 text-peach-500 flex items-center justify-center text-xl font-bold">
                🤝
              </div>
              <h3 className="font-heading text-xl font-bold text-navy">
                Social Co-Regulation
              </h3>
              <p className="font-body text-sm text-navy/75 leading-relaxed">
                Sharing crayons, taking turns on the slide, and expressing frustration with words rather than tears builds emotional intelligence.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-navy/5 shadow-card space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-mint-100 text-mint-600 flex items-center justify-center text-xl font-bold">
                🌱
              </div>
              <h3 className="font-heading text-xl font-bold text-navy">
                Independence & Agency
              </h3>
              <p className="font-body text-sm text-navy/75 leading-relaxed">
                Learning to open snack boxes, wash hands, pack books, and make choices creates confident children who trust their own abilities.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Section 5: Our School Environment */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Safety & Infrastructure"
            badgeIcon="🛡️"
            title="Our School Environment"
            subtitle="Designed from a child’s perspective: safe, hygienic, colorful, and endlessly inspiring."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-cream-50 border border-navy/5 space-y-2">
              <span className="text-3xl">🚸</span>
              <h4 className="font-heading font-bold text-lg text-navy">Child-Proofed Safety</h4>
              <p className="text-xs font-body text-navy/70">Rounded furniture corners, finger-pinch door guards, and non-slip safety flooring.</p>
            </div>

            <div className="p-6 rounded-3xl bg-cream-50 border border-navy/5 space-y-2">
              <span className="text-3xl">🧼</span>
              <h4 className="font-heading font-bold text-lg text-navy">Hospital-Grade Hygiene</h4>
              <p className="text-xs font-body text-navy/70">Daily sanitization of all toys, sensory materials, and sanitized washrooms tailored for little children.</p>
            </div>

            <div className="p-6 rounded-3xl bg-cream-50 border border-navy/5 space-y-2">
              <span className="text-3xl">🌿</span>
              <h4 className="font-heading font-bold text-lg text-navy">Natural Sunlight & Air</h4>
              <p className="text-xs font-body text-navy/70">Well-ventilated, bright classrooms flooded with natural daylight to support calm mood and eyesight.</p>
            </div>

            <div className="p-6 rounded-3xl bg-cream-50 border border-navy/5 space-y-2">
              <span className="text-3xl">📹</span>
              <h4 className="font-heading font-bold text-lg text-navy">Monitored Security</h4>
              <p className="text-xs font-body text-navy/70">CCTV monitoring across all activity areas and strict verified pickup policies for absolute peace of mind.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenVisitModal}
              className="btn-yellow text-sm py-3.5 px-8 shadow-button-yellow"
            >
              <Calendar className="w-4 h-4 text-navy" />
              <span>Book a Campus Tour & Check Facilities</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
