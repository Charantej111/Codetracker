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
  ShieldCheck,
  Heart,
  Sparkles,
  Building2,
  FileText,
  Lock,
  Activity
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="relative font-jakarta text-slate-900 pt-40 sm:pt-56 pb-12 overflow-hidden">
      
      {/* Background Video Layer with Smooth Top White Gradient Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        {/* High Opacity Video (75%) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-75 filter brightness-105 saturate-110 scale-102"
        >
          <source src="/footer-video.mp4" type="video/mp4" />
        </video>
        
        {/* Short Top Edge White Gradient Transition (Exposes full scenic video) */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none z-10" />

        {/* Bottom Soft Wash */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/70 via-white/30 to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Ultra-Translucent Frosted Glass Footer Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/40 backdrop-blur-2xl border border-white/80 rounded-3xl sm:rounded-[44px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] mb-8"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* 1. Left Brand & Newsletter Box (Col 4) */}
            <div className="lg:col-span-4 space-y-5 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Brand Logo */}
                <a href="#" className="inline-flex items-center gap-2.5 group">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-5 h-5 stroke-[3]" />
                  </div>
                  <span className="font-outfit font-black text-2xl tracking-tight text-slate-900">
                    Code<span className="text-indigo-600">Tracker</span>
                  </span>
                </a>

                {/* Description */}
                <p className="text-slate-700 text-xs font-semibold leading-relaxed">
                  The all-in-one platform to track coding progress, analyze performance, and help students become placement ready.
                </p>

                {/* Stay in the loop Newsletter Card (Translucent Glass) */}
                <div className="p-4 rounded-2xl bg-white/60 border border-white/90 shadow-md space-y-2 backdrop-blur-xl">
                  <div className="flex items-center gap-2 font-extrabold text-xs text-slate-900">
                    <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span>Stay in the loop</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium leading-normal">
                    Get latest updates, insights and placement tips straight to your inbox.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-1.5 pt-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/90 border border-slate-300/80 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 shadow-inner transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-8.5 h-8.5 bg-indigo-600 hover:bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/30 cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2">
                <a href="#" className="w-8.5 h-8.5 rounded-xl bg-white/80 border border-white flex items-center justify-center text-slate-800 hover:text-indigo-600 hover:bg-white shadow-sm transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8.5 h-8.5 rounded-xl bg-white/80 border border-white flex items-center justify-center text-slate-800 hover:text-indigo-600 hover:bg-white shadow-sm transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8.5 h-8.5 rounded-xl bg-white/80 border border-white flex items-center justify-center text-slate-800 hover:text-indigo-600 hover:bg-white shadow-sm transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8.5 h-8.5 rounded-xl bg-white/80 border border-white flex items-center justify-center text-slate-800 hover:text-indigo-600 hover:bg-white shadow-sm transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="w-8.5 h-8.5 rounded-xl bg-white/80 border border-white flex items-center justify-center text-slate-800 hover:text-indigo-600 hover:bg-white shadow-sm transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* 2. Middle Nav Columns: Quick Links & For Colleges (Col 4) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-6 text-xs py-2">
              
              {/* Quick Links */}
              <div>
                <h4 className="font-outfit font-black text-indigo-700 uppercase tracking-wider text-xs mb-4">Quick Links</h4>
                <ul className="space-y-3 text-slate-800 font-bold">
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
                <ul className="space-y-3 text-slate-800 font-bold">
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
            <div className="lg:col-span-4">
              <div className="h-full bg-gradient-to-b from-white/90 via-white/85 to-indigo-50/70 backdrop-blur-2xl border border-white rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col justify-between text-center relative overflow-hidden group min-h-[380px]">
                
                {/* Callout Header */}
                <div className="space-y-2 relative z-10 pt-1">
                  <h3 className="font-outfit font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug">
                    Let's build the future of coding education <span className="text-indigo-600 underline decoration-indigo-300 decoration-wavy underline-offset-4">together</span>
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Join 120+ top institutions empowering their students.
                  </p>
                </div>

                {/* Call to action buttons */}
                <div className="space-y-2.5 my-4 relative z-10">
                  <a
                    href="#contact"
                    className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-slate-900 text-white font-outfit font-extrabold text-xs shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Book a Demo</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href="#contact"
                    className="w-full py-3.5 px-4 rounded-xl bg-white/95 hover:bg-white border border-slate-300 text-slate-900 font-outfit font-extrabold text-xs hover:border-indigo-300 shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get Started Free</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>

                {/* Integrated Full-Bleed Campus Illustration at Card Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-44 sm:h-48 overflow-hidden rounded-b-3xl pointer-events-none z-0">
                  {/* Top Blend Gradient */}
                  <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/90 via-white/50 to-transparent z-10" />
                  
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
        <div className="px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-700 font-semibold gap-4">
          <div>
            © 2025 CodeTracker. All rights reserved. Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" /> by <a href="https://ofzen.in/" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-indigo-600 underline underline-offset-2 transition-colors">Ofzen</a>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-slate-700 text-[11px] font-bold">
            <a href="#" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-indigo-600" /> Terms of Service
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-indigo-600" /> Security
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-emerald-600" /> Status
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}




