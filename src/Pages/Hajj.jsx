// import { WhatsAppButton } from "../components/WhatsAppButton.jsx";

export const Hajj = () => {
  return (
    <>
      <section className="bg-slate-200 dark:bg-slate-900">
        {/* Hero Section - Redesigned with centered text */}
        <div className="mt-20 relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img
            src="https://media.istockphoto.com/id/2244180866/photo/hand-of-muslim-man-praying-with-mosque-background.jpg?s=612x612&w=0&k=20&c=5SQzC4rXJsHW6BfV4JzDxN3GqL1xsvM5Cq5HEd6ssvA="
            alt="Hajj background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay - Centered for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/60 to-slate-900/70 dark:from-[#05070f]/70 dark:via-[#05070f]/75 dark:to-[#05070f]/80" />
          
          {/* Content - Centered */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
                Hajj 2027 • Insha'Allah
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Begin Your Sacred
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                Hajj Journey
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Choose from Economy, Premium, and VIP packages designed to suit 
              different budgets and preferences. Let us help you fulfill your 
              spiritual journey with ease and comfort.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* What's Included */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <span className="text-sky-600 dark:text-sky-400 text-sm font-semibold tracking-wider uppercase">
              What's Included
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3">
              Hajj 2027 Packages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
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
                className="flex items-center gap-2 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-700/50 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all duration-200 group"
              >
                <div className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-200 dark:group-hover:bg-sky-800 transition-colors">
                  <svg
                    className="w-3 h-3 text-sky-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works - Steps */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <span className="text-sky-600 dark:text-sky-400 text-sm font-semibold tracking-wider uppercase">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm sm:text-base">
              Four simple steps to begin your sacred journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1 group-hover:border-sky-500/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">01</span>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-sky-500 to-transparent"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  Contact Us
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Share your details with our team to begin the process.
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-sky-500/0 group-hover:bg-sky-500 transition-all duration-300 rounded-full"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1 group-hover:border-sky-500/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">02</span>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-sky-500 to-transparent"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  Get Package Details
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Receive information about packages, pricing and requirements.
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-sky-500/0 group-hover:bg-sky-500 transition-all duration-300 rounded-full"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1 group-hover:border-sky-500/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">03</span>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-sky-500 to-transparent"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  Document & Payment
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Complete registration with guidance from our consultants.
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-sky-500/0 group-hover:bg-sky-500 transition-all duration-300 rounded-full"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1 group-hover:border-sky-500/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">04</span>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-sky-500 to-transparent"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  Prepare For Journey
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Attend briefings and get ready for your Hajj pilgrimage.
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-sky-500/0 group-hover:bg-sky-500 transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      {/* <WhatsAppButton /> */}
      </section>
    </>
  );
};