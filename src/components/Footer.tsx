import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { serviceDetails } from '../pages/services/serviceData';
import { Bi, mm } from '../bilingual';

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', my: mm.nav.about, path: '/about' },
    { name: 'Services', my: mm.nav.services, path: '/services' },
    { name: 'Portfolio', my: mm.nav.portfolio, path: '/portfolio' },
    { name: 'Contact', my: mm.nav.contact, path: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="mc-anchor relative overflow-x-hidden w-full">
      <div className="mc-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Marketing Capsule" className="w-11 h-11 object-contain rounded-xl" />
              <h3 className="text-xl font-extrabold text-white">Marketing Capsule</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#C9D4EE' }}>
              <Bi en="Practical digital marketing services that help your business grow — from social media creative to boosting and licensing." my={mm.footer.tagline} />
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)' }}
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: '#8FC1F2' }}><Bi en="Company" my={mm.footer.company} /></h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <button onClick={() => navigate(link.path)} className="text-sm transition-colors hover:text-white" style={{ color: '#C9D4EE' }}>
                    <Bi en={link.name} my={link.my} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: '#8FC1F2' }}><Bi en="Services" my={mm.footer.services} /></h4>
            <ul className="space-y-3">
              {serviceDetails.map((service) => (
                <li key={service.id}>
                  <button onClick={() => navigate(`/services/${service.id}`)} className="text-sm text-left transition-colors hover:text-white leading-relaxed" style={{ color: '#C9D4EE' }}>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: '#8FC1F2' }}><Bi en="Get In Touch" my={mm.footer.getInTouch} /></h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-3 text-sm" style={{ color: '#C9D4EE' }}>
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@marketingcapsulemm.com" className="hover:text-white transition-colors">info@marketingcapsulemm.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: '#C9D4EE' }}>
                <Phone className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+959450510920" className="block hover:text-white transition-colors">09 450 510 920</a>
                  <a href="tel:+959450510930" className="block hover:text-white transition-colors">09 450 510 930</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: '#C9D4EE' }}>
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>No.(2), Thuzar St, Pabaedan Qtr, Mawlamyine</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
          <p className="text-sm" style={{ color: '#8FA0C9' }}>
            © {currentYear} Marketing Capsule. <Bi en="All rights reserved." my={mm.footer.rights} />
          </p>
          <div className="flex gap-6 text-sm" style={{ color: '#8FA0C9' }}>
            <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors"><Bi en="Privacy Policy" my={mm.footer.privacy} /></button>
            <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors"><Bi en="Terms of Service" my={mm.footer.terms} /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
