// import React from 'react';
import { FaStar, FaRegStar, FaWhatsapp } from 'react-icons/fa';

export const Reviews = () => {
    // Reviews data
    const reviews = [
        {
            id: 1,
            name: 'Aslam Zaheer',
            initials: 'AZ',
            rating: 5,
            text: '"Sky Routes is the best travel agency. I booked my ticket from them and received excellent service. Everything was done on time. Highly recommended!" 😊',
            location: 'WhatsApp Review',
            icon: 'whatsapp',
            avatarColor: 'bg-[#e0f2fe] dark:bg-slate-800',
            textColor: 'text-[#0284c7] dark:text-skyBrand',
            isVerified: true
        },
        {
            id: 2,
            name: 'Saleem Rafique',
            initials: 'SR',
            rating: 5,
            text: '"Booked my Umrah tickets through Sky Routes - smooth process, quick replies on WhatsApp, and fair rates. Will definitely come back for my next trip."',
            location: 'Lahore',
            avatarColor: 'bg-[#fef3c7] dark:bg-slate-800',
            textColor: 'text-orangeBrand',
            isVerified: true
        },
        {
            id: 3,
            name: 'AbdulRehman',
            initials: 'AR',
            rating: 4,
            text: '"Helped me understand my visa case strength and what documents I needed. Very patient with all my questions - appreciated the honesty."',
            location: 'Lahore',
            avatarColor: 'bg-[#ecfdf5] dark:bg-slate-800',
            textColor: 'text-emerald-500',
            isVerified: true
        }
    ];

    // Render stars based on rating with dark/light theme compatibility
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        // Full stars - always orange/gold
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FaStar key={`star-${i}`} className="text-amber-400 dark:text-amber-400 text-xs" />
            );
        }
        
        // Half star - orange/gold with opacity
        if (hasHalfStar) {
            stars.push(
                <FaStar key="half-star" className="text-amber-400 dark:text-amber-400 text-xs" style={{ opacity: 0.5 }} />
            );
        }
        
        // Empty stars - light mode: slate-300, dark mode: slate-600
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
            {/* CLIENT TESTIMONIALS */}
            <section id="reviews" className="py-20 bg-lightBg dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/60 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        {/* ✅ ITALIC - Client Feedback */}
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2 italic">
                            💬 CLIENT FEEDBACK
                        </span>
                        
                        <h2 className="text-3xl font-extrabold text-[#0f172a] dark:text-white uppercase">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div 
                                key={review.id}
                                className="bg-white dark:bg-[#070a13] rounded-3xl p-6 border border-slate-100 dark:border-slate-800 card-shadow flex flex-col justify-between transition-colors duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
                            >
                                <div>
                                    <div className="flex text-amber-400 text-xs mb-3 gap-0.5">
                                        {renderStars(review.rating)}
                                    </div>
                                    {/* ✅ ITALIC - Review text */}
                                    <p className="text-xs text-slateText dark:text-slate-300 leading-relaxed mb-4 italic">
                                        {review.text}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className={`w-9 h-9 rounded-full ${review.avatarColor} ${review.textColor} flex items-center justify-center font-black text-xs`}>
                                        {review.initials}
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-extrabold text-deepBase dark:text-white">
                                            {review.name}
                                            {review.isVerified && (
                                                <span className="ml-1 text-[#0284c7] dark:text-skyBrand text-[9px] font-normal not-italic">✓</span>
                                            )}
                                        </p>
                                        {/* ✅ ITALIC - Location with mix */}
                                        <p className="text-[9px] text-slate-400 dark:text-slate-500 italic">
                                            {review.icon === 'whatsapp' ? (
                                                <>
                                                    <FaWhatsapp className="text-emerald-500 inline mr-0.5 not-italic" />
                                                    {review.location}
                                                </>
                                            ) : (
                                                review.location
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    
                </div>
            </section>
        </>
    );
};