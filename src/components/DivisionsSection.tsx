/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DIVISIONS_DATA } from '../data/content';
import { IconResolver } from './IconResolver';

const DIVISION_LOGO_PATHS: Record<string, string> = {
  rhino: new URL('../../assets/rhino.png', import.meta.url).href,
  iconic: new URL('../../assets/iconic.png', import.meta.url).href,
  axiom: new URL('../../assets/axiom.png', import.meta.url).href,
  ashara: new URL('../../assets/ashara.png', import.meta.url).href,
  connex: new URL('../../assets/conex.png', import.meta.url).href,
};

export const DivisionsSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="divisions"
      aria-labelledby="divisions-heading"
      className="py-20 md:py-28 bg-green-50 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-100 text-black font-bold text-sm">
            <Layers className="w-4 h-4 text-green-600" />
            <span>{t('Our Divisions', 'የስራ ዘርፎች')}</span>
          </div>

          <h2
            id="divisions-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black"
          >
            {t('Our Business Divisions', 'የእኛ ዋና ዋና የስራ ዘርፎች')}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-black">
            {t(
                'Five specialized corporate pillars delivering integrated solutions across event marketing, digital media, enterprise technology, real estate, and trade.',
              'በአምስት የተደራጁ ልዩ ዘርፎች በኩል በክስተት ማርኬቲንግ፣ በዲጂታል ሚዲያ፣ በተቋም ቴክኖሎጂ፣ በሪል እስቴትና በንግድ ስርጭት የተቀናጀ አገልግሎት እንሰጣለን።'
            )}
          </p>
        </div>

        {/* Division Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIVISIONS_DATA.map((division) => {
            const nameText =
              language === 'en' ? division.name : division.nameAm;
            const subtitleText =
              language === 'en' ? division.subtitle : division.subtitleAm;
            const descriptionText =
              language === 'en' ? division.description : division.descriptionAm;
            const servicesList =
              language === 'en' ? division.services : division.servicesAm;

            return (
              <div
                id={division.id}
                key={division.id}
                className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all p-7 sm:p-8 relative group overflow-hidden"
              >
                {/* Accent colored top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${division.color}`}
                ></div>

                {/* Card Header with Icon */}
                <div className="flex items-start justify-between gap-4 mb-6 pt-2">
                  <div
                    className="w-36 h-36 rounded-[32px] flex items-center justify-center shadow-md shrink-0 overflow-hidden"
                  >
                    <img
                      src={DIVISION_LOGO_PATHS[division.id] ?? new URL('../../assets/logo.png', import.meta.url).href}
                      alt={nameText}
                      className="w-full h-full object-contain rounded-[28px]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = new URL('../../assets/logo.png', import.meta.url).href;
                      }}
                    />
                  </div>

            
                </div>

                {/* Division Name & Subtitle */}
                <h3 className="text-2xl font-extrabold text-black leading-tight mb-2">
                  {nameText}
                </h3>

                <div className="text-sm font-bold text-black mb-4">
                  {subtitleText}
                </div>

                <p className="text-base font-normal text-black leading-relaxed mb-6">
                  {descriptionText}
                </p>

                {/* Services List */}
                <div className="mt-auto pt-5 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {t('Key Capabilities:', 'ዋና ዋና አገልግሎቶች፦')}
                  </div>

                  <ul className="space-y-2.5">
                    {servicesList.map((service, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-black"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
