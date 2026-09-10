import React, { useState } from 'react';
import { Menu, X, ChevronDown, Code2, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-4 sm:px-6 lg:px-8 transition-all pointer-events-none">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/70 shadow-lg shadow-slate-900/5 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-slate-900/10">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-linear-to-tr from-slate-900 via-indigo-900 to-blue-600 flex items-center justify-center text-white shadow-md shadow-slate-900/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-outfit font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
            code<span className="text-indigo-600">tracker</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 font-jakarta text-xs sm:text-sm font-semibold text-slate-600">
          <a href="#features" className="px-3 py-1.5 rounded-full hover:bg-indigo-50/80 hover:text-indigo-600 transition-all">
            Features
          </a>

          <a href="#platform-hub" className="px-3 py-1.5 rounded-full hover:bg-indigo-50/80 hover:text-indigo-600 transition-all">
            Integrations
          </a>

          <a href="#how-it-works" className="px-3 py-1.5 rounded-full hover:bg-indigo-50/80 hover:text-indigo-600 transition-all">
            How It Works
          </a>

          <a href="#faq" className="px-3 py-1.5 rounded-full hover:bg-indigo-50/80 hover:text-indigo-600 transition-all">
            FAQ
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3 font-jakarta text-xs sm:text-sm font-semibold">
          <a
            href="#contact"
            className="px-4 py-2 text-slate-700 hover:text-indigo-600 border border-slate-200/80 hover:border-indigo-300 rounded-full transition-all hover:bg-indigo-50/60"
          >
            Log In
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-slate-900 hover:bg-indigo-600 text-white rounded-full shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-indigo-600/20 hover:scale-[1.03] transition-all flex items-center gap-1.5"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-white/95 backdrop-blur-xl border border-white/70 rounded-3xl p-5 space-y-2 font-jakarta shadow-xl pointer-events-auto">
          <a
            href="#features"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 text-slate-700 font-semibold hover:bg-indigo-50/80 rounded-xl hover:text-indigo-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#platform-hub"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 text-slate-700 font-semibold hover:bg-indigo-50/80 rounded-xl hover:text-indigo-600 transition-colors"
          >
            Integrations
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 text-slate-700 font-semibold hover:bg-indigo-50/80 rounded-xl hover:text-indigo-600 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 text-slate-700 font-semibold hover:bg-indigo-50/80 rounded-xl hover:text-indigo-600 transition-colors"
          >
            FAQ
          </a>
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center text-slate-700 font-bold border border-slate-200 rounded-full hover:bg-slate-50"
            >
              Log In
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-full shadow-md"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


