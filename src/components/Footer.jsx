import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Heart
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="relative font-jakarta text-slate-900 pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-slate-200/80 bg-linear-to-b from-white via-slate-50/50 to-indigo-50/20">

      {/* Subtle ambient lighting glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean Frosted Glass Footer Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl sm:rounded-[36px] p-6 sm:p-10 shadow-xl shadow-slate-900/5 mb-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* 1. Left Brand Column (Col 4) */}
            <div className="lg:col-span-4 md:col-span-1 space-y-6">

              <div className="space-y-3">
                {/* Brand Logo */}
                <a href="#" className="inline-flex items-center gap-2.5 group">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-5 h-5 stroke-3" />
                  </div>
                  <span className="font-outfit font-black text-2xl tracking-tight text-slate-900">
                    Code<span className="text-indigo-600">Tracker</span>
                  </span>
                </a>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
                  The all-in-one platform to track coding progress, analyze performance, and help students become placement ready.
                </p>
              </div>



              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8.5 h-8.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-xs transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-8.5 h-8.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-xs transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8.5 h-8.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-xs transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8.5 h-8.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-xs transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-8.5 h-8.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-xs transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* 2. Middle Nav Columns: Quick Links & For Colleges (Col 4) */}
            <div className="lg:col-span-4 md:col-span-1 grid grid-cols-2 gap-6 text-xs pt-1">

              {/* Quick Links */}
              <div>
                <h4 className="font-outfit font-black text-indigo-700 uppercase tracking-wider text-xs mb-4">Quick Links</h4>
                <ul className="space-y-3 text-slate-700 font-semibold">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Home</a></li>
                  <li><a href="#how-it-works" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                  <li><a href="#features" className="hover:text-indigo-600 transition-colors">Features</a></li>
                  <li><a href="#platform-hub" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
                  <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Pricing & Demo</a></li>
                  <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* For Colleges */}
              <div>
                <h4 className="font-outfit font-black text-indigo-700 uppercase tracking-wider text-xs mb-4">For Colleges</h4>
                <ul className="space-y-3 text-slate-700 font-semibold">
                  <li><a href="#contact" className="hover:text-indigo-600 transition-colors">College Dashboard</a></li>
                  <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Faculty Portal</a></li>
                  <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Placement Cell</a></li>
                  <li><a href="#how-it-works" className="hover:text-indigo-600 transition-colors">Student Dashboard</a></li>
                  <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Request a Demo</a></li>
                  <li><a href="#faq" className="hover:text-indigo-600 transition-colors">Case Studies</a></li>
                </ul>
              </div>

            </div>

            {/* 3. Right Callout Card (Col 4) with Seamless Integrated Campus Landscape Illustration */}
            <div className="lg:col-span-4 md:col-span-2">
              <div className="bg-linear-to-b from-white via-slate-50/90 to-indigo-50/50 border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between text-center relative overflow-hidden group">

                {/* Callout Header */}
                <div className="space-y-2 relative z-10 pt-1">
                  <h3 className="font-outfit font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug">
                    Let's build the future of coding education <span className="text-indigo-600 underline decoration-indigo-300 decoration-wavy underline-offset-4">together</span>
                  </h3>
                </div>

                {/* Call to action buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-row gap-2 my-4 relative z-10">
                  <a
                    href="#contact"
                    className="flex-1 py-3 px-3 rounded-xl bg-indigo-600 hover:bg-slate-900 text-white font-outfit font-extrabold text-xs shadow-md shadow-indigo-600/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Book Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>

                  <a
                    href="#contact"
                    className="flex-1 py-3 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-outfit font-extrabold text-xs hover:border-indigo-300 shadow-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Get Started</span>
                  </a>
                </div>

                {/* Integrated Campus Illustration at Card Bottom */}
                <div className="h-32 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 overflow-hidden relative pointer-events-none rounded-b-3xl">
                  {/* Top Blend Gradient */}
                  <div className="absolute inset-x-0 top-0 h-10 bg-linear-to-b from-white/95 via-white/50 to-transparent z-10" />

                  <img
                    src="/college_illustration.jpg"
                    alt="Future of Coding Education Campus"
                    className="w-full h-full object-cover object-bottom opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

              </div>
            </div>

          </div>

        </motion.div>

        {/* Bottom Legal & Credit Strip */}
        <div className="px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4">
          <div className="text-center sm:text-left leading-relaxed">
            <span>© 2025 CodeTracker. All rights reserved.</span>{' '}
            <span className="block sm:inline mt-1 sm:mt-0 text-center">
              Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" /> by{' '}
              <a href="https://ofzen.in/" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-bold hover:text-indigo-600 underline underline-offset-2 transition-colors">
                Ofzen
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-5 text-[11px] text-slate-500">
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
