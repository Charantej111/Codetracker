import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-24 font-jakarta relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/cta_sky_bg.jpg')" }}>
      
      {/* Sky Background Ambient Light Overlay */}
      <div className="absolute inset-0 bg-sky-900/10 pointer-events-none" />

      {/* Birds Gliding Slowly from Left to Right Across Sky Banner */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        
        {/* Bird 1 */}
        <motion.div
          initial={{ x: '-20vw', y: '12vh' }}
          animate={{ x: '120vw', y: '18vh' }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="absolute"
        >
          <motion.svg 
            animate={{ y: [0, -4, 0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-7 text-slate-800 opacity-75 fill-current" 
            viewBox="0 0 50 30"
          >
            <path d="M0,15 C10,5 20,0 25,12 C30,0 40,5 50,15 C40,10 30,8 25,18 C20,8 10,10 0,15 Z" />
          </motion.svg>
        </motion.div>

        {/* Bird 2 (Slightly behind) */}
        <motion.div
          initial={{ x: '-28vw', y: '18vh' }}
          animate={{ x: '115vw', y: '24vh' }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear', delay: 2 }}
          className="absolute"
        >
          <motion.svg 
            animate={{ y: [0, -3, 0, 3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="w-5 h-5 text-slate-900 opacity-65 fill-current" 
            viewBox="0 0 50 30"
          >
            <path d="M0,15 C10,5 20,0 25,12 C30,0 40,5 50,15 C40,10 30,8 25,18 C20,8 10,10 0,15 Z" />
          </motion.svg>
        </motion.div>

        {/* Bird 3 (Lower Altitude) */}
        <motion.div
          initial={{ x: '-35vw', y: '26vh' }}
          animate={{ x: '125vw', y: '20vh' }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear', delay: 6 }}
          className="absolute"
        >
          <motion.svg 
            animate={{ y: [0, -5, 0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="w-6 h-6 text-slate-800 opacity-70 fill-current" 
            viewBox="0 0 50 30"
          >
            <path d="M0,15 C10,5 20,0 25,12 C30,0 40,5 50,15 C40,10 30,8 25,18 C20,8 10,10 0,15 Z" />
          </motion.svg>
        </motion.div>

        {/* Bird 4 */}
        <motion.div
          initial={{ x: '-42vw', y: '32vh' }}
          animate={{ x: '118vw', y: '36vh' }}
          transition={{ duration: 38, repeat: Infinity, ease: 'linear', delay: 9 }}
          className="absolute"
        >
          <motion.svg 
            animate={{ y: [0, -4, 0, 4, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            className="w-5 h-5 text-slate-900 opacity-55 fill-current" 
            viewBox="0 0 50 30"
          >
            <path d="M0,15 C10,5 20,0 25,12 C30,0 40,5 50,15 C40,10 30,8 25,18 C20,8 10,10 0,15 Z" />
          </motion.svg>
        </motion.div>

      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Floating Uploaded Paper Sheet Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto flex items-center justify-center p-1 sm:p-4"
        >
          {/* Authentic Torn Paper Sheet with Attached Paper Clip */}
          <img 
            src="/paper_sheet_note.png" 
            alt="Authentic Paper Note" 
            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-none select-none min-h-85 sm:min-h-110"
          />

          {/* Text Content Overlay positioned carefully inside paper bounds */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-16 md:px-28 py-6 sm:py-10 z-20">
            
            {/* CodeTracker Logo Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4 cursor-pointer"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-3" />
              </div>
              <span className="font-outfit font-extrabold text-base sm:text-2xl tracking-tight text-slate-900">
                Code<span className="text-indigo-600">Tracker</span>
              </span>
            </motion.div>

            {/* Aesthetic Mixed Typography Headline (Fits completely inside note without touching paperclip) */}
            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="font-outfit font-black text-lg sm:text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight"
            >
              Track.{' '}
              <span className="text-indigo-600">Analyze.</span>{' '}
              <span>Grow.</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-2 sm:mt-4 text-slate-600 font-jakarta text-[11px] sm:text-base max-w-60 sm:max-w-md mx-auto font-medium leading-relaxed"
            >
              All your coding journey. Unified in one platform.
            </motion.p>

            {/* Rounded Glassmorphic Get Started Free Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-4 sm:mt-7"
            >
              <a
                href="#contact"
                className="px-5 sm:px-9 py-2.5 sm:py-3.5 bg-slate-900/95 hover:bg-indigo-600 text-white font-outfit font-extrabold text-xs sm:text-base rounded-full border border-white/20 shadow-xl shadow-slate-900/25 backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </a>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}


