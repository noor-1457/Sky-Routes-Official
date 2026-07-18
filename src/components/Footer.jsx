import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-sky-300 via-blue-20 to-sky-100  dark:from-slate-700 dark:via-slate-850 dark:to-slate-950 border-t border-slate-100 dark:border-slate-800/60 pt-16 pb-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center mb-3">
                <img
                  src={logo}
                  alt="Sky Routes"
                  className="h-30 object-contain"
                />
              </div>
              <p className="text-[11px] text-slateText dark:text-slate-400 leading-relaxed mb-4">
                Lahore-based travel & tour specialists helping you book flights,
                hotels, and visa-ready travel plans since December 2022.
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
                  href="https://www.facebook.com/profile.php?id=61591621567047"
                  target="blank"
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1877F2] flex items-center justify-center hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/skyroutesmarketing?igsh=dXZqNm8xbWJseXM%3D"
                  target="blank"
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#E1306C] flex items-center justify-center hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=skyroutesmarketing@gmail.com"
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-red-500 flex items-center justify-center hover:scale-110 transition"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-deepBase dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[11px] text-slateText dark:text-slate-400 font-semibold">
                <li>
                  <a href="/home" className="hover:text-[#0284c7] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#0284c7] transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/airlinesPage"
                    className="hover:text-[#0284c7] transition"
                  >
                    Airlines
                  </a>
                </li>
                <li>
                  <a
                    href="/umrah-packages"
                    className="hover:text-[#0284c7] transition"
                  >
                    Umrah Packages
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-[#0284c7] transition">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-[#0284c7] transition"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-deepBase dark:text-white mb-4">
                Our Services
              </h4>
              <ul className="space-y-2 text-[11px] text-slateText dark:text-slate-400 font-semibold">
                <li>Domestic & International Tickets</li>
                <li>Hotel Reservations</li>
                <li>Visa Case Assessment</li>
                <li>Umrah & Group Travel</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-deepBase dark:text-white mb-4">
                Contact
              </h4>
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
    </>
  );
};
