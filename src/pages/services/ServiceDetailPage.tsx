import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Seo from '../../components/Seo';
import { BASE_URL } from '../../utils/seo';
import { serviceDetails } from './serviceData';
import { Bi, mm } from '../../bilingual';

function PriceCard({ badge, title, duration, price, oldPrice, items, note, featured, onCta }: {
  badge?: string; title: string; duration?: string; price: string; oldPrice?: string;
  items: string[]; note?: string; featured?: boolean; onCta: () => void;
}) {
  return (
    <div className={`mc-card p-6 relative ${featured ? '' : ''}`} style={featured ? { borderColor: 'var(--mc-accent)', borderWidth: 2 } : undefined}>
      {badge && (
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold uppercase" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)', color: 'var(--mc-accent)' }}>
          {badge}
        </div>
      )}
      <div className="flex items-center justify-between mb-4 pr-16">
        <h3 className="font-bold" style={{ color: 'var(--mc-heading)' }}>{title}</h3>
        {duration && <span className="text-xs flex-shrink-0" style={{ color: 'var(--mc-muted)' }}>{duration}</span>}
      </div>
      <div className="mb-4">
        {oldPrice && <span className="text-sm line-through mr-2" style={{ color: 'var(--mc-muted)' }}>{oldPrice}</span>}
        <span className="text-2xl font-extrabold" style={{ color: 'var(--mc-heading)' }}>{price}</span>
        <span className="text-sm ml-2" style={{ color: 'var(--mc-muted)' }}>MMK</span>
      </div>
      <ul className="space-y-2 mb-5 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2" style={{ color: 'var(--mc-text)' }}>
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--mc-accent)' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {note && <p className="text-xs mb-4" style={{ color: 'var(--mc-muted)' }}>{note}</p>}
      <button onClick={onCta} className={featured ? 'mc-btn mc-btn-primary w-full mc-btn-sm' : 'mc-btn mc-btn-secondary w-full mc-btn-sm'}>
        <Bi en="Get Started" my={mm.common.getStarted} />
      </button>
    </div>
  );
}

export default function ServiceDetailPage() {
  const navigate = useNavigate();
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = useMemo(() => serviceDetails.find((detail) => detail.id === serviceId), [serviceId]);

  const detailSchema = service
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.subheadline,
        areaServed: 'Worldwide',
        provider: { '@type': 'Organization', name: 'Marketing Capsule', url: BASE_URL },
        serviceType: service.headline,
      }
    : null;

  if (!service) {
    return (
      <div className="mc-section pt-40 text-center">
        <div className="mc-container max-w-xl">
          <div className="mc-badge mx-auto mb-6" style={{ width: 'fit-content' }}><Sparkles className="w-4 h-4" /> Service Not Found</div>
          <h1 className="mc-h2 mb-5">We couldn't find that service.</h1>
          <p className="mc-copy mb-8">Please head back to our services overview to explore everything Marketing Capsule offers.</p>
          <button onClick={() => navigate('/services')} className="mc-btn mc-btn-primary mx-auto">
            <ArrowLeft className="w-4 h-4" /><span>Back to Services</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${service.headline} | Marketing Capsule - ${service.name} Services`}
        description={`${service.subheadline} ${service.description.substring(0, 100)}...`}
        canonical={`${BASE_URL}/services/${service.id}`}
        keywords={`${service.name}, ${service.tagline}, digital marketing, Myanmar marketing, ${service.features.slice(0, 3).join(', ')}, Marketing Capsule ${service.name}`}
        jsonLd={detailSchema || undefined}
      />
      <div className="w-full overflow-x-hidden">

        {/* ============================== HERO ============================== */}
        <section className="mc-hero pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="mc-container max-w-3xl text-center">
            <div className="mc-badge mx-auto mb-6" style={{ width: 'fit-content' }}>
              <service.icon className="w-4 h-4" style={{ color: 'var(--mc-accent)' }} />{service.tagline}
            </div>
            <h1 className="mc-h1 mb-6">{service.headline}</h1>
            <p className="mc-lede mb-9">{service.subheadline}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate('/services')} className="mc-btn mc-btn-secondary">
                <ArrowLeft className="w-4 h-4" /><Bi en="Back to all services" my="ဝန်ဆောင်မှုအားလုံးသို့ ပြန်သွားရန်" />
              </button>
              <button onClick={() => navigate('/contact')} className="mc-btn mc-btn-primary">
                <Bi en="Start a Project" my="Project တစ်ခု စတင်ရန်" /><ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ============================== WHY IT MATTERS + OUTCOMES ============================== */}
        <section className="mc-section mc-section--tight">
          <div className="mc-container">
            <div className="mc-card p-8 lg:p-10 mb-10">
              <h2 className="mc-h3 mb-4" style={{ fontSize: '1.7rem' }}><Bi en="Why this service matters" my="ဤဝန်ဆောင်မှု ဘာကြောင့် အရေးကြီးသလဲ" /></h2>
              <p className="mc-lede">{service.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {service.outcomes.map((outcome) => (
                <div key={outcome.label} className="mc-card p-7 text-center">
                  <div className="text-3xl font-extrabold mb-2" style={{ color: 'var(--mc-heading)' }}>{outcome.value}</div>
                  <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--mc-muted)' }}>{outcome.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== FEATURES ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="mc-h2 mb-3"><Bi en="Key Features" my="အဓိက Feature များ" /></h2>
              <p className="mc-lede"><Bi en="Everything you need to succeed with this service." my="ဤဝန်ဆောင်မှုဖြင့် အောင်မြင်ရန် လိုအပ်သမျှ" /></p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature) => (
                <div key={feature} className="mc-card p-6 flex items-start gap-4">
                  <div className="mc-icon-tile flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="text-sm mc-copy pt-1.5">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== SOCIAL MEDIA CREATIVE PACKAGES ============================== */}
        {service.id === 'logo-social-media-design' && (
          <section className="mc-section">
            <div className="mc-container">
              <div className="max-w-xl mx-auto text-center mb-12">
                <div className="mc-eyebrow justify-center mb-4">Social Media Creative Service</div>
                <h2 className="mc-h2 mb-3"><Bi en="Recommendation Packages" my="အကြံပြု Package များ" /></h2>
                <p className="mc-lede"><Bi en="Packages with varying durations and inclusions. All prices in MMK." my="ကာလနှင့် ပါဝင်မှု အမျိုးမျိုးရှိသော Package များ။ စျေးနှုန်းအားလုံး MMK ဖြင့်။" /></p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <PriceCard title="🥉 Bronze" duration="2 Weeks" price="239,900" items={['Design: 5', 'Content: 5', 'Content Calendar: 1', 'Meeting: 1 time']} onCta={() => navigate('/contact')} />
                <PriceCard title="🥈 Silver" duration="1 Month" price="469,900" items={['Design: 10', 'Content: 10', 'Content Calendar: 1', 'Design: (C+1 Free)', 'Content: (C+1 Free)', 'Meeting: 1 time']} onCta={() => navigate('/contact')} />
                <PriceCard badge="Popular" featured title="🥇 Gold" duration="2 Months" price="849,900" oldPrice="889,900" items={['Design: 20', 'Content: 20', 'Content Calendar: 2', 'Design: (C+2 Free)', 'Content: (C+2 Free)', 'Meeting: 2 times']} onCta={() => navigate('/contact')} />
                <PriceCard title="💎 Diamond" duration="3 Months" price="1,049,900" items={['Design: 30', 'Content: 30', 'Content Calendar: 2', 'Design: (C+2 Free)', 'Content: (C+2 Free)', 'Content Calendar: (C+1 Free)', 'Meeting: 3 times']} onCta={() => navigate('/contact')} />
              </div>

              <div className="mc-card p-6 mb-14" style={{ background: 'var(--mc-surface-2)' }}>
                <p className="text-sm mc-copy"><span className="font-semibold" style={{ color: 'var(--mc-accent)' }}>Refinement Note (Applies to all Packages):</span> 2 times Free Refinement. If you edit one more time: (+1,500 MMK)</p>
              </div>

              <h3 className="mc-h3 mb-6 text-center" style={{ fontSize: '1.5rem' }}>🛠️ Special Design &amp; Content Service Packages</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-14">
                <PriceCard title="Special Design Service Package" price="180,000" items={['Design: 10 post', 'Gift: (C+1 post Seasonal Wish)', 'Meeting: (1) times']} note="2 times Free Refinement. If you edit one more time: +1,500 MMK" onCta={() => navigate('/contact')} />
                <PriceCard title="Special Content Service Package" price="180,000" items={['Content: 10 post', 'Gift: (C+1 post Seasonal Wish)', 'Meeting: (1) times']} note="2 times Free Refinement. If you edit one more time: +1,500 MMK" onCta={() => navigate('/contact')} />
              </div>

              <h3 className="mc-h3 mb-6 text-center" style={{ fontSize: '1.5rem' }}>💰 Social Media Quotations (Itemized Pricing)</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-14">
                <div className="mc-card p-6">
                  <h4 className="font-bold mb-4" style={{ color: 'var(--mc-heading)' }}>Social Media Content Quotation</h4>
                  <div className="space-y-2 text-sm">
                    {[['Content', '8,000 MMK'], ['Copy writing', '20,000 MMK'], ['Script', '25,000 MMK'], ['Content Calendar', '50,000 MMK']].map(([k, v]) => (
                      <div key={k} className="flex justify-between" style={{ color: 'var(--mc-text)' }}><span>{k}:</span><span className="font-semibold" style={{ color: 'var(--mc-accent)' }}>{v}</span></div>
                    ))}
                  </div>
                </div>
                <div className="mc-card p-6">
                  <h4 className="font-bold mb-4" style={{ color: 'var(--mc-heading)' }}>Social Media Design Quotation</h4>
                  <div className="space-y-2 text-sm">
                    {[['Design', '20,000 MMK'], ['Cover', '30,000 MMK'], ['Business Card', '30,000 MMK'], ['Flyers', '50,000 MMK'], ['Payment Card (QR Code)', '20,000 MMK']].map(([k, v]) => (
                      <div key={k} className="flex justify-between" style={{ color: 'var(--mc-text)' }}><span>{k}:</span><span className="font-semibold" style={{ color: 'var(--mc-accent)' }}>{v}</span></div>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="mc-h3 mb-6 text-center" style={{ fontSize: '1.5rem' }}>🎨 Logo Package</h3>
              <div className="mc-card p-6 max-w-2xl mx-auto space-y-4">
                {[
                  { name: 'Creative', price: '70,000 MMK', desc: 'Logo, PNG File, JPEG File' },
                  { name: 'Design - Focused', price: '100,000 MMK', desc: 'Logo, Brand guideline, PNG/JPEG File, PS/AI File, 2 Revisions, 2 Options' },
                  { name: 'Small Business', price: '150,000 MMK', desc: 'Logo, Cover, BC, Brand guideline, Payment Card', extra: 'Meeting: 1 time' },
                ].map((pkg) => (
                  <div key={pkg.name} className="rounded-xl p-4" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)' }}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-semibold" style={{ color: 'var(--mc-heading)' }}>{pkg.name}:</span>
                      <span className="font-bold" style={{ color: 'var(--mc-accent)' }}>{pkg.price}</span>
                    </div>
                    <p className="text-sm mc-copy">{pkg.desc}</p>
                    {pkg.extra && <p className="text-xs mt-1" style={{ color: 'var(--mc-muted)' }}>{pkg.extra}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================== CONSULTATION PACKAGES ============================== */}
        {service.id === 'consultation' && (
          <section className="mc-section">
            <div className="mc-container">
              <div className="max-w-xl mx-auto text-center mb-12">
                <div className="mc-eyebrow justify-center mb-4">💬 Digital Marketing Consultation Service</div>
                <h2 className="mc-h2 mb-3"><Bi en="Consultation Packages" my="Consultation Package များ" /></h2>
                <p className="mc-lede"><Bi en="Choose the consultation package that fits your needs. All prices in MMK." my="သင့်လိုအပ်ချက်နှင့် ကိုက်ညီသော Package ကို ရွေးချယ်ပါ။" /></p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <PriceCard title="Basic Package" duration="30 minutes" price="50,000" items={['30-minute consultation session', 'Marketing strategy guidance', 'Quick Q&A session']} onCta={() => navigate('/contact')} />
                <PriceCard badge="Recommended" featured title="Special Package" duration="1:00 hour" price="100,000" items={['1-hour comprehensive consultation', 'In-depth marketing audit', 'Customized strategy development', 'Detailed action plan']} onCta={() => navigate('/contact')} />
              </div>
            </div>
          </section>
        )}

        {/* ============================== MEDIA PRODUCTION PACKAGES ============================== */}
        {service.id === 'talent-video-editing' && (
          <section className="mc-section">
            <div className="mc-container">
              <div className="max-w-xl mx-auto text-center mb-12">
                <div className="mc-eyebrow justify-center mb-4">🎬 Media Production Service</div>
                <h2 className="mc-h2 mb-3"><Bi en="Video Production Packages" my="ဗီဒီယို ထုတ်လုပ်မှု Package များ" /></h2>
                <p className="mc-lede"><Bi en="Choose the package that fits your video production needs. All prices in MMK." my="သင့်လိုအပ်ချက်နှင့် ကိုက်ညီသော Package ကို ရွေးချယ်ပါ။" /></p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <PriceCard badge="Popular" featured title="All in one video package" price="100,000" items={['Talent', 'Video Editing', 'Voice Over', 'Sub Title', 'Script']} note="Duration: 1 min to 1:30 min · Extra minute: +20,000 for 30 second" onCta={() => navigate('/contact')} />
                <PriceCard title="Video Editing Only" price="30,000" items={[]} note="Duration: 1 to 1:30 minute · Extra minute: +19,000 for 30 second" onCta={() => navigate('/contact')} />
                <PriceCard title="Video Editing + Sub title + Voice Over" price="50,000" items={[]} note="Duration: 1 to 1:30 minute · Extra minute: +15,000 for 30 second" onCta={() => navigate('/contact')} />
                <PriceCard title="Video editing + Voice Over + Sub Title + Script" price="70,000" items={[]} note="Duration: 1 to 1:30 minute · Extra minute: +20,000 MMK for 30 second" onCta={() => navigate('/contact')} />
                <PriceCard title="Product Video Clip - VO" price="50,000" items={[]} note="Duration: Ultimate 30 second each" onCta={() => navigate('/contact')} />
              </div>

              <div className="mc-card p-6 mb-14" style={{ background: 'var(--mc-surface-2)' }}>
                <p className="text-sm mc-copy"><span className="font-semibold" style={{ color: 'var(--mc-accent)' }}>Additional Cost:</span> Production Cost extra charges: 20,000 MMK</p>
              </div>

              <div className="mc-eyebrow justify-center mb-4">✨ Creative Package</div>
              <h3 className="mc-h3 mb-6 text-center" style={{ fontSize: '1.5rem' }}>Creative Package Options</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <PriceCard title="Standard Creative Package" price="300,000" items={['Video: (C2 post) - 1:30 minute', 'Content: (C3 post)', 'Design: (C3 post)']} onCta={() => navigate('/contact')} />
                <PriceCard badge="Popular" featured title="Business Creative Package" price="450,000" items={['Video: (C3 post) - 1:30 minute', 'Content: (C5 post)', 'Design: (C5 post)']} onCta={() => navigate('/contact')} />
                <PriceCard title="Infinite Creative Package" price="600,000" items={['Video: (C4 post) - 1:30 minute', 'Content: (C7 post)', 'Design: (C7 post)']} onCta={() => navigate('/contact')} />
              </div>
              <div className="mc-card p-6" style={{ background: 'var(--mc-surface-2)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--mc-accent)' }}>Extra Charges:</p>
                <ul className="text-sm space-y-1" style={{ color: 'var(--mc-text)' }}>
                  <li>• Video extra minute charges: (+20,000 for 30 second)</li>
                  <li>• Video cost extra charges: (C 20,000 MMK)</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ============================== DELIVERABLES ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="mc-h2 mb-3"><Bi en="What You'll Receive" my="သင်ရရှိမည့်အရာများ" /></h2>
              <p className="mc-lede"><Bi en="Comprehensive deliverables included in every package." my="Package တိုင်းတွင် ပါဝင်သော ပြည့်စုံသော Deliverable များ" /></p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.deliverables.map((deliverable, index) => (
                <div key={deliverable} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)' }}>
                  <div className="mc-icon-tile flex-shrink-0" style={{ width: 32, height: 32 }}>
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-sm mc-copy pt-1">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== PROCESS ============================== */}
        <section className="mc-section">
          <div className="mc-container">
            <div className="max-w-xl mx-auto text-center mb-12">
              <div className="mc-eyebrow justify-center mb-4"><Bi en="Our Process" my="ဆောင်ရွက်ပုံ" /></div>
              <h2 className="mc-h2 mb-3"><Bi en="How We Work" my="ကျွန်ုပ်တို့ လုပ်ဆောင်ပုံ" /></h2>
              <p className="mc-lede"><Bi en="A streamlined process designed for efficiency and results." my="ထိရောက်မှုနှင့် ရလဒ်အတွက် ရေးဆွဲထားသော ရိုးရှင်းသော လုပ်ငန်းစဉ်" /></p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {service.process.map((step, idx) => (
                <div key={step.title} className="mc-card p-7">
                  <div className="mc-icon-tile mb-5"><span className="font-bold">{idx + 1}</span></div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--mc-accent)' }}>Step {idx + 1}</div>
                  <h4 className="mc-h3 mb-2" style={{ fontSize: '1.1rem' }}>{step.title}</h4>
                  <p className="text-sm mc-copy">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== CTA ============================== */}
        <section className="mc-anchor">
          <div className="mc-container py-20 text-center">
            <h2 className="mc-h2 mb-5">Ready to activate {service.name}?</h2>
            <p className="mc-lede max-w-xl mx-auto mb-9">Talk to our strategy team about how this service can plug into your roadmap, timelines, and campaign goals.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="mc-btn mc-btn-primary">
                <Bi en="Book a Strategy Call" my="ဗျူဟာ ခေါ်ဆိုမှု စာရင်းသွင်းရန်" /><ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate('/services')} className="mc-btn mc-btn-secondary">
                <Bi en="Browse All Services" my={mm.common.viewAllServices} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
