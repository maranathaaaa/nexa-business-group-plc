/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/content';
import { WhatsAppLogo } from './SocialIcons';

export const ScrollToTopButton: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneDigits = CONTACT_INFO.phonePrimary.replace(/\s+/g, '');

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 transition-all ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Contact shortcut buttons */}
      <div className="flex flex-col items-center gap-3 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm border border-slate-200">
        <a
          href={CONTACT_INFO.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('Chat with us on WhatsApp', 'በዋትስአፕ ያነጋግሩን')}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
        >
          <WhatsAppLogo className="h-6 w-6" />
        </a>

        <a
          href={`mailto:${CONTACT_INFO.email}`}
          aria-label={t('Send us an email', 'በኢሜይል ያነጋግሩን')}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0D47A1] text-white shadow-md transition hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
        >
          <Mail className="h-5 w-5" />
        </a>

        <a
          href={`tel:${phoneDigits}`}
          aria-label={t('Call us', 'ይደውሉልን')}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4CAF50] text-white shadow-md transition hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Up arrow button: scrolls back to Home */}
      <button
        onClick={scrollToTop}
        aria-label={t('Back to top', 'ወደ ላይ ተመለስ')}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D47A1] text-white shadow-lg border-2 border-white/60 transition hover:bg-[#1565C0] hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};
