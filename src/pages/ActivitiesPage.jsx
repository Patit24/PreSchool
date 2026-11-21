import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle, ArrowRight, Heart, Star, Music, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { activitiesData } from '../data/activitiesData';

export default function ActivitiesPage({ onOpenVisitModal }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = [
    'All',
    'Wellness & Focus',
    'Fine Arts',
    'Sensory Fun',
    'Experiential Learning',
    'Cultural Immersion',
    'Physical Fitness',
    'Performing Arts',
    'Life Skills'
  ];

  const filteredActivities = selectedFilter === 'All'
    ? activitiesData
    : activitiesData.filter(act => act.category === selectedFilter);

  return (
    <div className="overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 bg-gradient-to-b from-mint-100/60 via-cream-100 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint border border-mint-400 text-navy text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
            <span>🎨</span>
            <span>Beyond The Books</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto">
            Vibrant Activities &{' '}
            <span className="text-coral">Sensory Adventures</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-navy/75 max-w-2xl mx-auto leading-relaxed">
            From clay modeling and glass painting to mindful yoga and zoo field excursions, every day at Goldilocks is packed with joyful multi-sensory experiences.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedFilter === cat
                    ? 'bg-sunshine text-navy shadow-button-yellow scale-105'
                    : 'bg-white text-navy/70 hover:bg-cream-100 border border-navy/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* Activities Grid */}
      <section className="py-12 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredActivities.map((act) => (
              <div
                key={act.id}
                className={`group rounded-4xl overflow-hidden bg-cream-50 border-3 ${act.border} shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col`}
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <img
                    src={act.image}
                    alt={`${act.title} at Goldilocks Pre School`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider ${act.badgeColor} shadow-md`}>
                      {act.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm">
                    {act.ageGroup}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy group-hover:text-coral transition-colors">
                      {act.title}
                    </h3>
                    <p className="font-heading text-sm font-bold text-coral mt-1 mb-3">
                      "{act.tagline}"
                    </p>
                    <p className="font-body text-navy/80 text-sm sm:text-base leading-relaxed">
                      {act.description}
                    </p>
                  </div>

                  {/* Developmental Benefits */}
                  <div className="pt-2 border-t border-navy/10 space-y-2">
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-navy/70 block">
                      Why Children Love It & How It Helps:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm font-body text-navy/75">
                      {act.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights pills */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {act.features.map((f, i) => (
                      <span key={i} className="bg-white px-2.5 py-1 rounded-full text-xs font-semibold text-navy/70 border border-navy/10">
                        ✨ {f}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-navy/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-navy/60">
                      Weekly Activity Schedule
                    </span>
                    <button
                      onClick={onOpenVisitModal}
                      className="btn-yellow text-xs py-2 px-4 shadow-xs"
                    >
                      Enquire for Child
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Weekly Rhythm Schedule */}
      <section className="py-16 lg:py-24 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Weekly Flow"
            badgeIcon="📅"
            title="A Balanced Weekly Rhythm"
            subtitle="Every day of the week brings dedicated creative highlights alongside core play-way phonics and math discovery."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { day: "Monday", theme: "Sensory & Music", color: "border-sunshine-400 bg-sunshine-100", icon: "🎵", desc: "Percussion jam, sound tubes & sensory dough tables." },
              { day: "Tuesday", theme: "Mindful Yoga", color: "border-mint-400 bg-mint-100", icon: "🧘", desc: "Animal asana poses, gentle breathing & calm storytelling." },
              { day: "Wednesday", theme: "Creative Arts", color: "border-peach-400 bg-peach-100", icon: "🎨", desc: "Glass painting, clay molding & paper collage crafts." },
              { day: "Thursday", theme: "STEM & Nature", color: "border-skyblue-400 bg-skyblue-100", icon: "🌱", desc: "Seed sprouting, magnifying glass observations & sand play." },
              { day: "Friday", theme: "Clay Craft & Fun Games", color: "border-lavender-400 bg-lavender-100", icon: "🏺", desc: "Clay pottery modeling, obstacle relay games & weekend celebration." },
            ].map((schedule) => (
              <div key={schedule.day} className={`p-5 rounded-3xl border-2 ${schedule.color} shadow-xs text-center space-y-2`}>
                <span className="text-3xl block">{schedule.icon}</span>
                <h4 className="font-heading font-bold text-base text-navy">{schedule.day}</h4>
                <span className="inline-block bg-white/80 px-2 py-0.5 rounded-full text-[11px] font-bold text-coral uppercase">
                  {schedule.theme}
                </span>
                <p className="text-xs font-body text-navy/70 leading-relaxed pt-1">{schedule.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenVisitModal}
              className="btn-navy text-sm py-3.5 px-8 shadow-button-navy inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-sunshine" />
              <span>Book a Visit to See Activities Live</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
