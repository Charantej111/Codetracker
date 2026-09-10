import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-100 font-jakarta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Storytelling Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-xs"
        >
          <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
          <span>Institutional Ecosystem</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-outfit font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none text-slate-900"
        >
          TRUSTED BY LEADING <br />
          <span className="text-slate-400">ENGINEERING COLLEGES</span>
        </motion.h2>

        {/* Subtitle Message */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-slate-700 font-medium text-base sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Helping <strong className="text-indigo-600 font-extrabold">6,000+ Students</strong> at{' '}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-indigo-50/90 text-indigo-700 text-xs sm:text-sm font-bold border border-indigo-100/80 shadow-2xs align-middle mx-0.5">
            <img src="/aditya_logo.jpg" alt="Aditya Logo" className="w-3.5 h-3.5 object-contain rounded-full" />
            Aditya University
          </span>{' '}
          track, compete, and grow every day.
        </motion.p>

        {/* Hashtags Row */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono font-bold text-slate-600"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
            #CompetitiveCoding
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
            #PlacementReady
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
            #Students
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
            #CodeSmarter
          </span>
        </motion.div>

      </div>
    </section>
  );
}

