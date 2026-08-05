/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  DivisionItem,
  NavItem,
  ServiceCapability,
  TimelinePhase,
  WhyChooseItem,
} from '../types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'about', labelEn: 'About Us', labelAm: 'ስለ እኛ', href: '#about' },
  { id: 'journey', labelEn: 'Journey', labelAm: 'የእኛ ጉዞ', href: '#journey' },
  { id: 'divisions', labelEn: 'Divisions', labelAm: 'የስራ ዘርፎች', href: '#divisions' },
  { id: 'services', labelEn: 'Services', labelAm: 'አገልግሎቶች', href: '#services' },
  { id: 'whynexa', labelEn: 'Why Nexa', labelAm: 'ለምን ኔክሳ?', href: '#whynexa' },
  { id: 'philosophy', labelEn: 'Philosophy', labelAm: 'መርሃችን', href: '#philosophy' },
  { id: 'contact', labelEn: 'Contact', labelAm: 'ያግኙን', href: '#contact' },
];

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    id: 1,
    title: 'Phase 1',
    titleAm: 'ምዕራፍ 1',
    subtitle: 'Cassiopeia Promotion',
    subtitleAm: 'ካስዮፒያ ፕሮሞሽን',
    yearOrTag: 'Foundation Phase',
    yearOrTagAm: 'የመጀመሪያው የምስረታ ምዕራፍ',
    tagline: 'Creating Experiences. Connecting Brands. Building Markets.',
    taglineAm: 'ልዩ የክስተት ልምዶችን መፍጠር፤ ብራንዶችን ማገናኘት እና ገበያን መገንባት።',
    services: [
      'Event Management',
      'Brand Experiences',
      'Corporate Events',
      'Promotional Campaigns',
      'Audience Engagement',
      'Market Activation',
    ],
    servicesAm: [
      'የዝግጅት አደረጃጀት እና አስተዳደር',
      'የብራንድ ማስተዋወቂያ ልምዶች',
      'የድርጅቶች እና ተቋማት ዝግጅቶች',
      'የፕሮሞሽን ዘመቻዎች',
      'የተመልካች እና ደንበኛ ተሳትፎ',
      'የገበያ ማነቃቂያ ስራዎች',
    ],
  },
  {
    id: 2,
    title: 'Phase 2',
    titleAm: 'ምዕራፍ 2',
    subtitle: 'F Zee Marketing & Promotion',
    subtitleAm: 'ኤፍ ዚ ማርኬቲንግ እና ፕሮሞሽን',
    yearOrTag: 'Growth Phase',
    yearOrTagAm: 'የእድገት እና መስፋፋት ምዕራፍ',
    tagline: 'Expanding Into Integrated Marketing Solutions.',
    taglineAm: 'ወደ ተቀናጀ የማርኬቲንግ እና የማስተዋወቅ መፍትሄዎች መስፋፋት።',
    services: [
      'Integrated Marketing',
      'Brand Development',
      'Sales Support',
      'Business Promotion',
      'Strategic Partnerships',
      'Market Expansion',
    ],
    servicesAm: [
      'ተቀናጀ የማርኬቲንግ አገልግሎት',
      'የብራንድ ግንባታ እና እድገት',
      'የሽያጭ ድጋፍ ስራዎች',
      'የንግድ ማስተዋወቂያ',
      'ስትራቴጂያዊ አጋርነቶች',
      'የገበያ መስፋፋት',
    ],
  },
  {
    id: 3,
    title: 'Phase 3',
    titleAm: 'ምዕራፍ 3',
    subtitle: 'UAE Expansion (2022)',
    subtitleAm: 'የተባበሩት አረብ ኤምሬትስ መስፋፋት (2022)',
    yearOrTag: 'International Phase',
    yearOrTagAm: 'የዓለም አቀፍ መስፋፋት ምዕራፍ',
    tagline: 'International Business Development.',
    taglineAm: 'ዓለም አቀፍ የንግድ እድገት እና መስፋፋት።',
    services: [
      'Digital Commerce',
      'International Marketing',
      'Cross-border Business',
      'Global Partnerships',
      'Business Innovation',
    ],
    servicesAm: [
      'ዲጂታል ንግድ',
      'ዓለም አቀፍ ማርኬቲንግ',
      'ድንበር ተሻጋሪ የንግድ እንቅስቃሴ',
      'ዓለም አቀፋዊ አጋርነቶች',
      'የንግድ ፈጠራ እና ኢኖቬሽን',
    ],
  },
  {
    id: 4,
    title: 'Phase 4',
    titleAm: 'ምዕራፍ 4',
    subtitle: 'Nexa Business Group PLC',
    subtitleAm: 'ኔክሳ ቢዝነስ ግሩፕ ኃ/የተ/የግ/ማህበር',
    yearOrTag: 'Ecosystem Phase',
    yearOrTagAm: 'የተቀናጀ የንግድ ስርዓት ምዕራፍ',
    tagline: 'Building an Integrated Business Ecosystem.',
    taglineAm: 'ተቀናጀ እና ዘመናዊ የንግድ ስነ-ምህዳር መገንባት።',
    services: [
      'Build',
      'Transform',
      'Digitize',
      'Grow',
      'Expand',
    ],
    servicesAm: [
      'መገንባት (Build)',
      'ማሻሻል እና መለወጥ (Transform)',
      'ዲጂታላይዝ ማድረግ (Digitize)',
      'ማሳደግ (Grow)',
      'ማስፋፋት (Expand)',
    ],
  },
];

export const DIVISIONS_DATA: DivisionItem[] = [
  {
    id: 'rhino',
    name: 'Rhino Market Activation & Events Division',
    nameAm: 'ራይኖ የገበያ ማነቃቂያ እና ዝግጅቶች ዘርፍ',
    subtitle: 'Creating Unforgettable Brand Experiences & Corporate Activations',
    subtitleAm: 'አይረሴ የብራንድ ልምዶችን እና የድርጅት ማነቃቂያ ዝግጅቶችን መፍጠር',
    description:
      'We deliver high-impact experiential events, brand activations, and market engagement strategies that connect brands directly with their target audience.',
    descriptionAm:
      'ከፍተኛ ተጽዕኖ ያላቸውን ዝግጅቶች፣ የብራንድ ማስተዋወቂያዎችን እና ደንበኞችን በቀጥታ የሚያገናኙ የገበያ ማነቃቂያ ስትራቴጂዎችን እናቀርባለን።',
    iconName: 'CalendarDays',
    color: 'from-[#0D47A1] to-[#1976D2]',
    services: [
      'Corporate Events',
      'Brand Activation',
      'Experiential Marketing',
      'Campaign Execution',
      'Market Engagement',
    ],
    servicesAm: [
      'የድርጅቶች ዝግጅቶች',
      'የብራንድ ማነቃቂያ',
      'የተሞክሮ ማርኬቲንግ',
      'የዘመቻ ትግበራ',
      'የገበያ ተሳትፎ',
    ],
  },
  {
    id: 'iconic',
    name: 'Iconic Digital Marketing & Media Solutions',
    nameAm: 'አይኮኒክ ዲጂታል ማርኬቲንግ እና በሚዲያ መፍትሄዎች',
    subtitle: 'Strategic Brand Identity, Digital Visibility & Growth Marketing',
    subtitleAm: 'ስትራቴጂያዊ የብራንድ ማንነት፣ ዲጂታል ታዋቂነት እና የእድገት ማርኬቲንግ',
    description:
      'Empowering organizations with cutting-edge digital branding, creative content execution, and measurable growth media campaigns across multiple platforms.',
    descriptionAm:
      'ድርጅቶችን በዘመናዊ ዲጂታል ብራንዲንግ፣ በፈጠራ ይዘት አዘገጃጀት እና በውጤታማ የሚዲያ ዘመቻዎች እናበረታታለን።',
    iconName: 'TrendingUp',
    color: 'from-[#00838F] to-[#00BCD4]',
    services: [
      'Digital Branding',
      'Creative Design',
      'Content Creation',
      'Media Solutions',
      'Growth Marketing',
    ],
    servicesAm: [
      'ዲጂታል ብራንዲንግ',
      'የፈጠራ ዲዛይን',
      'የይዘት ፈጠራ',
      'የሚዲያ መፍትሄዎች',
      'የእድገት ማርኬቲንግ',
    ],
  },
  {
    id: 'axiom',
    name: 'Axiom Technology & Digital Engineering',
    nameAm: 'አክሲዮም ቴክኖሎጂ እና ዲጂታል ኢንጂነሪንግ',
    subtitle: 'Next-Generation Software, AI Integration & Enterprise Automation',
    subtitleAm: 'የወደፊት ዘመን ሶፍትዌር፣ የሰው ሰራሽ አስተውሎት እና የተቋም አውቶሜሽን',
    description:
      'Engineering robust digital platforms, intelligent automation systems, and scalable software architecture tailored for industry leaders.',
    descriptionAm:
      'ጠንካራ ዲጂታል ፕላትፎርሞችን፣ የሰው ሰራሽ አስተውሎት አውቶሜሽን ስርዓቶችን እና ሊስፋፉ የሚችሉ ዘመናዊ የሶፍትዌር መፍትሄዎችን እናለማለን።',
    iconName: 'Cpu',
    color: 'from-[#1B5E20] to-[#4CAF50]',
    services: [
      'Software Development',
      'Artificial Intelligence',
      'Enterprise Systems',
      'Automation',
      'Digital Platforms',
    ],
    servicesAm: [
      'የሶፍትዌር ልማት',
      'ሰው ሰራሽ አስተውሎት (AI)',
      'የድርጅት ስርዓቶች',
      'አውቶሜሽን',
      'ዲጂታል ፕላትፎርሞች',
    ],
  },
  {
    id: 'ashara',
    name: 'Ashara Real Estate & Property Management',
    nameAm: 'አሻራ ሪል እስቴት እና ንብረት አስተዳደር',
    subtitle: 'Smart Buildings, Property Technology & Digital Real Estate',
    subtitleAm: 'ስማርት ህንፃዎች፣ የንብረት ቴክኖሎጂ እና ዲጂታል ሪል እስቴት',
    description:
      'Redefining real estate management through intelligent property technology, automated tenant experiences, and sustainable smart building innovation.',
    descriptionAm:
      'በዘመናዊ የንብረት ቴክኖሎጂ፣ በአውቶማቲክ የአስተዳደር ስርዓቶች እና በስማርት ህንፃዎች የሪል እስቴት አስተዳደርን በዘመናዊ መንገድ እንለውጣለን።',
    iconName: 'Building2',
    color: 'from-[#0D47A1] to-[#00BCD4]',
    isUnderDevelopment: true,
    services: [
      'Smart Buildings',
      'Property Technology',
      'Digital Real Estate',
      'Property Innovation',
    ],
    servicesAm: [
      'ስማርት ህንፃዎች',
      'የንብረት ቴክኖሎጂ (PropTech)',
      'ዲጂታል ሪል እስቴት',
      'የንብረት ፈጠራ',
    ],
  },
  {
    id: 'connex',
    name: 'Connex Trade & Distribution',
    nameAm: 'ኮኔክስ ንግድ እና ስርጭት',
    subtitle: 'Connecting Global Markets with Robust Distribution & Supply Chain',
    subtitleAm: 'ዓለም አቀፍ ገበያዎችን በጠንካራ የስርጭት እና አቅርቦት ሰንሰለት ማገናኘት',
    description:
      'Bridging markets through efficient supply chain management, reliable commercial trade solutions, and seamless distribution channels.',
    descriptionAm:
      'በቀልጣፋ የአቅርቦት ሰንሰለት አስተዳደር፣ በአስተማማኝ የንግድ መፍትሄዎች እና በሰፊ የስርጭት አውታር ገበያዎችን እናገናኛለን።',
    iconName: 'Globe2',
    color: 'from-[#0D47A1] to-[#1565C0]',
    services: [
      'Distribution',
      'Trade Solutions',
      'Supply Chain',
      'Market Access',
      'Commercial Growth',
    ],
    servicesAm: [
      'ስርጭት',
      'የንግድ መፍትሄዎች',
      'የአቅርቦት ሰንሰለት',
      'የገበያ ተደራሽነት',
      'የንግድ እድገት',
    ],
  },
];

export const SERVICE_CAPABILITIES: ServiceCapability[] = [
  {
    id: 'build',
    title: 'Build',
    titleAm: 'መገንባት (Build)',
    description:
      'We architect resilient business frameworks, launch compelling brands, and deploy robust digital infrastructures taking ventures seamlessly from initial concept to commercial market dominance.',
    descriptionAm:
      'አዳዲስ የንግድ ስራዎችን፣ ተፅዕኖ ፈጣሪ ብራንዶችን እና አስተማማኝ የዲጂታል መሰረተ-ልማቶችን እንገነባለን፤ ሀሳብን ከመንደፍ ጀምሮ በገበያው ውስጥ በስኬት እስከመሰማራት ድረስ ሙሉ ሀላፊነት እንወስዳለን።',
    iconName: 'Hammer',
  },                                                                                                          
  {
    id: 'transform',
    title: 'Transform',
    titleAm: 'ማሻሻል እና መለወጥ (Transform)',
    description:
      'We revitalize legacy business architectures, streamline operational workflows, and reposition brands to ensure long-term agility and competitiveness in fast-evolving global markets.',
    descriptionAm:
      'ነባር የንግድ አሰራሮችን እና የአደረጃጀት ስርዓቶችን በማዘመን፣ የስራ ሂደቶችን በማቃለል እና የብራንድ አቀማመጥን በማስተካከል ድርጅቶች በፍጥነት በሚቀያየሩ አለምአቀፍ ገበያዎች ውስጥ ዘላቂ ተወዳዳሪ እንዲሆኑ እናደርጋለን።',
    iconName: 'RefreshCw',
  },
  {
    id: 'digitize',
    title: 'Digitize',
    titleAm: 'ዲጂታላይዝ ማድረግ (Digitize)',
    description:
      'We drive enterprise agility by integrating advanced software platforms, AI-assisted operational workflows, and scalable cloud ecosystems that eliminate friction and maximize execution speed.',
    descriptionAm:
      'ዘመናዊ የሶፍትዌር ሲስተሞችን፣ በሰው ሰራሽ አስተውሎት (AI) የታገዙ የአሰራር መንገዶችን እና (Cloud) ቴክኖሎጂዎችን በመተግበር የድርጅትዎን የስራ ፍጥነት እና ጥራት እናሳድጋለን',
    iconName: 'Laptop',
  },
  {
    id: 'grow',
    title: 'Grow',
    titleAm: 'ማሳደግ (Grow)',
    description:
      'We capture market share and maximize ROI using high-impact brand activations, data-driven marketing campaigns, and high-conversion commercial strategies.',
    descriptionAm:
      'በመረጃ በተደገፉ የማርኬቲንግ እንቅስቃሴዎች፣ ውጤታማ የብራንድ ማስተዋወቂያዎች እና ከፍተኛ የሽያጭ ስልቶች አማካኝነት የድርጅትዎን የገበያ ድርሻ እና የትርፍ መጠን እንጨምራለን።',
    iconName: 'TrendingUp',
  },
  {
    id: 'expand',
    title: 'Expand',
    titleAm: 'ማስፋፋት (Expand)',
    description:
      'Leveraging our presence in East Africa and the UAE, we unlock cross-border trade, establish high-value international partnerships, and guide businesses into lucrative foreign territories.',
    descriptionAm:
      'ምስራቅ አፍሪካ እና የተባበሩት አረብ ኤምሬትስ (UAE) ውስጥ ያለንን ተደራሽነት በመጠቀም ድበር ተሻጋሪ የንግድ እድሎችን እንከፍታለን፤ ዘላቂ የውጭ ሀገር አጋርነቶችን በመፍጠር ድርጅትዎን ወደ አዳዲስ አለምአቀፍ ገበያዎች እናሸጋግራለን።',
    iconName: 'Globe',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'experience',
    title: 'Experience',
    titleAm: 'የረጅም ዓመታት ልምድ',
    description: 'Over 14 years of proven excellence across diverse industries and international markets.',
    descriptionAm: 'በተለያዩ የንግድ ዘርፎች እና ዓለም አቀፍ ገበያዎች ከ14 ዓመታት በላይ የተረጋገጠ ልምድ።',
    iconName: 'Award',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    titleAm: 'የፈጠራ ብቃት (Innovation)',
    description: 'Forward-thinking strategies that turn complex challenges into sustainable competitive advantages.',
    descriptionAm: 'ውስብስብ ፈተናዎችን ወደ ዘላቂ የውድድር አቅም የሚቀይሩ የፈጠራ ስትራቴጂዎች።',
    iconName: 'Lightbulb',
  },
  {
    id: 'technology',
    title: 'Technology',
    titleAm: 'ዘመናዊ ቴክኖሎጂ',
    description: 'Harnessing enterprise engineering, artificial intelligence, and digital automation tools.',
    descriptionAm: 'ዘመናዊ ኢንጂነሪንግ፣ ሰው ሰራሽ አስተውሎት (AI) እና ዲጂታል አውቶሜሽንን መጠቀም።',
    iconName: 'Cpu',
  },
  {
    id: 'strategy',
    title: 'Business Strategy',
    titleAm: 'የንግድ ስትራቴጂ',
    description: 'Data-informed planning designed to align every operational unit with long-term corporate goals.',
    descriptionAm: 'እያንዳንዱን የድርጅት ክፍል ከረጅም ጊዜ ዓላማ ጋር የሚያስተሳስር በጥናት ላይ የተመሰረተ ዕቅድ።',
    iconName: 'Target',
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    titleAm: 'ዲጂታል ትራንስፎርሜሽን',
    description: 'Seamless integration of smart systems that modernize legacy workflows and increase productivity.',
    descriptionAm: 'አሮጌ አሰራሮችን የሚያዘምኑ እና ምርታማነትን የሚያሳድጉ ዘመናዊ ስርዓቶች ውህደት።',
    iconName: 'Layers',
  },
  {
    id: 'network',
    title: 'International Network',
    titleAm: 'ዓለም አቀፍ አውታር',
    description: 'Active presence and strategic partnerships connecting East Africa with the UAE and global markets.',
    descriptionAm: 'ምስራቅ አፍሪካን ከተባበሩት አረብ ኤምሬትስ እና ከዓለም አቀፍ ገበያ ጋር የሚያገናኝ አውታር።',
    iconName: 'Globe2',
  },
  {
    id: 'reliable',
    title: 'Reliable Partnership',
    titleAm: 'አስተማማኝ አጋርነት',
    description: 'A trusted corporate ally dedicated to transparency, integrity, and predictable execution.',
    descriptionAm: 'ለታማኝነት፣ ለግልፅነት እና ለውጤታማ አፈፃፀም የቆመ አስተማማኝ የንግድ አጋር።',
    iconName: 'ShieldCheck',
  },
  {
    id: 'growth',
    title: 'Long-Term Growth',
    titleAm: 'ዘላቂ እድገት',
    description: 'Structured methodologies that build lasting equity and scalable commercial momentum.',
    descriptionAm: 'ዘላቂ አቅምን እና የሚስፋፋ የንግድ እድገትን የሚገነቡ አሰራሮች።',
    iconName: 'BarChart3',
  },
];

export const PHILOSOPHY_CONTENT = {
  quoteEn: 'Strategy in Motion. Growth Without Limits.',
  quoteAm: 'ስትራቴጂ በተግባር፤ እድገት ያለገደብ።',
  introEn: 'We do not simply provide services. We build businesses.',
  introAm: 'እኛ አገልግሎት ብቻ አንሰጥም፤ ጠንካራ ተቋማትን እና ንግዶችን እንገነባለን።',
  pillarsEn: [
    'We build businesses.',
    'We transform organizations.',
    'We create digital ecosystems.',
    'We unlock opportunities.',
    'We accelerate sustainable growth.',
  ],
  pillarsAm: [
    'ጠንካራ ንግዶችን እንገነባለን።',
    'ተቋማትን እናሻሽላለን እና እንለውጣለን።',
    'ዘመናዊ የዲጂታል ስነ-ምህዳሮችን እንፈጥራለን።',
    'አዳዲስ የንግድ እድሎችን እንከፍታለን።',
    'ዘላቂ እድገትን እናፋጥናለን።',
  ],
};

export const CONTACT_INFO = {
  companyNameEn: 'Nexa Business Group PLC',
  companyNameAm: 'ኔክሳ ቢዝነስ ግሩፕ ኃ/የተ/የግ/ማህበር',
  phonePrimary: '+251 911984806',
  phoneSecondary: '+251 911 343831',
  email: 'info@nexabusinessgroup.com',
  addressEn: 'Bole Rwanda ,Eden building |Addis Ababa , Ethiopia ',
  
  addressAm: 'አዲስ አበባ፣ ኢትዮጵያ |',
  officeHoursEn: 'Monday – Saturday: 8:30 AM – 5:30 PM (East Africa Time)',
  officeHoursAm: 'ከሰኞ – አርብ፡ ከጧቱ 2:30 – ከቀኑ 11:30 (በኢትዮጵያ ሰዓት አቆጣጠር)',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/nexa-business-group/',
    telegram: 'https://t.me/nexafz',
    whatsapp: 'https://wa.me/251911984806',
  },
};
