import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  // Hide on scroll down, show on scroll up
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
  const message = 'Assalamu Alaikum! I would like to inquire about Umrah packages.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Main WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-[999] transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-30"></div>
        
        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[8px] font-bold flex items-center justify-center animate-pulse">
            1
          </span>
        </a>

        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
            showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div className="bg-slate-800 dark:bg-slate-900 text-white text-[10px] font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap">
            Chat with us on WhatsApp
            <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800 dark:bg-slate-900"></div>
          </div>
        </div>
      </div>

      {/* Alternative: Multiple Contact Options (Optional) */}
      {/* Uncomment if you want a floating menu with multiple options */}
      {/* <FloatingContactMenu /> */}
    </>
  );
};

// Optional: Floating Contact Menu with multiple options
export const FloatingContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: 'WhatsApp', icon: FaWhatsapp, color: 'bg-emerald-500', url: 'https://wa.me/923111101470' },
    { name: 'Phone', icon: FaPhone, color: 'bg-blue-500', url: 'tel:+923111101470' },
    { name: 'Email', icon: FaEnvelope, color: 'bg-red-500', url: 'mailto:skyroutesmarketing@gmail.com' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {/* Menu Items */}
      <div
        className={`flex flex-col items-center gap-3 mb-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${contact.color} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200`}
          >
            <contact.icon className="text-lg" />
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-emerald-500 hover:bg-emerald-600'
        } text-white`}
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaWhatsapp className="text-2xl" />
        )}
      </button>
    </div>
  );
};