/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Share2,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/content';
import {
  LinkedInLogo,
  TelegramLogo,
  WhatsAppLogo,
} from './SocialIcons';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Event Management & Brand Activation',
    message: '',
  });

  const companyName =
    language === 'en'
      ? CONTACT_INFO.companyNameEn
      : CONTACT_INFO.companyNameAm;
  const addressText =
    language === 'en' ? CONTACT_INFO.addressEn : CONTACT_INFO.addressAm;
  const hoursText =
    language === 'en' ? CONTACT_INFO.officeHoursEn : CONTACT_INFO.officeHoursAm;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    const subject = encodeURIComponent(`Service Request: ${formData.service}`);
    const body = encodeURIComponent(
      [
        `Name / Company: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || 'Not provided'}`,
        `Requested Service: ${formData.service}`,
        '',
        `Message:`,
        formData.message || 'No additional message',
      ].join('\n')
    );

    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Event Management & Brand Activation',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#0D47A1] font-bold text-sm">
            <Mail className="w-4 h-4 text-[#00BCD4]" />
            <span>{t('Get In Touch & Service Request', 'ያግኙን እና አገልግሎት ይጠይቁ')}</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D47A1]"
          >
            {t('Contact & Service Request', 'የአድራሻና የአገልግሎት ጥያቄ ማቅረቢያ')}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-slate-700">
            {t(
              'Connect with our executive leadership or submit a service inquiry with your email for immediate response.',
              'በአዲስ አበባ እና ዱባይ ከሚገኙት ቢሮዎቻችን ጋር ይገናኙ ወይም ለሚፈልጉት አገልግሎት ጥያቄዎን በኢሜይል አድራሻዎ ያስገቡ።'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Company Title Card */}
            <div className="bg-[#EAF6FF] p-6 sm:p-7 rounded-3xl border border-[#00BCD4]/30">
              <h3 className="text-2xl font-extrabold text-[#0D47A1] mb-1">
                {companyName}
              </h3>
              <p className="text-sm font-bold text-[#00838F]">
                {t(
                  'Integrated Business Ecosystem',
                  'ተቀናጀ የንግድ እና የተቋም ስነ-ምህዳር'
                )}
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0D47A1] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {t('Office Address', 'የቢሮ አድራሻ')}
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-800">
                  {addressText}
                </div>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="flex items-start gap-4 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#00BCD4] text-white flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {t('Telephone', 'ስልክ ቁጥር')}
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="block text-base sm:text-lg font-bold text-[#0D47A1] hover:underline"
                >
                  {CONTACT_INFO.phonePrimary} 
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                  className="block text-base sm:text-lg font-bold text-[#0D47A1] hover:underline mt-0.5"
                >
                {CONTACT_INFO.phoneSecondary} 
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#4CAF50] text-white flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {t('Email Address', 'የኢሜይል አድራሻ')}
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-[#0D47A1] hover:underline break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#00838F] text-white flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {t('Working Hours', 'የስራ ሰዓት')}
                </div>
                <div className="text-base font-bold text-slate-800">
                  {hoursText}
                </div>
              </div>
            </div>

            {/* Social Media Icons Box */}
            <div className="p-6 bg-[#F5F5F5] rounded-2xl border border-slate-200">
              <div className="text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#0D47A1]" />
                <span>{t('Connect on Social Media', 'በማህበራዊ ሚዲያ ይከተሉን')}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-slate-200 transition-all shadow-xs hover:shadow-md"
                >
                  <LinkedInLogo className="w-7 h-7" />
                </a>

                <a
                  href={CONTACT_INFO.socialLinks.telegram}
                  target="_blank"
                  rel="noreferrer"
                  title="Telegram"
                  aria-label="Telegram"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white hover:bg-[#26A5E4] text-[#26A5E4] hover:text-white border border-slate-200 transition-all shadow-xs hover:shadow-md"
                >
                  <TelegramLogo className="w-7 h-7" />
                </a>

                <a
                  href={CONTACT_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white hover:bg-[#25D366] text-[#25D366] hover:text-white border border-slate-200 transition-all shadow-xs hover:shadow-md"
                >
                  <WhatsAppLogo className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Service Request Form & Google Maps */}
          <div className="lg:col-span-7 space-y-8">
            {/* Service Request & Email Submission Form */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0D47A1] uppercase tracking-wider">
                  {t('Service Request Form', 'የአገልግሎት ጥያቄ ቅጽ')}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {t('Direct Email Delivery', 'ቀጥታ ለኢሜይል የሚላክ')}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D47A1] mb-2">
                {t(
                  'Request a Service or Consultation',
                  'አገልግሎት ወይም ማማከር ይጠይቁ'
                )}
              </h3>
              <p className="text-base font-medium text-slate-600 mb-6">
                {t(
                  'Submit your email and requested service. Our executive leadership or divisional head will reach out to your email address promptly.',
                  'የኢሜይል አድራሻዎንና የሚፈልጉትን አገልግሎት ይምረጡ፤ የድርጅታችን የስራ ኃላፊዎች በኢሜይል አድራሻዎ በፍጥነት ምላሽ ይሰጡዎታል።'
                )}
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#EAF6FF] border border-[#00BCD4]/40 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#4CAF50] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0D47A1]">
                    {t(
                      'Service Request Received!',
                      'የአገልግሎት ጥያቄዎ በተሳካ ሁኔታ ተልኳል!'
                    )}
                  </h4>
                  <p className="text-base font-semibold text-slate-700 max-w-md mx-auto">
                    {t(
                      `Thank you, ${formData.name || 'valued client'}! We have registered your request for "${formData.service}". Our team will contact you at ${formData.email} shortly.`,
                      `እናመሰግናለን ${formData.name || 'ክቡር ደንበኛችን'}! የ "${formData.service}" አገልግሎት ጥያቄዎ ተመዝግቧል። በኢሜይል አድራሻዎ (${formData.email}) በቅርቡ እናገኝዎታለን።`
                    )}
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-bold text-sm bg-[#0D47A1] hover:bg-[#1565C0] text-white transition-all shadow-sm"
                  >
                    {t('Submit Another Inquiry', 'ሌላ ጥያቄ ለማቅረብ')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="req-name"
                        className="block text-sm font-extrabold text-slate-700 mb-1.5"
                      >
                        {t('Your Name / Company', 'ሙሉ ስም / የድርጅት ስም')}
                      </label>
                      <input
                        id="req-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t('e.g., Abebe Kebede', 'ለምሳሌ፦ አበበ ከበደ')}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0D47A1] focus:ring-2 focus:ring-[#EAF6FF] text-base font-medium text-slate-800 transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="req-email"
                        className="block text-sm font-extrabold text-slate-700 mb-1.5"
                      >
                        {t('Email Address *', 'የኢሜይል አድራሻ *')}
                      </label>
                      <input
                        id="req-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={t('name@example.com', 'name@example.com')}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0D47A1] focus:ring-2 focus:ring-[#EAF6FF] text-base font-medium text-slate-800 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="req-phone"
                        className="block text-sm font-extrabold text-slate-700 mb-1.5"
                      >
                        {t('Phone Number (Optional)', 'ስልክ ቁጥር (አማራጭ)')}
                      </label>
                      <input
                        id="req-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+251 911 ..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0D47A1] focus:ring-2 focus:ring-[#EAF6FF] text-base font-medium text-slate-800 transition-all"
                      />
                    </div>

                    {/* Select Service */}
                    <div>
                      <label
                        htmlFor="req-service"
                        className="block text-sm font-extrabold text-slate-700 mb-1.5"
                      >
                        {t('Requested Service / Division', 'የሚፈልጉት አገልግሎት / ዘርፍ')}
                      </label>
                      <select
                        id="req-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0D47A1] focus:ring-2 focus:ring-[#EAF6FF] text-base font-semibold text-slate-800 transition-all"
                      >
                        <option value="Event Management & Brand Activation">
                          {t(
                            'Event Management & Brand Activation',
                            'የዝግጅት አቀራረብና ብራንድ ማስተዋወቅ'
                          )}
                        </option>
                        <option value="Integrated Marketing & Media">
                          {t(
                            'Integrated Marketing & Media',
                            'የተገናኘ ማርኬቲንግና ሚዲያ'
                          )}
                        </option>
                        <option value="Software & AI Solutions">
                          {t(
                            'Software & AI Solutions',
                            'የሶፍትዌር እና አርቴፊሻል ኢንተለጀንስ መፍትሔዎች'
                          )}
                        </option>
                        <option value="Real Estate & PropTech">
                          {t(
                            'Real Estate & PropTech',
                            'የሪል እስቴትና ንብረት ቴክኖሎጂ'
                          )}
                        </option>
                        <option value="Global Trade & Distribution">
                          {t(
                            'Global Trade & Distribution',
                            'ዓለም አቀፍ ንግድና ስርጭት'
                          )}
                        </option>
                        <option value="General Corporate Inquiry">
                          {t('General Corporate Inquiry', 'አጠቃላይ የድርጅት ጥያቄ')}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="req-message"
                      className="block text-sm font-extrabold text-slate-700 mb-1.5"
                    >
                      {t('Service Requirements / Message', 'የአገልግሎቱ ዝርዝር ፍላጎት / ማብራሪያ')}
                    </label>
                    <textarea
                      id="req-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t(
                        'Describe your service requirements or project scope...',
                        'የሚፈልጉትን አገልግሎት ወይም ፕሮጀክት ዝርዝር እዚህ ይጻፉ...'
                      )}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0D47A1] focus:ring-2 focus:ring-[#EAF6FF] text-base font-medium text-slate-800 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base bg-[#0D47A1] hover:bg-[#1565C0] text-white shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-[#EAF6FF]"
                  >
                    <Send className="w-5 h-5 text-[#00BCD4]" />
                    <span>
                      {t('Submit Service Request', 'የአገልግሎት ጥያቄውን በኢሜይል ይላኩ')}
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Maps & Regional Offices */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-extrabold text-[#0D47A1]">
                  {t(
                    'Office Location',
                    'የዋና ቢሮ አድራሻ'
                  )}
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0D47A1]">
                  
                </span>
              </div>

              {/* Responsive Google Maps Embed frame */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 shadow-inner relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.790726095706!2d38.77706887399583!3d8.991395289578545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852102a82ee9%3A0x62ce22224ab6215e!2sEden%20building!5e0!3m2!1sen!2set!4v1785827682887!5m2!1sen!2set"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

              {/* Office Location Hub Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="text-sm font-extrabold text-[#0D47A1]">
                    {t('Addis Ababa Main Office', 'አዲስ አበባ ዋና ቢሮ')}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">
                    {t(
                      'Bole Rwanda, Addis Ababa, Ethiopia',
                      'ቦሌ ሩዋንዳ ፣ አዲስ አበባ፣ ኢትዮጵያ'
                    )}
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
