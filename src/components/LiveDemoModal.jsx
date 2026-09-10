import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Flame, Award, Trophy } from 'lucide-react';

export default function LiveDemoModal({ onClose }) {
  const [activePlatform, setActivePlatform] = useState('all');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in font-jakarta">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white font-bold font-outfit text-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
            CT
          </div>
          <div>
            <h3 className="font-outfit font-extrabold text-2xl text-slate-900">
              Live Profile Preview: Rohan Sharma
            </h3>
            <p className="text-xs text-slate-500">
              VIT Vellore • B.Tech CSE (Batch 2026)
            </p>
          </div>
        </div>

        {/* Platform Selector Filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {['all', 'LeetCode', 'CodeChef', 'Codeforces'].map((plat) => (
            <button
              key={plat}
              onClick={() => setActivePlatform(plat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activePlatform === plat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {plat}
            </button>
          ))}
        </div>

        {/* Live Metrics Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
            <div className="text-xs text-slate-500 font-medium">Total Solved</div>
            <div className="font-outfit font-extrabold text-2xl text-purple-700 mt-1">612</div>
            <div className="text-[11px] text-purple-600 mt-0.5">Medium: 340 | Hard: 85</div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
            <div className="text-xs text-slate-500 font-medium">Current Streak</div>
            <div className="font-outfit font-extrabold text-2xl text-amber-700 mt-1">54 Days</div>
            <div className="text-[11px] text-amber-600 mt-0.5">🔥 Top 1% Streak</div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
            <div className="text-xs text-slate-500 font-medium">LeetCode Rating</div>
            <div className="font-outfit font-extrabold text-2xl text-indigo-700 mt-1">1,940</div>
            <div className="text-[11px] text-indigo-600 mt-0.5">Knight Badge</div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
            <div className="text-xs text-slate-500 font-medium">CodeChef Rating</div>
            <div className="font-outfit font-extrabold text-2xl text-emerald-700 mt-1">1,820</div>
            <div className="text-[11px] text-emerald-600 mt-0.5">4★ Division 1</div>
          </div>
        </div>

        {/* Activity Simulation */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-3">
            <span>RECENT SUBMISSIONS (LIVE SYNC)</span>
            <span className="text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">3Sum Closest</span>
                <span className="text-slate-400 ml-2">LeetCode #16</span>
              </div>
              <span className="text-emerald-600 font-semibold">Accepted (12ms)</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Coin Change II</span>
                <span className="text-slate-400 ml-2">LeetCode #518</span>
              </div>
              <span className="text-emerald-600 font-semibold">Accepted (4ms)</span>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-slate-600 hover:text-slate-900 text-sm font-semibold"
          >
            Close Preview
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-purple-600 text-white font-semibold text-sm shadow-md hover:bg-purple-700 transition-all"
          >
            Connect Your Profiles Now
          </a>
        </div>

      </div>
    </div>
  );
}
