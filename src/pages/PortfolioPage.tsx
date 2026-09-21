import { useState } from 'react';
import { Briefcase, ExternalLink, Award, Paintbrush, Target, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { BASE_URL } from '../utils/seo';
import { Bi, mm } from '../bilingual';

const categories = ['All', 'Branding', 'Digital Marketing', 'Social Media', 'Web Design'];

const projects = [
  { title: 'TechFlow Rebranding', category: 'Branding', description: 'Complete brand identity redesign for a leading tech startup, including logo, color palette, and brand guidelines.', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', results: '+150% brand recognition' },
  { title: 'EcoLife Campaign', category: 'Digital Marketing', description: 'Integrated digital marketing campaign for sustainable lifestyle brand targeting millennials and Gen Z.', image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800', results: '+300% engagement rate' },
  { title: 'FitnessPro Social Strategy', category: 'Social Media', description: 'Comprehensive social media strategy and content creation for fitness app launch across all major platforms.', image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800', results: '50K+ new followers' },
  { title: 'Luxury Estates Website', category: 'Web Design', description: 'Premium real estate website with interactive property tours and advanced search functionality.', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', results: '+200% lead generation' },
  { title: 'FreshBite Brand Launch', category: 'Branding', description: 'End-to-end branding for organic food delivery service including packaging and marketing collateral.', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', results: '95% positive feedback' },
  { title: 'UrbanStyle E-commerce', category: 'Digital Marketing', description: 'Multi-channel digital marketing strategy for fashion e-commerce platform launch and growth.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', results: '$2M+ in sales' },
  { title: 'TravelMore Influencer Campaign', category: 'Social Media', description: 'Strategic influencer partnerships and content creation for travel booking platform.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800', results: '10M+ impressions' },
  { title: 'FinTech Dashboard Redesign', category: 'Web Design', description: 'User experience overhaul for financial technology platform focusing on usability and accessibility.', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800', results: '+180% user retention' },
  { title: 'WellnessHub Identity', category: 'Branding', description: 'Holistic brand development for wellness center including visual identity and brand voice.', image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800', results: '4.9/5 brand rating' },
];

const achievements = [
  { service: 'Social Media Creative Service', number: '2000+', icon: Paintbrush },
  { service: 'Clients Registration', number: '5000+', icon: Target },
  { service: 'Online License', number: '300+', icon: ShieldCheck },
  { service: 'Happy Clients', number: '3500+', icon: Users },
];

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: `${BASE_URL}/portfolio`,
    name: 'Marketing Capsule Project Portfolio',
    hasPart: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      genre: project.category,
      image: project.image,
    })),
  };

  return (
    <>
      <Seo
        title="Portfolio | Marketing Capsule - Our Work & Success Stories"
        description="See Marketing Capsule's portfolio featuring rebrands, digital marketing campaigns, social media growth, and high-converting websites."
        canonical={`${BASE_URL}/portfolio`}
        keywords="Marketing Capsule portfolio, digital marketing portfolio, social media marketing examples, branding portfolio, marketing case studies, Myanmar marketing portfolio"
        jsonLd={portfolioSchema}
      />
      <div className="w-full overflow-x-hidden">

        {/* ============================== HERO ============================== */}
        <section className="mc-hero pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="mc-container max-w-3xl text-center">
            <div className="mc-eyebrow justify-center mb-5"><Bi en="Our Work" my="ကျွန်ုပ်တို့ အလုပ်များ" /></div>
            <h1 className="mc-h1 mb-6"><Bi en="Portfolio" my="Portfolio" /></h1>
            <p className="mc-lede"><Bi en="Explore our projects and the results we've delivered for our clients." my="ကျွန်ုပ်တို့၏ Project များနှင့် ဖောက်သည်များအတွက် ပေးအပ်ခဲ့သော ရလဒ်များကို ကြည့်ရှုပါ။" /></p>
          </div>
        </section>

        {/* ============================== ACHIEVEMENTS ============================== */}
        <section className="mc-section mc-section--tight">
          <div className="mc-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((a) => (
                <div key={a.service} className="mc-card p-7 text-center">
                  <div className="mc-icon-tile mb-4 mx-auto"><a.icon className="w-5 h-5" /></div>
                  <div className="text-3xl font-extrabold mb-2" style={{ color: 'var(--mc-heading)' }}>{a.number}</div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--mc-muted)' }}>{a.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== PROJECTS ============================== */}
        <section className="mc-section mc-section--alt">
          <div className="mc-container">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="mc-h2 mb-4"><Bi en="Featured Projects" my="ထူးထူးခြားခြား Project များ" /></h2>
              <p className="mc-lede"><Bi en="A showcase of our most impactful work." my="ကျွန်ုပ်တို့၏ အထူးအကျိုးသက်ရောက်သော အလုပ်များ" /></p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`mc-tab ${activeCategory === category ? 'mc-tab--active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProjects.map((project) => (
                <div key={project.title} className="mc-card mc-card--hover overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide" style={{ background: 'rgba(2,12,71,.75)', color: '#fff' }}>
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="mc-h3 mb-2" style={{ fontSize: '1.15rem' }}>{project.title}</h3>
                    <p className="text-sm mc-copy mb-5 flex-grow">{project.description}</p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--mc-line)' }}>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" style={{ color: 'var(--mc-accent)' }} />
                        <span className="text-sm font-semibold" style={{ color: 'var(--mc-accent)' }}>{project.results}</span>
                      </div>
                      <ExternalLink className="h-4 w-4" style={{ color: 'var(--mc-muted)' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== CTA ============================== */}
        <section className="mc-anchor">
          <div className="mc-container py-20 text-center">
            <Briefcase className="w-10 h-10 mx-auto mb-6" style={{ color: '#8FC1F2' }} />
            <h2 className="mc-h2 mb-5"><Bi en="Ready to start your project?" my="သင့် Project ကို စတင်ရန် အသင့်ပါလား။" /></h2>
            <p className="mc-lede max-w-xl mx-auto mb-9"><Bi en="Let's create something extraordinary together and achieve exceptional results." my="အတူတကွ ထူးခြားသောအရာများ ဖန်တီးပြီး ထူးခြားသော ရလဒ်များ ရရှိကြပါစို့။" /></p>
            <button onClick={() => navigate('/contact')} className="mc-btn mc-btn-primary mx-auto">
              <Bi en="Get In Touch" my={mm.common.getInTouch} /><ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
