export const Deals = () => {

  // Flight deals data
  const flightDeals = [
    {
      id: "DXB",
      destination: "Dubai (DXB)",
      route: "Lahore to Dubai (DXB)",
      airline: "Fly Jinnah / Air Arabia",
      badgeColor: "bg-[#e0f2fe] dark:bg-sky-500/10",
      badgeTextColor: "text-[#0284c7] dark:text-skyBrand",
      description:
        "Daily direct operations. Excess baggage allowance inclusive options.",
      economyPrice: "PKR 88,000/-",
      businessPrice: "PKR 355,000/-",
      origin: "LHE",
      dest: "DXB",
    },
    {
      id: "JED",
      destination: "Jeddah (JED)",
      route: "Lahore to Jeddah (JED)",
      airline: "KSA Gateway Special",
      badgeColor: "bg-[#fef3c7] dark:bg-amber-500/10",
      badgeTextColor: "text-[#d97706] dark:text-amber-400",
      description:
        "Direct connectivity for pilgrims and tourists. Umrah transit optimized.",
      economyPrice: "PKR 140,000/-",
      businessPrice: "PKR 219,000/-",
      origin: "LHE",
      dest: "JED",
    },
    {
      id: "MCT",
      destination: "Muscat (MCT)",
      route: "Lahore to Muscat (MCT)",
      airline: "Oman Express Fares",
      badgeColor: "bg-[#ecfdf5] dark:bg-emerald-500/10",
      badgeTextColor: "text-emerald-600 dark:text-emerald-400",
      description:
        "Direct routes with flexible seating and meal selection services.",
      economyPrice: "PKR 105,000/-",
      businessPrice: "PKR 190,000/-",
      origin: "LHE",
      dest: "MCT",
    },
  ];

  return (
    <>
      {/* REALTIME SECTOR FARES (Fly Jinnah Premium Tickets Row as Requested) */}
      <section
        id="deals"
        className="py-24 bg-white dark:bg-[#05070f] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            {/* ✅ ITALIC - Top Flight Deals */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2 italic">
              ✈️ TOP FLIGHT DEALS
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-white uppercase">
              REALTIME SECTOR FARES
            </h2>
            
            {/* ✅ ITALIC - Description with mix */}
            <p className="text-slateText dark:text-slate-400 mt-3 text-xs italic">
              Direct low-price passenger routes dynamically checked from Lahore.
              <span className="not-italic font-semibold"> Standard one-way ticket</span> parameters are optimized below.
            </p>
          </div>

          {/* Product-style flight rates listed as cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flightDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-lightBg dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 card-shadow flex flex-col justify-between transition-colors duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`${deal.badgeColor} ${deal.badgeTextColor} text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase`}
                    >
                      {deal.airline}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold not-italic">
                      <i className="fa-solid fa-plane-up mr-1"></i> Checked
                    </span>
                  </div>
                  <h4 className="text-xl font-extrabold text-[#0f172a] dark:text-white uppercase tracking-tight">
                    {deal.route}
                  </h4>
                  {/* ✅ ITALIC - Description */}
                  <p className="text-[11px] text-slateText dark:text-slate-400 mt-1 mb-6 italic">
                    {deal.description}
                  </p>

                  <div className="space-y-3 border-t border-slate-200/60 dark:border-slate-800 pt-4">
                    {/* ✅ ITALIC - Starting from */}
                    <p className="text-[#0284c7] text-[13px] italic">
                      Starting from
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slateText dark:text-slate-300 not-italic">
                        One-way Economy Class
                      </span>
                      <strong className="text-emerald-600 dark:text-emerald-400 font-black not-italic">
                        {deal.economyPrice}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-slate-200/40 dark:border-slate-800/40 pb-3">
                      <span className="text-slateText dark:text-slate-300 not-italic">
                        One-way Business Class
                      </span>
                      <strong className="text-emerald-600 dark:text-emerald-400 font-black not-italic">
                        {deal.businessPrice}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ ITALIC - Pricing warning notice with mix */}
          <p className="text-center text-[15px] text-slate-400 dark:text-slate-500 italic mt-8 leading-relaxed max-w-2xl mx-auto font-large">
            * Starting fares. <span className="not-italic font-semibold">Final price</span> depends on travel date, availability,
            and airline.
          </p>
        </div>
      </section>
    </>
  );
};