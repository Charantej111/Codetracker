import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';

const FAQS = [
  {
    q: "How does CodeTracker sync my data across coding platforms?",
    a: "CodeTracker utilizes high-performance automated background engine queues that periodically fetch public telemetry from LeetCode, CodeChef, Codeforces, HackerRank, GeeksforGeeks, and GitHub. Your solved problems, active streak counters, and contest ratings update automatically 24/7 without manual data entry."
  },
  {
    q: "Is CodeTracker free for individual students?",
    a: "Yes! Individual students can connect all coding platform handles, track daily streaks, analyze topic-wise strengths, generate verified skill cards, and share their unified profile completely free forever."
  },
  {
    q: "How can colleges integrate CodeTracker for campus placement drives?",
    a: "Colleges can request an Enterprise Campus Portal. Training & Placement Officers (TPOs) gain access to a real-time dashboard to monitor batch coding progress, evaluate placement readiness scores, track skill gaps, and export recruiter-ready spreadsheets with one click."
  },
  {
    q: "Are student coding handles and problem ratings verified?",
    a: "Yes. CodeTracker verifies handle ownership through institutional email authentication and multi-source API validation, ensuring authentic, tamper-proof performance metrics for campus placement recruiters."
  },
  {
    q: "Can students showcase their CodeTracker profile on resumes and LinkedIn?",
    a: "Absolutely! Students can generate a shareable verified URL or embed interactive badge cards directly on their GitHub Readme, LinkedIn profile, or resume to demonstrate real, multi-platform coding expertise."
  },
  {
    q: "How often are global rankings and campus leaderboards updated?",
    a: "Leaderboards update continuously in real time as platform scores and contest ratings change. Batch rankings refresh automatically so faculty and students always see up-to-date standings."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 font-jakarta relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-[#F4F8FE]">

      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-indigo-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column Box */}
          <motion.div
            initial={{ filter: 'blur(12px)', opacity: 0, x: -30 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 bg-white/90 p-8 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-indigo-500/25">
                <HelpCircle className="w-6 h-6 stroke-[2.5]" />
              </div>



              <h2 className="font-outfit font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
                Frequently Asked <br />
                <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">Questions</span>
              </h2>

              <p className="mt-4 text-slate-600 text-sm leading-relaxed font-normal">
                Everything you need to know about profile setup, automated telemetry, streak calculation, and campus integrations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <div className="text-xs text-slate-500 font-medium mb-3">Still have unanswered questions?</div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-outfit font-bold text-xs shadow-lg shadow-slate-900/10 hover:bg-indigo-600 hover:scale-105 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-sky-400" />
                Talk to Support Team →
              </a>
            </div>
          </motion.div>

          {/* Right Column Accordion */}
          <motion.div
            initial={{ filter: 'blur(12px)', opacity: 0, x: 30 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-4"
          >
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'border-indigo-300 bg-gradient-to-r from-white via-indigo-50/20 to-sky-50/20 shadow-lg shadow-indigo-950/5'
                    : 'border-slate-200/90 bg-white/90 hover:border-indigo-200 hover:shadow-md'
                    }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-outfit font-extrabold text-base sm:text-lg text-slate-900 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full transition-colors ${isOpen ? 'bg-indigo-600' : 'bg-slate-300'}`} />
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-indigo-600 text-white rotate-180 shadow-md shadow-indigo-600/30' : 'bg-slate-100 text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-slate-600 text-sm leading-relaxed font-jakarta"
                      >
                        <div className="pt-2 border-t border-indigo-100/60 font-normal">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}


