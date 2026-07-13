import { useState, useCallback } from 'react';

export const Deals = () => {
    // State for live fare updates
    const [liveFares, setLiveFares] = useState({
        DXB: '',
        JED: '',
        MCT: ''
    });
    const [loading, setLoading] = useState({
        DXB: false,
        JED: false,
        MCT: false
    });

    // Flight deals data
    const flightDeals = [
        {
            id: 'DXB',
            destination: 'Dubai (DXB)',
            route: 'Lahore to Dubai (DXB)',
            airline: 'Fly Jinnah / Air Arabia',
            badgeColor: 'bg-[#e0f2fe] dark:bg-sky-500/10',
            badgeTextColor: 'text-[#0284c7] dark:text-skyBrand',
            description: 'Daily direct operations. Excess baggage allowance inclusive options.',
            economyPrice: 'PKR 54,000/-',
            businessPrice: 'PKR 148,000/-',
            origin: 'LHE',
            dest: 'DXB'
        },
        {
            id: 'JED',
            destination: 'Jeddah (JED)',
            route: 'Lahore to Jeddah (JED)',
            airline: 'KSA Gateway Special',
            badgeColor: 'bg-[#fef3c7] dark:bg-amber-500/10',
            badgeTextColor: 'text-[#d97706] dark:text-amber-400',
            description: 'Direct connectivity for pilgrims and tourists. Umrah transit optimized.',
            economyPrice: 'PKR 68,000/-',
            businessPrice: 'PKR 185,000/-',
            origin: 'LHE',
            dest: 'JED'
        },
        {
            id: 'MCT',
            destination: 'Muscat (MCT)',
            route: 'Lahore to Muscat (MCT)',
            airline: 'Oman Express Fares',
            badgeColor: 'bg-[#ecfdf5] dark:bg-emerald-500/10',
            badgeTextColor: 'text-emerald-600 dark:text-emerald-400',
            description: 'Direct routes with flexible seating and meal selection services.',
            economyPrice: 'PKR 48,000/-',
            businessPrice: 'PKR 125,000/-',
            origin: 'LHE',
            dest: 'MCT'
        }
    ];

    // Check live fare handler
    const checkLiveFare = useCallback((origin, destination, id) => {
        setLoading(prev => ({ ...prev, [id]: true }));
        
        // Simulate API call
        setTimeout(() => {
            const randomFare = Math.floor(Math.random() * (75000 - 45000 + 1)) + 45000;
            const formattedFare = `PKR ${randomFare.toLocaleString()}/-`;
            
            setLiveFares(prev => ({ ...prev, [id]: formattedFare }));
            setLoading(prev => ({ ...prev, [id]: false }));
            
            // Show notification
            showNotification(`Live fare updated for ${destination}`, 'info');
        }, 1500);
    }, []);

    // Book deal handler
    const bookDeal = useCallback((destination, price) => {
        const message = `Hi Sky Routes, I'm interested in booking: ${destination} at ${price}. Please share details.`;
        const whatsappUrl = `https://wa.me/923111101470?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        showNotification(`Inquiry sent for ${destination}`, 'success');
    }, []);

    // Toast notification function
    const showNotification = (message, type = 'info') => {
        if (typeof window !== 'undefined' && window.showToast) {
            window.showToast(message, type);
        } else {
            // Fallback for development
            if (process.env.NODE_ENV === 'development') {
                console.log(`[${type.toUpperCase()}] ${message}`);
            }
        }
    };

    return (
        <>
            {/* REALTIME SECTOR FARES (Fly Jinnah Premium Tickets Row as Requested) */}
            <section id="deals" className="py-24 bg-white dark:bg-[#05070f] transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2">
                            TOP FLIGHT DEALS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-white uppercase">
                            REALTIME SECTOR FARES
                        </h2>
                        <p className="text-slateText dark:text-slate-400 mt-3 text-xs">
                            Direct low-price passenger routes dynamically checked from Lahore. Standard one-way ticket parameters are optimized below.
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
                                        <span className={`${deal.badgeColor} ${deal.badgeTextColor} text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase`}>
                                            {deal.airline}
                                        </span>
                                        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold">
                                            <i className="fa-solid fa-plane-up mr-1"></i> Checked
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-extrabold text-[#0f172a] dark:text-white uppercase tracking-tight">
                                        {deal.route}
                                    </h4>
                                    <p className="text-[11px] text-slateText dark:text-slate-400 mt-1 mb-6">
                                        {deal.description}
                                    </p>
                                    
                                    <div className="space-y-3 border-t border-slate-200/60 dark:border-slate-800 pt-4">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-slateText dark:text-slate-300">One-way Economy Class</span>
                                            <strong className="text-emerald-600 dark:text-emerald-400 font-black">
                                                {deal.economyPrice}
                                            </strong>
                                        </div>
                                        <div className="flex items-center justify-between text-xs border-b border-slate-200/40 dark:border-slate-800/40 pb-3">
                                            <span className="text-slateText dark:text-slate-300">One-way Business Class</span>
                                            <strong className="text-emerald-600 dark:text-emerald-400 font-black">
                                                {deal.businessPrice}
                                            </strong>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-3 flex items-center justify-between text-[10px]">
                                        <button 
                                            onClick={() => checkLiveFare(deal.origin, deal.dest, deal.id)}
                                            disabled={loading[deal.id]}
                                            className="text-[#0284c7] dark:text-skyBrand font-bold hover:underline disabled:opacity-50 disabled:cursor-not-allowed transition"
                                        >
                                            <i className={`fa-solid ${loading[deal.id] ? 'fa-spinner fa-spin' : 'fa-bolt'} mr-1`}></i>
                                            {loading[deal.id] ? 'Checking...' : 'Check live fare'}
                                        </button>
                                        <span id={`live-${deal.id}`} className="text-slate-400 font-semibold">
                                            {liveFares[deal.id]}
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => bookDeal(deal.destination, deal.economyPrice)}
                                    className="flex-1 bg-[#0284c7] dark:bg-skyBrand hover:bg-sky-700 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-[10px] uppercase tracking-widest transition duration-300 shadow-lg shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Inquire Flight Rates
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Mandatory pricing warning notice below flights */}
                    <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 italic mt-8 leading-relaxed max-w-2xl mx-auto font-medium">
                        * Please note: Flight ticket rates fluctuate frequently as per GDS demand matrices and seasonal requirements. These rates are approximate roundabout estimates, not exact static prices.
                    </p>
                </div>
            </section>
        </>
    );
};