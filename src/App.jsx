import "./App.css";
import PublicLayout from "./layout/publicLayout.jsx";
import { Contact } from "./components/Contact.jsx";
import { Home } from "./Pages/Home.jsx";
import { AirlinesPage } from "./Pages/AirlinesPage.jsx";
import { UmrahPackagesPage } from "./Pages/UmrahPackages.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage.jsx";
import { Hajj } from "./Pages/Hajj.jsx";
import { TermsAndConditions } from "./Pages/TermsAndConditions.jsx";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Visa from "./Pages/Visa.jsx";
import { FaWhatsapp } from "react-icons/fa"; // ✅ Sirf icon import
import { useState, useEffect } from "react"; // ✅ Hooks import

function App() {
  // WhatsApp Button ka sara logic yahan
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const phoneNumber = '923111101470';
  const message = 'Assalamu Alaikum! I would like to inquire about packages.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/airlinesPage" element={<AirlinesPage />} />
            <Route path="/umrah-packages" element={<UmrahPackagesPage />} />
            <Route path="/hajj" element={<Hajj />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/visa" element={<Visa />} />
          </Route>
        </Routes>
        
        {/* ✅ WhatsApp Button - Direct Code yahan */}
        <div
          className={`fixed bottom-6 right-6 z-[999] transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-30"></div>
          
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-3xl" />
            
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse border-2 border-white">
              1
            </span>
          </a>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;