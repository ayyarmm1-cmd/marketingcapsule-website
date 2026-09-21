import { Target, Eye, Rocket, TrendingUp, Calendar, CheckCircle, User, Star, Quote, Globe, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { BASE_URL } from '../utils/seo';
import { Bi, mm } from '../bilingual';

const teamMembers = [
  { name: 'Team Member 1', nameMy: 'အဖွဲ့ဝင် ၁', role: 'Creative Director', roleMy: 'ဖန်တီးမှု ညွှန်ကြားရေးမှူး', description: 'Leading our creative vision and ensuring exceptional design quality.', descriptionMy: 'ကျွန်တော်တို့ရဲ့ ဖန်တီးမှု ရှုထောင့်ကို ဦးဆောင်ပြီး အရည်အသွေး မြင့်မားတဲ့ ဒီဇိုင်းများကို သေချာစေပါတယ်။' },
  { name: 'Team Member 2', nameMy: 'အဖွဲ့ဝင် ၂', role: 'Marketing Strategist', roleMy: 'မားကတ်တင်း ဗျူဟာရေးဆွဲသူ', description: 'Developing data-driven marketing strategies that deliver results.', descriptionMy: 'ဒေတာအခြေခံပြီး ရလဒ်ကောင်းများ ရရှိစေတဲ့ မားကတ်းတင်း ဗျူဟာများကို ရေးဆွဲပါတယ်။' },
  { name: 'Team Member 3', nameMy: 'အဖွဲ့ဝင် ၃', role: 'Content Specialist', roleMy: 'အကြောင်းအရာ ကျွမ်းကျင်သူ', description: 'Creating engaging content that resonates with target audiences.', descriptionMy: 'ပရိသတ်များနဲ့ ဆက်သွယ်နိုင်တဲ့ စွဲမက်ဖွယ် အကြောင်းအရာများကို ဖန်တီးပါတယ်။' },
  { name: 'Team Member 4', nameMy: 'အဖွဲ့ဝင် ၄', role: 'Social Media Manager', roleMy: 'လူမှုမီဒီယာ စီမံခန့်ခွဲသူ', description: 'Managing social media presence and engaging with our community.', descriptionMy: 'လူမှုမီဒီယာ ရှေ့ဆောင်မှုကို စီမံခန့်ခွဲပြီး ကျွန်တော်တို့ရဲ့ အသိုင်းအဝိုင်းနဲ့ ဆက်သွယ်ပါတယ်။' },
  { name: 'Team Member 5', nameMy: 'အဖွဲ့ဝင် ၅', role: 'Graphic Designer', roleMy: 'ဂရပ်ဖစ် ဒီဇိုင်းနာ', description: 'Designing visually stunning graphics that capture brand essence.', descriptionMy: 'အမှတ်တံဆိပ်၏ အနှစ်သာရကို ဖမ်းယူသော မျက်စိကျွမ်းကျင်သော ဂရပ်ဖစ်များကို ဒီဇိုင်းဆွဲပါတယ်။' },
  { name: 'Team Member 6', nameMy: 'အဖွဲ့ဝင် ၆', role: 'Video Producer', roleMy: 'ဗီဒီယို ထုတ်လုပ်သူ', description: 'Producing high-quality video content that tells compelling stories.', descriptionMy: 'စွဲမက်ဖွယ် ဇာတ်လမ်းများကို ပြောပြသော အရည်အသွေး မြင့်မားသော ဗီဒီယို အကြောင်းအရာများကို ထုတ်လုပ်ပါတယ်။' },
  { name: 'Team Member 7', nameMy: 'အဖွဲ့ဝင် ၇', role: 'Account Manager', roleMy: 'အကောင့် စီမံခန့်ခွဲသူ', description: 'Building strong client relationships and ensuring satisfaction.', descriptionMy: 'ခိုင်မာသော ဖောက်သည်ဆက်ဆံရေးကို တည်ဆောက်ပြီး ကျေနပ်မှုကို သေချာစေပါတယ်။' },
  { name: 'Team Member 8', nameMy: 'အဖွဲ့ဝင် ၈', role: 'SEO Specialist', roleMy: 'SEO ကျွမ်းကျင်သူ', description: 'Optimizing online presence to maximize visibility and reach.', descriptionMy: 'မြင်သာမှုနှင့် ရောက်ရှိမှုကို အမြင့်ဆုံးဖြစ်စေရန် အွန်လိုင်း ရှေ့ဆောင်မှုကို အကောင်းဆုံးဖြစ်အောင် လုပ်ဆောင်ပါတယ်။' },
  { name: 'Team Member 9', nameMy: 'အဖွဲ့ဝင် ၉', role: 'Data Analyst', roleMy: 'ဒေတာ ခွဲခြမ်းစိတ်ဖြာသူ', description: 'Analyzing performance metrics to drive data-informed decisions.', descriptionMy: 'ဒေတာအခြေခံ ဆုံးဖြတ်ချက်များကို မောင်းနှင်ရန် စွမ်းဆောင်ရည် ကိန်းဂဏန်းများကို ခွဲခြမ်းစိတ်ဖြာပါတယ်။' },
  { name: 'Team Member 10', nameMy: 'အဖွဲ့ဝင် ၁၀', role: 'Project Coordinator', roleMy: 'စီမံကိန်း ညှိနှိုင်းသူ', description: 'Coordinating projects to ensure timely delivery and quality.', descriptionMy: 'အချိန်မီ ပေးပို့မှုနှင့် အရည်အသွေးကို သေချာစေရန် စီမံကိန်းများကို ညှိနှိုင်းပါတယ်။' },
  { name: 'Team Member 11', nameMy: 'အဖွဲ့ဝင် ၁၁', role: 'Copywriter', roleMy: 'စာရေးဆရာ', description: 'Crafting compelling copy that engages and converts audiences.', descriptionMy: 'ပရိသတ်များကို စွဲမက်စေပြီး ပြောင်းလဲစေသော စွဲမက်ဖွယ် စာသားများကို ရေးသားပါတယ်။' },
  { name: 'Team Member 12', nameMy: 'အဖွဲ့ဝင် ၁၂', role: 'Client Success Manager', roleMy: 'ဖောက်သည် အောင်မြင်မှု စီမံခန့်ခွဲသူ', description: 'Ensuring client success and fostering long-term partnerships.', descriptionMy: 'ဖောက်သည်အောင်မြင်မှုကို သေချာစေပြီး ရေရှည် မိတ်ဖက်များကို အားပေးပါတယ်။' },
];

const missionPillars = [
  {
    icon: Target,
    title: 'Client Success',
    description: "To support every client's business growth by providing the right digital marketing strategies and helping them achieve long-term success.",
    descriptionMy: 'Client တွေအတွက်လိုအပ်တဲ့ ဒစ်ဂျစ်တယ်မားကတ်တင်း Strategies တွေနဲ့ Client တိုင်းရဲ့ လုပ်ငန်းကို အောင်မြင်အောင် ကူညီဖို့။',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'To deliver effective marketing solutions by embracing new trends, creative approaches, and emerging technologies within the digital marketing industry.',
    descriptionMy: 'Marketing ဈေးကွက်ရဲ့ အသစ်အသစ်သော၊ Trends တွေ၊ တိုးတက်နေတဲ့နည်းပညာတွေကို အသုံးပြုပြီး ထိရောက်တဲ့ မားကတ်တင်း Strategies တွေ ချပြနိုင်ဖို့။',
  },
  {
    icon: TrendingUp,
    title: 'Results Orientation',
    description: 'To produce the best possible outcomes by relying on data-driven decisions and maximizing ROI for every campaign we manage.',
    descriptionMy: 'ဒေတာအချက်အလက်တွေကို အခြေခံပြီး အကောင်ဆုံး Result တွေနဲ့ ROI ရအောင်ကြိုးစားဖို့။',
  },
  {
    icon: CheckCircle,
    title: 'Ethics and Values',
    description: 'To operate with honesty, transparency, and strong professional ethics—ensuring that we remain a trustworthy and reliable agency for all our clients.',
    descriptionMy: 'ရိုးသားမှု၊ ပွင့်လင်းမြင်သာမှုနဲ့ ကျင့်ဝတ်ပြည့်ပြီး ယုံကြည်စိတ်ချရတဲ့ လုပ်ငန်းလည်ပတ်မှုတွေနဲ့ သင့်ကို ယုံကြည်စိတ်ချရတဲ့ Agency တစ်ခုဖြစ်လာဖို့ပဲဖြစ်ပါတယ်။',
  },
];

const roadmap = [
  {
    year: '2025',
    en: 'In 2025, Marketing Capsule expanded further by hiring new team members, developing a complete Employee Handbook, establishing structured internal systems, and extending our services to include TikTok channel management.',
    my: 'ယခု ၂၀၂၅ ခုနှစ်ဟာဆိုရင် ကုမ္ပဏီကိုပိုတိုးချဲ့ခဲ့ပြီး ဝန်ထမ်းအသစ်များခန့်အပ်ခြင်း၊ Employee Handbook များရေးဆွဲကာ စနစ်တကျစီစဉ်ခြင်းနှင့် Tik Tok Channel များအထိပါထပ်မံတိုးချဲ့ခဲ့တဲ့ကာလဖြစ်ပါတယ်။',
  },
  {
    year: '2027',
    en: 'By 2027, we aim to build a fully organized Client Database System and launch both the Marketing Capsule Website and Mobile Application.',
    my: '၂၀၂၇ ခုနှစ်မှာဆိုရင် Client Database စနစ်တကျတည်ဆောက်ပြီး Marketing Capsule Website နှင့် Application များကိုပါ စီစဉ်ပေးသွားဖို့ ရည်ရွယ်ထားပါတယ်။',
  },
  {
    year: '2030',
    en: 'Looking ahead to 2030, our goal is to provide a broader range of services—including Google Ads, YouTube Ads, Website Advertising, as well as UI/UX Design Services—as part of our long-term growth and development plan.',
    my: '၂၀၃၀ မှာဆိုရင်တော့ Google Ads, Youtube Ads, Website Ads များနှင့် UI/ UX Service များအထိပါ ပေးသွားဖို့အတွက် ရည်ရွယ်ဆောင်ရွက်နေလျက်ရှိပါတယ်။',
  },
];

const testimonials = [
  { name: 'Sarah Chen', company: 'Fashion Boutique', role: 'Owner', rating: 5, text: 'Marketing Capsule transformed our social media presence. Our engagement increased by 300% in just 3 months. Their team is professional, creative, and always responsive.' },
  { name: 'Michael Tan', company: 'Restaurant Chain', role: 'Marketing Director', rating: 5, text: 'The comprehensive marketing solutions they provided helped us expand to 5 new locations. Their strategic approach and creative content are unmatched.' },
  { name: 'Emily Wong', company: 'Beauty Clinic', role: 'Founder', rating: 5, text: 'Working with Marketing Capsule has been a game-changer. They handle everything from content creation to campaign management, allowing us to focus on our clients.' },
  { name: 'David Lee', company: 'Tech Startup', role: 'CEO', rating: 5, text: 'Their data-driven approach and attention to detail have significantly improved our ROI. Marketing Capsule is truly a partner in our growth journey.' },
  { name: 'Lisa Park', company: 'E-commerce Store', role: 'Operations Manager', rating: 5, text: 'The team at Marketing Capsule understands our brand perfectly. Their creative designs and strategic campaigns have helped us reach new audiences.' },
];

const achievements = [
  { label: 'Client Served', labelMy: 'ဝန်ဆောင်မှုပေးထားသည့် ဖောက်သည်များ', value: '4500+', icon: User },
  { label: 'Countries Served', labelMy: 'ဝန်ဆောင်မှုပေးထားသည့် နိုင်ငံများ', value: '15+', icon: Globe },
  { label: 'Ad Campaign', labelMy: 'ကြော်ငြာ Campaign များ', value: '500000+', icon: Target },
  { label: 'Experiences', labelMy: 'အတွေ့အကြုံနှစ်ကာလ', value: '6 Years+', icon: Award },
];

export default function AboutPage() {
  const navigate = useNavigate();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${BASE_URL}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Marketing Capsule',
      description: 'Marketing Capsule is a Social Media Marketing Agency providing Boosting Services, Content Calendar & Content Writing, Graphic Design, and Video Production Services.',
      url: BASE_URL,
      foundingDate: '2019',
      areaServed: 'Worldwide',
    },
  };

  return (
    <>
      <Seo
        title="About Us | Marketing Capsule - Leading Digital Marketing Agency Myanmar Since 2019"
        description="Discover Marketing Capsule's mission, vision, and journey as a Social Media Marketing Agency since 2019. Learn about our team, values, and commitment to client success."
        canonical={`${BASE_URL}/about`}
        keywords="about Marketing Capsule, Myanmar marketing agency, digital marketing company, social media agency Myanmar, marketing team, company history"
        jsonLd={aboutSchema}
      />
      <div className="w-full overflow-x-hidden">

        {/* ============================== HERO ============================== */}
        <section className="mc-hero pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="mc-container max-w-3xl text-center">
            <div className="mc-eyebrow justify-center mb-5"><Bi en="About Marketing Capsule" my="Marketing Capsule အကြောင်း" /></div>
            <h1 className="mc-h1 mb-6"><Bi en="A Myanmar agency built on results, not guesswork." my="ရလဒ်ကို အခြေခံသော Myanmar Agency တစ်ခု။" /></h1>
            <p className="mc-lede">
              <Bi
                en="For you — Marketing Capsule is a Social Media Marketing Agency dedicated to providing all the essential services your online business needs: boosting, content, design, and video production for every major platform."
                my="သင့်အတွက် - Marketing Capsule ဟာ အွန်လိုင်းလုပ်ငန်းတိုင်းအတွက် လိုအပ်တဲ့ Boosting, Content, Design နှင့် Video Production ဝန်ဆောင်မှုအားလုံးကို Client စိတ်တိုင်းကျ ပေးဆောင်နေတဲ့ Social Media Marketing Agency တစ်ခု ဖြစ်ပါတယ်။"
              />
            </p>
          </div>
        </section>

        {/* ============================== VISION ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container grid lg:grid-cols-2 gap-10">
            <div className="mc-card p-8">
              <div className="mc-icon-tile mb-5"><Eye className="w-5 h-5" /></div>
              <h2 className="mc-h3 mb-3" style={{ fontSize: '1.6rem' }}><Bi en="Our Vision" my="ကျွန်ုပ်တို့၏ Vision" /></h2>
              <p className="mc-copy">
                <Bi
                  en="To provide the best digital marketing services for every client's business — a One-Stop Social Media Marketing Service where all essential social media services can be accessed in one place, delivered by a truly client-focused agency."
                  my="Client တိုင်းရဲ့ လုပ်ငန်းအတွက် ဒစ်ဂျစ်တယ် မားကတ်တင်း ဝန်ဆောင်မှုများကို အကောင်းဆုံးပေးနိုင်ဖို့ ရည်ရွယ်ပါတယ်။ Social Media Marketing Service များကို တစ်နေရာတည်းမှာ One-Stop Service အဖြစ် Client-Focused Agency တစ်ခုအနေနဲ့ ဆောင်ရွက်ပေးလျက်ရှိပါတယ်။"
                />
              </p>
            </div>
            <div className="mc-card p-8">
              <div className="mc-icon-tile mb-5"><Calendar className="w-5 h-5" /></div>
              <h2 className="mc-h3 mb-3" style={{ fontSize: '1.6rem' }}><Bi en="Our Journey (2019–2025)" my="ကျွန်ုပ်တို့၏ ခရီးစဉ် (၂၀၁၉-၂၀၂၅)" /></h2>
              <p className="mc-copy">
                <Bi
                  en="We began our journey in 2019 under the name Meticulous Creations. In 2023, we rebranded to Marketing Capsule. Across six years we have served more than 2,000 businesses and expanded operations into Thailand."
                  my="Marketing Capsule ဟာ ၂၀၁၉ ခုနှစ်မှာ Meticulous Creations အမည်နဲ့ စတင်ခဲ့ပါတယ်။ ၂၀၂၃ ခုနှစ်မှာ Marketing Capsule အဖြစ် ပြောင်းလဲခဲ့ပါတယ်။ နှစ် ၆ နှစ်အတွင်း လုပ်ငန်းပေါင်း ၂၀၀၀ ကျော်ကို ဝန်ဆောင်မှုပေးခဲ့ပြီး ထိုင်းနိုင်ငံအထိ တိုးချဲ့ထားပါသည်။"
                />
              </p>
            </div>
          </div>
        </section>

        {/* ============================== MISSION PILLARS ============================== */}
        <section className="mc-section">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Mission Statement" my="Mission Statement" /></div>
              <h2 className="mc-h2"><Bi en="Four pillars guide everything we do." my="ကျွန်ုပ်တို့၏ Mission — အဓိကတိုင် ၄ ခု" /></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missionPillars.map((pillar) => (
                <div key={pillar.title} className="mc-card mc-card--hover p-8">
                  <div className="mc-icon-tile mb-5"><pillar.icon className="w-5 h-5" /></div>
                  <h3 className="mc-h3 mb-3">{pillar.title}</h3>
                  <p className="text-sm mc-copy mb-3">{pillar.descriptionMy}</p>
                  <p className="text-sm mc-copy">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== FUTURE ROADMAP ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Future Plans" my="အနာဂတ် အစီအစဉ်များ" /></div>
              <h2 className="mc-h2"><Bi en="Looking ahead (2025–2030)." my="ရှေ့ကြည့်ခြင်း (၂၀၂၅-၂၀၃၀)" /></h2>
            </div>
            <div className="space-y-5">
              {roadmap.map((item) => (
                <div key={item.year} className="mc-card p-6 flex flex-col sm:flex-row gap-5 sm:items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl grid place-items-center text-xl font-extrabold" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)', color: 'var(--mc-accent)' }}>
                    {item.year}
                  </div>
                  <div>
                    <p className="text-sm mc-copy mb-1">{item.my}</p>
                    <p className="text-sm mc-copy">{item.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== FOUNDER ============================== */}
        <section className="mc-section">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Our Founder" my="ကျွန်ုပ်တို့ တည်ထောင်သူ" /></div>
              <h2 className="mc-h2"><Bi en="Meet the founder." my="တည်ထောင်သူကို မိတ်ဆက်ခြင်း" /></h2>
            </div>
            <div className="mc-card p-8 lg:p-10 grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center">
              <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--mc-primary), var(--mc-deep))' }}>
                <div className="aspect-square flex items-center justify-center flex-col gap-4 p-10 text-center text-white">
                  <div className="w-24 h-24 rounded-full grid place-items-center" style={{ background: 'rgba(255,255,255,.15)' }}>
                    <User className="w-12 h-12" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Founder &amp; CEO</div>
                    <div className="text-sm opacity-80 mt-1">6+ Years Experience</div>
                    <div className="text-sm opacity-80">4,500+ Businesses Served</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mc-h3 mb-1" style={{ fontSize: '1.6rem' }}>ခန့်ကိုကိုထက်</h3>
                <h3 className="mc-h3 mb-1" style={{ fontSize: '1.6rem' }}>KHANT KO KO HTET</h3>
                <p className="font-semibold mb-5" style={{ color: 'var(--mc-accent)' }}>CHIEF EXECUTIVE OFFICER</p>
                <p className="mc-copy mb-4">
                  Marketing Capsule ကို စတင်တည်ထောင်ခဲ့သူဖြစ်တဲ့ ကိုခန့်ကိုကိုထက်သည် (၂၀၁၉) ခုနှစ်မှာ Digital Marketing ကို ကိုယ်တိုင် Self Study လုပ်ပြီးစတင်ခဲ့ပါတယ်။ အခုဆိုရင် Digital Marketing လုပ်ခဲ့တဲ့ သက်တမ်းအတွေ့အကြုံပေါင်း (၆) နှစ်ကျော်ရှိခဲ့ပြီဖြစ်ပြီး လုပ်ငန်းပေါင်း (၄၅၀၀) ကျော်ကို Service ပေးခဲ့ပါတယ်။
                </p>
                <p className="mc-copy">
                  Mr. Khant Ko Ko Htet, the founder of Marketing Capsule, began his Digital Marketing career in 2019 through dedicated self-study and now brings over six years of industry experience, having provided digital marketing services to more than 4,500 businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== TEAM ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Our Team" my="ကျွန်ုပ်တို့ အဖွဲ့" /></div>
              <h2 className="mc-h2 mb-4"><Bi en="Meet the team members." my="အဖွဲ့ဝင်များကို မိတ်ဆက်ခြင်း" /></h2>
              <p className="mc-lede"><Bi en="The talented individuals who make Marketing Capsule's success possible." my="Marketing Capsule ၏ အောင်မြင်မှုကို ဖြစ်ပေါ်စေသော အဖွဲ့ဝင်များ" /></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="mc-card mc-card--hover p-7 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full grid place-items-center" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)', color: 'var(--mc-accent)' }}>
                    <User className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold mb-0.5" style={{ color: 'var(--mc-heading)' }}>{member.nameMy}</h3>
                  <h3 className="font-bold mb-2 text-sm" style={{ color: 'var(--mc-heading)' }}>{member.name}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--mc-accent)' }}>{member.roleMy} / {member.role}</p>
                  <p className="text-sm mc-copy mb-2">{member.descriptionMy}</p>
                  <p className="text-sm mc-copy">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== TESTIMONIALS ============================== */}
        <section className="mc-section">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Client Feedback" my="ဖောက်သည်များ၏ အမြင်" /></div>
              <h2 className="mc-h2"><Bi en="What our clients say." my="ဖောက်သည်များ ပြောကြားချက်" /></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="mc-card p-7">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4" style={{ color: '#F5A623', fill: '#F5A623' }} />)}
                  </div>
                  <Quote className="w-6 h-6 mb-3" style={{ color: 'var(--mc-line-strong)' }} />
                  <p className="text-sm mc-copy mb-5 italic">"{t.text}"</p>
                  <div className="pt-4" style={{ borderTop: '1px solid var(--mc-line)' }}>
                    <div className="font-bold text-sm" style={{ color: 'var(--mc-heading)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--mc-muted)' }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== ACHIEVEMENTS ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Our Achievements" my="ကျွန်ုပ်တို့၏ အောင်မြင်မှုများ" /></div>
              <h2 className="mc-h2"><Bi en="Numbers that tell the story." my="ဇာတ်လမ်းပြောသော ကိန်းဂဏန်းများ" /></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((a) => (
                <div key={a.label} className="mc-card p-7 text-center">
                  <div className="mc-icon-tile mb-4 mx-auto"><a.icon className="w-5 h-5" /></div>
                  <div className="text-3xl font-extrabold mb-2" style={{ color: 'var(--mc-heading)' }}>{a.value}</div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--mc-muted)' }}><Bi en={a.label} my={a.labelMy} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== CTA ============================== */}
        <section className="mc-anchor">
          <div className="mc-container py-20 text-center">
            <h2 className="mc-h2 mb-5"><Bi en="Ready to grow together?" my="အတူတကွ ကြီးထွားရန် အသင့်ပါလား။" /></h2>
            <p className="mc-lede max-w-xl mx-auto mb-9">
              <Bi en="Partner with us to unlock your brand's full potential and achieve extraordinary results." my="သင့်အမှတ်တံဆိပ်၏ စွမ်းဆောင်ရည်ကို အပြည့်အဝ ဖော်ထုတ်ရန် ကျွန်ုပ်တို့နှင့် လက်တွဲပါ။" />
            </p>
            <button onClick={() => navigate('/contact')} className="mc-btn mc-btn-primary mx-auto">
              <Bi en="Get in Touch" my={mm.common.getInTouch} /><ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
