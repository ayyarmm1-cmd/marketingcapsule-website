import { CheckCircle2, ArrowRight, Rocket, Users, Award, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { BASE_URL } from '../utils/seo';
import { serviceDetails } from './services/serviceData';
import { Bi, mm } from '../bilingual';

const industries = [
  'Restaurants', 'Fashion Accessories', 'Aesthetic Clinics', 'Cosmetics',
  'Jewellery', 'Real Estate', 'Travel & Tour', 'Schools', 'Clothing Brands',
];

const overviewStats = [
  { icon: Users, label: 'Clients Served', value: '3000+', description: 'Businesses elevated with end-to-end digital marketing support.' },
  { icon: Award, label: 'Portfolio Year', value: '2025', description: 'Continuous innovation with new channels, services, and teams.' },
  { icon: Briefcase, label: 'Mission', value: 'Success for Every Client', description: 'Deliver necessary strategies, measurable results, and partnerships built on trust.' },
];

const roadmap = [
  { year: '2019', title: 'Freelance Foundations', description: 'Launched Marketing Capsule as a dedicated boosting specialist for SMEs.' },
  { year: '2023', title: 'Service Expansion', description: 'Grew into a multi-disciplinary agency adding content & design and online licensing services.' },
  { year: '2025', title: 'Systemised Growth', description: 'Scaled operations with new hires, employee handbooks, and a full TikTok channel build.' },
  { year: '2027', title: 'Digital Ecosystem', description: 'Build a client database, launch an integrated application, and streamline service delivery.' },
  { year: '2030', title: 'Full-Funnel Innovators', description: 'Expand into Google Ads, YouTube Ads, and UX-focused web design for truly holistic marketing.' },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Marketing Capsule Services',
    itemListElement: serviceDetails.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.name,
      description: service.subheadline,
      provider: { '@type': 'Organization', name: 'Marketing Capsule', url: BASE_URL },
    })),
  };

  return (
    <>
      <Seo
        title="Digital Marketing Services | Marketing Capsule - Social Media, Design, Boosting & More"
        description="Explore Marketing Capsule's all-in-one digital marketing services: social media design, content creation, logo development, boosting campaigns, TikTok growth, and online licensing."
        canonical={`${BASE_URL}/services`}
        keywords="digital marketing services, social media marketing services, logo design services, content creation services, boosting services, TikTok marketing, online licensing services, Myanmar marketing services"
        jsonLd={servicesSchema}
      />
      <div className="w-full overflow-x-hidden">

        {/* ============================== HERO ============================== */}
        <section className="mc-hero pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="mc-container max-w-3xl text-center">
            <div className="mc-eyebrow justify-center mb-5"><Bi en="Marketing Capsule" my="Marketing Capsule" /></div>
            <h1 className="mc-h1 mb-6"><Bi en="Our Services & Impact" my="ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများနှင့် အကျိုးသက်ရောက်မှု" /></h1>
            <p className="mc-lede">
              <Bi
                en="All-in-one digital marketing solutions — from design and content to boosting, TikTok growth, and licensing — so ambitious brands stay visible, credible, and profitable."
                my="ဒီဇိုင်း၊ Content မှသည် Boosting, TikTok ကြီးထွားမှုနှင့် လိုင်စင်ရယူမှုအထိ ဒစ်ဂျစ်တယ် မားကတ်တင်း ဝန်ဆောင်မှု အားလုံးကို တစ်နေရာတည်းတွင် ရရှိနိုင်ပါသည်။"
              />
            </p>
          </div>
        </section>

        {/* ============================== OVERVIEW STATS ============================== */}
        <section className="mc-section mc-section--tight">
          <div className="mc-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
              {overviewStats.map((stat) => (
                <div key={stat.label} className="mc-card p-7">
                  <div className="mc-icon-tile mb-5"><stat.icon className="w-5 h-5" /></div>
                  <p className="mc-eyebrow mb-2">{stat.label}</p>
                  <h3 className="mc-h3 mb-2">{stat.value}</h3>
                  <p className="text-sm mc-copy">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="mc-card p-8 lg:p-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="mc-h3 mb-4" style={{ fontSize: '1.7rem' }}><Bi en="Vision for 2025 and Beyond" my="၂၀၂၅ နှင့်အနာဂတ်အတွက် Vision" /></h2>
                <p className="mc-copy mb-4">
                  <Bi en="Our vision is to become the most trusted digital marketing agency offering a truly all-in-one solution. From content and design to boosting and web experiences, we innovate so every client moves faster with less friction." my="Content နှင့် Design မှသည် Boosting နှင့် Web အတွေ့အကြုံအထိ All-in-one ဝန်ဆောင်မှုပေးနိုင်သော ယုံကြည်စိတ်ချရဆုံး Agency ဖြစ်လာရန် ရည်ရွယ်ပါသည်။" />
                </p>
                <p className="mc-copy">
                  <Bi en="We believe long-term partnerships are built by combining measurable performance, transparent communication, and forward-looking strategy." my="ရေရှည် မိတ်ဖက်ဆက်ဆံရေးများကို တိုင်းတာနိုင်သော စွမ်းဆောင်ရည်၊ ပွင့်လင်းသော ဆက်သွယ်ရေးနှင့် ရှေ့ကို ကြည့်သော ဗျူဟာဖြင့် တည်ဆောက်ပါသည်။" />
                </p>
              </div>
              <div className="rounded-2xl p-7" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)' }}>
                <h3 className="mc-h3 mb-3" style={{ fontSize: '1.2rem' }}><Bi en="Client Base" my="ဖောက်သည်အုပ်စု" /></h3>
                <p className="text-sm mc-copy mb-5"><Bi en="Marketing Capsule has supported more than 3000 businesses across diverse verticals, delivering tailored digital strategies for each market." my="Marketing Capsule သည် နယ်ပယ်စုံမှ လုပ်ငန်းပေါင်း ၃၀၀၀ ကျော်ကို ဝန်ဆောင်မှုပေးထားပါသည်။" /></p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {industries.map((industry) => (
                    <div key={industry} className="flex items-center gap-2 text-sm" style={{ color: 'var(--mc-text)' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--mc-accent)' }} />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== SERVICES DETAIL ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-2xl mb-16">
              <div className="mc-eyebrow mb-4"><Bi en="Services We Deliver" my="ကျွန်ုပ်တို့ ပေးအပ်သော ဝန်ဆောင်မှုများ" /></div>
              <h2 className="mc-h2 mb-4"><Bi en="Choose the exact blend your brand needs." my="သင့်အမှတ်တံဆိပ်အတွက် လိုအပ်သော ပေါင်းစပ်မှုကို ရွေးချယ်ပါ။" /></h2>
              <p className="mc-lede"><Bi en="Every service is available stand-alone or as part of a bundled growth programme." my="ဝန်ဆောင်မှုတစ်ခုချင်းစီ သို့မဟုတ် ပေါင်းစပ် Package အနေဖြင့် ရယူနိုင်ပါသည်။" /></p>
            </div>

            <div className="space-y-16">
              {serviceDetails.map((service, index) => (
                <div key={service.id} className={`grid gap-8 items-start ${index % 2 === 0 ? 'lg:grid-cols-[1.1fr_1fr]' : 'lg:grid-cols-[1fr_1.1fr]'}`}>
                  <div className={`space-y-5 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                    <div className="mc-badge"><service.icon className="w-4 h-4" style={{ color: 'var(--mc-accent)' }} />{service.tagline}</div>
                    <h3 className="mc-h3" style={{ fontSize: '1.7rem' }}>{service.headline}</h3>
                    <p className="mc-copy">{service.subheadline}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--mc-accent)' }} />
                          <span className="text-sm mc-copy">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {service.outcomes.map((outcome) => (
                        <div key={outcome.label} className="mc-hero-metric text-center">
                          <strong>{outcome.value}</strong>
                          <span>{outcome.label}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate(`/services/${service.id}`)} className="mc-btn mc-btn-secondary">
                      <Bi en="Explore Service Details" my="ဝန်ဆောင်မှု အသေးစိတ် ကြည့်ရန်" /><ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className={`mc-card p-8 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                    <h4 className="mc-h3 mb-4" style={{ fontSize: '1.15rem' }}><Bi en="Deliverables Snapshot" my="ပေးအပ်မည့်အရာများ" /></h4>
                    <ul className="space-y-2.5 mb-6">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2.5 text-sm mc-copy">
                          <span className="font-semibold flex-shrink-0" style={{ color: 'var(--mc-accent)' }}>•</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="mc-h3 mb-4" style={{ fontSize: '1.15rem' }}><Bi en="Our Process" my="ဆောင်ရွက်ပုံ" /></h4>
                    <div className="space-y-3">
                      {service.process.map((step, idx) => (
                        <div key={step.title} className="rounded-xl p-4" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)' }}>
                          <div className="text-xs font-bold mb-1" style={{ color: 'var(--mc-accent)' }}>Step {idx + 1}</div>
                          <h5 className="font-semibold text-sm mb-1" style={{ color: 'var(--mc-heading)' }}>{step.title}</h5>
                          <p className="text-xs mc-copy">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== ROADMAP ============================== */}
        <section className="mc-section">
          <div className="mc-container max-w-4xl">
            <div className="text-center mb-14">
              <div className="mc-eyebrow justify-center mb-4"><Bi en="Agency Roadmap" my="Agency လမ်းညွှန်" /></div>
              <h2 className="mc-h2"><Bi en="From freelance roots to full-service partner." my="Freelance မှစတင်ကာ ပြည့်စုံသော မိတ်ဖက်တစ်ဦးအထိ" /></h2>
            </div>
            <div className="space-y-4">
              {roadmap.map((milestone) => (
                <div key={milestone.year} className="mc-card p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl grid place-items-center text-xl font-extrabold" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)', color: 'var(--mc-accent)' }}>
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: 'var(--mc-heading)' }}>{milestone.title}</h3>
                    <p className="text-sm mc-copy">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="mc-btn mc-btn-primary">
                <Bi en="Start Your Project" my="သင့်စီမံကိန်းကို စတင်ပါ" /><ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate('/portfolio')} className="mc-btn mc-btn-secondary">
                <Bi en="View Portfolio" my={mm.common.viewPortfolio} />
              </button>
            </div>
          </div>
        </section>

        {/* ============================== CTA ============================== */}
        <section className="mc-anchor">
          <div className="mc-container py-20 text-center">
            <Rocket className="w-10 h-10 mx-auto mb-6" style={{ color: '#8FC1F2' }} />
            <h2 className="mc-h2 mb-5"><Bi en="Transform your marketing." my="သင့်မားကတ်တင်းကို ပြောင်းလဲပါ။" /></h2>
            <p className="mc-lede max-w-xl mx-auto mb-9"><Bi en="Let's discuss how our services can help transform your marketing strategy and drive exponential growth." my="ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများက သင့်ဗျူဟာကို ဘယ်လိုကူညီနိုင်မလဲဆိုတာ ဆွေးနွေးကြပါစို့။" /></p>
            <button onClick={() => navigate('/contact')} className="mc-btn mc-btn-primary mx-auto">
              <Bi en="Contact Us Today" my={mm.common.contactUs} /><ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
