/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Building2, Globe2, Layers, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const highlightPointsEn = [
    'Event Experiences & Market Activation',
    'Integrated Marketing & Media Solutions',
    'International Expansion ',
    'Enterprise Technology & AI Systems',
    'Smart Real Estate & Property Innovation',
    'Global Trade & Commercial Distribution',
  ];

  const highlightPointsAm = [
    'የዝግጅት ልምዶች እና የገበያ ማነቃቂያ',
    'ተቀናጀ የማርኬቲንግ እና የሚዲያ መፍትሄዎች',
    'ዓለም አቀፍ መስፋፋት ',
    'የድርጅት ቴክኖሎጂ እና የሰው ሰራሽ አስተውሎት ስርዓቶች',
    'ስማርት ሪል እስቴት እና የንብረት ፈጠራ',
    'ዓለም አቀፍ ንግድ እና የንግድ ስርጭት',
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Who We Are Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#0D47A1] font-bold text-sm">
              <Award className="w-4 h-4 text-[#00BCD4]" />
              <span>{t('Corporate Profile', 'ስለ ድርጅቱ ማንነት')}</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D47A1] tracking-tight"
            >
              {t('Who We Are', 'ስለ እኛ')}
            </h2>

            <div className="w-20 h-1.5 bg-gradient-to-r from-[#0D47A1] to-[#00BCD4] rounded-full"></div>

            <p className="text-xl sm:text-2xl font-semibold text-slate-800 leading-relaxed">
              {t(
                'Nexa Business Group PLC is a diversified business ecosystem built through more than fourteen years of continuous evolution.',
                'ኔክሳ ቢዝነስ ግሩፕ ኃ/የተ/የግ/ማህበር ከ14 ዓመታት በላይ በዘለቀ ተከታታይ እድገት የተገነባ የተለያየና ተቀናጀ የንግድ ስነ-ምህዳር ነው።'
              )}
            </p>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              {t(
                'From event experiences to marketing excellence, international expansion, technology solutions, and business transformation, Nexa delivers integrated solutions that help organizations build, transform, digitize, grow, and expand.',
                'ከልዩ የዝግጅት ልምዶች እስከ ማርኬቲንግ ብቃት፣ ዓለም አቀፍ መስፋፋት፣ የቴክኖሎጂ መፍትሄዎች እና የተቋም ማሻሻያ ድረስ፤ ኔክሳ ድርጅቶች እንዲገነቡ፣ እንዲሻሻሉ፣ በዲጂታል እንዲታገዙ፣ እንዲያድጉና እንዲስፋፉ የሚያስችሉ የተቀናጁ መፍትሄዎችን ያቀርባል።'
              )}
            </p>

            {/* Core Capability Pillars list with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {(t(highlightPointsEn.join('||'), highlightPointsAm.join('||')).split('||')).map(
                (point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#0D47A1]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-semibold text-slate-800">
                      {point}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Column: Visual Business Ecosystem Badge Graphic */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#EAF6FF] to-[#F5F5F5] rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-[#0D47A1] to-[#00BCD4] flex items-center justify-center text-white shadow-lg">
                  <Building2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D47A1]">
                    {t('Integrated Business Group', 'ተቀናጀ የንግድ ግሩፕ')}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-slate-600 mt-2">
                    {t(
                      'Ethiopia HQ • United Arab Emirates Hub',
                      'የኢትዮጵያ ዋና ቢሮ • የተባበሩት አረብ ኤምሬትስ ማዕከል'
                    )}
                  </p>
                </div>

                {/* 4 Core Focus Areas Box */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs text-center">
                    <div className="text-[#0D47A1] font-extrabold text-2xl sm:text-3xl">
                      14+
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                      {t('Years of Excellence', 'ዓመታት ብቃት')}
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs text-center">
                    <div className="text-[#0D47A1] font-extrabold text-2xl sm:text-3xl">
                      5
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                      {t('Specialized Divisions', 'ልዩ የስራ ዘርፎች')}
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs text-center">
                    <div className="text-[#00838F] font-extrabold text-2xl sm:text-3xl">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                      {t('Integrated Strategy', 'ተቀናጀ ስትራቴጂ')}
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs text-center">
                    <div className="text-[#4CAF50] font-extrabold text-2xl sm:text-3xl">
                      B2B
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                      {t('Corporate Focus', 'ለድርጅቶች')}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs sm:text-sm font-semibold text-slate-500">
                  {t(
                    'Supporting enterprises across East Africa and international markets.',
                    'በምስራቅ አፍሪካና በዓለም አቀፍ ገበያ የሚገኙ ድርጅቶችን እንደግፋለን።'
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
