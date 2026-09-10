import React from 'react';
import { motion } from 'framer-motion';
import { Building2, UserPlus, RefreshCw, Trophy, ArrowRight } from 'lucide-react';

const HOW_IT_WORKS_STEPS = [
  {
    stepNum: "1",
    badgeBg: "bg-indigo-600 text-white shadow-md shadow-indigo-600/30",
    pillIcon: Building2,
    pillTitle: "College Registers",
    title: "Set Up Your College",
    desc: "Verify your college, invite faculty administrators, and set up your portal in minutes.",
    img: "/step-1.png",
    fallbackImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    accentColor: "border-indigo-100/90 hover:border-indigo-300 bg-gradient-to-b from-indigo-50/50 via-slate-50/30 to-white"
  },
  {
    stepNum: "2",
    badgeBg: "bg-emerald-600 text-white shadow-md shadow-emerald-600/30",
    pillIcon: UserPlus,
    pillTitle: "Students Join",
    title: "Onboard Students",
    desc: "Students join your portal and securely link their coding profiles with institutional email.",
    img: "/step-2.png",
    fallbackImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    accentColor: "border-emerald-100/90 hover:border-emerald-300 bg-gradient-to-b from-emerald-50/50 via-slate-50/30 to-white"
  },
  {
    stepNum: "3",
    badgeBg: "bg-blue-600 text-white shadow-md shadow-blue-600/30",
    pillIcon: RefreshCw,
    pillTitle: "Profiles Sync",
    title: "Automatic Rating Sync",
    desc: "CodeTracker syncs data from 6+ platforms automatically 24/7 to keep student ratings fresh.",
    img: "/step-3.png",
    fallbackImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    accentColor: "border-blue-100/90 hover:border-blue-300 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-white"
  },
  {
    stepNum: "4",
    badgeBg: "bg-amber-500 text-white shadow-md shadow-amber-500/30",
    pillIcon: Trophy,
    pillTitle: "Track & Compete",
    title: "Track, Compete & Grow",
    desc: "Track progress, compete in contests, climb leaderboards and land top tech jobs.",
    img: "/step-4.png",
    fallbackImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    accentColor: "border-amber-100/90 hover:border-amber-300 bg-gradient-to-b from-amber-50/50 via-slate-50/30 to-white"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white font-jakarta relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-xs tracking-wider uppercase inline-block mb-3 border border-indigo-100 shadow-2xs"
          >
            SIMPLE 4-STEP PROCESS
          </motion.span>

          <motion.h2 
            initial={{ filter: 'blur(14px)', opacity: 0, y: 25 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-outfit font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight"
          >
            How <span className="text-indigo-600">CodeTracker</span> Works
          </motion.h2>

          <motion.p 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            From onboarding your campus to tracking student progress and landing top tech jobs.
          </motion.p>
        </div>

        {/* 4 Storytelling Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((item, idx) => {
            const PillIcon = item.pillIcon;
            return (
              <motion.div
                key={idx}
                initial={{ filter: 'blur(12px)', opacity: 0, y: 35 }}
                whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 group ${item.accentColor}`}
              >
                <div>
                  {/* Top Badge & Pill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-9 h-9 rounded-2xl flex items-center justify-center font-outfit font-black text-sm ${item.badgeBg}`}>
                      {item.stepNum}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 shadow-2xs">
                      <PillIcon className="w-3.5 h-3.5 text-indigo-600" />
                      <span className="font-mono text-[10px] font-bold text-slate-700">{item.pillTitle}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-outfit font-extrabold text-xl text-slate-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Uncropped Animated Illustration Container */}
                <div className="w-full h-52 sm:h-56 flex items-center justify-center relative p-2 my-2 overflow-hidden">
                  <img
                    src={item.img}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = item.fallbackImg;
                    }}
                    alt={item.title}
                    className="max-h-48 sm:max-h-52 w-auto object-contain drop-shadow-md group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-500 ease-out"
                  />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


