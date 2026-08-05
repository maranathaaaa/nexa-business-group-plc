/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NAVIGATION_ITEMS } from '../data/content';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo on Left */}
          <a
            href="#home"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4] rounded-lg p-1"
            aria-label={t('Nexa Business Group PLC Home', 'ኔክሳ ቢዝነስ ግሩፕ ዋና ገጽ')}
          >
            <img
              src={new URL('../../assets/logo.png', import.meta.url).href}
              alt="Nexa logo"
              className="w-11 h-11 md:w-12 md:h-12 rounded-xl shadow-md object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = new URL('../../assets/logo.png', import.meta.url).href;
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold text-[#0D47A1] tracking-tight leading-tight">
                NEXA
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Business Group PLC
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold text-slate-700 hover:text-[#0D47A1] hover:bg-[#EAF6FF] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
              >
                {language === 'en' ? item.labelEn : item.labelAm}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language & Accessibility & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-sm bg-[#EAF6FF] text-[#0D47A1] border border-[#00BCD4]/30 hover:bg-[#0D47A1] hover:text-white transition-all"
              aria-label={
                language === 'en'
                  ? 'Switch to Amharic Language'
                  : 'ወደ እንግሊዝኛ ቋንቋ ይቀይሩ'
              }
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? '🇪🇹 አማርኛ' : '🇬🇧 English'}</span>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#0D47A1] hover:bg-[#1565C0] rounded-xl shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
            >
              <span>{t('Contact Us', 'ያግኙን')}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-[#0D47A1] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0D47A1]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-[#0D47A1]" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold text-slate-800 hover:text-[#0D47A1] hover:bg-[#EAF6FF] transition-colors"
              >
                <span>{language === 'en' ? item.labelEn : item.labelAm}</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3.5 px-6 rounded-xl font-bold text-white bg-[#0D47A1] hover:bg-[#1565C0] shadow-md"
              >
                {t('Contact Us', 'ያግኙን')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
