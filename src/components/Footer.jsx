import { useState } from 'react';
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaInstagram, 
  FaEnvelope, 
  FaPhone, 
  FaClock, 
  FaLock, 
  FaTimes,
  FaSignInAlt
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import logo from "../assets/logo.png"

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAdminModal = () => {
    setIsModalOpen(true);
  };

  const closeAdminModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="bg-white dark:bg-[#070a13] border-t border-slate-100 dark:border-slate-800/60 pt-16 pb-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src={logo} 
                  alt="Sky Routes" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-[11px] text-slateText dark:text-slate-400 leading-relaxed mb-4">
                Lahore-based travel & tour specialists helping you book flights, hotels, and visa-ready travel plans since December 2022.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <a 
                  href="https://wa.me/923111101470" 
                  target="_blank" 
                  rel="noopener" 
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-500 flex items-center justify-center hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1877F2] flex items-center justify-center hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="https://www.instagram.com/skyroutesmarketing?igsh=dXZqNm8xbWJseXM%3D"
                  target='blank' 
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#E1306C] flex items-center justify-center hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="mailto:skyroutesmarketing@gmail.com" 
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-red-500 flex items-center justify-center hover:scale-110 transition"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-deepBase dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[11px] text-slateText dark:text-slate-400 font-semibold">
                <li><a href="/home" className="hover:text-[#0284c7] transition">Home</a></li>
                <li><a href="/about" className="hover:text-[#0284c7] transition">About Us</a></li>
                <li><a href="/airlinesPage" className="hover:text-[#0284c7] transition">Airlines</a></li>
                <li><a href="/umrah-packages" className="hover:text-[#0284c7] transition">Umrah Packages</a></li>
                {/* <li><a href="#faq" className="hover:text-[#0284c7] transition">FAQs</a></li> */}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-deepBase dark:text-white mb-4">Our Services</h4>
              <ul className="space-y-2 text-[11px] text-slateText dark:text-slate-400 font-semibold">
                <li>Domestic & International Tickets</li>
                <li>Hotel Reservations</li>
                <li>Visa Case Assessment</li>
                <li>Umrah & Group Travel</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-deepBase dark:text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-[11px] text-slateText dark:text-slate-400 font-semibold">
                <li className="flex items-start gap-2">
                  <FaLocationDot className="text-[#0284c7] mt-0.5" /> 
                  SF1, Al Rehman Square Mall, Al Rehman Garden, Phase 2, Lahore
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-[#0284c7]" /> 
                  +92 311 1101470
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-[#0284c7]" /> 
                  skyroutesmarketing@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <FaClock className="text-[#0284c7]" /> 
                  Mon-Sat: 10am - 8pm
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold text-slate-400 dark:text-slate-500">
            <p>&copy; 2026 Sky Routes Agency, Lahore. All rights reserved.</p>
            {/* <button 
              onClick={openAdminModal} 
              className="hover:text-orangeBrand transition"
            >
              <FaLock className="inline mr-1" /> Staff Portal
            </button> */}
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeAdminModal}>
          <div className="bg-white dark:bg-[#070a13] p-8 rounded-3xl max-w-md w-full mx-4 border border-slate-100 dark:border-slate-800" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-extrabold text-deepBase dark:text-white">Staff Portal</h3>
              <button onClick={closeAdminModal} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <FaTimes />
              </button>
            </div>
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-skyBrand focus:outline-none rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-skyBrand focus:outline-none rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black dark:bg-skyBrand dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-sky-400 text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest transition duration-150"
                >
                  <FaSignInAlt className="inline mr-2" /> Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};