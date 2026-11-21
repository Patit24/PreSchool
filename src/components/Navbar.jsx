import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, MapPin, Sparkles } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export default function Navbar({ onOpenVisitModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Activities', path: '/activities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-md py-2.5 border-b border-navy/5'
          : 'bg-cream-100/80 backdrop-blur-xs py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-sunshine via-peach to-coral p-0.5 shadow-sm group-hover:rotate-6 transition-transform duration-300">
              <div className="w-full h-full bg-cream-100 rounded-[14px] flex items-center justify-center overflow-hidden">
                <span className="text-2xl sm:text-3xl select-none group-hover:scale-110 transition-transform">
                  ✨
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-navy leading-none group-hover:text-coral transition-colors">
                GOLDILOCKS
              </span>
              <span className="font-body text-[11px] sm:text-xs font-bold uppercase tracking-widest text-navy/70">
                Pre School • Lake Town
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-full font-heading text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-sunshine text-navy shadow-sm'
                      : 'text-navy/80 hover:text-navy hover:bg-white/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenVisitModal}
              className="btn-yellow text-sm py-2.5 px-5 shadow-button-yellow hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-navy" />
              <span>Book a School Visit</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenVisitModal}
              className="bg-sunshine text-navy p-2 rounded-xl font-heading text-xs font-bold flex items-center gap-1 sm:px-3 sm:py-2"
              aria-label="Book a visit"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Visit</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/80 text-navy hover:bg-white border border-navy/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-cream-100/98 backdrop-blur-xl border-b border-navy/10 shadow-xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="px-6 pt-4 pb-8 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl font-heading text-base font-semibold text-center transition-all ${
                      isActive
                        ? 'bg-sunshine text-navy shadow-xs font-bold'
                        : 'bg-white/70 text-navy/80 hover:bg-white hover:text-navy'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 border-t border-navy/10 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisitModal();
                }}
                className="w-full btn-yellow py-3 text-center justify-center text-sm shadow-button-yellow"
              >
                <Calendar className="w-4 h-4 text-navy" />
                <span>Book a School Visit</span>
              </button>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`tel:${schoolInfo.contact.primaryPhone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-navy/10 py-2.5 px-3 rounded-xl text-xs font-bold text-navy hover:bg-sunshine-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-coral" />
                  <span>Call Admissions</span>
                </a>
                <a
                  href={schoolInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-mint text-navy py-2.5 px-3 rounded-xl text-xs font-bold hover:bg-mint-400 transition-colors"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center text-xs text-navy/60 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-coral" />
                <span>Block B, Lake Town, Kolkata 700089</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
