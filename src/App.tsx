/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { DivisionsSection } from './components/DivisionsSection';
import { ServicesSection } from './components/ServicesSection';
import { TrustedBySection } from './components/TrustedBySection';
import { GallerySection } from './components/GallerySection';
import { WhyNexaSection } from './components/WhyNexaSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#EAF6FF] selection:text-[#0D47A1]">
        {/* Sticky Navigation Bar with Bilingual Switcher & Text Size Accessibility */}
        <Navbar />

        {/* Main Content Areas */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection />

          {/* About Us ("Who We Are") */}
          <AboutSection />

          {/* Our Journey (Phases 1-4 Timeline) */}
          <JourneyTimeline />

          {/* Our Divisions (5 Corporate Pillars) */}
          <DivisionsSection />

          {/* Our Services (Build, Transform, Digitize, Grow, Expand) */}
          <ServicesSection />

          {/* Our Gallery (Event and project photos) */}
          <GallerySection />

          {/* Trusted By logo grid */}
          <TrustedBySection />

          {/* Why Choose Nexa (8 Differentiators) */}
          <WhyNexaSection />

          {/* Philosophy Section */}
          <PhilosophySection />

          {/* Contact Information & Interactive Map */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Up-Arrow Button: scrolls back to Home */}
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}
