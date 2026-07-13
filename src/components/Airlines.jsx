// import React from 'react';
import { FaPlane } from 'react-icons/fa';

export const Airlines = () => {
    // Airline data
    const airlines = [
        {
            id: 'turkish',
            name: 'Turkish Airlines',
            displayName: 'Turkish',
            highlight: 'Airlines',
            color: '#C9142A',
            bgColor: '#f3f7fa',
            darkBgColor: 'slate-900'
        },
        {
            id: 'emirates',
            name: 'Emirates',
            displayName: 'Emirates',
            highlight: null,
            color: '#D71921',
            bgColor: '#f3f7fa',
            darkBgColor: 'slate-900',
            fontFamily: "'Times New Roman', serif"
        },
        {
            id: 'qatar',
            name: 'Qatar Airways',
            displayName: 'Qatar',
            highlight: 'Airways',
            color: '#5C0632',
            bgColor: '#f3f7fa',
            darkBgColor: 'slate-900'
        },
        {
            id: 'oman',
            name: 'Oman Air',
            displayName: 'Oman',
            highlight: 'Air',
            color: '#004B87',
            highlightColor: '#A98242',
            bgColor: '#f3f7fa',
            darkBgColor: 'slate-900'
        },
        {
            id: 'gulf',
            name: 'Gulf Air',
            displayName: 'Gulf',
            highlight: 'Air',
            color: '#002D62',
            highlightColor: '#A47A31',
            bgColor: '#f3f7fa',
            darkBgColor: 'slate-900'
        },
        {
            id: 'pia',
            name: 'PIA Pakistan',
            displayName: 'PIA',
            highlight: 'Pakistan',
            color: '#004D2C',
            bgColor: '#f3f7fa',
            darkBgColor: 'slate-900',
            highlightClass: 'normal-case tracking-normal'
        }
    ];

    return (
        <>
            {/* MOST POPULAR AIRLINES ROW */}
            <section id="airlines" className="py-20 bg-white dark:bg-[#05070f] border-t border-slate-100 dark:border-slate-800/60 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2">
                        MOST POPULAR AIRLINES
                    </span>
                    <p className="text-slateText dark:text-slate-400 text-xs mb-10 max-w-xl mx-auto font-medium">
                        We partner directly with elite commercial air carriers to offer budget fares for your flights.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-stretch justify-center">
                        {airlines.map((airline) => (
                            <div 
                                key={airline.id}
                                className="bg-[#f3f7fa] dark:bg-slate-900 p-5 rounded-2xl flex flex-col items-center justify-center gap-2 border border-slate-100 dark:border-slate-800 card-shadow transition hover:scale-105 duration-200 h-24"
                            >
                                <FaPlane 
                                    className="text-lg" 
                                    style={{ color: airline.color }}
                                />
                                <span 
                                    className="text-[11px] font-black uppercase tracking-wide text-[#0A1629] dark:text-white leading-none"
                                    style={airline.fontFamily ? { fontFamily: airline.fontFamily } : {}}
                                >
                                    {airline.displayName}
                                    {airline.highlight && (
                                        <span 
                                            className={airline.highlightClass || ''}
                                            style={{ 
                                                color: airline.highlightColor || airline.color 
                                            }}
                                        >
                                            {' '}{airline.highlight}
                                        </span>
                                    )}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};