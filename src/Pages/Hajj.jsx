// import { WhatsAppButton } from "../components/WhatsAppButton.jsx";

export const Hajj = () => {
  return (
    <>
      <section className="bg-slate-200 dark:bg-slate-900">
        <div className="mt-20 relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img
            src="https://media.istockphoto.com/id/2244180866/photo/hand-of-muslim-man-praying-with-mosque-background.jpg?s=612x612&w=0&k=20&c=5SQzC4rXJsHW6BfV4JzDxN3GqL1xsvM5Cq5HEd6ssvA="
            alt="Hajj background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/30 to-white/35 dark:from-[#05070f]/20 dark:via-[#05070f]/60 dark:to-[#05070f]/80 transition-colors duration-300" />
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
            <div className="flex justify-center items-center">
              <div className="text-center">
                <h1 className="bg-slate-400 font-bold uppercase tracking-[0.3em] text-[#0284c7] dark:text-skyBrand block mb-2 text-xs sm:text-sm md:text-base lg:text-lg">
                  HAJJ 2027 - INSHA'ALLAH.
                </h1>
                <h2 className="text-slateText dark:text-slate-300 max-w-sm mb-4 leading-relaxed font-medium text-[10px] sm:text-xs md:text-sm">
                  Begin you Hajj 2027 journey with Sky Routes!
                </h2>
                <h3 className="text-slateText dark:text-slate-300 max-w-sm mb-4 leading-relaxed font-medium text-[10px] sm:text-xs md:text-sm">
                  Choose from Economy, Premium, and VIP Hajj Packages designed
                  to suit different budgets and preferences.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3">
              Hajj 2027 Packages - What's Included
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm sm:text-base">
              Everything you need for a smooth and organized Hajj journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              "Accommodation",
              "Transportation",
              "Visa Assistance",
              "Documentation Support",
              "Group Coordination",
              "Pre-Departure Briefing",
              "Dedicated Support Team",
              "Airport Assistance",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-700/50 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 text-sky-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works - Steps */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-slate-50/50 dark:bg-slate-900/20 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm sm:text-base">
              Four simple steps to begin your sacred journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-sky-500">01</span>
                  <div className="w-10 h-0.5 bg-sky-200 dark:bg-sky-800"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  Contact Us
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Share your details with our team to begin the process.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-sky-500">02</span>
                  <div className="w-10 h-0.5 bg-sky-200 dark:bg-sky-800"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  Get Package Details
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Receive information about packages, pricing and requirements.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-sky-500">03</span>
                  <div className="w-10 h-0.5 bg-sky-200 dark:bg-sky-800"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  Document & Payment
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Complete registration with guidance from our consultants.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-sky-500">04</span>
                  <div className="w-10 h-0.5 bg-sky-200 dark:bg-sky-800"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  Prepare For Journey
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Attend briefings and get ready for your Hajj pilgrimage.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* <WhatsAppButton /> */}
      </section>
    </>
  );
};
