import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import MessengerChatButton from './components/MessengerChatButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/services/ServiceDetailPage';
import { trackPageView } from './utils/analytics';
import { initCoreWebVitals } from './utils/coreWebVitals';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    initCoreWebVitals();
  }, []);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoaded');
    if (hasLoadedBefore) {
      setIsLoading(false);
      return;
    }
    const minLoadTime = setTimeout(() => {
      sessionStorage.setItem('hasLoaded', 'true');
    }, 1200);
    return () => clearTimeout(minLoadTime);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      trackPageView(location.pathname, document.title);
    }
  }, [location.pathname, isLoading]);

  return (
    <div className="mc-shell overflow-x-hidden w-full min-h-screen">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} overflow-x-hidden w-full`}>
        <Navigation />
        <main className="overflow-x-hidden w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <MessengerChatButton />
      </div>
    </div>
  );
}

export default App;
