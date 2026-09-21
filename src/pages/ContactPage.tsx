import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { BASE_URL } from '../utils/seo';
import { trackFormSubmit } from '../utils/analytics';
import { Bi, mm } from '../bilingual';

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');
      trackFormSubmit('contact_form', true);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      trackFormSubmit('contact_form', false);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const officeLocation = {
    address: 'No.(2), Thuzar St, Pabaedan Qtr, Mawlamyine',
    embedUrl: 'https://maps.google.com/maps?q=Mawlamyine,+Myanmar&z=15&output=embed',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=No.2+Thuzar+St,+Pabaedan+Qtr,+Mawlamyine',
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', titleMy: 'အီးမေးလ်', detail: 'info@marketingcapsulemm.com', link: 'mailto:info@marketingcapsulemm.com' },
    { icon: Phone, title: 'Phone', titleMy: 'ဖုန်း', detail: '09 450 510 920 / 09 450 510 930', link: 'tel:+959450510920' },
    { icon: MapPin, title: 'Office', titleMy: 'ရုံးလိပ်စာ', detail: officeLocation.address, link: officeLocation.directionsUrl },
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${BASE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Marketing Capsule',
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: '+959450510920',
        contactType: 'sales',
        email: 'info@marketingcapsulemm.com',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Myanmar'],
      }],
    },
  };

  return (
    <>
      <Seo
        title="Contact Us | Marketing Capsule - Get Free Marketing Consultation & Quote"
        description="Ready to accelerate your marketing? Contact Marketing Capsule for tailored design, boosting, TikTok campaigns, and licensing support. Get in touch today for a free consultation."
        canonical={`${BASE_URL}/contact`}
        keywords="contact Marketing Capsule, marketing consultation, get quote, marketing agency contact, Myanmar marketing contact"
        jsonLd={contactSchema}
      />
      <div className="w-full overflow-x-hidden">

        {/* ============================== HERO ============================== */}
        <section className="mc-hero pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="mc-container max-w-3xl text-center">
            <div className="mc-eyebrow justify-center mb-5"><Bi en="Get In Touch" my={mm.common.getInTouch} /></div>
            <h1 className="mc-h1 mb-6"><Bi en="Contact Us" my="ဆက်သွယ်ရန်" /></h1>
            <p className="mc-lede"><Bi en="Ready to transform your marketing? Let's start a conversation about your goals." my="သင့်မားကတ်တင်းကို ပြောင်းလဲရန် အသင့်ပါလား။ သင့်ပန်းတိုင်များအကြောင်း စကားဝိုင်း စတင်ကြပါစို့။" /></p>
          </div>
        </section>

        {/* ============================== FORM + INFO ============================== */}
        <section className="mc-section mc-section--tight">
          <div className="mc-container grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="mc-h2 mb-4"><Bi en="Let's Work Together" my="အတူတကွ လုပ်ဆောင်ကြပါစို့" /></h2>
                <p className="mc-lede">
                  <Bi en="Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you within 24 hours." my="Project တစ်ခုခု စိတ်ကူးထားပါသလား။ Form ဖြည့်ပေးပါက ၂၄ နာရီအတွင်း ပြန်လည်ဆက်သွယ်ပါမည်။" />
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a key={info.title} href={info.link} className="mc-card mc-card--hover flex items-start gap-4 p-6">
                    <div className="mc-icon-tile"><info.icon className="w-5 h-5" /></div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: 'var(--mc-heading)' }}><Bi en={info.title} my={info.titleMy} /></h3>
                      <p className="text-sm mc-copy">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mc-anchor rounded-2xl p-7 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl grid place-items-center flex-shrink-0" style={{ background: 'rgba(255,255,255,.12)' }}>
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white"><Bi en="Business Hours" my="ဖွင့်ချိန်များ" /></h3>
                  <div className="space-y-0.5 text-sm" style={{ color: '#C9D4EE' }}>
                    <p><Bi en="Monday – Friday: 9:00 AM – 6:00 PM" my="တနင်္လာ - သောကြာ: မနက် ၉ နာရီ - ညနေ ၆ နာရီ" /></p>
                    <p><Bi en="Saturday: 10:00 AM – 4:00 PM" my="စနေ: မနက် ၁၀ နာရီ - ညနေ ၄ နာရီ" /></p>
                    <p><Bi en="Sunday: Closed" my="တနင်္ဂနွေ: ပိတ်" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mc-card p-8 lg:p-10">
              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="mc-icon-tile mx-auto mb-6" style={{ width: 72, height: 72 }}><CheckCircle2 className="h-9 w-9" /></div>
                  <h3 className="mc-h3 mb-3" style={{ fontSize: '1.6rem' }}><Bi en="Thank You!" my="ကျေးဇူးတင်ပါသည်!" /></h3>
                  <p className="mc-copy"><Bi en="We've received your message and will get back to you soon." my="သင့်စာကို လက်ခံရရှိပြီး မကြာမီ ပြန်လည်ဆက်သွယ်ပါမည်။" /></p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-4 rounded-xl text-sm" style={{ background: 'rgba(220,38,38,.08)', border: '1px solid rgba(220,38,38,.35)', color: '#DC2626' }}>
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--mc-heading)' }}><Bi en="Full Name *" my="အမည်အပြည့်အစုံ *" /></label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="mc-input" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--mc-heading)' }}><Bi en="Email Address *" my="အီးမေးလ်လိပ်စာ *" /></label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="mc-input" placeholder="john@example.com" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2" style={{ color: 'var(--mc-heading)' }}><Bi en="Company" my="ကုမ္ပဏီ" /></label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="mc-input" placeholder="Company Name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: 'var(--mc-heading)' }}><Bi en="Phone" my="ဖုန်းနံပါတ်" /></label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mc-input" placeholder="+95 9 000 000 000" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--mc-heading)' }}><Bi en="Message *" my="မက်ဆေ့ချ် *" /></label>
                    <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={5} className="mc-textarea" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" disabled={isLoading} className="mc-btn mc-btn-primary w-full disabled:opacity-50">
                    {isLoading ? <Bi en="Sending..." my="ပို့နေသည်..." /> : <><Bi en="Send Message" my="မက်ဆေ့ချ်ပို့ရန်" /><Send className="w-4 h-4" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ============================== MAP ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="mc-eyebrow justify-center mb-4"><Bi en="Find Us" my="ကျွန်ုပ်တို့ကို ရှာဖွေရန်" /></div>
              <h2 className="mc-h2 mb-4"><Bi en="Our Location" my="ကျွန်ုပ်တို့၏ တည်နေရာ" /></h2>
              <p className="mc-lede"><Bi en="Visit us at our office or get directions to plan your visit." my="ရုံးသို့ လာရောက်ပါ သို့မဟုတ် လမ်းညွှန်ချက်ရယူပါ။" /></p>
            </div>
            <div className="mc-card overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src={officeLocation.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Marketing Capsule office location map"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href={officeLocation.directionsUrl} target="_blank" rel="noopener noreferrer" className="mc-btn mc-btn-secondary">
                <MapPin className="w-4 h-4" /><Bi en="Get Directions" my="လမ်းညွှန်ချက် ရယူရန်" />
              </a>
            </div>
          </div>
        </section>

        {/* ============================== NOT READY CTA ============================== */}
        <section className="mc-section">
          <div className="mc-container max-w-2xl text-center">
            <h2 className="mc-h2 mb-5"><Bi en="Not ready to commit? That's okay." my="ချက်ချင်း စတင်ရန် အဆင်မပြေသေးပါလား? ရပါတယ်။" /></h2>
            <p className="mc-lede mb-8"><Bi en="Explore our services and learn more about how we can help your business grow." my="ကျွန်ုပ်တို့ ဝန်ဆောင်မှုများကို လေ့လာပြီး သင့်လုပ်ငန်း ဘယ်လိုကြီးထွားအောင် ကူညီနိုင်မလဲ လေ့လာပါ။" /></p>
            <button onClick={() => navigate('/services')} className="mc-btn mc-btn-secondary mx-auto">
              <Bi en="Explore Our Services" my={mm.common.exploreServices} /><ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
