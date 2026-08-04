/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NAVIGATION_ITEMS, DIVISIONS_DATA, CONTACT_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-green-50 text-black pt-16 pb-12 border-t-4 border-green-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Column 1: Company About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={new URL('../../assets/logo.png', import.meta.url).href}
                alt="Nexa logo"
                className="w-11 h-11 rounded-xl object-cover shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-black tracking-tight">
                  NEXA
                </span>
                <span className="text-xs font-semibold text-green-700 uppercase tracking-widest">
                  Business Group PLC
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base font-normal text-slate-800 leading-relaxed max-w-sm">
              {t(
                'Nexa Business Group PLC is a diversified business ecosystem built through more than fourteen years of continuous evolution, helping organizations build, transform, digitize, grow, and expand.',
                'ኔክሳ ቢዝነስ ግሩፕ ኃ/የተ/የግ/ማህበር ከ14 ዓመታት በላይ በዘለቀ ተከታታይ እድገት የተገነባ፤ ድርጅቶችና ንግዶች እንዲገነቡ፣ እንዲሻሻሉ፣ በዲጂታል እንዲታገዙና እንዲያድጉ የሚረዳ ተቀናጀ የንግድ ግሩፕ ነው።'
              )}
            </p>

            <div className="text-xs font-bold text-green-700 uppercase tracking-wider pt-2">
              {t('Addis Ababa • ', 'አዲስ አበባ •')}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-bold text-black border-b border-slate-200 pb-2">
              {t('Quick Links', 'ፈጣን ሊንኮች')}
            </h3>

            <ul className="space-y-2.5">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm sm:text-base font-semibold text-slate-800 hover:text-green-600 transition-colors inline-block focus:outline-none focus:underline"
                  >
                    {language === 'en' ? item.labelEn : item.labelAm}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business Divisions */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-bold text-black border-b border-slate-200 pb-2">
              {t('Business Divisions', 'ዋና ዋና ዘርፎች')}
            </h3>

            <ul className="space-y-3">
              {DIVISIONS_DATA.map((div) => (
                <li key={div.id}>
                  <a
                    href={`#${div.id}`}
                    className="text-sm font-semibold text-slate-800 hover:text-green-600 transition-colors block focus:outline-none focus:underline"
                  >
                    {language === 'en' ? div.name : div.nameAm}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-black border-b border-slate-200 pb-2">
              {t('Contact Info', 'የእውቂያ አድራሻ')}
            </h3>

            <div className="space-y-3 text-sm font-semibold text-slate-800">
              <div>
                  <div className="text-xs uppercase text-green-700">
                    {t('Phone', 'ስልክ')}
                  </div>
                  <div>
                    <a
                      href={`tel:${CONTACT_INFO.phonePrimary.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-slate-800 hover:text-green-600 transition-colors inline-block focus:outline-none"
                      aria-label={`Call ${CONTACT_INFO.phonePrimary}`}
                    >
                      {CONTACT_INFO.phonePrimary}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`tel:${CONTACT_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-slate-800 hover:text-green-600 transition-colors inline-block focus:outline-none"
                      aria-label={`Call ${CONTACT_INFO.phoneSecondary}`}
                    >
                      {CONTACT_INFO.phoneSecondary}
                    </a>
                  </div>
              </div>

                <div>
                <div className="text-xs uppercase text-green-700">
                  {t('Email', 'ኢሜይል')}
                </div>
                <div className="break-all">{CONTACT_INFO.email}</div>
              </div>

              <div>
                <div className="text-xs uppercase text-green">
                  {t('Location', 'ቦታ')}
                </div>
                <div>{t('Addis Ababa, Ethiopia', 'አዲስ አበባ፣ ኢትዮጵያ')}</div>
              
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Copyright & Accessibility note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-700 text-center sm:text-left">
          <div>
            © {currentYear}{' '}
            {language === 'en'
              ? CONTACT_INFO.companyNameEn
              : CONTACT_INFO.companyNameAm}
            . {t('All rights reserved.', 'መብቱ በህግ የተጠበቀ ነው።')}
          </div>

          <div className="flex items-center gap-4">
        =

          </div>
        </div>
      </div>
    </footer>
  );
};
