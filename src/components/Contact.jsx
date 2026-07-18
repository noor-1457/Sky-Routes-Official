import { useState } from 'react';
import { 
  FaMapLocationDot, 
  FaEnvelopeOpenText, 
  FaPhoneVolume, 
  FaPaperPlane,
  FaCircleCheck,
} from 'react-icons/fa6';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'Dubai (UAE)',
    service: 'Economy Flight Tickets',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mkodwlzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowToast(true);
        setFormData({
          name: '',
          email: '',
          country: 'Dubai (UAE)',
          service: 'Economy Flight Tickets',
          message: ''
        });
        
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 bg-lightBg dark:bg-slate-900 relative transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info pane */}
            <div className="text-left flex flex-col justify-center">
              <div>
                {/* ✅ ITALIC - Connect with us */}
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2 italic">
                  📍 CONNECT WITH US
                </span>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-deepBase dark:text-white uppercase leading-none mb-4">
                  PLAN YOUR TOUR TODAY
                </h2>
                
                {/* ✅ ITALIC - Description with mix */}
                <p className="text-slateText dark:text-slate-300 text-xs leading-relaxed mb-6 font-medium italic">
                  Fill out this quick form. Customer travel coordinates will be saved securely to 
                  <span className="not-italic font-bold"> our corporate database</span> in real-time, 
                  and a direct <span className="not-italic font-semibold">WhatsApp connection link</span> 
                  will be compiled instantly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-[#e0f2fe] dark:bg-slate-800 text-[#0284c7] dark:text-skyBrand flex items-center justify-center text-sm flex-shrink-0">
                    <FaMapLocationDot />
                  </span>
                  <div>
                    {/* ✅ ITALIC - Location heading */}
                    <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 italic">
                      Lahore Head Desk
                    </h4>
                    <p className="text-[11px] text-deepBase dark:text-slate-300 font-medium leading-relaxed not-italic">
                      SF1, AL Rehman Square Mall, Al Rehman Garden, Phase 2, Lahore
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-[#fee2e2] dark:bg-slate-800 text-red-500 dark:text-red-400 flex items-center justify-center text-sm flex-shrink-0">
                    <FaEnvelopeOpenText />
                  </span>
                  <div>
                    {/* ✅ ITALIC - Email heading */}
                    <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 italic">
                      Official Mailbox
                    </h4>
                    <p className="text-[11px] text-deepBase dark:text-slate-300 font-medium not-italic">
                      skyroutesmarketing@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-[#ecfdf5] dark:bg-slate-800 text-emerald-500 dark:text-emerald-400 flex items-center justify-center text-sm flex-shrink-0">
                    <FaPhoneVolume />
                  </span>
                  <div>
                    {/* ✅ ITALIC - Phone heading */}
                    <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 italic">
                      Support Hotline
                    </h4>
                    <p className="text-[11px] text-deepBase dark:text-slate-300 font-medium not-italic">
                      +92 311 1101470
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form pane */}
            <div className="bg-white dark:bg-[#070a13] p-8 rounded-3xl border border-slate-100 dark:border-slate-800 card-shadow transition-colors duration-300">
              <h3 className="text-base font-extrabold uppercase text-deepBase dark:text-white mb-6 flex items-center gap-2">
                <FaPaperPlane className="text-orangeBrand not-italic" /> Contact Us
              </h3>

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className=" focus:outline-none
             focus:ring-2
             focus:ring-sky-500
             focus:border-sky-500 w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-skyBrand focus:outline-none rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className=" focus:outline-none
             focus:ring-2
             focus:ring-sky-500
             focus:border-sky-500 w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-skyBrand focus:outline-none rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">
                        Target Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className=" focus:outline-none
             focus:ring-2
             focus:ring-sky-500
             focus:border-sky-500 w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-skyBrand focus:outline-none rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 dark:text-white"
                      >
                        <option>Dubai (UAE)</option>
                        <option>Saudi Arabia</option>
                        <option>Oman (Muscat)</option>
                        <option>Bahrain</option>
                        <option>Bali (Indonesia)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">
                        Service Class
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className=" focus:outline-none
             focus:ring-2
             focus:ring-sky-500
             focus:border-sky-500 w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-skyBrand focus:outline-none rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 dark:text-white"
                      >
                        <option>Economy Flight Tickets</option>
                        <option>Business Class Flight Tickets</option>
                        <option>Visit Visa Package Services</option>
                        <option>Hotel Booking Assistance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">
                      Detailed Description
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Prior travel history details or custom ticketing requests..."
                      className=" focus:outline-none
             focus:ring-2
             focus:ring-sky-500
             focus:border-sky-500 w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-skyBrand focus:outline-none rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submitBtn"
                    disabled={isSubmitting}
                    className="w-full bg-[#0284c7] dark:bg-skyBrand hover:bg-sky-700 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-[10px] uppercase tracking-widest transition duration-300 shadow-lg shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span id="submitText">
                      <FaPaperPlane className="inline mr-2 not-italic" /> 
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </span>
                  </button>
                </div>
              </form>

              {/* Toast Notification */}
              <div
                id="toast"
                className={`fixed top-6 right-6 z-50 transition-all duration-500 ${
                  showToast ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'
                }`}
              >
                <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <FaCircleCheck className="text-xl not-italic" />
                  <div>
                    <p className="font-bold text-sm">Thank You!</p>
                    <p className="text-xs opacity-90">
                      Your enquiry has been submitted successfully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};