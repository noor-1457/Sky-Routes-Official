import {
  FaShieldAlt,
  FaHeadset,
  FaTags,
  FaUsers,
} from "react-icons/fa";

export const About = () => {
  return (
    <>
      {/* WHY CHOOSE US / TRUST STRIP */}
      <section
        id="about"
        className="py-16 bg-slate-200 dark:bg-[#070a13] border-t border-slate-100 dark:border-slate-800/60 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {/* ✅ ITALIC - Why Sky Routes */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2 italic">
              ✈️ WHY SKY ROUTES
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] dark:text-white uppercase">
              Trusted Travel Partner Since 2022
            </h2>

            {/* ✅ ITALIC - Description with mix */}
            <p className="text-slateText dark:text-slate-400 mt-3 text-xs leading-relaxed italic">
              We're a Lahore-based travel and tour agency helping hundreds of
              families, students, and professionals book flights, hotels, and
              visa-ready travel files across the Gulf and beyond—with 
              <span className="not-italic font-bold"> honest pricing</span> and a 
              <span className="not-italic font-semibold"> real human on WhatsApp</span> 
              whenever you need us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#e0f2fe] dark:bg-slate-800 text-[#0284c7] dark:text-skyBrand flex items-center justify-center text-lg mb-3">
                  <FaShieldAlt className="not-italic" />
              </div>

              <h4 className="text-xs font-extrabold uppercase text-deepBase dark:text-white mb-1">
                Verified Agency
              </h4>

              {/* ✅ ITALIC - Description */}
              <p className="text-[10px] text-slateText dark:text-slate-400 italic">
                Operating openly from our Lahore office since Dec 2022.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#fef3c7] dark:bg-slate-800 text-orangeBrand flex items-center justify-center text-lg mb-3">
                 <FaHeadset className="not-italic" />
              </div>

              <h4 className="text-xs font-extrabold uppercase text-deepBase dark:text-white mb-1">
                24/7 WhatsApp Support
              </h4>

              {/* ✅ ITALIC - Description */}
              <p className="text-[10px] text-slateText dark:text-slate-400 italic">
                Real replies, not bots — whenever you need help.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#ecfdf5] dark:bg-slate-800 text-emerald-500 flex items-center justify-center text-lg mb-3">
                <FaTags className="not-italic" />
              </div>

              <h4 className="text-xs font-extrabold uppercase text-deepBase dark:text-white mb-1">
                Transparent Pricing
              </h4>

              {/* ✅ ITALIC - Description */}
              <p className="text-[10px] text-slateText dark:text-slate-400 italic">
                No hidden charges — what we quote is what you pay.
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#fee2e2] dark:bg-slate-800 text-red-500 flex items-center justify-center text-lg mb-3">
                 <FaUsers className="not-italic" />
              </div>

              <h4 className="text-xs font-extrabold uppercase text-deepBase dark:text-white mb-1">
                Happy Clients
              </h4>

              {/* ✅ ITALIC - Description */}
              <p className="text-[10px] text-slateText dark:text-slate-400 italic">
                Growing base of families & travellers who trust us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};