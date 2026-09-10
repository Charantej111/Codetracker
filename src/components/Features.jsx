import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  BarChart2, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Flame, 
  Zap 
} from 'lucide-react';

const FEATURES_DATA = [
  {
    id: 1,
    title: "Automated Data Aggregation",
    desc: "Automatically sync data from 6+ coding platforms and keep profiles up to date 24/7.",
    icon: Layers,
    img: "/features_grid_card1.png",
    bgGradient: "from-indigo-50/70 via-slate-50/40 to-white",
    borderColor: "border-indigo-100",
    badgeColor: "bg-indigo-600 text-white"
  },
  {
    id: 2,
    title: "Real-Time Analytics",
    desc: "Track progress, analyze skill distributions, and uncover performance insights in real time.",
    icon: BarChart2,
    img: "/features_grid_card2.png",
    bgGradient: "from-emerald-50/70 via-slate-50/40 to-white",
    borderColor: "border-emerald-100",
    badgeColor: "bg-emerald-600 text-white"
  },
  {
    id: 3,
    title: "Ranking System",
    desc: "Unified leaderboards for college, department, batch, graduation year & more.",
    icon: Star,
    img: "/features_grid_card3.png",
    bgGradient: "from-amber-50/70 via-slate-50/40 to-white",
    borderColor: "border-amber-100",
    badgeColor: "bg-amber-500 text-white"
  },
  {
    id: 4,
    title: "Role-Based Access Control",
    desc: "Granular permissions for admins, faculty, placement officers, and recruiters.",
    icon: ShieldCheck,
    img: "/features_grid_card4.png",
    bgGradient: "from-blue-50/70 via-slate-50/40 to-white",
    borderColor: "border-blue-100",
    badgeColor: "bg-blue-600 text-white"
  },
  {
    id: 5,
    title: "Profile Verification",
    desc: "Verify student profiles using institutional email and platform handle checks.",
    icon: CheckCircle2,
    img: "/features_grid_card5.png",
    bgGradient: "from-cyan-50/70 via-slate-50/40 to-white",
    borderColor: "border-cyan-100",
    badgeColor: "bg-cyan-600 text-white"
  },
  {
    id: 6,
    title: "Reports & Exports",
    desc: "Generate detailed reports and export batch data in CSV with a single click.",
    icon: FileText,
    img: "/features_grid_card6.png",
    bgGradient: "from-rose-50/70 via-slate-50/40 to-white",
    borderColor: "border-rose-100",
    badgeColor: "bg-rose-500 text-white"
  },
  {
    id: 7,
    title: "Submission Streak Tracking",
    desc: "Monitor consistency and submission streaks across all connected platforms.",
    icon: Flame,
    img: "/features_grid_card7.png",
    bgGradient: "from-orange-50/70 via-slate-50/40 to-white",
    borderColor: "border-orange-100",
    badgeColor: "bg-orange-500 text-white"
  },
  {
    id: 8,
    title: "Smart AI Insights",
    desc: "AI diagnostics to improve weak problem areas and reach peak coding performance.",
    icon: Zap,
    img: "/features_grid_card8.png",
    badgeRight: "NEW AI FEATURE",
    bgGradient: "from-purple-50/70 via-slate-50/40 to-white",
    borderColor: "border-purple-100",
    badgeColor: "bg-purple-600 text-white"
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
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                initial={{ filter: 'blur(12px)', opacity: 0, y: 30 }}
                whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`group rounded-3xl border ${feat.borderColor} bg-gradient-to-b ${feat.bgGradient} p-6 flex flex-col justify-between h-full shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
              >
                <div>
                  {/* Top Bar Indicator & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl ${feat.badgeColor} flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {feat.badgeRight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 font-mono text-[10px] font-bold uppercase tracking-wider">
                        {feat.badgeRight}
                      </span>
                    )}
                  </div>

                  {/* Uncropped Animated Illustration Container */}
                  <div className="w-full h-52 sm:h-56 flex items-center justify-center relative p-2 my-3 overflow-hidden">
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



