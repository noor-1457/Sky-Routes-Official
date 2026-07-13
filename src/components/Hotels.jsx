import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export const Hotels = () => {
    // State for hotel image switching
    const [hotelImages, setHotelImages] = useState({
        sahara: 0,
        parkroyal: 0,
        andalus: 0
    });

    // Hotel data
    const hotels = [
        {
            id: 'sahara',
            name: 'Sahara Beach Resort & Spa',
            location: 'Sharjah (5-Star)',
            image: 'https://i.ytimg.com/vi/NRWZLo-DVq8/sddefault.jpg',
            description: 'Beachfront 5-star resort with private shoreline access, palm-lined pool deck, and elegant marble lobby.',
            rating: 5,
            price: 'PKR 13,000/-',
            images: [
                'https://i.ytimg.com/vi/NRWZLo-DVq8/sddefault.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v13FQDMFqf7Y_-EtGq-s1tH4dWEVoQbc4N5vNEjOiA&s=10'
            ]
        },
        {
            id: 'parkroyal',
            name: 'PARKROYAL COLLECTION KL',
            location: 'Kuala Lumpur (5-Star)',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjO18uOYyq-WEF7hmXe4khPikolzlnXnbBmOj61WMJmkO7jMWYCwYwzQ&s=10',
            description: 'Iconic vertical-garden tower in the heart of KL, with skyline-view rooms and lush eco-friendly design.',
            rating: 5,
            price: 'PKR 37,000/-',
            images: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjO18uOYyq-WEF7hmXe4khPikolzlnXnbBmOj61WMJmkO7jMWYCwYwzQ&s=10',
                'https://i.ytimg.com/vi/NRWZLo-DVq8/sddefault.jpg'
            ]
        },
        {
            id: 'andalus',
            name: 'Andalus Habitat Hotel',
            location: 'Jeddah (4.5-Star)',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v13FQDMFqf7Y_-EtGq-s1tH4dWEVoQbc4N5vNEjOiA&s=10',
            description: 'Relaxed courtyard hotel with lit pool terrace and greenery - a calm base for Jeddah stays.',
            rating: 4.5,
            price: 'PKR 22,000/-',
            images: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v13FQDMFqf7Y_-EtGq-s1tH4dWEVoQbc4N5vNEjOiA&s=10',
                'https://i.ytimg.com/vi/NRWZLo-DVq8/sddefault.jpg'
            ]
        }
    ];

    // Switch hotel image handler
    const switchHotelImg = (hotelId, index) => {
        setHotelImages(prev => ({
            ...prev,
            [hotelId]: index
        }));
    };

    // Inquire hotel handler
    const inquireHotel = (hotelName) => {
        const message = `Hi Sky Routes, I'm interested in booking: ${hotelName}. Please share details.`;
        const whatsappUrl = `https://wa.me/923111101470?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Render stars based on rating with dark/light theme compatibility
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        // Full stars - amber/gold
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FaStar key={`star-${i}`} className="text-amber-400 dark:text-amber-400 text-xs" />
            );
        }
        
        // Half star - amber with opacity
        if (hasHalfStar) {
            stars.push(
                <FaStar key="half-star" className="text-amber-400 dark:text-amber-400 text-xs" style={{ opacity: 0.5 }} />
            );
        }
        
        // Empty stars - light: slate-300, dark: slate-600
        const totalStars = 5;
        const emptyStars = totalStars - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <FaRegStar key={`empty-${i}`} className="text-slate-300 dark:text-slate-600 text-xs" />
            );
        }
        
        return stars;
    };

    return (
        <>
            {/* 4-STAR HOTELS PACKAGES (As requested by user, display nightly PKR estimates) */}
            <section id="hotels" className="py-24 bg-lightBg dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/60 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2">
                            GLOBAL RESORT BASES
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#0f172a] dark:text-white uppercase">
                            Hotel Bookings
                        </h2>
                        <p className="text-slateText dark:text-slate-400 mt-3 text-xs">
                            Direct reservation setups with premium hotels globally. Fully transparent booking voucher issuances.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hotels.map((hotel) => (
                            <div 
                                key={hotel.id}
                                className="bg-white dark:bg-[#070a13] rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 card-shadow flex flex-col justify-between transition-colors duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
                            >
                                <div>
                                    <div className="h-48 overflow-hidden relative group">
                                        <img 
                                            src={hotel.images[hotelImages[hotel.id] || 0]} 
                                            alt={hotel.name}
                                            className="w-full h-full object-cover transition-opacity duration-300 group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <span className="absolute top-3 right-3 bg-black/80 dark:bg-slate-900/90 backdrop-blur text-[9px] font-extrabold text-white px-3 py-1 rounded-full uppercase">
                                            {hotel.location}
                                        </span>
                                        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                                            {hotel.images.map((_, index) => (
                                                <button 
                                                    key={index}
                                                    onClick={() => switchHotelImg(hotel.id, index)}
                                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                                        (hotelImages[hotel.id] || 0) === index 
                                                            ? 'bg-white/90 scale-125' 
                                                            : 'bg-white/50 hover:bg-white/70'
                                                    }`}
                                                    aria-label={`Switch to image ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-base font-extrabold text-[#0f172a] dark:text-white uppercase">
                                            {hotel.name}
                                        </h4>
                                        <p className="text-xs text-slateText dark:text-slate-400 mt-1 mb-4">
                                            {hotel.description}
                                        </p>
                                        <div className="flex items-center gap-1 text-amber-400 text-xs">
                                            {renderStars(hotel.rating)}
                                            <span className="text-slate-400 dark:text-slate-500 text-[10px] pl-1 font-bold">
                                                {hotel.rating} Rating
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0 mt-4">
                                    <div className="flex items-center justify-between text-xs border-t border-slate-50 dark:border-slate-800/80 pt-4 mb-4">
                                        <span className="text-slate-500 dark:text-slate-400 font-bold">
                                            Nightly Room Rate
                                        </span>
                                        <span className="text-emerald-600 dark:text-emerald-400 font-black text-sm">
                                            {hotel.price}
                                        </span>
                                    </div>
                                    <button 
                                        onClick={() => inquireHotel(hotel.name)}
                                        className="w-full bg-[#0284c7] dark:bg-skyBrand hover:bg-sky-700 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-[10px] uppercase tracking-widest transition duration-300 shadow-lg shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Book Room Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mandatory pricing warning notice below hotels */}
                    <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 italic mt-8 leading-relaxed max-w-2xl mx-auto font-medium">
                        * Please note: Hotel reservation rates fluctuate frequently depending on room availability, occupancy levels, and exchange rates. These rates are approximate roundabout estimates.
                    </p>
                </div>
            </section>
        </>
    );
};