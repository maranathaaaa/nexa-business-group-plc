/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Building2, Cpu, Globe2, TrendingUp, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FF] via-[#F4FAFF] to-white pt-8 pb-16 md:pt-16 md:pb-28 border-b border-slate-100"
    >
      {/* Abstract background technology shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#00BCD4]/10 to-[#0D47A1]/5 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#EAF6FF] blur-2xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D47A108_1px,transparent_1px),linear-gradient(to_bottom,#0D47A108_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTA Buttons */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#00BCD4]/30 text-[#0D47A1] font-bold text-sm sm:text-base shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#00BCD4]" />
              <span>
                {t(
                  'Trusted Integrated Business Ecosystem',
                  'አስተማማኝ እና ተቀናጀ የንግድ ስነ-ምህዳር'
                )}
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D47A1] tracking-tight leading-[1.18] sm:leading-[1.15]"
            >
              {t(
                'Building Businesses.\nTransforming Industries.\nCreating the Future.',
                'ንግዶችን እንገነባለን።\nዘርፎችን እናሻሽላለን።\nየወደፊቱን እንፈጥራለን።'
              )
                .split('\n')
                .map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-normal text-slate-700 max-w-2xl leading-relaxed">
              {t(
                'More than 14 years of experience helping businesses build, transform, digitize, and grow.',
                'ንግዶችና ድርጅቶች እንዲገነቡ፣ እንዲሻሻሉ፣ በዲጂታል ቴክኖሎጂ እንዲታገዙ እና እንዲያድጉ ከ14 ዓመታት በላይ የተረጋገጠ ልምድና አቅም።'
              )}
            </p>

            {/* High-Contrast Accessible Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-[#0D47A1] hover:bg-[#1565C0] rounded-2xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-[#00BCD4]/40"
              >
                <span>{t('Learn More', 'የበለጠ ይወቁ')}</span>
                <ArrowRight className="w-6 h-6" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-[#0D47A1] bg-white hover:bg-[#EAF6FF] border-2 border-[#0D47A1]/20 hover:border-[#0D47A1] rounded-2xl shadow-sm transition-all focus:outline-none focus:ring-4 focus:ring-[#00BCD4]/40"
              >
                <span>{t('Contact Us', 'ያግኙን')}</span>
              </a>
            </div>

            {/* Trust highlights banner */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D47A1]">
                  14+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600">
                  {t('Years Experience', 'ዓመታት ልምድ')}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D47A1]">
                  5
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600">
                  {t('Core Divisions', 'ዋና የስራ ዘርፎች')}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D47A1]">
                  
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Column: Custom Modern Business & Corporate Buildings Illustration (No stock people) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Decorative backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D47A1]/10 via-[#00BCD4]/20 to-transparent rounded-3xl transform rotate-1 scale-105"></div>

              {/* Illustration Canvas */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00BCD4]"></span>
                    <span className="text-sm font-bold text-[#0D47A1]">
                      {t('Nexa Integrated Ecosystem', 'ኔክሳ ተቀናጀ የንግድ ስርዓት')}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF6FF] text-[#0D47A1]">
                    {t('PLC Corporate', 'ኃ/የተ/የግ/ማህበር')}
                  </span>
                </div>

                {/* City image replacing the building animation */}
                <div className="w-full aspect-[4/3] rounded-2xl relative overflow-hidden border border-[#0D47A1]/20 bg-slate-900">
                  <img
                    src={new URL('../../assets/city1.jpg', import.meta.url).href}
                    alt="Addis Ababa city skyline"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between text-white/80 text-xs tracking-[0.18em] uppercase">
                      <span>Addis Ababa</span>
                    </div>
                  </div>
                </div>

                {/* Capability Badges under illustration */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EAF6FF] text-[#0D47A1]">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0D47A1] shadow-sm">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase text-slate-500">
                        {t('Focus Area', 'ትኩረት')}
                      </div>
                      <div className="text-sm font-bold">
                        {t('Business Growth', 'የንግድ እድገት')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 text-slate-800 border border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-[#00BCD4]/10 flex items-center justify-center text-[#00838F] shadow-sm">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase text-slate-500">
                        {t('Capability', 'አቅም')}
                      </div>
                      <div className="text-sm font-bold">
                        {t('Digital Transformation', 'ዲጂታል ትራንስፎርሜሽን')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
