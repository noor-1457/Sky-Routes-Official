export const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm sm:text-base">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">1</span>
              Information We Collect
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm leading-relaxed">
              We may collect:
            </p>
            <ul className="space-y-2">
              {[
                "Full Name",
                "Phone Number",
                "Email Address",
                "Passport Information",
                "Travel Details",
                "Payment Information (where applicable)"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">2</span>
              How We Use Your Information
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm leading-relaxed">
              Your information is used to:
            </p>
            <ul className="space-y-2">
              {[
                "Process Umrah, Visa, and Ticket bookings.",
                "Communicate with you regarding your booking.",
                "Provide customer support.",
                "Meet legal and regulatory requirements.",
                "Improve our services."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">3</span>
              Information Sharing
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We may share your information only with airlines, hotels, embassies, visa processing partners, payment providers, or government authorities when necessary to provide the requested service or comply with legal obligations.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">4</span>
              Data Security
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We take reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">5</span>
              Cookies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Our website may use cookies to improve user experience and analyze website traffic.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">6</span>
              Third-Party Links
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">7</span>
              Policy Updates
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be published on this page.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">8</span>
              Contact Us
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              If you have any questions regarding this Privacy Policy or your personal information, please contact us using our official contact details.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center border-t border-slate-200 dark:border-slate-700/50 pt-8">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  );
};