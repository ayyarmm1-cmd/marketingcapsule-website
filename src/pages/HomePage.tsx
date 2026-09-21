import { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Target, Users, Award, Briefcase, Star, Quote,
  Search, Compass, Rocket, LineChart, ChevronDown, Lightbulb,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { BASE_URL } from '../utils/seo';
import { serviceDetails } from './services/serviceData';
import { Bi, mm } from '../bilingual';

const clientNames = ['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five', 'Client Six'];

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'Fashion Boutique',
    role: 'Owner',
    rating: 5,
    text: 'Marketing Capsule transformed our social media presence. Our engagement increased by 300% in just 3 months. Their team is professional, creative, and always responsive.',
  },
  {
    name: 'Michael Tan',
    company: 'Restaurant Chain',
    role: 'Marketing Director',
    rating: 5,
    text: 'The comprehensive marketing solutions they provided helped us expand to 5 new locations. Their strategic approach and creative content are unmatched.',
  },
  {
    name: 'Emily Wong',
    company: 'Beauty Clinic',
    role: 'Founder',
    rating: 5,
    text: 'Working with Marketing Capsule has been a game-changer. They handle everything from content creation to campaign management, allowing us to focus on our clients.',
  },
];

const tips = [
  {
    icon: Lightbulb,
    title: 'Post consistently, not just often',
    titleMy: 'မကြာခဏထက် မှန်မှန် Post တင်ပါ',
    body: 'A steady, predictable posting rhythm builds more trust with an audience than a burst of activity followed by silence.',
    bodyMy: 'ခဏခဏ Post တင်ခြင်းထက် ပုံမှန် အချိန်ဇယားအတိုင်း တင်ခြင်းက ပရိသတ်ရဲ့ ယုံကြည်မှုကို ပိုတည်ဆောက်ပေးပါတယ်။',
  },
  {
    icon: Target,
    title: 'Boost the post that is already working',
    titleMy: 'အလုပ်ဖြစ်နေတဲ့ Post ကို Boost လုပ်ပါ',
    body: 'Organic performance is the best signal for where ad spend will convert best — boost proven content before testing something new.',
    bodyMy: 'သဘာဝအားဖြင့် ရလဒ်ကောင်းနေတဲ့ Content ကို အရင် Boost လုပ်ခြင်းက ငွေကုန်ကျမှု အကောင်းဆုံးဖြစ်စေပါတယ်။',
  },
  {
    icon: Award,
    title: 'Get licensed before you scale',
    titleMy: 'မတိုးချဲ့မီ လိုင်စင်ရယူထားပါ',
    body: 'Sorting out online business licensing early avoids costly interruptions later, especially once ad accounts and payment partners get involved.',
    bodyMy: 'အွန်လိုင်းလိုင်စင်ကို စောစီးစွာ ဆောင်ရွက်ထားခြင်းက နောက်ပိုင်း အဆင်မပြေမှုများကို ကာကွယ်ပေးနိုင်ပါတယ်။',
  },
];

const faqs = [
  { q: 'Can I choose just one service?', a: 'Yes. Every service is available stand-alone or bundled into a wider growth package.', qMy: mm.home.faq1Q, aMy: mm.home.faq1A },
  { q: 'How soon will I see results?', a: 'It depends on the service. Boosting campaigns surface data within the first week; brand growth typically plays out over months.', qMy: mm.home.faq2Q, aMy: mm.home.faq2A },
  { q: "What's included in the online license service?", a: 'Everything from preparing the right paperwork to submission and following up until approval.', qMy: mm.home.faq3Q, aMy: mm.home.faq3A },
  { q: 'How do I get in touch?', a: 'Request a free consultation from the Contact page — we reply within 24 hours.', qMy: mm.home.faq4Q, aMy: mm.home.faq4A },
  { q: 'What kinds of businesses have you worked with?', a: 'Over 3,000 businesses across restaurants, fashion, beauty, real estate, travel, and education.', qMy: mm.home.faq5Q, aMy: mm.home.faq5A },
];

function FaqItem({ q, a, qMy, aMy }: { q: string; a: string; qMy?: string; aMy?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mc-faq-item">
      <button className="mc-faq-question" onClick={() => setOpen((v) => !v)}>
        <span><Bi en={q} my={qMy} /></span>
        <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform" style={{ color: 'var(--mc-accent)', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      {open && <div className="mc-faq-answer"><Bi en={a} my={aMy} /></div>}
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Marketing Capsule',
    url: BASE_URL,
    sameAs: ['https://www.facebook.com', 'https://www.instagram.com', 'https://www.linkedin.com', 'https://www.tiktok.com'],
    logo: `${BASE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@marketingcapsulemm.com',
      telephone: '+959450510920',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Myanmar'],
    },
  };

  return (
    <>
      <Seo
        title="Digital Marketing Agency Myanmar | Marketing Capsule - Social Media Marketing, Design & Boosting Services"
        description="Marketing Capsule crafts innovative digital marketing, design, and boosting campaigns that accelerate growth for restaurants, fashion, clinics, real estate, and more. Leading Myanmar marketing agency since 2019."
        canonical={`${BASE_URL}/`}
        image={`${BASE_URL}/logo.png`}
        keywords="digital marketing Myanmar, social media marketing, logo design, content creation, boosting service, TikTok marketing, Myanmar marketing agency, social media design, marketing consultation, online licensing"
        jsonLd={organizationSchema}
      />
      <div className="w-full overflow-x-hidden">

        {/* ============================== HERO ============================== */}
        <section className="mc-hero pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mc-container grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <div>
              <div className="mc-eyebrow mb-5"><Bi en="Digital Marketing Agency in Myanmar" my={mm.home.heroKicker} /></div>
              <h1 className="mc-h1 mb-6">
                <Bi en="Ideas are good." my={mm.home.heroTitleLine1} /><br />
                <Bi en="Results are better." my={mm.home.heroTitleLine2} />
              </h1>
              <p className="mc-lede mb-9 max-w-xl">
                <Bi
                  en="Marketing Capsule helps businesses grow with practical digital marketing solutions — from social media creative and media production to boosting, licensing, account management, and consultation."
                  my={mm.home.heroSubtitle}
                />
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <button onClick={() => navigate('/contact')} className="mc-btn mc-btn-primary">
                  <Bi en="Get a Free Consultation" my={mm.nav.freeConsultation} /><ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => navigate('/services')} className="mc-btn mc-btn-secondary">
                  <Bi en="Explore Services" my={mm.common.exploreServices} />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { value: '3000+', label: 'Businesses supported', my: mm.home.heroStat1 },
                  { value: '6+', label: 'Years of experience', my: mm.home.heroStat2 },
                  { value: '4500+', label: 'Campaigns managed', my: mm.home.heroStat3 },
                  { value: '300+', label: 'Licenses processed', my: mm.home.heroStat4 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-extrabold" style={{ color: 'var(--mc-heading)' }}>{stat.value}</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--mc-muted)' }}><Bi en={stat.label} my={stat.my} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mc-hero-panel">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="mc-eyebrow mb-2"><Bi en="Growth Focus" my={mm.home.heroPanelKicker} /></div>
                  <h2 className="mc-h3" style={{ fontSize: '1.5rem' }}><Bi en="Creative + Strategy + Execution" my={mm.home.heroPanelTitle} /></h2>
                </div>
                <div className="mc-icon-tile"><Target className="w-5 h-5" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="mc-hero-metric"><strong>3000+</strong><span><Bi en="clients served" my="ဖောက်သည်များ" /></span></div>
                <div className="mc-hero-metric"><strong>4500+</strong><span><Bi en="campaigns" my="Campaign များ" /></span></div>
                <div className="mc-hero-metric"><strong>500+</strong><span><Bi en="accounts managed" my="အကောင့်များ" /></span></div>
                <div className="mc-hero-metric"><strong>300+</strong><span><Bi en="licenses" my="လိုင်စင်များ" /></span></div>
              </div>
              <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)' }}>
                <Users className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--mc-accent)' }} />
                <p className="text-sm" style={{ color: 'var(--mc-muted)' }}>
                  <Bi en="One team for content, creative, media, advertising support, operations, and practical marketing guidance." my={mm.home.heroPanelNote} />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== CLIENT LOGOS ============================== */}
        <section className="mc-section mc-section--tight">
          <div className="mc-container">
            <p className="text-center text-sm font-semibold mb-8" style={{ color: 'var(--mc-muted)' }}>
              <Bi en="Proud to work with businesses across every industry" my={mm.home.trustedTitle} />
            </p>
            <div className="relative overflow-hidden mc-mask-fade">
              <div className="flex mc-animate-scroll" style={{ width: 'fit-content' }}>
                {[0, 1].map((loop) => (
                  <div key={loop} className="flex gap-5 flex-shrink-0 px-2.5">
                    {clientNames.map((name) => (
                      <div key={`${loop}-${name}`} className="mc-logo-tile">{name}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================== ABOUT TEASER ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mc-eyebrow mb-4"><Bi en="Marketing Capsule" my={mm.home.aboutKicker} /></div>
              <h2 className="mc-h2 mb-5"><Bi en="Marketing support built around your business." my={mm.home.aboutTitle} /></h2>
              <p className="mc-copy mb-4"><Bi en="We do not force every business into the same marketing formula. We start with your situation, then recommend the services and level of support that make sense for your goals and budget." my={mm.home.aboutBody1} /></p>
              <p className="mc-copy mb-7"><Bi en="Our work combines creative execution with practical thinking, transparent communication, and measurable outcomes." my={mm.home.aboutBody2} /></p>
              <button onClick={() => navigate('/about')} className="mc-btn mc-btn-secondary">
                <Bi en="More About Us" my="ကျွန်ုပ်တို့အကြောင်း ပိုမိုလေ့လာရန်" /><ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Briefcase, value: '2019', label: 'Founded', my: 'တည်ထောင်သည့်နှစ်' },
                { icon: Users, value: '3000+', label: 'Businesses served', my: 'ဝန်ဆောင်မှုပေးထားသည့် လုပ်ငန်းများ' },
                { icon: Award, value: '4500+', label: 'Campaigns managed', my: 'Campaign များ' },
                { icon: Target, value: 'Myanmar + Thailand', label: 'Where we operate', my: 'လုပ်ငန်းလည်ပတ်နေသည့်နေရာ' },
              ].map((item) => (
                <div key={item.label} className="mc-card p-6">
                  <div className="mc-icon-tile mb-4"><item.icon className="w-5 h-5" /></div>
                  <div className="text-xl font-extrabold mb-1" style={{ color: 'var(--mc-heading)' }}>{item.value}</div>
                  <div className="text-xs" style={{ color: 'var(--mc-muted)' }}><Bi en={item.label} my={item.my} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== SERVICES ============================== */}
        <section className="mc-section">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Our Services" my={mm.home.servicesKicker} /></div>
              <h2 className="mc-h2 mb-4"><Bi en="Everything your brand needs to grow online." my={mm.home.servicesTitle} /></h2>
              <p className="mc-lede"><Bi en="Choose one service or combine multiple services into a practical growth programme." my={mm.home.servicesSubtitle} /></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceDetails.map((service) => (
                <button
                  key={service.id}
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="mc-card mc-card--hover p-7 text-left"
                >
                  <div className="mc-icon-tile mb-5"><service.icon className="w-5 h-5" /></div>
                  <h3 className="mc-h3 mb-2">{service.name}</h3>
                  <p className="text-sm mc-copy mb-4">{service.subheadline}</p>
                  <span className="text-sm font-semibold inline-flex items-center gap-1.5" style={{ color: 'var(--mc-accent)' }}>
                    <Bi en="View Service" my={mm.home.viewService} /><ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              ))}
            </div>
            <div className="text-center mt-12">
              <button onClick={() => navigate('/services')} className="mc-btn mc-btn-secondary">
                <Bi en="See All Services" my={mm.common.viewAllServices} /><ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ============================== WHY CHOOSE US ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Why Marketing Capsule" my={mm.home.whyKicker} /></div>
              <h2 className="mc-h2"><Bi en="From first impression to everyday operations." my={mm.home.whyTitle} /></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Compass, title: 'Business-first approach', body: 'We recommend only the services that fit your goals and budget.', tMy: mm.home.why1Title, bMy: mm.home.why1Desc },
                { icon: LineChart, title: 'Transparent reporting', body: 'Growth and ROI are shared clearly, campaign by campaign.', tMy: mm.home.why2Title, bMy: mm.home.why2Desc },
                { icon: Users, title: 'One complete team', body: 'Design, video, boosting, and licensing — all in one place.', tMy: mm.home.why3Title, bMy: mm.home.why3Desc },
                { icon: Award, title: '6+ years on the ground', body: 'Real results delivered for more than 4,500 businesses.', tMy: mm.home.why4Title, bMy: mm.home.why4Desc },
              ].map((item) => (
                <div key={item.title} className="mc-card p-6">
                  <div className="mc-icon-tile mb-5"><item.icon className="w-5 h-5" /></div>
                  <h3 className="mc-h3 mb-2" style={{ fontSize: '1.05rem' }}><Bi en={item.title} my={item.tMy} /></h3>
                  <p className="text-sm mc-copy"><Bi en={item.body} my={item.bMy} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== PROCESS ============================== */}
        <section className="mc-section">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="How We Work" my={mm.home.processKicker} /></div>
              <h2 className="mc-h2"><Bi en="A simple process built for clarity." my={mm.home.processTitle} /></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Search, title: 'Understand Your Business', body: 'We begin with your goals, audience, and current challenges.', tMy: mm.home.process1Title, bMy: mm.home.process1Desc },
                { icon: Compass, title: 'Build the Right Strategy', body: 'Our team recommends the right mix of creative, content, media, and boosting.', tMy: mm.home.process2Title, bMy: mm.home.process2Desc },
                { icon: Rocket, title: 'Execute', body: 'Content, design, and campaigns go live across the right channels.', tMy: mm.home.process3Title, bMy: mm.home.process3Desc },
                { icon: LineChart, title: 'Report & Grow', body: 'We monitor performance and keep improving based on real results.', tMy: mm.home.process4Title, bMy: mm.home.process4Desc },
              ].map((step, index) => (
                <div key={step.title} className="mc-card p-6 relative">
                  <div className="text-xs font-bold mb-4" style={{ color: 'var(--mc-accent)' }}>0{index + 1}</div>
                  <div className="mc-icon-tile mb-5"><step.icon className="w-5 h-5" /></div>
                  <h3 className="mc-h3 mb-2" style={{ fontSize: '1.05rem' }}><Bi en={step.title} my={step.tMy} /></h3>
                  <p className="text-sm mc-copy"><Bi en={step.body} my={step.bMy} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== TESTIMONIALS ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Client Feedback" my={mm.home.testimonialsKicker} /></div>
              <h2 className="mc-h2"><Bi en="Relationships matter as much as results." my={mm.home.testimonialsTitle} /></h2>
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

        {/* ============================== TIPS ============================== */}
        <section className="mc-section">
          <div className="mc-container">
            <div className="max-w-2xl mb-14">
              <div className="mc-eyebrow mb-4"><Bi en="Marketing Tips" my={mm.home.tipsKicker} /></div>
              <h2 className="mc-h2"><Bi en="Practical advice for your business." my={mm.home.tipsTitle} /></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tips.map((tip) => (
                <div key={tip.title} className="mc-card p-7">
                  <div className="mc-icon-tile mb-5"><tip.icon className="w-5 h-5" /></div>
                  <h3 className="mc-h3 mb-2" style={{ fontSize: '1.05rem' }}><Bi en={tip.title} my={tip.titleMy} /></h3>
                  <p className="text-sm mc-copy"><Bi en={tip.body} my={tip.bodyMy} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== FAQ ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container max-w-3xl">
            <div className="mb-10">
              <div className="mc-eyebrow mb-4"><Bi en="FAQ" my={mm.home.faqKicker} /></div>
              <h2 className="mc-h2"><Bi en="Answers to what people usually ask." my={mm.home.faqTitle} /></h2>
            </div>
            <div>
              {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} qMy={faq.qMy} aMy={faq.aMy} />)}
            </div>
          </div>
        </section>

        {/* ============================== CTA ============================== */}
        <section className="mc-anchor">
          <div className="mc-container py-20 text-center">
            <h2 className="mc-h2 mb-5"><Bi en="Ready to grow your business?" my={mm.home.ctaTitle} /></h2>
            <p className="mc-lede max-w-xl mx-auto mb-9"><Bi en="Tell us what you want to grow. We'll help you identify the right next step — without making the process complicated." my={mm.home.ctaSubtitle} /></p>
            <button onClick={() => navigate('/contact')} className="mc-btn mc-btn-primary mx-auto">
              <Bi en="Get a Free Quote" my={mm.common.getFreeQuote} /><ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
