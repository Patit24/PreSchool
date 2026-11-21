import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, ArrowUp, Sparkles, MessageCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';
import { programsData } from '../data/programsData';

export default function Footer({ onOpenVisitModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white relative pt-16 pb-12 overflow-hidden">
      {/* Decorative top wave/cloud divider */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-sunshine via-peach to-skyblue" />

      {/* Decorative background glow blobs */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-sunshine/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-skyblue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sunshine via-peach to-coral p-0.5 shadow-md">
                <div className="w-full h-full bg-navy rounded-[14px] flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-tight text-white block">
                  GOLDILOCKS
                </span>
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-sunshine block">
                  Pre School • Lake Town, Kolkata
                </span>
              </div>
            </Link>

            <p className="text-white/80 font-body text-sm leading-relaxed max-w-md pt-2">
              Where little minds explore, little hearts grow, and every day brings a new adventure. Providing safe, joyful, and activity-based early childhood education for children aged 1.5 to 7 years in Lake Town, Kolkata.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenVisitModal}
                className="btn-yellow text-xs py-2 px-4 shadow-sm"
              >
                Book a School Visit
              </button>
              <a
                href={schoolInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-full text-xs font-heading font-semibold transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            <div className="pt-3 flex items-center gap-3 text-sm">
              <a
                href={schoolInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <span className="font-heading font-bold text-base">f</span>
              </a>
              <a
                href={schoolInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <span className="font-heading font-bold text-base">📷</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading text-lg font-bold text-sunshine tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/80 font-body">
              <li>
                <Link to="/" className="hover:text-sunshine transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sunshine transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-sunshine transition-colors">Learning Programs</Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-sunshine transition-colors">Activities Beyond</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-sunshine transition-colors">Moments Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sunshine transition-colors">Contact & Admissions</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading text-lg font-bold text-peach tracking-wide">
              Programs
            </h3>
            <ul className="space-y-2 text-sm text-white/80 font-body">
              {programsData.map((prog) => (
                <li key={prog.id}>
                  <Link
                    to={`/programs#${prog.id}`}
                    className="hover:text-peach transition-colors block"
                  >
                    <span className="font-semibold">{prog.title}</span>
                    <span className="text-[11px] block text-white/50">{prog.ageRange}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading text-lg font-bold text-mint tracking-wide">
              Visit Us in Lake Town
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-white/80 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span>
                  <strong>{schoolInfo.name}</strong><br />
                  {schoolInfo.address.street}, {schoolInfo.address.area},<br />
                  {schoolInfo.address.city}, {schoolInfo.address.state} – {schoolInfo.address.pincode}<br />
                  <span className="text-sunshine text-xs">Landmark: {schoolInfo.address.landmark}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sunshine shrink-0" />
                <div className="space-x-2">
                  <a href={`tel:${schoolInfo.contact.phones[0].display}`} className="hover:text-sunshine transition-colors">
                    {schoolInfo.contact.phones[0].display}
                  </a>
                  <span>/</span>
                  <a href={`tel:${schoolInfo.contact.phones[1].display}`} className="hover:text-sunshine transition-colors">
                    {schoolInfo.contact.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-skyblue shrink-0" />
                <a href={`mailto:${schoolInfo.contact.email}`} className="hover:text-skyblue transition-colors break-all">
                  {schoolInfo.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                <span>
                  <strong>School Hours:</strong><br />
                  {schoolInfo.contact.openingHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-body">
          <p>© {new Date().getFullYear()} Goldilocks Pre School, Lake Town, Kolkata. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-white/80">
              Made with <Heart className="w-3.5 h-3.5 text-coral fill-coral" /> for Happy Childhoods
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
