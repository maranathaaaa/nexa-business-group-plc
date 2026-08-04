/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, CheckCircle, ChevronRight, Award, History } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TIMELINE_PHASES } from '../data/content';

export const JourneyTimeline: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-20 md:py-28 bg-[#F5F5F5] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#0D47A1] font-bold text-sm">
            <History className="w-4 h-4 text-[#00BCD4]" />
            <span>{t('Evolution & Heritage', 'የእኛ ታሪክና ጉዞ')}</span>
          </div>

          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D47A1]"
          >
            {t('Our Journey', 'የእኛ ጉዞ')}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-slate-700">
            {t(
              'More than 14 years of strategic growth, expanding from event experiences to an integrated international business ecosystem.',
              'ከዝግጅት ልምዶች ወደ ተቀናጀ ዓለም አቀፍ የንግድ ስነ-ምህዳር ያደገ ከ14 ዓመታት በላይ የዘለቀ ስትራቴጂያዊ የእድገት ጉዞ።'
            )}
          </p>
        </div>

        {/* Horizontal Timeline Layout for Desktop / Tablet & Responsive Stack */}
        <div className="relative">
          {/* Horizontal Connecting Line (visible on lg screens) */}
          <div
            className="hidden lg:block absolute top-28 left-8 right-8 h-1.5 bg-gradient-to-r from-[#0D47A1] via-[#00BCD4] to-[#4CAF50] rounded-full z-0"
            aria-hidden="true"
          ></div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {TIMELINE_PHASES.map((phase, index) => {
              const titleText = language === 'en' ? phase.title : phase.titleAm;
              const subtitleText =
                language === 'en' ? phase.subtitle : phase.subtitleAm;
              const yearTagText =
                language === 'en' ? phase.yearOrTag : phase.yearOrTagAm;
              const taglineText =
                language === 'en' ? phase.tagline : phase.taglineAm;
              const servicesList =
                language === 'en' ? phase.services : phase.servicesAm;

              return (
                <div
                  key={phase.id}
                  className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all p-6 sm:p-7 relative group"
                >
                  {/* Phase Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF6FF] text-[#0D47A1] border border-[#00BCD4]/30">
                      {titleText}
                    </span>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {yearTagText}
                    </span>
                  </div>

                  {/* Phase Circle Node for visual timeline */}
                  <div
                    className="w-12 h-12 rounded-2xl bg-[#0D47A1] group-hover:bg-[#00BCD4] text-white font-extrabold text-lg flex items-center justify-center mb-4 shadow-md transition-colors"
                    aria-hidden="true"
                  >
                    0{phase.id}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D47A1] leading-snug mb-2">
                    {subtitleText}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-slate-700 italic border-b border-slate-100 pb-4 mb-4">
                    "{taglineText}"
                  </p>

                  {/* Services / Highlights List */}
                  <div className="mt-auto space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {index === 3
                        ? t('Helping organizations:', 'ድርጅቶችን መርዳት፦')
                        : index === 2
                        ? t('Highlights:', 'ዋና ዋና ክንውኖች፦')
                        : t('Services:', 'አገልግሎቶች፦')}
                    </div>

                    <ul className="space-y-2">
                      {servicesList.map((service, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-slate-800"
                        >
                          <CheckCircle className="w-4 h-4 text-[#00BCD4] shrink-0 mt-1" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step Indicator arrow */}
                  {index < TIMELINE_PHASES.length - 1 && (
                    <div
                      className="hidden lg:flex absolute -right-4 top-28 w-8 h-8 rounded-full bg-white border border-slate-200 items-center justify-center text-[#0D47A1] shadow-sm z-20"
                      aria-hidden="true"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer note for timeline */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-slate-200 max-w-4xl mx-auto text-center shadow-xs">
          <p className="text-base sm:text-lg font-semibold text-slate-800">
            {t(
              'Today, Nexa Business Group PLC brings all four evolutionary phases together under one trusted corporate umbrella to power end-to-end business transformation.',
              'ዛሬ ኔክሳ ቢዝነስ ግሩፕ ኃ/የተ/የግ/ማህበር አራቱንም የእድገት ምዕራፎች በአንድ አስተማማኝ ተቋም ስር አጣምሮ ሁሉን አቀፍ የንግድ እድገትን እና ማሻሻያን ይመራል።'
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
