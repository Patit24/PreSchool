import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, 
  CheckCircle, Sparkles, AlertCircle, Calendar, ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeader from '../components/SectionHeader';
import { schoolInfo } from '../data/schoolInfo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    program: 'Playgroup (1.5 - 2.5 yrs)',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.parentName.trim()) {
      errors.parentName = 'Parent name is required';
    }
    if (!formData.childName.trim()) {
      errors.childName = 'Child name is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length < 10) {
        errors.phone = 'Please enter a valid 10-digit phone number';
      }
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Store submission safely in localStorage to preserve data
      const existingEnquiries = JSON.parse(localStorage.getItem('goldilocks_enquiries') || '[]');
      const newEnquiry = {
        ...formData,
        submittedAt: new Date().toISOString(),
        id: 'ENQ-' + Date.now()
      };
      existingEnquiries.push(newEnquiry);
      localStorage.setItem('goldilocks_enquiries', JSON.stringify(existingEnquiries));

      // Immediately open WhatsApp directly with all input details
      const waUrl = getWhatsAppEnquiryUrl();
      window.open(waUrl, '_blank');

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD66B', '#FFC9AE', '#A9DDF5', '#BCE8CC', '#DCCBFA', '#FF6B6B']
          });
        } catch (err) {}
      }, 400);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError('Failed to record your enquiry locally. Please call or WhatsApp us directly.');
    }
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = encodeURIComponent(
      `Hello Goldilocks Pre School! I would like to make an admission enquiry.\n\n` +
      `*Parent Name:* ${formData.parentName}\n` +
      `*Child Name:* ${formData.childName} (${formData.childAge || 'Toddler'})\n` +
      `*Program:* ${formData.program}\n` +
      `*Phone:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      (formData.message ? `*Message:* ${formData.message}\n` : '') +
      `\nPlease let us know the admission procedure and next steps. Thank you!`
    );
    return `https://wa.me/${schoolInfo.contact.whatsappNumber}?text=${text}`;
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      phone: '',
      email: '',
      program: 'Playgroup (1.5 - 2.5 yrs)',
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <div className="overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 bg-gradient-to-b from-sunshine-100/50 via-cream-100 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach-100 border border-peach-400 text-navy text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
            <span>📞</span>
            <span>Get in Touch</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto">
            Contact & Admission{' '}
            <span className="text-coral">Enquiry</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-navy/75 max-w-2xl mx-auto leading-relaxed">
            We are always delighted to welcome prospective parents. Drop by our Lake Town campus, call our admissions team, or submit the form below.
          </p>
        </div>
      </section>


      {/* Main Grid: Info + Form */}
      <section className="py-12 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-cream-100 rounded-3xl p-6 sm:p-8 border-2 border-navy/5 shadow-card space-y-6">
                <div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-coral block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-navy">
                    {schoolInfo.name}
                  </h3>
                  <p className="text-xs font-body text-navy/70 mt-1">
                    Premier Early Learning Academy in Lake Town, Kolkata
                  </p>
                </div>

                {/* Campus Address */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-navy/10 text-sm font-body">
                  <div className="w-10 h-10 rounded-2xl bg-coral/15 text-coral flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="font-heading text-navy block text-base">Campus Address:</strong>
                    <p className="text-navy/80 mt-0.5 leading-relaxed">
                      {schoolInfo.address.street},<br />
                      {schoolInfo.address.area},<br />
                      {schoolInfo.address.city}, {schoolInfo.address.state} – {schoolInfo.address.pincode}
                    </p>
                    <span className="inline-block mt-1.5 text-xs font-bold text-coral bg-peach-100 px-2.5 py-0.5 rounded-full">
                      📍 {schoolInfo.address.landmark}
                    </span>
                  </div>
                </div>

                {/* Phone Numbers with click-to-call */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-navy/10 text-sm font-body">
                  <div className="w-10 h-10 rounded-2xl bg-sunshine-200 text-navy flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-sunshine-600" />
                  </div>
                  <div>
                    <strong className="font-heading text-navy block text-base">Call Admissions:</strong>
                    <div className="space-y-1 mt-1 font-semibold">
                      <div>
                        <a
                          href={`tel:${schoolInfo.contact.phones[0].display}`}
                          className="text-navy hover:text-coral transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>{schoolInfo.contact.phones[0].display}</span>
                          <span className="text-[11px] text-navy/50">(Primary)</span>
                        </a>
                      </div>
                      <div>
                        <a
                          href={`tel:${schoolInfo.contact.phones[1].display}`}
                          className="text-navy hover:text-coral transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>{schoolInfo.contact.phones[1].display}</span>
                          <span className="text-[11px] text-navy/50">(Alternative)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clickable Email */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-navy/10 text-sm font-body">
                  <div className="w-10 h-10 rounded-2xl bg-skyblue-100 text-skyblue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="font-heading text-navy block text-base">Email Enquiries:</strong>
                    <a
                      href={`mailto:${schoolInfo.contact.email}`}
                      className="text-navy hover:text-skyblue-600 transition-colors font-medium break-all mt-0.5 block"
                    >
                      {schoolInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-navy/10 text-sm font-body">
                  <div className="w-10 h-10 rounded-2xl bg-mint-100 text-mint-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="font-heading text-navy block text-base">Office & Visiting Hours:</strong>
                    <p className="text-navy/80 mt-0.5">
                      {schoolInfo.contact.openingHours}
                    </p>
                    <span className="text-xs text-navy/60 block mt-0.5">
                      Closed on Sundays & Gazetted Public Holidays
                    </span>
                  </div>
                </div>

                {/* Instant WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href={schoolInfo.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all hover:scale-[1.02] active:scale-95 text-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Column: Admission Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-cream-100 rounded-3xl p-6 sm:p-10 border-4 border-sunshine shadow-card">
                
                {!submitSuccess ? (
                  <div>
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sunshine/40 text-navy text-xs font-heading font-bold uppercase tracking-wider mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-coral" />
                        Admissions Open 2026–27
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                        Send Admission Enquiry
                      </h2>
                      <p className="font-body text-xs sm:text-sm text-navy/70 mt-1">
                        Please provide your contact details and child's age so our academic team can respond with relevant fee structure and curriculum details.
                      </p>
                    </div>

                    {submitError && (
                      <div className="mb-5 p-3.5 rounded-2xl bg-coral/10 border border-coral text-coral text-xs sm:text-sm font-bold flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 font-body text-sm" noValidate>
                      
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
                            placeholder="e.g. Swati Mukherjee"
                            className={`w-full px-4 py-3 rounded-2xl bg-white border text-navy focus:outline-none focus:ring-2 focus:ring-sunshine transition-all ${
                              formErrors.parentName ? 'border-coral ring-1 ring-coral' : 'border-navy/15'
                            }`}
                          />
                          {formErrors.parentName && (
                            <span className="text-[11px] text-coral font-bold mt-1 block">
                              {formErrors.parentName}
                            </span>
                          )}
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
                            placeholder="e.g. +91 89105 XXXXX"
                            className={`w-full px-4 py-3 rounded-2xl bg-white border text-navy focus:outline-none focus:ring-2 focus:ring-sunshine transition-all ${
                              formErrors.phone ? 'border-coral ring-1 ring-coral' : 'border-navy/15'
                            }`}
                          />
                          {formErrors.phone && (
                            <span className="text-[11px] text-coral font-bold mt-1 block">
                              {formErrors.phone}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-navy mb-1">
                            Child's Full Name *
                          </label>
                          <input
                            type="text"
                            name="childName"
                            value={formData.childName}
                            onChange={handleChange}
                            placeholder="e.g. Aarav"
                            className={`w-full px-4 py-3 rounded-2xl bg-white border text-navy focus:outline-none focus:ring-2 focus:ring-sunshine transition-all ${
                              formErrors.childName ? 'border-coral ring-1 ring-coral' : 'border-navy/15'
                            }`}
                          />
                          {formErrors.childName && (
                            <span className="text-[11px] text-coral font-bold mt-1 block">
                              {formErrors.childName}
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-navy mb-1">
                            Child's Age / DOB
                          </label>
                          <input
                            type="text"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            placeholder="e.g. 2.5 Years / 15 June 2023"
                            className="w-full px-4 py-3 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-navy mb-1">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. swati@gmail.com"
                            className={`w-full px-4 py-3 rounded-2xl bg-white border text-navy focus:outline-none focus:ring-2 focus:ring-sunshine transition-all ${
                              formErrors.email ? 'border-coral ring-1 ring-coral' : 'border-navy/15'
                            }`}
                          />
                          {formErrors.email && (
                            <span className="text-[11px] text-coral font-bold mt-1 block">
                              {formErrors.email}
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-navy mb-1">
                            Interested Program
                          </label>
                          <select
                            name="program"
                            value={formData.program}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine transition-all text-sm"
                          >
                            <option value="Playgroup (1.5 - 2.5 yrs)">Playgroup (1.5 – 2.5 Years)</option>
                            <option value="Nursery (2.5 - 3.5 yrs)">Nursery (2.5 – 3.5 Years)</option>
                            <option value="Kindergarten (3.5 - 5 yrs)">Kindergarten (3.5 – 5 Years)</option>
                            <option value="School Readiness (5 - 7 yrs)">School Readiness (5 – 7 Years)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy mb-1">
                          Your Message or Questions (Optional)
                        </label>
                        <textarea
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us any queries regarding school transport, food habits, previous schooling or visit date..."
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-navy/15 text-navy focus:outline-none focus:ring-2 focus:ring-sunshine transition-all resize-none text-sm"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold py-4 text-base rounded-2xl shadow-md transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-60"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send Enquiry Directly via WhatsApp'}</span>
                        </button>
                      </div>

                      <p className="text-center text-[11px] text-navy/60 pt-1">
                        🔒 Your details are kept completely private and used exclusively for school admission communication.
                      </p>

                    </form>
                  </div>
                ) : (
                  <div className="text-center py-6 space-y-5 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-mint text-navy mx-auto flex items-center justify-center shadow-md">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                      Enquiry Successfully Received!
                    </h3>

                    <p className="font-body text-sm sm:text-base text-navy/80 max-w-md mx-auto">
                      Thank you, <strong>{formData.parentName}</strong>! Your admission query for <strong>{formData.childName}</strong> has been logged with our admissions desk.
                    </p>

                    <div className="bg-white rounded-2xl p-4 text-left border border-navy/10 text-xs space-y-1.5 max-w-md mx-auto">
                      <p><strong>Child:</strong> {formData.childName} ({formData.childAge || 'Toddler'})</p>
                      <p><strong>Program:</strong> {formData.program}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                      {formData.email && <p><strong>Email:</strong> {formData.email}</p>}
                      <p className="text-navy/60 pt-1 border-t border-navy/5">
                        Our Lake Town admissions desk will call you shortly during office hours (8:00 AM – 2:00 PM).
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getWhatsAppEnquiryUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold px-6 py-3 rounded-full text-xs shadow-md transition-all hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Pre-Filled Copy via WhatsApp</span>
                      </a>

                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-3 rounded-full border border-navy/20 text-navy font-heading font-semibold text-xs hover:bg-navy hover:text-white transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Google Maps Embed Section */}
      <section className="py-12 lg:py-16 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Find Us On Map"
            badgeIcon="🗺️"
            title="Visit Goldilocks Pre School in Lake Town"
            subtitle="Opposite row of Mansa Mandir / Axis Bank, Lake Town Block B, South Dumdum, Kolkata 700089."
          />

          <div className="rounded-4xl overflow-hidden border-4 border-sunshine shadow-card aspect-[16/9] sm:aspect-[21/9] bg-white">
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
      </section>

    </div>
  );
}
