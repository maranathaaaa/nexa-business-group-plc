/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, CheckCircle2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PHILOSOPHY_CONTENT } from '../data/content';

export const PhilosophySection: React.FC = () => {
  const { language, t } = useLanguage();

  const quoteText =
    language === 'en'
      ? PHILOSOPHY_CONTENT.quoteEn
      : PHILOSOPHY_CONTENT.quoteAm;
  const introText =
    language === 'en'
      ? PHILOSOPHY_CONTENT.introEn
      : PHILOSOPHY_CONTENT.introAm;
  const pillarsList =
    language === 'en'
      ? PHILOSOPHY_CONTENT.pillarsEn
      : PHILOSOPHY_CONTENT.pillarsAm;

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-28 bg-gradient-to-br from-[#EAF6FF] via-[#F4FAFF] to-[#EAF6FF] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-[#00BCD4]/30 shadow-xl relative overflow-hidden">
          {/* Decorative background quote icon */}
          <div className="absolute -top-6 -right-6 text-[#EAF6FF] pointer-events-none" aria-hidden="true">
            <Quote className="w-48 h-48 opacity-40" />
          </div>

          <div className="relative z-10 space-y-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#0D47A1] font-bold text-sm">
              <TrendingUp className="w-4 h-4 text-[#00BCD4]" />
              <span>{t('Our Philosophy', 'የእኛ መርሃችን')}</span>
            </div>

            {/* Quote */}
            <blockquote
              id="philosophy-heading"
              className="text-3xl sm:text-5xl font-extrabold text-[#0D47A1] tracking-tight leading-tight"
            >
              "{quoteText}"
            </blockquote>

            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0D47A1] to-[#00BCD4] rounded-full mx-auto sm:mx-0"></div>

            <p className="text-xl sm:text-2xl font-bold text-slate-800">
              {introText}
            </p>

            {/* 5 Statement Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillarsList.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left hover:bg-[#EAF6FF] transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#4CAF50] shrink-0" />
                  <span className="text-base sm:text-lg font-bold text-slate-800">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
