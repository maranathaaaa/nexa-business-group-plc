/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { JSX } from 'react';
import { RefreshCw, Laptop, TrendingUp, Globe, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICE_CAPABILITIES } from '../data/content';

const SERVICE_ICONS: Record<string, JSX.Element> = {
  build: (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 33h24v3H12z" fill="#0D47A1" />
      <path d="M16 30V20l8-5 8 5v10" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 25v8" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  transform: (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 36l8-8 8 8" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 28V12" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 16h16" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 20l6-6-6-6" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  digitize: (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="28" height="24" rx="4" stroke="#0D47A1" strokeWidth="3" />
      <path d="M18 18h12" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 24h8" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 30h6" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  grow: (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 34V22l8-6 8 6v12" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 28h8" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 16h12" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="36" r="3" fill="#00BCD4" />
    </svg>
  ),
  expand: (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14h24v20H12z" stroke="#0D47A1" strokeWidth="3" strokeLinejoin="round" />
      <path d="M18 20h12" stroke="#00BCD4" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 26h10" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 32h8" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 10l6 6M34 10l-6 6" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
};

export const ServicesSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 bg-[#F5F5F5] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#0D47A1] font-bold text-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#00BCD4]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 8V6C7 5.44772 7.44772 5 8 5H10C10.5523 5 11 5.44772 11 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 18V16C14 15.4477 14.4477 15 15 15H17C17.5523 15 18 15.4477 18 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M11 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 12C9 10.8954 9.89543 10 11 10H13C14.1046 10 15 10.8954 15 12C15 13.1046 14.1046 14 13 14H11C9.89543 14 9 13.1046 9 12Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M6 13.5C6 12.6716 6.67157 12 7.5 12C8.32843 12 9 12.6716 9 13.5C9 14.3284 8.32843 15 7.5 15C6.67157 15 6 14.3284 6 13.5Z" fill="currentColor"/>
              <path d="M14.5 8.5C14.5 7.67157 15.1716 7 16 7C16.8284 7 17.5 7.67157 17.5 8.5C17.5 9.32843 16.8284 10 16 10C15.1716 10 14.5 9.32843 14.5 8.5Z" fill="currentColor"/>
            </svg>
            <span>{t('Core Capabilities', 'ዋና ዋና አቅሞች')}</span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D47A1]"
          >
            {t('Integrated Business Services', 'ተቀናጀ የንግድ እና የተቋም አገልግሎቶች')}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-slate-700">
            {t(
              'We deliver holistic, enterprise-grade capabilities designed to take your organization from early-stage strategy to international scale.',
              'ድርጅትዎን ከሃሳብና ስትራቴጂ ደረጃ ጀምሮ እስከ ዓለም አቀፍ የእድገት ደረጃ ድረስ የሚያደርሱ የተቀናጁ አገልግሎቶች።'
            )}
          </p>
        </div>

        {/* 5 Service Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICE_CAPABILITIES.map((capability, index) => {
            const titleText =
              language === 'en' ? capability.title : capability.titleAm;
            const descriptionText =
              language === 'en'
                ? capability.description
                : capability.descriptionAm;

            return (
              <div
                key={capability.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col group"
              >
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-20 h-20 rounded-3xl bg-[#EAF6FF] group-hover:bg-[#0D47A1] text-[#0D47A1] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                    <div className="w-14 h-14 flex items-center justify-center">
                      {SERVICE_ICONS[capability.id] ?? (
                        <img
                          src={`/assets/services/${capability.id}.svg`}
                          alt={titleText}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // fall back to main logo if service svg missing
                            (e.currentTarget as HTMLImageElement).src = `/assets/logo.png`;
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D47A1] mb-3">
                  {titleText}
                </h3>

                <p className="text-sm sm:text-base font-normal text-slate-700 leading-relaxed">
                  {descriptionText}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00838F]">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                  <span>{t('Nexa Guaranteed', 'የተረጋገጠ አቅም')}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
