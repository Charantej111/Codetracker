import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Lock, Zap, ArrowUpRight, TrendingUp, Github } from 'lucide-react';

export default function PlatformHub() {
  return (
    <section id="platform-hub" className="py-12 sm:py-16 md:py-20 font-jakarta relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Senior Product Header */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-5">
          
          {/* Animated UNIFIED PLATFORM ENGINE Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -12, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-600/10 text-indigo-700 font-bold text-[11px] sm:text-xs tracking-wider uppercase mb-2 sm:mb-3 border border-indigo-200/80 shadow-xs backdrop-blur-md"
          >
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-indigo-600"></span>
            </span>
            <span>UNIFIED PLATFORM ENGINE</span>
          </motion.div>

          <h2 className="font-outfit font-black text-2xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            All Your Coding Platforms. <br />
            <span className="text-indigo-600">One Seamless Integration Hub.</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            CodeTracker automatically aggregates your rating, contest rank, and submission streaks into a single verified score.
          </p>
        </div>

        {/* Concentric Arc Network Hub Canvas */}
        <div className="relative w-full max-w-4xl mx-auto h-80 sm:h-100 md:h-115 my-1 sm:my-2 flex items-center justify-center">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-100/35 via-transparent to-transparent pointer-events-none" />

          {/* SVG Concentric Arcs & Motion Canvas */}
          <svg className="w-full h-full overflow-visible z-10" viewBox="0 20 800 480" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="12%" stopColor="#60A5FA" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.85" />
                <stop offset="88%" stopColor="#38BDF8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Inner Arc (Radius 160, Peak Y=220) */}
            <path id="innerArcPath" d="M 240 380 A 160 160 0 0 1 560 380" stroke="#BFDBFE" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 240 380 A 160 160 0 0 1 560 380" stroke="url(#arcGlow)" strokeWidth="2.5" fill="none" />
            
            {/* Middle Arc (Radius 245, Peak Y=135) */}
            <path id="middleArcPath" d="M 155 380 A 245 245 0 0 1 645 380" stroke="#C7D2FE" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M 155 380 A 245 245 0 0 1 645 380" stroke="url(#arcGlow)" strokeWidth="2.5" fill="none" />

            {/* Outer Arc (Radius 335, Peak Y=45) */}
            <path id="outerArcPath" d="M 65 380 A 335 335 0 0 1 735 380" stroke="#E0E7FF" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.7" />
            <path d="M 65 380 A 335 335 0 0 1 735 380" stroke="url(#arcGlow)" strokeWidth="2" fill="none" />

            {/* ============================================================ */}
            {/* PLATFORM BADGES BALANCED ACROSS CONCENTRIC ORBIT ARCS */}
            {/* ============================================================ */}

            {/* --- INNER ARC (Radius 160) : 2 Platforms (LeetCode & CodeChef) --- */}
            {/* Clearance to CodeTracker node is >75px; zero collision */}

            {/* 1. LeetCode (Inner Arc - Start 0s, dur=12s) */}
            <g>
              <foreignObject x="-30" y="-30" width="180" height="100" style={{ overflow: 'visible' }}>
                <div className="relative group cursor-pointer">
                  <div className="w-15 h-15 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-115 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/leetcode.svg" alt="LeetCode" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    LeetCode | 1850 (Knight)
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 240 380 A 160 160 0 0 1 560 380" dur="12s" repeatCount="indefinite" rotate="none" begin="0s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="12s" repeatCount="indefinite" begin="0s" />
            </g>

            {/* 2. CodeChef (Inner Arc - Staggered -6s, dur=12s) */}
            <g>
              <foreignObject x="-30" y="-30" width="180" height="100" style={{ overflow: 'visible' }}>
                <div className="relative group cursor-pointer">
                  <div className="w-15 h-15 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-115 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/codechef.png" alt="CodeChef" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    CodeChef | 1940 (4★)
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 240 380 A 160 160 0 0 1 560 380" dur="12s" repeatCount="indefinite" rotate="none" begin="-6s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="12s" repeatCount="indefinite" begin="-6s" />
            </g>


            {/* --- MIDDLE ARC (Radius 245) : 2 Platforms (Codeforces & HackerRank) --- */}

            {/* 3. Codeforces (Middle Arc - Start 0s, dur=14s) */}
            <g>
              <foreignObject x="-30" y="-30" width="180" height="100" style={{ overflow: 'visible' }}>
                <div className="relative group cursor-pointer">
                  <div className="w-15 h-15 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-115 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <rect x="3.5" y="9" width="4.5" height="12" rx="2" fill="#ECA200" />
                        <rect x="9.75" y="3" width="4.5" height="18" rx="2" fill="#2563EB" />
                        <rect x="16" y="12" width="4.5" height="9" rx="2" fill="#EF4444" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    Codeforces | 1620 (Expert)
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 155 380 A 245 245 0 0 1 645 380" dur="14s" repeatCount="indefinite" rotate="none" begin="0s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="14s" repeatCount="indefinite" begin="0s" />
            </g>

            {/* 4. HackerRank (Middle Arc - Staggered -7s, dur=14s) */}
            <g>
              <foreignObject x="-30" y="-30" width="180" height="100" style={{ overflow: 'visible' }}>
                <div className="relative group cursor-pointer">
                  <div className="w-15 h-15 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-115 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/hackerrank.png" alt="HackerRank" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-contain rounded-md" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    HackerRank | 6★ Problem Solving
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 155 380 A 245 245 0 0 1 645 380" dur="14s" repeatCount="indefinite" rotate="none" begin="-7s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="14s" repeatCount="indefinite" begin="-7s" />
            </g>


            {/* --- OUTER ARC (Radius 335) : 3 Platforms (GitHub, GFG, AtCoder) --- */}

            {/* 5. GitHub (Outer Arc - Start 0s, dur=16s) */}
            <g>
              <foreignObject x="-30" y="-30" width="180" height="100" style={{ overflow: 'visible' }}>
                <div className="relative group cursor-pointer">
                  <div className="w-15 h-15 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-115 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <Github className="w-6 h-6 text-slate-900" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    GitHub | Commits & Repositories
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 65 380 A 335 335 0 0 1 735 380" dur="16s" repeatCount="indefinite" rotate="none" begin="0s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="16s" repeatCount="indefinite" begin="0s" />
            </g>

            {/* 6. GeeksforGeeks (Outer Arc - Staggered -5.33s, dur=16s) */}
            <g>
              <foreignObject x="-30" y="-30" width="180" height="100" style={{ overflow: 'visible' }}>
                <div className="relative group cursor-pointer">
                  <div className="w-15 h-15 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-115 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/gfg.png" alt="GeeksforGeeks" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    GeeksforGeeks | 850+ Score
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 65 380 A 335 335 0 0 1 735 380" dur="16s" repeatCount="indefinite" rotate="none" begin="-5.33s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="16s" repeatCount="indefinite" begin="-5.33s" />
            </g>

            {/* 7. AtCoder (Outer Arc - Staggered -10.67s, dur=16s) */}
            <g>
              <foreignObject x="-30" y="-30" width="180" height="100" style={{ overflow: 'visible' }}>
                <div className="relative group cursor-pointer">
                  <div className="w-15 h-15 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-115 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/atcoder.png" alt="AtCoder" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    AtCoder | 1420 (Cyan)
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 65 380 A 335 335 0 0 1 735 380" dur="16s" repeatCount="indefinite" rotate="none" begin="-10.67s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="16s" repeatCount="indefinite" begin="-10.67s" />
            </g>

            {/* Central CodeTracker Node Orb at Concentric Anchor (400, 380) */}
            <foreignObject x="250" y="325" width="300" height="160" style={{ overflow: 'visible' }}>
              <div className="flex flex-col items-center justify-start pointer-events-auto select-none">
                <div className="relative flex items-center justify-center">
                  {/* Soft Ambient Radial Glow */}
                  <div className="absolute w-32 h-32 rounded-full bg-indigo-500/15 blur-xl pointer-events-none" />
                  
                  {/* Dual Ring Central Glass Orb */}
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white shadow-[0_16px_40px_rgba(79,70,229,0.22)] border-2 border-slate-100 ring-6 ring-indigo-50 flex items-center justify-center hover:scale-105 transition-transform duration-300 group cursor-pointer">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center text-white shadow-md group-hover:from-indigo-600 group-hover:to-indigo-700 transition-all duration-300">
                      <TrendingUp className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
                
                <h4 className="font-outfit font-extrabold text-slate-900 text-sm sm:text-base mt-2 tracking-tight">CodeTracker</h4>
                <span className="mt-1 px-3 py-0.5 rounded-full bg-indigo-50 border border-indigo-200/90 text-indigo-700 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shadow-2xs inline-block">
                  VERIFIED AGGREGATOR
                </span>
              </div>
            </foreignObject>

          </svg>

        </div>

        {/* Clean Metric Summary Bar */}
        <div className="max-w-lg mx-auto mt-3 sm:mt-5 mb-8 sm:mb-10 bg-white border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 sm:px-5 shadow-xs flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <TrendingUp className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">One Score</span>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  Unified Rating
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Calculated across 6 coding platforms
              </p>
            </div>
          </div>

          <div className="text-right shrink-0 border-l border-slate-100 pl-4">
            <div className="flex items-baseline justify-end gap-1.5">
              <span className="font-outfit font-black text-2xl text-slate-900 tracking-tight">1,724</span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded">
                Top 12%
              </span>
            </div>
            <div className="text-[11px] font-semibold text-emerald-600 flex items-center justify-end gap-0.5 mt-0.5">
              <ArrowUpRight className="w-3 h-3" />
              <span>Better than yesterday</span>
            </div>
          </div>
        </div>

        {/* 3 Executive Product Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-slate-50/70 border border-slate-200/80 hover:border-indigo-200 hover:bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200/60">
              <RefreshCw className="w-5 h-5 stroke-2" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-slate-900 text-sm">Real-time Sync</h4>
              <p className="text-slate-500 text-xs mt-0.5">Always up-to-date performance telemetry</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50/70 border border-slate-200/80 hover:border-purple-200 hover:bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/60">
              <Lock className="w-5 h-5 stroke-2" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-slate-900 text-sm">Secure & Private</h4>
              <p className="text-slate-500 text-xs mt-0.5">AES-256 encrypted API authentication</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50/70 border border-slate-200/80 hover:border-emerald-200 hover:bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
              <Zap className="w-5 h-5 stroke-2" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-slate-900 text-sm">Unified Insights</h4>
              <p className="text-slate-500 text-xs mt-0.5">One verified score for your tech profile</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}




