import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onExploreDemo }) {
  return (
    <section id="hero" className="relative pt-10 sm:pt-14 md:pt-16 pb-0 mb-0 font-jakarta">

      {/* Floating Side Dotted Pattern Graphics */}
      <motion.img
        initial={{ filter: 'blur(10px)', opacity: 0, x: -30 }}
        animate={{ filter: 'blur(0px)', opacity: 0.8, x: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        src="/dotted pattern.png"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = 'none';
        }}
        alt="Dotted Pattern Left"
        className="hidden md:block absolute top-10 -left-10 w-64 sm:w-80 pointer-events-none z-0"
      />
      
      <motion.img
        initial={{ filter: 'blur(10px)', opacity: 0, x: 30 }}
        animate={{ filter: 'blur(0px)', opacity: 0.8, x: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        src="/dotted pattern.png"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = 'none';
        }}
        alt="Dotted Pattern Right"
        className="hidden md:block absolute top-12 -right-10 w-64 sm:w-80 pointer-events-none z-0 rotate-180"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-2 sm:pt-4">
        
        {/* Handwritten Tagline "hello" */}
        <motion.div 
          initial={{ filter: 'blur(8px)', opacity: 0, y: -15 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mb-1"
        >
          <span className="font-handwritten text-2xl sm:text-3xl text-amber-500 font-bold block transform hover:scale-105 transition-transform">
            hello
          </span>
        </motion.div>

        {/* Hero Title with Premium Blur-In Reveal Animation */}
        <motion.h1 
          initial={{ filter: 'blur(14px)', opacity: 0, y: 25, scale: 0.95 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-outfit font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase text-slate-900 max-w-5xl mx-auto leading-tight"
        >
          LEVEL UP YOUR CODE GAME <span className="text-indigo-600">!!</span>
        </motion.h1>

        {/* Monospace Subtitle */}
        <motion.div 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 mb-4 max-w-xl mx-auto"
        >
          <p className="font-mono text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed tracking-tight px-2">
            Consolidate performance data from LeetCode, HackerRank, Codeforces, and more. Track your rise to the top!
          </p>
        </motion.div>

        {/* Action Buttons Row */}
        <motion.div 
          initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 flex flex-wrap items-center justify-center gap-3 font-jakarta"
        >
          <a
            href="#contact"
            className="px-6 py-2.5 bg-slate-900 hover:bg-indigo-600 text-white font-outfit font-extrabold text-xs sm:text-sm rounded-full shadow-lg shadow-slate-900/10 hover:scale-105 transition-all flex items-center gap-2"
          >
            Join for Free →
          </a>

          <button
            onClick={onExploreDemo}
            className="px-6 py-2.5 bg-white/90 backdrop-blur-md border border-slate-300 hover:bg-indigo-50/80 text-slate-900 font-outfit font-extrabold text-xs sm:text-sm rounded-full shadow-xs hover:scale-105 transition-all cursor-pointer"
          >
            Request a demo
          </button>
        </motion.div>

      </div>

      {/* Hero Image Showcase - Full Uncropped Community Illustration Framed by Bottom Curve */}
      <motion.div 
        initial={{ filter: 'blur(16px)', opacity: 0, y: 24, scale: 0.98 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative -mt-4 sm:-mt-8 md:-mt-12 flex justify-center z-10 mb-0 pb-0 pointer-events-none"
      >
        <div className="w-full max-w-[1440px] relative px-0 sm:px-2 flex justify-center">
          {/* Subtle Ambient Backlight Glow behind characters for 3D depth */}
          <div className="absolute inset-x-10 bottom-6 top-8 bg-radial from-sky-200/35 via-indigo-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

          <img
            src="/hero image.png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/hero-group.png";
            }}
            alt="CodeTracker Community"
            className="w-full h-auto object-contain object-bottom select-none drop-shadow-[0_15px_35px_rgba(30,58,138,0.12)] transition-transform duration-500 translate-y-2 sm:translate-y-4 md:translate-y-6"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 2.5%, black 97.5%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 2.5%, black 97.5%, transparent 100%)'
            }}
          />
        </div>
      </motion.div>

      {/* Smooth Curved Bottom SVG Divider (Overlays directly over Hero Image & Background with ZERO GAP) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-30 overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-16 sm:h-24 md:h-32 text-white" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C360,160 1080,160 1440,0 L1440,120 L0,120 Z" 
            fill="currentColor" 
          />
        </svg>
      </div>

    </section>
  );
}







