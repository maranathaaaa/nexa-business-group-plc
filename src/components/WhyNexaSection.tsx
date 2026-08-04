/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldCheck, Lightbulb, Cpu, Target, Layers, Globe2, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { WHY_CHOOSE_ITEMS } from '../data/content';
import { IconResolver } from './IconResolver';

export const WhyNexaSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="whynexa"
      aria-labelledby="whynexa-heading"
      className="py-20 md:py-28 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#0D47A1] font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-[#00BCD4]" />
            <span>{t('Why Choose Nexa', 'ለምን ኔክሳ?')}</span>
          </div>

          <h2
            id="whynexa-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D47A1]"
          >
            {t('The Nexa Advantage', 'የኔክሳ ልዩ የብቃት አቅም')}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-slate-700">
            {t(
              'We combine fourteen years of proven heritage with cutting-edge technology to offer unmatched reliability and sustainable business growth.',
              'የ14 ዓመታት የተረጋገጠ ልምድና ዘመናዊ ቴክኖሎጂን በማጣመር አስተማማኝ እና ዘላቂ የንግድ እድገት እናረጋግጣለን።'
            )}
          </p>
        </div>

        {/* 8 Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const titleText =
              language === 'en' ? item.title : item.titleAm;
            const descriptionText =
              language === 'en' ? item.description : item.descriptionAm;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EAF6FF] group-hover:bg-[#0D47A1] text-[#0D47A1] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-xs">
                  <IconResolver name={item.iconName} className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-extrabold text-[#0D47A1] mb-2.5">
                  {titleText}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {descriptionText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
