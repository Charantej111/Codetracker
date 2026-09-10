import React from 'react';
import { motion } from 'framer-motion';

const FEATURES_DATA = [
  {
    id: 1,
    title: "Automated Data Aggregation",
    desc: "Automatically sync data from 6+ coding platforms and keep profiles up to date 24/7.",
    img: "/features_grid_card1.png",
    bgGradient: "from-indigo-50/70 via-slate-50/40 to-white",
    borderColor: "border-indigo-100"
  },
  {
    id: 2,
    title: "Real-Time Analytics",
    desc: "Track progress, analyze skill distributions, and uncover performance insights in real time.",
    img: "/features_grid_card2.png",
    bgGradient: "from-emerald-50/70 via-slate-50/40 to-white",
    borderColor: "border-emerald-100"
  },
  {
    id: 3,
    title: "Ranking System",
    desc: "Unified leaderboards for college, department, batch, graduation year & more.",
    img: "/features_grid_card3.png",
    bgGradient: "from-amber-50/70 via-slate-50/40 to-white",
    borderColor: "border-amber-100"
  },
  {
    id: 4,
    title: "Role-Based Access Control",
    desc: "Granular permissions for admins, faculty, placement officers, and recruiters.",
    img: "/features_grid_card4.png",
    bgGradient: "from-blue-50/70 via-slate-50/40 to-white",
    borderColor: "border-blue-100"
  },
  {
    id: 5,
    title: "Profile Verification",
    desc: "Verify student profiles using institutional email and platform handle checks.",
    img: "/features_grid_card5.png",
    bgGradient: "from-cyan-50/70 via-slate-50/40 to-white",
    borderColor: "border-cyan-100"
  },
  {
    id: 6,
    title: "Reports & Exports",
    desc: "Generate detailed reports and export batch data in CSV with a single click.",
    img: "/features_grid_card6.png",
    bgGradient: "from-rose-50/70 via-slate-50/40 to-white",
    borderColor: "border-rose-100"
  },
  {
    id: 7,
    title: "Submission Streak Tracking",
    desc: "Monitor consistency and submission streaks across all connected platforms.",
    img: "/features_grid_card7.png",
    bgGradient: "from-orange-50/70 via-slate-50/40 to-white",
    borderColor: "border-orange-100"
  },
  {
    id: 8,
    title: "Smart AI Insights",
    desc: "AI diagnostics to improve weak problem areas and reach peak coding performance.",
    img: "/features_grid_card8.png",
    bgGradient: "from-purple-50/70 via-slate-50/40 to-white",
    borderColor: "border-purple-100"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white font-jakarta relative overflow-hidden">
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
            FEATURES FOR STUDENTS & CAMPUS
          </motion.span>

          <motion.h2 
            initial={{ filter: 'blur(14px)', opacity: 0, y: 25 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-outfit font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight"
          >
            Everything You Need To <br />
            <span className="text-indigo-600">Track, Analyze & Grow.</span>
          </motion.h2>

          <motion.p 
            initial={{ filter: 'blur(10px)', opacity: 0, y: 15 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Powerful features built for colleges, students, faculty, and placement teams to simplify coding excellence.
          </motion.p>
        </div>

        {/* 8 Feature Cards Grid with Uncropped Animated Illustrations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feat, idx) => {
            return (
              <motion.div
                key={feat.id}
                initial={{ filter: 'blur(12px)', opacity: 0, y: 30 }}
                whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`group rounded-3xl border ${feat.borderColor} bg-linear-to-b ${feat.bgGradient} p-6 flex flex-col justify-between h-full shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
              >
                <div>
                  {/* Uncropped Animated Illustration Container */}
                  <div className="w-full h-52 sm:h-56 flex items-center justify-center relative p-2 mb-4 overflow-hidden">
                    <img
                      src={feat.img}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                      }}
                      alt={feat.title}
                      className="max-h-48 sm:max-h-52 w-auto object-contain drop-shadow-md group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-500 ease-out"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-outfit font-extrabold text-xl text-slate-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



