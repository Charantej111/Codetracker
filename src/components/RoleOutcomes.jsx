import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Share2, 
  RefreshCw, 
  Download,
  Search
} from 'lucide-react';

const DASHBOARDS = [
  {
    id: 'student',
    roleName: 'Student',
    roleSuffix: 'Experience',
    badgeText: 'FOR STUDENTS',
    badgeBg: 'bg-indigo-50 text-indigo-700',
    accentColor: 'text-indigo-600',
    buttonBg: 'bg-indigo-600 hover:bg-indigo-700',
    leftCardBg: 'bg-gradient-to-b from-indigo-50/50 via-slate-50 to-white border-indigo-100',
    desc: 'Track progress, improve coding skills, compete and build a placement ready profile.',
    bullets: [
      'Unified profile & ratings',
      'Contest participation & history',
      'Coding streaks & achievements',
      'Resume & placement card',
      'Personalized insights'
    ],
    buttonText: 'Explore as Student →',
    img: '/student-avatar.png',
    fallbackImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'placement',
    roleName: 'Placement',
    roleSuffix: 'Cell',
    badgeText: 'For Placement Cell',
    badgeBg: 'bg-orange-100 text-orange-700',
    accentColor: 'text-orange-600',
    buttonBg: 'bg-[#FF6B00] hover:bg-orange-600',
    leftCardBg: 'bg-gradient-to-b from-[#FFF7ED] via-[#FFFBF5] to-[#FAFAFA] border-orange-100',
    desc: 'Identify top talent, track placement readiness and share verified data with recruiters.',
    bullets: [
      'Top performer tracking',
      'Placement readiness score',
      'Shortlist & export candidates',
      'Drive & recruiter management'
    ],
    buttonText: 'Explore as Placement Cell →',
    img: '/placement-avatar.png',
    fallbackImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'faculty',
    roleName: 'Faculty',
    roleSuffix: 'Dashboard',
    badgeText: 'For Faculty',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    accentColor: 'text-emerald-700',
    buttonBg: 'bg-[#047857] hover:bg-emerald-800',
    leftCardBg: 'bg-gradient-to-b from-[#ECFDF5] via-[#F0FDF4] to-[#FAFAFA] border-emerald-100',
    desc: 'Monitor student activity, conduct contests, analyze performance and improve engagement.',
    bullets: [
      'Class & department analytics',
      'Student activity & engagement',
      'Contest management',
      'Assignments & announcements',
      'Performance insights'
    ],
    buttonText: 'Explore as Faculty →',
    img: '/faculty-avatar.png',
    fallbackImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'recruiter',
    roleName: 'Recruiter',
    roleSuffix: 'Portal',
    badgeText: 'For Recruiters',
    badgeBg: 'bg-blue-100 text-blue-700',
    accentColor: 'text-blue-600',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    leftCardBg: 'bg-gradient-to-b from-[#EFF6FF] via-[#F5F9FF] to-[#FAFAFA] border-blue-100',
    desc: 'Discover top coding talent, filter by skills and platform ratings, and connect with the right candidates.',
    bullets: [
      'Advanced search & filters',
      'Platform-wise ratings',
      'Candidate profiles',
      'Shortlist & export',
      'Drive & candidate communication'
    ],
    buttonText: 'Explore as Recruiter →',
    img: '/recruiter-avatar.png',
    fallbackImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  }
];

export default function RoleOutcomes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = DASHBOARDS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? DASHBOARDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === DASHBOARDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="solutions" className="py-20 bg-slate-50/50 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-semibold text-xs tracking-wider uppercase inline-block mb-3">
            ROLE BASED OUTCOMES
          </span>

          <h2 className="font-outfit font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight">
            One Platform. Every Role. <br />
            <span className="text-indigo-600">
              Better Outcomes.
            </span>
          </h2>

          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-normal">
            Switch between roles to explore tailored screens for Students, Placement Officers, Faculty, and Recruiters.
          </p>
        </div>

        {/* Role Tab Pill Switcher */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {DASHBOARDS.map((dash, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={dash.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-5 py-2.5 rounded-full font-outfit font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-purple-300'
                }`}
              >
                {dash.roleName} {dash.roleSuffix}
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Dashboard Display */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              
              {/* Left Column Card */}
              <div className={`lg:col-span-4 p-8 rounded-3xl border ${current.leftCardBg} flex flex-col justify-between shadow-xs relative overflow-hidden`}>
                <div>
                  <span className={`px-3.5 py-1 rounded-full text-xs font-bold ${current.badgeBg} inline-block mb-4`}>
                    {current.badgeText}
                  </span>

                  <h3 className="font-outfit font-extrabold text-3xl text-slate-900 leading-tight">
                    {current.roleName} <span className={current.accentColor}>{current.roleSuffix}</span>
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed font-normal">
                    {current.desc}
                  </p>

                  <ul className="mt-6 space-y-3 font-medium text-sm text-slate-800">
                    {current.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 + 0.1 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className={`w-5 h-5 ${current.accentColor} shrink-0 mt-0.5`} />
                        <span className="text-slate-700 text-xs sm:text-sm font-semibold">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className={`px-6 py-3 rounded-full text-white font-outfit font-bold text-sm shadow-md hover:scale-105 transition-all inline-flex items-center gap-2 ${current.buttonBg}`}
                    >
                      {current.buttonText}
                    </a>
                  </div>
                </div>

                {/* Floating Uncropped 3D Character Illustration */}
                <div className="mt-8 w-full h-60 flex justify-center items-end relative">
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    src={current.img}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = current.fallbackImg;
                    }}
                    alt={current.roleName}
                    className="max-h-56 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Column: Live Screen / Dashboard Preview */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl flex flex-col justify-between">
                
                {/* SCREEN 1: STUDENT EXPERIENCE */}
                {current.id === 'student' && (
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                      <div>
                        <h3 className="font-outfit font-extrabold text-2xl text-slate-900 flex items-center gap-2">
                          Hey Charan 👋
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Keep coding, keep growing!</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:scale-105 transition-transform cursor-pointer">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-indigo-700 hover:scale-105 transition-all cursor-pointer">
                          <RefreshCw className="w-3.5 h-3.5" /> Sync Data
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:shadow-md transition-shadow">
                        <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">CURRENT RATING</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1 flex items-center gap-2">
                          1847
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full">📈 +42</span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium mt-1">LeetCode • Knight</div>
                      </motion.div>

                      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.15 }} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:shadow-md transition-shadow">
                        <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">GLOBAL RANK</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">#23,045</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-1">Top 2.1% globally</div>
                      </motion.div>

                      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:shadow-md transition-shadow">
                        <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">SOLVED PROBLEMS</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">1,250</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-1">Across all platforms</div>
                      </motion.div>

                      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.25 }} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:shadow-md transition-shadow">
                        <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">CURRENT STREAK 🔥</div>
                        <div className="font-outfit font-extrabold text-2xl text-amber-600 mt-1">27 days</div>
                        <div className="flex gap-1 mt-2">
                          <div className="w-3 h-1 bg-indigo-600 rounded-full" />
                          <div className="w-3 h-1 bg-indigo-600 rounded-full" />
                          <div className="w-3 h-1 bg-indigo-600 rounded-full" />
                          <div className="w-3 h-1 bg-slate-200 rounded-full" />
                        </div>
                      </motion.div>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-3">
                        <span className="font-outfit text-base">Platform Ratings</span>
                        <span className="text-indigo-600 flex items-center gap-1 cursor-pointer hover:underline">View All ↗</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-4 rounded-2xl border border-slate-200/80 text-center hover:scale-105 transition-transform bg-white shadow-xs">
                          <div className="text-orange-500 text-lg mb-1">📊</div>
                          <div className="text-xs text-slate-600 font-bold">Codeforces</div>
                          <div className="font-outfit font-extrabold text-lg text-slate-900">1621</div>
                          <span className="text-[10px] font-bold text-amber-600 uppercase">EXPERT</span>
                        </div>

                        <div className="p-4 rounded-2xl border border-slate-200/80 text-center bg-indigo-50/30 hover:scale-105 transition-transform shadow-xs">
                          <div className="text-yellow-500 text-lg mb-1">⚡</div>
                          <div className="text-xs text-slate-600 font-bold">LeetCode</div>
                          <div className="font-outfit font-extrabold text-lg text-slate-900">1847</div>
                          <span className="text-[10px] font-bold text-indigo-600 uppercase">KNIGHT</span>
                        </div>

                        <div className="p-4 rounded-2xl border border-slate-200/80 text-center hover:scale-105 transition-transform bg-white shadow-xs">
                          <div className="text-teal-500 text-lg mb-1">👨‍🍳</div>
                          <div className="text-xs text-slate-600 font-bold">CodeChef</div>
                          <div className="font-outfit font-extrabold text-lg text-slate-900">2011</div>
                          <span className="text-[10px] font-bold text-teal-600 uppercase">5 STAR</span>
                        </div>

                        <div className="p-4 rounded-2xl border border-slate-200/80 text-center hover:scale-105 transition-transform bg-white shadow-xs">
                          <div className="text-purple-500 text-lg mb-1">🎯</div>
                          <div className="text-xs text-slate-600 font-bold">AtCoder</div>
                          <div className="font-outfit font-extrabold text-lg text-slate-900">1234</div>
                          <span className="text-[10px] font-bold text-emerald-600 uppercase">GREEN</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50">
                        <div className="text-xs font-bold text-slate-900 mb-3">Contribution Heatmap</div>
                        <div className="grid grid-cols-12 gap-1">
                          {Array.from({ length: 48 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-3 rounded-xs ${
                                i % 4 === 0 ? 'bg-indigo-600' : i % 3 === 0 ? 'bg-indigo-400' : i % 2 === 0 ? 'bg-indigo-200' : 'bg-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50">
                        <div className="text-xs font-bold text-slate-900 mb-3">Badges & Achievements</div>
                        <div className="flex gap-2 mb-3">
                          <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs">🏅</span>
                          <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">🥇</span>
                          <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">⭐</span>
                          <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">+12</span>
                        </div>
                        <div className="text-[11px] text-slate-600 font-medium">
                          • Codeforces Round #912 (Rank #1,120 • +55 Rating)
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 2: PLACEMENT CELL */}
                {current.id === 'placement' && (
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                      <div>
                        <h3 className="font-outfit font-extrabold text-2xl text-slate-900">
                          Welcome back!
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Here's your placement overview.</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-700">
                          <option>2025 Batch</option>
                        </select>
                        <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-700">
                          <option>CSE</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:shadow-md transition-all">
                        <div className="text-xs text-slate-500 font-medium">Eligible Students</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">412</div>
                        <div className="text-[11px] text-orange-600 font-bold mt-1">100%</div>
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:shadow-md transition-all">
                        <div className="text-xs text-slate-500 font-medium">Placement Ready</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">278</div>
                        <div className="text-[11px] text-slate-600 font-bold mt-1">67.5%</div>
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:shadow-md transition-all">
                        <div className="text-xs text-slate-500 font-medium">Offers Received</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">96</div>
                        <div className="text-[11px] text-slate-600 font-bold mt-1">23.3%</div>
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:shadow-md transition-all">
                        <div className="text-xs text-slate-500 font-medium">Avg. Coding Score</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">1724</div>
                        <div className="text-[11px] text-emerald-600 font-bold mt-1">Excellent</div>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                      <div className="lg:col-span-8">
                        <div className="font-outfit font-bold text-sm text-slate-900 mb-3">Top Placement Ready Students</div>
                        <div className="space-y-2 text-xs font-jakarta">
                          <div className="p-3 rounded-xl border border-slate-200/80 flex items-center justify-between hover:border-orange-300 transition-colors bg-white">
                            <div className="flex items-center gap-3">
                              <span className="font-bold">1</span>
                              <span className="font-semibold text-slate-900">Ankit Sharma</span>
                            </div>
                            <span className="text-slate-600">1847 • LeetCode</span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">98%</span>
                          </div>

                          <div className="p-3 rounded-xl border border-slate-200/80 flex items-center justify-between hover:border-orange-300 transition-colors bg-white">
                            <div className="flex items-center gap-3">
                              <span className="font-bold">2</span>
                              <span className="font-semibold text-slate-900">Riya Singh</span>
                            </div>
                            <span className="text-slate-600">1732 • Codeforces</span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">93%</span>
                          </div>

                          <div className="p-3 rounded-xl border border-slate-200/80 flex items-center justify-between hover:border-orange-300 transition-colors bg-white">
                            <div className="flex items-center gap-3">
                              <span className="font-bold">3</span>
                              <span className="font-semibold text-slate-900">Arjun Verma</span>
                            </div>
                            <span className="text-slate-600">1698 • CodeChef</span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">92%</span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                          <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5 hover:bg-slate-50 hover:scale-105 transition-all cursor-pointer">
                            <Download className="w-3.5 h-3.5" /> Export CSV
                          </button>
                          <span className="text-xs text-orange-600 font-bold cursor-pointer hover:underline">
                            View Full List →
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-4 p-4 rounded-2xl border border-slate-200/80 text-center flex flex-col items-center justify-center bg-white">
                        <div className="text-xs font-bold text-slate-800 mb-2">Placement Readiness</div>
                        <div className="w-24 h-24 rounded-full border-8 border-orange-500 flex items-center justify-center font-outfit font-extrabold text-base text-slate-900 shadow-md">
                          67.5%
                        </div>
                        <div className="text-[11px] text-slate-500 mt-3 space-y-1 text-left">
                          <div>🟠 Ready (278)</div>
                          <div>🟢 In Progress (104)</div>
                          <div>⚪ Not Ready (30)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 3: FACULTY DASHBOARD */}
                {current.id === 'faculty' && (
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                      <div>
                        <h3 className="font-outfit font-extrabold text-2xl text-slate-900 flex items-center gap-2">
                          Welcome back, Dr. Priya 👋
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Here's what's happening in your department.</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-700">
                          <option>This Week</option>
                        </select>
                        <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-700">
                          <option>CSE Department</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:shadow-md transition-all">
                        <div className="text-xs text-slate-500 font-medium">Total Students</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">320</div>
                        <div className="text-[11px] text-emerald-700 font-semibold mt-1">📈 +12 this week</div>
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:shadow-md transition-all">
                        <div className="text-xs text-slate-500 font-medium">Active Students</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">268</div>
                        <div className="text-[11px] text-slate-600 font-semibold mt-1">83.7% Attendance</div>
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:shadow-md transition-all">
                        <div className="text-xs text-slate-500 font-medium">Problems Solved</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">4,732</div>
                        <div className="text-[11px] text-emerald-700 font-semibold mt-1">📈 +10.4%</div>
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:shadow-md transition-all">
                        <div className="text-xs text-slate-500 font-medium">Contests Conducted</div>
                        <div className="font-outfit font-extrabold text-2xl text-slate-900 mt-1">5</div>
                        <div className="text-[11px] text-slate-500 font-semibold mt-1">This month</div>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                      <div className="lg:col-span-8 p-4 rounded-2xl border border-slate-200/80 bg-white">
                        <div className="flex justify-between text-xs font-bold text-slate-900 mb-3">
                          <span className="font-outfit">Activity Overview</span>
                          <span className="text-emerald-700">🟢 PROBLEMS SOLVED</span>
                        </div>
                        <div className="h-32 flex items-end justify-between gap-2 pt-4">
                          {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
                            <div key={day} className="flex-1 flex flex-col items-center gap-1">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${(i + 3) * 12}px` }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="w-full rounded-t-md bg-emerald-700 hover:bg-emerald-600 transition-colors"
                              />
                              <span className="text-[10px] text-slate-400 font-bold">{day}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-4 p-4 rounded-2xl border border-slate-200/80 bg-white">
                        <div className="flex justify-between text-xs font-bold text-slate-900 mb-3">
                          <span className="font-outfit">Top Performers</span>
                          <span className="text-emerald-700 cursor-pointer hover:underline">View All</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between font-semibold">
                            <span>1. Ankit Sharma</span>
                            <span className="text-emerald-700 font-bold">1847</span>
                          </div>
                          <div className="flex justify-between font-semibold">
                            <span>2. Riya Singh</span>
                            <span className="text-emerald-700 font-bold">1823</span>
                          </div>
                          <div className="flex justify-between font-semibold">
                            <span>3. Arjun Verma</span>
                            <span className="text-emerald-700 font-bold">1588</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 4: RECRUITER PORTAL */}
                {current.id === 'recruiter' && (
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                      <div>
                        <h3 className="font-outfit font-extrabold text-2xl text-slate-900">
                          Find Top Coding Talent
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Search and filter the best candidates from your campus.</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                      <div className="flex-1 min-w-50 relative">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          placeholder="Search by name, skills or email..."
                          className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <select className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700">
                        <option>2025 Batch</option>
                      </select>
                      <select className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700">
                        <option>LeetCode</option>
                      </select>
                      <select className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700">
                        <option>Min Rating 1500</option>
                      </select>
                    </div>

                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full text-left text-xs font-jakarta">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-400 font-bold">
                            <th className="pb-2">Student</th>
                            <th className="pb-2">Department</th>
                            <th className="pb-2">Batch</th>
                            <th className="pb-2">LeetCode</th>
                            <th className="pb-2">Codeforces</th>
                            <th className="pb-2">CodeChef</th>
                            <th className="pb-2 text-blue-600">Score</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-blue-50/40 transition-colors">
                            <td className="py-2.5 font-bold text-slate-900">Ankit Sharma</td>
                            <td>CSE</td>
                            <td>2025</td>
                            <td>1847</td>
                            <td>1621</td>
                            <td>2011</td>
                            <td className="font-extrabold text-blue-600">8721</td>
                          </tr>
                          <tr className="hover:bg-blue-50/40 transition-colors">
                            <td className="py-2.5 font-bold text-slate-900">Riya Singh</td>
                            <td>CSE</td>
                            <td>2025</td>
                            <td>1732</td>
                            <td>1603</td>
                            <td>1950</td>
                            <td className="font-extrabold text-blue-600">8445</td>
                          </tr>
                          <tr className="hover:bg-blue-50/40 transition-colors">
                            <td className="py-2.5 font-bold text-slate-900">Arjun Verma</td>
                            <td>CSE</td>
                            <td>2025</td>
                            <td>1698</td>
                            <td>1580</td>
                            <td>1912</td>
                            <td className="font-extrabold text-blue-600">8292</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs shadow-md hover:bg-blue-700 hover:scale-105 transition-all cursor-pointer">
                        Shortlist (5) &gt;
                      </button>
                      <button className="px-4 py-2.5 border border-slate-200 rounded-xl font-bold text-xs text-slate-700 flex items-center gap-1.5 hover:bg-slate-50 transition-all cursor-pointer">
                        <Download className="w-3.5 h-3.5" /> Export CSV
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom Carousel Arrows Navigation Bar */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Role {currentIndex + 1} of {DASHBOARDS.length}: <strong className="text-slate-900 font-outfit">{current.roleName} {current.roleSuffix}</strong>
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 flex items-center justify-center shadow-xs hover:scale-110 transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 flex items-center justify-center shadow-xs hover:scale-110 transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
