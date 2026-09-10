import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Rocket, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast("Thank you for contacting CodeTracker! Our campus team will reach out within 24 hours.");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 font-jakarta relative overflow-hidden bg-gradient-to-br from-[#F4F8FE] via-[#EAF2FF] to-[#E2EEFF]">

      {/* Background Glowing Ambient Light Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-indigo-300/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Campus Info & Callout */}
          <motion.div
            initial={{ filter: 'blur(12px)', opacity: 0, x: -30 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="px-4 py-1.5 rounded-full bg-indigo-600/10 text-indigo-700 font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 mb-4 border border-indigo-200/80 shadow-xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                Campus Onboarding & Support
              </span>

              <h2 className="font-outfit font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
                Get Your College <br />
                <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">Onboarded Today.</span>
              </h2>

              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Have questions about custom placement criteria, API syncing, or enterprise college plans? Connect with our campus engineering team.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 text-sm font-medium text-slate-800">

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-white/80 shadow-lg shadow-indigo-950/5 backdrop-blur-xl hover:scale-[1.01] transition-transform">
                <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/25">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-normal">Official Email</span>
                  <a href="mailto:support@codetracker.in" className="hover:text-indigo-600 font-bold transition-colors text-slate-900">
                    support@codetracker.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-white/80 shadow-lg shadow-indigo-950/5 backdrop-blur-xl hover:scale-[1.01] transition-transform">
                <div className="w-11 h-11 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/25">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-normal">Direct Helpline</span>
                  <a href="tel:+919876543210" className="hover:text-indigo-600 font-bold transition-colors text-slate-900">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-white/80 shadow-lg shadow-indigo-950/5 backdrop-blur-xl hover:scale-[1.01] transition-transform">
                <div className="w-11 h-11 rounded-xl bg-indigo-950 text-indigo-300 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-normal">Headquarters</span>
                  <span className="font-bold text-slate-900">Kakinada, India</span>
                </div>
              </div>

            </div>

            {/* Dark Glass Callout Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden border border-slate-800 group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-2xl rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Rocket className="w-4 h-4 text-sky-400" /> Fast-Track Implementation
                </div>
                <h3 className="font-outfit font-extrabold text-xl mb-2 text-white">Schedule a Campus Walkthrough</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  See how 80,000+ students and faculty use CodeTracker to automate profile tracking and placement rankings.
                </p>
                <a
                  href="mailto:support@codetracker.in?subject=Campus%20Demo%20Request"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:scale-105"
                >
                  Schedule Personal Demo →
                </a>
              </div>
            </div>
          </motion.div>          {/* Right Column: Ultra-Aesthetic Paper Sheet Note Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl sm:rounded-[36px] border border-stone-300/90 p-7 sm:p-12 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.15),0_3px_8px_rgba(0,0,0,0.05)] relative overflow-hidden group font-jakarta rotate-[-0.8deg] hover:rotate-0 transition-transform duration-700"
          >
            {/* Red Notebook Vertical Margin Rule Line */}
            <div className="absolute top-0 bottom-0 left-8 sm:left-14 w-[1.5px] bg-rose-400/35 pointer-events-none z-10" />

            {/* 3D Metallic Paper Clip Graphic */}
            <div className="absolute -top-3 left-10 sm:left-16 z-20 pointer-events-none drop-shadow-md">
              <svg width="44" height="76" viewBox="0 0 32 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12V44C12 48.4183 15.5817 52 20 52C24.4183 52 28 48.4183 28 44V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V46" stroke="url(#contact_paperclip_metallic)" strokeWidth="3.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="contact_paperclip_metallic" x1="0" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#94A3B8"/>
                    <stop offset="0.3" stopColor="#F8FAFC"/>
                    <stop offset="0.6" stopColor="#64748B"/>
                    <stop offset="1" stopColor="#475569"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Top-Right Campus Stamp Badge */}
            <div className="absolute top-6 right-6 z-20 pointer-events-none hidden sm:block">
              <div className="px-3 py-1 rounded border-2 border-dashed border-indigo-600/40 text-indigo-700 font-mono text-[10px] uppercase font-bold tracking-widest bg-amber-50/90 rotate-[3deg] shadow-xs">
                OFFICIAL CAMPUS NOTE
              </div>
            </div>

            {/* Tactile Paper Sheet Overlay */}
            <div 
              className="absolute inset-0 opacity-35 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url('/paper_sheet_note.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />

            <div className="relative z-10 pl-6 sm:pl-10">
              
              {/* Note Header */}
              <div className="mb-8 pb-4 border-b border-stone-200/80">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2 border border-amber-200/80">
                  <Send className="w-3 h-3 text-amber-700" />
                  Campus Onboarding Request
                </div>
                <h3 className="font-outfit font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Send Us a <span className="text-indigo-600">Message</span>
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 font-normal">
                  Fill out the note below and our campus integration team will reply within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4.5 py-3.5 rounded-xl border border-stone-300/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none text-slate-900 text-sm font-medium transition-all bg-[#F3EFE7] focus:bg-white shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@college.edu"
                      className="w-full px-4.5 py-3.5 rounded-xl border border-stone-300/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none text-slate-900 text-sm font-medium transition-all bg-[#F3EFE7] focus:bg-white shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4.5 py-3.5 rounded-xl border border-stone-300/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none text-slate-900 text-sm font-medium transition-all bg-[#F3EFE7] focus:bg-white shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Institution / Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. College Partnership"
                      className="w-full px-4.5 py-3.5 rounded-xl border border-stone-300/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none text-slate-900 text-sm font-medium transition-all bg-[#F3EFE7] focus:bg-white shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help your institution?"
                    className="w-full px-4.5 py-3.5 rounded-2xl border border-stone-300/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none text-slate-900 text-sm font-medium transition-all bg-[#F3EFE7] focus:bg-white resize-none shadow-inner"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-outfit font-extrabold text-sm shadow-xl shadow-slate-900/15 hover:shadow-indigo-600/30 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Note...</span>
                  ) : (
                    <>
                      <span>Submit Note</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
