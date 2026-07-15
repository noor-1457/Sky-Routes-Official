export const TermsAndConditions = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm sm:text-base">
            By accessing or using our services, you agree to the following Terms & Conditions.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">1</span>
              Services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm leading-relaxed">
              We provide travel-related services including:
            </p>
            <ul className="space-y-2">
              {[
                "Umrah Packages",
                "Visit Visa Assistance",
                "Airline Ticket Booking",
                "Travel Consultation"
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">2</span>
              Booking & Payment
            </h2>
            <ul className="space-y-3">
              {[
                "All bookings are subject to availability.",
                "Prices may change without prior notice due to airline, hotel, embassy, or supplier policies.",
                "A booking is confirmed only after the required payment has been received."
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
              Cancellation & Refund
            </h2>
            <ul className="space-y-3">
              {[
                "Cancellation and refund policies vary depending on the airline, hotel, embassy, or service provider.",
                "Any applicable cancellation charges or service fees will be deducted.",
                "Refund processing time depends on the respective airline, hotel, embassy, or supplier."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">4</span>
              Visa Disclaimer
            </h2>
            <ul className="space-y-3">
              {[
                "Visa approval or rejection is solely the decision of the relevant embassy or immigration authority.",
                "We assist with documentation and application processing but do not guarantee visa approval."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">5</span>
              Travel Documents
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Customers are responsible for ensuring that their passport, visa, vaccination certificates, and other required travel documents are valid before travel.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">6</span>
              Customer Responsibility
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Customers must provide accurate information during booking. We are not responsible for delays or losses caused by incorrect information provided by the customer.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">7</span>
              Limitation of Liability
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We act as an intermediary between customers and airlines, hotels, transport providers, and embassies. We are not responsible for delays, cancellations, schedule changes, baggage loss, natural disasters, government restrictions, or events beyond our control.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">8</span>
              Changes to Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We reserve the right to update these Terms & Conditions at any time without prior notice.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-500 font-bold text-sm">9</span>
              Contact
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              For any questions regarding our services or these Terms & Conditions, please contact us through our official phone number, email, or office address.
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