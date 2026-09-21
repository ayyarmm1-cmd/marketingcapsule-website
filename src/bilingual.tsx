import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type SiteLanguage = 'en' | 'my';

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const mm = {
  nav: {
    home: 'ပင်မ',
    about: 'အကြောင်း',
    services: 'ဝန်ဆောင်မှုများ',
    allServices: 'ဝန်ဆောင်မှုအားလုံး',
    portfolio: 'လုပ်ငန်းများ',
    contact: 'ဆက်သွယ်ရန်',
    employeeLogin: 'ဝန်ထမ်းဝင်ရန်',
    freeConsultation: 'အခမဲ့ ဆွေးနွေးရန်',
  },
  common: {
    learnMore: 'ပိုမိုလေ့လာရန်',
    getStarted: 'စတင်ရန်',
    viewMore: 'ပိုမိုကြည့်ရန်',
    contactUs: 'ဆက်သွယ်ရန်',
    getInTouch: 'ဆက်သွယ်ရန်',
    exploreServices: 'ဝန်ဆောင်မှုများကြည့်ရန်',
    viewAllServices: 'ဝန်ဆောင်မှုအားလုံးကြည့်ရန်',
    viewPortfolio: 'လုပ်ငန်းများကြည့်ရန်',
    readMore: 'ဆက်လက်ဖတ်ရှုရန်',
    getFreeQuote: 'အခမဲ့ စျေးနှုန်းယူရန်',
  },
  footer: {
    tagline: 'သင့်လုပ်ငန်းကို တိုးတက်စေမည့် လက်တွေ့ကျသော ဒစ်ဂျစ်တယ်မားကတ်တင်း ဝန်ဆောင်မှုများ။',
    company: 'ကုမ္ပဏီ',
    services: 'ဝန်ဆောင်မှုများ',
    getInTouch: 'ဆက်သွယ်ရန်',
    businessHours: 'ဖွင့်ချိန်',
    rights: 'မူပိုင်ခွင့်အားလုံး ရယူထားပါသည်။',
    privacy: 'ကိုယ်ရေးအချက်အလက် မူဝါဒ',
    terms: 'ဝန်ဆောင်မှု စည်းမျဉ်းများ',
  },
  home: {
    heroKicker: 'မြန်မာနိုင်ငံရှိ ဒစ်ဂျစ်တယ် မားကတ်တင်း အေဂျင်စီ',
    heroTitleLine1: 'အကြံဉာဏ်ကောင်းများနှင့်',
    heroTitleLine2: 'ရလဒ်ကောင်းများ။',
    heroSubtitle:
      'Marketing Capsule သည် Social Media ဖန်တီးမှု၊ မီဒီယာထုတ်လုပ်မှု၊ Boosting၊ လိုင်စင်ရယူမှု၊ အကောင့်စီမံခန့်ခွဲမှုနှင့် အကြံဉာဏ်ပေးခြင်းများဖြင့် လုပ်ငန်းများကို လက်တွေ့ကျစွာ တိုးတက်စေပါသည်။',
    heroStat1: 'ဝန်ဆောင်မှုရယူသည့် လုပ်ငန်းများ',
    heroStat2: 'နှစ်ကာလ အတွေ့အကြုံ',
    heroStat3: 'Campaign များ စီမံခန့်ခွဲပြီး',
    heroStat4: 'လိုင်စင်များ ဆောင်ရွက်ပြီး',
    heroPanelKicker: 'ကြီးထွားမှု ဦးတည်ချက်',
    heroPanelTitle: 'ဖန်တီးမှု + ဗျူဟာ + အကောင်အထည်ဖော်မှု',
    heroPanelNote:
      'အကြောင်းအရာ၊ ဒီဇိုင်း၊ ကြော်ငြာနှင့် လည်ပတ်မှု ပံ့ပိုးမှုအားလုံးကို အဖွဲ့တစ်ဖွဲ့တည်းက ကြည့်ရှုပေးပါသည်။',
    trustedKicker: 'ယုံကြည်စိတ်ချရသော မိတ်ဖက်များ',
    trustedTitle: 'နယ်ပယ်အသီးသီးရှိ လုပ်ငန်းများနှင့် လက်တွဲလုပ်ဆောင်နေပါသည်',
    aboutKicker: 'Marketing Capsule အကြောင်း',
    aboutTitle: 'သင့်လုပ်ငန်းအတွက် အံဝင်ခွင်ကျဖြစ်သော မားကတ်တင်း ပံ့ပိုးမှု',
    aboutBody1:
      'လုပ်ငန်းတိုင်းကို တစ်ပုံစံတည်းသုံးမည့်အစား၊ သင့်အခြေအနေကို ကြည့်ပြီး လိုအပ်သည့် ဝန်ဆောင်မှုနှင့် ပံ့ပိုးမှုအဆင့်ကို အကြံပြုပါသည်။',
    aboutBody2:
      'ဖန်တီးမှုအလုပ်ကို လက်တွေ့ကျသော တွေးခေါ်မှု၊ ပွင့်လင်းသော ဆက်သွယ်ရေးနှင့် တိုင်းတာနိုင်သော ရလဒ်များနှင့် ပေါင်းစပ်ထားပါသည်။',
    servicesKicker: 'ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ',
    servicesTitle: 'သင့်အမှတ်တံဆိပ် အွန်လိုင်းတွင် ကြီးထွားရန် လိုအပ်သည့်အရာအားလုံး',
    servicesSubtitle:
      'ဝန်ဆောင်မှုတစ်ခုတည်းကို ရွေးချယ်နိုင်သလို၊ လက်တွေ့ကျသော ကြီးထွားမှု အစီအစဉ်တစ်ခုအဖြစ် ပေါင်းစပ်၍လည်း ရယူနိုင်ပါသည်။',
    viewService: 'ဝန်ဆောင်မှု အသေးစိတ်ကြည့်ရန်',
    whyKicker: 'ဘာကြောင့် Marketing Capsule ကို ရွေးချယ်သင့်သလဲ',
    whyTitle: 'ပထမအကြိမ် အထိမ်းအမှတ်မှ နေ့စဉ်လုပ်ငန်းစဉ်အထိ',
    why1Title: 'လုပ်ငန်းကို ဗဟိုပြုသည့် ချဉ်းကပ်မှု',
    why1Desc: 'သင့်ပန်းတိုင်နှင့် ဘတ်ဂျက်အလိုက် လိုအပ်သည့် ဝန်ဆောင်မှုသာ အကြံပြုပါသည်။',
    why2Title: 'ပွင့်လင်းမြင်သာသော အစီရင်ခံမှု',
    why2Desc: 'တိုးတက်မှုနှင့် ROI ကို ရှင်းလင်းစွာ မျှဝေပေးပါသည်။',
    why3Title: 'ပြည့်စုံသော အဖွဲ့တစ်ခု',
    why3Desc: 'ဒီဇိုင်း၊ ဗီဒီယို၊ Boosting နှင့် လိုင်စင်ကို တစ်နေရာတည်းတွင် ရယူနိုင်ပါသည်။',
    why4Title: '၆ နှစ်ကျော် ကွင်းဆင်း အတွေ့အကြုံ',
    why4Desc: 'လုပ်ငန်း ၄၅၀၀ ကျော်အတွက် လက်တွေ့ ရလဒ်ကောင်းများ ပေးအပ်ခဲ့ပါသည်။',
    processKicker: 'ကျွန်ုပ်တို့ လုပ်ဆောင်ပုံ',
    processTitle: 'ရှင်းလင်းလွယ်ကူသော လုပ်ငန်းစဉ်တစ်ခု',
    process1Title: 'သင့်လုပ်ငန်းကို နားလည်ခြင်း',
    process1Desc: 'ပန်းတိုင်၊ ပရိသတ်၊ လက်ရှိအခြေအနေနှင့် လိုချင်သော ရလဒ်ကို စတင် လေ့လာပါသည်။',
    process2Title: 'မှန်ကန်သော ဗျူဟာ တည်ဆောက်ခြင်း',
    process2Desc: 'ဖန်တီးမှု၊ အကြောင်းအရာ၊ Boosting နှင့် လည်ပတ်မှုပံ့ပိုးမှု ပေါင်းစပ်ကို အကြံပြုပါသည်။',
    process3Title: 'အကောင်အထည်ဖော်ခြင်း',
    process3Desc: 'အကြောင်းအရာ၊ ဒီဇိုင်းနှင့် Campaign များကို စတင်လွှင့်တင်ပါသည်။',
    process4Title: 'အစီရင်ခံခြင်းနှင့် ကြီးထွားစေခြင်း',
    process4Desc: 'ရလဒ်များကို စောင့်ကြည့်ပြီး၊ လက်တွေ့ရလဒ်အပေါ် အခြေခံကာ အဆက်မပြတ် တိုးတက်အောင် လုပ်ဆောင်ပါသည်။',
    testimonialsKicker: 'ဖောက်သည်များ၏ အမြင်',
    testimonialsTitle: 'ရလဒ်များကို လက်တွေ့ခံစားရသော ဆက်ဆံရေးများ',
    faqKicker: 'မေးလေ့ရှိသောမေးခွန်းများ',
    faqTitle: 'သိလိုသည်များကို ဖြေကြားပေးထားပါသည်',
    tipsKicker: 'မားကတ်တင်း အကြံပြုချက်များ',
    tipsTitle: 'သင့်လုပ်ငန်းအတွက် လက်တွေ့ကျသော အကြံပြုချက်များ',
    ctaTitle: 'သင့်လုပ်ငန်းကို ကြီးထွားစေဖို့ အသင့်ပါလား။',
    ctaSubtitle: 'ရလဒ်ကောင်းများ ဆီသို့ ရှေ့ဆက်ရန် လွယ်ကူအောင် ကူညီပေးပါမည်။',
    faq1Q: 'ဝန်ဆောင်မှုတစ်ခုတည်းကို သီးသန့်ရွေးချယ်နိုင်ပါသလား။',
    faq1A: 'နိုင်ပါသည်။ ဝန်ဆောင်မှုတစ်ခုချင်းစီကို သီးသန့်ရွေးချယ်နိုင်သလို၊ ပေါင်းစပ် Package အဖြစ်လည်း ရယူနိုင်ပါသည်။',
    faq2Q: 'ရလဒ်များကို မည်မျှကြာမြင့်မှ မြင်ရနိုင်မလဲ။',
    faq2A: 'ဝန်ဆောင်မှုအမျိုးအစားပေါ်မူတည်ပါသည်။ Boosting Campaign များအတွက် ပထမပတ်အတွင်း အချက်အလက်များ စတင်ရရှိနိုင်ပြီး၊ အမှတ်တံဆိပ် ကြီးထွားမှုအတွက် လများ ကြာနိုင်ပါသည်။',
    faq3Q: 'အွန်လိုင်းလိုင်စင် ဝန်ဆောင်မှုတွင် ဘာတွေ ပါဝင်သလဲ။',
    faq3A: 'လိုအပ်သော စာရွက်စာတမ်းများ ပြင်ဆင်ခြင်းမှ တင်သွင်းခြင်းအထိ၊ အတည်ပြုချက်ရအောင် လိုက်လံဆောင်ရွက်ပေးခြင်းအထိ ပါဝင်ပါသည်။',
    faq4Q: 'ကျွန်ုပ်တို့ ဘယ်လို ဆက်သွယ်နိုင်မလဲ။',
    faq4A: 'ဆက်သွယ်ရန် စာမျက်နှာမှ တစ်ဆင့် အခမဲ့ တိုင်ပင်ဆွေးနွေးမှု တောင်းဆိုနိုင်ပါသည်။ ၂၄ နာရီအတွင်း ပြန်လည်ဆက်သွယ်ပါမည်။',
    faq5Q: 'ဘယ်လုပ်ငန်းအမျိုးအစားတွေနဲ့ အလုပ်လုပ်ဖူးလဲ။',
    faq5A: 'စားသောက်ဆိုင်၊ ဖက်ရှင်၊ အလှအပ၊ အိမ်ခြံမြေ၊ ခရီးသွားနှင့် ပညာရေးအပါအဝင် နယ်ပယ်စုံမှ လုပ်ငန်းပေါင်း ၃၀၀၀ ကျော်နှင့် အလုပ်လုပ်ဖူးပါသည်။',
  },
} satisfies Record<string, Record<string, unknown>>;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SiteLanguage>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem('mc-language');
    return saved === 'my' ? 'my' : 'en';
  });

  const setLanguage = (next: SiteLanguage) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem('mc-language', next);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'my' ? 'my' : 'en';
    document.documentElement.dataset.language = language;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage(language === 'en' ? 'my' : 'en'),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}

/** Renders `my` when the site language is Myanmar (and `my` is provided), otherwise `en`. */
export function Bi({ en, my, className = '' }: { en: React.ReactNode; my?: React.ReactNode; className?: string }) {
  const { language } = useLanguage();
  const content = language === 'my' && my ? my : en;
  if (!className) return <>{content}</>;
  return <span className={className}>{content}</span>;
}
