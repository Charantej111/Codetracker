import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Lock, Zap, ArrowUpRight, TrendingUp, Github } from 'lucide-react';

export default function PlatformHub() {
  return (
    <section id="platform-hub" className="py-20 font-jakarta relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Senior Product Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          
          {/* Animated UNIFIED PLATFORM ENGINE Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -12, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/10 text-indigo-700 font-bold text-xs tracking-wider uppercase mb-3 border border-indigo-200/80 shadow-xs backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
            </span>
            <span>UNIFIED PLATFORM ENGINE</span>
          </motion.div>

          <h2 className="font-outfit font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            All Your Coding Platforms. <br />
            <span className="text-indigo-600">One Seamless Integration Hub.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            CodeTracker automatically aggregates your rating, contest rank, and submission streaks into a single verified score.
          </p>
        </div>

        {/* Concentric Arc Network Hub Canvas with Fast-Starting Animated Moving Badges */}
        <div className="relative w-full max-w-4xl mx-auto h-[400px] sm:h-[460px] md:h-[500px] my-2 flex items-end justify-center overflow-hidden">
          
          {/* SVG Concentric Arcs & Motion Canvas */}
          <svg className="absolute inset-0 w-full h-full overflow-visible z-10" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="12%" stopColor="#60A5FA" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.75" />
                <stop offset="88%" stopColor="#38BDF8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Inner Arc (Radius 140) */}
            <path id="innerArcPath" d="M 261 380 A 140 140 0 0 1 539 380" stroke="#BFDBFE" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 261 380 A 140 140 0 0 1 539 380" stroke="url(#arcGlow)" strokeWidth="2.5" fill="none" />
            
            {/* Middle Arc (Radius 230) */}
            <path id="middleArcPath" d="M 171 384 A 230 230 0 0 1 629 384" stroke="#C7D2FE" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M 171 384 A 230 230 0 0 1 629 384" stroke="url(#arcGlow)" strokeWidth="2.5" fill="none" />

            {/* Outer Arc (Radius 320) */}
            <path id="outerArcPath" d="M 81 382 A 320 320 0 0 1 719 382" stroke="#E0E7FF" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 81 382 A 320 320 0 0 1 719 382" stroke="url(#arcGlow)" strokeWidth="2" fill="none" />

            {/* ============================================================ */}
            {/* PLATFORM BADGES INSTANTLY MOVING ON THE CONCENTRIC ARC PATHS */}
            {/* ============================================================ */}

            {/* INNER ARC PLATFORMS (Radius 140) */}

            {/* 1. CodeChef (Inner Arc - Start 0s, dur=12s) */}
            <g>
              <foreignObject x="-36" y="-36" width="160" height="110" className="overflow-visible">
                <div className="relative group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/codechef.png" alt="CodeChef" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    CodeChef | 1940 (4★)
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 261 380 A 140 140 0 0 1 539 380" dur="12s" repeatCount="indefinite" rotate="none" begin="0s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.08; 0.92; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="12s" repeatCount="indefinite" begin="0s" />
            </g>

            {/* 2. LeetCode (Inner Arc - Staggered -4s, dur=12s) */}
            <g>
              <foreignObject x="-36" y="-36" width="160" height="110" className="overflow-visible">
                <div className="relative group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/leetcode.svg" alt="LeetCode" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    LeetCode | 1850 (Knight)
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 261 380 A 140 140 0 0 1 539 380" dur="12s" repeatCount="indefinite" rotate="none" begin="-4s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.08; 0.92; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="12s" repeatCount="indefinite" begin="-4s" />
            </g>

            {/* 3. AtCoder (Inner Arc - Staggered -8s, dur=12s) */}
            <g>
              <foreignObject x="-36" y="-36" width="160" height="110" className="overflow-visible">
                <div className="relative group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/atcoder.png" alt="AtCoder" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    AtCoder | 1420 (Cyan)
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 261 380 A 140 140 0 0 1 539 380" dur="12s" repeatCount="indefinite" rotate="none" begin="-8s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.08; 0.92; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="12s" repeatCount="indefinite" begin="-8s" />
            </g>


            {/* MIDDLE ARC PLATFORMS (Radius 230) */}

            {/* 4. Codeforces (Middle Arc - Start 0s, dur=14s) */}
            <g>
              <foreignObject x="-36" y="-36" width="160" height="110" className="overflow-visible">
                <div className="relative group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/codeforces.png" alt="Codeforces" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    Codeforces | 1620 (Expert)
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 171 384 A 230 230 0 0 1 629 384" dur="14s" repeatCount="indefinite" rotate="none" begin="0s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.08; 0.92; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="14s" repeatCount="indefinite" begin="0s" />
            </g>

            {/* 5. HackerRank (Middle Arc - Staggered -7s, dur=14s) */}
            <g>
              <foreignObject x="-36" y="-36" width="160" height="110" className="overflow-visible">
                <div className="relative group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/hackerrank.png" alt="HackerRank" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    HackerRank | 6★ Problem Solving
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 171 384 A 230 230 0 0 1 629 384" dur="14s" repeatCount="indefinite" rotate="none" begin="-7s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.08; 0.92; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="14s" repeatCount="indefinite" begin="-7s" />
            </g>


            {/* OUTER ARC PLATFORMS (Radius 320) */}

            {/* 6. GitHub (Outer Arc - Start 0s, dur=16s) */}
            <g>
              <foreignObject x="-36" y="-36" width="160" height="110" className="overflow-visible">
                <div className="relative group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <Github className="w-7 h-7 text-slate-900" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    GitHub | Commits & Repositories
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 81 382 A 320 320 0 0 1 719 382" dur="16s" repeatCount="indefinite" rotate="none" begin="0s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.08; 0.92; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="16s" repeatCount="indefinite" begin="0s" />
            </g>

            {/* 7. GeeksforGeeks (Outer Arc - Staggered -8s, dur=16s) */}
            <g>
              <foreignObject x="-36" y="-36" width="160" height="110" className="overflow-visible">
                <div className="relative group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 p-1">
                      <img src="/gfg.png" alt="GeeksforGeeks" onError={(e) => { e.target.style.display = 'none'; }} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-30">
                    GeeksforGeeks | 850+ Score
                  </div>
                </div>
              </foreignObject>
              <animateMotion path="M 81 382 A 320 320 0 0 1 719 382" dur="16s" repeatCount="indefinite" rotate="none" begin="-8s" />
              <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.08; 0.92; 1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1" dur="16s" repeatCount="indefinite" begin="-8s" />
            </g>

          </svg>

          {/* Central CodeTracker Node Orb at Concentric Anchor */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20 pointer-events-auto">
            <div className="relative flex items-center justify-center">
              {/* Soft Ambient Radial Glow */}
              <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-indigo-500/10 blur-xl pointer-events-none"></div>
              
              {/* Dual Ring Central Glass Orb */}
              <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-white shadow-[0_16px_45px_rgba(79,70,229,0.22)] border-4 border-slate-50 ring-8 ring-indigo-50/70 flex items-center justify-center hover:scale-105 transition-transform duration-300 group cursor-pointer">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:bg-indigo-600 transition-colors">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
                </div>
              </div>
            </div>
            
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mt-2.5 tracking-tight">CodeTracker</h4>
            <span className="mt-0.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono text-[10px] font-bold tracking-wider uppercase shadow-2xs">
              VERIFIED AGGREGATOR
            </span>
          </div>

        </div>

        {/* Clean Metric Summary Bar */}
        <div className="max-w-lg mx-auto mb-10 bg-white border border-slate-200/80 rounded-2xl p-4 sm:px-5 shadow-xs flex items-center justify-between gap-4">
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
              <RefreshCw className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Real-time Sync</h4>
              <p className="text-slate-500 text-xs mt-0.5">Always up-to-date performance telemetry</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50/70 border border-slate-200/80 hover:border-purple-200 hover:bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/60">
              <Lock className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Secure & Private</h4>
              <p className="text-slate-500 text-xs mt-0.5">AES-256 encrypted API authentication</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50/70 border border-slate-200/80 hover:border-emerald-200 hover:bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
              <Zap className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Unified Insights</h4>
              <p className="text-slate-500 text-xs mt-0.5">One verified score for your tech profile</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}




