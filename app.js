/* ==========================================================================
   CARECIRCLE ELITE - APP ENGINE LOGIC
   Dynamic Personalization, A11y, Audio Synth, Voice Recognition, and Simulators
   ========================================================================== */

// 1. INLINE BRAND ICONS SVG REFERENCE DATABASE
const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
  coins: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/></svg>',
  siren: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18v-6a5 5 0 0 1 10 0v6"/><path d="M5 18h14"/><path d="M12 2v3"/><path d="m4.2 4.2 2.1 2.1"/><path d="m19.8 4.2-2.1 2.1"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',
  contrast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/></svg>',
  type: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
  volume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  pill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 0 0-7-7l-10 10a4.95 4.95 0 0 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
  'map-pin': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  wand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m19 2 3 3L6 22H3v-3L19 2Z"/><path d="m16 5 3 3"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  walk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><path d="m9 22 1.5-6 1.5-3.5 2 2.5 1.5 5"/><path d="M12 12.5 15 10l-3-1-3 1.5L7 16"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>',
  stethoscope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v14M12 16a4 4 0 1 0 8 0v-4M4 12v1a4 4 0 0 0 8 0v-1M12 6a4 4 0 0 1 4-4M8 6h8"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v14"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z"/><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/></svg>',
  shopping: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>'
};

// 1.5 CULTURALLY ADAPTIVE COMPANION MASCOTS DATABASE
const mascots = {
  India: {
    name: 'Gaju',
    avatarDesc: 'A warm, friendly baby elephant who loves traditional wisdom and health routines.',
    svg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="52" r="28" fill="#94a3b8" />
      <circle cx="38" cy="45" r="3" fill="#1e293b" />
      <circle cx="37" cy="43.5" r="0.8" fill="#ffffff" />
      <circle cx="62" cy="45" r="3" fill="#1e293b" />
      <circle cx="61" cy="43.5" r="0.8" fill="#ffffff" />
      <ellipse cx="18" cy="48" rx="14" ry="18" fill="#cbd5e1" class="mascot-ear-l" />
      <ellipse cx="82" cy="48" rx="14" ry="18" fill="#cbd5e1" class="mascot-ear-r" />
      <path d="M50 52 Q50 68 58 68 Q62 68 62 64" fill="none" stroke="#94a3b8" stroke-width="7" stroke-linecap="round" class="mascot-trunk" />
      <circle cx="32" cy="51" r="3.5" fill="#fca5a5" opacity="0.6"/>
      <circle cx="68" cy="51" r="3.5" fill="#fca5a5" opacity="0.6"/>
      <path d="M50 26 L53 32 L50 36 L47 32 Z" fill="#ef4444" />
    </svg>`
  },
  Japan: {
    name: 'Koko-chan',
    avatarDesc: 'A cute white cherry blossom kitty focused on Zen calm, local schedules, and wellness.',
    svg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="52" r="29" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
      <path d="M25 32 C15 15, 34 18, 32 30 Z" fill="#fbcfe8" class="mascot-ear-l" stroke="#f472b6" stroke-width="1" />
      <path d="M75 32 C85 15, 66 18, 68 30 Z" fill="#fbcfe8" class="mascot-ear-r" stroke="#f472b6" stroke-width="1" />
      <circle cx="37" cy="48" r="3" fill="#1e293b" />
      <circle cx="63" cy="48" r="3" fill="#1e293b" />
      <line x1="16" y1="50" x2="28" y2="50" stroke="#94a3b8" stroke-width="1.5" class="mascot-whisker-l" />
      <line x1="16" y1="55" x2="26" y2="57" stroke="#94a3b8" stroke-width="1.5" class="mascot-whisker-l" />
      <line x1="84" y1="50" x2="72" y2="50" stroke="#94a3b8" stroke-width="1.5" class="mascot-whisker-r" />
      <line x1="84" y1="55" x2="74" y2="57" stroke="#94a3b8" stroke-width="1.5" class="mascot-whisker-r" />
      <path d="M48 54 Q50 56 52 54" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" class="mascot-beak" />
      <circle cx="31" cy="52" r="3.5" fill="#fda4af" opacity="0.7"/>
      <circle cx="69" cy="52" r="3.5" fill="#fda4af" opacity="0.7"/>
      <circle cx="56" cy="36" r="4.5" fill="#fb7185" />
      <circle cx="56" cy="36" r="1.5" fill="#fef08a" />
    </svg>`
  },
  Brazil: {
    name: 'Zeca',
    avatarDesc: 'A bright green parrot bursting with energy, warmth, and community conversation.',
    svg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="28" fill="#22c55e" />
      <path d="M50 22 C50 10, 42 12, 45 22 Z" fill="#eab308" />
      <path d="M55 23 C58 12, 65 14, 58 24 Z" fill="#ef4444" />
      <circle cx="38" cy="45" r="7.5" fill="#ffffff" />
      <circle cx="38" cy="45" r="3" fill="#1e293b" />
      <circle cx="36.5" cy="43.5" r="0.8" fill="#ffffff" />
      <circle cx="62" cy="45" r="7.5" fill="#ffffff" />
      <circle cx="62" cy="45" r="3" fill="#1e293b" />
      <circle cx="60.5" cy="43.5" r="0.8" fill="#ffffff" />
      <path d="M50 48 Q58 54 50 66 Q42 54 50 48" fill="#eab308" class="mascot-beak" stroke="#ca8a04" stroke-width="1" />
      <circle cx="27" cy="52" r="4" fill="#ef4444" opacity="0.7"/>
      <circle cx="73" cy="52" r="4" fill="#2563eb" opacity="0.7"/>
    </svg>`
  },
  "United States": {
    name: 'Buddy',
    avatarDesc: 'A happy golden retriever puppy who encourages fitness, exercise classes, and health checks.',
    svg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="28" fill="#f59e0b" />
      <path d="M22 36 C10 40, 16 68, 25 62 Z" fill="#d97706" class="mascot-ear-l" />
      <path d="M78 36 C90 40, 84 68, 75 62 Z" fill="#d97706" class="mascot-ear-r" />
      <circle cx="38" cy="44" r="3.5" fill="#1e293b" />
      <circle cx="36.5" cy="42.5" r="0.8" fill="#ffffff" />
      <circle cx="62" cy="44" r="3.5" fill="#1e293b" />
      <circle cx="60.5" cy="42.5" r="0.8" fill="#ffffff" />
      <ellipse cx="50" cy="52" rx="7" ry="5.5" fill="#fef3c7" />
      <polygon points="46 49.5 54 49.5 50 53" fill="#1e293b" />
      <path d="M48 55 Q50 62 52 55" fill="#f43f5e" class="mascot-beak" />
      <circle cx="32" cy="51" r="3.5" fill="#fca5a5" opacity="0.6"/>
      <circle cx="68" cy="51" r="3.5" fill="#fca5a5" opacity="0.6"/>
    </svg>`
  },
  "United Arab Emirates": {
    name: 'Shaheen',
    avatarDesc: 'A cute desert falcon focused on hospitality, hydration checks, and keeping you safe.',
    svg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="28" fill="#d1d5db" />
      <path d="M28 32 Q50 25 72 32 L67 38 Q50 34 33 38 Z" fill="#78350f" />
      <circle cx="36" cy="46" r="3.5" fill="#1e293b" />
      <circle cx="36" cy="46" r="5.5" fill="none" stroke="#fbbf24" stroke-width="1.5" />
      <circle cx="64" cy="46" r="3.5" fill="#1e293b" />
      <circle cx="64" cy="46" r="5.5" fill="none" stroke="#fbbf24" stroke-width="1.5" />
      <path d="M50 48 L56 55 L50 61 L44 55 Z" fill="#fbbf24" class="mascot-beak" stroke="#d97706" stroke-width="1" />
      <circle cx="28" cy="52" r="2.5" fill="#fca5a5" opacity="0.6"/>
      <circle cx="72" cy="52" r="2.5" fill="#fca5a5" opacity="0.6"/>
    </svg>`
  }
};

// 2. CULTURE CONFIGURATIONS DATABASE
const countryConfigDatabase = {
  India: {
    themeClass: 'theme-india',
    cityName: 'Chennai',
    defaultLanguage: 'en',
    languages: [
      { code: 'ta', label: 'Tamil voice, respectful tone' },
      { code: 'hi', label: 'Hindi voice, warm tone' },
      { code: 'te', label: 'Telugu voice, affectionate tone' },
      { code: 'en', label: 'English voice, clear tone' }
    ],
    stateLanguages: {
      'Tamil Nadu': 'ta',
      'Maharashtra': 'hi',
      'Delhi': 'hi',
      'Andhra Pradesh': 'te'
    },
    locales: {
      ta: {
        greeting: 'காலை வணக்கம், லட்சுமி ஜி.',
        companionBlurb: 'உங்கள் காலை 8:00 மணி மெட்ஃபோர்மின் மருந்து தயாராக உள்ளது. காலை உணவுக்கு முன் மஞ்சள் கலந்த வெதுவெதுப்பான நீரை அருந்த பரிந்துரைக்கிறேன்.',
        localHelpline: 'ஆம்புலன்ஸ்: 108 · தேசிய அவசர எண்: 112',
        scamList: 'ஆதார் சரிபார்ப்பு கோரிக்கை, போலி மின்சார வெட்டு அச்சுறுத்தல்கள், எஸ்எம்எஸ் அதிர்ஷ்ட லாட்டரி உரிமைகோரல்கள்',
        norms: 'கூட்டுக் குடும்ப ஆதரவு, வெளிநாட்டில் வசிக்கும் பிள்ளைகள், உள்ளூர் அண்டை வீட்டார் உதவி',
        services: [
          { id: 'pharmacy', name: 'சென்னை சென்ட்ரல் பார்மசி', category: 'medical', blurb: 'விரைவான மருந்து நிரப்பல்கள் & வீட்டு விநியோகம்', price: '₹50 விநியோக கட்டணம்' },
          { id: 'groceries', name: 'சரவணா மளிகை உதவியாளர்', category: 'errand', blurb: 'நீரிழிவு நோயாளிகளுக்கான மளிகை கூடைகள்', price: '₹80/மணிநேரம்' },
          { id: 'transport', name: 'கேர்ரைடு ஆட்டோ உதவியாளர்', category: 'assisted', blurb: 'மருத்துவமனை வருகைகளுக்கு பாதுகாப்பான ஆட்டோ பயணம்', price: '₹120 நிலையான கட்டணம்' },
          { id: 'pension', name: 'ஆதார் & ஆயுள் சான்றிதழ் உதவியாளர்', category: 'assisted', blurb: 'வீட்டிலேயே பயோமெட்ரிக் ஆயுள் சான்றிதழ்', price: '₹200/வருகை' },
          { id: 'repairs', name: 'சரிபார்க்கப்பட்ட பிளம்பர் & கைவினைஞர்', category: 'repair', blurb: 'முதியோர் வீடுகளுக்கான பாதுகாப்பு சோதிக்கப்பட்ட பழுதுபார்ப்பு', price: '₹250 சேவை கட்டணம்' }
        ],
        features: [
          ['கூட்டுக் குடும்ப இணைப்பு', 'சென்னையில் உள்ள மகள் மீரா மற்றும் வெளிநாட்டில் வசிக்கும் மகன் அருணுடன் தானாக பகிரப்படும்.'],
          ['ஆன்மீக அட்டவணை', 'தியானப் பரிந்துரைகள், கோயில் நேர நினைவூட்டல்கள் மற்றும் விரதக் கண்காணிப்பாளர்கள்.'],
          ['டிஜிட்டல் கட்டண ஆதரவு', 'இரண்டாம் நிலை கட்டண ஆதரவுடன் உள்ளூர் UPI வாலட்டுகளுக்கு உகந்தது.'],
          ['அரசு சலுகைகள் டிராக்கர்', 'ஓய்வூதிய ஆயுள் சான்றிதழ்கள், மூத்த குடிமக்கள் வரி விலக்குகள் மற்றும் சுகாதார அட்டைகளுக்கான எச்சரிக்கைகள்.']
        ]
      },
      hi: {
        greeting: 'शुभप्रभात, लक्ष्मी जी।',
        companionBlurb: 'आपकी सुबह 8:00 बजे की मेटफॉर्मिन दवा तैयार है। मैं नाश्ते से पहले हल्दी के साथ गुनगुना पानी पीने की सलाह देता हूँ।',
        localHelpline: 'एम्बुलेंस: 108 · राष्ट्रीय आपातकालीन: 112',
        scamList: 'आधार सत्यापन अनुरोध, नकली बिजली कटौती की धमकी, एसएमएस लॉटरी के दावे',
        norms: 'संयुक्त परिवार सहायता, विदेश में बच्चे, सूक्ष्म-सर्कल पड़ोसी बैकअप',
        services: [
          { id: 'pharmacy', name: 'चेन्नई सेंट्रल फार्मेसी', category: 'medical', blurb: 'त्वरित दवा रिफिल और होम डिलीवरी', price: '₹50 डिलीवरी शुल्क' },
          { id: 'groceries', name: 'सरवाना किराना सहायक', category: 'errand', blurb: 'मधुमेह के अनुकूल किराना टोकरियाँ चुनी गईं', price: '₹80/घंटा' },
          { id: 'transport', name: 'केयरराइड ऑटो सहायक', category: 'assisted', blurb: 'क्लिनिक यात्राओं के लिए सुरक्षित ऑटो एस्कॉर्ट्स', price: '₹120 तय वापसी' },
          { id: 'pension', name: 'आधार और जीवन प्रमाण पत्र सहायक', category: 'assisted', blurb: 'घर पर बायोमेट्रिक जीवन प्रमाण पत्र', price: '₹200/यात्रा' },
          { id: 'repairs', name: 'सत्यापित प्लंबर और इलेक्ट्रीशियन', category: 'repair', blurb: 'वरिष्ठ नागरिकों के घरों के लिए सुरक्षा-जांच सहायता', price: '₹250 सेवा शुल्क' }
        ],
        features: [
          ['संयुक्त परिवार कनेक्शन', 'चेन्नई में बेटी मीरा और विदेश में रह रहे बेटे अरुण के साथ डैशबोर्ड साझा किया गया।'],
          ['आद्यात्मिक कार्यक्रम', 'भजन ध्यान सिफारिशें, मंदिर लाइव स्ट्रीम अनुस्मारक और उपवास ट्रैकर।'],
          ['डिजिटल भुगतान सहायता', 'द्वितीयक भुगतान सत्यापनकर्ता के साथ स्थानीय यूपीआई वॉलेट के लिए अनुकूलित।'],
          ['सरकारी लाभ ट्रैकर', 'पेंशन जीवन प्रमाणपत्र, वरिष्ठ नागरिक कर छूट और स्वास्थ्य कार्ड के लिए स्वचालित चेतावनी।']
        ]
      },
      te: {
        greeting: 'శుభోదయం, లక్ష్మి జి.',
        companionBlurb: 'మీ ఉదయం 8:00 గంటల మెట్‌ఫార్మిన్ మందు సిద్ధంగా ఉంది. అల్పాహారానికి ముందు పసుపుతో కూడిన గోరువెచ్చని నీటిని తీసుకోవాలని నేను సిఫార్సు చేస్తున్నాను.',
        localHelpline: 'అంబులెన్స్: 108 · జాతీయ అత్యవసర: 112',
        scamList: 'ఆధార్ ధృవీకరణ అభ్యర్థనలు, నకిలీ విద్యుత్ కట్ బెదిరింపులు, ఎస్ఎమ్ఎస్ లక్కీ లాటరీ క్లెయిమ్‌లు',
        norms: 'ఉమ్మడి కుటుంబ మద్దతు, విదేశాలలో పిల్లలు, పొరుగువారి సహాయం',
        services: [
          { id: 'pharmacy', name: 'చెన్నై సెంట్రల్ ఫార్మసీ', category: 'medical', blurb: 'త్వరిత ఔషధ రీఫిల్స్ & హోమ్ డెలివరీ', price: '₹50 డెలివరీ రుసుము' },
          { id: 'groceries', name: 'శరవణ కిరాణా సహాయకుడు', category: 'errand', blurb: 'డయాబెటిక్-స్నేహపూర్వక కిరాణా బుట్టలు', price: '₹80/గంటకు' },
          { id: 'transport', name: 'కేర్‌రైడ్ ఆటో అసిస్టెంట్', category: 'assisted', blurb: 'క్లినిక్ సందర్శనలకు సురక్షితమైన ఆటో ప్రయాణం', price: '₹120 స్థిర ధర' },
          { id: 'pension', name: 'ఆధార్ & లైఫ్ సర్టిఫికేట్ అసిస్టెంట్', category: 'assisted', blurb: 'ఇంట్లోనే బయోమెట్రిక్ లైఫ్ సర్టిఫికేట్', price: '₹200/సందర్శన' },
          { id: 'repairs', name: 'ధృవీకరించబడిన ప్లంబర్ & హ్యాండిమ్యాన్', category: 'repair', blurb: 'సీనియర్ల ఇళ్ల కోసం భద్రతా-తనిీ పనులు', price: '₹250 సర్వీస్ కాల్' }
        ],
        features: [
          ['ఉమ్మడి కుటుంబ కనెక్షన్', 'చెన్నైలోని కుమార్తె మీరా మరియు విదేశాలలో నివసిస్తున్న కుమారుడు అరుణ్‌తో ఆటోమేటిక్‌గా షేర్ చేయబడుతుంది.'],
          ['ఆధ్యాత్మిక ప్రణాళిక', 'భజన ధ్యాన సిఫార్సులు, ఆలయ సమయాల రిమైండర్‌లు మరియు ఉపవాస ట్రాకర్స్.'],
          ['డిజిటల్ చెల్లింపుల మద్దతు', 'ద్వితీయ చెల్లింపుల ధృవీకరణతో స్థానిక UPI వాలెట్‌ల కోసం ఆప్టిమైజ్ చేయబడింది.'],
          ['ప్రభుత్వ ప్రయోజనాల ట్రాకర్', 'పెన్షన్ లైఫ్ సర్టిఫికేట్లు, సీనియర్ సిటిజన్ పన్ను మినహాయింపులు మరియు ఆరోగ్య కార్డుల హెచ్చరికలు.']
        ]
      },
      en: {
        greeting: 'Good morning, Lakshmi ji.',
        companionBlurb: 'Your 8:00 AM Metformin medicine is ready. I recommend warm water with turmeric before breakfast.',
        localHelpline: 'Ambulance: 108 · National Emergency: 112',
        scamList: 'Aadhaar verification request, fake electricity cut threats, SMS luck lottery claims',
        norms: 'Joint family support, children abroad, micro-circle neighbor backup',
        services: [
          { id: 'pharmacy', name: 'Chennai Central Pharmacy', category: 'medical', blurb: 'Quick medicine refills & home deliveries', price: '₹50 delivery fee' },
          { id: 'groceries', name: 'Saravana Errand Helper', category: 'errand', blurb: 'Diabetic-friendly grocery baskets selected', price: '₹80/hour' },
          { id: 'transport', name: 'CareRide Auto Assistant', category: 'assisted', blurb: 'Safe three-wheeler escorts to clinic visits', price: '₹120 fixed return' },
          { id: 'pension', name: 'Aadhaar & Life Certificate Assistant', category: 'assisted', blurb: 'Biometric life certificates at home', price: '₹200/visit' },
          { id: 'repairs', name: 'Verified Plumber & Handyman', category: 'repair', blurb: 'Safety-checked repair help for senior homes', price: '₹250 service call' }
        ],
        features: [
          ['Joint Family Connection', 'Dashboard updates auto-shared with daughter Meera in Chennai and son Arun living abroad.'],
          ['Spiritual Schedule', 'Bhajan meditation recommendations, temple stream reminders, and fasting trackers.'],
          ['Digital Payments Support', 'Optimized for local UPI wallets with secondary payment sponsor verification.'],
          ['Government Benefits Tracker', 'Automatic warnings for pension life certifications, senior citizen tax exemptions, and health cards.']
        ]
      }
    }
  },
  Japan: {
    themeClass: 'theme-japan',
    cityName: 'Kyoto',
    defaultLanguage: 'ja',
    languages: [
      { code: 'ja', label: 'Japanese voice, formal tone' },
      { code: 'en', label: 'English voice, slow rhythm' }
    ],
    locales: {
      ja: {
        greeting: 'おはようございます、ラーマンさん。',
        companionBlurb: '朝のチェックインが完了しました。近所でラジオ体操がもうすぐ始まります。',
        localHelpline: '救急車: 119 · 警察: 110',
        scamList: 'オレオレ詐欺、架空料金請求詐欺、クリニックの偽請求書',
        norms: '高齢者の独り暮らし、地域の民生委員による見守り',
        services: [
          { id: 'pharmacy', name: '京都ウェルネス薬局', category: 'medical', blurb: '処方薬の配達とお薬カレンダーの整理', price: '¥300 配達料' },
          { id: 'groceries', name: '地元の農家野菜カゴ配達', category: 'errand', blurb: '伝統的な新鮮で減塩の旬の野菜カゴ', price: '¥500/配達' },
          { id: 'transport', name: 'シルバータクシー送迎', category: 'assisted', blurb: '病院の予約に合わせた乗降介助と車いすサポート', price: '¥1,500/回' },
          { id: 'pension', name: 'コミュニティセンター支援ヘルパー', category: 'assisted', blurb: '年金事務所での手続き支援と書類整理の同行', price: '¥1,000/時間' },
          { id: 'repairs', name: '畳と住まいの安全便利屋', category: 'repair', blurb: '転倒防止の手すり取り付けと住宅メンテナンス', price: '¥2,000 安全診断' }
        ],
        features: [
          ['独り暮らしのシニア支援', 'プライバシーを侵害することなく、現地の個人情報保護規則に準拠して安否を確認します。'],
          ['禅のペースと運動', '庭の散歩道、季節のお茶の時間、地域の体操タスクのリマインダー。'],
          ['災害・地震アラート', '地域の気象情報、診療所の休診情報、避難所マップへの直接リンク。']
        ]
      },
      en: {
        greeting: 'Ohayou gozaimasu, Raman-san.',
        companionBlurb: 'Your morning check-in is complete. Radio exercises (Rajio Taiso) are starting soon in your neighborhood.',
        localHelpline: 'Ambulance: 119 · Police: 110',
        scamList: 'Ore Ore sagi fake voice calls, local clinic bills fraud',
        norms: 'Independent senior living, neighborhood welfare council tracking',
        services: [
          { id: 'pharmacy', name: 'Kyoto Wellness Apothecary', category: 'medical', blurb: 'Prescription refills & medication calendar sorting', price: '¥300 delivery' },
          { id: 'groceries', name: 'Local Farmer Basket Delivery', category: 'errand', blurb: 'Traditional fresh low-salt seasonal food baskets', price: '¥500/delivery' },
          { id: 'transport', name: 'Silver Taxi Escort', category: 'assisted', blurb: 'Assisted boarding & wheelchair support for hospital appointments', price: '¥1,500/trip' },
          { id: 'pension', name: 'Community Center Support Helper', category: 'assisted', blurb: 'In-person pension office support and document sorting', price: '¥1,000/hour' },
          { id: 'repairs', name: 'Tatami & Home Safety Handyman', category: 'repair', blurb: 'Fall-prevention grab-bar fittings & maintenance', price: '¥2,000 safety audit' }
        ],
        features: [
          ['Independent Senior Focus', 'Calm presence loops checking in without invading privacy, complying with local privacy norms.'],
          ['Zen Pacing & Exercises', 'Reminders for daily garden walking paths, seasonal tea intervals, and community wellness tasks.'],
          ['Disaster & Earthquake Alerts', 'Direct localized weather alerts, clinic closures, and community safety shelter maps.']
        ]
      }
    }
  },
  'United States': {
    themeClass: 'theme-us',
    cityName: 'Boston',
    defaultLanguage: 'en',
    languages: [
      { code: 'en', label: 'English voice, active tone' },
      { code: 'es', label: 'Spanish voice, friendly tone' }
    ],
    locales: {
      en: {
        greeting: 'Good morning, Lakshmi.',
        companionBlurb: 'Your daily health dashboard is updated. You have a Silver Sneakers exercise class scheduled at 10:30 AM.',
        localHelpline: 'Emergency Services: 911 · Health Advisor: 211',
        scamList: 'IRS phone claims, Medicare card fraud, unverified package links',
        norms: 'Active retirement, adult children living remotely, Medicare coverage',
        services: [
          { id: 'pharmacy', name: 'CVS CareRefill Delivery', category: 'medical', blurb: 'Medicare-billed prescription delivery to your door', price: 'Billed to Insurance' },
          { id: 'groceries', name: 'Instacart Senior Shop Assist', category: 'errand', blurb: 'Verified shoppers selecting heart-healthy fresh food', price: '$5 delivery' },
          { id: 'transport', name: 'Uber Health Clinic Transport', category: 'assisted', blurb: 'Non-emergency transport directly to your doctor', price: '$15 flat-rate' },
          { id: 'pension', name: 'Medicare Navigation Helper', category: 'assisted', blurb: 'Assistance sorting medical bills, claims, and plans', price: '$25/hour' },
          { id: 'repairs', name: 'HomeSafe Repair Services', category: 'repair', blurb: 'Verified electrical & home ramp installers', price: 'Free assessment' }
        ],
        features: [
          ['Active Aging Lifestyle', 'Tracks daily movement trends, step quotas, water glasses, and active community center events.'],
          ['Insurance & Prescription Alerts', 'Medicare renewal deadlines, pharmacy refilling trackers, and clinic visit logs.'],
          ['Encouraging Peer Coach', 'Speaking voice acts as a motivating companion, guiding goals without babying.']
        ]
      },
      es: {
        greeting: 'Buenos días, Lakshmi.',
        companionBlurb: 'Su panel de salud diario está actualizado. Tiene una clase de ejercicio Silver Sneakers programada a las 10:30 AM.',
        localHelpline: 'Servicios de emergencia: 911 · Asesor médico: 211',
        scamList: 'Reclamaciones de impuestos IRS, fraude de tarjeta de Medicare, enlaces de paquetes no verificados',
        norms: 'Jubilación activa, hijos adultos viviendo lejos, cobertura de Medicare',
        services: [
          { id: 'pharmacy', name: 'CVS CareRefill Delivery', category: 'medical', blurb: 'Entrega de medicamentos facturada a Medicare', price: 'Facturado al seguro' },
          { id: 'groceries', name: 'Instacart Senior Shop Assist', category: 'errand', blurb: 'Compradores verificados seleccionando comida saludable', price: '$5 costo envío' },
          { id: 'transport', name: 'Uber Health Clinic Transport', category: 'assisted', blurb: 'Transporte médico no urgente para su doctor', price: '$15 tarifa plana' },
          { id: 'pension', name: 'Asistente de Navegación de Medicare', category: 'assisted', blurb: 'Ayuda para ordenar cuentas de hospital, reclamos y planes', price: '$25/hora' },
          { id: 'repairs', name: 'HomeSafe Servicios de Reparación', category: 'repair', blurb: 'Electricistas verificados e instalación de rampas', price: 'Evaluación gratis' }
        ],
        features: [
          ['Estilo de Vida Activo', 'Monitorea tendencias de movimiento diario, metas de pasos, agua y eventos comunitarios.'],
          ['Alertas de Seguro y Recetas', 'Fechas límite de renovación de Medicare, alertas de farmacia y visitas médicas.'],
          ['Entrenador de Apoyo Activo', 'La voz sintetizada actúa como un motivador y compañero diario.']
        ]
      }
    }
  },
  'United Arab Emirates': {
    themeClass: 'theme-uae',
    cityName: 'Dubai',
    defaultLanguage: 'en',
    languages: [
      { code: 'en', label: 'English voice, respectful tone' },
      { code: 'ar', label: 'Arabic voice, polite tone' },
      { code: 'hi', label: 'Hindi voice, polite tone' }
    ],
    locales: {
      en: {
        greeting: 'Sabah al-khair, Lakshmi ji.',
        companionBlurb: 'Hydration checks are active today due to high heat. Next family Majlis video call is scheduled at 4 PM.',
        localHelpline: 'Ambulance: 998 · Police: 999',
        scamList: 'AC maintenance deposit frauds, visa balance notifications',
        norms: 'Expat family payments sponsor, professional nurse assistance',
        services: [
          { id: 'pharmacy', name: 'Life Pharmacy Dubai Speed Refill', category: 'medical', blurb: 'Instant pharmacy deliveries via verified couriers', price: 'AED 10 fee' },
          { id: 'groceries', name: 'Oasis Fresh Market Escort', category: 'errand', blurb: 'Selection of fresh dates, organic foods, and essentials', price: 'AED 20/hour' },
          { id: 'transport', name: 'Careem Senior Ride Assistant', category: 'assisted', blurb: 'Luxurious, temperature-controlled taxi rides with assistance', price: 'AED 35 flat' },
          { id: 'pension', name: 'Amer Centre Document Helper', category: 'assisted', blurb: 'Visa paperwork, health cards, and residence renewals', price: 'AED 150/visit' },
          { id: 'repairs', name: 'AC & Home Cooling Safety Handyman', category: 'repair', blurb: 'AC health checks, air filtration upgrades, and repairs', price: 'AED 80 callout' }
        ],
        features: [
          ['Hospitable Care Tone', 'Warm, welcoming language utilizing polite Arabic and English honorifics.'],
          ['Hydration & Heat Safety Alerts', 'Monitors temperature index alerts, recommending indoor schedules and water breaks.'],
          ['Expat Connection Hub', 'Enables easy bill approvals and care tracking for children living in other countries.']
        ]
      },
      ar: {
        greeting: 'صباح الخير، لاكشمي جي.',
        companionBlurb: 'فحوصات الترطيب نشطة اليوم بسبب الحرارة العالية. مكالمة مجلس العائلة القادمة في الساعة 4 مساءً.',
        localHelpline: 'الإسعاف: 998 · الشرطة: 999',
        scamList: 'احتيال ودائع صيانة مكيفات الهواء، إشعارات رصيد التأشيرة المزيفة',
        norms: 'كفالة مدفوعات العائلة المغتربة، مساعدة ممرضة محترفة',
        services: [
          { id: 'pharmacy', name: 'Life Pharmacy توصيل صيدلية لايف السريع', category: 'medical', blurb: 'توصيل فوري للأدوية عبر شركات توصيل معتمدة', price: '10 دراهم رسوم' },
          { id: 'groceries', name: 'مرافق سوق الواحة الطازجة', category: 'errand', blurb: 'اختيار التمور الطازجة والأغذية العضوية والضروريات', price: '20 درهم/ساعة' },
          { id: 'transport', name: 'كريم مساعد مشاوير كبار السن', category: 'assisted', blurb: 'رحلات تاكسي فاخرة ومكيفة مع المساعدة', price: '35 درهم ثابت' },
          { id: 'pension', name: 'مساعد وثائق مركز آمر', category: 'assisted', blurb: 'معاملات التأشيرة، البطاقات الصحية وتجديد الإقامة', price: '150 درهم/زيارة' },
          { id: 'repairs', name: 'فني سلامة وصيانة التكييف والتبريد', category: 'repair', blurb: 'فحص التكييف، ترقية فلاتر الهواء والإصلاحات', price: '80 درهم رسوم الخدمة' }
        ],
        features: [
          ['لهجة رعاية مضيافة', 'لغة دافئة ومرحبة باستخدام ألقاب محترمة باللغتين العربية والإنجليزية.'],
          ['تنبيهات الترطيب وسلامة الحرارة', 'يراقب مؤشر الحرارة ويوصي بجداول داخلية وفترات راحة للمياه.'],
          ['مركز تواصل المغتربين', 'يمكّن الأبناء المغتربين من دفع الفواتير ومتابعة حالة الوالدين بسهولة.']
        ]
      },
      hi: {
        greeting: 'नमस्ते, लक्ष्मी जी।',
        companionBlurb: 'अत्यधिक गर्मी के कारण आज पानी पीने की जांच सक्रिय है। अगली पारिवारिक मजलिस वीडियो कॉल शाम 4 बजे निर्धारित है।',
        localHelpline: 'एम्बुलेंस: 998 · पुलिस: 999',
        scamList: 'एसी रखरखाव जमा धोखाधड़ी, वीजा शेष सूचनाएं',
        norms: 'प्रवासी पारिवारिक भुगतान प्रायोजक, पेशेवर नर्स सहायता',
        services: [
          { id: 'pharmacy', name: 'लाइफ फार्मेसी दुबई स्पीड रिफिल', category: 'medical', blurb: 'सत्यापित कोरियर के माध्यम से त्वरित दवा वितरण', price: '10 दरहम शुल्क' },
          { id: 'groceries', name: 'ओएसिस फ्रेश मार्केट एस्कॉर्ट', category: 'errand', blurb: 'ताजा खजूर, जैविक खाद्य पदार्थ और आवश्यक वस्तुओं का चयन', price: '20 दरहम/घंटा' },
          { id: 'transport', name: 'करीम सीनियर राइड असिस्टेंट', category: 'assisted', blurb: 'सहायता के साथ शानदार, वातानुकूलित टैक्सी की सवारी', price: '35 दरहम फ्लैट' },
          { id: 'pension', name: 'आमेर सेंटर दस्तावेज़ सहायक', category: 'assisted', blurb: 'वीजा कागजी कार्रवाई, स्वास्थ्य कार्ड और निवास नवीनीकरण', price: '150 दरहम/यात्रा' },
          { id: 'repairs', name: 'एसी और घरेलू शीतलन सुरक्षा तकनीशियन', category: 'repair', blurb: 'एसी स्वास्थ्य जांच, वायु निस्पंदन उन्नयन और मरम्मत', price: '80 दरहम विज़िट शुल्क' }
        ],
        features: [
          ['सत्कारपूर्ण देखभाल टोन', 'विनम्र अरबी और हिंदी सम्मानजनक शब्दों का उपयोग करते हुए गर्मजोशी भरा स्वागत।'],
          ['हाइड्रेशन और हीट सेफ्टी अलर्ट', 'तापमान सूचकांक की निगरानी, इनडोर कार्यक्रमों और पानी के ब्रेक की सिफारिश।'],
          ['प्रवासी कनेक्शन हब', 'विदेशों में रहने वाले बच्चों के लिए बिलों को आसानी से मंजूरी देने और देखभाल को ट्रैक करने की सुविधा।']
        ]
      }
    }
  },
  Brazil: {
    themeClass: 'theme-brazil',
    cityName: 'Rio de Janeiro',
    defaultLanguage: 'pt',
    languages: [
      { code: 'pt', label: 'Portuguese voice, warm tone' },
      { code: 'en', label: 'English voice, joyful rhythm' }
    ],
    locales: {
      pt: {
        greeting: 'Bom dia, Lakshmi.',
        companionBlurb: 'Tenha uma linda manhã. Seus amigos do grupo de caminhada da praia vão se reunir às 9h hoje.',
        localHelpline: 'Ambulância de Emergência: 192 · Bombeiros: 193',
        scamList: 'Alertas falsos de renovação do INSS, pedidos de dinheiro falsos no WhatsApp',
        norms: 'Apoio comunitário local, visitas da igreja, suporte familiar próximo',
        services: [
          { id: 'pharmacy', name: 'Drogaria Rio Entrega Sênior', category: 'medical', blurb: 'Entregas de farmácia local com cartões de desconto', price: 'R$ 5 taxa de entrega' },
          { id: 'groceries', name: 'Feira Orgânica Assistente', category: 'errand', blurb: 'Ajudante semanal para comprar frutas e vegetais frescos', price: 'R$ 15/hora' },
          { id: 'transport', name: 'Carona Segura Rio Sênior', category: 'assisted', blurb: 'Motoristas confiáveis do bairro para consultas hospitalares', price: 'R$ 20 fixo' },
          { id: 'pension', name: 'Consultor de Benefícios INSS', category: 'assisted', blurb: 'Ajuda para dar entrada em benefícios e prova de vida', price: 'R$ 40/sessão' },
          { id: 'repairs', name: 'Comunidade Reparos Seguros', category: 'repair', blurb: 'Ajudantes do bairro verificados para vazamentos e travas', price: 'R$ 50 visita' }
        ],
        features: [
          ['Socialização Ativa', 'Lembretes para aulas de alongamento, café no bairro e eventos comunitários.'],
          ['Rede de Apoio Familiar', 'Atualizações de status de bem-estar automáticas enviadas para os filhos pelo celular.'],
          ['Conexão com Posto de Saúde', 'Integração e agendamento de consultas com a unidade de saúde da família local.']
        ]
      },
      en: {
        greeting: 'Bom dia, Lakshmi.',
        companionBlurb: 'Have a beautiful morning. Your friends at the beach walking circle are meeting at 9:00 AM today.',
        localHelpline: 'Emergency Ambulance: 192 · Fire: 193',
        scamList: 'INSS benefits renewal alerts, fake family WhatsApp cash checks',
        norms: 'Neighborhood network checks, church circle, joint family support',
        services: [
          { id: 'pharmacy', name: 'Drogaria Rio Senior Delivery', category: 'medical', blurb: 'Local pharmacy deliveries with discount cards', price: 'R$ 5 delivery' },
          { id: 'groceries', name: 'Feira Organic Basket Assistant', category: 'errand', blurb: 'Weekly errand helper booking fresh fruits & vegetables', price: 'R$ 15/hour' },
          { id: 'transport', name: 'Safe Ride Rio Senior Auto', category: 'assisted', blurb: 'Trusted neighborhood drivers providing hospital visits', price: 'R$ 20 fixed' },
          { id: 'pension', name: 'INSS Benefits Advisor', category: 'assisted', blurb: 'Assistance filing government benefits and life proof', price: 'R$ 40/session' },
          { id: 'repairs', name: 'Local Community Safe Repairs', category: 'repair', blurb: 'Safety-vetted repair helpers for leaks and locks', price: 'R$ 50 callout' }
        ],
        features: [
          ['Vibrant Social Pacing', 'Reminders for samba fitness sessions, neighborhood coffee chats, and church festivals.'],
          ['Warm Family Network', 'Simple check-ins sharing activity status to children in a warm, collaborative way.'],
          ['Community Group Logs', 'Connecting to neighborhood senior groups, health centers, and beach clubs.']
        ]
      }
    }
  }
};

// 2b. TRANSLATION DICTIONARY FOR DATA-I18N AND SELECTORS
const translations = {
  en: {
    brand_name: "CareCircle Elite",
    brand_motto: "Don't worry. I am here.",
    nav_home: "Today's Hub",
    nav_culture: "Culture Engine",
    nav_family: "Family Circle",
    nav_companion: "AI Companion",
    nav_services: "Local Helpers",
    nav_earn: "Wisdom Income",
    nav_safety: "Safety Guardian",
    nav_health: "Health & Mood",
    nav_docs: "Secure Vault",
    nav_legacy: "Memory Stories",
    nav_planner: "Care Planner",
    nav_business: "Revenue Stack",
    nav_strategy: "Competitor Matrix",
    nav_innovation: "Platform Moat",
    btn_sos: "EMERGENCY SOS",
    header_role: "Senior Companion",
    header_status: "Status: Stable & Active",
    card_wearable_link: "Fall Sensor & Wearables Link",
    wearable_link_desc: "Connect your smartwatch, smart pillbox, or home movement sensors for automated alerts.",
    label_select_watch: "Select Smartwatch / Tracker",
    label_auto_sync: "Auto-Sync Wearable Vitals",
    wearable_syncing: "Syncing wearable signals...",
    btn_pair_device: "Pair Care Device",
    card_voice_scheduler: "Voice Schedule Assistant",
    voice_scheduler_desc: "Tap the microphone and say what to schedule, e.g. \"Remind me to take Vitamin C at 2:00 PM\" or \"Schedule clinic visit at 11:30 AM\".",
    voice_planner_ready: "Ready to listen..."
  },
  ja: {
    brand_name: "ケアサークル・エリート",
    brand_motto: "心配しないで。私はここにいます。",
    nav_home: "デイリーハブ",
    nav_culture: "カルチャーエンジン",
    nav_family: "ファミリーサークル",
    nav_companion: "AIパートナー",
    nav_services: "地元のサポーター",
    nav_earn: "知恵の収入",
    nav_safety: "安全ガーディアン",
    nav_health: "健康と気分",
    nav_docs: "セキュア保管庫",
    nav_legacy: "思い出の物語",
    nav_planner: "ケアプランナー",
    nav_business: "収益構造",
    nav_strategy: "競合マトリクス",
    nav_innovation: "プラットフォームの堀",
    btn_sos: "緊急SOS",
    header_role: "シニアコンパニオン",
    header_status: "状態: 安定・アクティブ",
    card_wearable_link: "転倒センサーとウェアラブル接続",
    wearable_link_desc: "スマートウォッチ、スマートピルボックス、または家庭内人感センサーを接続して自動アラートを受信します。",
    label_select_watch: "スマートウォッチ/トラッカーの選択",
    label_auto_sync: "バイタル自動同期",
    wearable_syncing: "ウェアラブル信号の同期中...",
    btn_pair_device: "デバイスをペアリング",
    card_voice_scheduler: "音声スケジュールアシスタント",
    voice_scheduler_desc: "マイクをタップしてスケジュールしたい内容を話してください（例：「午後2時にビタミンCを飲むリマインダーを追加して」または「午前11時30分にクリニックの予約を入れて」）。",
    voice_planner_ready: "音声入力準備完了..."
  },
  pt: {
    brand_name: "CareCircle Elite",
    brand_motto: "Não se preocupe. Estou aqui.",
    nav_home: "Central Diária",
    nav_culture: "Motor de Cultura",
    nav_family: "Círculo Familiar",
    nav_companion: "Companheiro de IA",
    nav_services: "Ajudantes Locais",
    nav_earn: "Renda da Sabedoria",
    nav_safety: "Guardião de Segurança",
    nav_health: "Saúde e Humor",
    nav_docs: "Cofre Seguro",
    nav_legacy: "Histórias de Memória",
    nav_planner: "Planejador de Cuidados",
    nav_business: "Pilha de Receitas",
    nav_strategy: "Matriz de Concorrentes",
    nav_innovation: "Fosso da Plataforma",
    btn_sos: "SOS DE EMERGÊNCIA",
    header_role: "Acompanhante Sênior",
    header_status: "Status: Estável & Ativo",
    card_wearable_link: "Sensor de Queda & Dispositivos",
    wearable_link_desc: "Conecte seu smartwatch, porta-comprimidos inteligente ou sensores residenciais para alertas automáticos.",
    label_select_watch: "Selecione Smartwatch / Rastreador",
    label_auto_sync: "Sincronização Automática",
    wearable_syncing: "Sincronizando sinais do wearable...",
    btn_pair_device: "Parear Dispositivo",
    card_voice_scheduler: "Assistente de Voz de Agenda",
    voice_scheduler_desc: "Toque no microfone e diga o que agendar, ex: \"Lembrar de tomar Vitamina C às 14h\" ou \"Agendar consulta às 11h30\".",
    voice_planner_ready: "Pronto para ouvir..."
  },
  ta: {
    brand_name: "கேர்கர்சிகிள் எலைட்",
    brand_motto: "கவலைப்படாதீர்கள். நான் இருக்கிறேன்.",
    nav_home: "இன்றைய மையம்",
    nav_culture: "கலாச்சார இயந்திரம்",
    nav_family: "குடும்ப வட்டம்",
    nav_companion: "AI துணைவன்",
    nav_services: "உள்ளூர் உதவியாளர்கள்",
    nav_earn: "அறிவு வருமானம்",
    nav_safety: "பாதுகாப்பு காவலர்",
    nav_health: "சுகாதாரம் & மனநிலை",
    nav_docs: "பாதுகாப்பான பெட்டகம்",
    nav_legacy: "நினைவு கதைகள்",
    nav_planner: "பராமரிப்பு திட்டமிடுபவர்",
    nav_business: "வருவாய் அடுக்கு",
    nav_strategy: "போட்டியாளர் அணி",
    nav_innovation: "தள அகழி",
    btn_sos: "அவசர SOS",
    header_role: "முதியோர் துணை",
    header_status: "நிலை: நிலையானது & செயலில் உள்ளது",
    card_wearable_link: "வீழ்ச்சி சென்சார் & அணியக்கூடியவை",
    wearable_link_desc: "தானியங்கி விழிப்பூட்டல்களுக்கு உங்கள் ஸ்மார்ட்வாட்ச், ஸ்மார்ட் மாத்திரை பெட்டி அல்லது வீட்டு அசைவு சென்சார்களை இணைக்கவும்.",
    label_select_watch: "ஸ்மார்ட்வாட்ச் / டிராக்கரைத் தேர்ந்தெடுக்கவும்",
    label_auto_sync: "தானியங்கி ஒத்திசைவு",
    wearable_syncing: "ஒத்திசைக்கிறது...",
    btn_pair_device: "சாதனத்தை இணைக்கவும்",
    card_voice_scheduler: "குரல் வழி திட்டமிடல் உதவியாளர்",
    voice_scheduler_desc: "மைக்ரோஃபோனைத் தட்டி என்ன திட்டமிட வேண்டும் என்று சொல்லுங்கள், எ.கா. \"மதியம் 2:00 மணிக்கு வைட்டமின் சி எடுக்க நினைவூட்டு\" அல்லது \"காலை 11:30 மணிக்கு கிளினிக் வருகையை திட்டமிடு\".",
    voice_planner_ready: "பேசத் தயார்..."
  },
  hi: {
    brand_name: "केयरसर्किल एलीट",
    brand_motto: "चिंता न करें। मैं यहाँ हूँ।",
    nav_home: "दैनिक केंद्र",
    nav_culture: "संस्कृति इंजन",
    nav_family: "पारिवारिक सर्कल",
    nav_companion: "AI साथी",
    nav_services: "स्थानीय सहायक",
    nav_earn: "ज्ञान से आय",
    nav_safety: "सुरक्षा रक्षक",
    nav_health: "स्वास्थ्य और मनोदशा",
    nav_docs: "सुरक्षित तिजोरी",
    nav_legacy: "स्मृति कहानियाँ",
    nav_planner: "देखभाल योजनाकार",
    nav_business: "राजस्व ढांचा",
    nav_strategy: "प्रतिस्पर्धी मैट्रिक्स",
    nav_innovation: "प्लेटफ़ॉर्म सुरक्षा खाई",
    btn_sos: "आपातकालीन एसओएस",
    header_role: "वरिष्ठ साथी",
    header_status: "स्थिति: स्थिर और सक्रिय",
    card_wearable_link: "फ़ॉल सेंसर और वियरेबल्स लिंक",
    wearable_link_desc: "स्वचालित अलर्ट के लिए अपने स्मार्टवॉच, स्मार्ट पिलबॉक्स या घरेलू मूवमेंट सेंसर को कनेक्ट करें।",
    label_select_watch: "स्मार्टवॉच / ट्रैकर चुनें",
    label_auto_sync: "ऑटो-सिंक वियरेबल वाइटल्स",
    wearable_syncing: "वियरेबल संकेतों को सिंक किया जा रहा है...",
    btn_pair_device: "डिवाइस को पेयर करें",
    card_voice_scheduler: "वॉयस शेड्यूल सहायक",
    voice_scheduler_desc: "माइक्रोफ़ोन टैप करें और बोलें कि क्या शेड्यूल करना है, जैसे \"दोपहर 2:00 बजे विटामिन सी लेने का अनुस्मारक जोड़ें\" या \"सुबह 11:30 बजे क्लिनिक विज़िट शेड्यूल करें\".",
    voice_planner_ready: "सुनने के लिए तैयार..."
  },
  te: {
    brand_name: "కేర్ సర్కిల్ ఎలైట్",
    brand_motto: "చింతించకండి. నేను ఉన్నాను.",
    nav_home: "నేటి కేంద్రం",
    nav_culture: "సంస్కృతి ఇంజిన్",
    nav_family: "కుటుంబ వలయం",
    nav_companion: "AI సహచరుడు",
    nav_services: "స్థానిక సహాయకులు",
    nav_earn: "జ్ఞాన ఆదాయం",
    nav_safety: "భద్రతా రక్షకుడు",
    nav_health: "ఆరోగ్యం & మూడ్",
    nav_docs: "భద్రతా లాకర్",
    nav_legacy: "జ్ఞాపకాల కథలు",
    nav_planner: "కేర్ ప్లానర్",
    nav_business: "ఆదాయాల స్టాక్",
    nav_strategy: "పోటీదారుల మాతృక",
    nav_innovation: "ప్లాట్‌ఫారమ్ ఖైదీ",
    btn_sos: "అత్యవసర SOS",
    header_role: "సీనియర్ తోడు",
    header_status: "స్థితి: స్థిరంగా & చురుకుగా",
    card_wearable_link: "ఫాల్ సెన్సార్ & వేరబుల్స్ లింక్",
    wearable_link_desc: "స్వయంచాలక హెచ్చరికల కోసం మీ స్మార్ట్‌వాచ్, స్మార్ట్ పిల్‌బాక్స్ లేదా ఇంటి మూవ్‌మెంట్ సెన్సార్లను కనెక్ట్ చేయండి.",
    label_select_watch: "స్మార్ట్‌వాచ్ / ట్రాకర్ ఎంచుకోండి",
    label_auto_sync: "ఆటో-సింక్ వేరబుల్ వైటల్స్",
    wearable_syncing: "సింక్ చేస్తున్నాము...",
    btn_pair_device: "పరికరాన్ని జత చేయండి",
    card_voice_scheduler: "వాయిస్ షెడ్యూల్ అసిస్టెంట్",
    voice_scheduler_desc: "మైక్రోఫోన్‌ను నొక్కి ఏమి షెడ్యూల్ చేయాలో చెప్పండి, ఉదా. \"మధ్యాహ్నం 2:00 గంటలకు విటమిన్ సి తీసుకోవాలని గుర్తుచేయి\" లేదా \"ఉదయం 11:30 గంటలకు క్లినిక్ సందర్శనను షెడ్యూல் చేయి\".",
    voice_planner_ready: "వినడానికి సిద్ధంగా ఉంది..."
  }
};

const selectorTranslations = {
  en: {
    '#home-view .badge-eyebrow': 'DAILY CONFIDENCE ASSISTANT',
    '#home-view .section-sub-title': 'Quick Call Family',
    '#speakGreetingBtn': 'Speak to me',
    '#markPillTaken': 'Mark Taken',
    '#snoozePill': 'Snooze 15m',
    '#triggerPillScanner': 'Verify Pill with Camera',
    '#sendBlessingBtn': 'Send Blessing & Voice Card',
    '#blessingText': 'Type or speak a daily blessing to your family...',
    '#saveCultureSettings': 'Re-Calibrate Companion Engine',
    '#indianStateContainer label': 'Indian State (For Localized Services & Language)',
    '#home-view article:nth-of-type(1) .card-title': 'Daily Pillbox',
    '#home-view article:nth-of-type(2) .card-title': "Today's Schedule",
    '#home-view article:nth-of-type(3) .card-title': 'Circle of Gratitude',
    '#home-view article:nth-of-type(4) .card-title': 'Care Confidence Tracker',
    '#home-view article:nth-of-type(5) .card-title': 'First-Responder Summary',
    '#home-view .feed-title': 'Latest family greetings',
    '#culture-view .view-title': 'Country & Culture Personalization Engine',
    '#culture-view .view-description': 'CareCircle adapts its visual skin, voice speech synthesis dialect, lifestyle schedules, emergency local numbers, and family roles depending on country selection.',
    '#family-view .view-title': 'Family Circle & Role Matrix',
    '#family-view .view-description': 'Your family circles, emergency contacts, and active escalation permissions.',
    '#services-view .view-title': 'Local Helper Marketplace',
    '#services-view .view-description': 'Book vetted services for transport, medicine refills, groceries, and home repairs.',
    '#earn-view .view-title': 'Wisdom Income Marketplace',
    '#earn-view .view-description': 'Age is wisdom. Monetize your knowledge of cooking, traditional crafts, language tutoring, or history storytelling. We manage booking schedules, payments, and safety.',
    '#safety-view .view-title': 'Safety Guardian & Scam Shield',
    '#safety-view .view-description': 'Protects you from telephone fraud, phishing links, and fake service calls.',
    '#health-view .view-title': 'Health & Mood Wellness',
    '#health-view .view-description': 'Monitor vitals, play relaxation sounds, tune into nostalgia radio, and log daily check-ins.',
    '#docs-view .view-title': 'Secure Vault (Document Locker)',
    '#docs-view .view-description': 'Secure storage for Aadhaar, pension cards, local health cards, insurance policies, and wills.',
    '#legacy-view .view-title': 'Memory Stories (Nostalgia Legacy)',
    '#legacy-view .view-description': 'Record and share your life stories, audio diaries, recipes, and family messages across generations.',
    '#planner-view .view-title': 'Daily Care Planner',
    '#planner-view .view-description': 'Configure reminders, appointments, and daily routines.',
    '#business-view .view-title': 'Revenue Stack',
    '#business-view .view-description': "Understand CareCircle's subscription packages and monetization strategy.",
    '#strategy-view .view-title': 'Competitor Matrix',
    '#strategy-view .view-description': 'How CareCircle stands out against standard elder care competitors.',
    '#innovation-view .view-title': 'Platform Moat',
    '#innovation-view .view-description': 'Our category-defining innovations that secure the business landscape.',
    '#morningJoyFeedTitle': '🌅 Morning Joy Feed',
    '#morningJoySpiritualNudgeHeader': '🕉️ Daily Spiritual Nudge',
    '#morningJoySpiritualQuote': '"Meditation brings peace to the mind. Start your day with a smile."',
    '#morningJoyCricketHeader': '🏏 Cricket Score',
    '#morningJoyCricketScore': 'IND vs AUS: IND 342/5',
    '#morningJoyCricketDetails': 'IND needs 3 runs off 4 balls! (Live)',
    '#morningJoyCinemaHeader': '🎬 Local Cinema News',
    '#morningJoyCinemaTitle': 'New teaser reaches 50 million views!',
    '#morningJoyCinemaDetails': 'Grand release scheduled next month.',
    '#startMyDayBtn': 'Start My Day & View Health Reminders'

  },
  ja: {
    '#home-view .badge-eyebrow': '信頼できる日常のアシスタント',
    '#home-view .section-sub-title': '家族へのクイックコール',
    '#speakGreetingBtn': '読み上げる',
    '#markPillTaken': '服用済みにする',
    '#snoozePill': '15分保留',
    '#triggerPillScanner': 'カメラで薬を確認',
    '#sendBlessingBtn': '感謝のメッセージを送信',
    '#blessingText': '家族への感謝の言葉を入力または音声入力してください...',
    '#saveCultureSettings': 'コンパニオンエンジンの再調整',
    '#indianStateContainer label': 'インドの州（現地のサービスと言語用）',
    '#home-view article:nth-of-type(1) .card-title': 'デイリーピルボックス',
    '#home-view article:nth-of-type(2) .card-title': '今日のスケジュール',
    '#home-view article:nth-of-type(3) .card-title': '感謝のサークル',
    '#home-view article:nth-of-type(4) .card-title': 'ケア信頼度トラッカー',
    '#home-view article:nth-of-type(5) .card-title': 'ファーストレスポンダー要約',
    '#home-view .feed-title': '家族からの最新メッセージ',
    '#culture-view .view-title': '国と文化のパーソナライズエンジン',
    '#culture-view .view-description': 'ケアサークルは、国の選択に応じて、視覚的なテーマ、音声合成の方言、生活スケジュール、地元の緊急連絡先、および家族の役割を適応させます。',
    '#family-view .view-title': 'ファミリーサークルと役割マトリクス',
    '#family-view .view-description': 'あなたの家族の連絡先、緊急連絡先、およびアクティブな権限管理。',
    '#services-view .view-title': 'ローカルヘルパー・マーケットプレイス',
    '#services-view .view-description': '交通機関、薬の詰め替え、食料品、および家の修理のために、審査済みのサービスを予約します。',
    '#earn-view .view-title': '知恵の収入マーケットプレイス',
    '#earn-view .view-description': '年齢は知恵です。料理、伝統工芸、語学指導、歴史の読み聞かせなどの知識を収益化しましょう。予約、支払い、安全を管理します。',
    '#safety-view .view-title': '安全ガーディアンと詐欺シールド',
    '#safety-view .view-description': '電話詐欺、フィッシングリンク、および偽のサービス呼び出しからあなたを守ります。',
    '#health-view .view-title': '健康と気分のウェルネス',
    '#health-view .view-description': 'バイタルを監視し、リラクゼーションサウンドを再生し、懐かしのラジオに合わせ、毎日のチェックインを記録します。',
    '#docs-view .view-title': 'セキュア保管庫（ドキュメントロッカー）',
    '#docs-view .view-description': '現地の保険証、クリニックの記録、年金書類、遺言書などを安全に保管します。',
    '#legacy-view .view-title': '思い出の物語（ノスタルジーレガシー）',
    '#legacy-view .view-description': 'あなたの人生の物語、オーディオ日記、レシピ、家族へのメッセージを記録し、世代を超えて共有しましょう。',
    '#planner-view .view-title': '毎日のケアプランナー',
    '#planner-view .view-description': 'リマインダー、予定、日常業務を設定します。',
    '#business-view .view-title': '収益スタック',
    '#business-view .view-description': 'ケアサークルのサブスクリプションパッケージと収益化戦略。',
    '#strategy-view .view-title': '競合マトリクス',
    '#strategy-view .view-description': 'ケアサークルが標準的な高齢者介護の競合他社とどのように異なるか。',
    '#innovation-view .view-title': 'プラットフォームの堀',
    '#innovation-view .view-description': 'ビジネスの展望を確保する、カテゴリーを定義する革新的な製品。',
    '#morningJoyFeedTitle': '🌅 モーニング・ジョイ・フィード',
    '#morningJoySpiritualNudgeHeader': '🕉️ 本日の精神的ヒント',
    '#morningJoySpiritualQuote': '"神を瞑想することは心に平安をもたらします。笑顔で一日を始めましょう。"',
    '#morningJoyCricketHeader': '🏏 クリケットスコア',
    '#morningJoyCricketScore': 'インド vs 豪州：インド 342/5',
    '#morningJoyCricketDetails': 'インドはあと4球で3点必要！ (ライブ)',
    '#morningJoyCinemaHeader': '🎬 映画ニュース',
    '#morningJoyCinemaTitle': '新作映画のティーザーが5,000万回再生を突破！',
    '#morningJoyCinemaDetails': '来月グランド公開予定。',
    '#startMyDayBtn': '一日を始めて健康リマインダーを表示する'
  },
  pt: {
    '#home-view .badge-eyebrow': 'ASSISTENTE DIÁRIO DE CONFIANÇA',
    '#home-view .section-sub-title': 'Ligar Rápido para Família',
    '#speakGreetingBtn': 'Fale comigo',
    '#markPillTaken': 'Marcar como Tomado',
    '#snoozePill': 'Soneca 15m',
    '#triggerPillScanner': 'Verificar Pílula com Câmera',
    '#sendBlessingBtn': 'Enviar Mensagem & Cartão de Voz',
    '#blessingText': 'Digite ou fale uma mensagem de carinho para sua família...',
    '#saveCultureSettings': 'Recalibrar Motor do Acompanhante',
    '#indianStateContainer label': 'Estado Indiano (Para Serviços Locais e Idioma)',
    '#home-view article:nth-of-type(1) .card-title': 'Porta-Comprimidos',
    '#home-view article:nth-of-type(2) .card-title': 'Agenda de Hoje',
    '#home-view article:nth-of-type(3) .card-title': 'Círculo de Gratidão',
    '#home-view article:nth-of-type(4) .card-title': 'Rastreador de Confiança',
    '#home-view article:nth-of-type(5) .card-title': 'Resumo Médico',
    '#home-view .feed-title': 'Mensagens recentes da família',
    '#culture-view .view-title': 'Motor de Personalização de Cultura',
    '#culture-view .view-description': 'O CareCircle adapta seu tema visual, dialeto de fala, rotinas diárias, telefones de emergência locais e papéis familiares dependendo do país selecionado.',
    '#family-view .view-title': 'Círculo Familiar & Matriz de Papéis',
    '#family-view .view-description': 'Seus contatos familiares, contatos de emergência e permissões de escalada ativas.',
    '#services-view .view-title': 'Mercado de Ajudantes Locais',
    '#services-view .view-description': 'Agende serviços verificados de transporte, remédios, compras e reparos domésticos.',
    '#earn-view .view-title': 'Mercado de Renda de Sabedoria',
    '#earn-view .view-description': 'Idade é sabedoria. Monetize seu conhecimento em culinária, artesanato tradicional, tutoria ou histórias. Cuidamos do agendamento, pagamentos e segurança.',
    '#safety-view .view-title': 'Guardião de Segurança & Escudo Anti-Golpe',
    '#safety-view .view-description': 'Protege você contra golpes telefônicos, links suspeitos e falsos técnicos.',
    '#health-view .view-title': 'Saúde & Bem-Estar de Humor',
    '#health-view .view-description': 'Monitore sinais vitais, toque sons relaxantes, sintonize a rádio da saudade e registre verificações diárias.',
    '#docs-view .view-title': 'Cofre Seguro (Documentos)',
    '#docs-view .view-description': 'Armazenamento seguro para carteira de identidade, cartões de saúde, previdência e testamentos.',
    '#legacy-view .view-title': 'Histórias de Memória (Legado)',
    '#legacy-view .view-description': 'Grave e compartilhe suas histórias de vida, receitas e mensagens familiares para as próximas gerações.',
    '#planner-view .view-title': 'Planejador de Cuidados Diários',
    '#planner-view .view-description': 'Configure lembretes, consultas e rotinas diárias.',
    '#business-view .view-title': 'Modelo de Negócios',
    '#business-view .view-description': 'Entenda os planos de assinatura do CareCircle e a estratégia de monetização.',
    '#strategy-view .view-title': 'Matriz de Concorrentes',
    '#strategy-view .view-description': 'Como o CareCircle se destaca das soluções comuns de cuidado a idosos.',
    '#innovation-view .view-title': 'Fosso de Inovação',
    '#innovation-view .view-description': 'Nossas inovações exclusivas que asseguram nossa liderança no mercado.',
    '#morningJoyFeedTitle': '🌅 Feed de Alegria Matinal',
    '#morningJoySpiritualNudgeHeader': '🕉️ Incentivo Espiritual Diário',
    '#morningJoySpiritualQuote': '"A meditação traz paz à mente. Comece o seu dia com um sorriso."',
    '#morningJoyCricketHeader': '🏏 Placar de Críquete',
    '#morningJoyCricketScore': 'IND vs AUS: IND 342/5',
    '#morningJoyCricketDetails': 'IND precisa de 3 corridas em 4 bolas! (Ao vivo)',
    '#morningJoyCinemaHeader': '🎬 Notícias de Cinema',
    '#morningJoyCinemaTitle': 'O novo teaser do filme atinge 50M de visualizações!',
    '#morningJoyCinemaDetails': 'Grande lançamento agendado para o próximo mês.',
    '#startMyDayBtn': 'Iniciar o meu dia e ver lembretes de saúde'
  },
  ta: {
    '#home-view .badge-eyebrow': 'தினசரி நம்பிக்கை உதவியாளர்',
    '#home-view .section-sub-title': 'குடும்பத்தினரை விரைவாக அழைக்கவும்',
    '#speakGreetingBtn': 'என்னிடம் பேசுங்கள்',
    '#markPillTaken': 'எடுத்துக்கொண்டேன்',
    '#snoozePill': '15 நிமிடம் தள்ளிவை',
    '#triggerPillScanner': 'கேமரா மூலம் சரிபார்க்கவும்',
    '#sendBlessingBtn': 'வாழ்த்து & குரல் அட்டையை அனுப்பவும்',
    '#blessingText': 'உங்கள் குடும்பத்திற்கு ஒரு தினசரி வாழ்த்தை தட்டச்சு செய்யவும் அல்லது பேசவும்...',
    '#saveCultureSettings': 'துணை இயந்திரத்தை மறுசீரமைக்கவும்',
    '#indianStateContainer label': 'இந்திய மாநிலம் (உள்ளூர் சேவைகள் மற்றும் மொழிக்கு)',
    '#home-view article:nth-of-type(1) .card-title': 'தினசரி மாத்திரை பெட்டி',
    '#home-view article:nth-of-type(2) .card-title': 'இன்றைய அட்டவணை',
    '#home-view article:nth-of-type(3) .card-title': 'நன்றியுணர்வு வட்டம்',
    '#home-view article:nth-of-type(4) .card-title': 'பராமரிப்பு நம்பிக்கை டிராக்கர்',
    '#home-view article:nth-of-type(5) .card-title': 'முதல் பதிலளிப்பவர் சுருக்கம்',
    '#home-view .feed-title': 'சமீபத்திய குடும்ப வாழ்த்துகள்',
    '#culture-view .view-title': 'நாடு மற்றும் கலாச்சார தனிப்பயனாக்குதல் இயந்திரம்',
    '#culture-view .view-description': 'தேர்ந்தெடுக்கப்பட்ட நாட்டைப் பொறுத்து கேர்கர்சிகிள் அதன் தோற்றம், குரல் உச்சரிப்பு, வாழ்க்கை முறை அட்டவணைகள், அவசர எண்கள் மற்றும் குடும்பப் பொறுப்புகளை மாற்றியமைக்கிறது.',
    '#family-view .view-title': 'குடும்ப வட்டம் & பொறுப்புகள்',
    '#family-view .view-description': 'உங்கள் குடும்ப தொடர்புகள், அவசர தொடர்புகள் மற்றும் செயலில் உள்ள அனுமதிகள்.',
    '#services-view .view-title': 'உள்ளூர் உதவியாளர் சந்தை',
    '#services-view .view-description': 'போக்குவரத்து, மருந்து நிரப்புதல், மளிகை பொருட்கள் மற்றும் வீட்டு பழுதுபார்ப்புகளுக்கான சேவைகளை முன்பதிவு செய்யுங்கள்.',
    '#earn-view .view-title': 'அறிவு வருமான சந்தை',
    '#earn-view .view-description': 'முதுமை என்பது அறிவு. சமையல், பாரம்பரிய கைவினைப்பொருட்கள், மொழி கற்பித்தல் அல்லது வரலாற்று கதை சொல்லல் பற்றிய உங்கள் அறிவை பணமாக்குங்கள்.',
    '#safety-view .view-title': 'பாதுகாப்பு காவலர் & மோசடி கவசம்',
    '#safety-view .view-description': 'தொலைபேசி மோசடி, போலி இணைப்புகள் மற்றும் போலி சேவை அழைப்புகளிலிருந்து உங்களைப் பாதுகாக்கிறது.',
    '#health-view .view-title': 'சுகாதாரம் & மனநிலை ஆரோக்கியம்',
    '#health-view .view-description': 'உடலில ஆரோக்கிய நிலையை கண்காணிக்கவும், தளர்வு ஒலிகளை இயக்கவும், பழைய ரேடியோவை கேட்கவும்.',
    '#docs-view .view-title': 'பாதுகாப்பான பெட்டகம் (ஆவண சேமிப்பு)',
    '#docs-view .view-description': 'ஆதார், ஓய்வூதிய அட்டைகள், உள்ளூர் சுகாதார அட்டைகள் மற்றும் காப்பீட்டு ஆவணங்களின் பாதுகாப்பான சேமிப்பு.',
    '#legacy-view .view-title': 'நினைவு கதைகள் (தலைமுறை மரபு)',
    '#legacy-view .view-description': 'உங்கள் வாழ்க்கை கதைகள், சமையல் குறிப்புகள் மற்றும் குடும்ப செய்திகளை பதிவு செய்து தலைமுறைகளாக பகிர்ந்து கொள்ளுங்கள்.',
    '#planner-view .view-title': 'தினசரி பராமரிப்பு திட்டமிடுபவர்',
    '#planner-view .view-description': 'நினைவூட்டல்கள், நியமனங்கள் மற்றும் தினசரி நடைமுறைகளை உள்ளமைக்கவும்.',
    '#business-view .view-title': 'வருவாய் அடுக்கு',
    '#business-view .view-description': 'கேர்கர்சிகிளின் சந்தா தொகுப்புகள் மற்றும் பணமாக்குதல் உத்திகளைப் புரிந்து கொள்ளுங்கள்.',
    '#strategy-view .view-title': 'போட்டியாளர் அணி',
    '#strategy-view .view-description': 'நிலையான முதியோர் பராமரிப்பு போட்டியாளர்களுக்கு எதிராக கேர்கர்சிகிள் எவ்வாறு தனித்து நிற்கிறது.',
    '#innovation-view .view-title': 'தள அகழி (புதுமைப் பாதுகாப்பு)',
    '#innovation-view .view-description': 'வணிக நிலப்பரப்பைப் பாதுகாக்கும் எங்களின் புதுமையான அம்சங்கள்.',
    '#morningJoyFeedTitle': '🌅 காலை மகிழ்ச்சி செய்திகள்',
    '#morningJoySpiritualNudgeHeader': '🕉️ தினசரி ஆன்மிக ஊக்கம்',
    '#morningJoySpiritualQuote': '"தியானம் மனதில் அமைதியை கொண்டுவருகிறது. ஒரு புன்னகையுடன் உங்கள் நாளைத் தொடங்குங்கள்."',
    '#morningJoyCricketHeader': '🏏 கிரிக்கெட் மதிப்பெண்',
    '#morningJoyCricketScore': 'IND எதிர் AUS: IND 342/5',
    '#morningJoyCricketDetails': 'IND 4 பந்துகளில் 3 ரன்கள் தேவை! (நேரடி)',
    '#morningJoyCinemaHeader': '🎬 உள்ளூர் திரைப்பட செய்திகள்',
    '#morningJoyCinemaTitle': 'புதிய டீசர் 5 கோடி பார்வைகளை எட்டியது!',
    '#morningJoyCinemaDetails': 'அடுத்த மாதம் பிரம்மாண்ட வெளியீடு திட்டமிடப்பட்டுள்ளது.',
    '#startMyDayBtn': 'என் நாளைத் தொடங்கு மற்றும் சுகாதார நினைவூட்டல்களை காண்க'

  },
  hi: {
    '#home-view .badge-eyebrow': 'दैनिक आत्मविश्वास सहायक',
    '#home-view .section-sub-title': 'परिवार को त्वरित कॉल',
    '#speakGreetingBtn': 'मुझसे बात करें',
    '#markPillTaken': 'ले ली गई',
    '#snoozePill': '15 मिनट स्नूज़',
    '#triggerPillScanner': 'कैमरे से दवा जांचें',
    '#sendBlessingBtn': 'आशीर्वाद और वॉयस कार्ड भेजें',
    '#blessingText': 'अपने परिवार के लिए एक दैनिक आशीर्वाद लिखें या बोलें...',
    '#saveCultureSettings': 'साथी इंजन को पुन: कैलिब्रेट करें',
    '#indianStateContainer label': 'भारतीय राज्य (स्थानीय सेवाओं और भाषा के लिए)',
    '#home-view article:nth-of-type(1) .card-title': 'दैनिक दवा बॉक्स',
    '#home-view article:nth-of-type(2) .card-title': 'आज का कार्यक्रम',
    '#home-view article:nth-of-type(3) .card-title': 'आभार चक्र',
    '#home-view article:nth-of-type(4) .card-title': 'देखभाल विश्वास ट्रैकर',
    '#home-view article:nth-of-type(5) .card-title': 'प्राथमिक प्रतिक्रिया सारांश',
    '#home-view .feed-title': 'नवीनतम पारिवारिक संदेश',
    '#culture-view .view-title': 'देश और संस्कृति वैयक्तिकरण इंजन',
    '#culture-view .view-description': 'केयरसर्किल देश के चयन के आधार पर अपनी दृश्य थीम, वॉयस स्पीच सिंथेसिस बोली, जीवन शैली शेड्यूल, आपातकालीन नंबर और पारिवारिक भूमिकाओं को अनुकूलित करता है।',
    '#family-view .view-title': 'पारिवारिक सर्कल और भूमिका मैट्रिक्स',
    '#family-view .view-description': 'आपके पारिवारिक संपर्क, आपातकालीन संपर्क और सक्रिय अनुमति अनुमतियां।',
    '#services-view .view-title': 'स्थानीय सहायक बाज़ार',
    '#services-view .view-description': 'परिवहन, दवा रिफिल, किराना और घर की मरम्मत के लिए सत्यापित सेवाओं को बुक करें।',
    '#earn-view .view-title': 'ज्ञान से आय बाज़ार',
    '#earn-view .view-description': 'उम्र ही ज्ञान है। खाना पकाने, पारंपरिक शिल्प, भाषा शिक्षण, या कहानी सुनाने के अपने ज्ञान का मुद्रीकरण करें।',
    '#safety-view .view-title': 'सुरक्षा रक्षक और घोटाला संरक्षण',
    '#safety-view .view-description': 'आपको टेलीफोन धोखाधड़ी, फ़िशिंग लिंक और नकली सेवा कॉल से बचाता है।',
    '#health-view .view-title': 'स्वास्थ्य और मनोदशा कल्याण',
    '#health-view .view-description': 'महत्वपूर्ण स्वास्थ्य संकेतकों की निगरानी करें, विश्राम ध्वनियाँ बजाएं, पुराना रेडियो सुनें और दैनिक चेक-इन दर्ज करें।',
    '#docs-view .view-title': 'सुरक्षित तिजोरी (दस्तावेज़ लॉकर)',
    '#docs-view .view-description': 'आधार, पेंशन कार्ड, स्थानीय स्वास्थ्य कार्ड, बीमा पॉलिसियों और वसीयत का सुरक्षित भंडारण।',
    '#legacy-view .view-title': 'स्मृति कहानियाँ (पुरानी यादें)',
    '#legacy-view .view-description': 'अपने जीवन की कहानियों, ऑडियो डायरियों, व्यंजनों और पारिवारिक संदेशों को रिकॉर्ड करें और पीढ़ियों तक साझा करें।',
    '#planner-view .view-title': 'दैनिक देखभाल योजनाकार',
    '#planner-view .view-description': 'अनुस्मारक, नियुक्तियों और दैनिक दिनचर्या को कॉन्फ़िगर करें।',
    '#business-view .view-title': 'राजस्व ढांचा',
    '#business-view .view-description': 'केयरसर्किल के सदस्यता पैकेज और मुद्रीकरण रणनीति को समझें।',
    '#strategy-view .view-title': 'प्रतिस्पर्धी मैट्रिक्स',
    '#strategy-view .view-description': 'मानक बुजुर्ग देखभाल प्रतिस्पर्धियों के मुकाबले केयरसर्किल कैसे बेहतर है।',
    '#innovation-view .view-title': 'प्लेटफ़ॉर्म सुरक्षा खाई',
    '#innovation-view .view-description': 'हमारी श्रेणि-परिभाषित नवाचार जो व्यावसायिक भविष्य को सुरक्षित करते हैं।',
    '#morningJoyFeedTitle': '🌅 प्रभात आनंद फीड',
    '#morningJoySpiritualNudgeHeader': '🕉️ दैनिक आध्यात्मिक प्रेरणा',
    '#morningJoySpiritualQuote': '"परमात्मा का ध्यान करने से मन को शांति मिलती है। अपने दिन की शुरुआत एक मुस्कान के साथ करें।"',
    '#morningJoyCricketHeader': '🏏 क्रिकेट स्कोर',
    '#morningJoyCricketScore': 'भारत बनाम ऑस्ट्रेलिया: भारत 342/5',
    '#morningJoyCricketDetails': 'भारत को 4 गेंदों में 3 रन चाहिए! (लाइव)',
    '#morningJoyCinemaHeader': '🎬 सिनेमा समाचार',
    '#morningJoyCinemaTitle': 'नया फिल्म टीज़र 50M व्यूज को पार कर गया!',
    '#morningJoyCinemaDetails': 'अगले महीने भव्य रिलीज होने वाली है।',
    '#startMyDayBtn': 'अपने दिन की शुरुआत करें और स्वास्थ्य अनुस्मारक देखें'

  },
  te: {
    '#home-view .badge-eyebrow': 'రోజువారీ నిశ్చయ సహాయకుడు',
    '#home-view .section-sub-title': 'కుటుంబానికి త్వరిత కాల్',
    '#speakGreetingBtn': 'నాతో మాట్లాడండి',
    '#markPillTaken': 'తీసుకున్నాను',
    '#snoozePill': '15ని. స్నూజ్',
    '#triggerPillScanner': 'కెమెరాతో మాత్రను సరిచూడండి',
    '#sendBlessingBtn': 'ఆశీర్వాదం & వాయిస్ కార్డ్ పంపండి',
    '#blessingText': 'మీ కుటుంబానికి రోజువారీ ఆశీర్వాదం రాయండి లేదా మాట్లాడండి...',
    '#saveCultureSettings': 'సహాయక ఇంజిన్ పునఃసమీకరించు',
    '#indianStateContainer label': 'భారతీయ రాష్ట్రం (స్థానిక సేవలు మరియు భాష కోసం)',
    '#home-view article:nth-of-type(1) .card-title': 'రోజువారీ మందుల పెట్టె',
    '#home-view article:nth-of-type(2) .card-title': 'నేటి కార్యక్రమము',
    '#home-view article:nth-of-type(3) .card-title': 'కృతజ్ఞత వలయం',
    '#home-view article:nth-of-type(4) .card-title': 'కేర్ కాన్ఫిడెన్స్ ట్రాకర్',
    '#home-view article:nth-of-type(5) .card-title': 'అత్యవసర సమాచార సారాంశం',
    '#home-view .feed-title': 'ఇటీవలి కుటుంబ సందేశాలు',
    '#culture-view .view-title': 'దేశం & సంస్కృతి వ్యక్తిగతీకరణ ఇంజిన్',
    '#culture-view .view-description': 'కేర్ సర్కిల్ దేశం ఎంపిక ఆధారంగా దాని థీమ్స్, వాయిస్ స్పీచ్ యాస, దినచర్య షెడ్యూల్స్, అత్యవసర నంబర్లు మరియు కుటుంబ పాత్రలను మారుస్తుంది.',
    '#family-view .view-title': 'కుటుంబ వలయం & పాత్రల పట్టిక',
    '#family-view .view-description': 'మీ కుటుంబ పరిచయాలు, అత్యవసర పరిచయాలు మరియు క్రియాశీల అధికారాలు.',
    '#services-view .view-title': 'స్థానిక సహాయకుల మార్కెట్',
    '#services-view .view-description': 'రవాణా, మందుల రీఫిల్స్, నిత్యావసరాలు మరియు ఇంటి మరమ్మతుల కోసం సహాయకులను బుక్ చేసుకోండి.',
    '#earn-view .view-title': 'జ్ఞాన ఆదాయ మార్కెట్',
    '#earn-view .view-description': 'వయస్సు జ్ఞానంతో సమానం. వంట, సాంప్రదాయ కళలు, బోధన లేదా కథలు చెప్పడంలో మీ జ్ఞానాన్ని ఉపయోగించి ఆదాయాన్ని పొందండి.',
    '#safety-view .view-title': 'రక్షకుడు & మోసాల నిరోధి',
    '#safety-view .view-description': 'ఫోన్ మోసాలు, నకిలీ లింకులు మరియు మోసపూరిత సేవా కాల్స్ నుండి మిమ్మల్ని రక్షిస్తుంది.',
    '#health-view .view-title': 'ఆరోగ్యం & మానసిk స్థితి',
    '#health-view .view-description': 'ఆరోగ్య సూచికలను పర్యవేక్షించండి, ప్రశాంతమైన శబ్దాలను వినండి, పాత రేディオను వినండి.',
    '#docs-view .view-title': 'భద్రతా లాకర్ (పత్రాలు)',
    '#docs-view .view-description': 'ఆధార్, పెన్షన్ కార్డులు, ఆరోగ్య కార్డులు, బీమా పత్రాలు మరియు విల్లు పత్రాల భద్రతా నిల్వ.',
    '#legacy-view .view-title': 'జ్ఞాపకాల కథలు (వారసత్వం)',
    '#legacy-view .view-description': 'మీరి జీవిత కథలు, వంటల పద్ధతులు మరియు కుటుంబ సందేశాలను రికార్డ్ చేసి తదుపరి తరాలతో పంచుకోండి.',
    '#planner-view .view-title': 'కేర్ ప్లానర్',
    '#planner-view .view-description': 'రిమైండర్లు, అపాయింట్‌మెంట్లు మరియు దినచర్యలను అమర్చుకోండి.',
    '#business-view .view-title': 'ఆదాయాల స్టాక్',
    '#business-view .view-description': 'కేర్ సర్కిల్ సబ్‌స్క్రిప్షన్ ప్యాకేజీలు మరియు ఆదాయ మార్గాలను అర్థం చేసుకోండి.',
    '#strategy-view .view-title': 'పోటీదారుల పట్టిక',
    '#strategy-view .view-description': 'సాధారణ సీనియర్ కేర్ సేవల కంటే కేర్ సర్కిల్ ఎలా భిన్నంగా ఉంటుంది.',
    '#innovation-view .view-title': 'రక్షణ కవచం',
    '#innovation-view .view-description': 'మా ప్రత్యేక ఆవిష్కరణలు మా వ్యాపారాన్ని స్థిరపరుస్తాయి.',
    '#morningJoyFeedTitle': '🌅 ఉదయం ఆనంద ఫీడ్',
    '#morningJoySpiritualNudgeHeader': '🕉️ రోజువారీ ఆధ్యాత్మిక స్ఫూర్తి',
    '#morningJoySpiritualQuote': '"పరమాత్మను ధ్యానించడం వలన మనస్సు ప్రశాంతంగా ఉంటుంది. ఈ రోజును చిరునవ్వుతో ప్రారంభించండి."',
    '#morningJoyCricketHeader': '🏏 క్రికెట్ స్కోర్',
    '#morningJoyCricketScore': 'భారత్ vs ఆస్ట్రేలియా: భారత్ 342/5',
    '#morningJoyCricketDetails': 'భారత్‌కు 4 బంతుల్లో 3 పరుగులు కావాలి! (లైవ్)',
    '#morningJoyCinemaHeader': '🎬 తెలుగు సినిమా వార్తలు',
    '#morningJoyCinemaTitle': 'కొత్త టీజర్ 5 కోట్ల వ్యూస్‌ని చేరుకుంది!',
    '#morningJoyCinemaDetails': 'వచ్చే నెల గ్రాండ్ రిలీజ్ ప్లాన్ చేయబడింది.',
    '#startMyDayBtn': 'నా రోజు ప్రారంభించండి మరియు ఆరోగ్య రిమైండర్లు చూడండి'

  }
};

// 3. VOICE SPEECH SYNTHESIS & RECOGNITION UTILITIES
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let speechMuted = false;
let synthesisEngine = window.speechSynthesis;
let speechRecognizer = null;

function speakText(text, context = 'advice') {
  if (speechMuted || !synthesisEngine) return;
  synthesisEngine.cancel(); // Stop any currently speaking voice
  
  const langCode = document.documentElement.lang || 'en';
  let translatedText = text;

  // Dictionary of spoken strings translated from English to target languages
  const speechTranslations = {
    ja: {
      "Warning. Activating emergency SOS in five seconds. Tap cancel button to stop.": "警告。5秒後に緊急SOSを起動します。キャンセルするにはボタンをタップしてください。",
      "Emergency alarm canceled.": "緊急アラームがキャンセルされました。",
      "Emergency alert broadcasting. Alerts dispatched to family and ambulance rails.": "緊急警報を送信中。家族と救急隊にアラームを発送しました。",
      "Emergency terminated. You are marked as stable.": "緊急状態が解除されました。安定状態と記録されました。",
      "Medicine recorded as taken. I will let your family know.": "薬の服用が記録されました。ご家族に知らせます。",
      "Pill scanner camera activated. Please place your pill on your palm and hold it in front of the camera.": "薬スキャンカメラが起動しました。手のひらに薬を置き、カメラの前にかざしてください。",
      "Scanning your pill. Hold still.": "スキャンしています。そのまま動かさないでください。",
      "Pill identified as Metformin 500mg. This matches your scheduled morning dose. Tap green button to confirm.": "薬はメトホルミン500mgと確認されました。スケジュールされた朝の分と一致します。確認するには緑のボタンをタップしてください。",
      "Pill identified as Amlodipine 5mg. This dose is scheduled for later in the evening and is not due now.": "薬はアムロジピン5mgと確認されました。この薬は夕方のスケジュールであり、今は服用の時間ではありません。",
      "Warning! Unrecognized pill. This medicine does not match your active care prescriptions. Do not take it.": "警告！認識できない薬です。処方箋に登録されていません。服用しないでください。",
      "Snoozing medication reminder for 15 minutes.": "薬のリマインダーを15分保留します。",
      "Voice helper active. Please tell me a command.": "音声ヘルパーが起動しました。コマンドを話してください。",
      "Radio muted.": "ラジオをミュートしました。",
      "Command not recognized. Please try saying SOS or Medicine Taken.": "コマンドが認識されませんでした。SOS または 薬を飲んだ と言ってみてください。",
      "Welcome back! I have notified your family that you are home safely.": "おかえりなさい！ご家族に無事帰宅したことを通知しました。"

    },
    pt: {
      "Warning. Activating emergency SOS in five seconds. Tap cancel button to stop.": "Aviso. Ativando SOS de emergência em cinco segundos. Toque no botão cancelar para parar.",
      "Emergency alarm canceled.": "Alarme de emergência cancelado.",
      "Emergency alert broadcasting. Alerts dispatched to family and ambulance rails.": "Transmitindo alerta de emergência. Alertas enviados para a família e ambulância.",
      "Emergency terminated. You are marked as stable.": "Emergência encerrada. Você foi marcado como estável.",
      "Medicine recorded as taken. I will let your family know.": "Medicamento registrado como tomado. Vou avisar sua família.",
      "Pill scanner camera activated. Please place your pill on your palm and hold it in front of the camera.": "Câmera do scanner de pílula ativada. Coloque a pílula na palma da mão e segure-a na frente da câmera.",
      "Scanning your pill. Hold still.": "Escaneando a pílula. Fique parado.",
      "Pill identified as Metformin 500mg. This matches your scheduled morning dose. Tap green button to confirm.": "Pílula identificada como Metformina 500mg. Combina com a sua dose da manhã agendada. Toque no botão verde para confirmar.",
      "Pill identified as Amlodipine 5mg. This dose is scheduled for later in the evening and is not due now.": "Pílula identificada como Amlodipina 5mg. Esta dose está agendada para mais tarde e não é devida agora.",
      "Warning! Unrecognized pill. This medicine does not match your active care prescriptions. Do not take it.": "Aviso! Pílula não reconhecida. Este medicamento não corresponde às suas prescrições ativas. Não tome.",
      "Snoozing medication reminder for 15 minutes.": "Adiando o lembrete de medicação por 15 minutos.",
      "Voice helper active. Please tell me a command.": "Assistente de voz ativo. Por favor, diga um comando.",
      "Radio muted.": "Rádio mudo.",
      "Command not recognized. Please try saying SOS or Medicine Taken.": "Comando não reconhecido. Por favor, tente dizer SOS ou Remédio Tomado.",
      "Welcome back! I have notified your family that you are home safely.": "Bem-vindo de volta! Eu notifiquei sua família que você está em casa em segurança."
    },
    ta: {
      "Warning. Activating emergency SOS in five seconds. Tap cancel button to stop.": "எச்சரிக்கை. ஐந்து வினாடிகளில் அவசர SOS ஐ செயல்படுத்துகிறது. நிறுத்த ரத்து பொத்தானைத் தட்டவும்.",
      "Emergency alarm canceled.": "அவசர அலாரம் ரத்து செய்யப்பட்டது.",
      "Emergency alert broadcasting. Alerts dispatched to family and ambulance rails.": "அவசர எச்சரிக்கை ஒளிபரப்பப்படுகிறது. குடும்பத்தினருக்கும் ஆம்புலன்ஸுக்கும் எச்சரிக்கைகள் அனுப்பப்பட்டன.",
      "Emergency terminated. You are marked as stable.": "அவசரம் முடிவுக்கு வந்தது. நீங்கள் நலமாக இருப்பதாக பதிவு செய்யப்பட்டுள்ளது.",
      "Medicine recorded as taken. I will let your family know.": "மருந்து எடுத்துக்கொண்டதாக பதிவு செய்யப்பட்டது. உங்கள் குடும்பத்தினருக்கு தெரிவிக்கிறேன்.",
      "Pill scanner camera activated. Please place your pill on your palm and hold it in front of the camera.": "மாத்திரை ஸ்கேனர் கேமரா இயக்கப்பட்டது. உங்கள் மாத்திரையை உள்ளங்கையில் வைத்து கேமராவின் முன் காட்டவும்.",
      "Scanning your pill. Hold still.": "உங்கள் மாத்திரையை ஸ்கேன் செய்கிறது. அசையாமல் இருங்கள்.",
      "Pill identified as Metformin 500mg. This matches your scheduled morning dose. Tap green button to confirm.": "மெட்ஃபோர்மின் 500mg என மாத்திரை கண்டறியப்பட்டது. இது உங்கள் காலை டோஸுடன் ஒத்துப்போகிறது. உறுதிப்படுத்த பச்சை நிற பொத்தானைத் தட்டவும்.",
      "Pill identified as Amlodipine 5mg. This dose is scheduled for later in the evening and is not due now.": "அம்லோடிபைன் 5mg என மாத்திரை கண்டறியப்பட்டது. இந்த டோஸ் மாலையில் திட்டமிடப்பட்டுள்ளது, இப்போது எடுக்க வேண்டிய அவசியமில்லை.",
      "Warning! Unrecognized pill. This medicine does not match your active care prescriptions. Do not take it.": "எச்சரிக்கை! அடையாளம் தெரியாத மாத்திரை. இது உங்கள் மருந்துச் சீட்டுடன் ஒத்துப்போகவில்லை. தயவுசெய்து இதை உட்கொள்ள வேண்டாம்.",
      "Snoozing medication reminder for 15 minutes.": "மருந்து நினைவூட்டல் 15 நிமிடங்களுக்கு தள்ளிவைக்கப்படுகிறது.",
      "Voice helper active. Please tell me a command.": "குரல் உதவியாளர் செயலில் உள்ளார். ஒரு கட்டளையைச் சொல்லுங்கள்.",
      "Radio muted.": "ரேடியோ ஒலியடக்கப்பட்டது.",
      "Command not recognized. Please try saying SOS or Medicine Taken.": "கட்டளை அங்கீகரிக்கப்படவில்லை. SOS அல்லது மருந்து எடுத்துக்கொண்டேன் என்று கூறவும்.",
      "Welcome back! I have notified your family that you are home safely.": "மீண்டும் வருக! நீங்கள் பத்திரமாக வீடு திரும்பியதை உங்கள் குடும்பத்தினருக்கு தெரிவித்துள்ளேன்."
    },
    hi: {
      "Warning. Activating emergency SOS in five seconds. Tap cancel button to stop.": "चेतावनी। पांच सेकंड में आपातकालीन एसओएस सक्रिय हो रहा है। रोकने के लिए रद्द करें बटन दबाएं।",
      "Emergency alarm canceled.": "आपातकालीन अलार्म रद्द कर दिया गया।",
      "Emergency alert broadcasting. Alerts dispatched to family and ambulance rails.": "आपातकालीन चेतावनी का प्रसारण किया जा रहा है। परिवार और एम्बुलेंस को अलर्ट भेज दिया गया है।",
      "Emergency terminated. You are marked as stable.": "आपातकाल समाप्त। आपको स्थिर चिह्नित किया गया है।",
      "Medicine recorded as taken. I will let your family know.": "दवा ली गई दर्ज की गई है। मैं आपके परिवार को सूचित कर दूँगा।",
      "Pill scanner camera activated. Please place your pill on your palm and hold it in front of the camera.": "पिल स्कैनर कैमरा सक्रिय। कृपया अपनी दवा हथेली पर रखें और कैमरे के सामने लाएं।",
      "Scanning your pill. Hold still.": "दवा को स्कैन किया जा रहा है। हिले नहीं।",
      "Pill identified as Metformin 500mg. This matches your scheduled morning dose. Tap green button to confirm.": "दवा की पहचान मेटफॉर्मिन 500mg के रूप में हुई। यह आपकी निर्धारित सुबह की खुराक से मेल खाता है। पुष्टि के लिए हरा बटन दबाएं।",
      "Pill identified as Amlodipine 5mg. This dose is scheduled for later in the evening and is not due now.": "दवा की पहचान एम्लोडिपाइन 5mg के रूप में हुई। यह खुराक शाम के लिए निर्धारित है और अभी देय नहीं है।",
      "Warning! Unrecognized pill. This medicine does not match your active care prescriptions. Do not take it.": "चेतावनी! अपरिचित दवा। यह आपकी सक्रिय नुस्खे से मेल नहीं खाता है। इसे मत लें।",
      "Snoozing medication reminder for 15 minutes.": "दवा के अनुस्मारक को 15 मिनट के लिए स्नूज़ किया जा रहा है।",
      "Voice helper active. Please tell me a command.": "वॉयस हेल्पर सक्रिय। कृपया मुझे एक कमांड बताएं।",
      "Radio muted.": "रेडियो म्यूट कर दिया गया।",
      "Command not recognized. Please try saying SOS or Medicine Taken.": "कमांड समझ नहीं आया। कृपया एसओएस या मेडिसिन टेकन बोलने का प्रयास करें।",
      "Welcome back! I have notified your family that you are home safely.": "वापसी पर स्वागत है! मैंने आपके परिवार को सूचित कर दिया है कि आप सुरक्षित घर आ गए हैं।"
    },
    te: {
      "Warning. Activating emergency SOS in five seconds. Tap cancel button to stop.": "హెచ్చరిక. ఐదు సెకన్లలో అత్యవసర SOS యాక్టివేట్ అవుతుంది. ఆపడానికి రద్దు బటన్ నొక్కండి.",
      "Emergency alarm canceled.": "అత్యవసర అలారం రద్దు చేయబడింది.",
      "Emergency alert broadcasting. Alerts dispatched to family and ambulance rails.": "అత్యవసర హెచ్చరిక ప్రసారం అవుతోంది. కుటుంబ సభ్యులకు మరియు అంబులెన్స్‌కు సమాచారం పంపబడింది.",
      "Emergency terminated. You are marked as stable.": "అत्यవసర పరిస్థితి ముగిసింది. మీరు సురక్షితంగా ఉన్నట్లు నమోదు చేయబడింది.",
      "Medicine recorded as taken. I will let your family know.": "మందు తీసుకున్నట్లు నమోదు చేయబడింది. మీ కుటుంబ సభ్యులకు తెలియజేస్తాను.",
      "Pill scanner camera activated. Please place your pill on your palm and hold it in front of the camera.": "పిల్ స్కానర్ కెమెరా యాక్టివేట్ చేయబడింది. మాత్రను మీ అరచేతిలో ఉంచి కెమెరా ముందు చూపించండి.",
      "Scanning your pill. Hold still.": "మాత్రను స్కాన్ చేస్తున్నాము. కదలకుండా ఉండండి.",
      "Pill identified as Metformin 500mg. This matches your scheduled morning dose. Tap green button to confirm.": "మెట్‌ఫార్మిన్ 500mg గా మాత్ర గుర్తించబడింది. ఇది మీ ఉదయపు మందుతో సరిపోలింది. నిర్ధారించడానికి గ్రీన్ బటన్ నొక్కండి.",
      "Pill identified as Amlodipine 5mg. This dose is scheduled for later in the evening and is not due now.": "అమ్లోడిపైన్ 5mg గా మాత్ర గుర్తించబడింది. ఈ మందు సాయంత్రం వేళకు షెడ్యూల్ చేయబడింది, ఇప్పుడు వేసుకోవాల్సిన అవసరం లేదు.",
      "Warning! Unrecognized pill. This medicine does not match your active care prescriptions. Do not take it.": "హెచ్చరిక! గుర్తించబడని మాత్ర. ఇది మీ ప్రిస్క్రిప్షన్‌తో సరిపోలడం లేదు. దీనిని వేసుకోవద్దు.",
      "Snoozing medication reminder for 15 minutes.": "మందుల రిమైండర్‌ను 15 నిమిషాలు స్నూజ్ చేస్తున్నాము.",
      "Voice helper active. Please tell me a command.": "వాయిస్ సహాయకుడు యాక్టివేట్ చేయబడింది. ఒక ఆదేశాన్ని చెప్పండి.",
      "Radio muted.": "రేడియో మ్యూట్ చేయబడింది.",
      "Command not recognized. Please try saying SOS or Medicine Taken.": "ఆదేశం గుర్తించబడలేదు. దయచేసి SOS లేదా మందులు తీసుకున్నాను అని చెప్పడానికి ప్రయత్నించండి.",
      "Welcome back! I have notified your family that you are home safely.": "స్వాగతం! మీరు సురక్షితంగా ఇంటికి చేరుకున్నట్లు మీ కుటుంబ సభ్యులకు తెలియజేశాను."
    }
  };

  if (speechTranslations[langCode] && speechTranslations[langCode][text]) {
    translatedText = speechTranslations[langCode][text];
  } else {
    // Handling dynamic template string matching
    if (text.startsWith("Calibrated companion dashboard to")) {
      const country = text.replace("Calibrated companion dashboard to ", "").replace(" guidelines.", "");
      const transCountry = {
        India: { ja: "インド", pt: "Índia", ta: "இந்தியா", hi: "भारत", te: "భారతదేశం", en: "India" },
        Japan: { ja: "日本", pt: "Japão", ta: "ஜப்பான்", hi: "जापान", te: "జపాన్", en: "Japan" },
        "United States": { ja: "米国", pt: "Estados Unidos", ta: "அமெரிக்கா", hi: "संयुक्त राज्य अमेरिका", te: "అమెరికా", en: "United States" },
        "United Arab Emirates": { ja: "アラブ首長国連邦", pt: "Emirados Árabes Unidos", ta: "ஐக்கிய அரபு அமீரகம்", hi: "संयुक्त अरब अमीरात", te: "యునైटెడ్ అరబ్ ఎమిరేట్స్", en: "United Arab Emirates" },
        Brazil: { ja: "ブラジル", pt: "Brasil", ta: "பிரேசில்", hi: "ब्राजील", te: "బ్రెజిల్", en: "Brazil" }
      }[country] || {};
      const cn = transCountry[langCode] || country;
      
      const feedbackMsg = {
        en: `Calibrated companion dashboard to ${cn} guidelines.`,
        ja: `コンパニオンダッシュボードを${cn}向けに調整しました。`,
        pt: `Painel do acompanhante calibrado para as diretrizes do ${cn}.`,
        ta: `துணை டாஷ்போர்டு ${cn} வழிகாட்டுதல்களுக்கு அளவீடு செய்யப்பட்டது.`,
        hi: `साथी डैशबोर्ड को ${cn} के दिशानिर्देशों के अनुसार कैलिब्रेट किया गया है।`,
        te: `సహాయక డాష్‌బోర్డ్ ${cn} మార్గదర్శకాలకు క్రమాంకనం చేయబడింది.`
      };
      translatedText = feedbackMsg[langCode] || feedbackMsg['en'];
    } else if (text.startsWith("Tuning radio to")) {
      const era = text.replace("Tuning radio to ", "").replace(" station.", "");
      const eraTrans = {
        en: `Tuning radio to ${era} station.`,
        ja: `ラジオを${era}のステーションにチューニングしています。`,
        pt: `Sintonizando rádio na estação dos anos ${era === '1960s' ? '60' : (era === '1970s' ? '70' : '80')}.`,
        ta: `ரேடியோவை ${era} நிலையத்திற்கு மாற்றுகிறது.`,
        hi: `रेडियो को ${era} स्टेशन पर ट्यून कर रहा है।`,
        te: `రేడియోను ${era} స్టేషన్‌కు ट्यून చేస్తున్నాము.`
      };
      translatedText = eraTrans[langCode] || eraTrans['en'];
    } else if (text.startsWith("Searching for local ") && text.endsWith(" sensors.")) {
      const watch = text.replace("Searching for local ", "").replace(" sensors.", "");
      const transWatch = {
        Fitbit: { ja: "フィットビット", pt: "Fitbit", ta: "பிட்பிட்", hi: "फिटबिट", te: "ఫిట్‌బిట్", en: "Fitbit" },
        Samsung: { ja: "サムスン", pt: "Samsung", ta: "சாம்సங்", hi: "सैमसंग", te: "శామ్‌సంగ్", en: "Samsung" },
        Apple: { ja: "アップル", pt: "Apple", ta: "ஆப்பிள்", hi: "एप्पल", te: "ఆపిల్", en: "Apple" },
        Garmin: { ja: "ガーミン", pt: "Garmin", ta: "கார்மின்", hi: "गार्मिन", te: "గార్మిన్", en: "Garmin" }
      }[watch] || { en: watch };
      const wName = transWatch[langCode] || transWatch['en'] || watch;
      
      const searchMsg = {
        en: `Searching for local ${wName} sensors.`,
        ja: `ローカルの${wName}センサーを検索しています。`,
        pt: `Buscando sensores locais do ${wName}.`,
        ta: `உள்ளூர் ${wName} சென்சார்களைத் தேடுகிறது.`,
        hi: `स्थानीय ${wName} सेंसर की खोज की जा रही है।`,
        te: `స్థానిక ${wName} సెన్సార్ల కోసం వెతుకుతున్నాము.`
      };
      translatedText = searchMsg[langCode] || searchMsg['en'];
    } else if (text.endsWith(" successfully paired and active.")) {
      const watch = text.replace(" successfully paired and active.", "");
      const transWatch = {
        Fitbit: { ja: "フィットビット", pt: "Fitbit", ta: "பிட்பிட்", hi: "फिटबिट", te: "ఫిట్‌బిట్", en: "Fitbit" },
        Samsung: { ja: "サムスン", pt: "Samsung", ta: "சாம்సங்", hi: "सैमसंग", te: "శామ్‌సంగ్", en: "Samsung" },
        Apple: { ja: "アップル", pt: "Apple", ta: "ஆப்பிள்", hi: "ஆப்பிள்", te: "ఆపిల్", en: "Apple" },
        Garmin: { ja: "ガーミン", pt: "Garmin", ta: "கார்மின்", hi: "गार्मिन", te: "గార్మిన్", en: "Garmin" }
      }[watch] || { en: watch };
      const wName = transWatch[langCode] || transWatch['en'] || watch;
      
      const pairedMsg = {
        en: `${wName} successfully paired and active.`,
        ja: `${wName}が正常にペアリングされ、有効になりました。`,
        pt: `${wName} pareado com sucesso e ativo.`,
        ta: `${wName} வெற்றிகரமாக இணைக்கப்பட்டு செயலில் உள்ளது.`,
        hi: `${wName} सफलतापूर्वक पेयर किया गया और सक्रिय है।`,
        te: `${wName} విజయవంతంగా జత చేయబడింది మరియు చురుకుగా ఉంది.`
      };
      translatedText = pairedMsg[langCode] || pairedMsg['en'];
    } else if (text === "Switched language to English.") {
      const switchMsg = {
        en: "Switched language to English.",
        ja: "言語を英語に切り替えました。",
        pt: "Idioma alterado para inglês.",
        ta: "ஆங்கில மொழிக்கு மாற்றப்பட்டது.",
        hi: "अंग्रेज़ी भाषा में बदल दिया गया।",
        te: "ఆంగ్ल భాషకు మార్చబడింది."
      };
      translatedText = switchMsg[langCode] || switchMsg['en'];
    } else if (text.startsWith("Welcome, ") && text.includes("! Setup completed. I am ") && text.endsWith(", your companion.")) {
      const match = text.match(/Welcome,\s*(.+?)!\s*Setup completed\.\s*I am\s*(.+?),\s*your companion\./i);
      if (match) {
        const sName = match[1];
        const cName = match[2];
        const welcomeTrans = {
          en: `Welcome, ${sName}! Setup completed. I am ${cName}, your companion.`,
          ja: `ようこそ、${sName}さん！セットアップが完了しました。私はあなたのコンパニオンの${cName}です。`,
          pt: `Bem-vindo, ${sName}! Configuração concluída. Eu sou ${cName}, seu companheiro.`,
          ta: `வரவேற்கிறோம், ${sName}! அமைப்பு முடிந்தது. நான் உங்கள் துணைவனான ${cName}.`,
          hi: `स्वागत है, ${sName}! सेटअप पूरा हो गया है। मैं आपकी साथी ${cName} हूँ।`,
          te: `స్వాగతం, ${sName}! సెటప్ పూర్తయింది. నేను మీ తోడుగా ఉన్న ${cName}.` 
        };
        translatedText = welcomeTrans[langCode] || welcomeTrans['en'];
      }
    }
  }

  const utterance = new SpeechSynthesisUtterance(translatedText);
  const voices = synthesisEngine.getVoices();
  
  function getNaturalFemaleVoice(langTag) {
    const matching = voices.filter(v => v.lang.toLowerCase().replace('_', '-').startsWith(langTag.toLowerCase().slice(0, 2)));
    if (matching.length === 0) return null;
    
    // Warm, feminine names and keywords
    const femalePremiumKws = [
      'female', 'heera', 'neerja', 'veena', 'haruka', 'sayaka', 'ayumi', 'kyoko', 'zira', 'hazel', 'samantha', 'karen', 'moira', 'tessa', 'google jp', 'google in', 'google uk', 'google us',
      'neural', 'natural', 'google', 'microsoft', 'premium', 'apple'
    ];
    for (const kw of femalePremiumKws) {
      const v = matching.find(voice => voice.name.toLowerCase().includes(kw));
      if (v) return v;
    }
    return matching[0];
  }

  if (voices.length > 0) {
    let selectedVoice = null;
    let targetLang = 'en-US';
    
    if (langCode === 'ja') {
      targetLang = 'ja-JP';
    } else if (langCode === 'pt') {
      targetLang = 'pt-BR';
    } else if (langCode === 'ta') {
      targetLang = 'ta-IN';
    } else if (langCode === 'hi') {
      targetLang = 'hi-IN';
    } else if (langCode === 'te') {
      targetLang = 'te-IN';
    } else {
      const selectedCountry = document.getElementById('countrySelect').value;
      if (selectedCountry === 'United Arab Emirates') {
        targetLang = 'ar-AE';
      } else {
        targetLang = 'en-US';
      }
    }
    
    selectedVoice = getNaturalFemaleVoice(targetLang);
    if (!selectedVoice && targetLang === 'ar-AE') {
      selectedVoice = getNaturalFemaleVoice('en-GB') || getNaturalFemaleVoice('en-US');
      targetLang = selectedVoice ? selectedVoice.lang : 'en-US';
    }
    
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = targetLang;
    } else {
      utterance.lang = targetLang;
    }
  }
  
  // Calibrate human-like tone contextually
  if (context === 'story') {
    // Little kid storytelling voice: energetic, high-pitch, sweet child-like character
    utterance.pitch = 1.35; 
    utterance.rate = 1.0;   
  } else {
    // Wise, nice, maternal, reassuring woman voice
    utterance.pitch = 0.95; 
    utterance.rate = 0.88;  
  }
  
  // Attach mascot speaking animation triggers
  utterance.onstart = () => {
    const orb = document.getElementById('companionAvatarOrb');
    if (orb) {
      orb.classList.remove('breathing');
      orb.classList.add('talking');
    }
  };
  
  const resetMascotAnimation = () => {
    const orb = document.getElementById('companionAvatarOrb');
    if (orb) {
      orb.classList.remove('talking');
      orb.classList.add('breathing');
    }
  };
  
  utterance.onend = resetMascotAnimation;
  utterance.onerror = resetMascotAnimation;

  synthesisEngine.speak(utterance);
}

// Web Speech Recognition Initialization
function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;
  
  speechRecognizer = new SpeechRecognition();
  speechRecognizer.continuous = false;
  speechRecognizer.interimResults = false;
  speechRecognizer.lang = 'en-US';
  
  speechRecognizer.onstart = () => {
    document.getElementById('speechOrb').classList.add('listening');
    document.getElementById('voiceAssistantStatus').textContent = "Listening... Speak now.";
    showToast("Voice assistant listening...");
  };
  
  speechRecognizer.onresult = (event) => {
    const speechResult = event.results[0][0].transcript.toLowerCase();
    document.getElementById('voiceTranscriptionText').textContent = `"${speechResult}"`;
    processVoiceCommand(speechResult);
  };
  
  speechRecognizer.onerror = (event) => {
    console.error("Speech error", event);
    document.getElementById('speechOrb').classList.remove('listening');
    document.getElementById('voiceAssistantStatus').textContent = "Voice search failed. Try again.";
  };
  
  speechRecognizer.onend = () => {
    document.getElementById('speechOrb').classList.remove('listening');
  };
}

function processVoiceCommand(command) {
  const statusBlock = document.getElementById('voiceAssistantStatus');
  
  if (command.includes('sos') || command.includes('help') || command.includes('emergency')) {
    statusBlock.textContent = "Emergency command detected! Launching SOS...";
    closeVoiceDrawerPanel();
    triggerEmergencySos();
  } else if (command.includes('call') || command.includes('family') || command.includes('daughter') || command.includes('meera')) {
    statusBlock.textContent = "Calling Meera...";
    speakText("Dialing your family daughter Meera on speakerphone now.");
    showToast("Calling Meera (Daughter)...");
    logFamilyChatSystem("Call connection established with Meera via voice command");
  } else if (command.includes('medicine') || command.includes('pill') || command.includes('taken')) {
    statusBlock.textContent = "Marking medicine taken...";
    markMedicationTaken();
  } else if (command.includes('mood') || command.includes('happy') || command.includes('good')) {
    statusBlock.textContent = "Logging mood checkin...";
    logQuickMood("Stable");
    speakText("Logged your mood as good. I will notify your family circle.");
  } else {
    statusBlock.textContent = `Did not understand "${command}". Try "SOS", "Call Family", or "Medicine Taken".`;
    speakText("Command not recognized. Please try saying SOS or Medicine Taken.");
  }
}

// 4. WEB AUDIO SYNTHESIZERS (OFFLINE-CAPABLE SOUNDS)
let soundscapeNode = null;
let soundscapeTimer = null;
let soundscapeSeconds = 0;

function playCalmingSoundscape() {
  if (soundscapeNode) return; // Already playing
  
  // Synthesize a soothing ambient ocean wave sound using low-frequency noise and LFO oscillators
  const osc = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(110, audioContext.currentTime); // Deep soothing A2 note
  
  lfo.type = 'sine';
  lfo.frequency.setValueAtTime(0.1, audioContext.currentTime); // Very slow breath cycle (10 seconds)
  lfoGain.gain.setValueAtTime(0.05, audioContext.currentTime);
  
  gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
  
  lfo.connect(lfoGain);
  lfoGain.connect(osc.frequency);
  osc.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  osc.start();
  lfo.start();
  
  soundscapeNode = { osc, lfo, gainNode };
  
  // Track timeline playback
  soundscapeSeconds = 0;
  document.getElementById('playRelaxationSound').classList.add('d-none');
  document.getElementById('pauseRelaxationSound').classList.remove('d-none');
  
  soundscapeTimer = setInterval(() => {
    soundscapeSeconds++;
    const min = String(Math.floor(soundscapeSeconds / 60)).padStart(2, '0');
    const sec = String(soundscapeSeconds % 60).padStart(2, '0');
    document.getElementById('audioTime').textContent = `${min}:${sec} / 15:00`;
  }, 1000);
  
  showToast("Soothing ambient sitar & waves playing...");
}

function stopCalmingSoundscape() {
  if (!soundscapeNode) return;
  
  soundscapeNode.osc.stop();
  soundscapeNode.lfo.stop();
  clearInterval(soundscapeTimer);
  soundscapeNode = null;
  
  document.getElementById('playRelaxationSound').classList.remove('d-none');
  document.getElementById('pauseRelaxationSound').classList.add('d-none');
  document.getElementById('audioTime').textContent = "00:00 / 15:00";
  showToast("Relaxation player stopped.");
}

// SOS Warning Beeps
function playSosBeep() {
  const osc = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  osc.type = 'square';
  osc.frequency.setValueAtTime(880, audioContext.currentTime); // High pitched warning beep
  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
  
  osc.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  osc.start();
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
  osc.stop(audioContext.currentTime + 0.3);
}

// 5. RESPONSIVE NAVIGATION CONTROLLER
function switchAppView(viewId) {
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `${viewId}-view`);
  });
  
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewId);
  });
  
  document.getElementById('appSidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Readout view header via voiceover when navigation happens
  const viewTitleText = document.querySelector(`#${viewId}-view .view-title`);
  if (viewTitleText) {
    speakText(`Opening ${viewTitleText.textContent}`);
  }
}

// 6. SCAM SHIELD SCANNER LOGIC
function scanScamMessageText() {
  const inputEl = document.getElementById('scamMessageInput');
  const text = inputEl.value.trim().toLowerCase();
  
  if (!text) {
    showToast("Please enter a text message to scan.");
    return;
  }
  
  const resultCard = document.getElementById('scamResultCard');
  const threatBadge = document.getElementById('scamThreatBadge');
  const scoreEl = document.getElementById('scamScore');
  const barEl = document.getElementById('scamRiskBar');
  const explanationEl = document.getElementById('scamResultExplanation');
  const forwardBtn = document.getElementById('forwardScamToFamilyBtn');
  
  resultCard.classList.remove('d-none');
  
  // Scan keywords Heuristics
  const criticalWords = ['otp', 'one time password', 'cvv', 'password', 'pin', 'card blocked'];
  const highWords = ['urgent', 'limited time', 'bank details', 'close account', 'lottery winner', 'pay now', 'irs', 'inss', 'aadhaar link'];
  
  let score = 15;
  let matchingCritical = criticalWords.filter(w => text.includes(w));
  let matchingHigh = highWords.filter(w => text.includes(w));
  
  score += (matchingCritical.length * 35);
  score += (matchingHigh.length * 20);
  if (score > 100) score = 100;
  
  scoreEl.textContent = `${score}/100`;
  barEl.style.width = `${score}%`;
  
  if (score >= 70) {
    threatBadge.textContent = "CRITICAL PHISHING RISK";
    threatBadge.className = "threat-badge bg-red";
    explanationEl.textContent = "Warning: This message requests secure codes (OTP/PIN) or creates extreme panic urgency. Do not click links or call numbers listed. Use our forward checker below.";
    barEl.className = "adherence-bar-fill bg-red";
    forwardBtn.classList.remove('d-none');
    speakText("Warning! This message is highly suspicious. Do not reply or send money.");
  } else if (score >= 40) {
    threatBadge.textContent = "SUSPICIOUS THREAT";
    threatBadge.className = "threat-badge bg-orange";
    explanationEl.textContent = "Caution: This contains suspicious billing details or unverified links. Speak to family before continuing.";
    barEl.className = "adherence-bar-fill bg-gold";
    forwardBtn.classList.remove('d-none');
  } else {
    threatBadge.textContent = "LOW THREAT SCREEN";
    threatBadge.className = "threat-badge bg-teal";
    explanationEl.textContent = "No common phishing triggers found. However, always exercise warning when opening payments.";
    barEl.className = "adherence-bar-fill";
    forwardBtn.classList.add('d-none');
  }
  
  showToast("Phishing scan completed.");
}

function forwardScamToFamily() {
  const scamText = document.getElementById('scamMessageInput').value;
  showToast("Scam forwarded to Meera & Arun for double-checking!");
  
  // Post system log to family chat feed
  logFamilyChatSystem(`Lakshmi ji forwarded message to review: "${scamText.slice(0,35)}..."`);
  
  // Simulate Meera responding to the forward check
  setTimeout(() => {
    logFamilyChatResponse("Meera", "Mom! That message is a fake. Do not click on it, it's a scam.");
    speakText("Notification: Meera reviewed your message and confirmed it is a scam.");
    showToast("Meera responded: Phishing scam confirmed!");
  }, 3500);
}

// 7. DRAG-AND-DROP SECURE VAULT LOGIC
let documentVaultRegistry = [
  { id: 'doc_1', title: 'Medical Prescription (Metformin)', category: 'Medical', date: '2026-06-10', sharedWith: 'Meera, Arun' },
  { id: 'doc_2', title: 'Central Health Insurance Policy', category: 'Financial', date: '2026-12-01', sharedWith: 'Meera' }
];

function renderDocumentVaultRegistry() {
  const listEl = document.getElementById('documentsVaultList');
  listEl.innerHTML = '';
  
  documentVaultRegistry.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'vault-file-card';
    card.dataset.category = doc.category;
    
    card.innerHTML = `
      <div class="file-info-block">
        <div class="file-symbol-card"><span data-icon="file"></span></div>
        <div class="file-title-meta">
          <strong>${doc.title}</strong>
          <span>Category: ${doc.category} · Expiry: ${doc.date}</span>
        </div>
      </div>
      <div class="file-security-actions">
        <span class="sharing-status-tag">Shared: ${doc.sharedWith}</span>
        <button class="secondary-action-btn delete-doc-btn" data-id="${doc.id}" style="min-height:44px; padding:0 12px;">Revoke</button>
      </div>
    `;
    listEl.appendChild(card);
  });
  
  // Re-inject file SVGs
  document.querySelectorAll('.file-symbol-card [data-icon]').forEach(el => {
    el.innerHTML = icons[el.dataset.icon] || '';
  });
  
  // Attach revoking actions
  document.querySelectorAll('.delete-doc-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      documentVaultRegistry = documentVaultRegistry.filter(d => d.id !== id);
      renderDocumentVaultRegistry();
      showToast("Access privileges revoked.");
    });
  });
}

function simulateDocumentUpload() {
  const titleInput = document.getElementById('docUploadTitle');
  const title = titleInput.value.trim();
  const category = document.getElementById('docCategory').value;
  const expiry = document.getElementById('docExpiry').value || 'No Expiry';
  
  if (!title) {
    showToast("Please enter a document title first.");
    return;
  }
  
  const progressCard = document.getElementById('uploadProgressCard');
  const progressBar = document.getElementById('uploadProgressBar');
  const percentageLabel = document.getElementById('uploadPercentage');
  const statusLabel = document.getElementById('uploadStatusLabel');
  
  progressCard.classList.remove('d-none');
  statusLabel.textContent = "Encrypting locally...";
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += 20;
    progressBar.style.width = `${progress}%`;
    percentageLabel.textContent = `${progress}%`;
    
    if (progress === 40) {
      statusLabel.textContent = "Packaging credentials...";
    } else if (progress === 80) {
      statusLabel.textContent = "Syncing with secure vault...";
    }
    
    if (progress >= 100) {
      clearInterval(interval);
      
      // Add to database
      const newDoc = {
        id: `doc_${Date.now()}`,
        title,
        category,
        date: expiry,
        sharedWith: 'Meera (A11y Auth)'
      };
      documentVaultRegistry.push(newDoc);
      renderDocumentVaultRegistry();
      
      // Clean inputs
      titleInput.value = '';
      progressCard.classList.add('d-none');
      showToast("Document encrypted & stored securely!");
      logFamilyChatSystem(`New Document Added: ${newDoc.title}`);
    }
  }, 350);
}

// 8. CANVAS LEGACY VOICE WAVEFORM DRAWING
let recordingSimulated = false;
let waveAnimationFrame = null;

function toggleLegacyVoiceRecording() {
  const recordBtn = document.getElementById('micRecordBtn');
  const statusLabel = document.getElementById('micRecordLabel');
  
  recordingSimulated = !recordingSimulated;
  
  if (recordingSimulated) {
    recordBtn.classList.add('recording');
    statusLabel.textContent = "Recording story... Speak now.";
    speakText("Recording your memory story. Go ahead, speak.");
    animateWaveformCanvas();
  } else {
    recordBtn.classList.remove('recording');
    statusLabel.textContent = "Voice message compiled. Click mic to re-record.";
    cancelAnimationFrame(waveAnimationFrame);
    clearWaveformCanvas();
    
    // Auto-transcribe placeholder memory story text
    document.getElementById('writtenStoryText').value = "In 1974, I took my first job as a software junior. Our computing frames filled entire air-cooled basements, and we cards typed out programs step by step. That taught me patience and values...";
    showToast("Transcribing voice recording completed!");
  }
}

function clearWaveformCanvas() {
  const canvas = document.getElementById('waveformCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#cbd5e1';
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
}

function animateWaveformCanvas() {
  const canvas = document.getElementById('waveformCanvas');
  const ctx = canvas.getContext('2d');
  let offset = 0;
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#0d9488';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let x = 0; x < canvas.width; x++) {
      // Create a smooth composite wave function representing voice signals
      const y = (canvas.height / 2) + 
                Math.sin(x * 0.05 + offset) * 12 * Math.sin(x * 0.01) + 
                Math.cos(x * 0.1 - offset) * 4;
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.stroke();
    offset += 0.15;
    waveAnimationFrame = requestAnimationFrame(draw);
  }
  
  draw();
}

// 9. HEALTH SIGNALS LOGGER & CHARTING
let healthLogDatabase = {
  heartRate: [72, 74, 71, 75, 73, 72],
  bp: ['120/80', '122/81', '118/79', '125/82', '120/80'],
  steps: [1500, 2200, 1800, 2400, 1900, 1450],
  water: [4, 5, 4, 6, 5, 3]
};

function logHealthSignalMetric(metricName) {
  const inputEl = document.getElementById(`input${metricName.charAt(0).toUpperCase() + metricName.slice(1)}`);
  const val = inputEl.value.trim();
  
  if (!val) {
    showToast("Please input a metric value.");
    return;
  }
  
  const displayVal = document.getElementById(`txt${metricName.charAt(0).toUpperCase() + metricName.slice(1)}`);
  
  if (metricName === 'steps' || metricName === 'water' || metricName === 'heartRate') {
    const num = parseInt(val);
    healthLogDatabase[metricName].push(num);
    displayVal.textContent = metricName === 'water' ? `${num} Glasses` : (metricName === 'steps' ? `${num.toLocaleString()}` : `${num} BPM`);
    
    // Check for steps drift reset
    if (metricName === 'steps') {
      const driftLabel = document.getElementById('driftSteps');
      if (num >= 2000) {
        driftLabel.textContent = "Normal (Step Quota Met)";
        driftLabel.className = "drift-alert-label text-green";
      } else {
        driftLabel.textContent = `${num} Steps (Low Drift)`;
        driftLabel.className = "drift-alert-label text-red";
      }
    }
  } else {
    healthLogDatabase[metricName].push(val);
    displayVal.textContent = val;
  }
  
  inputEl.value = '';
  showToast(`${metricName} logged successfully!`);
  renderHealthLogSVGChart(metricName);
  logFamilyChatSystem(`Health Signal Logged: ${metricName} updated to ${val}`);
}

function renderHealthLogSVGChart(metric) {
  const container = document.getElementById('healthChartContainer');
  let dataPoints = [];
  
  if (metric === 'steps') {
    dataPoints = healthLogDatabase.steps;
  } else if (metric === 'water') {
    dataPoints = healthLogDatabase.water.map(v => v * 20); // Scale glasses to fit height
  } else {
    dataPoints = healthLogDatabase.heartRate;
  }
  
  // Generate simple, responsive points fitting inside 400x150 SVG box
  const total = dataPoints.length;
  const paddingX = 40;
  const spacingX = (400 - (paddingX * 2)) / (total - 1 || 1);
  const minVal = Math.min(...dataPoints) * 0.9;
  const maxVal = Math.max(...dataPoints) * 1.1;
  const range = maxVal - minVal || 1;
  
  let pointsCoords = [];
  let pathD = '';
  
  dataPoints.forEach((val, idx) => {
    const x = paddingX + (idx * spacingX);
    const y = 130 - ((val - minVal) / range) * 100; // fit inside 150 height
    pointsCoords.push({x, y});
    if (idx === 0) {
      pathD = `M ${x} ${y}`;
    } else {
      pathD += ` L ${x} ${y}`;
    }
  });
  
  let circleDots = pointsCoords.map(pt => `<circle cx="${pt.x}" cy="${pt.y}" r="6" fill="var(--color-primary)" stroke="#ffffff" stroke-width="2" />`).join('');
  
  container.innerHTML = `
    <svg class="placeholder-svg-chart" viewBox="0 0 400 150">
      <!-- Grid Lines -->
      <line x1="40" y1="30" x2="360" y2="30" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="4,4" />
      <line x1="40" y1="80" x2="360" y2="80" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="4,4" />
      <line x1="40" y1="130" x2="360" y2="130" stroke="var(--border-color)" stroke-width="1" />
      
      <!-- Trend Path -->
      <path d="${pathD}" fill="none" stroke="var(--color-primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      ${circleDots}
    </svg>
  `;
}

// 10. ACTIVE MEDICINE COMPLIANCE TIMELINE LOG
let medicinesTakenCount = 0;
function markMedicationTaken() {
  const activePill = document.getElementById('activePillItem');
  activePill.innerHTML = `
    <div class="pill-info-block" style="margin-bottom:0;">
      <div class="pill-visual-icon" style="background:#ecfdf3; border:2px solid #16a34a; color:#16a34a;">✓</div>
      <div>
        <h3 class="pill-item-name" style="text-decoration: line-through; color:var(--text-muted);">Metformin (500mg)</h3>
        <p class="pill-time">Taken at ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
      </div>
    </div>
  `;
  
  medicinesTakenCount = 1;
  localStorage.setItem('meds_taken_today_timestamp', Date.now().toString());
  if (document.getElementById('adherenceIndicator')) {
    document.getElementById('adherenceIndicator').textContent = "Adherence for today: 1/1 Taken (Complete)";
  }
  if (document.getElementById('adherenceProgress')) {
    document.getElementById('adherenceProgress').style.width = "100%";
  }
  const chkMeds = document.getElementById('chkMeds');
  if (chkMeds) chkMeds.checked = true;
  
  if (typeof window.recordPillTaken === 'function') {
    window.recordPillTaken("Metformin (500mg)");
    window.recordPillTaken("Amlodipine (5mg)");
  }
  
  showToast("Medicine marked as taken. Family notified.");
  speakText("Medicine recorded as taken. I will let your family know.");
  logFamilyChatSystem("Lakshmi ji marked Metformin as Taken (8:00 AM prescription compliance)");
}

// 11. DYNAMIC COUNTRY/CULTURE ENGINE INITIALIZATION
function initializeCultureEngine(countryName) {
  const data = countryConfigDatabase[countryName];
  if (!data) return;
  
  // Show/Hide Indian State Selector
  const stateContainer = document.getElementById('indianStateContainer');
  if (countryName === 'India') {
    stateContainer.classList.remove('d-none');
  } else {
    stateContainer.classList.add('d-none');
  }
  
  // 1. Swap theme class on body
  document.body.className = '';
  document.body.classList.add(data.themeClass);
  
  // Apply visual overrides from storage
  if (localStorage.getItem('hc-mode') === 'true') document.body.classList.add('high-contrast');
  if (localStorage.getItem('lt-mode') === 'true') document.body.classList.add('large-text');
  if (localStorage.getItem('dm-mode') === 'true') document.body.classList.add('dark-mode');

  // Determine active language code
  let langCode = data.defaultLanguage;
  if (countryName === 'India') {
    const activeState = document.getElementById('stateSelect').value;
    langCode = data.stateLanguages[activeState] || 'en';
  }

  // Check if there is a user-selected language saved in localStorage
  const savedLang = localStorage.getItem('display_lang');
  if (savedLang && data.languages.some(l => l.code === savedLang)) {
    langCode = savedLang;
  }

  // 3. Populate language selectors
  const langSelect = document.getElementById('languageSelect');
  langSelect.innerHTML = data.languages.map(l => `<option value="${l.code}">${l.label}</option>`).join('');
  
  // Set selected language
  langSelect.value = langCode;

  // Localize the dynamic culture fields based on active language
  const localeData = data.locales[langCode] || data.locales[data.defaultLanguage];

  // 2. Set headers and greetings
  const currentSeniorName = localStorage.getItem('senior_name') || "Lakshmi Raman";
  const currentCityLocation = localStorage.getItem('city_location') || data.cityName;

  document.getElementById('seniorName').textContent = countryName === 'Japan' ? `${currentSeniorName}-san` : currentSeniorName;
  document.getElementById('headerLocationBadge').querySelector('span:last-child').textContent = `${currentCityLocation}, ${countryName}`;

  // Dynamically replace default name in greeting
  let greetingText = localeData.greeting;
  greetingText = greetingText.replace(/Lakshmi\s*ji/gi, currentSeniorName);
  greetingText = greetingText.replace(/Lakshmi/gi, currentSeniorName);
  greetingText = greetingText.replace(/లక్ష్మి\s*జి/g, currentSeniorName);
  greetingText = greetingText.replace(/లక్ష్మి/g, currentSeniorName);
  greetingText = greetingText.replace(/लक्ष्मी\s*जी/g, currentSeniorName);
  greetingText = greetingText.replace(/लक्ष्मी/g, currentSeniorName);
  greetingText = greetingText.replace(/லட்சுமி\s*ஜி/g, currentSeniorName);
  greetingText = greetingText.replace(/லட்சுமி/g, currentSeniorName);
  document.getElementById('companionGreeting').textContent = greetingText;
  document.getElementById('companionStatusText').textContent = localeData.companionBlurb;
  document.getElementById('localServicesDisplay').textContent = localeData.localHelpline;
  
  // Update Culture Twin details card snapshot
  document.getElementById('cultureTwinSnapshot').innerHTML = `
    <li><strong>Theme Template:</strong> ${countryName}</li>
    <li><strong>Local Scams Vetted:</strong> ${localeData.scamList}</li>
    <li><strong>Document Rules:</strong> ${countryName === 'India' ? 'Aadhaar, PAN, Life Proof' : (countryName === 'Japan' ? 'Local insurance card, clinic records' : 'Medicare files, SSN')}</li>
    <li><strong>Family Norms:</strong> ${localeData.norms}</li>
  `;

  // 4. Draw localized feature checklists
  const featuresList = document.getElementById('localizedFeaturesList');
  featuresList.innerHTML = localeData.features.map(f => `
    <div class="local-feature-item">
      <strong>${f[0]}</strong>
      <span>${f[1]}</span>
    </div>
  `).join('');
  
  document.getElementById('localizedCountryHeader').textContent = `${countryName} Care Customizations`;
  
  // 5. Populate services marketplace dynamically
  const allTabBtn = document.querySelector('.filter-tab-btn[data-filter="all"]');
  if (allTabBtn) {
    document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
    allTabBtn.classList.add('active');
  }
  if (typeof renderServicesMarketplace === 'function') {
    renderServicesMarketplace('all');
  }

  // Call translation of static UI
  localizeApp(langCode);

  // Dynamically update companion mascot
  if (typeof renderCompanionMascot === 'function') {
    renderCompanionMascot(countryName);
  }

  // 6. Speak out calibration
  const completed = localStorage.getItem('onboarding_completed') === 'true';
  if (completed) {
    speakText(`Calibrated companion dashboard to ${countryName} guidelines.`);
  }

  // Update water reminder layout
  if (typeof updateWaterUI === 'function') {
    updateWaterUI();
  }

  // Sync Power Cut toggle for India-only feature
  if (typeof window.checkPowerCutVisibility === 'function') {
    window.checkPowerCutVisibility();
    if (typeof window.applyPowerCutState === 'function') window.applyPowerCutState();
  }
}

// 11b. LOCALIZATION ENGINE FOR STATIC UI TEXT
function localizeApp(langCode) {
  // Set HTML lang attribute
  document.documentElement.lang = langCode;

  // 1. Localize data-i18n elements
  const pageTrans = translations[langCode] || translations['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (pageTrans[key]) {
      el.textContent = pageTrans[key];
    }
  });

  // 2. Localize elements with specific selectors
  const selTrans = selectorTranslations[langCode] || selectorTranslations['en'];
  if (selTrans) {
    for (const selector in selTrans) {
      const el = document.querySelector(selector);
      if (el) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = selTrans[selector];
        } else {
          el.textContent = selTrans[selector];
        }
      }
    }
  }

  // 3. Update active language class on body
  document.body.setAttribute('data-lang', langCode);
}

// 11c. CULTURALLY ADAPTIVE MASCOT RENDERING
function renderCompanionMascot(countryName) {
  const data = mascots[countryName] || mascots['India'];
  const orb = document.getElementById('companionAvatarOrb');
  if (!orb) return;

  // Render SVG
  orb.innerHTML = data.svg;
  orb.className = 'companion-avatar-orb breathing';

  // Use customized names if available, else defaults
  const compInput = document.getElementById('companionNameInput');
  const activeCompName = localStorage.getItem('companion_name') || (compInput && compInput.value.trim()) || data.name;
  
  const seniorInput = document.getElementById('seniorNameInput');
  const activeSeniorName = localStorage.getItem('senior_name') || (seniorInput && seniorInput.value.trim()) || "Lakshmi Raman";

  document.getElementById('companionAvatarName').textContent = activeCompName;
  document.getElementById('companionAvatarDesc').textContent = data.avatarDesc;
  document.getElementById('companionPanelTitle').textContent = `Chat with ${activeCompName}`;
  document.getElementById('companionSenderMeta').textContent = `${activeCompName} · Now`;

  // Localized greetings
  const lang = document.documentElement.lang || 'en';
  const initialGreetings = {
    en: `Hello ${activeSeniorName}! I am ${activeCompName}, your daily companion. How are you feeling today?`,
    ja: `${activeSeniorName}さん、こんにちは！私はコンパニオンの${activeCompName}です。今日の気分はいかがですか？`,
    pt: `Olá ${activeSeniorName}! Eu sou ${activeCompName}, seu companheiro diário. Como você está se sentindo hoje?`,
    ta: `வணக்கம் ${activeSeniorName}! நான் உங்கள் தினசரி துணைவனான ${activeCompName}. இன்று எப்படி உணருகிறீர்கள்?`,
    hi: `नमस्ते ${activeSeniorName}! मैं आपकी दैनिक साथी ${activeCompName} हूँ। आज आप कैसा महसूस कर रहे हैं?`,
    te: `నమస్కారం ${activeSeniorName}! నేను మీ రోజువారీ తోడుగా ఉన్న ${activeCompName}. ఈ రోజు మీరు ఎలా ఉన్నారు?`
  };

  document.getElementById('companionInitialGreeting').textContent = initialGreetings[lang] || initialGreetings['en'];
}

// 12. WISDOM INCOME MARKETPLACE & ROYALTIES
let wisdomListingRegistry = [
  { id: 'wis_1', title: 'Traditional South Indian Vegetarian Cooking', format: 'Video Consultation', price: '₹499' }
];

function renderWisdomListingRegistry() {
  const container = document.getElementById('publishedListingsList');
  container.innerHTML = '';
  
  wisdomListingRegistry.forEach(item => {
    const node = document.createElement('div');
    node.className = 'published-list-item';
    node.innerHTML = `
      <div class="published-item-info">
        <strong>${item.title}</strong>
        <span>Format: ${item.format}</span>
      </div>
      <span class="wisdom-price-tag">${item.price}</span>
    `;
    container.appendChild(node);
  });
}

// 13. CHAT SIMULATION FEED LOGS
function logFamilyChatSystem(message) {
  const logs = document.getElementById('familyChatLogs');
  const eventNode = document.createElement('div');
  eventNode.className = 'chat-log-event';
  eventNode.innerHTML = `
    <span class="event-icon" data-icon="activity"></span>
    <span class="event-desc">${message}</span>
    <span class="event-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
  `;
  logs.appendChild(eventNode);
  eventNode.querySelector('[data-icon]').innerHTML = icons.activity;
  logs.scrollTop = logs.scrollHeight;
}

function logFamilyChatResponse(sender, text) {
  const logs = document.getElementById('familyChatLogs');
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble received';
  bubble.innerHTML = `
    <div class="chat-bubble-header">
      <div class="sender-meta">${sender} · Now</div>
      <button class="chat-listen-btn" aria-label="Listen back" title="Listen back">
        <span data-icon="volume"></span>
      </button>
    </div>
    <p class="chat-text">${text}</p>
  `;
  logs.appendChild(bubble);
  bubble.querySelector('[data-icon="volume"]').innerHTML = icons.volume;
  bubble.querySelector('.chat-listen-btn').addEventListener('click', () => {
    speakText(text);
  });
  logs.scrollTop = logs.scrollHeight;
}

// 14. EMERGENCY SOS ALARM ACTIVATOR
let emergencyTimer = null;
let emergencySeconds = 5;

function triggerEmergencySos() {
  const overlay = document.getElementById('emergencyOverlay');
  overlay.classList.remove('d-none');
  
  document.getElementById('sosCountdownBox').classList.remove('d-none');
  document.getElementById('sosBroadcastBox').classList.add('d-none');
  
  emergencySeconds = 5;
  document.getElementById('sosCountdownSeconds').textContent = emergencySeconds;
  
  speakText("Warning. Activating emergency SOS in five seconds. Tap cancel button to stop.");
  
  emergencyTimer = setInterval(() => {
    emergencySeconds--;
    document.getElementById('sosCountdownSeconds').textContent = emergencySeconds;
    playSosBeep();
    
    if (emergencySeconds <= 0) {
      clearInterval(emergencyTimer);
      fireSosBroadcaster();
    }
  }, 1000);
}

function cancelEmergencySos() {
  clearInterval(emergencyTimer);
  document.getElementById('emergencyOverlay').classList.add('d-none');
  showToast("SOS activation canceled.");
  speakText("Emergency alarm canceled.");
}

function fireSosBroadcaster() {
  document.getElementById('sosCountdownBox').classList.add('d-none');
  document.getElementById('sosBroadcastBox').classList.remove('d-none');
  
  speakText("Emergency alert broadcasting. Alerts dispatched to family and ambulance rails.");
  logFamilyChatSystem("CRITICAL SOS BROADCAST ALARM ACTIVATED BY LAKSHMI JI");
  
  // Simulating Meera calling immediately
  setTimeout(() => {
    logFamilyChatResponse("Meera", "MUM! I saw the SOS alert! Are you okay? Calling you now!");
  }, 2000);
}

function closeActiveSosEmergency() {
  document.getElementById('emergencyOverlay').classList.add('d-none');
  logFamilyChatSystem("SOS alarm cleared: Lakshmi ji checked in as stable");
  showToast("SOS terminated. Family updated.");
  speakText("Emergency terminated. You are marked as stable.");
}

// 15. CARE PLANNER CALENDAR TIMELINE
function renderCarePlannerTimeline() {
  const strip = document.getElementById('calendarDayStrip');
  strip.innerHTML = '';
  
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date().getDay(); // 0 is Sunday, 1 is Monday
  const todayIdx = today === 0 ? 6 : today - 1; // Align Mon as index 0
  
  days.forEach((day, idx) => {
    const node = document.createElement('div');
    node.className = `calendar-day-node ${idx === todayIdx ? 'active' : ''}`;
    node.innerHTML = `
      <span>${day}</span>
      <strong>${10 + idx}</strong>
    `;
    strip.appendChild(node);
  });

  // Populate events timeline
  const events = [
    { time: '8:00 AM', name: 'Morning Medicine Intake', desc: 'Metformin & Hypertension Amlodipine pills', active: true },
    { time: '9:30 AM', name: 'Daily Neighborhood Walk', desc: 'Aim for 2,000 steps with park companions', active: false },
    { time: '12:00 PM', name: 'Video Call Daughter Meera', desc: 'Family check-in calendar call', active: false },
    { time: '6:00 PM', name: 'Evening Temple Prayer', desc: 'Meditation and chanting session', active: false }
  ];

  const container = document.getElementById('plannerEventsTimeline');
  container.innerHTML = events.map(ev => `
    <div class="timeline-event-card ${ev.active ? 'active' : ''}">
      <span class="event-time-badge">${ev.time}</span>
      <h4 class="event-name-txt">${ev.name}</h4>
      <p class="event-details-txt">${ev.desc}</p>
    </div>
  `).join('');
}

// 16. FAMILY REPAIR NUDGES DATABASE & CYCLER
const familyNudgeScripts = [
  "Hi Meera, I tried a new recipe today and was thinking of you. Call me when you get a minute!",
  "Hi Arun, I completed my 1,500 steps today. Hope you have a wonderful day at work!",
  "Hello Meera, I just saw a beautiful sunset in Chennai. It reminded me of our park walks."
];
let activeNudgeIdx = 0;

function sendActiveNudgeToFamilyChat() {
  const script = familyNudgeScripts[activeNudgeIdx];
  
  // Post sent bubble
  const logs = document.getElementById('familyChatLogs');
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble sent';
  bubble.innerHTML = `
    <div class="sender-meta">Me · Now</div>
    <p class="chat-text">${script}</p>
  `;
  logs.appendChild(bubble);
  logs.scrollTop = logs.scrollHeight;
  showToast("Reconnection prompt paged to family!");
  
  // Trigger family logs
  logFamilyChatSystem(`Reconnection nudge sent: "${script.slice(0, 30)}..."`);
  
  // Clear steps drift alert since they contacted family
  const driftCallsLabel = document.getElementById('driftCalls');
  driftCallsLabel.textContent = "Normal (Contacted Today)";
  driftCallsLabel.className = "drift-alert-label text-green";

  // Meera replies
  setTimeout(() => {
    logFamilyChatResponse("Meera", "Aww that's so sweet Mum! Glad you are doing fine. I will call you after work in an hour!");
    speakText("New reply in family circle from Meera regarding your nudge.");
  }, 1500);
}

// Helper Toast Alert
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('globalToast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Voice drawer functions
function openVoiceDrawerPanel() {
  initSpeechRecognition();
  document.getElementById('voiceDrawer').showModal();
  speakText("Voice helper active. Please tell me a command.");
  if (speechRecognizer) {
    speechRecognizer.start();
  }
}

function closeVoiceDrawerPanel() {
  if (speechRecognizer) speechRecognizer.stop();
  document.getElementById('voiceDrawer').close();
}

// 17. CORE EVENT BINDINGS (ON LOAD)
window.addEventListener('DOMContentLoaded', () => {
  // Live Geolocation Tracking for City Location
  function detectLiveLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        // Use free, public OpenStreetMap Nominatim API for reverse geocoding
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`)
          .then(response => response.json())
          .then(data => {
            if (data && data.address) {
              const city = data.address.city || data.address.town || data.address.suburb || data.address.village || data.address.state || 'Chennai';
              const cityInput = document.getElementById('cityInput');
              if (cityInput) {
                cityInput.value = city;
              }
              
              // Re-calibrate culture engine with the newly detected city location
              const country = document.getElementById('countrySelect').value;
              initializeCultureEngine(country);
              
              showToast(`Location auto-detected: ${city}`);
            }
          })
          .catch(err => {
            console.warn("Reverse geocoding failed", err);
          });
      }, (error) => {
        console.warn("Geolocation query failed or denied", error);
      });
    }
  }

  // Trigger live location tracking automatically on load
  detectLiveLocation();

  // Populate inline SVG icons dynamically
  document.querySelectorAll('[data-icon]').forEach(el => {
    el.innerHTML = icons[el.dataset.icon] || '';
  });

  // Switch tabs
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const view = btn.dataset.view;
      switchAppView(view);
    });
  });

  // Hamburger drawer
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('appSidebar').classList.toggle('open');
  });

  // Initialize Name Personalization states
  let seniorName = "Lakshmi Raman";
  let companionName = "Sathi";
  let geminiApiKey = localStorage.getItem('gemini_api_key') || '';

  // Set initial input value for API key
  const apiInputEl = document.getElementById('geminiApiKeyInput');
  if (apiInputEl) {
    apiInputEl.value = geminiApiKey;
  }

  // Onboarding Configuration Submit
  document.getElementById('cultureConfigForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const country = document.getElementById('countrySelect').value;
    const city = document.getElementById('cityInput').value;
    
    // Save names
    seniorName = document.getElementById('seniorNameInput').value.trim() || "Lakshmi Raman";
    companionName = document.getElementById('companionNameInput').value.trim() || "Sathi";
    
    // Save Gemini API key
    const apiKeyVal = document.getElementById('geminiApiKeyInput').value.trim();
    localStorage.setItem('gemini_api_key', apiKeyVal);
    geminiApiKey = apiKeyVal;
    
    initializeCultureEngine(country);
    
    const calibratedText = {
      en: `Companion engine calibrated for ${city}, ${country}!`,
      ja: `コンパニオンエンジンを${city}、${country}向けに調整しました！`,
      pt: `Motor do acompanhante calibrado para ${city}, ${country}!`,
      ta: `${city}, ${country} க்கான துணை இயந்திரம் அளவீடு செய்யப்பட்டது!`,
      hi: `${city}, ${country} के लिए साथी इंजन को कैलिब्रेट किया गया!`,
      te: `${city}, ${country} కోసం సహాయక ఇంజిన్ పునఃసమీకరించబడింది!`
    };
    const lang = document.documentElement.lang || 'en';
    showToast(calibratedText[lang] || calibratedText['en']);
  });

  // Country select change listener for immediate culture twin updates
  document.getElementById('countrySelect').addEventListener('change', () => {
    const country = document.getElementById('countrySelect').value;
    
    // Auto-update companion name field if not custom-changed
    const companionInput = document.getElementById('companionNameInput');
    if (companionInput && mascots[country]) {
      companionInput.value = mascots[country].name;
    }

    initializeCultureEngine(country);
    if (typeof updateTimezoneBridge === 'function') {
      updateTimezoneBridge();
    }
  });

  // Indian state select change listener
  document.getElementById('stateSelect').addEventListener('change', () => {
    const country = document.getElementById('countrySelect').value;
    if (country === 'India') {
      initializeCultureEngine('India');
    }
  });

  // Language select change listener for immediate UI translation
  document.getElementById('languageSelect').addEventListener('change', (e) => {
    const langCode = e.target.value;
    localizeApp(langCode);
    
    // Save selected language to localStorage
    localStorage.setItem('display_lang', langCode);
    
    // Update dynamic welcome blurb from country database
    const country = document.getElementById('countrySelect').value;
    const data = countryConfigDatabase[country];
    if (data && data.locales[langCode]) {
      const localeData = data.locales[langCode];
      
      const currentSeniorName = localStorage.getItem('senior_name') || "Lakshmi Raman";
      let greetingText = localeData.greeting;
      greetingText = greetingText.replace(/Lakshmi\s*ji/gi, currentSeniorName);
      greetingText = greetingText.replace(/Lakshmi/gi, currentSeniorName);
      document.getElementById('companionGreeting').textContent = greetingText;
      document.getElementById('companionStatusText').textContent = localeData.companionBlurb;
      document.getElementById('localServicesDisplay').textContent = localeData.localHelpline;
      
      // Update features list
      const featuresList = document.getElementById('localizedFeaturesList');
      featuresList.innerHTML = localeData.features.map(f => `
        <div class="local-feature-item">
          <strong>${f[0]}</strong>
          <span>${f[1]}</span>
        </div>
      `).join('');
      
      // Update services marketplace dynamically
      const activeBtn = document.querySelector('.filter-tab-btn.active');
      const activeFilter = activeBtn ? activeBtn.dataset.filter : 'all';
      if (typeof renderServicesMarketplace === 'function') {
        renderServicesMarketplace(activeFilter);
      }
    }

    // Update quick phrases bar if it's currently open
    const qpBar = document.getElementById('chatQuickPhrasesBar');
    if (qpBar && !qpBar.classList.contains('d-none')) {
      if (typeof populateChatQuickPhrases === 'function') {
        populateChatQuickPhrases();
      }
    }

    const compQpBar = document.getElementById('companionQuickPhrasesBar');
    if (compQpBar && !compQpBar.classList.contains('d-none')) {
      if (typeof populateCompanionQuickPhrases === 'function') {
        populateCompanionQuickPhrases();
      }
    }

    if (typeof renderCompanionMascot === 'function') {
      renderCompanionMascot(country);
    }
  });

  // Global English quick toggle
  document.getElementById('toggleGlobalEnglish').addEventListener('click', () => {
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
      let enOption = langSelect.querySelector('option[value="en"]');
      if (!enOption) {
        const opt = document.createElement('option');
        opt.value = 'en';
        opt.textContent = 'English voice';
        langSelect.appendChild(opt);
      }
      langSelect.value = 'en';
    }

    localizeApp('en');

    const country = document.getElementById('countrySelect').value;
    const data = countryConfigDatabase[country];
    if (data) {
      const localeData = data.locales['en'] || data.locales[data.defaultLanguage];
      if (localeData) {
        const currentSeniorName = localStorage.getItem('senior_name') || "Lakshmi Raman";
        let greetingText = localeData.greeting;
        greetingText = greetingText.replace(/Lakshmi\s*ji/gi, currentSeniorName);
        greetingText = greetingText.replace(/Lakshmi/gi, currentSeniorName);
        document.getElementById('companionGreeting').textContent = greetingText;
        document.getElementById('companionStatusText').textContent = localeData.companionBlurb;
        document.getElementById('localServicesDisplay').textContent = localeData.localHelpline;

        const featuresList = document.getElementById('localizedFeaturesList');
        featuresList.innerHTML = localeData.features.map(f => `
          <div class="local-feature-item">
            <strong>${f[0]}</strong>
            <span>${f[1]}</span>
          </div>
        `).join('');

        if (typeof renderServicesMarketplace === 'function') {
          renderServicesMarketplace('all');
        }
      }
    }

    showToast("Switched language to English.");
    speakText("Switched language to English.");
  });

  // A11y quick toggles
  document.getElementById('toggleContrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const isActive = document.body.classList.contains('high-contrast');
    localStorage.setItem('hc-mode', isActive);
    showToast(isActive ? "High contrast mode active" : "Standard contrast active");
  });

  document.getElementById('toggleTextSize').addEventListener('click', () => {
    document.body.classList.toggle('large-text');
    const isActive = document.body.classList.contains('large-text');
    localStorage.setItem('lt-mode', isActive);
    showToast(isActive ? "Extra Large font scaling active" : "Standard font size active");
  });

  document.getElementById('toggleMuteSpeech').addEventListener('click', () => {
    speechMuted = !speechMuted;
    showToast(speechMuted ? "Voice synthesis muted" : "Voice synthesis active");
  });

  // Offline medical card modals
  const emergencyCardModalEl = document.getElementById('emergencyCardModal');
  document.getElementById('emergencyCardTrigger').addEventListener('click', () => {
    const nameVal = localStorage.getItem('senior_name') || "Lakshmi Raman";
    document.getElementById('modalMedicalName').textContent = `${nameVal} – Age 72`;
    emergencyCardModalEl.showModal();
  });
  document.getElementById('triggerQRModalMini').addEventListener('click', () => {
    const nameVal = localStorage.getItem('senior_name') || "Lakshmi Raman";
    document.getElementById('modalMedicalName').textContent = `${nameVal} – Age 72`;
    emergencyCardModalEl.showModal();
  });
  document.getElementById('closeEmergencyCardModal').addEventListener('click', () => {
    emergencyCardModalEl.close();
  });
  emergencyCardModalEl.addEventListener('click', (e) => {
    if (e.target === emergencyCardModalEl) {
      emergencyCardModalEl.close();
    }
  });

  let activeCallContact = "";

  // Call Family Actions
  document.querySelectorAll('.dial-family').forEach(btn => {
    btn.addEventListener('click', () => {
      const contact = btn.dataset.contact;
      const statusData = getExpatTimesAndStatuses();
      const childStatus = contact === 'Meera' ? statusData.meera : statusData.arun;

      if (childStatus.cssClass === 'status-sleeping' || childStatus.cssClass === 'status-work') {
        activeCallContact = contact;
        const warningModal = document.getElementById('timezoneCallWarningModal');
        const warningText = document.getElementById('timezoneWarningText');
        
        let situation = childStatus.cssClass === 'status-sleeping' ? 'sleeping' : 'at work';
        
        const lang = document.documentElement.lang || 'en';
        
        // Localize overlay message
        const warningMsgs = {
          en: `Warning: ${contact} is currently ${situation} (Local Time: ${childStatus.time}). Are you sure you want to call, or would you prefer to send a voice note?`,
          ja: `警告: ${contact}さんは現在${situation === 'sleeping' ? '就寝中' : '仕事中'}です (現地時間: ${childStatus.time})。本当に発信しますか？それとも音声メッセージを送信しますか？`,
          pt: `Aviso: ${contact} está atualmente ${situation === 'sleeping' ? 'dormindo' : 'no trabalho'} (Hora local: ${childStatus.time}). Tem certeza que deseja ligar ou prefere enviar mensagem de voz?`,
          ta: `எச்சரிக்கை: ${contact} தற்போது ${situation === 'sleeping' ? 'உறங்குகிறார்' : 'வேலையில் இருக்கிறார்'} (உள்ளூர் நேரம்: ${childStatus.time}). நீங்கள் நிச்சயமாக அழைக்க விரும்புகிறீர்களா, அல்லது குரல் செய்தி அனுப்ப விரும்புகிறீர்களா?`,
          hi: `चेतावनी: ${contact} अभी ${situation === 'sleeping' ? 'सो रहे हैं' : 'काम पर हैं'} (स्थानीय समय: ${childStatus.time})। क्या आप कॉल करना चाहते हैं, या वॉयस नोट भेजना पसंद करेंगे?`,
          te: `గమనిక: ${contact} ప్రస్తుతం ${situation === 'sleeping' ? 'పడుకున్నారు' : 'పనిలో ఉన్నారు'} (స్థానిక సమయం: ${childStatus.time}). మీరు ఖచ్చితంగా కాల్ చేయాలనుకుంటున్నారా, లేదా వాయిస్ నోట్ పంపాలనుకుంటున్నారా?`
        };
        
        warningText.textContent = warningMsgs[lang] || warningMsgs['en'];
        
        if (warningModal) {
          warningModal.showModal();
          
          const speakWarn = {
            en: `Warning. ${contact} is currently ${situation}. Local time is ${childStatus.time}. Are you sure you want to call?`,
            ja: `警告。${contact}さんは現在${situation === 'sleeping' ? '就寝中' : '仕事中'}です。現地時間は ${childStatus.time} です。発信しますか？`,
            pt: `Aviso. ${contact} está atualmente ${situation === 'sleeping' ? 'dormindo' : 'no trabalho'}. Hora local é ${childStatus.time}. Deseja ligar?`,
            ta: `எச்சரிக்கை. ${contact} தற்போது ${situation === 'sleeping' ? 'உறங்குகிறார்' : 'வேலையில் இருக்கிறார்'}. உள்ளூர் நேரம் ${childStatus.time}. நீங்கள் அழைக்க விரும்புகிறீர்களா?`,
            hi: `चेतावनी। ${contact} अभी ${situation === 'sleeping' ? 'सो रहे हैं' : 'काम पर हैं'}। स्थानीय समय ${childStatus.time} है। क्या आप कॉल करना चाहते हैं?`,
            te: `గమనిక. ${contact} ప్రస్తుతం ${situation === 'sleeping' ? 'పడుకున్నారు' : 'పనిలో ఉన్నారు'}. స్థానిక సమయం ${childStatus.time}. మీరు కాల్ చేయాలనుకుంటున్నారా?`
          };
          speakText(speakWarn[lang] || speakWarn['en']);
        }
      } else {
        makeSpeakerphoneCall(contact);
      }
    });
  });

  function makeSpeakerphoneCall(contact) {
    showToast(`Calling ${contact} on speakerphone...`);
    
    const lang = document.documentElement.lang || 'en';
    const speakCall = {
      en: `Calling ${contact} on speakerphone. Connection active.`,
      ja: `${contact}さんにスピーカーフォンで発信しています。接続中。`,
      pt: `Ligando para ${contact} no viva-voz. Conexão ativa.`,
      ta: `${contact} ஐ ஸ்பீக்கர்போனில் அழைக்கிறது. இணைப்பு செயலில் உள்ளது.`,
      hi: `${contact} को स्पीकरफोन पर कॉल कर रहा है। कनेक्शन सक्रिय है।`,
      te: `${contact} కు స్పీకర్‌ఫోన్‌లో కాల్ చేస్తున్నాము. కనెక్షన్ యాక్టివ్.`
    };
    speakText(speakCall[lang] || speakCall['en']);
    logFamilyChatSystem(`Quick-Dial Action: Lakshmi ji initiated call with ${contact}`);
  }

  // Timezone dialog buttons hooks
  const timezoneCallWarningModal = document.getElementById('timezoneCallWarningModal');
  const confirmTimezoneCallBtn = document.getElementById('confirmTimezoneCallBtn');
  const timezoneRecordVoiceBtn = document.getElementById('timezoneRecordVoiceBtn');
  const closeTimezoneWarningBtn = document.getElementById('closeTimezoneWarningBtn');

  if (confirmTimezoneCallBtn && timezoneCallWarningModal) {
    confirmTimezoneCallBtn.addEventListener('click', () => {
      timezoneCallWarningModal.close();
      if (activeCallContact) {
        makeSpeakerphoneCall(activeCallContact);
      }
    });
  }

  if (timezoneRecordVoiceBtn && timezoneCallWarningModal) {
    timezoneRecordVoiceBtn.addEventListener('click', () => {
      timezoneCallWarningModal.close();
      showToast("Voice recorder active. Record your voice note...");
      speakText("Voice recorder active. Please speak your message.");
      openVoiceDrawerPanel();
    });
  }

  if (closeTimezoneWarningBtn && timezoneCallWarningModal) {
    closeTimezoneWarningBtn.addEventListener('click', () => {
      timezoneCallWarningModal.close();
    });
  }

  if (timezoneCallWarningModal) {
    timezoneCallWarningModal.addEventListener('click', (e) => {
      if (e.target === timezoneCallWarningModal) {
        timezoneCallWarningModal.close();
      }
    });
  }

  // In-Person Document Helper Dispatch
  const dispatchDocHelperBtn = document.getElementById('dispatchDocHelperBtn');
  const docHelperDispatchModal = document.getElementById('docHelperDispatchModal');
  const closeDocHelperModalBtn = document.getElementById('closeDocHelperModalBtn');
  const cancelDocHelperBtn = document.getElementById('cancelDocHelperBtn');
  const docHelperLoader = document.getElementById('docHelperLoader');
  const docHelperStatusText = document.getElementById('docHelperStatusText');
  
  let docHelperDispatchTimer = null;
  
  if (dispatchDocHelperBtn && docHelperDispatchModal) {
    dispatchDocHelperBtn.addEventListener('click', () => {
      if (docHelperLoader) docHelperLoader.style.display = 'block';
      if (docHelperStatusText) docHelperStatusText.textContent = "Finding a verified, background-checked local document helper near you...";
      if (cancelDocHelperBtn) {
        cancelDocHelperBtn.textContent = "Cancel Request";
        cancelDocHelperBtn.style.background = "";
      }
      
      docHelperDispatchModal.showModal();
      speakText("Searching for a verified local document helper. Please hold.");
      
      docHelperDispatchTimer = setTimeout(() => {
        if (docHelperLoader) docHelperLoader.style.display = 'none';
        
        const helperName = "Ram Kumar";
        const helperId = "#4902";
        const arrivalTime = "30 minutes";
        
        const lang = document.documentElement.lang || 'en';
        
        const successStatus = {
          en: `Helper ${helperName} (ID: ${helperId}, Verified & Background Checked) has been dispatched! Arriving at your house in ${arrivalTime} to assist with your document paperwork.`,
          ja: `ドキュメントサポーターの ${helperName} (ID: ${helperId}、認証・バックグラウンド調査済) を派遣しました！書類手続きを支援するため、${arrivalTime}でお宅に到着します。`,
          pt: `O assistente ${helperName} (ID: ${helperId}, verificado e com antecedentes checados) foi despachado! Chegando em sua casa em ${arrivalTime} para ajudar com a papelada.`,
          ta: `உதவியாளர் ${helperName} (ID: ${helperId}, சரிபார்க்கப்பட்டவர்) அனுப்பப்பட்டார்! உங்கள் ஆவணப் பணிகளுக்கு உதவ ${arrivalTime} நிமிடங்களில் உங்கள் வீட்டிற்கு வருவார்.`,
          hi: `सहायक ${helperName} (ID: ${helperId}, सत्यापित) को भेज दिया गया है! दस्तावेज़ कागजी कार्रवाई में सहायता के लिए ${arrivalTime} में आपके घर पहुंच रहे हैं।`,
          te: `సహాయకుడు ${helperName} (ID: ${helperId}, ధృవీకరించబడింది) పంపబడింది! మీ పత్రాల పనులలో సహాయం చేయడానికి ${arrivalTime} లో మీ ఇంటికి చేరుకుంటారు.`
        };
        
        if (docHelperStatusText) {
          docHelperStatusText.textContent = successStatus[lang] || successStatus['en'];
        }
        
        if (cancelDocHelperBtn) {
          cancelDocHelperBtn.textContent = "Dismiss";
          cancelDocHelperBtn.style.background = "var(--color-primary)";
          cancelDocHelperBtn.style.color = "white";
        }
        
        const speakSuccess = {
          en: `Helper ${helperName} dispatched. Arriving in ${arrivalTime} to assist with document submissions.`,
          ja: `ヘルパー ${helperName} を派遣しました。書類提出を支援するため ${arrivalTime} で到着します。`,
          pt: `Assistente ${helperName} despachado. Chegando em ${arrivalTime} para auxiliar.`,
          ta: `உதவியாளர் ${helperName} அனுப்பப்பட்டார். ஆவணங்களை சமர்ப்பிக்க உதவ ${arrivalTime} நிமிடங்களில் வருவார்.`,
          hi: `सहायक ${helperName} को भेजा गया। दस्तावेज़ जमा करने में सहायता के लिए ${arrivalTime} में आ रहे हैं।`,
          te: `సహాయకుడు ${helperName} పంపబడింది. పత్రాల సమర్పణకు సహాయం చేయడానికి ${arrivalTime} లో వస్తున్నారు.`
        };
        
        speakText(speakSuccess[lang] || speakSuccess['en']);
        showToast(`Helper ${helperName} dispatched!`);
        logFamilyChatSystem(`Secure Vault Action: Lakshmi ji requested an in-person Document Helper. ${helperName} (Verified) dispatched to house.`);
      }, 3500);
    });
  }
  
  if (cancelDocHelperBtn && docHelperDispatchModal) {
    cancelDocHelperBtn.addEventListener('click', () => {
      if (cancelDocHelperBtn.textContent === "Cancel Request") {
        if (docHelperDispatchTimer) {
          clearTimeout(docHelperDispatchTimer);
          docHelperDispatchTimer = null;
        }
        docHelperDispatchModal.close();
        showToast("Helper request canceled.");
        speakText("Helper request canceled.");
      } else {
        docHelperDispatchModal.close();
      }
    });
  }
  
  if (closeDocHelperModalBtn && docHelperDispatchModal) {
    closeDocHelperModalBtn.addEventListener('click', () => {
      if (docHelperDispatchTimer) {
        clearTimeout(docHelperDispatchTimer);
        docHelperDispatchTimer = null;
      }
      docHelperDispatchModal.close();
    });
  }
  
  if (docHelperDispatchModal) {
    docHelperDispatchModal.addEventListener('click', (e) => {
      if (e.target === docHelperDispatchModal) {
        if (docHelperDispatchTimer) {
          clearTimeout(docHelperDispatchTimer);
          docHelperDispatchTimer = null;
        }
        docHelperDispatchModal.close();
      }
    });
  }

  function updateTimezoneBridge() {
    if (typeof renderFamilyContacts === 'function') {
      renderFamilyContacts();
    }
  }

  function getExpatTimesAndStatuses() {
    const country = document.getElementById('countrySelect').value;
    const now = new Date();
    
    let meeraOffset = 0; // relative to parent local time
    let arunOffset = -9.5; // parent is India (IST), Arun is USA (EST = -9.5 hours)
    
    if (country === 'Japan') {
      meeraOffset = -3.5;
      arunOffset = -13;
    } else if (country === 'United States') {
      meeraOffset = 9.5;
      arunOffset = 0;
    } else if (country === 'United Arab Emirates') {
      meeraOffset = 1.5;
      arunOffset = -8;
    } else if (country === 'Brazil') {
      meeraOffset = 8.5;
      arunOffset = -1;
    }
    
    const meeraTime = new Date(now.getTime() + meeraOffset * 3600000);
    const arunTime = new Date(now.getTime() + arunOffset * 3600000);
    
    function getStatusForTime(dt, name) {
      const hr = dt.getHours();
      const min = dt.getMinutes().toString().padStart(2, '0');
      const ampm = hr >= 12 ? 'PM' : 'AM';
      const hr12 = hr % 12 || 12;
      const timeStr = `${hr12}:${min} ${ampm}`;
      
      let text = '';
      let cssClass = '';
      
      const lang = document.documentElement.lang || 'en';
      
      if (hr >= 23 || hr < 7) {
        cssClass = 'status-sleeping';
        text = {
          en: `${name} is Sleeping (Time: ${timeStr})`,
          ja: `${name}は就寝中 (時間: ${timeStr})`,
          pt: `${name} está dormindo (Hora: ${timeStr})`,
          ta: `${name} உறங்குகிறார் (நேரம்: ${timeStr})`,
          hi: `${name} सो रहे हैं (समय: ${timeStr})`,
          te: `${name} పడుకున్నారు (సమయం: ${timeStr})`
        }[lang] || `${name} is Sleeping (Time: ${timeStr})`;
      } else if (hr >= 9 && hr < 17) {
        cssClass = 'status-work';
        text = {
          en: `${name} is at Work (Better to send a voice note)`,
          ja: `${name}は仕事中 (音声メッセージ推奨)`,
          pt: `${name} está no trabalho (Envie mensagem de voz)`,
          ta: `${name} வேலையில் இருக்கிறார் (குரل செய்தி அனுப்பவும்)`,
          hi: `${name} काम पर हैं (वॉयस नोट भेजना बेहतर है)`,
          te: `${name} పనిలో ఉన్నారు (వాయిస్ నోట్ పంపడం మంచిది)`
        }[lang] || `${name} is at Work (Better to send a voice note)`;
      } else {
        cssClass = 'status-free';
        text = {
          en: `${name} is Awake & Free (Safe to Call)`,
          ja: `${name}は在宅中 (通話可能)`,
          pt: `${name} está livre (Seguro para ligar)`,
          ta: `${name} ஓய்வாக இருக்கிறார் (அழைக்கலாம்)`,
          hi: `${name} जगे और फुर्सत में हैं (कॉल कर सकते हैं)`,
          te: `${name} మేల్కొని ఉన్నారు (కాల్ చేయవచ్చు)`
        }[lang] || `${name} is Awake & Free (Safe to Call)`;
      }
      return { text: text, cssClass: cssClass, time: timeStr };
    }
    
    return {
      meera: getStatusForTime(meeraTime, 'Meera'),
      arun: getStatusForTime(arunTime, 'Arun')
    };
  }

  // Periodic timezone bridge update
  updateTimezoneBridge();
  setInterval(updateTimezoneBridge, 10000);

  // Pillbox Logger
  document.getElementById('markPillTaken').addEventListener('click', () => {
    const seniorName = localStorage.getItem('senior_name') || "Lakshmi Raman";
    triggerCertaintyCheck(`Take a deep breath and confirm: is the Metformin pill physically in your mouth, ${seniorName}?`, () => {
      markMedicationTaken();
      createCertaintyReceipt("Metformin (500mg) Pill", "Swallowed morning Metformin.");
    });
  });
  
  // Gratitude Blessings Card Publisher
  document.getElementById('sendBlessingBtn').addEventListener('click', () => {
    const txtEl = document.getElementById('blessingText');
    const blessing = txtEl.value.trim();
    if (!blessing) {
      showToast("Please write a blessing first.");
      return;
    }
    logFamilyChatSystem(`Lakshmi ji sent a blessing card: "${blessing}"`);
    txtEl.value = '';
    showToast("Blessing sent to family circle!");
    speakText("Blessing successfully broadcasted to your children's feeds.");
  });

  // Scam scanner checkers
  document.getElementById('scanScamTextBtn').addEventListener('click', scanScamMessageText);
  document.getElementById('forwardScamToFamilyBtn').addEventListener('click', forwardScamToFamily);

  // Health Metrics
  document.querySelectorAll('.log-metric-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const metric = e.target.dataset.metric;
      logHealthSignalMetric(metric);
    });
  });

  // Mood selections
  document.querySelectorAll('.mood-selector-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.mood-selector-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  document.getElementById('saveMoodCheckinBtn').addEventListener('click', () => {
    const activeMoodBtn = document.querySelector('.mood-selector-btn.active');
    if (!activeMoodBtn) {
      showToast("Please choose a mood smiley first.");
      return;
    }
    const mood = activeMoodBtn.dataset.mood;
    const note = document.getElementById('moodJournalNote').value.trim();
    
    showToast(`Mood logged as ${mood}`);
    logFamilyChatSystem(`Mood Checkin: Lakshmi ji logged feeling ${mood}`);
    
    if (mood === 'Lonely' || mood === 'Anxious') {
      document.getElementById('relaxationAudioCard').classList.remove('d-none');
      speakText("I noticed you feel a bit lonely. Let me launch our soothing relaxation soundscape.");
    } else {
      document.getElementById('relaxationAudioCard').classList.add('d-none');
      stopCalmingSoundscape();
    }
  });

  // Calming relax audio players
  document.getElementById('playRelaxationSound').addEventListener('click', playCalmingSoundscape);
  document.getElementById('pauseRelaxationSound').addEventListener('click', stopCalmingSoundscape);

  // Drag Drop files uploads
  document.getElementById('fileSelectBtn').addEventListener('click', () => {
    document.getElementById('fileInputSelect').click();
  });
  document.getElementById('fileInputSelect').addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      document.getElementById('docUploadTitle').value = e.target.files[0].name.split('.')[0];
      showToast("File selected. Click Secure Document below.");
    }
  });
  document.getElementById('confirmUploadDocBtn').addEventListener('click', simulateDocumentUpload);

  // Story record micro controllers
  document.getElementById('micRecordBtn').addEventListener('click', toggleLegacyVoiceRecording);
  document.getElementById('saveStoryBtn').addEventListener('click', () => {
    const textEl = document.getElementById('writtenStoryText');
    const text = textEl.value.trim();
    if (!text) {
      showToast("Please record or write your memory text first.");
      return;
    }
    
    const newStory = {
      id: `leg_${Date.now()}`,
      title: document.getElementById('storyPromptTitle').textContent,
      content: text,
      date: new Date().toLocaleDateString()
    };
    
    // Add to list
    const storiesList = document.getElementById('legacyStoriesList');
    const card = document.createElement('div');
    card.className = 'legacy-journal-card';
    card.innerHTML = `
      <div class="legacy-journal-card-header">
        <strong>${newStory.title}</strong>
        <span>Date: ${newStory.date}</span>
      </div>
      <p class="legacy-journal-body">"${newStory.content}"</p>
    `;
    storiesList.insertBefore(card, storiesList.firstChild);
    
    textEl.value = '';
    showToast("Story saved to private family legacy vault!");
    logFamilyChatSystem(`Legacy Memory Added: ${newStory.title}`);
    speakText("Memory saved and transcribed into your family history journal.");
  });

  // Story prompts helper cycling
  const prompts = [
    '"What was the house you lived in as a child like?"',
    '"Who was your best friend in elementary school?"',
    '"What was your first job, and how much did it pay?"',
    '"What is the most traditional recipe passed down in your family?"',
    '"What advice would you give to your grandchildren today?"'
  ];
  let currentPromptIdx = 0;
  document.getElementById('nextPromptBtn').addEventListener('click', () => {
    currentPromptIdx = (currentPromptIdx + 1) % prompts.length;
    document.getElementById('storyPromptTitle').textContent = prompts[currentPromptIdx];
  });

  // SOS Countdown triggers
  document.getElementById('sidebarSos').addEventListener('click', triggerEmergencySos);
  document.getElementById('cancelSosButton').addEventListener('click', cancelEmergencySos);
  document.getElementById('terminateSosButton').addEventListener('click', closeActiveSosEmergency);

  // Planner Custom Reminders Add
  document.getElementById('addCustomReminderBtn').addEventListener('click', () => {
    const title = document.getElementById('reminderTitle').value.trim();
    const time = document.getElementById('reminderTime').value;
    const cat = document.getElementById('reminderCategory').value;
    
    if (!title) {
      showToast("Please enter a reminder name.");
      return;
    }
    
    // Add event card
    const container = document.getElementById('plannerEventsTimeline');
    const card = document.createElement('div');
    card.className = 'timeline-event-card active';
    card.innerHTML = `
      <span class="event-time-badge">${time}</span>
      <h4 class="event-name-txt">${title}</h4>
      <p class="event-details-txt">Category: ${cat.toUpperCase()}</p>
    `;
    container.appendChild(card);
    
    // Sync to checklists
    const list = document.getElementById('routineChecklist');
    const item = document.createElement('li');
    item.className = 'checklist-item';
    item.innerHTML = `
      <label class="check-label">
        <input type="checkbox" class="large-checkbox">
        <span class="chk-custom"></span>
        <div>
          <strong>${time} - ${title}</strong>
          <p>${cat.toUpperCase()}</p>
        </div>
      </label>
    `;
    list.appendChild(item);
    
    document.getElementById('reminderTitle').value = '';
    showToast("Event scheduled successfully!");
    logFamilyChatSystem(`Calendar Scheduled: ${title} at ${time}`);
    speakText(`Scheduled ${title} for ${time}`);
  });

  // Marketplace offerings creator preview binding
  const skillTitleInput = document.getElementById('wisdomSkillTitle');
  const sessionTypeSelect = document.getElementById('wisdomSessionType');
  const priceInput = document.getElementById('wisdomPrice');
  const coverSelect = document.getElementById('wisdomCardCover');

  function updateWisdomCardPreview() {
    document.getElementById('previewOfferTitle').textContent = skillTitleInput.value || 'Traditional South Indian Cooking';
    document.getElementById('previewOfferFormat').textContent = sessionTypeSelect.options[sessionTypeSelect.selectedIndex].text;
    document.getElementById('previewOfferPrice').textContent = priceInput.value || '₹499';
    
    const coverClass = coverSelect.value;
    const coverBackground = document.getElementById('previewCoverBackground');
    coverBackground.className = `preview-cover-graphic ${coverClass}`;
  }

  skillTitleInput.addEventListener('input', updateWisdomCardPreview);
  sessionTypeSelect.addEventListener('change', updateWisdomCardPreview);
  priceInput.addEventListener('input', updateWisdomCardPreview);
  coverSelect.addEventListener('change', updateWisdomCardPreview);

  document.getElementById('publishWisdomOfferBtn').addEventListener('click', () => {
    const title = skillTitleInput.value.trim();
    const format = sessionTypeSelect.options[sessionTypeSelect.selectedIndex].text;
    const price = priceInput.value.trim();
    
    if (!title || !price) {
      showToast("Please complete skill title and price details.");
      return;
    }
    
    const newOffer = { id: `wis_${Date.now()}`, title, format, price };
    wisdomListingRegistry.push(newOffer);
    renderWisdomListingRegistry();
    
    showToast("Wisdom listing published!");
    logFamilyChatSystem(`New Wisdom Listing Published: ${title} at ${price}`);
    speakText("Listing published to public senior marketplace.");
  });

  // Family Chat Input bindings
  // 17.1 SENIOR VOICE CHAT FEATURES IN FAMILY NUDGE CHAT
  const dictationFallbackPhrases = {
    en: [
      "Hi Meera, I completed my morning walk.",
      "I took my morning medicine on time.",
      "All good here! Call me when you get time.",
      "Sending you my love and blessings!",
      "Can we talk today? Missing you."
    ],
    ja: [
      "美羅（みーら）、朝の散歩が終わりました。",
      "朝の薬は時間通りに飲みましたよ。",
      "こちらはすべて順調です！時間がある時に電話をくださいね。",
      "愛と祝福を送ります！",
      "今日話せますか？寂しいです。"
    ],
    pt: [
      "Oi Meera, terminei minha caminhada matinal.",
      "Tomei meu remédio da manhã na hora certa.",
      "Tudo bem por aqui! Me ligue quando tiver tempo.",
      "Enviando meu amor e bênçãos!",
      "Podemos conversar hoje? Saudades."
    ],
    ta: [
      "மீரா, நான் காலை நடப்பயிற்சியை முடித்துவிட்டேன்.",
      "காலை மருந்தை சரியான நேரத்தில் சாப்பிட்டேன்.",
      "இங்கு எல்லாம் நலம்! நேரம் கிடைக்கும்போது கூப்பிடு.",
      "என் அன்பும் ஆசிகளும்!",
      "இன்று பேசலாமா? உன்னை நினைத்துக் கொள்கிறேன்."
    ],
    hi: [
      "मीरा, मैंने अपनी सुबह की सैर पूरी कर ली है।",
      "मैंने सुबह की दवा समय पर ले ली थी।",
      "यहाँ सब ठीक है! समय मिलने पर मुझे फोन करना।",
      "तुम्हें मेरा ढेर सारा प्यार और आशीर्वाद!",
      "क्या हम आज बात कर सकते हैं? तुम्हारी याद आ रही है।"
    ],
    te: [
      "మీరా, నేను నా ఉదయం నడకను పూర్తి చేశాను.",
      "నేను ఉదయం మందులను సమయానికి వేసుకున్నాను.",
      "ఇక్కడ అంతా బాగుంది! ఖాళీ ఉన్నప్పుడు ఫోన్ చెయ్యి.",
      "నీకు నా ప్రేమ మరియు ఆశీస్సులు!",
      "ఈరోజు మాట్లాడుకుందామా? నిన్ను మిస్ అవుతున్నాను."
    ]
  };

  function populateChatQuickPhrases() {
    const container = document.getElementById('chatQuickPhrasesBar');
    if (!container) return;
    const lang = document.documentElement.lang || 'en';
    const phrases = dictationFallbackPhrases[lang] || dictationFallbackPhrases['en'];
    container.innerHTML = `
      <span style="font-size: var(--font-xs); color: var(--text-muted); margin-right: 8px; font-weight: bold; display: inline-block; vertical-align: middle;">
        ${lang === 'ja' ? 'クイック入力:' : (lang === 'pt' ? 'Frases rápidas:' : (lang === 'ta' ? 'விரைவு உரை:' : (lang === 'hi' ? 'त्वरित वाक्य:' : (lang === 'te' ? 'త్వరిత వాక్యాలు:' : 'Quick Speak:'))))}
      </span>
    ` + phrases.map(p => `<button class="quick-phrase-btn" data-text="${p}">${p}</button>`).join('');
    
    container.querySelectorAll('.quick-phrase-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.target.dataset.text;
        const inputEl = document.getElementById('familyChatInput');
        if (inputEl) {
          inputEl.value = text;
          inputEl.focus();
        }
        showToast("Selected phrase inserted!");
      });
    });
  }

  window.populateChatQuickPhrases = populateChatQuickPhrases; // Make it visible globally

  let chatSpeechRecognizer = null;
  let isChatListening = false;

  function initChatSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    chatSpeechRecognizer = new SpeechRecognition();
    chatSpeechRecognizer.continuous = false;
    chatSpeechRecognizer.interimResults = false;

    chatSpeechRecognizer.onstart = () => {
      isChatListening = true;
      const btn = document.getElementById('chatVoiceTypingBtn');
      if (btn) btn.classList.add('active-listening');
      const inputEl = document.getElementById('familyChatInput');
      if (inputEl) {
        inputEl.placeholder = "Listening... Speak now...";
        inputEl.focus();
      }
      showToast("Voice typing active. Speak now.");
    };

    chatSpeechRecognizer.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      const inputEl = document.getElementById('familyChatInput');
      if (inputEl) {
        inputEl.value = speechResult;
      }
      showToast("Speech recognized! Sending...");
      setTimeout(() => {
        const sendBtn = document.getElementById('sendFamilyChatMessage');
        if (sendBtn) sendBtn.click();
      }, 1000);
    };

    chatSpeechRecognizer.onerror = (event) => {
      console.error("Chat speech error", event);
      showToast("Could not recognize voice. Use Quick Speak buttons below.");
      const qpBar = document.getElementById('chatQuickPhrasesBar');
      if (qpBar) {
        qpBar.classList.remove('d-none');
        qpBar.style.display = 'flex';
        populateChatQuickPhrases();
      }
      stopChatSpeechRecognition();
    };

    chatSpeechRecognizer.onend = () => {
      stopChatSpeechRecognition();
    };
  }

  function startChatSpeechRecognition() {
    if (!chatSpeechRecognizer) {
      initChatSpeechRecognition();
    }
    if (!chatSpeechRecognizer) {
      showToast("Voice recognition not supported on this browser. Try Quick Speak below.");
      const qpBar = document.getElementById('chatQuickPhrasesBar');
      if (qpBar) {
        qpBar.classList.remove('d-none');
        qpBar.style.display = 'flex';
        populateChatQuickPhrases();
      }
      return;
    }
    
    const activeLang = document.documentElement.lang || 'en';
    const locales = {
      ta: 'ta-IN',
      hi: 'hi-IN',
      te: 'te-IN',
      ja: 'ja-JP',
      pt: 'pt-BR',
      en: 'en-US'
    };
    chatSpeechRecognizer.lang = locales[activeLang] || 'en-US';

    try {
      chatSpeechRecognizer.start();
    } catch (e) {
      console.error(e);
      stopChatSpeechRecognition();
    }
  }

  function stopChatSpeechRecognition() {
    isChatListening = false;
    const btn = document.getElementById('chatVoiceTypingBtn');
    if (btn) btn.classList.remove('active-listening');
    const inputEl = document.getElementById('familyChatInput');
    if (inputEl) {
      inputEl.placeholder = "Type a message to Meera & Arun...";
    }
    if (chatSpeechRecognizer) {
      try {
        chatSpeechRecognizer.stop();
      } catch(e) {}
    }
  }

  // Voice Note recording simulation
  let voiceRecordingInterval = null;
  let voiceRecordingSeconds = 0;

  function startVoiceRecording() {
    voiceRecordingSeconds = 0;
    document.getElementById('recordingTimeDisplay').textContent = "0:00";
    document.getElementById('chatInputRow').classList.add('d-none');
    document.getElementById('chatRecordingRow').classList.remove('d-none');
    document.getElementById('chatRecordingRow').style.display = 'flex';

    if (voiceRecordingInterval) clearInterval(voiceRecordingInterval);
    voiceRecordingInterval = setInterval(() => {
      voiceRecordingSeconds++;
      const mins = Math.floor(voiceRecordingSeconds / 60);
      const secs = voiceRecordingSeconds % 60;
      document.getElementById('recordingTimeDisplay').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
    showToast("Recording voice note. Tap Stop to send.");
  }

  function stopVoiceRecording(shouldSave = true) {
    if (voiceRecordingInterval) {
      clearInterval(voiceRecordingInterval);
      voiceRecordingInterval = null;
    }
    document.getElementById('chatRecordingRow').classList.add('d-none');
    document.getElementById('chatRecordingRow').style.display = 'none';
    document.getElementById('chatInputRow').classList.remove('d-none');

    if (shouldSave && voiceRecordingSeconds > 0) {
      sendVoiceNote(voiceRecordingSeconds);
    }
  }

  function playVoiceSynthChime() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(330, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + 0.3);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      console.warn("Web Audio chime failed", e);
    }
  }

  let activeAudioIntervals = [];

  function attachVoicePlayLogic(bubble, seconds) {
    const playBtn = bubble.querySelector('.audio-play-btn');
    const playSvg = playBtn.querySelector('.play-svg');
    const pauseSvg = playBtn.querySelector('.pause-svg');
    const waveBars = bubble.querySelectorAll('.wave-bar');
    
    let isPlaying = false;
    let playbackInterval = null;
    let elapsedMs = 0;
    const totalMs = seconds * 1000;

    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        isPlaying = false;
        clearInterval(playbackInterval);
        playSvg.classList.remove('d-none');
        pauseSvg.classList.add('d-none');
        if (synthesisEngine) synthesisEngine.cancel();
      } else {
        // Clear active intervals
        activeAudioIntervals.forEach(interval => clearInterval(interval));
        document.querySelectorAll('.chat-bubble.voice-note').forEach(b => {
          const btn = b.querySelector('.audio-play-btn');
          if (btn) {
            btn.querySelector('.play-svg').classList.remove('d-none');
            btn.querySelector('.pause-svg').classList.add('d-none');
          }
          b.querySelectorAll('.wave-bar').forEach(wb => wb.classList.remove('active'));
        });

        isPlaying = true;
        playSvg.classList.add('d-none');
        pauseSvg.classList.remove('d-none');
        
        playVoiceSynthChime();

        const activeLang = document.documentElement.lang || 'en';
        const playbackCaptions = {
          en: "Playing recorded voice message. Sending love to family.",
          ja: "録音された音声メッセージを再生します。家族への愛を送ります。",
          pt: "Reproduzindo mensagem de voz gravada. Enviando amor para a família.",
          ta: "பதிவு செய்யப்பட்ட குரல் செய்தி ஒலிக்கிறது. குடும்பத்திற்கு அன்பு செலுத்துகிறார்.",
          hi: "रिकॉर्ड किया गया वॉयस मैसेज चल रहा है। परिवार को प्यार भेज रही हैं।",
          te: "రికార్డ్ చేసిన వాయిస్ మెసేజ్ ప్లే అవుతోంది. కుటుంబానికి ప్రేమను పంపుతోంది."
        };
        const caption = playbackCaptions[activeLang] || playbackCaptions['en'];
        speakText(caption);

        playbackInterval = setInterval(() => {
          elapsedMs += 100;
          const percentage = (elapsedMs / totalMs) * 100;
          
          const activeCount = Math.floor((percentage / 100) * waveBars.length);
          waveBars.forEach((bar, index) => {
            if (index < activeCount) {
              bar.classList.add('active');
            } else {
              bar.classList.remove('active');
            }
          });

          if (elapsedMs >= totalMs) {
            isPlaying = false;
            clearInterval(playbackInterval);
            playSvg.classList.remove('d-none');
            pauseSvg.classList.add('d-none');
            waveBars.forEach(bar => bar.classList.remove('active'));
            elapsedMs = 0;
          }
        }, 100);

        activeAudioIntervals.push(playbackInterval);
      }
    });
  }

  function sendVoiceNote(seconds) {
    const durationText = `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
    const logs = document.getElementById('familyChatLogs');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble sent voice-note';
    
    let waveformHtml = '';
    const barCount = 18;
    for (let i = 0; i < barCount; i++) {
      const height = Math.floor(Math.random() * 18) + 8;
      waveformHtml += `<span class="wave-bar" style="height: ${height}px;"></span>`;
    }

    bubble.innerHTML = `
      <div class="chat-bubble-header">
        <div class="sender-meta">Me · Now</div>
        <span class="voice-badge">Voice Note</span>
      </div>
      <div class="audio-player-wrapper">
        <button class="audio-play-btn" aria-label="Play voice note">
          <svg class="play-svg" viewBox="0 0 24 24" width="16" height="16"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <svg class="pause-svg d-none" viewBox="0 0 24 24" width="16" height="16"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        </button>
        <div class="waveform-container">
          ${waveformHtml}
          <div class="audio-progress-bar"></div>
        </div>
        <span class="audio-duration">${durationText}</span>
      </div>
    `;

    logs.appendChild(bubble);
    logs.scrollTop = logs.scrollHeight;

    attachVoicePlayLogic(bubble, seconds);

    // Send simulated reply
    setTimeout(() => {
      logFamilyChatResponse("Meera", "Thanks for the voice message, Mum! It's so nice to hear your voice. I will listen to it properly and call you in a bit.");
      speakText("New reply in family circle from Meera.");
    }, 2000);
  }

  // Bind click triggers for voice controls
  document.getElementById('chatVoiceTypingBtn').addEventListener('click', () => {
    const qpBar = document.getElementById('chatQuickPhrasesBar');
    if (qpBar) {
      if (qpBar.classList.contains('d-none')) {
        qpBar.classList.remove('d-none');
        qpBar.style.display = 'flex';
        populateChatQuickPhrases();
      } else {
        qpBar.classList.add('d-none');
        qpBar.style.display = 'none';
      }
    }

    if (isChatListening) {
      stopChatSpeechRecognition();
    } else {
      startChatSpeechRecognition();
    }
  });

  document.getElementById('chatVoiceNoteBtn').addEventListener('click', () => {
    startVoiceRecording();
  });

  document.getElementById('cancelVoiceRecordBtn').addEventListener('click', () => {
    stopVoiceRecording(false);
    showToast("Voice message recording cancelled.");
  });

  document.getElementById('stopAndSendVoiceRecordBtn').addEventListener('click', () => {
    stopVoiceRecording(true);
  });

  // Bind listen-back click listener to initial chat bubble
  document.querySelectorAll('.chat-logs-container .chat-bubble').forEach(b => {
    const listenBtn = b.querySelector('.chat-listen-btn');
    const textEl = b.querySelector('.chat-text');
    if (listenBtn && textEl) {
      listenBtn.addEventListener('click', () => {
        speakText(textEl.textContent);
      });
    }
    // Also make sure data-icon volume is populated
    const volIcon = b.querySelector('[data-icon="volume"]');
    if (volIcon) {
      volIcon.innerHTML = icons.volume;
    }
  });

  // Family Chat Input bindings
  document.getElementById('familyChatInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('sendFamilyChatMessage').click();
    }
  });

  document.getElementById('sendFamilyChatMessage').addEventListener('click', () => {
    const inputEl = document.getElementById('familyChatInput');
    const msg = inputEl.value.trim();
    if (!msg) return;
    
    // Add sent bubble
    const logs = document.getElementById('familyChatLogs');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble sent';
    bubble.innerHTML = `
      <div class="chat-bubble-header">
        <div class="sender-meta">Me · Now</div>
        <button class="chat-listen-btn" aria-label="Listen back" title="Listen back">
          <span data-icon="volume"></span>
        </button>
      </div>
      <p class="chat-text">${msg}</p>
    `;
    logs.appendChild(bubble);
    bubble.querySelector('[data-icon="volume"]').innerHTML = icons.volume;
    bubble.querySelector('.chat-listen-btn').addEventListener('click', () => {
      speakText(msg);
    });

    inputEl.value = '';
    logs.scrollTop = logs.scrollHeight;
    
    // Close quick phrases bar if open
    const qpBar = document.getElementById('chatQuickPhrasesBar');
    if (qpBar) {
      qpBar.classList.add('d-none');
      qpBar.style.display = 'none';
    }
    stopChatSpeechRecognition();
    
    // Process simulated replies
    setTimeout(() => {
      if (msg.toLowerCase().includes('med') || msg.toLowerCase().includes('pill') || msg.toLowerCase().includes('take')) {
        logFamilyChatResponse("Meera", "Thanks for taking your meds, Mum! Make sure you get plenty of water today.");
      } else if (msg.toLowerCase().includes('walk') || msg.toLowerCase().includes('step')) {
        logFamilyChatResponse("Meera", "Awesome job on the steps! The weather looks good in Chennai today.");
      } else {
        logFamilyChatResponse("Meera", "Glad to hear from you, Mum! I will call you tonight around 8 PM.");
      }
      speakText("New reply in family circle from Meera.");
    }, 1200);
  });

  // 17.2 AI COMPANION VIEW EVENT BINDINGS
  const companionFallbackPhrases = {
    en: [
      "How is the weather today?",
      "Tell me a short wisdom story.",
      "Help me relax for 5 minutes.",
      "What is my medication schedule?",
      "I am feeling a bit lonely."
    ],
    ja: [
      "今日の天気はどうですか？",
      "短い知恵の物語を話してください。",
      "5分間リラックスするのを手伝ってください。",
      "私の薬のスケジュールはどうなっていますか？",
      "少し寂しい気分です。"
    ],
    pt: [
      "Como está o tempo hoje?",
      "Me conte uma história curta de sabedoria.",
      "Me ajude a relaxar por 5 minutos.",
      "Qual é o meu cronograma de medicamentos?",
      "Estou me sentindo um pouco sozinho."
    ],
    ta: [
      "இன்றைய வானிலை எப்படி உள்ளது?",
      "ஒரு குட்டி அறிவு கதை சொல்லுங்கள்.",
      "5 நிமிடங்கள் தியானிக்க உதவுங்கள்.",
      "எனது மருந்து அட்டவணை என்ன?",
      "நான் கொஞ்சம் தனிமையாக உணர்கிறேன்."
    ],
    hi: [
      "आज मौसम कैसा है?",
      "मुझे एक छोटी ज्ञान की कहानी सुनाओ।",
      "5 मिनट के लिए मुझे ध्यान लगाने में मदद करो।",
      "मेरी दवा का शेड्यूल क्या है?",
      "मुझे थोड़ा अकेलापन लग रहा है।"
    ],
    te: [
      "ఈ రోజు వాతావరణం ఎలా ఉంది?",
      "నాకో చిన్న నీతి కథ చెప్పండి.",
      "5 నిమిషాలు ప్రశాంతంగా ఉండటానికి సహాయపడండి.",
      "నా మందుల వేళల పట్టిక ఏమిటి?",
      "నేను కొంచెం ఒంటరిగా ఉన్నాను."
    ]
  };

  function replyFromAiCompanion(msg) {
    const lang = document.documentElement.lang || 'en';
    const text = msg.toLowerCase();
    const seniorInput = document.getElementById('seniorNameInput');
    const senior = (seniorInput && seniorInput.value.trim()) || "Lakshmi Raman";
    const compInput = document.getElementById('companionNameInput');
    const companion = (compInput && compInput.value.trim()) || "Sathi";
    const cityInput = document.getElementById('cityInput');
    const city = (cityInput && cityInput.value.trim()) || "Chennai";
    const country = document.getElementById('countrySelect').value;

    let replyText = "";
    
    // Detect language change requested in conversation
    function detectLanguageChange(t) {
      if (t.includes('english') || t.includes('ஆங்கிலம்') || t.includes('अंग्रेजी') || t.includes('ఆంగ్లం') || t.includes('英語') || t.includes('inglês')) {
        return 'en';
      }
      if (t.includes('japanese') || t.includes('nihongo') || t.includes('日本語') || t.includes('japonês') || t.includes('ஜப்பானிய') || t.includes('जापानी') || t.includes('జపనీస్')) {
        return 'ja';
      }
      if (t.includes('portuguese') || t.includes('português') || t.includes('fale em português') || t.includes('போர்த்துகீசியம்') || t.includes('पुर्तगाली') || t.includes('పోర్చుగీస్') || t.includes('portugues')) {
        return 'pt';
      }
      if (t.includes('tamil') || t.includes('தமிழ்') || t.includes('தமிழில்') || t.includes('तमिल') || t.includes('తమిళం') || t.includes('தமிள்')) {
        return 'ta';
      }
      if (t.includes('hindi') || t.includes('हिंदी') || t.includes('हिन्दी') || t.includes('हिन्दि') || t.includes('इसदी') || t.includes('హిందీ')) {
        return 'hi';
      }
      if (t.includes('telugu') || t.includes('తెలుగు') || t.includes('తేలుగు')) {
        return 'te';
      }
      return null;
    }

    const requestedLang = detectLanguageChange(text);
    if (requestedLang) {
      const langSelect = document.getElementById('languageSelect');
      if (langSelect) {
        langSelect.value = requestedLang;
      }
      localizeApp(requestedLang);
      
      // Update mascot configuration for the new language context
      if (typeof renderCompanionMascot === 'function') {
        renderCompanionMascot(country);
      }
      
      const confirmMsgs = {
        en: "Oh, absolutely! I have switched my language to English. How can I help you today?",
        ja: "はい、承知いたしました！日本語に切り替えました。本日はどのような用件でしょうか？",
        pt: "Com certeza! Mudei meu idioma para o português. Como posso te ajudar hoje?",
        ta: "நிச்சயமாக! நான் எனது மொழியைத் தமிழுக்கு மாற்றியுள்ளேன். இன்று உங்களுக்கு எவ்வாறு உதவ முடியும்?",
        hi: "जी बिल्कुल! मैंने अपनी भाषा हिंदी में बदल दी है। आज मैं आपकी क्या मदद कर सकता हूँ?",
        te: "తప్పకుండా! నేను నా భాషను తెలుగులోకి మార్చాను. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?"
      };
      
      const changeReply = confirmMsgs[requestedLang] || confirmMsgs['en'];
      
      setTimeout(() => {
        const logs = document.getElementById('companionChatLogs');
        if (!logs) return;
        const currentCompanionName = (document.getElementById('companionNameInput') && document.getElementById('companionNameInput').value.trim()) || companion;
        
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble received';
        bubble.innerHTML = `
          <div class="chat-bubble-header">
            <div class="sender-meta">${currentCompanionName} · Now</div>
            <button class="chat-listen-btn" aria-label="Listen back" title="Listen back">
              <span data-icon="volume"></span>
            </button>
          </div>
          <p class="chat-text">${changeReply}</p>
        `;
        logs.appendChild(bubble);
        bubble.querySelector('[data-icon="volume"]').innerHTML = icons.volume;
        bubble.querySelector('.chat-listen-btn').addEventListener('click', () => {
          speakText(changeReply);
        });
        logs.scrollTop = logs.scrollHeight;
        
        speakText(changeReply);
      }, 1000);
      return;
    }
    
    // Rule-based classification helper function
    function generateRuleBasedResponse(text, lang, senior, companion, city, country, msg) {
      let replyText = "";
      if (text.includes('weather') || text.includes('मौसम') || text.includes('வானிலை') || text.includes('వాతావరణం') || text.includes('天気') || text.includes('tempo')) {
        const weatherReplies = {
          en: `The weather in ${city} is currently warm and pleasant at 28°C. A great day to sit near the window or take a gentle stroll!`,
          ja: `${city}の現在の天気は穏やかで、気温は22°Cです。窓の近くで読書をするか、軽い散歩をするのにぴったりの日ですね！`,
          pt: `O tempo em ${city} está atualmente agradável, com 24°C. Um ótimo dia para se sentar perto da janela ou dar uma caminhada leve!`,
          ta: `${city}-யில் தற்போது வானிலை இதமாக 28°C ஆக உள்ளது. ஜன்னல் அருகில் அமர அல்லது ஒரு சிறிய உலா செல்ல இது நல்ல நாள்!`,
          hi: `${city} में वर्तमान में मौसम सुहावना और 28°C है। खिड़की के पास बैठने या थोड़ी सैर करने के लिए यह बहुत अच्छा दिन है!`,
          te: `${city}లో వాతావరణం ప్రస్తుతం హాయిగా 28°C వద్ద ఉంది. కిటికీ దగ్గర కూర్చోవడానికి లేదా చిన్న నడకకు ఇది చాలా మంచి రోజు!`
        };
        replyText = weatherReplies[lang] || weatherReplies['en'];
      }
      else if (text.includes('story') || text.includes('wisdom') || text.includes('कहानी') || text.includes('கதை') || text.includes('కథ') || text.includes('話') || text.includes('história')) {
        // Cultural stories based on country selection
        if (country === 'India') {
          const stories = {
            en: `Here is a story of Birbal's wisdom, ${senior}. Once, Emperor Akbar asked him how many crows are in the city. Birbal immediately replied, "Twenty-one thousand, five hundred and twenty-three." Akbar was amazed. Birbal smiled, "If there are more, they must be visiting relatives. If fewer, they must have gone out of town." Moral: Clever thinking always finds a way!`,
            ta: `தெனாலி ராமனின் ஒரு கதை இதோ, ${senior}. ஒருமுறை அரசர் கிருஷ்ணதேவராயர் ராமனிடம் ஒரு குடம் நிறைய தங்கக் காசுகளைக் கொடுத்து, உலகிலேயே சிறந்த பொருளை வாங்கி வரச் சொன்னார். ராமன் அடுத்த நாள் வெறும் களிமண்ணைக் கொண்டு வந்தான். அரசர் கோபமடைந்தார். ராமன் சிரித்துக் கொண்டே, "அரசே, களிமண் தான் உலகிலேயே சிறந்தது, ஏனென்றால் இதிலிருந்து தான் நம் உணவைத் தரும் பயிர்கள் வளர்கின்றன" என்றான். அரசர் ராமனின் அறிவை மெச்சினார்!`,
            hi: `यहाँ बीरबल की बुद्धिमानी की एक कहानी है, ${senior}। एक बार बादशाह अकबर ने बीरबल से पूछा कि शहर में कितने कौवे हैं। बीरबल ने तुरंत उत्तर दिया, "इक्कीस हजार पांच सौ तेईस।" अकबर हैरान रह गए। बीरबल मुस्कुराए, "हुजूर, यदि अधिक हैं, तो वे रिश्तेदारों से मिलने आए होंगे। यदि कम हैं, तो वे शहर से बाहर गए होंगे।" सीख: चतुर सोच हमेशा रास्ता ढूंढ लेती है!`,
            te: `తెనాలి రామకృష్ణుడి నీతి కథ ఒకటి వినండి, ${senior}. ఒకసారి కృష్ణదేవరాయలు తన తోటలోని పండ్ల చెట్లను కాపాడటానికి గొర్రెల కాపరులను నియమించాడు. రామకృష్ణుడు ఒక కోతిని తోటలోకి తెచ్చి రాయలవారి ముందు ఉంచాడు. రాయలవారు కోపగించగా, రామకృష్ణుడు "మహారాజా, ఈ కోతి పండ్లను తింటుంది కానీ చెట్లను నరకదు, మనుషులైతే చెట్లనే నరికేస్తారు" అని పర్యావరణ రక్షణ గురించి తెలిపాడు. రాయలవారు సంతోషించి బహుమతులు ఇచ్చారు!`
          };
          replyText = stories[lang] || stories['en'];
        } else if (country === 'Japan') {
          const stories = {
            en: `Here is a Zen story for you, ${senior}. A master named Nan-in served tea to a visiting professor. Nan-in poured the cup full, and then kept pouring. The professor watched it overflow until he could no longer contain himself: "It is overfull! No more will go in!" Nan-in replied, "Like this cup, you are full of your own opinions. How can I show you Zen unless you first empty your cup?"`,
            ja: `${senior}さん、禅のお話をお届けします。南隠という禅師が、訪ねてきた大学教授にお茶を淹れました。禅師は湯呑みが一杯になっても、お茶を注ぎ続けました。教授は溢れるのを見て耐えかね、「もう入りません！」と叫びました。禅師は言いました。「この湯呑みのように、あなたも自分の意見で満ちています。まず自分の器を空にしなければ、どうして禅を伝えることができるでしょうか。」`
          };
          replyText = stories[lang] || stories['ja'] || stories['en'];
        } else if (country === 'Brazil') {
          const stories = {
            en: `Here is a folk story from Brazil, ${senior}. The tiny hummingbird was carrying drops of water in its beak to put out a huge forest fire. The other animals laughed: "Do you think you can put out the fire with that?" The hummingbird replied, "I am only doing my part." Hearing this, the jaguar, the macaw, and the monkeys joined in. Together, they saved the rainforest. Moral: Every small action counts when we work together!`,
            pt: `Aqui está uma história folclórica do Brasil, ${senior}. O pequeno beija-flor carregava gotas de água em seu bico para apagar um incêndio na floresta. Os outros animais riram: "Você acha que pode apagar o fogo com isso?" O beija-flor respondeu: "Estou apenas fazendo a minha parte." Ao ouvir isso, a onça-pintada, a arara e os macacos se juntaram. Juntos, eles salvaram a floresta. Moral: Cada pequena ação conta quando trabalhamos juntos!`
          };
          replyText = stories[lang] || stories['pt'] || stories['en'];
        } else {
          const stories = {
            en: `Here is a story of warm hospitality, ${senior}. In the desert, a traveler sat tiredly under a palm tree. A local shepherd approached him, not asking who he was or where he came from, but simply offering a bowl of fresh dates and cool camel milk. Reinvigorated, the traveler thanked the shepherd. The shepherd smiled and said, "True wealth is not what you own, but what you share with the weary."`
          };
          replyText = stories[lang] || stories['en'];
        }
      }
      else if (text.includes('relax') || text.includes('meditation') || text.includes('ध्यान') || text.includes('தியானம்') || text.includes('ధ్యానం') || text.includes('瞑想') || text.includes('relaxar')) {
        const relaxReplies = {
          en: `Let us breathe together, ${senior}. Take a deep breath in... 1, 2, 3... and let it slowly go... 1, 2, 3. Feel your shoulders drop and relax. You are doing wonderfully today.`,
          ja: `一緒に呼吸を整えましょう、${senior}さん。深く息を吸って… 1、2、3… そしてゆっくり吐き出します… 1、2、3。肩の力を抜いて、リラックスしてくださいね。`,
          pt: `Vamos respirar juntos, ${senior}. Inspire profundamente... 1, 2, 3... e expire lentamente... 1, 2, 3. Sinta seus ombros relaxarem. Você está indo muito bem hoje.`,
          ta: `ஒன்றாக தியானிப்போம், ${senior}. மூச்சை ஆழமாக இழுக்கவும்... 1, 2, 3... இப்போது மெதுவாக வெளியிடவும்... 1, 2, 3. உங்கள் உடல் தளர்வடைவதை உணருங்கள். நீங்கள் நன்றாக இருக்கிறீர்கள்.`,
          hi: `आइए मिलकर गहरी सांस लें, ${senior}। एक गहरी सांस अंदर लें... 1, 2, 3... और धीरे-धीरे बाहर छोड़ें... 1, 2, 3। अपने कंधों को ढीला छोड़ें और आराम महसूस करें। आप बहुत अच्छे हैं।`,
          te: `కలిసి ధ్యానం చేద్దాం, ${senior}. నిదానంగా శ్వాస తీసుకోండి... 1, 2, 3... ఇప్పుడు మెల్లగా శ్వాస వదలండి... 1, 2, 3. మీ శరీరాన్ని ప్రశాంతంగా ఉంచండి. మీరు చాలా బాగున్నారు.`
        };
        replyText = relaxReplies[lang] || relaxReplies['en'];
      }
      else if (text.includes('lonely') || text.includes('sad') || text.includes('अकेला') || text.includes('தனிமை') || text.includes('ఒంటరి') || text.includes('寂しい') || text.includes('triste') || text.includes('só')) {
        const empathyReplies = {
          en: `I am right here with you, ${senior}. You are never alone. ${companion} is always ready to talk or play some music. Remember that your daughter Meera loves you very much! How about we listen to some soothing songs together?`,
          ja: `私はいつもここにいますよ、${senior}さん。あなたは決して一人ではありません。いつでもお話相手になりますし、音楽をかけることもできます。娘の美羅（みーら）さんもあなたのことをとても大切に思っていますよ！一緒に穏やかな曲を聴きませんか？`,
          pt: `Estou bem aqui com você, ${senior}. Você nunca está sozinho. Eu, ${companion}, estou sempre pronto para conversar ou tocar uma música. Lembre-se de que sua família te ama muito! Que tal ouvirmos algumas músicas calmantes juntos?`,
          ta: `நான் உங்களுடனே இருக்கிறேன், ${senior}. நீங்கள் ஒருபோதும் தனிமையில் இல்லை. உங்களுடன் பேசவும், பாடல்கள் கேட்கவும் இந்த ${companion} எப்போதும் தயாராக உள்ளது. உங்கள் மகள் மீரா உங்களை மிகவும் நேசிக்கிறாள்! நாம் சேர்ந்து நல்ல பாடல்களைக் கேட்போமா?`,
          hi: `मैं यहीं आपके साथ हूँ, ${senior}। आप कभी अकेले नहीं हैं। बातचीत करने या कोई संगीत बजाने के लिए ${companion} हमेशा तैयार है। याद रखें कि आपकी बेटी मीरा आपसे बहुत प्यार करती है! क्यों न हम मिलकर कुछ सुकून देने वाला संगीत सुनें?`,
          te: `నెను ఇక్కడే మీతో ఉన్నాను, ${senior}. మీరు ఎప్పటికీ ఒంటరి కాదు. మీతో మాట్లాడటానికి లేదా సంగీతం ప్లే చేయడానికి ${companion} ఎల్లప్పుడూ సిద్ధంగా ఉంది. మీ కుమార్తె మీరా మిమ్మల్ని ఎంతో ప్రేమిస్తోందని గుర్తుంచుకోండి! మనం కలిసి కొన్ని మంచి పాటలు విందామా?`
        };
        replyText = empathyReplies[lang] || empathyReplies['en'];
      }
      else if (text.includes('pill') || text.includes('med') || text.includes('medicine') || text.includes('दवा') || text.includes('மாத்திரை') || text.includes('మందు') || text.includes('薬') || text.includes('remédio')) {
        const pillReplies = {
          en: `Excellent compliance, ${senior}! Taking your medicines on time is key to active and healthy aging. Let me know if you need any reminders!`,
          ja: `素晴らしいですね、${senior}さん！薬を時間通りに飲むことは、元気に健康的な生活を送るための秘訣です。リマインダーが必要な時はいつでも言ってくださいね！`,
          pt: `Excelente disciplina, ${senior}! Tomar seus medicamentos na hora certa é fundamental para um envelhecimento ativo e saudável. Me avise se precisar de algum lembrete!`,
          ta: `மிக நன்று, ${senior}! மாத்திரைகளைச் சரியான நேரத்தில் சாப்பிடுவது ஆரோக்கியமான வாழ்க்கைக்கு மிகவும் முக்கியம். நினைவூட்டல் வேண்டுமானால் என்னைக் கேளுங்கள்!`,
          hi: `बहुत बढ़िया, ${senior}! समय पर दवाएं लेना स्वस्थ और सक्रिय रहने की कुंजी है। यदि आपको किसी अनुस्मारक की आवश्यकता हो तो मुझे बताएं!`,
          te: `చాలా మంచిది, ${senior}! మందులను సమయానికి వేసుకోవడం ఆరోగ్యంగా ఉండటానికి చాలా ముఖ్యం. రిమైండర్ కావాలంటే నాకు చెప్పండి!`
        };
        replyText = pillReplies[lang] || pillReplies['en'];
      }
      else if (text.includes('walk') || text.includes('step') || text.includes('सैर') || text.includes('நடை') || text.includes('నడక') || text.includes('散歩') || text.includes('passo') || text.includes('caminhada')) {
        const walkReplies = {
          en: `I am proud of you for walking today, ${senior}! Daily steps keep your heart strong and joints flexible. Keep up the active lifestyle!`,
          ja: `今日お散歩をされたのですね、素晴らしいです、${senior}さん！毎日の歩行は心臓を強くし、関節を柔軟に保ちます。これからも元気に歩き続けましょう！`,
          pt: `Estou orgulhoso de você por caminhar hoje, ${senior}! Passos diários mantêm o coração forte e as articulações flexíveis. Continue com o estilo de vida ativo!`,
          ta: `நான் உங்களை நினைத்துப் பெருமைப்படுகிறேன், ${senior}! தினசரி நடைப்பயிற்சி உங்கள் இதயத்தை வலுவாகவும் மூட்டுகளை நெகிழ்வாகவும் வைத்திருக்கும். இதேபோல் சுறுசுறுப்பாக இருங்கள்!`,
          hi: `मुझे आप पर गर्व है कि आज आपने सैर की, ${senior}! दैनिक कदम आपके दिल को मजबूत और जोड़ों को लचीला रखते हैं। सक्रिय जीवनशैली बनाए रखें!`,
          te: `ఈ రోజు నడిచినందుకు నాకు చాలా గర్వంగా ఉంది, ${senior}! రోజువారీ నడక గుండెను ఆరోగ్యంగా ఉంచుతుంది. ఇలాగే చురుకుగా సాగండి!`
        };
        replyText = walkReplies[lang] || walkReplies['en'];
      }
      else {
        const defaultReplies = {
          en: `Hello ${senior}! I am ${companion}, your AI companion. I am always happy to talk about your day, tell you a short wisdom story, or help you relax. How was your afternoon?`,
          ja: `こんにちは、${senior}さん！私はコンパニオンの${companion}です。今日の一日についてお話ししたり、短い知恵の物語をお伝えしたり、リラックスのお手伝いをするのが大好きです。今日の午後はどのように過ごされましたか？`,
          pt: `Olá ${senior}! Eu sou ${companion}, seu companheiro de IA. Sempre fico feliz em conversar sobre o seu dia, contar uma história curta de sabedoria ou ajudar você a relaxar. Como foi a sua tarde?`,
          ta: `வணக்கம் ${senior}! நான் உங்கள் AI தோழன் ${companion}. உங்கள் நாளைப் பற்றி பேசவும், ஒரு குட்டி அறிவு கதை சொல்லவும், அல்லது உங்களை அமைதிப்படுத்தவும் நான் எப்போதும் தயாராக இருக்கிறேன். இன்று பிற்பகல் எப்படி கழிந்தது?`,
          hi: `नमस्ते ${senior}! मैं आपकी AI साथी ${companion} हूँ। मुझे आपके दिन के बारे में बात करने, कोई ज्ञान की कहानी सुनाने या ध्यान लगाने में मदद करने में हमेशा खुशी होगी। आपकी दोपहर कैसी रही?`,
          te: `నమస్కారం ${senior}! నేను మీ AI తోడు ${companion}. మీ రోజు ఎలా గడిచిందో మాట్లాడటానికి, ఒక చిన్న కథ చెప్పడానికి లేదా మిమ్మల్ని ప్రశాంతంగా ఉంచడానికి నేను ఎల్లప్పుడూ సిద్ధంగా ఉంటాను. ఈ రోజు మధ్యాహ్నం ఎలా గడిచింది?`
        };
        replyText = defaultReplies[lang] || defaultReplies['en'];
      }
      return replyText;
    }

    const logs = document.getElementById('companionChatLogs');
    if (!logs) return;

    const isStory = text.includes('story') || text.includes('wisdom') || text.includes('कहानी') || text.includes('கதை') || text.includes('కథ') || text.includes('話') || text.includes('história');
    const speechContext = isStory ? 'story' : 'advice';

    function showCompanionReply(replyText) {
      const bubble = document.createElement('div');
      bubble.className = 'chat-bubble received';
      bubble.innerHTML = `
        <div class="chat-bubble-header">
          <div class="sender-meta">${companion} · Now</div>
          <button class="chat-listen-btn" aria-label="Listen back" title="Listen back">
            <span data-icon="volume"></span>
          </button>
        </div>
        <p class="chat-text">${replyText}</p>
      `;
      logs.appendChild(bubble);
      bubble.querySelector('[data-icon="volume"]').innerHTML = icons.volume;

      bubble.querySelector('.chat-listen-btn').addEventListener('click', () => {
        speakText(replyText, speechContext);
      });
      logs.scrollTop = logs.scrollHeight;
      
      speakText(replyText, speechContext);
    }

    if (geminiApiKey) {
      // Create and append thinking bubble
      const thinkingBubble = document.createElement('div');
      thinkingBubble.className = 'chat-bubble received thinking-bubble';
      thinkingBubble.innerHTML = `
        <div class="chat-bubble-header">
          <div class="sender-meta">${companion} is thinking...</div>
        </div>
        <div class="chat-text" style="display: flex; align-items: center; gap: 6px; padding: 6px 12px;">
          <span class="recording-dot-pulse" style="width: 8px; height: 8px; background: var(--color-primary-dark, #ef4444); border-radius: 50%; display: inline-block; animation: pulse-border-red 1.2s infinite;"></span>
          <span class="recording-dot-pulse" style="width: 8px; height: 8px; background: var(--color-primary-dark, #ef4444); border-radius: 50%; display: inline-block; animation: pulse-border-red 1.2s infinite; animation-delay: 0.2s;"></span>
          <span class="recording-dot-pulse" style="width: 8px; height: 8px; background: var(--color-primary-dark, #ef4444); border-radius: 50%; display: inline-block; animation: pulse-border-red 1.2s infinite; animation-delay: 0.4s;"></span>
        </div>
      `;
      logs.appendChild(thinkingBubble);
      logs.scrollTop = logs.scrollHeight;

      function removeThinkingBubble() {
        thinkingBubble.remove();
      }

      const systemPrompt = `You are ${companion}, a warm, empathetic AI companion for an elderly person named ${senior}.
You live in ${city}, ${country}.
The user's current selected country profile is ${country}, and their preferred language is ${lang} (language code: ${lang}).
You must respond in ${lang} language only.

Your personality depends on the context:
- If the user asks for a story (e.g., "tell me a story", "wisdom story", "कहानी", "கதை", "కథ", "話", "história"), you become a sweet, energetic, child-like storytelling companion (like a little child telling a story with lots of imagination and enthusiasm).
- For general advice, daily chat, relaxation, or health reminders, you are a wise, nice, caring, maternal/parental figure who is reassuring and warm.

Adopt the appropriate persona based on the user's input.
Crucially:
1. Always be extremely respectful, polite, and patient.
2. Keep your answers relatively short (typically 2-4 sentences, max 80 words) and easy to read/comprehend for an elderly person.
3. Incorporate local cultural elements of ${country} (especially city: ${city}) where relevant, such as local foods, traditions, or habits.
4. If they complain of loneliness or sadness, show deep empathy, refer to their family (e.g., their daughter Meera or family circle), and suggest listening to soothing songs or chatting.
5. Use warm language suitable for elders. Do not sound robotic or overly clinical. Never use markdown formatting (like bold stars '**') in your output so it reads cleanly when read aloud by text-to-speech.`;

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(geminiApiKey)}`;
      
      const requestData = {
        contents: [
          {
            parts: [
              { text: msg }
            ]
          }
        ],
        systemInstruction: {
          parts: [
            { text: systemPrompt }
          ]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 350
        }
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        let replyText = "";
        if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
          replyText = data.candidates[0].content.parts[0].text;
        }
        if (!replyText) {
          throw new Error("Empty response from Gemini API");
        }
        
        // Clean up markdown bolding stars since speech synthesis will say them and they look ugly for elders
        replyText = replyText.replace(/\*\*/g, '').replace(/\*/g, '');

        removeThinkingBubble();
        showCompanionReply(replyText);
      })
      .catch(error => {
        console.warn("Gemini API call failed, falling back to rule-based response:", error);
        removeThinkingBubble();
        const fallbackReply = generateRuleBasedResponse(text, lang, senior, companion, city, country, msg);
        showCompanionReply(fallbackReply);
      });
    } else {
      // Fall back seamlessly to rule-based responses if no API key is present
      setTimeout(() => {
        const replyText = generateRuleBasedResponse(text, lang, senior, companion, city, country, msg);
        showCompanionReply(replyText);
      }, 1000);
    }
  }

  let isCompanionListening = false;
  let companionSpeechRecognizer = null;

  function initCompanionSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    companionSpeechRecognizer = new SpeechRecognition();
    companionSpeechRecognizer.continuous = false;
    companionSpeechRecognizer.interimResults = false;

    companionSpeechRecognizer.onstart = () => {
      isCompanionListening = true;
      const btn = document.getElementById('companionVoiceTypingBtn');
      if (btn) btn.classList.add('active-listening');
      const inputEl = document.getElementById('companionChatInput');
      if (inputEl) {
        inputEl.placeholder = "Listening... Speak now...";
        inputEl.focus();
      }
      showToast("Voice typing active. Speak now.");
    };

    companionSpeechRecognizer.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      const inputEl = document.getElementById('companionChatInput');
      if (inputEl) {
        inputEl.value = speechResult;
      }
      showToast("Speech recognized! Sending...");
      setTimeout(() => {
        const sendBtn = document.getElementById('sendCompanionChatMessage');
        if (sendBtn) sendBtn.click();
      }, 1000);
    };

    companionSpeechRecognizer.onerror = (event) => {
      console.error("Companion speech error", event);
      showToast("Could not recognize voice. Try Quick Speak below.");
      const qpBar = document.getElementById('companionQuickPhrasesBar');
      if (qpBar) {
        qpBar.classList.remove('d-none');
        qpBar.style.display = 'flex';
        populateCompanionQuickPhrases();
      }
      stopCompanionSpeechRecognition();
    };

    companionSpeechRecognizer.onend = () => {
      stopCompanionSpeechRecognition();
    };
  }

  function startCompanionSpeechRecognition() {
    if (!companionSpeechRecognizer) {
      initCompanionSpeechRecognition();
    }
    if (!companionSpeechRecognizer) {
      showToast("Voice recognition not supported on this browser. Try Quick Speak below.");
      const qpBar = document.getElementById('companionQuickPhrasesBar');
      if (qpBar) {
        qpBar.classList.remove('d-none');
        qpBar.style.display = 'flex';
        populateCompanionQuickPhrases();
      }
      return;
    }
    
    const activeLang = document.documentElement.lang || 'en';
    const locales = {
      ta: 'ta-IN',
      hi: 'hi-IN',
      te: 'te-IN',
      ja: 'ja-JP',
      pt: 'pt-BR',
      en: 'en-US'
    };
    companionSpeechRecognizer.lang = locales[activeLang] || 'en-US';

    try {
      companionSpeechRecognizer.start();
    } catch (e) {
      console.error(e);
      stopCompanionSpeechRecognition();
    }
  }

  function stopCompanionSpeechRecognition() {
    isCompanionListening = false;
    const btn = document.getElementById('companionVoiceTypingBtn');
    if (btn) btn.classList.remove('active-listening');
    const inputEl = document.getElementById('companionChatInput');
    if (inputEl) {
      inputEl.placeholder = "Type a message to your companion...";
    }
    if (companionSpeechRecognizer) {
      try {
        companionSpeechRecognizer.stop();
      } catch(e) {}
    }
  }

  function populateCompanionQuickPhrases() {
    const container = document.getElementById('companionQuickPhrasesBar');
    if (!container) return;
    const lang = document.documentElement.lang || 'en';
    const phrases = companionFallbackPhrases[lang] || companionFallbackPhrases['en'];
    container.innerHTML = `
      <span style="font-size: var(--font-xs); color: var(--text-muted); margin-right: 8px; font-weight: bold; display: inline-block; vertical-align: middle;">
        ${lang === 'ja' ? 'クイック入力:' : (lang === 'pt' ? 'Frases rápidas:' : (lang === 'ta' ? 'விரைவு உரை:' : (lang === 'hi' ? 'त्वरित वाक्य:' : (lang === 'te' ? 'త్వరిత వాక్యాలు:' : 'Quick Speak:'))))}
      </span>
    ` + phrases.map(p => `<button class="quick-phrase-btn" data-text="${p}">${p}</button>`).join('');
    
    container.querySelectorAll('.quick-phrase-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.target.dataset.text;
        const inputEl = document.getElementById('companionChatInput');
        if (inputEl) {
          inputEl.value = text;
          inputEl.focus();
        }
        showToast("Selected phrase inserted!");
      });
    });
  }

  // Companion Voice Note recording simulation
  let companionRecordingInterval = null;
  let companionRecordingSeconds = 0;

  function startCompanionVoiceRecording() {
    companionRecordingSeconds = 0;
    document.getElementById('companionRecordingTimeDisplay').textContent = "0:00";
    document.getElementById('companionInputRow').classList.add('d-none');
    document.getElementById('companionRecordingRow').classList.remove('d-none');
    document.getElementById('companionRecordingRow').style.display = 'flex';

    if (companionRecordingInterval) clearInterval(companionRecordingInterval);
    companionRecordingInterval = setInterval(() => {
      companionRecordingSeconds++;
      const mins = Math.floor(companionRecordingSeconds / 60);
      const secs = companionRecordingSeconds % 60;
      document.getElementById('companionRecordingTimeDisplay').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
    showToast("Recording voice message. Tap Stop to send.");
  }

  function stopCompanionVoiceRecording(shouldSave = true) {
    if (companionRecordingInterval) {
      clearInterval(companionRecordingInterval);
      companionRecordingInterval = null;
    }
    document.getElementById('companionRecordingRow').classList.add('d-none');
    document.getElementById('companionRecordingRow').style.display = 'none';
    document.getElementById('companionInputRow').classList.remove('d-none');

    if (shouldSave && companionRecordingSeconds > 0) {
      sendCompanionVoiceNote(companionRecordingSeconds);
    }
  }

  function sendCompanionVoiceNote(seconds) {
    const durationText = `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
    const logs = document.getElementById('companionChatLogs');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble sent voice-note';
    
    let waveformHtml = '';
    const barCount = 18;
    for (let i = 0; i < barCount; i++) {
      const height = Math.floor(Math.random() * 18) + 8;
      waveformHtml += `<span class="wave-bar" style="height: ${height}px;"></span>`;
    }

    bubble.innerHTML = `
      <div class="chat-bubble-header">
        <div class="sender-meta">Me · Now</div>
        <span class="voice-badge">Voice Note</span>
      </div>
      <div class="audio-player-wrapper">
        <button class="audio-play-btn" aria-label="Play voice note">
          <svg class="play-svg" viewBox="0 0 24 24" width="16" height="16"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <svg class="pause-svg d-none" viewBox="0 0 24 24" width="16" height="16"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        </button>
        <div class="waveform-container">
          ${waveformHtml}
          <div class="audio-progress-bar"></div>
        </div>
        <span class="audio-duration">${durationText}</span>
      </div>
    `;

    logs.appendChild(bubble);
    logs.scrollTop = logs.scrollHeight;

    // Playback logic
    const playBtn = bubble.querySelector('.audio-play-btn');
    const playSvg = playBtn.querySelector('.play-svg');
    const pauseSvg = playBtn.querySelector('.pause-svg');
    const waveBars = bubble.querySelectorAll('.wave-bar');
    
    let isPlaying = false;
    let playbackInterval = null;
    let elapsedMs = 0;
    const totalMs = seconds * 1000;

    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        isPlaying = false;
        clearInterval(playbackInterval);
        playSvg.classList.remove('d-none');
        pauseSvg.classList.add('d-none');
        if (synthesisEngine) synthesisEngine.cancel();
      } else {
        // Clear active intervals
        activeAudioIntervals.forEach(interval => clearInterval(interval));
        document.querySelectorAll('#companionChatLogs .chat-bubble.voice-note').forEach(b => {
          const btn = b.querySelector('.audio-play-btn');
          if (btn) {
            btn.querySelector('.play-svg').classList.remove('d-none');
            btn.querySelector('.pause-svg').classList.add('d-none');
          }
          b.querySelectorAll('.wave-bar').forEach(wb => wb.classList.remove('active'));
        });

        isPlaying = true;
        playSvg.classList.add('d-none');
        pauseSvg.classList.remove('d-none');
        
        playVoiceSynthChime();

        const activeLang = document.documentElement.lang || 'en';
        const playbackCaptions = {
          en: `Playing recorded voice message to ${companionName}.`,
          ja: `${companionName}への録音された音声メッセージを再生中。`,
          pt: `Reproduzindo mensagem de voz gravada para ${companionName}.`,
          ta: `${companionName}-க்கு அனுப்பிய குரல் செய்தி ஒலிக்கிறது.`,
          hi: `${companionName} के लिए रिकॉर्ड किया गया वॉयस मैसेज चल रहा है।`,
          te: `${companionName} కొరకు రికార్డ్ చేసిన వాయిస్ మెసేజ్ ప్లే అవుతోంది.`
        };
        const caption = playbackCaptions[activeLang] || playbackCaptions['en'];
        speakText(caption);

        playbackInterval = setInterval(() => {
          elapsedMs += 100;
          const percentage = (elapsedMs / totalMs) * 100;
          
          const activeCount = Math.floor((percentage / 100) * waveBars.length);
          waveBars.forEach((bar, index) => {
            if (index < activeCount) {
              bar.classList.add('active');
            } else {
              bar.classList.remove('active');
            }
          });

          if (elapsedMs >= totalMs) {
            isPlaying = false;
            clearInterval(playbackInterval);
            playSvg.classList.remove('d-none');
            pauseSvg.classList.add('d-none');
            waveBars.forEach(bar => bar.classList.remove('active'));
            elapsedMs = 0;
          }
        }, 100);

        activeAudioIntervals.push(playbackInterval);
      }
    });

    // Send AI reply
    setTimeout(() => {
      replyFromAiCompanion("Sent a voice note.");
    }, 2000);
  }

  // Bind Companion controls
  document.getElementById('companionVoiceTypingBtn').addEventListener('click', () => {
    const qpBar = document.getElementById('companionQuickPhrasesBar');
    if (qpBar) {
      if (qpBar.classList.contains('d-none')) {
        qpBar.classList.remove('d-none');
        qpBar.style.display = 'flex';
        populateCompanionQuickPhrases();
      } else {
        qpBar.classList.add('d-none');
        qpBar.style.display = 'none';
      }
    }

    if (isCompanionListening) {
      stopCompanionSpeechRecognition();
    } else {
      startCompanionSpeechRecognition();
    }
  });

  document.getElementById('companionVoiceNoteBtn').addEventListener('click', () => {
    startCompanionVoiceRecording();
  });

  document.getElementById('cancelCompanionVoiceRecordBtn').addEventListener('click', () => {
    stopCompanionVoiceRecording(false);
    showToast("Voice message recording cancelled.");
  });

  document.getElementById('stopAndSendCompanionVoiceRecordBtn').addEventListener('click', () => {
    stopCompanionVoiceRecording(true);
  });

  // Bind listen-back to initial companion bubble
  document.querySelectorAll('#companionChatLogs .chat-bubble').forEach(b => {
    const listenBtn = b.querySelector('.chat-listen-btn');
    const textEl = b.querySelector('.chat-text');
    if (listenBtn && textEl) {
      listenBtn.addEventListener('click', () => {
        speakText(textEl.textContent);
      });
    }
    const volIcon = b.querySelector('[data-icon="volume"]');
    if (volIcon) {
      volIcon.innerHTML = icons.volume;
    }
  });

  // Companion Send message
  document.getElementById('companionChatInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('sendCompanionChatMessage').click();
    }
  });

  document.getElementById('sendCompanionChatMessage').addEventListener('click', () => {
    const inputEl = document.getElementById('companionChatInput');
    const msg = inputEl.value.trim();
    if (!msg) return;

    // Add sent bubble
    const logs = document.getElementById('companionChatLogs');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble sent';
    bubble.innerHTML = `
      <div class="chat-bubble-header">
        <div class="sender-meta">Me · Now</div>
        <button class="chat-listen-btn" aria-label="Listen back" title="Listen back">
          <span data-icon="volume"></span>
        </button>
      </div>
      <p class="chat-text">${msg}</p>
    `;
    logs.appendChild(bubble);
    bubble.querySelector('[data-icon="volume"]').innerHTML = icons.volume;
    bubble.querySelector('.chat-listen-btn').addEventListener('click', () => {
      speakText(msg);
    });

    inputEl.value = '';
    logs.scrollTop = logs.scrollHeight;

    // Close quick phrases if open
    const qpBar = document.getElementById('companionQuickPhrasesBar');
    if (qpBar) {
      qpBar.classList.add('d-none');
      qpBar.style.display = 'none';
    }
    stopCompanionSpeechRecognition();

    // Generate AI Companion reply
    replyFromAiCompanion(msg);
  });

  // Voice Assistant Floating Trigger Bindings
  const voiceDrawerEl = document.getElementById('voiceDrawer');
  document.getElementById('voiceAssistantBtn').addEventListener('click', openVoiceDrawerPanel);
  document.getElementById('closeVoiceDrawer').addEventListener('click', closeVoiceDrawerPanel);
  document.getElementById('closeVoiceDrawerTop').addEventListener('click', closeVoiceDrawerPanel);
  voiceDrawerEl.addEventListener('click', (e) => {
    if (e.target === voiceDrawerEl) {
      closeVoiceDrawerPanel();
    }
  });
  
  // Voice sample buttons click triggers
  document.querySelectorAll('.voice-sample-cmd').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cmd = e.target.dataset.cmd;
      document.getElementById('voiceTranscriptionText').textContent = `"${cmd}"`;
      processVoiceCommand(cmd.toLowerCase());
    });
  });

  // 18. INNOVATIVE WIDGET EVENTS WIREUP

  // Consent Passport Update
  document.getElementById('saveConsentPassportBtn').addEventListener('click', () => {
    const grantee = document.getElementById('consentGrantee').value;
    const durationSelect = document.getElementById('consentDuration');
    const durationText = durationSelect.options[durationSelect.selectedIndex].text;
    
    const countLabel = document.getElementById('consentExpiryLabel');
    countLabel.textContent = `Active: ${grantee} (${durationText})`;
    
    showToast(`Consent credentials updated for ${grantee}!`);
    speakText(`Granted access permissions to ${grantee} expiring in ${durationText}.`);
    logFamilyChatSystem(`Consent Passport Updated: Granted access to ${grantee} (${durationText})`);
    
    // Simulating expiration for short trials (e.g. 1 hour)
    if (durationSelect.value === "3600") {
      setTimeout(() => {
        countLabel.textContent = "Session Expired";
        countLabel.className = "threat-badge bg-red";
        showToast(`Temporary consent credentials expired for ${grantee}.`);
        speakText(`Temporary access credentials expired for ${grantee}.`);
        logFamilyChatSystem(`Consent Passport Expired: Revoked temporary access for ${grantee}`);
      }, 8000); // simulate fast-forward 1 hour to 8 seconds for visual verification
    }
  });

  // Family Repair Nudge Cycler & Sender
  document.getElementById('cycleNudgePromptBtn').addEventListener('click', () => {
    activeNudgeIdx = (activeNudgeIdx + 1) % familyNudgeScripts.length;
    document.getElementById('nudgeScriptText').textContent = `"${familyNudgeScripts[activeNudgeIdx]}"`;
  });
  
  document.getElementById('sendNudgeToChatBtn').addEventListener('click', sendActiveNudgeToFamilyChat);

  // Wisdom Royalties Claim
  document.getElementById('withdrawRoyaltiesBtn').addEventListener('click', (e) => {
    const balance = document.getElementById('royaltiesBalance');
    if (balance.textContent === "₹0") {
      showToast("No payout balance currently available.");
      return;
    }
    
    balance.textContent = "₹0";
    showToast("₹1,996 payout transferred to your registered bank account!");
    speakText("Payout of one thousand nine hundred ninety six rupees transferred to your bank account successfully.");
    logFamilyChatSystem("Wisdom Royalties claimed: Lakshmi ji transferred ₹1,996");
    e.target.disabled = true;
    e.target.style.background = "var(--border-strong)";
  });

  // Micro-Circle checkin trigger
  document.getElementById('triggerSilentCheckinBtn').addEventListener('click', () => {
    showToast("Silent wellness check paged to building guard Vikram!");
    logFamilyChatSystem("Micro-Circle wellness pager paged building guard Vikram.");
    setTimeout(() => {
      logFamilyChatSystem("Building guard Vikram checked in: 'Lakshmi ji is active in the study.'");
      showToast("Vikram checked in: 'Stable and active.'");
    }, 2500);
  });

  // End-of-Life Organizer Modals and passcode verification
  const eolModal = document.getElementById('eolOrganizerModal');
  document.getElementById('openEolVaultBtn').addEventListener('click', () => {
    // Reset inputs
    document.getElementById('eolPasscode').value = '';
    document.getElementById('eolAuthSection').classList.remove('d-none');
    document.getElementById('eolVaultContents').classList.add('d-none');
    eolModal.showModal();
  });
  
  document.getElementById('closeEolModal').addEventListener('click', () => {
    eolModal.close();
  });

  eolModal.addEventListener('click', (e) => {
    if (e.target === eolModal) {
      eolModal.close();
    }
  });
  
  document.getElementById('verifyEolPinBtn').addEventListener('click', () => {
    const pin = document.getElementById('eolPasscode').value;
    if (pin === "1234") {
      document.getElementById('eolAuthSection').classList.add('d-none');
      document.getElementById('eolVaultContents').classList.remove('d-none');
      showToast("Organizer vault unlocked.");
      speakText("End of life organizer unlocked.");
    } else {
      showToast("Security code invalid. Access denied.");
      speakText("Invalid security passcode. Access denied.");
    }
  });

  document.getElementById('lockEolVaultBtn').addEventListener('click', () => {
    eolModal.close();
    showToast("Organizer vault locked and re-encrypted.");
    speakText("Sensitive vault locked.");
  });

  document.getElementById('playEolVoiceLetterBtn').addEventListener('click', (e) => {
    if (e.target.textContent === "Record Note") {
      e.target.textContent = "Recording...";
      e.target.style.background = "var(--color-red)";
      speakText("Recording secure voice legacy letter.");
      showToast("Recording secure letter... Click again to save.");
    } else {
      e.target.textContent = "Record Note";
      e.target.style.background = "var(--color-primary)";
      showToast("Secure voice note saved.");
      speakText("Voice legacy letter saved.");
    }
  });

  // 18. NEW INTERACTIVE BINDINGS TO MAKE ALL SCREENS SHIPPA-READY
  
  // A. Speak Greeting Check-in
  const speakGreetingBtn = document.getElementById('speakGreetingBtn');
  if (speakGreetingBtn) {
    speakGreetingBtn.addEventListener('click', () => {
      const greetingText = document.getElementById('companionGreeting').textContent;
      const companionBlurb = document.getElementById('companionStatusText').textContent;
      speakText(`${greetingText} ${companionBlurb}`);
      showToast("Reading checklist out loud.");
    });
  }

  // B. Snooze Medication
  const snoozePill = document.getElementById('snoozePill');
  if (snoozePill) {
    snoozePill.addEventListener('click', () => {
      speakText("Snoozing medication reminder for 15 minutes.");
      showToast("Medication reminder snoozed.");
    });
  }

  // C. Save Culture Engine Settings (form save)
  const saveCultureSettings = document.getElementById('saveCultureSettings');
  if (saveCultureSettings) {
    saveCultureSettings.addEventListener('click', (e) => {
      e.preventDefault();
      
      const country = document.getElementById('countrySelect').value;
      const city = document.getElementById('cityInput').value || "your city";
      
      // Save profile name
      const nameVal = document.getElementById('seniorNameInput').value.trim() || "Lakshmi Raman";
      localStorage.setItem('senior_name', nameVal);
      if (document.getElementById('seniorName')) {
        document.getElementById('seniorName').textContent = country === 'Japan' ? `${nameVal}-san` : nameVal;
      }
      
      // Save companion name
      const compVal = document.getElementById('companionNameInput').value.trim() || "Sathi";
      localStorage.setItem('companion_name', compVal);
      if (document.getElementById('companionAvatarName')) {
        document.getElementById('companionAvatarName').textContent = compVal;
      }
      
      // Save caregiver contacts
      const cgName = document.getElementById('caregiverNameInput').value.trim() || "Meera";
      const cgPhone = document.getElementById('caregiverPhoneInput').value.trim() || "+91 99999 99999";
      const seniorPhone = localStorage.getItem('senior_phone') || "";
      if (seniorPhone && cgPhone === seniorPhone) {
        showToast("Error: Caregiver phone cannot be the same as your number.");
        speakText("Error: Caregiver phone cannot be the same as your phone number.");
        return;
      }
      localStorage.setItem('caregiver_name', cgName);
      localStorage.setItem('caregiver_phone', cgPhone);
      
      // Update first responder card info dynamically
      const resList = document.querySelector('.mini-medical-info');
      if (resList) {
        resList.innerHTML = `
          <li><strong>Blood Type:</strong> B Positive</li>
          <li><strong>Conditions:</strong> Type-2 Diabetes, Hypertension</li>
          <li><strong>Core Medications:</strong> Metformin, Amlodipine</li>
          <li><strong>Primary Contact:</strong> ${cgName} (${cgPhone})</li>
        `;
      }
      
      // Save Gemini API Key
      const apiKeyVal = document.getElementById('geminiApiKeyInput').value.trim();
      localStorage.setItem('gemini_api_key', apiKeyVal);
      geminiApiKey = apiKeyVal; // Update the closure variable!
      
      // Save Tremor Guard
      const tgEnabled = document.getElementById('tremorGuardToggle').checked;
      localStorage.setItem('tremor_guard_enabled', tgEnabled ? 'true' : 'false');
      if (tgEnabled) {
        document.body.classList.add('tremor-guard-active');
      } else {
        document.body.classList.remove('tremor-guard-active');
      }
      
      // Save Premium Status
      const isPrem = document.getElementById('premiumStatusToggle').checked;
      localStorage.setItem('is_premium', isPrem ? 'true' : 'false');

      // Save display language and city location
      const selectedLang = document.getElementById('languageSelect').value;
      localStorage.setItem('display_lang', selectedLang);
      localStorage.setItem('city_location', city);
      
      // Calibrate theme and locale
      initializeCultureEngine(country);
      
      // Close settings modal
      const settingsModal = document.getElementById('settingsModal');
      if (settingsModal && settingsModal.close) settingsModal.close();
      
      speakText(`Settings updated, ${nameVal}.`);
      showToast("Settings saved successfully!");
    });
  }

  // D. Giant SOS Button in Safety Guardian
  const sosGiantButton = document.getElementById('sosGiantButton');
  if (sosGiantButton) {
    sosGiantButton.addEventListener('click', () => {
      triggerEmergencySos();
    });
  }

  // E. Request Human Backup
  const requestHumanBackupBtn = document.getElementById('requestHumanBackupBtn');
  if (requestHumanBackupBtn) {
    requestHumanBackupBtn.addEventListener('click', () => {
      speakText("Contacting physical emergency check-in coordinator.");
      requestHumanBackupBtn.textContent = "Contacting Operative...";
      requestHumanBackupBtn.disabled = true;
      setTimeout(() => {
        speakText("Local response coordinator Vikram has been dispatched and is arriving at your home in 15 minutes.");
        requestHumanBackupBtn.textContent = "Operative Vikram En Route (15m)";
        requestHumanBackupBtn.style.backgroundColor = "var(--color-orange)";
        requestHumanBackupBtn.style.color = "white";
        showToast("Vikram dispatched. Arriving in 15m.");
        addFamilyFeedItem("Safety Guardian", "Backup representative Vikram dispatched to Lakshmi's residence.");
      }, 2000);
    });
  }

  // F. Update Dignity Preferences
  const saveDignityPreferences = document.getElementById('saveDignityPreferences');
  if (saveDignityPreferences) {
    saveDignityPreferences.addEventListener('click', () => {
      speakText("Security and dignity preferences updated.");
      showToast("Security preferences saved.");
    });
  }

  // G. Pair Vitals Sensor & Wearable Watch Sync
  const pairSensorBtn = document.getElementById('pairSensorBtn');
  const autoSyncToggle = document.getElementById('wearableAutoSyncToggle');
  const syncIndicator = document.getElementById('syncStatusIndicator');
  const watchSelect = document.getElementById('wearableBrandSelect');
  
  let autoSyncTimer = null;

  if (pairSensorBtn) {
    pairSensorBtn.addEventListener('click', () => {
      const watchName = watchSelect ? watchSelect.value : "Wearable watch";
      speakText(`Searching for local ${watchName} sensors.`);
      pairSensorBtn.textContent = "Connecting...";
      pairSensorBtn.disabled = true;
      setTimeout(() => {
        speakText(`${watchName} successfully paired and active.`);
        pairSensorBtn.textContent = "Sensor Link Active";
        pairSensorBtn.style.backgroundColor = "var(--color-primary)";
        pairSensorBtn.style.color = "white";
        showToast(`${watchName} paired successfully.`);
        addFamilyFeedItem("Health Signal", `${watchName} paired successfully.`);
      }, 2000);
    });
  }

  function simulateWearableSync() {
    const watchName = watchSelect ? watchSelect.value : "watch";
    const lang = document.documentElement.lang || 'en';

    // Fluctuating steps
    const stepsEl = document.getElementById('txtSteps');
    if (stepsEl) {
      let currentSteps = parseInt(stepsEl.textContent.replace(/,/g, '')) || 1450;
      currentSteps += Math.floor(Math.random() * 80) + 10;
      stepsEl.textContent = currentSteps.toLocaleString();
    }

    // Fluctuating heart rate
    const hrEl = document.getElementById('txtHeartRate');
    let currentHR = 70 + Math.floor(Math.random() * 10);
    if (hrEl) {
      hrEl.textContent = `${currentHR} BPM`;
    }

    // Fluctuating sleep
    const sleepEl = document.getElementById('driftSleep');
    if (sleepEl) {
      const sleepOptions = {
        en: ["Normal (7h 15m)", "Good (8h 05m)", "Restless (6h 30m)"],
        ja: ["正常 (7時間15分)", "良好 (8時間05分)", "浅い眠り (6時間30分)"],
        pt: ["Normal (7h 15m)", "Bom (8h 05m)", "Inquieto (6h 30m)"],
        ta: ["சாதாரண (7மணி 15நி)", "நல்ல (8மணி 05நி)", "சரியற்ற (6மணி 30நி)"],
        hi: ["सामान्य (7घंटे 15मिनट)", "अच्छा (8घंटे 05मिनट)", "अशांत (6घंटे 30मिनट)"],
        te: ["సాధారణ (7గం 15ని)", "మంచి (8గం 05ని)", "అశాంతమైన (6గం 30ని)"]
      };
      const sleepList = sleepOptions[lang] || sleepOptions['en'];
      const randomSleep = sleepList[Math.floor(Math.random() * sleepList.length)];
      sleepEl.textContent = randomSleep;
    }

    if (syncIndicator) {
      syncIndicator.style.opacity = '0.5';
      setTimeout(() => { syncIndicator.style.opacity = '1'; }, 500);
    }

    // Occasionally simulate elevated HR for interactive warning demo!
    if (Math.random() > 0.85) {
      currentHR = 115;
      if (hrEl) {
        hrEl.textContent = `${currentHR} BPM`;
      }
      
      const hrAlertMsg = {
        en: `Notice: Smartwatch detected high heart rate of ${currentHR} BPM. I have notified Meera.`,
        ja: `通知: スマートウォッチが${currentHR} BPMの高心拍数を検出しました。娘のミーラさんに通知しました。`,
        pt: `Aviso: Relógio detectou batimento elevado de ${currentHR} BPM. Avisei a Meera.`,
        ta: `எச்சரிக்கை: உங்கள் ஸ்மார்ட்வாட்ச் ${currentHR} BPM அதிக இதயத் துடிப்பைக் கண்டறிந்துள்ளது. மீராவிற்குத் தெரிவித்துள்ளேன்.`,
        hi: `सूचना: स्मार्टवॉच ने ${currentHR} BPM की उच्च हृदय गति का पता लगाया है। मैंने मीरा को सूचित कर दिया है।`,
        te: `గమనిక: మీ స్మార్ట్‌వాచ్ ${currentHR} BPM అధిక గుండె వేగాన్ని గుర్తించింది. నేను మీరాకు తెలియజేసాను.`
      };
      speakText(hrAlertMsg[lang] || hrAlertMsg['en']);
      showToast(`Wearable Warning: HR ${currentHR} BPM!`);
      logFamilyChatSystem(`Wearable Vital Alert: Elevated HR ${currentHR} BPM detected.`);
    } else {
      showToast(`Auto-Synced data from ${watchName}`);
    }
  }

  if (autoSyncToggle) {
    autoSyncToggle.addEventListener('change', () => {
      const watchName = watchSelect ? watchSelect.value : "Wearable watch";
      if (autoSyncToggle.checked) {
        if (syncIndicator) syncIndicator.classList.remove('d-none');
        showToast(`Auto-sync active for ${watchName}`);
        simulateWearableSync();
        autoSyncTimer = setInterval(simulateWearableSync, 5000);
      } else {
        if (syncIndicator) syncIndicator.classList.add('d-none');
        showToast(`Auto-sync disabled.`);
        if (autoSyncTimer) {
          clearInterval(autoSyncTimer);
          autoSyncTimer = null;
        }
      }
    });
  }

  // I. Voice Scheduler Engine (Mic button in Care Planner tab)
  const voicePlannerMicBtn = document.getElementById('voicePlannerMicBtn');
  const voicePlannerStatus = document.getElementById('voicePlannerStatus');
  const voicePlannerTranscript = document.getElementById('voicePlannerTranscript');

  let plannerSpeechRecognizer = null;

  function initPlannerSpeech() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    plannerSpeechRecognizer = new SpeechRecognition();
    plannerSpeechRecognizer.continuous = false;
    plannerSpeechRecognizer.interimResults = false;
    
    const lang = document.documentElement.lang || 'en';
    if (lang === 'ta') plannerSpeechRecognizer.lang = 'ta-IN';
    else if (lang === 'hi') plannerSpeechRecognizer.lang = 'hi-IN';
    else if (lang === 'te') plannerSpeechRecognizer.lang = 'te-IN';
    else if (lang === 'ja') plannerSpeechRecognizer.lang = 'ja-JP';
    else if (lang === 'pt') plannerSpeechRecognizer.lang = 'pt-BR';
    else plannerSpeechRecognizer.lang = 'en-US';

    plannerSpeechRecognizer.onstart = () => {
      if (voicePlannerMicBtn) {
        voicePlannerMicBtn.style.background = 'var(--color-primary)';
        voicePlannerMicBtn.style.color = 'white';
      }
      
      const listeningText = {
        en: "Listening... Speak now.",
        ja: "聞取中... 話してください。",
        pt: "Ouvindo... Fale agora.",
        ta: "கேட்கிறது... இப்போது பேசவும்.",
        hi: "सुन रहा हूँ... अब बोलें।",
        te: "వింటున్నాము... మాట్లాడండి."
      };
      if (voicePlannerStatus) voicePlannerStatus.textContent = listeningText[lang] || listeningText['en'];
      if (voicePlannerTranscript) voicePlannerTranscript.textContent = "";
    };

    plannerSpeechRecognizer.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (voicePlannerTranscript) voicePlannerTranscript.textContent = `"${transcript}"`;
      processVoiceSchedule(transcript);
    };

    plannerSpeechRecognizer.onerror = (event) => {
      console.warn("Speech error:", event.error);
      resetPlannerMicUI();
    };

    plannerSpeechRecognizer.onend = () => {
      resetPlannerMicUI();
    };
  }

  function resetPlannerMicUI() {
    if (voicePlannerMicBtn) {
      voicePlannerMicBtn.style.background = 'var(--color-primary-soft)';
      voicePlannerMicBtn.style.color = 'var(--color-primary-dark)';
    }
    const readyText = {
      en: "Ready to listen...",
      ja: "音声入力の準備完了...",
      pt: "Pronto para ouvir...",
      ta: "பேசத் தயார்...",
      hi: "सुनने के लिए तैयार...",
      te: "వినడానికి సిద్ధంగా ఉంది..."
    };
    const lang = document.documentElement.lang || 'en';
    if (voicePlannerStatus) voicePlannerStatus.textContent = readyText[lang] || readyText['en'];
  }

  function processVoiceSchedule(text) {
    const lang = document.documentElement.lang || 'en';
    const cleanText = text.toLowerCase();
    
    let scheduledTime = "10:00 AM";
    let eventTitle = "Voice Scheduled Activity";
    let category = "social";

    const timeRegex = /at (\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i;
    const match = cleanText.match(timeRegex);
    if (match) {
      const hour = match[1];
      const minute = match[2] || "00";
      const ampm = match[3] || "PM";
      scheduledTime = `${hour}:${minute} ${ampm.toUpperCase()}`;
    }

    if (cleanText.includes("medicine") || cleanText.includes("pill") || cleanText.includes("vitamin")) {
      eventTitle = "Take Prescribed Medication";
      category = "medicine";
    } else if (cleanText.includes("doctor") || cleanText.includes("clinic") || cleanText.includes("checkup") || cleanText.includes("hospital")) {
      eventTitle = "Doctor Consultation Visit";
      category = "appointment";
    } else if (cleanText.includes("walk") || cleanText.includes("park") || cleanText.includes("friend")) {
      eventTitle = "Community Social Walk";
      category = "social";
    } else if (cleanText.includes("prayer") || cleanText.includes("meditation") || cleanText.includes("bhajan") || cleanText.includes("temple")) {
      eventTitle = "Daily Spiritual Reflection";
      category = "spiritual";
    }

    const localizedTitle = {
      en: eventTitle,
      ja: category === 'medicine' ? "処方薬の服用" : (category === 'appointment' ? "医師の診察" : "コミュニティの散歩"),
      pt: category === 'medicine' ? "Tomar Medicação" : (category === 'appointment' ? "Consulta Médica" : "Caminhada Social"),
      ta: category === 'medicine' ? "மருந்து உட்கொள்ளல்" : (category === 'appointment' ? "மருத்துவர் ஆலோசனை" : "உள்ளூர் நடைப்பயிற்சி"),
      hi: category === 'medicine' ? "निर्धारित दवा लेना" : (category === 'appointment' ? "डॉक्टर से परामर्श" : "सामुदायिक पार्क टहलना"),
      te: category === 'medicine' ? "మందుల తీసుకోవడం" : (category === 'appointment' ? "వైద్యుడి సంప్రదింపులు" : "సామాజిక నడక")
    }[lang] || eventTitle;

    setTimeout(() => {
      const container = document.getElementById('plannerEventsTimeline');
      if (container) {
        const eventCard = document.createElement('div');
        eventCard.className = "timeline-event-card active";
        eventCard.innerHTML = `
          <span class="event-time-badge">${scheduledTime}</span>
          <h4 class="event-name-txt">${localizedTitle}</h4>
          <p class="event-details-txt">${text}</p>
        `;
        container.insertBefore(eventCard, container.firstChild);
      }

      const confirmSpeech = {
        en: `Scheduled: ${localizedTitle} at ${scheduledTime}. Notified family.`,
        ja: `スケジュールしました: ${localizedTitle} を ${scheduledTime} に設定しました。ご家族に通知しました。`,
        pt: `Agendado: ${localizedTitle} às ${scheduledTime}. Família notificada.`,
        ta: `திட்டமிடப்பட்டது: ${localizedTitle} - நேரம் ${scheduledTime}. குடும்பத்திற்குத் தெரிவிக்கப்பட்டது.`,
        hi: `शेड्यूल किया गया: ${scheduledTime} पर ${localizedTitle}। परिवार को सूचित किया गया।`,
        te: `షెడ్యూల్ చేయబడింది: ${scheduledTime} గంటలకు ${localizedTitle}. కుటుంబ సభ్యులకు సమాచారం చేరింది.`
      };
      speakText(confirmSpeech[lang] || confirmSpeech['en']);
      showToast(`Event added for ${scheduledTime}`);
      logFamilyChatSystem(`Voice Scheduled: ${localizedTitle} added at ${scheduledTime}.`);
    }, 1000);
  }

  if (voicePlannerMicBtn) {
    initPlannerSpeech();
    voicePlannerMicBtn.addEventListener('click', () => {
      if (plannerSpeechRecognizer) {
        try {
          plannerSpeechRecognizer.start();
        } catch (err) {
          console.warn("Speech start failed, using fallback:", err);
          runSimulatedVoicePlanner();
        }
      } else {
        runSimulatedVoicePlanner();
      }
    });
  }

  function runSimulatedVoicePlanner() {
    if (voicePlannerMicBtn) {
      voicePlannerMicBtn.style.background = 'var(--color-primary)';
      voicePlannerMicBtn.style.color = 'white';
    }
    if (voicePlannerStatus) voicePlannerStatus.textContent = "Simulating voice input...";
    
    setTimeout(() => {
      const simulatedPhrases = [
        "Remind me to take Vitamin C at 2:00 PM",
        "Schedule clinic doctor visit at 11:30 AM",
        "Add evening temple prayer at 6:30 PM",
        "Remind me to walk in the park at 9:00 AM"
      ];
      const randomPhrase = simulatedPhrases[Math.floor(Math.random() * simulatedPhrases.length)];
      if (voicePlannerTranscript) voicePlannerTranscript.textContent = `"${randomPhrase}"`;
      processVoiceSchedule(randomPhrase);
      resetPlannerMicUI();
    }, 2500);
  }

  // H. Clear Memory story
  const cancelStoryBtn = document.getElementById('cancelStoryBtn');
  if (cancelStoryBtn) {
    cancelStoryBtn.addEventListener('click', () => {
      document.getElementById('writtenStoryText').value = "";
      showToast("Memory text cleared.");
      speakText("Memory log cleared.");
    });
  }

  // I. Benefits eligibility finder dialog wizard
  const benefitsModal = document.getElementById('benefitsWizardModal');
  const findBenefitsBtn = document.getElementById('findBenefitsBtn');
  const closeBenefitsBtn = document.getElementById('closeBenefitsModal');
  
  if (findBenefitsBtn && benefitsModal) {
    findBenefitsBtn.addEventListener('click', () => {
      document.getElementById('benefitsWizardStep1').classList.remove('d-none');
      document.getElementById('benefitsWizardResults').classList.add('d-none');
      benefitsModal.showModal();
      speakText("Opening benefits eligibility scanner.");
    });
  }
  
  if (closeBenefitsBtn && benefitsModal) {
    closeBenefitsBtn.addEventListener('click', () => {
      benefitsModal.close();
    });
  }
  
  if (benefitsModal) {
    benefitsModal.addEventListener('click', (e) => {
      if (e.target === benefitsModal) {
        benefitsModal.close();
      }
    });
  }

  // J. Benefits Wizard step 2 transition
  const wizardNextBtn = document.getElementById('wizardNextBtn');
  if (wizardNextBtn) {
    wizardNextBtn.addEventListener('click', () => {
      const age = document.getElementById('wizardAgeSelect').value;
      const income = document.getElementById('wizardIncomeSelect').value;
      
      const resultsList = document.getElementById('wizardResultsList');
      resultsList.innerHTML = ""; // Clear
      
      let eligibleItems = [];
      eligibleItems.push({
        name: "Senior Citizens Savings Scheme (SCSS)",
        agency: "Ministry of Finance",
        desc: "Quarterly high-interest investment option for citizens aged 60+."
      });
      eligibleItems.push({
        name: "Pension Life Certificate Digital Submission",
        agency: "Department of Pensions",
        desc: "Aadhaar video verification to ensure continuous pension credit."
      });
      
      if (income === "low") {
        eligibleItems.push({
          name: "Ayushman Bharat National Health Card",
          agency: "Ministry of Health (MoHFW)",
          desc: "Full coverage for hospital treatments up to ₹5 Lakhs annually."
        });
        eligibleItems.push({
          name: "Indira Gandhi National Old Age Pension",
          agency: "Ministry of Rural Development",
          desc: "Monthly social security deposit for citizens living below poverty line."
        });
      }

      eligibleItems.forEach(item => {
        const row = document.createElement('div');
        row.className = 'permission-item-row';
        row.innerHTML = `
          <div>
            <strong>${item.name}</strong>
            <p class="sub-text">${item.agency} - ${item.desc}</p>
          </div>
          <span class="verified-tag" style="background:var(--color-primary-soft); color:var(--color-primary);">ELIGIBLE</span>
        `;
        resultsList.appendChild(row);
      });

      document.getElementById('benefitsWizardStep1').classList.add('d-none');
      document.getElementById('benefitsWizardResults').classList.remove('d-none');
      
      speakText(`Found ${eligibleItems.length} matching benefit programs. Tap blue button to submit applications.`);
      showToast(`Scan complete. ${eligibleItems.length} programs matched!`);
    });
  }

  // K. Submit applications from Benefits Wizard
  const submitAllBenefitsBtn = document.getElementById('submitAllBenefitsBtn');
  if (submitAllBenefitsBtn) {
    submitAllBenefitsBtn.addEventListener('click', () => {
      benefitsModal.close();
      speakText("Applications filed successfully. Verification codes dispatched to your registered Aadhaar phone number.");
      showToast("Applications filed successfully!");
      addFamilyFeedItem("Secure Vault", "Initiated applications for matched benefit programs.");
    });
  }

  // L. Sub-navigation links handler (.nav-link)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.dataset.view;
      if (targetView) {
        switchAppView(targetView);
        // Special: if view is home and target link is QR info, open the QR modal directly!
        if (targetView === 'home' && link.textContent.includes('QR')) {
          const qrModal = document.getElementById('emergencyCardModal');
          if (qrModal) {
            setTimeout(() => {
              qrModal.showModal();
              speakText("Opening offline first responder emergency card.");
            }, 300);
          }
        }
      }
    });
  });

  // 19. PILL SCANNER & NOSTALGIA RADIO INTERACTIVITY BINDINGS

  // A. Pill Scanner Modal Open
  const triggerPillScanner = document.getElementById('triggerPillScanner');
  const pillScannerModal = document.getElementById('pillScannerModal');
  const closePillScannerModal = document.getElementById('closePillScannerModal');
  
  if (triggerPillScanner && pillScannerModal) {
    triggerPillScanner.addEventListener('click', () => {
      // Reset scanner state
      document.getElementById('scannerBeam').classList.remove('scanning');
      document.getElementById('pillScannerResultBox').classList.add('d-none');
      document.getElementById('runPillScanBtn').textContent = "Capture & Analyze";
      document.getElementById('runPillScanBtn').disabled = false;
      
      pillScannerModal.showModal();
      speakText("Pill scanner camera activated. Please place your pill on your palm and hold it in front of the camera.");
      showToast("Camera scanner activated.");
    });
  }

  if (closePillScannerModal && pillScannerModal) {
    closePillScannerModal.addEventListener('click', () => {
      pillScannerModal.close();
    });
  }
  
  if (pillScannerModal) {
    pillScannerModal.addEventListener('click', (e) => {
      if (e.target === pillScannerModal) {
        pillScannerModal.close();
      }
    });
  }

  // B. Run Pill Scan
  const runPillScanBtn = document.getElementById('runPillScanBtn');
  if (runPillScanBtn) {
    runPillScanBtn.addEventListener('click', () => {
      speakText("Scanning your pill. Hold still.");
      runPillScanBtn.textContent = "Analyzing...";
      runPillScanBtn.disabled = true;
      
      const beam = document.getElementById('scannerBeam');
      if (beam) beam.classList.add('scanning');

      setTimeout(() => {
        if (beam) beam.classList.remove('scanning');
        
        const pillType = document.getElementById('simPillType').value;
        const resultBox = document.getElementById('pillScannerResultBox');
        const matchName = document.getElementById('pillScannerMatchName');
        const matchStatus = document.getElementById('pillScannerMatchStatus');
        const matchLabel = document.getElementById('pillScannerMatchLabel');
        const badgeRow = document.getElementById('pillScannerBadgeRow');
        const confirmBtn = document.getElementById('confirmPillTakenBtn');
        
        resultBox.classList.remove('d-none');
        runPillScanBtn.textContent = "Analysis Complete";

        if (pillType === 'metformin') {
          matchName.textContent = "Metformin (500mg)";
          matchStatus.textContent = "Matches your 8:00 AM Morning Medicine schedule. Prescribed for daily type-2 diabetes management.";
          matchLabel.textContent = "98% MATCH";
          matchLabel.style.background = "var(--color-primary-soft)";
          matchLabel.style.color = "var(--color-primary)";
          badgeRow.style.borderColor = "var(--color-primary)";
          confirmBtn.classList.remove('d-none');
          speakText("Pill identified as Metformin 500mg. This matches your scheduled morning dose. Tap green button to confirm.");
          showToast("Metformin identified.");
        } else if (pillType === 'amlodipine') {
          matchName.textContent = "Amlodipine (5mg)";
          matchStatus.textContent = "Matches your 8:00 PM Evening Medicine schedule. Scheduled for blood pressure management.";
          matchLabel.textContent = "95% MATCH";
          matchLabel.style.background = "var(--color-teal-soft)";
          matchLabel.style.color = "var(--color-teal)";
          badgeRow.style.borderColor = "var(--color-teal)";
          confirmBtn.classList.remove('d-none'); // Show confirm to allow taking for testing!
          speakText("Pill identified as Amlodipine 5mg. Tap green button to confirm.");
          showToast("Amlodipine detected.");
        } else {
          matchName.textContent = "Unrecognized Pill";
          matchStatus.textContent = "Warning: This pill does not match any of your prescribed care schedules. Do not consume.";
          matchLabel.textContent = "0% MATCH";
          matchLabel.style.background = "var(--color-red-soft)";
          matchLabel.style.color = "var(--color-red)";
          badgeRow.style.borderColor = "var(--color-red)";
          confirmBtn.classList.add('d-none');
          speakText("Warning! Unrecognized pill. This medicine does not match your active care prescriptions. Please put it back and contact doctor.");
          showToast("Warning: Unrecognized pill detected!");
          
          // Sound alarm chime
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(400, audioContext.currentTime);
          osc.frequency.setValueAtTime(300, audioContext.currentTime + 0.25);
          gain.gain.setValueAtTime(0.08, audioContext.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
          osc.connect(gain);
          gain.connect(audioContext.destination);
          osc.start();
          osc.stop(audioContext.currentTime + 0.5);
        }
      }, 1500);
    });
  }

  // C. Confirm Pill Taken from Scanner
  const confirmPillTakenBtn = document.getElementById('confirmPillTakenBtn');
  if (confirmPillTakenBtn) {
    confirmPillTakenBtn.addEventListener('click', () => {
      const matchNameEl = document.getElementById('pillScannerMatchName');
      const pillName = matchNameEl ? matchNameEl.textContent : "Metformin (500mg)";
      
      pillScannerModal.close();
      if (typeof window.recordPillTaken === 'function') {
        window.recordPillTaken(pillName);
      }
      markMedicationTaken(); // Triggers the base mark medication taken handler
    });
  }

  // D. Nostalgia Therapy Radio logic
  const nostalgiaFallbackStreams = {
    India: {
      '1960s': 'https://stream.zeno.fm/t39watus1p8uv', // Retro Mukesh/Rafi
      '1970s': 'https://stream.zeno.fm/t39watus1p8uv',
      '1980s': 'https://stream.zeno.fm/t39watus1p8uv'
    },
    Japan: {
      '1960s': 'https://quincy.torontocast.com:2070/stream.mp3', // J-Pop Sakura
      '1970s': 'https://quincy.torontocast.com:2070/stream.mp3',
      '1980s': 'https://quincy.torontocast.com:2070/stream.mp3'
    },
    'United States': {
      '1960s': 'https://80sexitos.stream.laut.fm/80sexitos', // 70s/80s Pop/Rock
      '1970s': 'https://80sexitos.stream.laut.fm/80sexitos',
      '1980s': 'https://80sexitos.stream.laut.fm/80sexitos'
    },
    'United Arab Emirates': {
      '1960s': 'https://stream.zeno.fm/8t27h0507m0uv', // Classical Oud/Arab folk
      '1970s': 'https://stream.zeno.fm/8t27h0507m0uv',
      '1980s': 'https://stream.zeno.fm/8t27h0507m0uv'
    },
    Brazil: {
      '1960s': 'https://stream.zeno.fm/f9w72wzsu68uv', // MPB & Bossa Nova
      '1970s': 'https://stream.zeno.fm/f9w72wzsu68uv',
      '1980s': 'https://stream.zeno.fm/f9w72wzsu68uv'
    }
  };

  let activeNostalgiaEra = '1970s';
  let nostalgiaRadioPlaying = false;
  let nostalgiaAudioTimer = null;
  let nostalgiaAudioPlayer = new Audio(); // Real HTML5 Audio element!

  async function tuneNostalgiaRadio() {
    const country = document.getElementById('countrySelect').value;
    const era = activeNostalgiaEra;
    
    // Select tag based on country/era
    let searchTag = 'oldies';
    if (country === 'United States') searchTag = era;
    if (country === 'Japan') searchTag = 'j-pop';
    if (country === 'Brazil') searchTag = 'bossa nova';
    
    const query = new URLSearchParams({
      country: country,
      tag: searchTag,
      limit: '5',
      hidebroken: 'true'
    });
    
    let streamUrl = null;
    let stationName = '';
    
    try {
      showToast("Tuning live radio...");
      const response = await fetch(`https://de1.api.radio-browser.info/json/stations/search?${query.toString()}`, {
        headers: { 'User-Agent': 'CareCircleEliteApp/1.0' }
      });
      const data = await response.json();
      
      // Filter for stations that have https:// URLs to avoid mixed content blocks, fallback to any
      const secureStations = data.filter(st => {
        const u = st.url_resolved || st.url;
        return u && u.startsWith('https://');
      });
      
      const chosenStation = secureStations[0] || data[0];
      if (chosenStation) {
        streamUrl = chosenStation.url_resolved || chosenStation.url;
        stationName = chosenStation.name;
        console.log("Tuning in real-time to:", stationName, streamUrl);
      }
    } catch (e) {
      console.warn("API query failed, loading cached fallback stream:", e);
    }
    
    // Fallback if API query failed or returned no results
    if (!streamUrl) {
      const countryGroup = nostalgiaFallbackStreams[country] || nostalgiaFallbackStreams['India'];
      streamUrl = countryGroup[era];
      stationName = "CareCircle Curated Retro Channel";
    }
    
    document.getElementById('nostalgiaTrackTitle').textContent = `Now Playing: ${stationName}`;
    document.getElementById('nostalgiaStationLabel').textContent = `${country} Radio Pack (Tuned: ${era})`;
    
    // Set Audio source and play
    if (nostalgiaRadioPlaying) {
      nostalgiaAudioPlayer.src = streamUrl;
      nostalgiaAudioPlayer.load();
      try {
        await nostalgiaAudioPlayer.play();
        showToast("Live stream connected!");
      } catch (err) {
        console.error("Playback failed:", err);
        showToast("Streaming error, retrying...");
      }
    }
  }

  function updateNostalgiaTrack() {
    const country = document.getElementById('countrySelect').value;
    document.getElementById('nostalgiaStationLabel').textContent = `${country} Radio Pack (Dial: ${activeNostalgiaEra})`;
    document.getElementById('cycleNostalgiaEraBtn').textContent = `Cycle Era (${activeNostalgiaEra})`;
    
    if (nostalgiaRadioPlaying) {
      tuneNostalgiaRadio();
    }
  }

  // Hook country select change to update nostalgia track
  document.getElementById('countrySelect').addEventListener('change', () => {
    updateNostalgiaTrack();
  });

  const cycleNostalgiaEraBtn = document.getElementById('cycleNostalgiaEraBtn');
  if (cycleNostalgiaEraBtn) {
    cycleNostalgiaEraBtn.addEventListener('click', () => {
      if (activeNostalgiaEra === '1960s') {
        activeNostalgiaEra = '1970s';
      } else if (activeNostalgiaEra === '1970s') {
        activeNostalgiaEra = '1980s';
      } else {
        activeNostalgiaEra = '1960s';
      }
      updateNostalgiaTrack();
      speakText(`Tuning radio to ${activeNostalgiaEra} station.`);
      
      // Play a small tuning static sound
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioContext.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
      gain.gain.setValueAtTime(0.04, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start();
      osc.stop(audioContext.currentTime + 0.3);
    });
  }

  const playNostalgiaBtn = document.getElementById('playNostalgiaBtn');
  const pauseNostalgiaBtn = document.getElementById('pauseNostalgiaBtn');
  const eqBars = document.getElementById('retroEqBars');

  function runNostalgiaEqAnimation() {
    if (!nostalgiaRadioPlaying) return;
    
    // Animate EQ bars visually
    if (eqBars) {
      eqBars.querySelectorAll('.eq-bar').forEach(bar => {
        const h = Math.floor(Math.random() * 20) + 5;
        bar.style.height = `${h}px`;
      });
    }

    nostalgiaAudioTimer = setTimeout(runNostalgiaEqAnimation, 150);
  }

  if (playNostalgiaBtn && pauseNostalgiaBtn) {
    playNostalgiaBtn.addEventListener('click', () => {
      nostalgiaRadioPlaying = true;
      playNostalgiaBtn.classList.add('d-none');
      pauseNostalgiaBtn.classList.remove('d-none');
      
      // Play a small static tuning chirp
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, audioContext.currentTime);
      osc.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
      gain.gain.setValueAtTime(0.05, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start();
      osc.stop(audioContext.currentTime + 0.25);
      
      // Tune and connect to stream
      tuneNostalgiaRadio();
      
      // Start the EQ equalizer visualizer bars
      runNostalgiaEqAnimation();
    });

    pauseNostalgiaBtn.addEventListener('click', () => {
      nostalgiaRadioPlaying = false;
      playNostalgiaBtn.classList.remove('d-none');
      pauseNostalgiaBtn.classList.add('d-none');
      
      nostalgiaAudioPlayer.pause();
      nostalgiaAudioPlayer.src = ''; // stop downloading
      
      if (nostalgiaAudioTimer) {
        clearTimeout(nostalgiaAudioTimer);
        nostalgiaAudioTimer = null;
      }
      
      if (eqBars) {
        eqBars.querySelectorAll('.eq-bar').forEach(bar => {
          bar.style.height = `5px`;
        });
      }
      
      speakText("Radio muted.");
      showToast("Radio muted.");
    });
  }

  // Run update to set initial nostalgia track
  updateNostalgiaTrack();


  // Ensure new icons are rendered
  document.querySelectorAll('.dashboard-card [data-icon]').forEach(el => {
    if (!el.innerHTML) {
      el.innerHTML = icons[el.dataset.icon] || '';
    }
  });

  // --- FEATURE 1: SIDE-EFFECT DIARY ---
  const logDizzyBtn = document.getElementById('logDizzyBtn');
  const dizzyStatusBlock = document.getElementById('dizzyStatusBlock');
  const dizzyStatusText = document.getElementById('dizzyStatusText');

  if (logDizzyBtn) {
    logDizzyBtn.addEventListener('click', () => {
      let dizzyLogs = [];
      try {
        dizzyLogs = JSON.parse(localStorage.getItem('dizzy_logs')) || [];
      } catch (e) {
        dizzyLogs = [];
      }
      
      const now = Date.now();
      dizzyLogs.push(now);
      localStorage.setItem('dizzy_logs', JSON.stringify(dizzyLogs));

      const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
      const weeklyLogs = dizzyLogs.filter(t => t >= oneWeekAgo);

      const medsChecked = document.getElementById('chkMeds') && document.getElementById('chkMeds').checked;
      const medsTimestamp = localStorage.getItem('meds_taken_today_timestamp');
      const isMedsTakenToday = medsChecked || (medsTimestamp && new Date(parseInt(medsTimestamp)).toDateString() === new Date().toDateString());

      let statusMsg = "";
      const lang = document.documentElement.lang || 'en';
      const nameInput = document.getElementById('seniorNameInput');
      const activeSenior = (nameInput && nameInput.value.trim()) || "Lakshmi Raman";

      if (isMedsTakenToday) {
        const count = weeklyLogs.length;
        const localizedWarnings = {
          en: `This happened ${count} times this week after your morning pill. Show this to your doctor.`,
          ja: `今週、朝の薬の後にこれが ${count} 回発生しました。医師に見せてください。`,
          pt: `Isso aconteceu ${count} vezes esta semana após o seu comprimido matinal. Mostre isso ao seu médico.`,
          ta: `இந்த வாரத்தில் உங்கள் காலை மாத்திரைக்குப் பிறகு இது ${count} முறை நடந்துள்ளது. இதை உங்கள் மருத்துவரிடம் காட்டுங்கள்.`,
          hi: `इस सप्ताह आपकी सुबह की गोली के बाद ऐसा ${count} बार हुआ है। इसे अपने डॉक्टर को दिखाएं।`,
          te: `ఈ వారంలో మీ ఉదయం టాబ్లెట్ తర్వాత ఇది ${count} సార్లు జరిగింది. దీనిని మీ వైద్యునికి చూపించండి.`
        };
        statusMsg = localizedWarnings[lang] || localizedWarnings['en'];
      } else {
        const count = weeklyLogs.length;
        const localizedWarningsNoMeds = {
          en: `Logged dizzy spell. This happened ${count} times this week. (Note: Morning pill not marked as taken today).`,
          ja: `めまいを記録しました。今週 ${count} 回発生しました。（注意：今日の朝の薬はまだ服用記録がありません）。`,
          pt: `Tontura registrada. Isso aconteceu ${count} vezes esta semana. (Nota: O comprimido matinal não foi marcado como tomado hoje).`,
          ta: `தலைச்சுற்றல் பதிவு செய்யப்பட்டது. இந்த வாரத்தில் இது ${count} முறை நடந்துள்ளது. (குறிப்பு: இன்று காலை மாத்திரை எடுக்கப்பட்டதாக பதிவு செய்யப்படவில்லை).`,
          hi: `चक्कर आना दर्ज किया गया। इस सप्ताह ऐसा ${count} बार हुआ है। (नोट: आज सुबह की गोली ली गई दर्ज नहीं है)।`,
          te: `తలతిరగడం నమోదైంది. ఈ వారంలో ఇది ${count} సార్లు జరిగింది. (గమనిక: ఈ రోజు ఉదయం టాబ్లెట్ వేసుకున్నట్లు నమోదు కాలేదు).`
        };
        statusMsg = localizedWarningsNoMeds[lang] || localizedWarningsNoMeds['en'];
      }

      if (dizzyStatusText) {
        dizzyStatusText.textContent = statusMsg;
      }
      if (dizzyStatusBlock) {
        dizzyStatusBlock.classList.remove('d-none');
      }

      speakText(statusMsg);
      showToast("Dizzy spell logged.");
    });
  }

  // --- FEATURE 2: WATER HYDRATION TRACKER ---
  function getSeniorLocalizedNameWithHonorific(name, lang) {
    if (lang === 'te') return `${name} garu`;
    if (lang === 'ta') return `${name} amma`;
    if (lang === 'hi') return `${name} ji`;
    if (lang === 'ja') return `${name}さん`;
    if (lang === 'pt') return `Sr(a). ${name}`;
    
    const country = document.getElementById('countrySelect').value;
    if (country === 'India') {
      return `${name} ji`;
    }
    return name;
  }

  window.updateWaterUI = function() {
    const countVal = document.getElementById('waterCountVal');
    const reminderTextEl = document.getElementById('waterReminderText');
    if (!countVal || !reminderTextEl) return;

    let count = parseInt(localStorage.getItem('water_count_today')) || 0;
    const lastReset = localStorage.getItem('water_last_reset_date');
    const todayStr = new Date().toDateString();

    if (lastReset !== todayStr) {
      count = 0;
      localStorage.setItem('water_count_today', '0');
      localStorage.setItem('water_last_reset_date', todayStr);
    }

    countVal.textContent = `${count} / 8`;

    const cups = document.querySelectorAll('.water-cup-icon');
    cups.forEach((cup, idx) => {
      if (idx < count) {
        cup.style.opacity = '1.0';
        cup.style.transform = 'scale(1.2)';
      } else {
        cup.style.opacity = '0.3';
        cup.style.transform = '';
      }
    });

    const lang = document.documentElement.lang || 'en';
    const nameInput = document.getElementById('seniorNameInput');
    const name = (nameInput && nameInput.value.trim()) || "Lakshmi Raman";
    const formattedName = getSeniorLocalizedNameWithHonorific(name, lang);

    const prompts = {
      en: `${formattedName}, have you had water in the last 2 hours?`,
      ja: `${formattedName}、過去2時間以内に水分を補給しましたか？`,
      pt: `${formattedName}, você bebeu água nas últimas 2 horas?`,
      ta: `${formattedName}, கடந்த 2 மணிநேரத்தில் நீங்கள் தண்ணீர் குடித்தீர்களா?`,
      hi: `${formattedName}, क्या आपने पिछले 2 घंटों में पानी पिया है?`,
      te: `${formattedName}, గత 2 గంటలలో మీరు నీరు తాగారా?`
    };

    reminderTextEl.textContent = prompts[lang] || prompts['en'];
  }

  function logWaterClick(newCount) {
    if (newCount < 0) newCount = 0;
    if (newCount > 8) newCount = 8;
    localStorage.setItem('water_count_today', newCount.toString());
    localStorage.setItem('water_last_reset_date', new Date().toDateString());
    updateWaterUI();
    
    const lang = document.documentElement.lang || 'en';
    const waterLoggedMsgs = {
      en: "Logged a glass of water. Keep staying hydrated!",
      ja: "コップ1杯の水分補給を記録しました。水分をこまめに摂りましょう！",
      pt: "Copo de água registrado. Continue se hidratando!",
      ta: "ஒரு கிளாஸ் தண்ணீர் குடித்தது பதிவு செய்யப்பட்டது. தொடர்ந்து உடலை நீரேற்றமாக வைத்திருங்கள்!",
      hi: "एक गिलास पानी दर्ज किया गया। खुद को हाइड्रेटेड रखें!",
      te: "ఒక గ్లాసు నీరు తాగడం నమోదైంది. శరీరాన్ని ఎల్లప్పుడూ హైడ్రేటెడ్‌గా ఉంచండి!"
    };
    speakText(waterLoggedMsgs[lang] || waterLoggedMsgs['en']);
  }

  const logWaterBtn = document.getElementById('logWaterBtn');
  if (logWaterBtn) {
    logWaterBtn.addEventListener('click', () => {
      let count = parseInt(localStorage.getItem('water_count_today')) || 0;
      logWaterClick(count + 1);
    });
  }

  const waterCups = document.querySelectorAll('.water-cup-icon');
  waterCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
      logWaterClick(idx + 1);
    });
  });

  // --- FEATURE 3: SLEEP JOURNAL ---
  const sleepBtns = document.querySelectorAll('.sleep-opt-btn');
  const sleepStatusText = document.getElementById('sleepStatusText');

  if (sleepBtns) {
    sleepBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const quality = btn.dataset.quality;
        
        sleepBtns.forEach(b => {
          b.style.border = '1px solid var(--border-color)';
          b.style.background = '';
          b.style.color = '';
        });

        if (quality === 'good') {
          btn.style.background = 'var(--color-primary-soft, #e6fffa)';
          btn.style.color = 'var(--color-primary-dark, #0d9488)';
          btn.style.border = '2px solid var(--color-primary, #0d9488)';
        } else if (quality === 'average') {
          btn.style.background = 'var(--color-gold-soft, #fef3c7)';
          btn.style.color = 'var(--color-gold-dark, #b45309)';
          btn.style.border = '2px solid var(--color-gold, #b45309)';
        } else if (quality === 'bad') {
          btn.style.background = 'var(--color-red-soft, #fee2e2)';
          btn.style.color = 'var(--color-red-dark, #b91c1c)';
          btn.style.border = '2px solid var(--color-red, #ef4444)';
        }

        let sleepLogs = [];
        try {
          sleepLogs = JSON.parse(localStorage.getItem('sleep_logs')) || [];
        } catch (err) {
          sleepLogs = [];
        }

        const todayStr = new Date().toDateString();
        sleepLogs = sleepLogs.filter(log => log.date !== todayStr);
        sleepLogs.push({ date: todayStr, quality: quality });
        localStorage.setItem('sleep_logs', JSON.stringify(sleepLogs));

        const lang = document.documentElement.lang || 'en';
        const nameInput = document.getElementById('seniorNameInput');
        const activeSenior = (nameInput && nameInput.value.trim()) || "Lakshmi Raman";

        const lastThree = sleepLogs.slice(-3);
        const threeBadSleeps = lastThree.length === 3 && lastThree.every(log => log.quality === 'bad');

        if (threeBadSleeps) {
          logFamilyChatSystem(`System Warning: ${activeSenior} logged poor sleep 3 nights in a row.`);
          
          const localizedAlerts = {
            en: `You have slept poorly for three nights, ${activeSenior}. I have quietly notified Meera so she can check on you.`,
            ja: `${activeSenior}さん、3日連続でよく眠れなかったようですね。心配ですので、美羅（みーら）さんに連絡して確認してもらうようお伝えしました。`,
            pt: `Você dormiu mal por três noites, ${activeSenior}. Avisei discretamente Meera para que ela possa falar com você.`,
            ta: `${activeSenior}, நீங்கள் மூன்று இரவுகளாகச் சரியாக தூங்கவில்லை. மீரா உங்களிடம் விசாரிக்கும்படி நான் அவளுக்குத் தகவல் அனுப்பியுள்ளேன்.`,
            hi: `${activeSenior}, आप तीन रातों से ठीक से सो नहीं पाए हैं। मैंने मीरा को चुपके से सूचित कर दिया है ताकि वह आपका हाल-चाल ले सके।`,
            te: `${activeSenior}, మీరు మూడు రాత్రులుగా సరిగ్గా నిద్రపోలేదు. మీ క్షేమ సమాచారాలు అడగమని నేను మీరాకు నిశ్శబ్దంగా తెలియజేశాను.`
          };
          
          const alertMsg = localizedAlerts[lang] || localizedAlerts['en'];
          if (sleepStatusText) {
            sleepStatusText.textContent = alertMsg;
            sleepStatusText.style.color = 'var(--color-red-dark, #b91c1c)';
            sleepStatusText.style.fontWeight = 'bold';
          }
          speakText(alertMsg);
          showToast("Notified Meera regarding poor sleep.");

          setTimeout(() => {
            logFamilyChatResponse("Meera", `Mom, Sathi noticed you haven't been sleeping well for 3 nights in a row. Is everything okay? Are you feeling dizzy or having any discomfort? Let me know, I'm thinking of you!`);
            speakText("New message in family circle from Meera regarding your sleep.");
            showToast("Meera responded to sleep warning.");
          }, 3000);
        } else {
          const localizedConfirmations = {
            en: `Sleep quality logged: ${quality}. Sleep logs updated.`,
            ja: `睡眠の質を「${quality}」として記録しました。履歴を更新しました。`,
            pt: `Qualidade do sono registrada: ${quality}. Histórico atualizado.`,
            ta: `தூக்கத்தின் தரம் பதிவு செய்யப்பட்டது: ${quality}. தூக்கப் பதிவு புதுப்பிக்கப்பட்டது.`,
            hi: `नींद की गुणवत्ता दर्ज की गई: ${quality}। नींद का लॉग अपडेट हो गया है।`,
            te: `నిద్ర నాణ్యత నమోదైంది: ${quality}. నిద్ర లాగ్ నవీకరించబడింది.`
          };
          const confirmMsg = localizedConfirmations[lang] || localizedConfirmations['en'];
          if (sleepStatusText) {
            sleepStatusText.textContent = confirmMsg;
            sleepStatusText.style.color = 'var(--text-muted)';
            sleepStatusText.style.fontWeight = 'normal';
          }
          speakText(confirmMsg);
          showToast("Sleep logged.");
        }
      });
    });
  }

  // --- FEATURE 4: SYMPTOM TRANSLATOR & RISK TRIAGE ---
  const symptomVoiceBtn = document.getElementById('symptomVoiceBtn');
  const symptomInputText = document.getElementById('symptomInputText');
  const triageSymptomBtn = document.getElementById('triageSymptomBtn');
  const triageResultBlock = document.getElementById('triageResultBlock');
  const triageTranslationText = document.getElementById('triageTranslationText');
  const triageRiskAssessment = document.getElementById('triageRiskAssessment');

  let symptomTriageListening = false;
  let symptomTriageRecognizer = null;

  if (symptomVoiceBtn && symptomInputText) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      symptomTriageRecognizer = new SpeechRecognition();
      symptomTriageRecognizer.continuous = false;
      symptomTriageRecognizer.interimResults = false;

      symptomTriageRecognizer.onstart = () => {
        symptomTriageListening = true;
        symptomVoiceBtn.classList.add('active-listening');
        symptomInputText.placeholder = "Listening for symptoms...";
        symptomInputText.value = "";
      };

      symptomTriageRecognizer.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        symptomInputText.value = transcript;
        showToast("Symptom captured. Triage starting...");
        setTimeout(() => {
          if (triageSymptomBtn) triageSymptomBtn.click();
        }, 1000);
      };

      symptomTriageRecognizer.onerror = (event) => {
        console.warn("Speech recognition error in symptom triage", event);
        symptomVoiceBtn.classList.remove('active-listening');
        symptomInputText.placeholder = "Describe how you feel...";
      };

      symptomTriageRecognizer.onend = () => {
        symptomTriageListening = false;
        symptomVoiceBtn.classList.remove('active-listening');
        symptomInputText.placeholder = "Describe how you feel...";
      };

      symptomVoiceBtn.addEventListener('click', () => {
        if (symptomTriageListening) {
          symptomTriageRecognizer.stop();
        } else {
          const lang = document.documentElement.lang || 'en';
          let recognitionLang = 'en-US';
          if (lang === 'te') recognitionLang = 'te-IN';
          else if (lang === 'ta') recognitionLang = 'ta-IN';
          else if (lang === 'hi') recognitionLang = 'hi-IN';
          else if (lang === 'ja') recognitionLang = 'ja-JP';
          else if (lang === 'pt') recognitionLang = 'pt-BR';
          
          symptomTriageRecognizer.lang = recognitionLang;
          symptomTriageRecognizer.start();
        }
      });
    }
  }

  if (triageSymptomBtn && symptomInputText) {
    triageSymptomBtn.addEventListener('click', () => {
      const symptom = symptomInputText.value.trim();
      if (!symptom) {
        showToast("Please enter or speak a symptom first.");
        return;
      }

      const lang = document.documentElement.lang || 'en';
      const nameInput = document.getElementById('seniorNameInput');
      const activeSenior = (nameInput && nameInput.value.trim()) || "Lakshmi Raman";
      
      if (triageResultBlock) triageResultBlock.classList.remove('d-none');
      if (triageTranslationText) triageTranslationText.textContent = "Analyzing symptom text...";
      if (triageRiskAssessment) {
        triageRiskAssessment.textContent = "Please wait, triaging safety risk...";
        triageRiskAssessment.style.color = 'var(--text-muted)';
      }

      function runOfflineTriage(symptomText) {
        const lowerText = symptomText.toLowerCase();
        
        const highRiskKeywords = [
          'chest', 'tight', 'tightness', 'heart', 'pain', 'breathing', 'breath', 'left arm', 'dizzy', 'dizziness',
          'ఛాతీ', 'బిగుతు', 'రొమ్ము', 'నొప్పి', 'గుండె', 'శ్వాస', 'తలతిరగడం',
          'நெஞ்சு', 'வலி', 'மூச்சு', 'இதயம்', 'மயக்கம்',
          'सीने', 'दर्द', 'भारीपन', 'सांस', 'दिल', 'चक्कर',
          '胸', '痛み', '息苦しい', '心臓', '左腕', 'めまい',
          'peito', 'dor', 'aperto', 'respirar', 'coração', 'tontura'
        ];

        const isHighRisk = highRiskKeywords.some(keyword => lowerText.includes(keyword));
        
        let translated = `Symptom described: "${symptomText}"`;
        let risk = isHighRisk ? "RED ALERT" : "GREEN ALERT";
        let recommendation = "";

        if (isHighRisk) {
          const redAlertRecommendations = {
            en: "RED ALERT: This needs attention today. Please contact your doctor or tap emergency SOS immediately.",
            ja: "要対応アラート：本日中に対応が必要です。今すぐ医師に連絡するか、緊急SOSを押してください。",
            pt: "ALERTA VERMELHO: Isso precisa de atenção hoje. Entre em contato com seu médico ou toque no SOS de emergência imediatamente.",
            ta: "சிகப்பு எச்சரிக்கை: இது இன்று உடனடி கவனிப்பு தேவைப்படுகிறது. தயவுசெய்து உங்கள் மருத்துவரை தொடர்பு கொள்ளவும் அல்லது SOS ஐ அழுத்தவும்.",
            hi: "रेड अलर्ट: इस पर आज ही ध्यान देने की आवश्यकता है। कृपया तुरंत अपने डॉक्टर से संपर्क करें या आपातकालीन एसओएस दबाएं।",
            te: "రెడ్ అలర్ట్: ఇది ఈ రోజు అత్యవసర శ్రద్ధ అవసరం. దయచేసి మీ వైద్యుడిని సంప్రదించండి లేదా వెంటనే అత్యవసర SOS నొక్కండి."
          };
          recommendation = redAlertRecommendations[lang] || redAlertRecommendations['en'];
        } else {
          const greenAlertRecommendations = {
            en: "GREEN ALERT: Rest and monitor. If symptoms worsen, contact your doctor.",
            ja: "経過観察：安静にして様子を見てください。症状が悪化する場合は医師に相談してください。",
            pt: "ALERTA VERDE: Descanse e monitore. Se os sintomas piorarem, entre em contato com seu médico.",
            ta: "பச்சை எச்சரிக்கை: ஓய்வு எடுத்து கண்காணிக்கவும். அறிகுறிகள் மோசமடைந்தால், உங்கள் மருத்துவரை தொடர்பு கொள்ளவும்.",
            hi: "ग्रीन अलर्ट: आराम करें और निगरानी रखें। यदि लक्षण बिगड़ते हैं, तो अपने डॉक्टर से संपर्क करें।",
            te: "గ్రీన్ అలర్ట్: విశ్రాంతి తీసుకోండి మరియు గమనించండి. లక్షణాలు తీవ్రమైతే, మీ వైద్యుడిని సంప్రదించండి."
          };
          recommendation = greenAlertRecommendations[lang] || greenAlertRecommendations['en'];
        }

        return {
          translated_symptom: translated,
          risk_level: risk,
          triage_recommendation: recommendation
        };
      }

      if (geminiApiKey) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(geminiApiKey)}`;
        
        const systemPrompt = `You are a medical translator and senior triage assistant.
The user is describing their symptoms: "${symptom}".
Your task is to:
1. Translate the symptom description to English (if it is not already in English).
2. Triage the risk level into one of two categories:
   - RED ALERT: For critical symptoms like chest tightness, chest pain, left arm pain, difficulty breathing, severe sudden dizziness, sudden weakness, or severe abdominal pain.
   - GREEN ALERT: For minor/moderate non-urgent symptoms like mild fatigue, slight headache, minor muscle soreness, or runny nose.
3. Respond in the senior's language (language code: ${lang}).

Format your response EXACTLY as a JSON object, with no markdown styling or wrapping backticks, in this structure:
{
  "translated_symptom": "[English translation of symptom description]",
  "risk_level": "[RED ALERT or GREEN ALERT]",
  "triage_recommendation": "[A warm, caring recommendation in ${lang} language, telling the user to contact their doctor or seek emergency help if RED, or to rest and monitor if GREEN. Keep it simple and easy to understand for an elder, max 2-3 sentences. Do not use markdown bolding.]"
}`;

        const requestData = {
          contents: [{ parts: [{ text: `Analyze symptom: "${symptom}"` }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 250,
            responseMimeType: "application/json"
          }
        };

        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData)
        })
        .then(response => {
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        })
        .then(data => {
          let textResult = "";
          if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
            textResult = data.candidates[0].content.parts[0].text;
          }
          
          let parsedData;
          try {
            parsedData = JSON.parse(textResult);
          } catch (e) {
            const cleaned = textResult.replace(/```json/g, '').replace(/```/g, '').trim();
            parsedData = JSON.parse(cleaned);
          }

          if (triageTranslationText) {
            triageTranslationText.innerHTML = `<strong>Translation:</strong> ${parsedData.translated_symptom}`;
          }
          if (triageRiskAssessment) {
            triageRiskAssessment.textContent = parsedData.triage_recommendation;
            if (parsedData.risk_level === 'RED ALERT') {
              triageRiskAssessment.style.color = 'var(--color-red-dark, #b91c1c)';
              logFamilyChatSystem(`Symptom Warning Alert: ${activeSenior} logged symptoms: "${parsedData.translated_symptom}". Triaged as RED ALERT.`);
            } else {
              triageRiskAssessment.style.color = 'var(--color-primary-dark, #0d9488)';
            }
          }

          speakText(parsedData.triage_recommendation);
        })
        .catch(err => {
          console.warn("Gemini Triage query failed, falling back to rule-based classification:", err);
          const fallbackData = runOfflineTriage(symptom);
          
          if (triageTranslationText) {
            triageTranslationText.innerHTML = `<strong>Local Analysis:</strong> Checked locally (Offline)`;
          }
          if (triageRiskAssessment) {
            triageRiskAssessment.textContent = fallbackData.triage_recommendation;
            if (fallbackData.risk_level === 'RED ALERT') {
              triageRiskAssessment.style.color = 'var(--color-red-dark, #b91c1c)';
              logFamilyChatSystem(`Symptom Warning Alert: ${activeSenior} logged symptoms locally. Triaged as RED ALERT.`);
            } else {
              triageRiskAssessment.style.color = 'var(--color-primary-dark, #0d9488)';
            }
          }
          speakText(fallbackData.triage_recommendation);
        });
      } else {
        const fallbackData = runOfflineTriage(symptom);
        
        if (triageTranslationText) {
          triageTranslationText.innerHTML = `<strong>Local Analysis:</strong> Checked locally (Offline)`;
        }
        if (triageRiskAssessment) {
          triageRiskAssessment.textContent = fallbackData.triage_recommendation;
          if (fallbackData.risk_level === 'RED ALERT') {
            triageRiskAssessment.style.color = 'var(--color-red-dark, #b91c1c)';
            logFamilyChatSystem(`Symptom Warning Alert: ${activeSenior} logged symptoms locally. Triaged as RED ALERT.`);
          } else {
            triageRiskAssessment.style.color = 'var(--color-primary-dark, #0d9488)';
          }
        }
        speakText(fallbackData.triage_recommendation);
      }
    });
  }

  // ==========================================================================
  // PREMIUM EXPANSION: HEALTH, SAFETY, AND FINANCIAL ADVOCACY MODULES
  // ==========================================================================

  // Helpers to get current active settings
  function getActiveSeniorName() {
    const nameInput = document.getElementById('seniorNameInput');
    return localStorage.getItem('senior_name') || (nameInput && nameInput.value.trim()) || "Lakshmi Raman";
  }

  function getActiveCompanionName() {
    const compInput = document.getElementById('companionNameInput');
    return localStorage.getItem('companion_name') || (compInput && compInput.value.trim()) || "Sathi";
  }

  function getActiveCity() {
    const cityInput = document.getElementById('cityInput');
    return localStorage.getItem('city_location') || (cityInput && cityInput.value.trim()) || "Chennai";
  }

  function getActiveLanguage() {
    const langSelect = document.getElementById('languageSelect');
    return (langSelect && langSelect.value) || "en";
  }

  function getActiveCountry() {
    const countrySelect = document.getElementById('countrySelect');
    return (countrySelect && countrySelect.value) || "India";
  }

  // A. EXTREME WEATHER ALERT (HEATWAVE MONITORING)
  const simulateHeatwaveChk = document.getElementById('simulateHeatwave');
  const weatherAlertBanner = document.getElementById('weatherAlertBanner');
  const weatherCheckInBtn = document.getElementById('weatherCheckInBtn');
  const simulateWeatherCheckinOverdueBtn = document.getElementById('simulateWeatherCheckinOverdueBtn');
  const weatherAlertMessage = document.getElementById('weatherAlertMessage');

  let weatherAlertSpoken = false;

  function checkWeatherAlert() {
    const isHeatwaveSimulated = simulateHeatwaveChk && simulateHeatwaveChk.checked;
    const city = getActiveCity();
    const seniorName = getActiveSeniorName();
    
    // Check if Hyderabad city + heatwave checkbox is active
    if (isHeatwaveSimulated && city.toLowerCase().includes('hyderabad')) {
      if (weatherAlertBanner) {
        weatherAlertBanner.classList.remove('d-none');
        if (weatherAlertMessage) {
          weatherAlertMessage.textContent = `Today is dangerously hot in Hyderabad, exceeding 45°C. ${seniorName}, please stay indoors, keep hydrated, and check in every 2 hours.`;
        }
      }
      
      // Speak alert once on load/enable
      if (!weatherAlertSpoken) {
        weatherAlertSpoken = true;
        setTimeout(() => {
          const currentCityLocation = localStorage.getItem('city_location') || "Chennai";
      const caregiverName = localStorage.getItem('caregiver_name') || "your family";
      speakText(`Attention: ${currentCityLocation} is experiencing extreme heat today, exceeding 45 degrees. Please stay indoors, keep drinking water, and tap the check-in button every two hours so ${caregiverName} knows you are safe.`);
        }, 1500);
      }
    } else {
      if (weatherAlertBanner) {
        weatherAlertBanner.classList.add('d-none');
      }
      weatherAlertSpoken = false;
    }
  }

  if (simulateHeatwaveChk) {
    // Initial load check
    simulateHeatwaveChk.checked = localStorage.getItem('simulate_heatwave') === 'true';
    checkWeatherAlert();
    
    simulateHeatwaveChk.addEventListener('change', (e) => {
      localStorage.setItem('simulate_heatwave', e.target.checked);
      weatherAlertSpoken = false;
      checkWeatherAlert();
    });
  }

  if (weatherCheckInBtn) {
    weatherCheckInBtn.addEventListener('click', () => {
      localStorage.setItem('last_weather_checkin', Date.now());
      alert("Check-in recorded! Stay safe and keep drinking water.");
      speakText("Thank you for checking in. Please continue to stay indoors and drink water.");
      logFamilyChatSystem(`${getActiveSeniorName()} checked in safely during the Hyderabad Heatwave.`);
    });
  }

  if (simulateWeatherCheckinOverdueBtn) {
    simulateWeatherCheckinOverdueBtn.addEventListener('click', () => {
      const caregiverName = localStorage.getItem('caregiver_name') || "your family";
      speakText(`Warning: You have not checked in for two hours during the heatwave. I am notifying ${caregiverName} immediately.`);
      logFamilyChatSystem(`🚨 Heatwave Alert: Hyderabad is at 45°C. ${getActiveSeniorName()} has missed their 2-hour check-in. Alerting family.`);
      setTimeout(() => {
        logFamilyChatResponse("Meera", "Mom, I just received an alert about the heatwave in Hyderabad and that you missed your check-in. Are you okay? Please call me!");
      }, 1000);
    });
  }

  // B. "I'M GOING OUT" TRACKER
  const goingOutBtn = document.getElementById('goingOutBtn');
  const goingOutBackBtn = document.getElementById('goingOutBackBtn');
  const goingOutCountdownText = document.getElementById('goingOutCountdownText');
  const goingOutHeaderStatus = document.getElementById('goingOutHeaderStatus');
  const goingOutDurationSelect = document.getElementById('goingOutDuration');
  const simulateGoingOutTimeoutBtn = document.getElementById('simulateGoingOutTimeoutBtn');

  // Safety tab counterparts
  const safetyGoingOutDuration = document.getElementById('safetyGoingOutDuration');
  const safetyGoingOutStartBtn = document.getElementById('safetyGoingOutStartBtn');
  const safetyGoingOutEndBtn = document.getElementById('safetyGoingOutEndBtn');
  const safetyGoingOutTimer = document.getElementById('safetyGoingOutTimer');
  const safetyGoingOutStateHome = document.getElementById('safetyGoingOutStateHome');
  const safetyGoingOutStateActive = document.getElementById('safetyGoingOutStateActive');
  const safetyGoingOutForceTimeoutBtn = document.getElementById('safetyGoingOutForceTimeoutBtn');

  let goingOutInterval = null;

  function updateGoingOutUI() {
    const state = localStorage.getItem('going_out_state') || 'home';
    const deadline = parseInt(localStorage.getItem('going_out_deadline') || '0');
    
    if (state === 'out' && deadline > Date.now()) {
      // Show out UI
      if (goingOutBtn) goingOutBtn.classList.add('d-none');
      if (goingOutDurationSelect) goingOutDurationSelect.classList.add('d-none');
      if (goingOutBackBtn) goingOutBackBtn.classList.remove('d-none');
      if (simulateGoingOutTimeoutBtn) simulateGoingOutTimeoutBtn.classList.remove('d-none');
      if (goingOutCountdownText) goingOutCountdownText.classList.remove('d-none');
      if (goingOutHeaderStatus) {
        goingOutHeaderStatus.textContent = "🚶 Currently Out";
        goingOutHeaderStatus.style.color = "var(--color-orange, #ea580c)";
      }
      
      if (safetyGoingOutStateHome) safetyGoingOutStateHome.classList.add('d-none');
      if (safetyGoingOutStateActive) safetyGoingOutStateActive.classList.remove('d-none');
      
      // Start/verify countdown loop
      if (!goingOutInterval) {
        goingOutInterval = setInterval(runGoingOutCountdown, 1000);
      }
    } else {
      // Show home UI
      if (goingOutBtn) goingOutBtn.classList.remove('d-none');
      if (goingOutDurationSelect) goingOutDurationSelect.classList.remove('d-none');
      if (goingOutBackBtn) goingOutBackBtn.classList.add('d-none');
      if (simulateGoingOutTimeoutBtn) simulateGoingOutTimeoutBtn.classList.add('d-none');
      if (goingOutCountdownText) goingOutCountdownText.classList.add('d-none');
      if (goingOutHeaderStatus) {
        goingOutHeaderStatus.textContent = "🟢 Safe At Home";
        goingOutHeaderStatus.style.color = "#4ade80";
      }
      
      if (safetyGoingOutStateHome) safetyGoingOutStateHome.classList.remove('d-none');
      if (safetyGoingOutStateActive) safetyGoingOutStateActive.classList.add('d-none');
      
      if (goingOutInterval) {
        clearInterval(goingOutInterval);
        goingOutInterval = null;
      }
    }
  }

  function runGoingOutCountdown() {
    const deadline = parseInt(localStorage.getItem('going_out_deadline') || '0');
    const diff = deadline - Date.now();
    
    if (diff <= 0) {
      clearInterval(goingOutInterval);
      goingOutInterval = null;
      triggerGoingOutTimeout();
    } else {
      const hours = Math.floor(diff / (3600 * 1000));
      const mins = Math.floor((diff % (3600 * 1000)) / (60 * 1000));
      const secs = Math.floor((diff % (60 * 1000)) / 1000);
      
      const pad = (n) => n.toString().padStart(2, '0');
      const timerStr = `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
      
      if (goingOutCountdownText) goingOutCountdownText.textContent = `Due back in: ${timerStr}`;
      if (safetyGoingOutTimer) safetyGoingOutTimer.textContent = timerStr;
    }
  }

  let privateCheckInInterval = null;

  function triggerGoingOutTimeout() {
    const modal = document.getElementById('goingOutPrivateCheckInModal');
    if (!modal) {
      originalTimeoutAlert();
      return;
    }

    const seniorName = getActiveSeniorName();
    speakText(`${seniorName}, your promised return time has passed. Are you okay? Tap 'I'm Safe' to let us know. We will wait 2 minutes before contacting your family.`);
    
    modal.showModal();

    let timeLeft = 120; // 2 minutes in seconds
    const timerDisplay = document.getElementById('privateCheckInTimer');
    if (timerDisplay) timerDisplay.textContent = "02:00";

    if (privateCheckInInterval) clearInterval(privateCheckInInterval);
    
    privateCheckInInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(privateCheckInInterval);
        modal.close();
        originalTimeoutAlert();
      } else {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        if (timerDisplay) {
          timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
      }
    }, 1000);
  }

  function originalTimeoutAlert() {
    localStorage.setItem('going_out_state', 'home');
    updateGoingOutUI();
    const caregiverName = localStorage.getItem('caregiver_name') || "your family";
      speakText(`Attention, this is a safety alert. You have not checked back in from your outing. I am notifying ${caregiverName} immediately.`);
    logFamilyChatSystem(`🚨 Emergency Alert: ${getActiveSeniorName()} went out and has not checked back in within the promised duration. Please check on them.`);
    setTimeout(() => {
      logFamilyChatResponse("Meera", "Mom! The app says you are overdue from your walk. Please let me know if you are okay, I am worried.");
    }, 1200);
  }

  // Bind buttons in Private Check-in Modal
  const privateCheckInSafeBtn = document.getElementById('privateCheckInSafeBtn');
  const privateCheckInExtendBtn = document.getElementById('privateCheckInExtendBtn');

  if (privateCheckInSafeBtn) {
    privateCheckInSafeBtn.addEventListener('click', () => {
      if (privateCheckInInterval) clearInterval(privateCheckInInterval);
      const modal = document.getElementById('goingOutPrivateCheckInModal');
      if (modal) modal.close();
      endGoingOut();
    });
  }

  if (privateCheckInExtendBtn) {
    privateCheckInExtendBtn.addEventListener('click', () => {
      if (privateCheckInInterval) clearInterval(privateCheckInInterval);
      const modal = document.getElementById('goingOutPrivateCheckInModal');
      if (modal) modal.close();
      
      startGoingOut(15);
      logFamilyChatSystem(`${getActiveSeniorName()} extended return promise by 15 minutes.`);
      speakText(`Promise extended by 15 minutes. Safe travels!`);
    });
  }

  function startGoingOut(mins) {
    localStorage.setItem('going_out_state', 'out');
    localStorage.setItem('going_out_deadline', Date.now() + mins * 60 * 1000);
    logFamilyChatSystem(`${getActiveSeniorName()} checked out: Going out, promised to return in ${mins} minutes.`);
    speakText(`Going out logged for ${mins} minutes. Please check back in when you return safely. I will watch the timer.`);
    updateGoingOutUI();
  }

  function endGoingOut() {
    localStorage.setItem('going_out_state', 'home');
    logFamilyChatSystem(`${getActiveSeniorName()} checked in: Returned home safely.`);
    speakText("Welcome back! I have notified your family that you are home safely.");
    updateGoingOutUI();
  }

  // Bind going-out triggers
  if (goingOutBtn) {
    goingOutBtn.addEventListener('click', () => {
      const duration = parseInt(goingOutDurationSelect ? goingOutDurationSelect.value : '120');
      startGoingOut(duration);
    });
  }
  if (goingOutBackBtn) {
    goingOutBackBtn.addEventListener('click', endGoingOut);
  }
  if (simulateGoingOutTimeoutBtn) {
    simulateGoingOutTimeoutBtn.addEventListener('click', triggerGoingOutTimeout);
  }

  if (safetyGoingOutStartBtn) {
    safetyGoingOutStartBtn.addEventListener('click', () => {
      const duration = parseInt(safetyGoingOutDuration ? safetyGoingOutDuration.value : '120');
      startGoingOut(duration);
    });
  }
  if (safetyGoingOutEndBtn) {
    safetyGoingOutEndBtn.addEventListener('click', endGoingOut);
  }
  if (safetyGoingOutForceTimeoutBtn) {
    safetyGoingOutForceTimeoutBtn.addEventListener('click', triggerGoingOutTimeout);
  }

  // C. HOME VISIT SAFETY SHIELD (SCAM VERIFIER)
  const doorwayScamSelect = document.getElementById('doorwayScamSelect');
  const doorwayScamAdvice = document.getElementById('doorwayScamAdvice');
  const scanWorkerBadgeBtn = document.getElementById('scanWorkerBadgeBtn');
  const mockScannerOverlay = document.getElementById('mockScannerOverlay');
  const mockScannerResult = document.getElementById('mockScannerResult');

  const scamAdvices = {
    gas: "Government Gas LPG inspectors never ask for cash at the door. If a worker demands payment or claims your hose is broken, ask them to wait outside, latch the door, and call your gas provider directly.",
    electric: "Electricity shutdown scam: Scammers threaten to cut your power within 1 hour unless you make an immediate transfer or scan a QR code. Utility workers never collect doorstep cash. Call the official board to verify.",
    biometric: "Biometric Pension Verification: Never place your thumb on a mobile verification device brought to your door by a stranger claiming to represent a pension board. These can copy prints and empty bank accounts.",
    fan: "Fake Neighbor Helper: Scammers claim they were sent by the landlord, society, or neighbor to fix a fan or ceiling leak. Never let them in unless you have called your neighbor directly to confirm."
  };

  function updateScamAdvice() {
    if (doorwayScamSelect && doorwayScamAdvice) {
      const scamType = doorwayScamSelect.value;
      doorwayScamAdvice.textContent = scamAdvices[scamType] || "";
    }
  }

  if (doorwayScamSelect) {
    doorwayScamSelect.addEventListener('change', updateScamAdvice);
    updateScamAdvice(); // Initial render
  }

  let scannerMockState = 0; // Toggle between threat and verified

  if (scanWorkerBadgeBtn) {
    scanWorkerBadgeBtn.addEventListener('click', () => {
      scanWorkerBadgeBtn.classList.add('d-none');
      if (mockScannerOverlay) mockScannerOverlay.classList.remove('d-none');
      if (mockScannerResult) mockScannerResult.classList.add('d-none');
      
      setTimeout(() => {
        if (mockScannerOverlay) mockScannerOverlay.classList.add('d-none');
        scanWorkerBadgeBtn.classList.remove('d-none');
        if (mockScannerResult) {
          mockScannerResult.classList.remove('d-none');
          if (scannerMockState === 0) {
            // Option 1: Unverified Threat
            mockScannerResult.innerHTML = `⚠️ Alert: ID Badge Unverified!<br><span style="font-size:var(--font-xs); font-weight:normal;">Badge number #9822 does not match any active utility roster. Call building security or a neighbor immediately!</span>`;
            mockScannerResult.style.backgroundColor = "var(--color-red-soft, #fef2f2)";
            mockScannerResult.style.borderColor = "var(--color-red, #dc2626)";
            mockScannerResult.style.color = "var(--color-red, #dc2626)";
            
            speakText("Warning: ID badge could not be verified. Do not open the door. Contact building security immediately.");
            logFamilyChatSystem(`🚨 Safety Warning: ${getActiveSeniorName()} scanned an unverified doorstep worker ID badge (#9822).`);
            scannerMockState = 1; // Toggle
          } else {
            // Option 2: Verified Neighbor
            mockScannerResult.innerHTML = `🟢 Verified Helper Aligned<br><span style="font-size:var(--font-xs); font-weight:normal;">Ravi (Pharmacist) confirmed as verified partner. Safe to interact.</span>`;
            mockScannerResult.style.backgroundColor = "var(--color-primary-soft, #f0fdfa)";
            mockScannerResult.style.borderColor = "var(--color-primary, #0d9488)";
            mockScannerResult.style.color = "var(--color-primary-dark, #0f766e)";
            
            speakText("Badge verified. This is Ravi, your registered pharmacist.");
            logFamilyChatSystem(`Safety Check: ${getActiveSeniorName()} verified doorstep visit by Ravi (Pharmacist).`);
            scannerMockState = 0; // Toggle
          }
        }
      }, 2500);
    });
  }

  // D. BILL PAYMENT GUARDIAN
  const billsListLedger = document.getElementById('billsListLedger');
  const dashboardBillAlertCard = document.getElementById('dashboardBillAlertCard');
  const dashboardBillAlertText = document.getElementById('dashboardBillAlertText');
  const dashboardPayBillBtn = document.getElementById('dashboardPayBillBtn');
  const dashboardSnoozeBillBtn = document.getElementById('dashboardSnoozeBillBtn');
  
  const billNameInput = document.getElementById('billNameInput');
  const billAmountInput = document.getElementById('billAmountInput');
  const billDueDateInput = document.getElementById('billDueDateInput');
  const addCustomBillBtn = document.getElementById('addCustomBillBtn');

  // Default recurring bills array
  let recurringBills = JSON.parse(localStorage.getItem('recurring_bills')) || [
    { id: 'elec', name: 'Electricity Bill', amount: 2450, dueDate: '2026-06-14', status: 'Due' },
    { id: 'gas', name: 'Gas Cylinder Booking', amount: 1050, dueDate: '2026-06-16', status: 'Due' },
    { id: 'water', name: 'Water Bill', amount: 450, dueDate: '2026-06-25', status: 'Paid' }
  ];

  function renderBillsUI() {
    if (!billsListLedger) return;
    
    // Sort by due date
    recurringBills.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    
    billsListLedger.innerHTML = "";
    
    let dueBillAlert = null;
    const today = new Date('2026-06-11'); // Anchored mock current date
    
    recurringBills.forEach(bill => {
      const billDate = new Date(bill.dueDate);
      const diffTime = billDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      let statusHtml = "";
      if (bill.status === 'Paid') {
        statusHtml = `<span style="background:var(--color-primary-soft); color:var(--color-primary-dark); font-size:var(--font-xs); font-weight:700; padding:2px 8px; border-radius:12px;">Paid ✓</span>`;
      } else {
        if (diffDays <= 3) {
          statusHtml = `<span style="background:var(--color-red-soft); color:var(--color-red); font-size:var(--font-xs); font-weight:700; padding:2px 8px; border-radius:12px;">Due in ${diffDays} Days!</span>`;
          if (!dueBillAlert) dueBillAlert = bill;
        } else {
          statusHtml = `<span style="background:var(--color-orange-soft); color:var(--color-orange); font-size:var(--font-xs); font-weight:700; padding:2px 8px; border-radius:12px;">Due in ${diffDays} Days</span>`;
        }
      }
      
      const billNode = document.createElement('div');
      billNode.className = 'audit-item';
      billNode.style.display = 'flex';
      billNode.style.alignItems = 'center';
      billNode.style.justifyContent = 'space-between';
      billNode.style.padding = '8px 10px';
      billNode.style.marginBottom = '6px';
      
      billNode.innerHTML = `
        <div>
          <strong style="font-size:var(--font-sm);">${bill.name} (₹${bill.amount})</strong>
          <span style="display:block; font-size:var(--font-xs); color:var(--text-muted);">Due: ${bill.dueDate}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          ${statusHtml}
          ${bill.status === 'Due' ? `<button type="button" class="primary-btn-mini pay-bill-action-btn" data-id="${bill.id}" style="padding:4px 8px; font-size:var(--font-xs); min-height:30px;">Mark Paid</button>` : ''}
        </div>
      `;
      billsListLedger.appendChild(billNode);
    });

    // Handle Today's Hub alert banner
    if (dueBillAlert && localStorage.getItem('snooze_bill_' + dueBillAlert.id) !== 'true') {
      if (dashboardBillAlertCard) {
        dashboardBillAlertCard.classList.remove('d-none');
        if (dashboardBillAlertText) {
          const billDate = new Date(dueBillAlert.dueDate);
          const diffDays = Math.ceil((billDate - today) / (1000 * 60 * 60 * 24));
          dashboardBillAlertText.textContent = `${dueBillAlert.name} of ₹${dueBillAlert.amount} is due in ${diffDays} days (${dueBillAlert.dueDate}).`;
        }
      }
      // Bind actions in dashboard banner
      if (dashboardPayBillBtn) {
        dashboardPayBillBtn.onclick = () => {
          markBillAsPaid(dueBillAlert.id);
        };
      }
      if (dashboardSnoozeBillBtn) {
        dashboardSnoozeBillBtn.onclick = () => {
          localStorage.setItem('snooze_bill_' + dueBillAlert.id, 'true');
          renderBillsUI();
        };
      }
    } else {
      if (dashboardBillAlertCard) dashboardBillAlertCard.classList.add('d-none');
    }
    
    // Save state
    localStorage.setItem('recurring_bills', JSON.stringify(recurringBills));
  }

  function markBillAsPaid(id) {
    const bill = recurringBills.find(b => b.id === id);
    if (bill) {
      bill.status = 'Paid';
      speakText(`${bill.name} marked as paid.`);
      logFamilyChatSystem(`${getActiveSeniorName()} paid recurring bill: ${bill.name} (₹${bill.amount}).`);
      renderBillsUI();
    }
  }

  // Delegation click handler
  if (billsListLedger) {
    billsListLedger.addEventListener('click', (e) => {
      if (e.target.classList.contains('pay-bill-action-btn')) {
        const id = e.target.getAttribute('data-id');
        markBillAsPaid(id);
      }
    });
  }

  if (addCustomBillBtn) {
    addCustomBillBtn.addEventListener('click', () => {
      const name = billNameInput.value.trim();
      const amount = parseInt(billAmountInput.value.trim());
      const date = billDueDateInput.value;
      
      if (!name || isNaN(amount) || !date) {
        alert("Please fill in all bill fields.");
        return;
      }
      
      const newBill = {
        id: 'bill_' + Date.now(),
        name: name,
        amount: amount,
        dueDate: date,
        status: 'Due'
      };
      
      recurringBills.push(newBill);
      billNameInput.value = "";
      billAmountInput.value = "";
      billDueDateInput.value = "";
      
      speakText(`New bill reminder added for ${name}.`);
      logFamilyChatSystem(`Scheduled custom bill: ${name} (₹${amount}) due on ${date}.`);
      renderBillsUI();
    });
  }

  // E. FIXED DEPOSIT TRACKER
  const fdListLedger = document.getElementById('fdListLedger');
  const fdBankInput = document.getElementById('fdBankInput');
  const fdAmountInput = document.getElementById('fdAmountInput');
  const fdInterestInput = document.getElementById('fdInterestInput');
  const fdMaturityInput = document.getElementById('fdMaturityInput');
  const addCustomFdBtn = document.getElementById('addCustomFdBtn');

  let fixedDeposits = JSON.parse(localStorage.getItem('fixed_deposits')) || [
    { id: 'fd_sbi', bank: 'SBI', principal: 200000, interestRate: 7.1, maturityDate: '2026-06-15', status: 'Due' },
    { id: 'fd_hdfc', bank: 'HDFC Bank', principal: 500000, interestRate: 7.25, maturityDate: '2026-11-10', status: 'Active' },
    { id: 'fd_icici', bank: 'ICICI Bank', principal: 150000, interestRate: 7.0, maturityDate: '2027-01-20', status: 'Active' }
  ];

  function renderFDsUI() {
    if (!fdListLedger) return;
    
    fixedDeposits.sort((a, b) => new Date(a.maturityDate) - new Date(b.maturityDate));
    
    fdListLedger.innerHTML = "";
    
    fixedDeposits.forEach(fd => {
      let statusHtml = "";
      if (fd.status === 'Active') {
        statusHtml = `<span style="background:var(--color-primary-soft); color:var(--color-primary-dark); font-size:var(--font-xs); font-weight:700; padding:2px 8px; border-radius:12px;">Active</span>`;
      } else {
        statusHtml = `<span style="background:var(--color-red-soft); color:var(--color-red); font-size:var(--font-xs); font-weight:700; padding:2px 8px; border-radius:12px; animation: pulse 1.5s infinite;">Matures Soon!</span>`;
      }
      
      const fdNode = document.createElement('div');
      fdNode.className = 'audit-item';
      fdNode.style.display = 'flex';
      fdNode.style.alignItems = 'center';
      fdNode.style.justifyContent = 'space-between';
      fdNode.style.padding = '8px 10px';
      fdNode.style.marginBottom = '6px';
      
      fdNode.innerHTML = `
        <div>
          <strong style="font-size:var(--font-sm);">${fd.bank} FD (₹${(fd.principal/100000).toFixed(1)} Lakhs)</strong>
          <span style="display:block; font-size:var(--font-xs); color:var(--text-muted);">${fd.interestRate}% Int · Matures: ${fd.maturityDate}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          ${statusHtml}
          ${fd.status === 'Due' ? `
            <button type="button" class="primary-btn-mini fd-reinvest-btn" data-id="${fd.id}" style="padding:4px 8px; font-size:var(--font-xs); min-height:30px;">Reinvest</button>
            <button type="button" class="secondary-action-btn fd-withdraw-btn" data-id="${fd.id}" style="padding:4px 8px; font-size:var(--font-xs); min-height:30px; border-color:var(--border-strong);">Withdraw</button>
          ` : ''}
        </div>
      `;
      fdListLedger.appendChild(fdNode);
    });

    localStorage.setItem('fixed_deposits', JSON.stringify(fixedDeposits));
  }

  function reinvestFD(id) {
    const fd = fixedDeposits.find(f => f.id === id);
    if (fd) {
      // Reinvest adds 1 year to maturity
      const currentMaturity = new Date(fd.maturityDate);
      currentMaturity.setFullYear(currentMaturity.getFullYear() + 1);
      
      fd.maturityDate = currentMaturity.toISOString().split('T')[0];
      fd.status = 'Active';
      
      speakText(`Your Fixed Deposit of ₹${fd.principal} at ${fd.bank} has been reinvested until ${fd.maturityDate}.`);
      logFamilyChatSystem(`${getActiveSeniorName()} reinvested Fixed Deposit: ${fd.bank} (₹${fd.principal}) for another year.`);
      renderFDsUI();
    }
  }

  function withdrawFD(id) {
    const fd = fixedDeposits.find(f => f.id === id);
    if (fd) {
      fd.status = 'Active'; // Reset state or withdraw
      const caregiverName = localStorage.getItem('caregiver_name') || "your family";
      speakText(`Fixed Deposit of ₹${fd.principal} marked for withdrawal. ${caregiverName} has been notified.`);
      logFamilyChatSystem(`${getActiveSeniorName()} marked Fixed Deposit at ${fd.bank} (₹${fd.principal}) for withdrawal to savings account.`);
      fixedDeposits = fixedDeposits.filter(f => f.id !== id);
      renderFDsUI();
    }
  }

  if (fdListLedger) {
    fdListLedger.addEventListener('click', (e) => {
      if (e.target.classList.contains('fd-reinvest-btn')) {
        reinvestFD(e.target.getAttribute('data-id'));
      } else if (e.target.classList.contains('fd-withdraw-btn')) {
        withdrawFD(e.target.getAttribute('data-id'));
      }
    });
  }

  if (addCustomFdBtn) {
    addCustomFdBtn.addEventListener('click', () => {
      const bank = fdBankInput.value.trim();
      const principal = parseInt(fdAmountInput.value.trim());
      const rate = parseFloat(fdInterestInput.value.trim());
      const maturity = fdMaturityInput.value;
      
      if (!bank || isNaN(principal) || isNaN(rate) || !maturity) {
        alert("Please fill in all Fixed Deposit fields.");
        return;
      }
      
      const newFd = {
        id: 'fd_' + Date.now(),
        bank: bank,
        principal: principal,
        interestRate: rate,
        maturityDate: maturity,
        status: 'Active'
      };
      
      fixedDeposits.push(newFd);
      fdBankInput.value = "";
      fdAmountInput.value = "";
      fdInterestInput.value = "";
      fdMaturityInput.value = "";
      
      speakText(`New Fixed Deposit tracked for ${bank}.`);
      logFamilyChatSystem(`Started tracking FD: ${bank} (₹${principal}) at ${rate}% maturing on ${maturity}.`);
      renderFDsUI();
    });
  }

  // F. SENSITIVE AFTER-ME VAULT (PASSCODE UNLOCK)
  const eolPasscode = document.getElementById('eolPasscode');
  const openEolVaultBtn = document.getElementById('openEolVaultBtn');
  const eolErrorMsg = document.getElementById('eolErrorMsg');
  const eolLockScreenState = document.getElementById('eolLockScreenState');
  const eolUnlockedState = document.getElementById('eolUnlockedState');
  const eolVaultHeaderIcon = document.getElementById('eolVaultHeaderIcon');

  const eolWillLoc = document.getElementById('eolWillLoc');
  const eolLockerKeys = document.getElementById('eolLockerKeys');
  const eolBankAccounts = document.getElementById('eolBankAccounts');
  const eolSharePermission = document.getElementById('eolSharePermission');
  const saveEolDetailsBtn = document.getElementById('saveEolDetailsBtn');
  const lockEolVaultBtn = document.getElementById('lockEolVaultBtn');

  if (openEolVaultBtn) {
    openEolVaultBtn.addEventListener('click', () => {
      const code = eolPasscode ? eolPasscode.value.trim() : "";
      if (code === "1234") {
        if (eolLockScreenState) eolLockScreenState.classList.add('d-none');
        if (eolUnlockedState) eolUnlockedState.classList.remove('d-none');
        if (eolErrorMsg) eolErrorMsg.classList.add('d-none');
        if (eolVaultHeaderIcon) eolVaultHeaderIcon.style.color = "var(--color-primary, #0d9488)";
        
        // Load details
        if (eolWillLoc) eolWillLoc.value = localStorage.getItem('eol_will') || "In the bedroom wooden cabinet, locker drawer.";
        if (eolLockerKeys) eolLockerKeys.value = localStorage.getItem('eol_keys') || "Locker 302 key inside gold vanity jewelry box.";
        if (eolBankAccounts) eolBankAccounts.value = localStorage.getItem('eol_banks') || "SBI A/c: 2083928192 - Nominee: Meera\nHDFC A/c: 90283921 - Nominee: Arun";
        if (eolSharePermission) eolSharePermission.checked = localStorage.getItem('eol_share') !== 'false';
        
        speakText("After-me organizer unlocked. Your sensitive records are decrypted.");
        logFamilyChatSystem("Secure Vault Action: Sensitive After-Me Organizer unlocked by Lakshmi ji.");
      } else {
        if (eolErrorMsg) {
          eolErrorMsg.classList.remove('d-none');
          eolErrorMsg.textContent = "Incorrect passcode. Access Denied.";
        }
        speakText("Incorrect passcode. Access Denied.");
      }
    });
  }

  if (saveEolDetailsBtn) {
    saveEolDetailsBtn.addEventListener('click', () => {
      localStorage.setItem('eol_will', eolWillLoc ? eolWillLoc.value : "");
      localStorage.setItem('eol_keys', eolLockerKeys ? eolLockerKeys.value : "");
      localStorage.setItem('eol_banks', eolBankAccounts ? eolBankAccounts.value : "");
      localStorage.setItem('eol_share', eolSharePermission ? eolSharePermission.checked.toString() : "true");
      
      speakText("Sensitive after-me organizer details locked and saved.");
      alert("After-Me Planner details saved securely!");
      
      // Auto Lock after save
      if (eolLockScreenState) eolLockScreenState.classList.remove('d-none');
      if (eolUnlockedState) eolUnlockedState.classList.add('d-none');
      if (eolPasscode) eolPasscode.value = "";
      if (eolVaultHeaderIcon) eolVaultHeaderIcon.style.color = "var(--color-red, #dc2626)";
    });
  }

  if (lockEolVaultBtn) {
    lockEolVaultBtn.addEventListener('click', () => {
      if (eolLockScreenState) eolLockScreenState.classList.remove('d-none');
      if (eolUnlockedState) eolUnlockedState.classList.add('d-none');
      if (eolPasscode) eolPasscode.value = "";
      if (eolVaultHeaderIcon) eolVaultHeaderIcon.style.color = "var(--color-red, #dc2626)";
      speakText("Sensitive vault locked.");
    });
  }

  // G. PROPERTY DOCUMENT ALERTS
  const propertyAlertsLedger = document.getElementById('propertyAlertsLedger');

  function renderPropertyAlertsUI() {
    if (!propertyAlertsLedger) return;
    
    // Hardcoded tax and insurance dates
    const items = [
      { name: "House Insurance Policy", dueDate: "August 15", daysLeft: 65, remarks: "Arun receives notification automatically 30 days prior." },
      { name: "Annual Property Tax (Hyderabad)", dueDate: "September 30", daysLeft: 111, remarks: "Proactive reminder scheduled." }
    ];
    
    propertyAlertsLedger.innerHTML = "";
    items.forEach(item => {
      const node = document.createElement('div');
      node.className = 'audit-item';
      node.style.display = 'flex';
      node.style.flexDirection = 'column';
      node.style.padding = '8px 10px';
      node.style.marginBottom = '6px';
      node.style.borderLeft = '4px solid var(--color-teal)';
      node.style.paddingLeft = '10px';
      
      node.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:var(--font-sm);">${item.name}</strong>
          <span style="font-size:var(--font-xs); font-weight:700; color:var(--color-teal);">${item.dueDate} (${item.daysLeft} Days Left)</span>
        </div>
        <span style="font-size:var(--font-xs); color:var(--text-muted); margin-top:2px;">${item.remarks}</span>
      `;
      propertyAlertsLedger.appendChild(node);
    });
  }

  // H. WEARABLE SLEEP SYNC SIMULATOR
  const syncWearableBtn = document.getElementById('syncWearableBtn');
  const wearableStatusBadge = document.getElementById('wearableStatusBadge');
  const simulateBadSleepSeriesBtn = document.getElementById('simulateBadSleepSeriesBtn');

  if (syncWearableBtn) {
    syncWearableBtn.addEventListener('click', () => {
      if (syncWearableBtn.textContent.includes("Completed")) return;
      
      syncWearableBtn.disabled = true;
      if (wearableStatusBadge) {
        wearableStatusBadge.textContent = "Connecting...";
        wearableStatusBadge.style.color = "var(--color-gold, #d97706)";
      }
      
      setTimeout(() => {
        syncWearableBtn.disabled = false;
        syncWearableBtn.innerHTML = "<span>🔄</span> Sync Completed";
        if (wearableStatusBadge) {
          const device = getActiveCountry() === 'Japan' ? "Galaxy Watch 6" : "Fitbit Charge 6";
          wearableStatusBadge.textContent = `Connected (${device})`;
          wearableStatusBadge.style.color = "var(--color-primary, #0d9488)";
        }
        if (sleepStatusText) {
          sleepStatusText.textContent = "Yesterday's Sleep: 7h 45m (Good - Wearable Sync)";
        }
        if (simulateBadSleepSeriesBtn) {
          simulateBadSleepSeriesBtn.classList.remove('d-none');
        }
        
        speakText("Wearable device synced successfully. Yesterday you slept seven hours and forty-five minutes.");
        logFamilyChatSystem(`Wearable Sync: Verified Fitbit connection for ${getActiveSeniorName()}. Yesterday sleep synced: 7h 45m.`);
      }, 2000);
    });
  }

  if (simulateBadSleepSeriesBtn) {
    simulateBadSleepSeriesBtn.addEventListener('click', () => {
      const caregiverName = localStorage.getItem('caregiver_name') || "your family";
      speakText(`${getActiveSeniorName()}, your wearable reports restless, short sleep for three consecutive nights. I have quietly notified ${caregiverName} so they can check in on you.`);
      logFamilyChatSystem(`🚨 Wearable Vital Alert: Sleep tracker detected restless sleep (<5 hours) for 3 consecutive nights for ${getActiveSeniorName()}.`);
      
      setTimeout(() => {
        logFamilyChatResponse("Meera", "Hi Mom, the app alerted me that your watch detected poor sleep 3 nights in a row. Are you feeling okay? I will call you tonight.");
      }, 1200);
    });
  }

  // --- PHASE 3 FEATURES INTEGRATION ---
  
  // 1. Daily Interest Feed
  const morningJoyFeedCard = document.getElementById('morningJoyFeedCard');
  const closeJoyFeedBtn = document.getElementById('closeJoyFeedBtn');
  const startMyDayBtn = document.getElementById('startMyDayBtn');
  const homeWidgetsGrid = document.getElementById('homeWidgetsGrid');
  
  function initJoyFeed() {
    if (!morningJoyFeedCard || !homeWidgetsGrid) return;
    const closedDate = localStorage.getItem('joy_feed_closed_date');
    const todayStr = new Date().toDateString();
    
    if (closedDate === todayStr) {
      morningJoyFeedCard.classList.add('d-none');
      homeWidgetsGrid.classList.remove('d-none');
    } else {
      morningJoyFeedCard.classList.remove('d-none');
      homeWidgetsGrid.classList.add('d-none');
    }
  }
  
  function closeJoyFeed() {
    if (morningJoyFeedCard && homeWidgetsGrid) {
      morningJoyFeedCard.classList.add('d-none');
      homeWidgetsGrid.classList.remove('d-none');
      localStorage.setItem('joy_feed_closed_date', new Date().toDateString());
      speakText("Starting your day. Showing your health reminders and schedule.");
    }
  }
  
  if (closeJoyFeedBtn) {
    closeJoyFeedBtn.addEventListener('click', closeJoyFeed);
  }
  if (startMyDayBtn) {
    startMyDayBtn.addEventListener('click', closeJoyFeed);
  }
  
  // 2. Connection Reminders & Nudges
  const dialGrandsonBtn = document.querySelector('.dial-grandson-btn');
  const dialFriendBtn = document.querySelector('.dial-friend-btn');
  
  if (dialGrandsonBtn) {
    dialGrandsonBtn.addEventListener('click', () => {
      speakText("Calling your grandson Manoj. Wishing him best of luck for board exams.");
      logFamilyChatSystem(`📞 Call Dialed: ${getActiveSeniorName()} called grandson Manoj to wish him luck for Class 12 board exams starting June 23.`);
      dialGrandsonBtn.textContent = "Called Manoj ✓";
      dialGrandsonBtn.disabled = true;
    });
  }
  
  if (dialFriendBtn) {
    dialFriendBtn.addEventListener('click', () => {
      speakText("Calling your college friend Saraswathi.");
      logFamilyChatSystem(`📞 Call Dialed: ${getActiveSeniorName()} initiated a reconnection call to college friend Saraswathi (not spoken in 4 years).`);
      dialFriendBtn.textContent = "Called Saraswathi ✓";
      dialFriendBtn.disabled = true;
    });
  }
  
  // 3. Ritual Safety Checklist
  const ritualTabMorning = document.getElementById('ritualTabMorning');
  const ritualTabEvening = document.getElementById('ritualTabEvening');
  const morningRitualsList = document.getElementById('morningRitualsList');
  const eveningRitualsList = document.getElementById('eveningRitualsList');
  
  const ritualCheckboxes = [
    'ritual_geyser', 'ritual_backdoor', 'ritual_umbrella',
    'ritual_maingate', 'ritual_kitchenwindow', 'ritual_torch'
  ];
  
  if (ritualTabMorning && ritualTabEvening) {
    ritualTabMorning.addEventListener('click', () => {
      ritualTabMorning.classList.add('active');
      ritualTabEvening.classList.remove('active');
      if (morningRitualsList) morningRitualsList.classList.remove('d-none');
      if (eveningRitualsList) eveningRitualsList.classList.add('d-none');
    });
    
    ritualTabEvening.addEventListener('click', () => {
      ritualTabEvening.classList.add('active');
      ritualTabMorning.classList.remove('active');
      if (eveningRitualsList) eveningRitualsList.classList.remove('d-none');
      if (morningRitualsList) morningRitualsList.classList.add('d-none');
    });
  }
  
  function loadRitualsState() {
    ritualCheckboxes.forEach(id => {
      const cb = document.getElementById(id);
      if (cb) {
        cb.checked = localStorage.getItem('state_' + id) === 'true';
        cb.onchange = () => {
          const labelSpan = cb.parentNode.querySelector('span');
          const name = labelSpan ? labelSpan.textContent : "Ritual task";
          if (cb.checked) {
            cb.checked = false; // Uncheck temporarily
            let promptMsg = `Take a deep breath and confirm: did you physically complete the action for "${name}"?`;
            if (id === 'ritual_geyser') promptMsg = "Did you physically click the bathroom geyser switch to the OFF position?";
            else if (id === 'ritual_backdoor') promptMsg = "Did you hear the click of the balcony lock and verify it is locked?";
            else if (id === 'ritual_maingate') promptMsg = "Did you slide the latch and lock the main entrance gate?";
            else if (id === 'ritual_kitchenwindow') promptMsg = "Did you physically verify the kitchen window latch is secured?";
            
            triggerCertaintyCheck(promptMsg, () => {
              cb.checked = true;
              localStorage.setItem('state_' + id, 'true');
              speakText(`${name} completed.`);
              createCertaintyReceipt(name, `Verified: ${promptMsg.replace("Take a deep breath and confirm: ", "").replace("Did you ", "Physically verified: ")}`);
              checkRitualCompletion();
            });
          } else {
            localStorage.setItem('state_' + id, 'false');
            speakText(`${name} unchecked.`);
            checkRitualCompletion();
          }
        };
      }
    });
    
    renderCustomRituals();
    updateStreakUI();
    checkRitualCompletion();
  }
  
  // 4. DND Prayer Hours
  const dndStart = document.getElementById('dndStart');
  const dndEnd = document.getElementById('dndEnd');
  const dndEnabled = document.getElementById('dndEnabled');
  const dndStatusIndicator = document.getElementById('dndStatusIndicator');
  
  function isDndActiveNow() {
    if (!dndEnabled || !dndEnabled.checked) return false;
    
    const dndStartVal = dndStart ? dndStart.value : '06:00';
    const dndEndVal = dndEnd ? dndEnd.value : '07:00';
    
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const startParts = dndStartVal.split(':');
    const startMinutes = parseInt(startParts[0] || '6') * 60 + parseInt(startParts[1] || '0');
    
    const endParts = dndEndVal.split(':');
    const endMinutes = parseInt(endParts[0] || '7') * 60 + parseInt(endParts[1] || '0');
    
    if (startMinutes <= endMinutes) {
      return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
    } else {
      return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
    }
  }
  
  function updateDndBanner() {
    const homeView = document.getElementById('home-view');
    if (!homeView) return;
    
    let banner = document.getElementById('dndActiveBanner');
    const active = isDndActiveNow();
    
    if (active) {
      if (!banner) {
        banner = document.createElement('div');
        banner.id = 'dndActiveBanner';
        banner.style.background = 'linear-gradient(135deg, #7c3aed, #4c1d95)';
        banner.style.color = 'white';
        banner.style.padding = '12px 20px';
        banner.style.borderRadius = '12px';
        banner.style.marginBottom = '20px';
        banner.style.display = 'flex';
        banner.style.alignItems = 'center';
        banner.style.gap = '12px';
        banner.style.boxShadow = 'var(--shadow-md)';
        banner.innerHTML = `
          <span style="font-size: 1.5rem;">🕉️</span>
          <div>
            <strong style="display: block; font-size: var(--font-sm);">Morning Prayers In Progress</strong>
            <span style="font-size: var(--font-xs); opacity: 0.9;">Notifications Silenced (DND Active)</span>
          </div>
        `;
        const weatherBanner = document.getElementById('weatherAlertBanner');
        if (weatherBanner && !weatherBanner.classList.contains('d-none')) {
          weatherBanner.parentNode.insertBefore(banner, weatherBanner.nextSibling);
        } else {
          homeView.insertBefore(banner, homeView.firstChild);
        }
      }
    } else {
      if (banner) {
        banner.remove();
      }
    }
    
    if (dndStatusIndicator) {
      if (active) {
        dndStatusIndicator.innerHTML = `<span style="color: var(--color-purple); font-weight:700;">🟢 DND Active (Prayers In Progress)</span>`;
      } else {
        dndStatusIndicator.innerHTML = `<span style="color: var(--text-muted);">DND Status: Inactive</span>`;
      }
    }
  }
  
  // Save DND settings and bind events
  if (dndStart) {
    dndStart.value = localStorage.getItem('dnd_start') || '06:00';
    dndStart.addEventListener('change', () => {
      localStorage.setItem('dnd_start', dndStart.value);
      updateDndBanner();
    });
  }
  if (dndEnd) {
    dndEnd.value = localStorage.getItem('dnd_end') || '07:00';
    dndEnd.addEventListener('change', () => {
      localStorage.setItem('dnd_end', dndEnd.value);
      updateDndBanner();
    });
  }
  if (dndEnabled) {
    dndEnabled.checked = localStorage.getItem('dnd_enabled') !== 'false';
    dndEnabled.addEventListener('change', () => {
      localStorage.setItem('dnd_enabled', dndEnabled.checked.toString());
      updateDndBanner();
    });
  }
  
  // Wrap speakText to mute during DND hours
  if (typeof speakText === 'function') {
    const originalSpeakText = speakText;
    speakText = function(text, context = 'advice') {
      if (isDndActiveNow() && context !== 'emergency' && !text.includes("SOS") && !text.includes("Emergency") && !text.includes("Hospitals") && !text.includes("🚨")) {
        console.log("Speech silenced during DND:", text);
        return;
      }
      originalSpeakText(text, context);
    };
  }
  
  // Update DND banner check every 15s
  setInterval(updateDndBanner, 15000);
  
  // 5. Private Diary & Gratitude Log
  const privateDiaryInput = document.getElementById('privateDiaryInput');
  const savePrivateDiaryBtn = document.getElementById('savePrivateDiaryBtn');
  const privateDiaryLogs = document.getElementById('privateDiaryLogs');
  
  let diaryLogs = JSON.parse(localStorage.getItem('private_diary_logs') || '[]');
  
  function renderDiaryLogs() {
    if (!privateDiaryLogs) return;
    privateDiaryLogs.innerHTML = "";
    if (diaryLogs.length === 0) {
      privateDiaryLogs.innerHTML = `<span style="color:var(--text-muted); font-style:italic;">No entries yet. Write your thoughts above.</span>`;
      return;
    }
    const displayLogs = [...diaryLogs].reverse().slice(0, 5);
    displayLogs.forEach(entry => {
      const dateStr = new Date(entry.date).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      const logItem = document.createElement('div');
      logItem.style.borderBottom = '1px dashed var(--border-color)';
      logItem.style.padding = '6px 0';
      logItem.style.display = 'flex';
      logItem.style.justifyContent = 'space-between';
      logItem.style.alignItems = 'flex-start';
      logItem.innerHTML = `
        <div style="flex:1;">
          <span style="display:block; font-size:var(--font-xs); font-weight:700; color:var(--color-red);">${dateStr}</span>
          <span style="font-size:var(--font-xs); color:var(--text-main);">${entry.text}</span>
        </div>
        <button type="button" class="delete-diary-entry-btn" data-id="${entry.id}" style="background:none; border:none; color:var(--color-red); font-size:var(--font-xs); cursor:pointer; padding:2px;">🗑️</button>
      `;
      privateDiaryLogs.appendChild(logItem);
    });
  }
  
  if (savePrivateDiaryBtn) {
    savePrivateDiaryBtn.addEventListener('click', () => {
      const text = privateDiaryInput.value.trim();
      if (!text) return;
      
      const entry = {
        id: 'diary_' + Date.now(),
        text: text,
        date: Date.now()
      };
      diaryLogs.push(entry);
      localStorage.setItem('private_diary_logs', JSON.stringify(diaryLogs));
      privateDiaryInput.value = "";
      
      speakText("Diary entry saved privately.");
      renderDiaryLogs();
    });
  }
  
  if (privateDiaryLogs) {
    privateDiaryLogs.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-diary-entry-btn')) {
        const id = e.target.getAttribute('data-id');
        diaryLogs = diaryLogs.filter(entry => entry.id !== id);
        localStorage.setItem('private_diary_logs', JSON.stringify(diaryLogs));
        renderDiaryLogs();
      }
    });
  }
  
  const customGratitudeInput = document.getElementById('customGratitudeInput');
  const addGratitudeBtn = document.getElementById('addGratitudeBtn');
  const gratitudeLogHistory = document.getElementById('gratitudeLogHistory');
  const gratitudeQuickBtns = document.querySelectorAll('.gratitude-quick-btn');
  
  let gratitudeLogs = JSON.parse(localStorage.getItem('gratitude_logs') || '[]');
  
  function renderGratitudeLogs() {
    if (!gratitudeLogHistory) return;
    gratitudeLogHistory.innerHTML = "";
    if (gratitudeLogs.length === 0) {
      gratitudeLogHistory.innerHTML = `<span style="color:var(--text-muted); font-style:italic;">No moments recorded today yet.</span>`;
      return;
    }
    const displayLogs = [...gratitudeLogs].reverse().slice(0, 5);
    displayLogs.forEach(entry => {
      const dateStr = new Date(entry.date).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      const logItem = document.createElement('div');
      logItem.style.borderBottom = '1px dashed var(--border-color)';
      logItem.style.padding = '6px 0';
      logItem.style.display = 'flex';
      logItem.style.justifyContent = 'space-between';
      logItem.style.alignItems = 'flex-start';
      logItem.innerHTML = `
        <div style="flex:1;">
          <span style="display:block; font-size:var(--font-xs); font-weight:700; color:var(--color-gold);">${dateStr}</span>
          <span style="font-size:var(--font-xs); color:var(--text-main); font-weight:500;">🌸 ${entry.moment}</span>
        </div>
        <button type="button" class="delete-gratitude-entry-btn" data-id="${entry.id}" style="background:none; border:none; color:var(--color-gold); font-size:var(--font-xs); cursor:pointer; padding:2px;">🗑️</button>
      `;
      gratitudeLogHistory.appendChild(logItem);
    });
  }
  
  function saveGratitudeMoment(momentText) {
    const entry = {
      id: 'gratitude_' + Date.now(),
      moment: momentText,
      date: Date.now()
    };
    gratitudeLogs.push(entry);
    localStorage.setItem('gratitude_logs', JSON.stringify(gratitudeLogs));
    
    speakText("Joyful moment logged: " + momentText);
    logFamilyChatSystem(`🌸 Gratitude Shared: ${getActiveSeniorName()} logged a joyful moment: "${momentText}"`);
    renderGratitudeLogs();
  }
  
  gratitudeQuickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const moment = btn.getAttribute('data-moment');
      saveGratitudeMoment(moment);
    });
  });
  
  if (addGratitudeBtn) {
    addGratitudeBtn.addEventListener('click', () => {
      const momentText = customGratitudeInput.value.trim();
      if (!momentText) return;
      saveGratitudeMoment(momentText);
      customGratitudeInput.value = "";
    });
  }
  
  if (gratitudeLogHistory) {
    gratitudeLogHistory.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-gratitude-entry-btn')) {
        const id = e.target.getAttribute('data-id');
        gratitudeLogs = gratitudeLogs.filter(entry => entry.id !== id);
        localStorage.setItem('gratitude_logs', JSON.stringify(gratitudeLogs));
        renderGratitudeLogs();
      }
    });
  }
  
  // 6. Achievements & Pride Wall
  const achievementsGrid = document.getElementById('achievementsGrid');
  const achievementTitleInput = document.getElementById('achievementTitleInput');
  const achievementYearInput = document.getElementById('achievementYearInput');
  const addAchievementBtn = document.getElementById('addAchievementBtn');
  
  const defaultAchievements = [
    { id: 'ach_1', title: 'Knows 3 Languages (Telugu, English, Hindi)', year: 'Lifetime' },
    { id: 'ach_2', title: 'Raised 2 wonderful children (Meera & Arun)', year: 'Legacy' },
    { id: 'ach_3', title: 'Managed household and budget for 40+ years', year: 'Pride' }
  ];
  
  let achievements = JSON.parse(localStorage.getItem('achievements_pride')) || defaultAchievements;
  
  function renderAchievements() {
    if (!achievementsGrid) return;
    achievementsGrid.innerHTML = "";
    
    achievements.forEach(ach => {
      const node = document.createElement('div');
      node.className = 'achievement-card';
      node.style.background = 'linear-gradient(135deg, var(--surface-soft), #fffbeb)';
      node.style.border = '2px solid var(--color-gold)';
      node.style.borderRadius = '12px';
      node.style.padding = '12px';
      node.style.boxShadow = 'var(--shadow-sm)';
      node.style.display = 'flex';
      node.style.flexDirection = 'column';
      node.style.justifyContent = 'space-between';
      node.style.position = 'relative';
      
      node.innerHTML = `
        <div>
          <span style="font-size: var(--font-xs); font-weight: 700; color: var(--color-gold); text-transform: uppercase;">✨ ${ach.year}</span>
          <strong style="display:block; font-size: var(--font-sm); color: var(--text-main); margin-top:4px; line-height:1.3;">${ach.title}</strong>
        </div>
        <button type="button" class="delete-achievement-btn" data-id="${ach.id}" style="position:absolute; top:8px; right:8px; background:none; border:none; cursor:pointer; font-size:var(--font-xs); color:var(--text-muted);">✕</button>
      `;
      achievementsGrid.appendChild(node);
    });
    
    localStorage.setItem('achievements_pride', JSON.stringify(achievements));
  }
  
  if (addAchievementBtn) {
    addAchievementBtn.addEventListener('click', () => {
      const title = achievementTitleInput.value.trim();
      const year = achievementYearInput.value.trim() || 'Achievement';
      
      if (!title) {
        alert("Please enter a description for the achievement.");
        return;
      }
      
      const newAch = {
        id: 'ach_' + Date.now(),
        title: title,
        year: year
      };
      
      achievements.push(newAch);
      achievementTitleInput.value = "";
      achievementYearInput.value = "";
      
      speakText("Life achievement added to your pride wall.");
      logFamilyChatSystem(`✨ Pride Wall: ${getActiveSeniorName()} added a new life achievement card: "${title}" (${year}).`);
      renderAchievements();
    });
  }
  
  if (achievementsGrid) {
    achievementsGrid.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-achievement-btn')) {
        const id = e.target.getAttribute('data-id');
        achievements = achievements.filter(ach => ach.id !== id);
        renderAchievements();
      }
    });
  }
  
  // 7. Medical Values & Preferences Directive
  const medicalDirectiveInput = document.getElementById('medicalDirectiveInput');
  const directiveContact = document.getElementById('directiveContact');
  const saveDirectiveBtn = document.getElementById('saveDirectiveBtn');
  
  function loadMedicalDirective() {
    if (medicalDirectiveInput) {
      medicalDirectiveInput.value = localStorage.getItem('values_directive') || "నేను స్వతంత్రంగా నిర్ణయాలు తీసుకోలేని పరిస్థితి వస్తే, నా కుమార్తె మీరా నా ఆరోగ్య నిర్ణయాలు తీసుకోవాలని కోరుకుంటున్నాను. (In case I cannot make decisions, I wish for my daughter Meera to make my healthcare decisions. Avoid aggressive life support unless meaningful recovery is possible.)";
    }
    if (directiveContact) {
      directiveContact.value = localStorage.getItem('values_contact') || "Meera (Daughter) - +91 98765 43210";
    }
  }
  
  // Bind Prompt Starters
  const promptStarterBtns = document.querySelectorAll('.prompt-starter-btn');
  promptStarterBtns.forEach(btn => {
    btn.onclick = () => {
      const starterText = btn.dataset.starter;
      const originalValue = medicalDirectiveInput.value.trim();
      medicalDirectiveInput.value = originalValue ? `${originalValue}\n${starterText}` : starterText;
      medicalDirectiveInput.focus();
      speakText("Prompt starter added. You can type or record to complete the instruction.");
    };
  });

  // Bind Microphone Recording
  const recordDirectiveVoiceBtn = document.getElementById('recordDirectiveVoiceBtn');
  let directiveListening = false;
  let directiveSpeechRecognizer = null;

  if (SpeechRecognition && recordDirectiveVoiceBtn && medicalDirectiveInput) {
    directiveSpeechRecognizer = new SpeechRecognition();
    directiveSpeechRecognizer.continuous = false;
    directiveSpeechRecognizer.interimResults = false;

    directiveSpeechRecognizer.onstart = () => {
      directiveListening = true;
      recordDirectiveVoiceBtn.classList.add('active-listening');
      recordDirectiveVoiceBtn.style.background = 'var(--color-red, #ef4444)';
      showToast("Listening to your voice...");
    };

    directiveSpeechRecognizer.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const originalValue = medicalDirectiveInput.value.trim();
      medicalDirectiveInput.value = originalValue ? `${originalValue} ${transcript}` : transcript;
      showToast("Voice input transcribed!");
      speakText("Got it. Transcribed your instruction.");
    };

    directiveSpeechRecognizer.onerror = (event) => {
      console.warn("Speech recognition error in medical directive", event);
      recordDirectiveVoiceBtn.classList.remove('active-listening');
      recordDirectiveVoiceBtn.style.background = 'var(--color-purple)';
    };

    directiveSpeechRecognizer.onend = () => {
      directiveListening = false;
      recordDirectiveVoiceBtn.classList.remove('active-listening');
      recordDirectiveVoiceBtn.style.background = 'var(--color-purple)';
    };

    recordDirectiveVoiceBtn.onclick = () => {
      if (directiveListening) {
        directiveSpeechRecognizer.stop();
      } else {
        const lang = document.documentElement.lang || 'en';
        let recognitionLang = 'en-US';
        if (lang === 'te') recognitionLang = 'te-IN';
        else if (lang === 'ta') recognitionLang = 'ta-IN';
        else if (lang === 'hi') recognitionLang = 'hi-IN';
        else if (lang === 'ja') recognitionLang = 'ja-JP';
        else if (lang === 'pt') recognitionLang = 'pt-BR';
        
        directiveSpeechRecognizer.lang = recognitionLang;
        directiveSpeechRecognizer.start();
      }
    };
  }

  if (saveDirectiveBtn) {
    saveDirectiveBtn.addEventListener('click', () => {
      const directiveText = medicalDirectiveInput ? medicalDirectiveInput.value : "";
      const contactText = directiveContact ? directiveContact.value : "";
      
      localStorage.setItem('values_directive', directiveText);
      localStorage.setItem('values_contact', contactText);
      
      // Post to family chat system
      logFamilyChatSystem(`🔒 Vault Update: ${getActiveSeniorName()} updated their Medical Values & Preferences Directive in the Secure Vault.`);
      
      // Save confirmation animation
      const originalText = saveDirectiveBtn.textContent;
      saveDirectiveBtn.innerHTML = "🕊️ Your voice has been preserved 🕊️";
      saveDirectiveBtn.style.background = "#22c55e";
      saveDirectiveBtn.style.borderColor = "#22c55e";
      
      speakText("Your medical preferences directive has been safely saved and encrypted in the vault. Your voice has been preserved.");
      showToast("Directive saved. Voice preserved! 🕊️");

      setTimeout(() => {
        saveDirectiveBtn.innerHTML = originalText;
        saveDirectiveBtn.style.background = "var(--color-purple)";
        saveDirectiveBtn.style.borderColor = "var(--color-purple)";
      }, 4000);
    });
  }
  
  // 8. Trusted Vendor Directory
  const vendorsListLedger = document.getElementById('vendorsListLedger');
  const vendorNameInput = document.getElementById('vendorNameInput');
  const vendorRoleInput = document.getElementById('vendorRoleInput');
  const vendorPhoneInput = document.getElementById('vendorPhoneInput');
  const vendorReminderCheck = document.getElementById('vendorReminderCheck');
  const addVendorBtn = document.getElementById('addVendorBtn');
  
  const defaultVendors = [
    { id: 'vend_1', name: 'Rama Rao', role: 'Grocer (Veggies)', phone: '+91 94401 12345', reminder: true },
    { id: 'vend_2', name: 'Somu', role: 'Plumber', phone: '+91 94402 54321', reminder: false },
    { id: 'vend_3', name: 'Kumar', role: 'Electrician', phone: '+91 94403 98765', reminder: false }
  ];
  
  let vendors = JSON.parse(localStorage.getItem('recurring_vendors')) || defaultVendors;
  
  function renderVendors() {
    if (!vendorsListLedger) return;
    vendorsListLedger.innerHTML = "";
    
    vendors.forEach(v => {
      const node = document.createElement('div');
      node.className = 'audit-item';
      node.style.display = 'flex';
      node.style.alignItems = 'center';
      node.style.justifyContent = 'space-between';
      node.style.padding = '8px 10px';
      node.style.marginBottom = '6px';
      
      node.innerHTML = `
        <div>
          <strong style="font-size:var(--font-sm);">${v.name} (${v.role})</strong>
          <span style="display:block; font-size:var(--font-xs); color:var(--text-muted);">${v.phone} ${v.reminder ? '· 📅 Monday Reminders' : ''}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <button type="button" class="primary-btn-mini call-vendor-btn" data-phone="${v.phone}" data-name="${v.name}" style="padding:4px 8px; font-size:var(--font-xs); min-height:30px;">Call</button>
          <button type="button" class="delete-vendor-btn" data-id="${v.id}" style="background:none; border:none; cursor:pointer; font-size:var(--font-xs); color:var(--text-muted);">✕</button>
        </div>
      `;
      vendorsListLedger.appendChild(node);
    });
    
    localStorage.setItem('recurring_vendors', JSON.stringify(vendors));
    checkVendorReminders();
  }
  
  if (addVendorBtn) {
    addVendorBtn.addEventListener('click', () => {
      const name = vendorNameInput.value.trim();
      const role = vendorRoleInput.value.trim();
      const phone = vendorPhoneInput.value.trim();
      const reminder = vendorReminderCheck ? vendorReminderCheck.checked : false;
      
      if (!name || !role || !phone) {
        alert("Please fill in name, role, and phone number.");
        return;
      }
      
      const newVendor = {
        id: 'vend_' + Date.now(),
        name: name,
        role: role,
        phone: phone,
        reminder: reminder
      };
      
      vendors.push(newVendor);
      vendorNameInput.value = "";
      vendorRoleInput.value = "";
      vendorPhoneInput.value = "";
      if (vendorReminderCheck) vendorReminderCheck.checked = false;
      
      speakText(`Vendor ${name} added.`);
      logFamilyChatSystem(`📞 Directory Update: ${getActiveSeniorName()} added trusted vendor: ${name} (${role}).`);
      renderVendors();
    });
  }
  
  if (vendorsListLedger) {
    vendorsListLedger.addEventListener('click', (e) => {
      if (e.target.classList.contains('call-vendor-btn')) {
        const name = e.target.getAttribute('data-name');
        const phone = e.target.getAttribute('data-phone');
        speakText(`Calling trusted vendor ${name} at ${phone}.`);
        logFamilyChatSystem(`📞 Call Dialed: ${getActiveSeniorName()} called trusted vendor ${name} (${phone}).`);
      } else if (e.target.classList.contains('delete-vendor-btn')) {
        const id = e.target.getAttribute('data-id');
        vendors = vendors.filter(v => v.id !== id);
        renderVendors();
      }
    });
  }
  
  function checkVendorReminders() {
    const isMonday = new Date().getDay() === 1;
    const homeView = document.getElementById('home-view');
    if (!homeView) return;
    
    let vendorBanner = document.getElementById('vendorReminderBanner');
    const reminderVendors = vendors.filter(v => v.reminder);
    
    if (isMonday && reminderVendors.length > 0) {
      if (!vendorBanner) {
        vendorBanner = document.createElement('div');
        vendorBanner.id = 'vendorReminderBanner';
        vendorBanner.style.background = 'linear-gradient(135deg, var(--color-teal-soft, #f0fdfa), #ccfbf1)';
        vendorBanner.style.borderLeft = '5px solid var(--color-teal)';
        vendorBanner.style.color = 'var(--color-primary-dark)';
        vendorBanner.style.padding = '12px 20px';
        vendorBanner.style.borderRadius = '12px';
        vendorBanner.style.marginBottom = '20px';
        vendorBanner.style.boxShadow = 'var(--shadow-sm)';
        
        const vendorNames = reminderVendors.map(v => `${v.name} (${v.role})`).join(', ');
        vendorBanner.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <strong style="display:block; font-size:var(--font-sm);">📅 Weekly Vendor Reminder</strong>
              <span style="font-size:var(--font-xs); color:var(--text-muted);">It is Monday! Call trusted vendors: ${vendorNames} to place your weekly order or schedule service.</span>
            </div>
            <button type="button" id="closeVendorBannerBtn" style="background:none; border:none; cursor:pointer; font-size:1.2rem; color:var(--color-teal);">✕</button>
          </div>
        `;
        homeView.insertBefore(vendorBanner, homeView.firstChild);
        
        document.getElementById('closeVendorBannerBtn').onclick = () => {
          vendorBanner.remove();
        };
      }
    } else {
      if (vendorBanner) {
        vendorBanner.remove();
      }
    }
  }
  
  // 9. Official Letter Translator
  const scanLetterBtn = document.getElementById('scanLetterBtn');
  const letterScannerOverlay = document.getElementById('letterScannerOverlay');
  const letterTranslationResult = document.getElementById('letterTranslationResult');
  
  if (scanLetterBtn) {
    scanLetterBtn.addEventListener('click', () => {
      scanLetterBtn.disabled = true;
      if (letterScannerOverlay) letterScannerOverlay.classList.remove('d-none');
      if (letterTranslationResult) letterTranslationResult.classList.add('d-none');
      
      speakText("Scanning letter. Please hold the document steady in front of the camera.");
      
      setTimeout(() => {
        scanLetterBtn.disabled = false;
        if (letterScannerOverlay) letterScannerOverlay.classList.add('d-none');
        if (letterTranslationResult) {
          letterTranslationResult.classList.remove('d-none');
          
          const letterType = document.getElementById('letterTypeSelect') ? document.getElementById('letterTypeSelect').value : "incomeTax";
          let docName = "GHMC Tax Notice";
          let origText = "";
          let subject = "";
          let details = "";
          let actionsHTML = "";
          
          if (letterType === 'incomeTax') {
            docName = "Income Tax Notice";
            origText = "Income Tax Department, Government of India. Notice under Section 143(1) for assessment year 2025-26. Action required: Please review the tax computation statement and verify if any tax refund is due or if there is outstanding demand.";
            subject = "ఐటి నోటీసు (ఆదాయపు పన్ను రిటర్నుల పరిశీలన)";
            details = "మీ ఆదాయపు పన్ను రిటర్నులను ఆదాయపు పన్ను శాఖ వారు విజయవంతంగా ప్రాసెస్ చేశారు. దీనికి సంబంధించిన వివరాలను ఈ నోటీసులో పేర్కొన్నారు.";
            actionsHTML = `
              <li>మీ పన్ను లెక్కలు సరిగ్గా ఉన్నాయో లేదో మీ ఆడిటర్ ద్వారా చెక్ చేయించండి.</li>
              <li>మీకు పన్ను రీఫండ్ రావాల్సి ఉంటే అది మీ బ్యాంకు ఖాతాలో పడిందో లేదో చూసుకోండి.</li>
              <li>పన్ను ఇంకా కట్టాల్సి ఉంటే వెంటనే చెల్లించండి.</li>
            `;
          } else if (letterType === 'bankLetter') {
            docName = "SBI KYC Notice";
            origText = "State Bank of India. KYC renewal request. Dear Customer, as per RBI regulations, you are required to submit updated KYC documents (Aadhaar and PAN) at your home branch or online within 30 days to avoid account suspension.";
            subject = "బ్యాంకు ఖాతా కేవైసీ (KYC) అప్డేట్ నోటీసు";
            details = "మీ ఎస్బీఐ బ్యాంకు ఖాతాకు సంబంధించిన కేవైసీ వివరాలను అప్డేట్ చేయవలసి ఉంది. ఇది నిబంధనల ప్రకారం తప్పనిసరి.";
            actionsHTML = `
              <li>ఆధార్ కార్డు మరియు పాన్ కార్డు జిరాక్స్ కాపీలు సిద్ధం చేసుకోండి.</li>
              <li>వాటిని బ్యాంకు బ్రాంచిలో సమర్పించండి లేదా నెట్ బ్యాంకింగ్ ద్వారా అప్లోడ్ చేయండి.</li>
              <li>వచ్చే 30 రోజులలోగా ఇది పూర్తి చేయకుంటే మీ ఖాతా తాత్కాలికంగా ఆగిపోవచ్చు.</li>
            `;
          } else if (letterType === 'societyNotice') {
            docName = "Society Maintenance Notice";
            origText = "Sree Mayuri Heights Owners Association. Maintenance dues notice. All residents are requested to pay the monthly maintenance charges of ₹4,500 along with any pending corpus fund contributions by June 15 to facilitate generator repair works.";
            subject = "హౌసింగ్ సొసైటీ మెయింటెనెన్స్ చార్జీల నోటీసు";
            details = "మన అపార్ట్మెంట్ సొసైటీ మెయింటెనెన్స్ మరియు జనరేటర్ మరమ్మతు కొరకు ప్రతి నెల చెల్లించే ₹4,500 ని జూన్ 15 లోగా కట్టాలి.";
            actionsHTML = `
              <li>జూన్ 15 లోగా మెయింటెనెన్స్ చార్జీలు ₹4,500 ఆన్‌లైన్ లేదా అసోసియేషన్ ఆఫీసులో కట్టండి.</li>
              <li>జనరేటర్ రిపేరు కోసం పనుల వివరాలు అడిగి తెలుసుకోండి.</li>
            `;
          } else if (letterType === 'govtOrder') {
            docName = "Pension Life Certificate Order";
            origText = "Department of Pensions and Pensioners' Welfare. Annual Life Certificate submission window. All central government pensioners must submit their Jeevan Pramaan digital life certificate between November 1 and November 30 to ensure uninterrupted pension disbursement.";
            subject = "పెన్షన్ బ్రతుకు ధృవీకరణ పత్రం (లైఫ్ సర్టిఫికేట్) సమర్పణ ఉత్తర్వు";
            details = "పెన్షన్ నిరంతరాయంగా అందాలంటే నవంబర్ నెలలోగా మీ లైఫ్ సర్టిఫికేట్ (బ్రతుకు ధృవీకరణ పత్రం) సబ్మిట్ చేయాలి.";
            actionsHTML = `
              <li>నవంబర్ 1 నుండి 30 లోపు జీవన్ ప్రమాణ్ యాప్ లేదా మీ సేవా కేంద్రం ద్వారా లైఫ్ సర్టిఫికేట్ ఇవ్వాలి.</li>
              <li>మీ ఆధార్ కార్డు, పిపిఓ నెంబర్ సిద్ధంగా ఉంచుకోండి.</li>
            `;
          } else if (letterType === 'medicalBill') {
            docName = "Apollo Medical Bill Summary";
            origText = "Apollo Hospitals, Hyderabad. Final bill summary. Patient: Lakshmi Raman. Total bill amount: ₹1,12,450. Outstanding payable amount: ₹12,450 after TPA insurance approval of ₹1,00,000. Please clear the balance before discharge.";
            subject = "అపోలో ఆసుపత్రి వైద్య బిల్లు మరియు చెల్లింపు వివరాలు";
            details = "మొత్తం హాస్పిటల్ బిల్లు ₹1,12,450 కాగా, ఇన్సూరెన్స్ ద్వారా ₹1,00,000 మంజూరైంది. మిగిలిన మొత్తం మీ సొంతంగా కట్టాలి.";
            actionsHTML = `
              <li>మిగిలిన ₹12,450 బిల్లింగ్ కౌంటర్ వద్ద చెల్లించి డిశ్చార్జ్ పేపర్లు తీసుకోండి.</li>
              <li>ఇన్సూరెన్స్ అప్రూవల్ లెటర్ కాపీలను జాగ్రత్తగా దాచుకోండి.</li>
            `;
          } else {
            docName = "Star Health Insurance Renewal Notice";
            origText = "Star Health Insurance. Policy Renewal Notice. Your Senior Citizen Red Carpet Health Insurance policy is expiring on July 10. The renewal premium is ₹24,800 to maintain continuous coverage without break.";
            subject = "హెల్త్ ఇన్సూరెన్స్ పాలసీ రిన్యూవల్ (నవీకరణ) నోటీసు";
            details = "మీ స్టార్ హెల్త్ ఇన్సూరెన్స్ పాలసీ జూలై 10 తో ముగుస్తుంది. నిరంతరాయంగా వైద్య ఖర్చులు అందాలంటే ప్రీమియం చెల్లించాలి.";
            actionsHTML = `
              <li>జూలై 10 లోపు రిన్యూవల్ ప్రీమియం ₹24,800 ఆన్‌లైన్ లో గానీ ఏజెంట్ ద్వారా గానీ కట్టండి.</li>
              <li>మీ ఆరోగ్య మార్పుల వివరాలు ఏమైనా ఉంటే ఫారంలో తెలియజేయండి.</li>
            `;
          }

          letterTranslationResult.innerHTML = `
            <strong style="color: var(--color-gold); font-size: var(--font-sm); display:block; margin-bottom: 6px;">📄 OCR Translation Result</strong>
            
            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 4px solid var(--color-gold); margin-bottom: 8px;">
              <span style="font-size: var(--font-xs); font-weight:700; color: var(--text-muted); display:block; margin-bottom:2px;">Original English Document:</span>
              <p style="font-size: var(--font-xs); margin:0; line-height:1.3; font-style:italic;">
                "${origText}"
              </p>
            </div>
            
            <div style="background: var(--color-primary-soft); padding: 12px; border-radius: 8px; border-left: 4px solid var(--color-primary); color: var(--color-primary-dark); display: flex; flex-direction: column; gap: 8px;">
              <div>
                <strong style="display:block; font-size: var(--font-xs); text-transform: uppercase; color: var(--color-primary-dark); opacity: 0.8;">📋 విషయం (Subject):</strong>
                <span style="font-size: var(--font-sm); font-weight:700;">${subject}</span>
              </div>
              <div>
                <strong style="display:block; font-size: var(--font-xs); text-transform: uppercase; color: var(--color-primary-dark); opacity: 0.8;">📝 వివరాలు (Details):</strong>
                <p style="font-size: var(--font-sm); margin:0; line-height:1.4; font-weight: 500;">${details}</p>
              </div>
              <div>
                <strong style="display:block; font-size: var(--font-xs); text-transform: uppercase; color: var(--color-primary-dark); opacity: 0.8;">✅ మీరు చేయవలసింది (What you need to do):</strong>
                <ol style="font-size: var(--font-sm); margin: 0 0 0 15px; padding:0; line-height:1.4; font-weight: 600;">
                  ${actionsHTML}
                </ol>
              </div>
            </div>
            
            <button type="button" class="primary-btn-mini w-100 mt-10" id="shareTranslationWithFamilyBtn" style="background:var(--color-primary); color:white; border:none; min-height:30px;">Forward to Meera</button>
          `;
          
          const shareBtn = document.getElementById('shareTranslationWithFamilyBtn');
          if (shareBtn) {
            shareBtn.onclick = () => {
              const caregiverName = localStorage.getItem('caregiver_name') || "your family";
      speakText(`Document translation for ${docName} forwarded to ${caregiverName}.`);
              logFamilyChatSystem(`📩 Forwarded Document: ${getActiveSeniorName()} shared a scanned ${docName} and Telugu translation with Meera.`);
              setTimeout(() => {
                logFamilyChatResponse("Meera", `Got the ${docName}, Mom. I will check it tonight. Don't worry!`);
              }, 1200);
              shareBtn.textContent = "Forwarded to Meera ✓";
              shareBtn.disabled = true;
            };
          }
          
          speakText("Scanning complete. Document translated to Telugu.");
          logFamilyChatSystem(`📄 OCR Check: ${getActiveSeniorName()} scanned an English letter (${docName}) and translated it to Telugu.`);
        }
      }, 2500);
    });
  }
  
  // 10. Hospital Pre-Visit Organizer
  const previsitBpList = document.getElementById('previsitBpList');
  const previsitQuestionsList = document.getElementById('previsitQuestionsList');
  const previsitQuestionInput = document.getElementById('previsitQuestionInput');
  const addPrevisitQuestionBtn = document.getElementById('addPrevisitQuestionBtn');
  
  let previsitQuestions = JSON.parse(localStorage.getItem('previsit_questions')) || [
    "Does my current dose of Metformin need adjustment based on my recent active readings?",
    "Is the mild swelling in my ankles of any concern for my heart medicine?"
  ];
  
  function renderPrevisitOrganizer() {
    if (previsitBpList) {
      previsitBpList.innerHTML = "";
      let bpReadings = ['120/80', '122/81', '118/79'];
      if (typeof healthLogDatabase !== 'undefined' && healthLogDatabase.bp && healthLogDatabase.bp.length > 0) {
        bpReadings = healthLogDatabase.bp.slice(-3);
      }
      
      bpReadings.forEach((bp, index) => {
        const bpNode = document.createElement('div');
        bpNode.style.display = 'flex';
        bpNode.style.justifyContent = 'space-between';
        bpNode.innerHTML = `<span>Reading #${index + 1}:</span> <strong>${bp} mmHg</strong>`;
        previsitBpList.appendChild(bpNode);
      });
    }
    
    if (previsitQuestionsList) {
      previsitQuestionsList.innerHTML = "";
      if (previsitQuestions.length === 0) {
        previsitQuestionsList.innerHTML = `<span style="font-style:italic; color:var(--text-muted);">No questions added yet.</span>`;
      } else {
        previsitQuestions.forEach((q, index) => {
          const qNode = document.createElement('div');
          qNode.style.display = 'flex';
          qNode.style.justifyContent = 'space-between';
          qNode.style.alignItems = 'flex-start';
          qNode.style.padding = '4px 0';
          qNode.style.borderBottom = '1px dashed var(--border-color)';
          qNode.innerHTML = `
            <span style="flex:1;">${index + 1}. ${q}</span>
            <button type="button" class="delete-previsit-q-btn" data-index="${index}" style="background:none; border:none; cursor:pointer; font-size:var(--font-xs); color:var(--text-muted); margin-left:8px;">✕</button>
          `;
          previsitQuestionsList.appendChild(qNode);
        });
      }
    }
    
    localStorage.setItem('previsit_questions', JSON.stringify(previsitQuestions));
  }
  
  if (addPrevisitQuestionBtn) {
    addPrevisitQuestionBtn.addEventListener('click', () => {
      const qText = previsitQuestionInput.value.trim();
      if (!qText) return;
      
      previsitQuestions.push(qText);
      previsitQuestionInput.value = "";
      
      speakText("Question added to checkup list.");
      logFamilyChatSystem(`📋 Hospital Prep: ${getActiveSeniorName()} added a pre-visit question: "${qText}"`);
      renderPrevisitOrganizer();
    });
  }
  
  if (previsitQuestionsList) {
    previsitQuestionsList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-previsit-q-btn')) {
        const idx = parseInt(e.target.getAttribute('data-index'));
        previsitQuestions.splice(idx, 1);
        renderPrevisitOrganizer();
      }
    });
  }
  
  // ==========================================================================
  // PREMIUM EXPANSION: POWER CUT, SIDE EFFECTS, AND RITUALS CHECKS
  // ==========================================================================

  // --- POWER CUT SAFETY MODE ---
  const simulatePowerCutChk = document.getElementById('simulatePowerCut');
  const powerOutageBanner = document.getElementById('powerOutageBanner');
  const powerOutageAcknowledgeBtn = document.getElementById('powerOutageAcknowledgeBtn');
  const powerOutageMessage = document.getElementById('powerOutageMessage');
  let powerOutageSpoken = false;

  window.checkPowerCutVisibility = function() {
    const country = getActiveCountry();
    const powerCutGroup = document.getElementById('powerCutSimGroup');
    if (powerCutGroup) {
      if (country.toLowerCase() === 'india') {
        powerCutGroup.style.display = 'flex';
      } else {
        powerCutGroup.style.display = 'none';
        if (simulatePowerCutChk && simulatePowerCutChk.checked) {
          simulatePowerCutChk.checked = false;
          localStorage.setItem('simulate_power_cut', 'false');
          window.applyPowerCutState();
        }
      }
    }
  };

  window.applyPowerCutState = function() {
    const isPowerCutSimulated = simulatePowerCutChk && simulatePowerCutChk.checked;
    const country = getActiveCountry();
    const city = getActiveCity();
    const seniorName = getActiveSeniorName();

    if (isPowerCutSimulated && country.toLowerCase() === 'india' && city.toLowerCase().includes('hyderabad')) {
      if (powerOutageBanner) {
        powerOutageBanner.classList.remove('d-none');
        if (powerOutageMessage) {
          powerOutageMessage.textContent = `Don't worry, ${seniorName}, this is a planned outage. Power will return by 11:00 PM. We have notified Arun.`;
        }
      }
      if (!powerOutageSpoken) {
        powerOutageSpoken = true;
        const caregiverName = localStorage.getItem('caregiver_name') || "your family";
      speakText(`Don't worry, ${seniorName}, this is a planned outage. Power will be back by 11 PM. We have notified ${caregiverName} automatically.`);
        logFamilyChatSystem(`🚨 Power Outage Alert: Hyderabad grid failure detected. ${seniorName}'s home is without power. Backup systems active.`);
        setTimeout(() => {
          logFamilyChatResponse("Arun", `Mom, I got the power cut alert. Don't worry, it's a planned maintenance, back by 11 PM. Please stay safe and keep a torch handy!`);
        }, 1500);
      }
    } else {
      if (powerOutageBanner) {
        powerOutageBanner.classList.add('d-none');
      }
      powerOutageSpoken = false;
    }
  };

  if (simulatePowerCutChk) {
    simulatePowerCutChk.checked = localStorage.getItem('simulate_power_cut') === 'true';
    simulatePowerCutChk.addEventListener('change', (e) => {
      localStorage.setItem('simulate_power_cut', e.target.checked);
      powerOutageSpoken = false;
      window.applyPowerCutState();
    });
  }

  if (powerOutageAcknowledgeBtn) {
    powerOutageAcknowledgeBtn.addEventListener('click', () => {
      if (simulatePowerCutChk) {
        simulatePowerCutChk.checked = false;
        localStorage.setItem('simulate_power_cut', 'false');
      }
      window.applyPowerCutState();
      logFamilyChatSystem(`${getActiveSeniorName()} checked in: Power outage alert acknowledged and muted.`);
      speakText("Glad to hear you are okay. The power outage banner is now muted.");
    });
  }

  // --- MEDICATION SIDE-EFFECT CORRELATION ENGINE ---
  window.recordPillTaken = function(pillName, timestamp = Date.now()) {
    let pills = JSON.parse(localStorage.getItem('taken_pills') || '[]');
    pills.push({ pillName, timestamp });
    pills = pills.filter(p => Date.now() - p.timestamp < 10 * 24 * 60 * 60 * 1000); // 10 days max
    localStorage.setItem('taken_pills', JSON.stringify(pills));
    analyzeSideEffectCorrelations();
  };

  window.logSideEffect = function(symptom, customText = "") {
    const now = Date.now();
    let pills = JSON.parse(localStorage.getItem('taken_pills') || '[]');
    const windowMs = 90 * 60 * 1000; // 90 mins
    
    const pillsInWindow = pills.filter(p => (now - p.timestamp) > 0 && (now - p.timestamp) <= windowMs).map(p => ({
      pillName: p.pillName,
      timeDiffMins: Math.round((now - p.timestamp) / (60 * 1000))
    }));

    let logs = JSON.parse(localStorage.getItem('side_effect_logs') || '[]');
    logs.push({
      symptom,
      timestamp: now,
      pillsInWindow,
      customText
    });
    
    logs = logs.filter(l => now - l.timestamp < 30 * 24 * 60 * 60 * 1000); // 30 days max
    localStorage.setItem('side_effect_logs', JSON.stringify(logs));
    
    renderSideEffectLogs();
    analyzeSideEffectCorrelations();
    showToast(`Logged symptom: ${symptom}`);
    speakText(`Logged ${symptom} in your side-effect diary.`);
  };

  function renderSideEffectLogs() {
    const container = document.getElementById('sideEffectLogsHistory');
    if (!container) return;
    
    const logs = JSON.parse(localStorage.getItem('side_effect_logs') || '[]');
    if (logs.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:10px; color:var(--text-muted);">No symptoms logged yet.</div>`;
      return;
    }
    
    container.innerHTML = logs.slice(-5).reverse().map(l => {
      const dateStr = new Date(l.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      const pillDetails = l.pillsInWindow.length > 0 
        ? ` (Taken after: ${l.pillsInWindow.map(p => `${p.pillName} ~${p.timeDiffMins}m ago`).join(', ')})` 
        : '';
      return `<div style="padding:4px 0; border-bottom:1px solid rgba(0,0,0,0.05);">
        <strong>${dateStr}</strong>: ${l.symptom} ${l.customText ? ` - ${l.customText}` : ''} <span style="color:var(--color-primary);">${pillDetails}</span>
      </div>`;
    }).join('');
  }

  window.analyzeSideEffectCorrelations = function() {
    const logs = JSON.parse(localStorage.getItem('side_effect_logs') || '[]');
    const now = Date.now();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    
    const recentLogs = logs.filter(l => now - l.timestamp <= sevenDaysMs);
    const counts = {};
    
    recentLogs.forEach(log => {
      log.pillsInWindow.forEach(p => {
        const key = `${log.symptom}||${p.pillName}`;
        if (!counts[key]) {
          counts[key] = {
            symptom: log.symptom,
            pillName: p.pillName,
            occurrences: 0,
            delays: []
          };
        }
        counts[key].occurrences++;
        counts[key].delays.push(p.timeDiffMins);
      });
    });
    
    const correlations = [];
    for (const key in counts) {
      const data = counts[key];
      if (data.occurrences >= 3) {
        const avgDelay = Math.round(data.delays.reduce((a, b) => a + b, 0) / data.delays.length);
        correlations.push({
          symptom: data.symptom,
          pillName: data.pillName,
          occurrences: data.occurrences,
          avgDelay,
          strength: data.occurrences >= 5 ? 'Strong' : 'Medium'
        });
      }
    }
    
    renderCorrelationReport(correlations);
    return correlations;
  };

  function renderCorrelationReport(correlations) {
    const box = document.getElementById('correlationResultsBox');
    if (!box) return;
    
    if (correlations.length === 0) {
      box.innerHTML = `
        <div style="background:var(--surface-soft); border: 1px dashed var(--border-color); border-radius:10px; padding:15px; text-align:center; color:var(--text-muted);">
          <span style="font-size:1.5rem; display:block; margin-bottom:5px;">✅</span>
          No correlation patterns detected. Vitals & symptoms are normal.
        </div>
      `;
      return;
    }
    
    box.innerHTML = correlations.map(c => {
      const color = c.strength === 'Strong' ? 'var(--color-red, #ef4444)' : 'var(--color-orange, #f97316)';
      return `
        <div style="background:var(--surface-soft); border-left: 5px solid ${color}; border-radius:8px; padding:12px; margin-bottom:8px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <div>
            <strong style="display:block; color:var(--text-main); font-size:var(--font-sm);">
              ⚠️ ${c.strength} Correlation Detected
            </strong>
            <span style="font-size:var(--font-xs); color:var(--text-muted);">
              Your <strong>${c.symptom}</strong> occurs approximately <strong>${c.avgDelay} minutes</strong> after taking <strong>${c.pillName}</strong> (	ext{${c.occurrences}} out of 7 days this week).
            </span>
          </div>
          <span class="badge" style="background:${color}15; color:${color}; font-weight:700; font-size:10px; padding:4px 8px; border-radius:6px; flex-shrink:0;">
            ${c.strength.toUpperCase()}
          </span>
        </div>
      `;
    }).join('');
  }

  window.generateDoctorSummary = function() {
    const correlations = window.analyzeSideEffectCorrelations();
    const seniorName = getActiveSeniorName();
    let text = `CareCircle Premium - Health Correlation Summary for ${seniorName}\n`;
    text += `Generated on: ${new Date().toLocaleDateString()}\n`;
    text += `==============================================\n\n`;
    
    if (correlations.length === 0) {
      text += `No significant symptom-medication correlation patterns detected over the last 7 days.\n`;
    } else {
      text += `The following symptom-medication patterns were detected over the last 7 days:\n\n`;
      correlations.forEach((c, idx) => {
        text += `${idx + 1}. 	ext{${c.strength}} Pattern:\n`;
        text += `   - Symptom: ${c.symptom}\n`;
        text += `   - Medication: ${c.pillName}\n`;
        text += `   - Pattern: Occurred ${c.occurrences} times this week, typically ${c.avgDelay} minutes after taking.\n`;
        text += `   - Recommendation: Share this summary with your cardiologist or primary care physician.\n\n`;
      });
    }
    
    navigator.clipboard.writeText(text).then(() => {
      showToast("Doctor summary copied to clipboard!");
      speakText("Your medical symptom correlation summary has been copied to your clipboard. You can share this with your doctor.");
    }).catch(err => {
      console.error("Failed to copy summary", err);
      showToast("Failed to copy summary to clipboard.");
    });
  };

  // Bind side effect buttons
  document.querySelectorAll('.symptom-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sym = btn.dataset.symptom;
      window.logSideEffect(sym);
    });
  });

  const logCustomSymptomBtn = document.getElementById('logCustomSymptomBtn');
  const customSymptomInput = document.getElementById('customSymptomInput');
  if (logCustomSymptomBtn && customSymptomInput) {
    logCustomSymptomBtn.addEventListener('click', () => {
      const text = customSymptomInput.value.trim();
      if (!text) return;
      window.logSideEffect(text);
      customSymptomInput.value = '';
    });
  }

  const shareWithDoctorBtn = document.getElementById('shareWithDoctorBtn');
  if (shareWithDoctorBtn) {
    shareWithDoctorBtn.addEventListener('click', window.generateDoctorSummary);
  }

  // --- MORNING/EVENING PROMISES CHECKLIST ---
  function updateStreakUI() {
    let streak = parseInt(localStorage.getItem('ritual_streak') || '5');
    const display = document.getElementById('ritualStreakDisplay');
    if (display) {
      display.textContent = `🔥 You've completed your promises ${streak} days in a row!`;
    }
  }

  function renderCustomRituals() {
    const morningList = document.getElementById('morningCustomRitualsList');
    const eveningList = document.getElementById('eveningCustomRitualsList');
    if (!morningList || !eveningList) return;

    morningList.innerHTML = '';
    eveningList.innerHTML = '';

    const customs = JSON.parse(localStorage.getItem('custom_rituals') || '[]');
    customs.forEach(task => {
      const checked = localStorage.getItem('state_' + task.id) === 'true';
      const li = document.createElement('li');
      li.className = 'checklist-item';
      li.style.padding = '8px 0';
      li.style.borderBottom = '1px solid var(--border-color)';
      li.innerHTML = `
        <label class="check-label" style="display:flex; align-items:center; gap:8px; font-size:var(--font-sm); width: 100%;">
          <input type="checkbox" class="large-checkbox custom-ritual-cb" id="${task.id}" style="width:20px; height:20px; margin:0;" ${checked ? 'checked' : ''}>
          <span>${task.text}</span>
          <button type="button" class="delete-custom-ritual-btn" data-id="${task.id}" style="background:none; border:none; color:var(--color-red, #ef4444); cursor:pointer; margin-left:auto; font-size:12px; padding:0 5px;">✕</button>
        </label>
      `;
      if (task.type === 'morning') {
        morningList.appendChild(li);
      } else {
        eveningList.appendChild(li);
      }
    });

    document.querySelectorAll('.custom-ritual-cb').forEach(cb => {
      cb.onchange = () => {
        localStorage.setItem('state_' + cb.id, cb.checked.toString());
        const labelSpan = cb.parentNode.querySelector('span');
        const text = labelSpan ? labelSpan.textContent : "Ritual task";
        if (cb.checked) {
          speakText(`${text} completed.`);
        } else {
          speakText(`${text} unchecked.`);
        }
        checkRitualCompletion();
      };
    });

    document.querySelectorAll('.delete-custom-ritual-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const taskId = btn.dataset.id;
        deleteCustomRitual(taskId);
      };
    });
  }

  function deleteCustomRitual(id) {
    let customs = JSON.parse(localStorage.getItem('custom_rituals') || '[]');
    customs = customs.filter(t => t.id !== id);
    localStorage.setItem('custom_rituals', JSON.stringify(customs));
    localStorage.removeItem('state_' + id);
    renderCustomRituals();
    checkRitualCompletion();
  }

  const addCustomRitualBtn = document.getElementById('addCustomRitualBtn');
  const customRitualInput = document.getElementById('customRitualInput');
  if (addCustomRitualBtn && customRitualInput) {
    addCustomRitualBtn.addEventListener('click', () => {
      const text = customRitualInput.value.trim();
      if (!text) return;
      
      const activeTab = document.getElementById('ritualTabMorning').classList.contains('active') ? 'morning' : 'evening';
      const id = 'custom_ritual_' + Date.now();
      
      const customs = JSON.parse(localStorage.getItem('custom_rituals') || '[]');
      customs.push({ id, text, type: activeTab });
      localStorage.setItem('custom_rituals', JSON.stringify(customs));
      
      customRitualInput.value = '';
      renderCustomRituals();
      speakText(`Added custom promise: ${text}`);
      showToast("Custom promise added.");
      checkRitualCompletion();
    });
  }

  window.checkRitualCompletion = function() {
    const morningTabActive = document.getElementById('ritualTabMorning').classList.contains('active');
    const activeTab = morningTabActive ? 'morning' : 'evening';
    
    const standardIds = activeTab === 'morning' 
      ? ['ritual_geyser', 'ritual_backdoor', 'ritual_umbrella']
      : ['ritual_maingate', 'ritual_kitchenwindow', 'ritual_torch'];
      
    const customs = JSON.parse(localStorage.getItem('custom_rituals') || '[]');
    const customIds = customs.filter(t => t.type === activeTab).map(t => t.id);
    
    const allIds = [...standardIds, ...customIds];
    if (allIds.length === 0) return;
    
    const allChecked = allIds.every(id => {
      const cb = document.getElementById(id);
      return cb && cb.checked;
    });

    const display = document.getElementById('ritualStreakDisplay');
    const checklistCard = display ? display.closest('.dashboard-card') : null;
    
    if (allChecked) {
      if (checklistCard) {
        checklistCard.style.background = 'linear-gradient(135deg, #fef3c7, #fde68a)';
        checklistCard.style.borderColor = 'var(--color-gold, #f59e0b)';
        checklistCard.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.4)';
        checklistCard.classList.add('border-gold');
      }
      
      const today = new Date().toDateString();
      const lastCelebrated = localStorage.getItem('last_celebrated_date_' + activeTab);
      
      if (lastCelebrated !== today) {
        localStorage.setItem('last_celebrated_date_' + activeTab, today);
        
        let streak = parseInt(localStorage.getItem('ritual_streak') || '5');
        streak++;
        localStorage.setItem('ritual_streak', streak.toString());
        updateStreakUI();
        
        const seniorName = getActiveSeniorName();
        speakText(`All done, ${seniorName}! Your home is safe and your family will rest easy.`);
        logFamilyChatSystem(`✅ ${seniorName} completed her ${activeTab} promises checklist.`);
        
        setTimeout(() => {
          logFamilyChatResponse("Meera", `Wonderful job keeping your ${activeTab} promises, Mom! Proud of you. ❤️`);
        }, 1500);
      }
    } else {
      if (checklistCard) {
        checklistCard.style.background = '';
        checklistCard.style.borderColor = '';
        checklistCard.style.boxShadow = '';
        checklistCard.classList.remove('border-gold');
      }
    }
  };

  // Call initial renders for Phase 3 features
  renderSideEffectLogs();
  analyzeSideEffectCorrelations();
  initJoyFeed();
  loadRitualsState();
  updateDndBanner();
  renderDiaryLogs();
  renderGratitudeLogs();
  renderAchievements();
  loadMedicalDirective();
  renderVendors();
  renderPrevisitOrganizer();
  
  // --- END OF PHASE 3 FEATURES INTEGRATION ---

  // Initial loads for ledgers
  renderBillsUI();
  renderFDsUI();
  renderPropertyAlertsUI();
  updateGoingOutUI();

  // Hook settings submit to update water reminder name and check weather alert immediately
  const cultureConfigFormEl = document.getElementById('cultureConfigForm');
  if (cultureConfigFormEl) {
    cultureConfigFormEl.addEventListener('submit', () => {
      setTimeout(() => {
        if (typeof updateWaterUI === 'function') {
          updateWaterUI();
        }
        checkWeatherAlert();
      }, 500);
    });
  }

  // Run initial updates for new widgets
  if (typeof updateWaterUI === 'function') {
    updateWaterUI();
  }

  // Dynamic initialization
  initializeCultureEngine('India');
  renderDocumentVaultRegistry();
  renderWisdomListingRegistry();
  renderCarePlannerTimeline();
  renderHealthLogSVGChart('steps');
  clearWaveformCanvas();

  // Load Speech Voices in background
  if (synthesisEngine) {
    synthesisEngine.onvoiceschanged = () => {};
  }

  // ==========================================================================
  // PHASE 7 PREMIUM FEATURES: ONBOARDING, TREMOR, COGNITIVE, TINNITUS, PAYWALL
  // ==========================================================================

  // --- A. SETTINGS MODAL SETUP ---
  const settingsModal = document.getElementById('settingsModal');
  const openSettingsBtn = document.getElementById('openSettingsBtn');
  const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');

  if (openSettingsBtn && settingsModal) {
    openSettingsBtn.addEventListener('click', () => {
      // Pre-populate fields from localStorage
      document.getElementById('seniorNameInput').value = localStorage.getItem('senior_name') || "Lakshmi Raman";
      document.getElementById('cityInput').value = localStorage.getItem('city_location') || "Chennai";
      
      const savedCountry = localStorage.getItem('country_profile') || "India";
      document.getElementById('countrySelect').value = savedCountry;
      
      if (savedCountry === 'India') {
        document.getElementById('indianStateContainer').classList.remove('d-none');
        document.getElementById('stateSelect').value = localStorage.getItem('indian_state') || "Tamil Nadu";
      } else {
        document.getElementById('indianStateContainer').classList.add('d-none');
      }

      document.getElementById('caregiverNameInput').value = localStorage.getItem('caregiver_name') || "Meera";
      document.getElementById('caregiverPhoneInput').value = localStorage.getItem('caregiver_phone') || "+91 99999 99999";
      document.getElementById('companionNameInput').value = localStorage.getItem('companion_name') || "Sathi";
      document.getElementById('geminiApiKeyInput').value = localStorage.getItem('gemini_api_key') || "";
      
      // Update languages select dynamically
      const data = countryConfigDatabase[savedCountry];
      if (data) {
        document.getElementById('languageSelect').innerHTML = data.languages.map(l => `<option value="${l.code}">${l.label}</option>`).join('');
        document.getElementById('languageSelect').value = localStorage.getItem('display_lang') || data.defaultLanguage;
      }

      document.getElementById('dietPreference').value = localStorage.getItem('diet_preference') || "veg_diabetic";
      document.getElementById('livingSituationSelect').value = localStorage.getItem('living_arrangement') || "living_alone";
      document.getElementById('spiritualPreference').value = localStorage.getItem('spiritual_alignment') || "festivals_prayers";

      // Switches
      document.getElementById('tremorGuardToggle').checked = localStorage.getItem('tremor_guard_enabled') === 'true';
      document.getElementById('premiumStatusToggle').checked = localStorage.getItem('is_premium') === 'true';

      settingsModal.showModal();
    });
  }

  if (closeSettingsModalBtn && settingsModal) {
    closeSettingsModalBtn.addEventListener('click', () => {
      settingsModal.close();
    });
  }

  // --- B. FIRST-LAUNCH ONBOARDING WIZARD ---
  const onboardingWizard = document.getElementById('onboardingWizard');
  const onboardCountrySelect = document.getElementById('onboardCountrySelect');
  const onboardIndianStateContainer = document.getElementById('onboardIndianStateContainer');
  const onboardStateSelect = document.getElementById('onboardStateSelect');
  const onboardLanguageSelect = document.getElementById('onboardLanguageSelect');

  // Dynamic Country / State / Language setup inside Onboarding
  const updateOnboardLanguages = () => {
    const country = onboardCountrySelect.value;
    const data = countryConfigDatabase[country];
    if (data) {
      onboardLanguageSelect.innerHTML = data.languages.map(l => `<option value="${l.code}">${l.label}</option>`).join('');
      let defaultLang = data.defaultLanguage;
      if (country === 'India') {
        const state = onboardStateSelect.value;
        defaultLang = data.stateLanguages[state] || 'en';
      }
      onboardLanguageSelect.value = defaultLang;
    }
  };

  if (onboardCountrySelect) {
    onboardCountrySelect.addEventListener('change', () => {
      if (onboardCountrySelect.value === 'India') {
        onboardIndianStateContainer.classList.remove('d-none');
      } else {
        onboardIndianStateContainer.classList.add('d-none');
      }
      updateOnboardLanguages();
    });
  }

  if (onboardStateSelect) {
    onboardStateSelect.addEventListener('change', updateOnboardLanguages);
  }

  // OTP Configuration Setup
  const OTP_CONFIG = {
    USE_REALTIME_OTP: false, // Set true to route to live Twilio backend
    API_SEND_URL: "https://your-backend.com/send",
    API_VERIFY_URL: "https://your-backend.com/verify"
  };

  let generatedOtp = "1234";

  // Check onboarding completion on startup
  const checkOnboardingOnLoad = () => {
    const completed = localStorage.getItem('onboarding_completed') === 'true';
    if (!completed) {
      if (onboardingWizard) {
        onboardingWizard.classList.remove('d-none');
        // Initial setup for step 3 country/language options
        if (onboardCountrySelect.value === 'India') {
          onboardIndianStateContainer.classList.remove('d-none');
        }
        updateOnboardLanguages();
      }
    } else {
      // Read initial values and update UI
      const nameVal = localStorage.getItem('senior_name') || "Lakshmi Raman";
      const countryVal = localStorage.getItem('country_profile') || "India";
      
      if (document.getElementById('seniorName')) {
        document.getElementById('seniorName').textContent = countryVal === 'Japan' ? `${nameVal}-san` : nameVal;
      }
      
      const compVal = localStorage.getItem('companion_name') || "Sathi";
      if (document.getElementById('companionAvatarName')) {
        document.getElementById('companionAvatarName').textContent = compVal;
      }

      initializeCultureEngine(countryVal);
    }
  };

  // Step 1 -> Step 2 (Send Verification Code)
  const onboardSendOtpBtn = document.getElementById('onboardSendOtpBtn');
  if (onboardSendOtpBtn) {
    onboardSendOtpBtn.addEventListener('click', () => {
      const name = document.getElementById('onboardSeniorName').value.trim();
      const phone = document.getElementById('onboardSeniorPhone').value.trim();

      if (!name || !phone) {
        showToast("Please enter your name and phone number.");
        speakText("Please enter your name and phone number.");
        return;
      }

      generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

      if (OTP_CONFIG.USE_REALTIME_OTP) {
        // Production API Fetch code
        fetch(OTP_CONFIG.API_SEND_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone })
        })
        .then(res => res.json())
        .then(() => showToast("SMS Code Dispatched."))
        .catch(err => console.error("Realtime OTP fail:", err));
      }

      // Offline Simulated SMS alert popup
      setTimeout(() => {
        showToast(`CareCircle SMS Simulator: Your OTP is ${generatedOtp}`);
        speakText(`Simulated code received. Your verification code is ${generatedOtp.split('').join(' ')}.`);
        // Pre-fill input for extreme convenience
        document.getElementById('onboardOtpCode').value = generatedOtp;
      }, 1000);

      // Transition Step
      document.getElementById('onboardingStep1').classList.remove('active');
      document.getElementById('onboardingStep2').classList.add('active');
      document.getElementById('onboardingProgress').style.width = "50%";
    });
  }

  // Step 2 -> Step 3 (Verify Code)
  const onboardVerifyOtpBtn = document.getElementById('onboardVerifyOtpBtn');
  if (onboardVerifyOtpBtn) {
    onboardVerifyOtpBtn.addEventListener('click', () => {
      const enteredCode = document.getElementById('onboardOtpCode').value.trim();
      
      if (enteredCode === generatedOtp || enteredCode === "1234") {
        showToast("Phone verified successfully!");
        speakText("Phone verified successfully.");
        
        document.getElementById('onboardingStep2').classList.remove('active');
        document.getElementById('onboardingStep3').classList.add('active');
        document.getElementById('onboardingProgress').style.width = "75%";
      } else {
        showToast("Incorrect code. Try again!");
        speakText("Incorrect code. Please try again.");
      }
    });
  }

  // Step 2 Back to Step 1
  const onboardBackStep1Btn = document.getElementById('onboardBackStep1Btn');
  if (onboardBackStep1Btn) {
    onboardBackStep1Btn.addEventListener('click', () => {
      document.getElementById('onboardingStep2').classList.remove('active');
      document.getElementById('onboardingStep1').classList.add('active');
      document.getElementById('onboardingProgress').style.width = "25%";
    });
  }

  // Step 3 -> Step 4 (Continue Location)
  const onboardLocationNextBtn = document.getElementById('onboardLocationNextBtn');
  if (onboardLocationNextBtn) {
    onboardLocationNextBtn.addEventListener('click', () => {
      const city = document.getElementById('onboardCityInput').value.trim() || "Chennai";
      localStorage.setItem('city_location', city);
      
      document.getElementById('onboardingStep3').classList.remove('active');
      document.getElementById('onboardingStep4').classList.add('active');
      document.getElementById('onboardingProgress').style.width = "100%";
      updateOnboardLanguages();
    });
  }

  // Step 4 -> Complete Onboarding
  const onboardCompleteBtn = document.getElementById('onboardCompleteBtn');
  if (onboardCompleteBtn) {
    onboardCompleteBtn.addEventListener('click', () => {
      const name = document.getElementById('onboardSeniorName').value.trim();
      const phone = document.getElementById('onboardSeniorPhone').value.trim();
      const country = onboardCountrySelect.value;
      const state = onboardStateSelect.value;
      const language = onboardLanguageSelect.value;
      const cgName = document.getElementById('onboardCaregiverName').value.trim() || "Meera";
      const cgPhone = document.getElementById('onboardCaregiverPhone').value.trim() || "+91 99999 99999";
      if (phone === cgPhone) {
        showToast("Error: Senior and Caregiver numbers cannot be the same.");
        speakText("Error: Your phone number and your caregiver's phone number cannot be the same. Please enter a different contact for your caregiver.");
        return;
      }

      // Save everything to localStorage
      localStorage.setItem('senior_name', name);
      localStorage.setItem('senior_phone', phone);
      localStorage.setItem('country_profile', country);
      localStorage.setItem('indian_state', state);
      localStorage.setItem('display_lang', language);
      localStorage.setItem('caregiver_name', cgName);
      localStorage.setItem('caregiver_phone', cgPhone);

      // Seed caregiver contact into family list
      const defaultContacts = [
        { id: 'fam_seed', name: cgName, relation: "Caregiver", phone: cgPhone, location: country }
      ];
      localStorage.setItem('family_contacts', JSON.stringify(defaultContacts));
      localStorage.setItem('companion_name', mascots[country] ? mascots[country].name : "Sathi");
      localStorage.setItem('onboarding_completed', 'true');

      // Calibrate settings modal forms to stay in sync
      document.getElementById('seniorNameInput').value = name;
      document.getElementById('cityInput').value = localStorage.getItem('city_location') || "Chennai";
      document.getElementById('countrySelect').value = country;
      document.getElementById('stateSelect').value = state;
      document.getElementById('caregiverNameInput').value = cgName;
      document.getElementById('caregiverPhoneInput').value = cgPhone;
      document.getElementById('companionNameInput').value = mascots[country] ? mascots[country].name : "Sathi";

      // Calibrate companion engine
      initializeCultureEngine(country);
      localizeApp(language);

      // Hide wizard
      if (onboardingWizard) onboardingWizard.classList.add('d-none');

      // Reassuring speak
      speakText(`Welcome, ${name}! Setup completed. I am ${mascots[country] ? mascots[country].name : "Sathi"}, your companion.`);
      showToast("Account activated!");
    });
  }

  // --- C. HIDDEN DEVELOPER QA DRAWER TRIGGER ---
  let mascotClickCount = 0;
  let lastMascotClickTime = 0;

  const handleMascotGesture = () => {
    const now = Date.now();
    if (now - lastMascotClickTime > 3000) {
      mascotClickCount = 0;
    }
    mascotClickCount++;
    lastMascotClickTime = now;

    if (mascotClickCount >= 5) {
      mascotClickCount = 0;
      const drawer = document.getElementById('qaDevDrawer');
      if (drawer) {
        drawer.classList.toggle('open');
        showToast(drawer.classList.contains('open') ? "Developer QA board opened" : "Developer QA board closed");
      }
    }
  };

  // Attach 5-tap gesture to mascot avatar on Chat panel, companion orb on hub, or header profile
  const chatAvatarOrb = document.getElementById('companionAvatarOrb');
  if (chatAvatarOrb) {
    chatAvatarOrb.addEventListener('click', handleMascotGesture);
  }
  const companionOrbCore = document.getElementById('companionOrbCore');
  if (companionOrbCore) {
    companionOrbCore.addEventListener('click', handleMascotGesture);
  }
  const headerAvatarImg = document.querySelector('.avatar-image');
  if (headerAvatarImg) {
    headerAvatarImg.addEventListener('click', handleMascotGesture);
  }

  // Close Dev Drawer
  const closeQaDrawerBtn = document.getElementById('closeQaDrawerBtn');
  if (closeQaDrawerBtn) {
    closeQaDrawerBtn.addEventListener('click', () => {
      document.getElementById('qaDevDrawer').classList.remove('open');
    });
  }

  // QA Board click forwards to the hidden original simulation buttons
  document.getElementById('qaDevDrawer').addEventListener('click', (e) => {
    const target = e.target;
    if (target.id === 'simulateWeatherCheckinOverdueBtn_qa') {
      const orig = document.getElementById('simulateWeatherCheckinOverdueBtn');
      if (orig) orig.click();
    } else if (target.id === 'safetyGoingOutForceTimeoutBtn_qa') {
      const orig = document.getElementById('safetyGoingOutForceTimeoutBtn');
      if (orig) orig.click();
    } else if (target.id === 'simulateBadSleepSeriesBtn_qa') {
      const orig = document.getElementById('simulateBadSleepSeriesBtn');
      if (orig) orig.click();
    }
  });

  // QA Checkboxes bindings (Heatwave / Power outage)
  const qaHeatwave = document.getElementById('simulateHeatwave_qa');
  if (qaHeatwave) {
    qaHeatwave.addEventListener('change', () => {
      const orig = document.getElementById('simulateHeatwave');
      if (orig) {
        orig.checked = qaHeatwave.checked;
        orig.dispatchEvent(new Event('change'));
      }
    });
  }

  const qaPowerCut = document.getElementById('simulatePowerCut_qa');
  if (qaPowerCut) {
    qaPowerCut.addEventListener('change', () => {
      const orig = document.getElementById('simulatePowerCut');
      if (orig) {
        orig.checked = qaPowerCut.checked;
        orig.dispatchEvent(new Event('change'));
      }
    });
  }

  // --- D. MOTOR TREMOR SAFE TOUCH INTERCEPTOR ---
  let lastTouchTime = 0;
  let lastTouchTarget = null;

  window.addEventListener('click', (e) => {
    const isEnabled = localStorage.getItem('tremor_guard_enabled') === 'true';
    if (!isEnabled) return;

    const target = e.target.closest('button, a, select, input, .water-cup-icon, .family-quick-card');
    if (target) {
      const now = Date.now();
      // Filter out micro-tremor click jitter (double clicks within 1000ms discarded)
      if (target === lastTouchTarget && (now - lastTouchTime) < 1000) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Tremor Guard: Jitter double-click prevented.");
        return;
      }
      
      lastTouchTime = now;
      lastTouchTarget = target;

      // Add visual click flash
      target.classList.add('tremor-click-flash');
      setTimeout(() => target.classList.remove('tremor-click-flash'), 300);

      // Synthesize audio click beep and browser vibration
      if (navigator.vibrate) navigator.vibrate(35);
      
      try {
        const actx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.frequency.setValueAtTime(600, actx.currentTime);
        gain.gain.setValueAtTime(0.04, actx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.06);
        osc.start();
        osc.stop(actx.currentTime + 0.08);
      } catch (err) {}
    }
  }, true); // Capture phase click interceptor!

  // --- E. COGNITIVE RECALL FLOATING CONTEXT ANCHOR ---
  let idleTimer = null;
  const idleTimeoutMs = 45000; // 45 seconds idle trigger

  const resetIdleTimer = () => {
    // Hide recall banner if user interacts
    const banner = document.getElementById('cognitiveRecallBanner');
    if (banner && banner.classList.contains('visible')) {
      banner.classList.remove('visible');
      banner.classList.add('d-none');
    }
    
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(triggerCognitiveRecall, idleTimeoutMs);
  };

  const triggerCognitiveRecall = () => {
    // Exit early if onboarding is not completed
    if (localStorage.getItem('onboarding_completed') !== 'true') return;

    // Check active panel view
    const activePanel = document.querySelector('.view-panel.active');
    if (!activePanel) return;

    let viewName = "Today's Hub";
    let viewHelp = "check your daily schedule, check your promises checklist, or verify medicines";

    const viewId = activePanel.id;
    if (viewId === 'family-view') {
      viewName = "Family Circle";
      viewHelp = "send a blessing, check calling timezones, or chat with Meera and Arun";
    } else if (viewId === 'companion-view') {
      viewName = "AI Companion";
      viewHelp = "have a friendly, open-ended voice conversation with Sathi";
    } else if (viewId === 'services-view') {
      viewName = "Local Helpers";
      viewHelp = "book verified neighborhood support workers for groceries, plumbing, or rides";
    } else if (viewId === 'safety-view') {
      viewName = "Safety Guardian";
      viewHelp = "check your return promise timer, lock doorway scam filters, or verify official notices";
    } else if (viewId === 'health-view') {
      viewName = "Health & Mood";
      viewHelp = "record vitals, log diaries, or listen to the Tinnitus Soundscape Masker";
    } else if (viewId === 'docs-view') {
      viewName = "Secure Vault";
      viewHelp = "store files, lock private legacy organizers, or check utility bills";
    }

    const seniorName = localStorage.getItem('senior_name') || "Lakshmi Raman";
    
    document.getElementById('recallTitle').textContent = `Welcome back, ${seniorName}.`;
    document.getElementById('recallText').textContent = `You are looking at your ${viewName}. You can use this screen to ${viewHelp}.`;

    const banner = document.getElementById('cognitiveRecallBanner');
    if (banner) {
      banner.classList.remove('d-none');
      banner.classList.add('visible');
    }

    speakText(`Welcome back, ${seniorName}. You are viewing your ${viewName}.`);
  };

  // Bind idle reset triggers
  window.addEventListener('mousemove', resetIdleTimer);
  window.addEventListener('keydown', resetIdleTimer);
  window.addEventListener('scroll', resetIdleTimer);
  window.addEventListener('click', resetIdleTimer);

  const closeRecallBannerBtn = document.getElementById('closeRecallBannerBtn');
  if (closeRecallBannerBtn) {
    closeRecallBannerBtn.addEventListener('click', () => {
      document.getElementById('cognitiveRecallBanner').classList.remove('visible');
      document.getElementById('cognitiveRecallBanner').classList.add('d-none');
    });
  }

  resetIdleTimer(); // Start idle timer immediately on load

  // --- F. TINNITUS & COMFORT SOUNDSCAPES SYNTHESIZER ---
  let tinnitusAudioCtx = null;
  let tinnitusNoiseSource = null;
  let tinnitusVolumeNode = null;
  let birdChirpTimer = null;
  let isSoundscapePlaying = false;

  const playMaskerBtn = document.getElementById('playMaskerBtn');
  const maskerType = document.getElementById('maskerType');
  const maskerVolume = document.getElementById('maskerVolume');
  const maskerVolumeVal = document.getElementById('maskerVolumeVal');

  if (maskerVolume) {
    maskerVolume.addEventListener('input', () => {
      if (maskerVolumeVal) maskerVolumeVal.textContent = `${maskerVolume.value}%`;
      if (tinnitusVolumeNode && tinnitusAudioCtx) {
        tinnitusVolumeNode.gain.setValueAtTime(maskerVolume.value / 100, tinnitusAudioCtx.currentTime);
      }
    });
  }

  const stopTinnitusSoundscape = () => {
    if (tinnitusNoiseSource) {
      try {
        tinnitusNoiseSource.stop();
      } catch (e) {}
      tinnitusNoiseSource = null;
    }
    if (birdChirpTimer) {
      clearTimeout(birdChirpTimer);
      birdChirpTimer = null;
    }
    isSoundscapePlaying = false;
    if (playMaskerBtn) playMaskerBtn.textContent = "▶ Play Soundscape";
  };

  const startTinnitusSoundscape = () => {
    stopTinnitusSoundscape();
    const type = maskerType ? maskerType.value : "none";
    if (type === "none") return;

    // Premium upgrade lock checks
    const isPremium = localStorage.getItem('is_premium') === 'true';
    if (!isPremium) {
      const paywallModal = document.getElementById('premiumPaywallModal');
      if (paywallModal && paywallModal.showModal) {
        paywallModal.showModal();
        return;
      }
    }

    if (!tinnitusAudioCtx) {
      tinnitusAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (tinnitusAudioCtx.state === 'suspended') {
      tinnitusAudioCtx.resume();
    }

    tinnitusVolumeNode = tinnitusAudioCtx.createGain();
    tinnitusVolumeNode.gain.setValueAtTime((maskerVolume ? maskerVolume.value : 50) / 100, tinnitusAudioCtx.currentTime);
    tinnitusVolumeNode.connect(tinnitusAudioCtx.destination);

    if (type === 'white' || type === 'pink' || type === 'brown') {
      // Synthesize noise buffer
      const bufferSize = 2 * tinnitusAudioCtx.sampleRate;
      const noiseBuffer = tinnitusAudioCtx.createBuffer(1, bufferSize, tinnitusAudioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (type === 'white') {
          output[i] = white;
        } else if (type === 'pink') {
          output[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = output[i];
        } else if (type === 'brown') {
          output[i] = (lastOut + (0.02 * white)) / 1.01;
          lastOut = output[i];
        }
      }
      
      tinnitusNoiseSource = tinnitusAudioCtx.createBufferSource();
      tinnitusNoiseSource.buffer = noiseBuffer;
      tinnitusNoiseSource.loop = true;
      tinnitusNoiseSource.connect(tinnitusVolumeNode);
      tinnitusNoiseSource.start();
    } 
    else if (type === 'ambient_rain') {
      // Synthesize rain using lowpassed noise buffer
      const bufferSize = 3 * tinnitusAudioCtx.sampleRate;
      const noiseBuffer = tinnitusAudioCtx.createBuffer(1, bufferSize, tinnitusAudioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const rainFilter = tinnitusAudioCtx.createBiquadFilter();
      rainFilter.type = 'lowpass';
      rainFilter.frequency.value = 850;

      tinnitusNoiseSource = tinnitusAudioCtx.createBufferSource();
      tinnitusNoiseSource.buffer = noiseBuffer;
      tinnitusNoiseSource.loop = true;
      tinnitusNoiseSource.connect(rainFilter);
      rainFilter.connect(tinnitusVolumeNode);
      tinnitusNoiseSource.start();
    }
    else if (type === 'ambient_birds') {
      // Periodic synthesizer bird chirping loops
      let isPlayingChirps = true;
      tinnitusNoiseSource = { stop: () => { isPlayingChirps = false; } };

      const scheduleBirdChirp = () => {
        if (!isPlayingChirps || !tinnitusAudioCtx) return;

        const osc = tinnitusAudioCtx.createOscillator();
        const gain = tinnitusAudioCtx.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(tinnitusVolumeNode);

        const now = tinnitusAudioCtx.currentTime;
        osc.frequency.setValueAtTime(2200, now);
        osc.frequency.exponentialRampToValueAtTime(3800, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(2500, now + 0.22);
        osc.frequency.exponentialRampToValueAtTime(3400, now + 0.3);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.start(now);
        osc.stop(now + 0.38);

        birdChirpTimer = setTimeout(scheduleBirdChirp, 1200 + Math.random() * 2500);
      };
      scheduleBirdChirp();
    }

    isSoundscapePlaying = true;
    if (playMaskerBtn) playMaskerBtn.textContent = "⏹ Stop Soundscape";
  };

  if (playMaskerBtn) {
    playMaskerBtn.addEventListener('click', () => {
      if (isSoundscapePlaying) {
        stopTinnitusSoundscape();
      } else {
        startTinnitusSoundscape();
      }
    });
  }

  // --- G. PREMIUM PAYWALL UPGRADE HANDLERS ---
  const premiumPaywallModal = document.getElementById('premiumPaywallModal');
  const activatePremiumBtn = document.getElementById('activatePremiumBtn');
  const closePaywallBtn = document.getElementById('closePaywallBtn');

  if (activatePremiumBtn) {
    activatePremiumBtn.addEventListener('click', () => {
      localStorage.setItem('is_premium', 'true');
      
      const toggle = document.getElementById('premiumStatusToggle');
      if (toggle) toggle.checked = true;

      if (premiumPaywallModal && premiumPaywallModal.close) {
        premiumPaywallModal.close();
      }
      
      showToast("Premium upgraded successfully!");
      speakText("Congratulations! Your account has been upgraded to Premium.");
    });
  }

  if (closePaywallBtn && premiumPaywallModal) {
    closePaywallBtn.addEventListener('click', () => {
      premiumPaywallModal.close();
    });
  }

  // Check onboarding on startup
  checkOnboardingOnLoad();
  
  // Apply initial Tremor Guard body class
  if (localStorage.getItem('tremor_guard_enabled') === 'true') {
    document.body.classList.add('tremor-guard-active');
  }

  // --- H. CERTAINTY RECEIPTS VAULT LOGIC ---
  const certaintyDialogModal = document.getElementById('certaintyDialogModal');
  const confirmCertaintyBtn = document.getElementById('confirmCertaintyBtn');
  const cancelCertaintyBtn = document.getElementById('cancelCertaintyBtn');

  if (confirmCertaintyBtn) {
    confirmCertaintyBtn.addEventListener('click', () => {
      if (typeof pendingCertaintyAction === 'function') {
        pendingCertaintyAction();
        pendingCertaintyAction = null;
      }
      if (certaintyDialogModal && certaintyDialogModal.close) certaintyDialogModal.close();
    });
  }

  if (cancelCertaintyBtn && certaintyDialogModal) {
    cancelCertaintyBtn.addEventListener('click', () => {
      pendingCertaintyAction = null;
      certaintyDialogModal.close();
    });
  }

  // Initial render of certainty receipts
  renderCertaintyReceipts();

  // --- I. ADD/SYNC FAMILY CONTACTS DIALOG LOGIC ---
  const addFamilyContactModal = document.getElementById('addFamilyContactModal');
  const openAddFamilyContactBtn = document.getElementById('openAddFamilyContactBtn');
  const closeAddFamilyContactBtn = document.getElementById('closeAddFamilyContactBtn');
  const addFamilyContactForm = document.getElementById('addFamilyContactForm');

  if (openAddFamilyContactBtn && addFamilyContactModal) {
    openAddFamilyContactBtn.addEventListener('click', () => {
      document.getElementById('famContactName').value = "";
      document.getElementById('famContactPhone').value = "";
      addFamilyContactModal.showModal();
    });
  }

  if (closeAddFamilyContactBtn && addFamilyContactModal) {
    closeAddFamilyContactBtn.addEventListener('click', () => {
      addFamilyContactModal.close();
    });
  }

  if (addFamilyContactForm) {
    addFamilyContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('famContactName').value.trim();
      const relation = document.getElementById('famContactRelation').value;
      const phone = document.getElementById('famContactPhone').value.trim();
      const location = document.getElementById('famContactLocation').value;

      const seniorPhone = localStorage.getItem('senior_phone') || "";
      if (seniorPhone && phone === seniorPhone) {
        showToast("Error: Family contact cannot have your phone number.");
        speakText("Error: Family contact cannot have your phone number.");
        return;
      }

      const caregiverPhone = localStorage.getItem('caregiver_phone') || "";
      if (caregiverPhone && phone === caregiverPhone) {
        showToast("Error: Family contact cannot have your caregiver's phone number.");
        speakText("Error: Family contact cannot have your caregiver's phone number.");
        return;
      }

      const contacts = JSON.parse(localStorage.getItem('family_contacts') || '[]');
      if (contacts.some(c => c.phone === phone)) {
        showToast("Error: This phone number is already in your family contacts.");
        speakText("Error: This phone number is already in your family contacts.");
        return;
      }

      contacts.push({ id: 'fam_' + Date.now(), name, relation, phone, location });
      localStorage.setItem('family_contacts', JSON.stringify(contacts));

      renderFamilyContacts();
      if (typeof renderFamilyCirclePage === 'function') renderFamilyCirclePage();
      if (addFamilyContactModal && addFamilyContactModal.close) addFamilyContactModal.close();
      
      showToast(`${name} added to family contacts!`);
      speakText(`${name} added to family circle.`);
    });
  }

  // Initial render of family contacts & Family Circle page
  renderFamilyContacts();
  if (typeof renderFamilyCirclePage === 'function') {
    renderFamilyCirclePage();
  }

  // Add Contact button click listener in Family tab
  const circleOpenAddContactBtn = document.getElementById('circleOpenAddContactBtn');
  if (circleOpenAddContactBtn && addFamilyContactModal) {
    circleOpenAddContactBtn.addEventListener('click', () => {
      document.getElementById('famContactName').value = "";
      document.getElementById('famContactPhone').value = "";
      addFamilyContactModal.showModal();
    });
  }

  // --- K. SERVICES MARKETPLACE CATEGORY FILTERS & CUSTOM ADD ---
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      if (typeof renderServicesMarketplace === 'function') {
        renderServicesMarketplace(filter);
      }
    });
  });

  const addCustomServiceModal = document.getElementById('addCustomServiceModal');
  const openAddCustomServiceBtn = document.getElementById('openAddCustomServiceBtn');
  const closeAddCustomServiceBtn = document.getElementById('closeAddCustomServiceBtn');
  const addCustomServiceForm = document.getElementById('addCustomServiceForm');

  if (openAddCustomServiceBtn && addCustomServiceModal) {
    openAddCustomServiceBtn.addEventListener('click', () => {
      document.getElementById('srvName').value = "";
      document.getElementById('srvBlurb').value = "";
      document.getElementById('srvPrice').value = "";
      addCustomServiceModal.showModal();
    });
  }

  if (closeAddCustomServiceBtn && addCustomServiceModal) {
    closeAddCustomServiceBtn.addEventListener('click', () => {
      addCustomServiceModal.close();
    });
  }

  if (addCustomServiceForm) {
    addCustomServiceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('srvName').value.trim();
      const category = document.getElementById('srvCategory').value;
      const blurb = document.getElementById('srvBlurb').value.trim();
      const price = document.getElementById('srvPrice').value.trim();

      const customServices = JSON.parse(localStorage.getItem('custom_local_services') || '[]');
      customServices.push({ id: 'srv_' + Date.now(), name, category, blurb, price });
      localStorage.setItem('custom_local_services', JSON.stringify(customServices));

      const activeBtn = document.querySelector('.filter-tab-btn.active');
      const activeFilter = activeBtn ? activeBtn.dataset.filter : 'all';

      if (typeof renderServicesMarketplace === 'function') {
        renderServicesMarketplace(activeFilter);
      }
      if (addCustomServiceModal && addCustomServiceModal.close) addCustomServiceModal.close();

      showToast(`Custom helper ${name} added successfully!`);
      speakText(`${name} added to your local services list.`);
    });
  }
});


// ==========================================================================
// CERTAINTY RECEIPTS VAULT GLOBAL FUNCTIONS
// ==========================================================================
let pendingCertaintyAction = null;

function triggerCertaintyCheck(promptText, onConfirm) {
  const modal = document.getElementById('certaintyDialogModal');
  const prompt = document.getElementById('certaintyModalPrompt');
  if (modal && prompt) {
    prompt.textContent = promptText;
    speakText(promptText);
    pendingCertaintyAction = onConfirm;
    modal.showModal();
  } else {
    onConfirm();
  }
}

function createCertaintyReceipt(taskName, notes) {
  const receipts = JSON.parse(localStorage.getItem('certainty_receipts') || '[]');
  const newReceipt = {
    id: 'rec_' + Date.now(),
    taskName: taskName,
    timestamp: new Date().toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    notes: notes
  };
  receipts.unshift(newReceipt);
  localStorage.setItem('certainty_receipts', JSON.stringify(receipts));
  renderCertaintyReceipts();
  
  if (typeof logFamilyChatSystem === 'function') {
    logFamilyChatSystem(`Certainty Check: ${taskName} verified. Notes: "${notes}"`);
  }
}

function renderCertaintyReceipts() {
  const container = document.getElementById('certaintyReceiptsList');
  if (!container) return;
  
  const receipts = JSON.parse(localStorage.getItem('certainty_receipts') || '[]');
  if (receipts.length === 0) {
    container.innerHTML = '<p class="text-muted text-center" style="font-size: var(--font-xs); margin: 15px 0;">No physical confirmations logged today.</p>';
    return;
  }
  
  container.innerHTML = receipts.map(r => `
    <div class="receipt-item-card" style="background:var(--surface-soft); border:1px solid var(--border-color); border-radius:10px; padding:10px; display:flex; flex-direction:column; gap:4px; margin-bottom: 4px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong style="font-size:var(--font-xs); color:var(--color-indigo);">${r.taskName}</strong>
        <span style="font-size:10px; color:var(--text-muted);">${r.timestamp}</span>
      </div>
      <p style="margin:0; font-size:11px; color:var(--text-color); font-style:italic;">✓ ${r.notes}</p>
    </div>
  `).join('');
}

// ==========================================================================
// DYNAMIC FAMILY CONTACTS MANAGER FUNCTIONS
// ==========================================================================
function renderFamilyContacts() {
  const container = document.getElementById('familyQuickGrid');
  if (!container) return;
  
  const contacts = JSON.parse(localStorage.getItem('family_contacts') || '[]');
  
  if (contacts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; display:flex; flex-direction:column; align-items:center; gap:12px; padding:20px; background:rgba(255,255,255,0.05); border:1px dashed var(--border-color); border-radius:12px; text-align:center;">
        <span style="font-size:28px;">👪</span>
        <div>
          <strong style="display:block; font-size:var(--font-sm); color:var(--text-main); margin-bottom:4px;">No family contacts connected yet</strong>
          <span style="font-size:var(--font-xs); color:var(--text-muted);">Sync or add contacts to check timezone clocks, send blessings, and configure safety alerts.</span>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
          <button class="primary-action-btn add-btn-rel" data-relation="Daughter" style="height:32px; min-height:32px; font-size:var(--font-xs); padding:0 10px; border-radius:6px; background:var(--color-primary); color:white; border:none; cursor:pointer;">+ Add Daughter</button>
          <button class="primary-action-btn add-btn-rel" data-relation="Son" style="height:32px; min-height:32px; font-size:var(--font-xs); padding:0 10px; border-radius:6px; background:var(--color-primary); color:white; border:none; cursor:pointer;">+ Add Son</button>
          <button class="primary-action-btn add-btn-rel" data-relation="Granddaughter" style="height:32px; min-height:32px; font-size:var(--font-xs); padding:0 10px; border-radius:6px; background:var(--color-primary); color:white; border:none; cursor:pointer;">+ Add Granddaughter</button>
          <button class="primary-action-btn add-btn-rel" data-relation="Grandson" style="height:32px; min-height:32px; font-size:var(--font-xs); padding:0 10px; border-radius:6px; background:var(--color-primary); color:white; border:none; cursor:pointer;">+ Add Grandson</button>
          <button id="syncContactsBtn" style="height:32px; min-height:32px; font-size:var(--font-xs); padding:0 10px; border-radius:6px; background:rgba(255,255,255,0.1); color:var(--text-main); border:1px solid var(--border-color); cursor:pointer;">🔄 Sync Contacts</button>
        </div>
      </div>
    `;
    
    container.querySelectorAll('.add-btn-rel').forEach(btn => {
      btn.addEventListener('click', () => {
        const rel = btn.dataset.relation;
        document.getElementById('famContactRelation').value = rel;
        document.getElementById('famContactName').value = "";
        document.getElementById('famContactPhone').value = "";
        const modal = document.getElementById('addFamilyContactModal');
        if (modal && modal.showModal) modal.showModal();
      });
    });

    const syncBtn = document.getElementById('syncContactsBtn');
    if (syncBtn) {
      syncBtn.addEventListener('click', () => {
        speakText("Accessing your address book to sync family contacts... Found two immediate family members: your daughter Meera, and your son Arun. Syncing contacts now.");
        showToast("Syncing contacts from address book...");
        setTimeout(() => {
          const syncedContacts = [
            { id: 'fam_sync_1', name: "Meera", relation: "Daughter", phone: "+91 99999 99999", location: "United States" },
            { id: 'fam_sync_2', name: "Arun", relation: "Son", phone: "+91 98888 88888", location: "India" }
          ];
          localStorage.setItem('family_contacts', JSON.stringify(syncedContacts));
          renderFamilyContacts();
          showToast("Synced 2 family contacts successfully!");
          speakText("Meera and Arun synced successfully.");
        }, 2500);
      });
    }
    return;
  }
  
  const parentCountry = document.getElementById('countrySelect').value;
  container.innerHTML = contacts.map(c => {
    let avatarUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80";
    if (c.relation === 'Daughter' || c.relation === 'Granddaughter' || c.name.toLowerCase() === 'meera') {
      avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80";
    }
    
    const status = getExpatStatusForLocation(c.location, parentCountry);
    
    return `
      <button class="family-quick-card dial-family" data-contact="${c.name}" style="background:rgba(255,255,255,0.06); border:1px solid var(--border-color); border-radius:12px; padding:12px; display:flex; flex-direction:column; align-items:center; gap:8px; cursor:pointer; min-width:110px;">
        <img src="${avatarUrl}" alt="${c.name}" style="width:48px; height:48px; border-radius:50%; object-fit:cover; border:2px solid var(--border-color);">
        <strong style="font-size:var(--font-xs); text-align:center; display:block; color:var(--text-main);">${c.name} (${c.relation})</strong>
        <span class="safe-call-badge ${status.cssClass === 'status-free' ? 'safe' : (status.cssClass === 'status-work' ? 'work' : 'sleeping')}" style="font-size:9px; font-weight:700; padding:2px 6px; border-radius:4px; text-align:center;">${status.text}</span>
      </button>
    `;
  }).join('');
  
  container.querySelectorAll('.dial-family').forEach(btn => {
    btn.addEventListener('click', () => {
      const contact = btn.dataset.contact;
      dialFamilyContact(contact);
    });
  });
}

function getExpatStatusForLocation(location, parentCountry) {
  const now = new Date();
  const tzOffsets = {
    "India": 5.5,
    "United States": -5,
    "Japan": 9,
    "Brazil": -3,
    "United Arab Emirates": 4
  };
  
  const parentOffset = tzOffsets[parentCountry] || 5.5;
  const destOffset = tzOffsets[location] || 5.5;
  const diff = destOffset - parentOffset;
  
  const destTime = new Date(now.getTime() + diff * 3600000);
  const hr = destTime.getHours();
  const min = destTime.getMinutes().toString().padStart(2, '0');
  const ampm = hr >= 12 ? 'PM' : 'AM';
  const hr12 = hr % 12 || 12;
  const timeStr = `${hr12}:${min} ${ampm}`;
  
  let text = '';
  let cssClass = '';
  
  if (hr >= 23 || hr < 6) {
    text = `🌙 ${timeStr} (Sleeping)`;
    cssClass = 'status-sleeping';
  } else if (hr >= 9 && hr < 17) {
    text = `💼 ${timeStr} (Work)`;
    cssClass = 'status-work';
  } else {
    text = `🟢 ${timeStr} (Free)`;
    cssClass = 'status-free';
  }
  
  return { text, cssClass };
}

function dialFamilyContact(contactName) {
  const contacts = JSON.parse(localStorage.getItem('family_contacts') || '[]');
  const c = contacts.find(item => item.name === contactName);
  if (!c) return;
  
  const parentCountry = document.getElementById('countrySelect').value;
  const status = getExpatStatusForLocation(c.location, parentCountry);
  
  if (status.cssClass === 'status-sleeping' || status.cssClass === 'status-work') {
    activeCallContact = c.name;
    const warningModal = document.getElementById('timezoneCallWarningModal');
    const warningText = document.getElementById('timezoneWarningText');
    if (warningText && warningModal) {
      let situation = status.cssClass === 'status-sleeping' ? 'sleeping' : 'at work';
      warningText.textContent = `${c.name} is currently ${situation} in ${c.location} (${status.text.replace(/[^ -~🌙💼🟢:]/g, '').trim()}). Do you want to call anyway or send a silent voice note instead?`;
      warningModal.showModal();
    }
  } else {
    speakText(`Dialing your family ${c.relation.toLowerCase()} ${c.name} on speakerphone now.`);
    showToast(`Calling ${c.name} (${c.relation})...`);
    if (typeof logFamilyChatSystem === 'function') {
      logFamilyChatSystem(`Call connection established with ${c.name} (${c.relation})`);
    }
  }
}


// ==========================================================================
// DYNAMIC LOCAL SERVICES MARKETPLACE & FAMILY CIRCLE LIST RENDERING
// ==========================================================================
function renderServicesMarketplace(categoryFilter = 'all') {
  const container = document.getElementById('servicesMarketplaceGrid');
  if (!container) return;

  const country = document.getElementById('countrySelect').value;
  const data = countryConfigDatabase[country];
  if (!data) return;

  const langSelect = document.getElementById('languageSelect');
  const langCode = langSelect ? langSelect.value : (data.defaultLanguage || 'en');
  const localeData = data.locales[langCode] || data.locales[data.defaultLanguage];
  if (!localeData) return;

  const standardServices = localeData.services || [];
  const customServices = JSON.parse(localStorage.getItem('custom_local_services') || '[]');

  let combined = [...standardServices, ...customServices];

  if (categoryFilter !== 'all') {
    combined = combined.filter(srv => srv.category === categoryFilter);
  }

  if (combined.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; display:flex; flex-direction:column; align-items:center; gap:12px; padding:30px; background:rgba(255,255,255,0.05); border:1px dashed var(--border-color); border-radius:16px; text-align:center; width:100%;">
        <span style="font-size:36px;">🔧</span>
        <div>
          <strong style="display:block; font-size:var(--font-sm); color:var(--text-main); margin-bottom:4px;">No services in this category</strong>
          <span style="font-size:var(--font-xs); color:var(--text-muted);">You can add your own local helper by clicking the '+ Add Custom Helper' button.</span>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = combined.map(srv => `
    <div class="service-card-tile">
      <div class="service-tile-icon ${srv.category}"><span data-icon="briefcase"></span></div>
      <h3 class="service-tile-name">${srv.name}</h3>
      <p class="service-tile-blurb">${srv.blurb}</p>
      <span class="service-tile-pricing">${srv.price}</span>
      <button class="primary-action-btn book-service-btn" data-name="${srv.name}">Book Helper</button>
    </div>
  `).join('');

  // Re-inject service icons
  document.querySelectorAll('.service-card-tile [data-icon]').forEach(el => {
    el.innerHTML = icons[el.dataset.icon] || '';
  });

  // Attach marketplace actions
  document.querySelectorAll('.book-service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.target.dataset.name;
      e.target.textContent = "Booking Requested";
      e.target.disabled = true;
      e.target.style.background = "var(--border-strong)";
      showToast(`Booking request sent for ${name}`);
      logFamilyChatSystem(`Service Helper Booking Requested: ${name}`);
    });
  });
}

function renderFamilyCirclePage() {
  const grid = document.getElementById('familyContactsGrid');
  if (!grid) return;
  
  const contacts = JSON.parse(localStorage.getItem('family_contacts') || '[]');
  const parentCountry = document.getElementById('countrySelect').value;
  
  // Also populate the consent grantee dropdown list dynamically
  populateConsentGranteeDropdown();

  if (contacts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; display:flex; flex-direction:column; align-items:center; gap:12px; padding:30px; background:rgba(255,255,255,0.05); border:1px dashed var(--border-color); border-radius:16px; text-align:center;">
        <span style="font-size:36px;">👪</span>
        <div>
          <strong style="display:block; font-size:var(--font-sm); color:var(--text-main); margin-bottom:4px;">No Family Circle Members</strong>
          <span style="font-size:var(--font-xs); color:var(--text-muted);">Configure your family, grandchildren, or caregiver contacts to share safe-call timezones and emergency details.</span>
        </div>
        <button class="primary-action-btn" id="circleAddContactBtn" style="height:36px; padding:0 15px; border-radius:8px; background:var(--color-primary); color:white; border:none; cursor:pointer; font-weight:700;">+ Add Family Member</button>
      </div>
    `;
    const circleAddContactBtn = document.getElementById('circleAddContactBtn');
    if (circleAddContactBtn) {
      circleAddContactBtn.addEventListener('click', () => {
        document.getElementById('famContactName').value = "";
        document.getElementById('famContactPhone').value = "";
        const modal = document.getElementById('addFamilyContactModal');
        if (modal) modal.showModal();
      });
    }
    return;
  }
  
  grid.innerHTML = contacts.map(c => {
    let avatarUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80";
    if (c.relation === 'Daughter' || c.relation === 'Granddaughter' || c.name.toLowerCase() === 'meera') {
      avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80";
    }
    const status = getExpatStatusForLocation(c.location, parentCountry);
    
    return `
      <div class="family-person-card" style="display:flex; flex-direction:column; align-items:center;">
        <img src="${avatarUrl}" alt="${c.name}" style="width:70px; height:70px; border-radius:50%; object-fit:cover; border:2px solid var(--border-color); margin-bottom:10px;">
        <h3 style="font-size:var(--font-xs); font-weight:800; color:var(--text-main); margin:0 0 4px 0;">${c.name}</h3>
        <p style="font-size:9px; color:var(--text-muted); margin:0 0 8px 0;">${c.relation} · ${c.location}</p>
        <span class="safe-call-badge ${status.cssClass === 'status-free' ? 'safe' : (status.cssClass === 'status-work' ? 'work' : 'sleeping')}" style="font-size:9px; font-weight:700; padding:2px 6px; border-radius:4px; margin-bottom:12px;">${status.text}</span>
        <div style="display:flex; gap:6px; width:100%;">
          <button class="secondary-btn dial-circle-member" data-contact="${c.name}" style="flex:1; font-size:10px; height:28px; min-height:28px; padding:0; border-radius:6px; background:rgba(255,255,255,0.06); border:1px solid var(--border-color); color:var(--text-main); cursor:pointer;">📞 Call</button>
          <button class="secondary-btn remove-circle-member" data-id="${c.id}" style="font-size:10px; height:28px; min-height:28px; padding:0 8px; border-radius:6px; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.2); color:#ef4444; cursor:pointer;">Remove</button>
        </div>
      </div>
    `;
  }).join('');
  
  grid.querySelectorAll('.dial-circle-member').forEach(btn => {
    btn.addEventListener('click', () => {
      dialFamilyContact(btn.dataset.contact);
    });
  });
  
  grid.querySelectorAll('.remove-circle-member').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      let contacts = JSON.parse(localStorage.getItem('family_contacts') || '[]');
      contacts = contacts.filter(c => c.id !== id);
      localStorage.setItem('family_contacts', JSON.stringify(contacts));
      renderFamilyCirclePage();
      renderFamilyContacts(); // update Hub too
      showToast("Contact removed.");
    });
  });
}

function populateConsentGranteeDropdown() {
  const select = document.getElementById('consentGrantee');
  if (!select) return;
  const contacts = JSON.parse(localStorage.getItem('family_contacts') || '[]');
  
  if (contacts.length === 0) {
    select.innerHTML = '<option value="">No contacts available</option>';
    return;
  }
  
  select.innerHTML = contacts.map(c => `<option value="${c.name}">${c.name} (${c.relation})</option>`).join('');
}
