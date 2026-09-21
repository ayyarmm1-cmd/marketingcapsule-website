import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Moon, Sun, LockKeyhole } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { serviceDetails } from '../pages/services/serviceData';
import { Bi, mm, useLanguage } from '../bilingual';
import { useTheme } from '../theme';

export default function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const nav = [
    { en: 'Home', my: mm.nav.home, path: '/' },
    { en: 'About', my: mm.nav.about, path: '/about' },
    { en: 'Services', my: mm.nav.services, path: '/services', services: true },
    { en: 'Portfolio', my: mm.nav.portfolio, path: '/portfolio' },
    { en: 'Contact', my: mm.nav.contact, path: '/contact' },
  ];
  const active = (path: string) => (path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`));
  const servicesActive = pathname === '/services' || pathname.startsWith('/services/');

  return (
    <nav className={`mc-nav fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'mc-nav--scrolled' : ''}`}>
      <div className="mc-container">
        <div className="h-20 flex items-center justify-between gap-4">
          <button onClick={() => go('/')} className="flex items-center gap-3 min-w-0">
            <img src="/logo.png" alt="Marketing Capsule" className="w-10 h-10 object-contain rounded-xl flex-shrink-0" />
            <span className="text-lg font-extrabold truncate" style={{ color: 'var(--mc-heading)' }}>Marketing Capsule</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {nav.map((item) => item.services ? (
              <div
                className="relative"
                key={item.path}
                onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setServicesOpen(true); }}
                onMouseLeave={() => { closeTimer.current = setTimeout(() => setServicesOpen(false), 150); }}
              >
                <button
                  onClick={() => go(item.path)}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5"
                  style={{
                    color: servicesActive ? 'var(--mc-primary)' : 'var(--mc-muted)',
                    background: servicesActive ? 'var(--mc-surface-2)' : 'transparent',
                  }}
                >
                  <Bi en={item.en} my={item.my} />
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all ${servicesOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}>
                  <div className="w-[320px] rounded-2xl p-2 mc-card" style={{ boxShadow: '0 20px 44px rgba(2,12,71,.14)' }}>
                    <button onClick={() => go('/services')} className="w-full text-left px-4 py-3 rounded-xl font-semibold transition-colors" style={{ color: 'var(--mc-heading)' }}>
                      <Bi en="All Services" my={mm.nav.allServices} />
                    </button>
                    <div className="h-px my-1" style={{ background: 'var(--mc-line)' }} />
                    {serviceDetails.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => go(`/services/${service.id}`)}
                        className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                        style={{
                          color: 'var(--mc-text)',
                          background: pathname === `/services/${service.id}` ? 'var(--mc-surface-2)' : 'transparent',
                        }}
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={item.path}
                onClick={() => go(item.path)}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  color: active(item.path) ? 'var(--mc-primary)' : 'var(--mc-muted)',
                  background: active(item.path) ? 'var(--mc-surface-2)' : 'transparent',
                }}
              >
                <Bi en={item.en} my={item.my} />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center rounded-lg p-1" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)' }}>
              <button
                onClick={() => setLanguage('en')}
                className="px-2.5 py-1.5 rounded-md text-xs font-bold transition-colors"
                style={{ color: language === 'en' ? '#fff' : 'var(--mc-muted)', background: language === 'en' ? 'var(--mc-primary)' : 'transparent' }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('my')}
                className="px-2.5 py-1.5 rounded-md text-xs font-bold transition-colors"
                style={{ color: language === 'my' ? '#fff' : 'var(--mc-muted)', background: language === 'my' ? 'var(--mc-primary)' : 'transparent' }}
              >
                မြန်မာ
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg grid place-items-center transition-colors"
              style={{ border: '1px solid var(--mc-line)', color: 'var(--mc-heading)' }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => { window.location.hash = '#/login'; }}
              className="px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
              style={{ color: 'var(--mc-muted)' }}
            >
              <LockKeyhole className="w-3.5 h-3.5" /><Bi en="Employee Login" my={mm.nav.employeeLogin} />
            </button>
            <button onClick={() => go('/contact')} className="mc-btn mc-btn-primary mc-btn-sm">
              <Bi en="Free Consultation" my={mm.nav.freeConsultation} />
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg grid place-items-center"
              style={{ border: '1px solid var(--mc-line)', color: 'var(--mc-heading)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="w-10 h-10 rounded-lg grid place-items-center"
              style={{ border: '1px solid var(--mc-line)', color: 'var(--mc-heading)' }}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto" style={{ borderTop: '1px solid var(--mc-line)', background: 'var(--mc-page)' }}>
          <div className="px-4 py-5 space-y-2">
            <div className="flex items-center justify-between p-2 mb-2 rounded-lg" style={{ background: 'var(--mc-surface-2)', border: '1px solid var(--mc-line)' }}>
              <span className="text-sm" style={{ color: 'var(--mc-muted)' }}><Bi en="Language" my="ဘာသာစကား" /></span>
              <div className="flex gap-1">
                <button onClick={() => setLanguage('en')} className="px-3 py-1.5 rounded-md text-xs font-bold" style={{ color: language === 'en' ? '#fff' : 'var(--mc-muted)', background: language === 'en' ? 'var(--mc-primary)' : 'transparent' }}>EN</button>
                <button onClick={() => setLanguage('my')} className="px-3 py-1.5 rounded-md text-xs font-bold" style={{ color: language === 'my' ? '#fff' : 'var(--mc-muted)', background: language === 'my' ? 'var(--mc-primary)' : 'transparent' }}>မြန်မာ</button>
              </div>
            </div>
            {nav.map((item) => (
              <div key={item.path}>
                <button
                  onClick={() => item.services ? setMobileServicesOpen((v) => !v) : go(item.path)}
                  className="w-full text-left px-4 py-3 rounded-lg font-semibold flex items-center justify-between"
                  style={{ color: (item.services ? servicesActive : active(item.path)) ? 'var(--mc-primary)' : 'var(--mc-text)', background: (item.services ? servicesActive : active(item.path)) ? 'var(--mc-surface-2)' : 'transparent' }}
                >
                  <Bi en={item.en} my={item.my} />
                  {item.services && <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />}
                </button>
                {item.services && mobileServicesOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {serviceDetails.map((service) => (
                      <button key={service.id} onClick={() => go(`/services/${service.id}`)} className="w-full text-left px-4 py-2 rounded-lg text-sm" style={{ color: 'var(--mc-muted)' }}>
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button onClick={() => go('/contact')} className="mc-btn mc-btn-primary w-full mt-2">
              <Bi en="Free Consultation" my={mm.nav.freeConsultation} />
            </button>
            <button
              onClick={() => { window.location.hash = '#/login'; }}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-sm font-semibold"
              style={{ color: 'var(--mc-muted)' }}
            >
              <LockKeyhole className="w-4 h-4" /><Bi en="Employee Login" my={mm.nav.employeeLogin} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
