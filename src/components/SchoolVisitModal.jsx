import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle, Phone, Heart, User, MapPin, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { schoolInfo } from '../data/schoolInfo';
import { programsData } from '../data/programsData';

export default function SchoolVisitModal({ isOpen, onClose, initialProgram = '' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    program: initialProgram || 'Playgroup (1.5 - 2.5 yrs)',
    visitDate: '',
    timeSlot: 'Morning (9:30 AM - 11:30 AM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  React.useEffect(() => {
    if (initialProgram) {
      setFormData(prev => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD66B', '#FFC9AE', '#A9DDF5', '#BCE8CC', '#DCCBFA', '#FF6B6B']
      });
    } catch (e) {
      // ignore if confetti fails
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName.trim() || !formData.phone.trim() || !formData.childName.trim()) {
      setErrorMsg('Please fill in your name, child’s name, and contact number.');
      return;
    }
    // Basic phone validation (at least 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    // Save to local storage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('goldilocks_visits') || '[]');
      existing.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('goldilocks_visits', JSON.stringify(existing));
    } catch (err) {}

    // Open WhatsApp directly with all input details
    const waUrl = getWhatsAppBookingUrl();
    window.open(waUrl, '_blank');

    setSubmitted(true);
    triggerConfetti();
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `Hello Goldilocks Pre School! I would like to book a school visit.\n\n` +
      `*Parent Name:* ${formData.parentName}\n` +
      `*Child Name:* ${formData.childName} (${formData.childAge || 'Age not specified'})\n` +
      `*Program:* ${formData.program}\n` +
      `*Preferred Date:* ${formData.visitDate || 'Next available weekday'}\n` +
      `*Time Slot:* ${formData.timeSlot}\n` +
      `*Phone:* ${formData.phone}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}\n` : '') +
      `\nPlease confirm our appointment. Thank you!`
    );
    return `https://wa.me/${schoolInfo.contact.whatsappNumber}?text=${text}`;
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      phone: '',
      email: '',
      program: 'Playgroup (1.5 - 2.5 yrs)',
      visitDate: '',
      timeSlot: 'Morning (9:30 AM - 11:30 AM)',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-cream-100 rounded-3xl shadow-2xl border-4 border-sunshine p-6 sm:p-8 my-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-navy hover:bg-coral hover:text-white transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center pb-6">
              <span className="inline-flex items-center gap-1.5 bg-sunshine/50 text-navy px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-coral" />
                Experience The Magic
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Book a School Visit
              </h3>
              <p className="text-navy/70 text-sm font-body mt-1 max-w-md mx-auto">
                Meet our educators, explore our child-safe in-house playground, and see how our little learners thrive in Lake Town.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-2xl bg-coral/10 border border-coral text-coral text-xs sm:text-sm font-bold flex items-center gap-2">
                <span>⚠️</span>
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-body text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Priya Banerjee"
                    required
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98300 12345"
                    required
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="e.g. Aavya"
                    required
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Child's Age / Date of Birth
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g. 2.5 Years"
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Interested Program
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine text-sm"
                  >
                    <option value="Playgroup (1.5 - 2.5 yrs)">Playgroup (1.5 – 2.5 Years)</option>
                    <option value="Nursery (2.5 - 3.5 yrs)">Nursery (2.5 – 3.5 Years)</option>
                    <option value="Kindergarten (3.5 - 5 yrs)">Kindergarten (3.5 – 5 Years)</option>
                    <option value="School Readiness (5 - 7 yrs)">School Readiness (5 – 7 Years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">
                  Preferred Time Slot (Mon–Sat)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Morning (9:30 AM - 11:30 AM)',
                    'Mid-Day (11:30 AM - 1:30 PM)',
                  ].map((slot) => (
                    <label
                      key={slot}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                        formData.timeSlot === slot
                          ? 'bg-sunshine/30 border-sunshine-600 font-bold'
                          : 'bg-white border-navy/10'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeSlot"
                        value={slot}
                        checked={formData.timeSlot === slot}
                        onChange={handleChange}
                        className="text-sunshine focus:ring-sunshine"
                      />
                      <span>{slot}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">
                  Special Notes or Questions (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your child's interests, previous schooling, or queries..."
                  className="w-full px-4 py-2 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold py-4 text-base rounded-2xl shadow-md transition-all hover:scale-[1.01] active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Visit Request Directly to WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-navy/60">
                📍 {schoolInfo.address.full} • Landmark: Opposite Mansa Mandir / Axis Bank
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-mint text-navy mx-auto flex items-center justify-center shadow-md">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-navy">
              Visit Request Received!
            </h3>

            <p className="font-body text-sm text-navy/80 max-w-md mx-auto">
              Thank you, <strong>{formData.parentName}</strong>! We are excited to welcome you and little <strong>{formData.childName}</strong> to Goldilocks Pre School.
            </p>

            <div className="bg-white rounded-2xl p-4 text-left border border-navy/10 text-xs space-y-1.5 max-w-md mx-auto">
              <p><strong>Child:</strong> {formData.childName} ({formData.childAge || 'Toddler'})</p>
              <p><strong>Program:</strong> {formData.program}</p>
              <p><strong>Date & Slot:</strong> {formData.visitDate || 'Next working day'} • {formData.timeSlot}</p>
              <p><strong>Contact:</strong> {formData.phone}</p>
              <p className="text-navy/60 pt-1 border-t border-navy/5">
                Our admissions coordinator will call to confirm directions and ensure classroom activities are ready for your child to participate in!
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold px-5 py-2.5 rounded-full text-xs shadow-md transition-all"
              >
                <span>Send via WhatsApp for Instant Slot</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-navy/20 text-navy font-heading font-semibold text-xs hover:bg-navy hover:text-white transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
