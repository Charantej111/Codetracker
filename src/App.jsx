import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import PlatformHub from './components/PlatformHub';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import RoleOutcomes from './components/RoleOutcomes';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import LiveDemoModal from './components/LiveDemoModal';
import BackToTop from './components/BackToTop';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-600 selection:text-white relative bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[28px_28px]">
      {/* Top Landing Header & Hero Container with Full Blue Grainy Mesh Background */}
      <div className="relative overflow-hidden">
        {/* Exclusive Blue Grainy Gradient Mesh Background (Full Landing Page including Navbar) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base Soft Blue Mesh Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-[#EAF2FF] via-[#F4F8FE] to-[#DCEBFF] opacity-100" />
          
          {/* Soft Glowing Blue Clouds matching the uploaded image */}
          <div className="absolute -top-16 left-1/4 w-137.5 h-137.5 rounded-full bg-sky-300/40 blur-3xl" />
          <div className="absolute top-1/4 -right-10 w-125 h-125 rounded-full bg-blue-400/25 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-162.5 h-112.5 rounded-full bg-sky-200/35 blur-3xl" />

          {/* Tactile Grain Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-70 mix-blend-multiply"
            style={{
              backgroundImage: `url('/dotted%20pattern.png')`,
              backgroundRepeat: 'repeat',
              backgroundSize: '240px 240px'
            }}
          />
        </div>

        {/* Sticky Header */}
        <Navbar />

        {/* Hero Banner */}
        <Hero onExploreDemo={() => setShowDemoModal(true)} />
      </div>

      {/* Trusted By Colleges */}
      <TrustedBy />

      {/* Platform Aggregation Hub */}
      <PlatformHub />

      {/* How CodeTracker Works */}
      <HowItWorks />

      {/* Features Grid */}
      <Features />

      {/* Role Outcomes & Live Dashboard Mockup */}
      <RoleOutcomes />

      {/* CTA Banner */}
      <CtaBanner />

      {/* Contact Us Form */}
      <ContactSection onShowToast={(msg) => setToastMessage(msg)} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* Live Demo Preview Modal */}
      {showDemoModal && (
        <LiveDemoModal onClose={() => setShowDemoModal(false)} />
      )}

      {/* Floating Back to Landing Page Button */}
      <BackToTop />
    </div>
  );
}
