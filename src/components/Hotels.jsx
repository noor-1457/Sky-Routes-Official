import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export const Hotels = () => {
  // State for hotel image switching
  const [hotelImages, setHotelImages] = useState({
    sahara: 0,
    parkroyal: 0,
    andalus: 0,
  });

  // Hotel data
  const hotels = [
    {
      id: "voco",
      name: "Voco Jeddah",
      location: "Jeddah (5-Star)",
      image: "https://digital.ihg.com/is/image/ihg/voco-jeddah-10970283612-1x1",
      description:
        "Beachfront 5-star resort with private shoreline access, palm-lined pool deck, and elegant marble lobby.",
      rating: 5,
      price: "PKR 30,000/-",
      images: [
        "https://digital.ihg.com/is/image/ihg/voco-jeddah-10970283612-1x1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lDGQUa58IjucYbY1PEJr_am-PvOyJDF3lO1ckFYIfA&s=10",
      ],
    },
    {
      id: "sharjah",
      name: "Pullman Sharjah",
      location: "Dubai(5-Star)",
      image: "https://www.ahstatic.com/photos/2022_ho_00_p_1024x768.jpg",
      description:
        "Iconic vertical-garden tower in the heart of KL, with skyline-view rooms and lush eco-friendly design.",
      rating: 5,
      price: "PKR 15,000/-",
      images: [
        "https://www.ahstatic.com/photos/2022_ho_00_p_1024x768.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IWg-oWM1c-XOc1WwgwTQvVdjM_H5Sbe5ixNxbK4jKw&s=10",
      ],
    },
    {
      id: "london",
      name: "Hilton London Metro pole",
      location: "UK London(4.5-Star)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-S06qrX_I0LegA1aapqxAeQmdKoX17FTF_iJmcFYTQ&s=10",
      description:
        "Relaxed courtyard hotel with lit pool terrace and greenery - a calm base for London stays.",
      rating: 4.5,
      price: "PKR 68,500/-",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-S06qrX_I0LegA1aapqxAeQmdKoX17FTF_iJmcFYTQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuo_PGKXASClYcNy_DB6lIz_UkTCEft1ia4hspotQ4nA&s=10",
      ],
    },
  ];

  // Switch hotel image handler
  const switchHotelImg = (hotelId, index) => {
    setHotelImages((prev) => ({
      ...prev,
      [hotelId]: index,
    }));
  };

  // Render stars based on rating with dark/light theme compatibility
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars - amber/gold
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`star-${i}`}
          className="text-amber-400 dark:text-amber-400 text-xs"
        />,
      );
    }

    // Half star - amber with opacity
    if (hasHalfStar) {
      stars.push(
        <FaStar
          key="half-star"
          className="text-amber-400 dark:text-amber-400 text-xs"
          style={{ opacity: 0.5 }}
        />,
      );
    }

    // Empty stars - light: slate-300, dark: slate-600
    const totalStars = 5;
    const emptyStars = totalStars - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`empty-${i}`}
          className="text-slate-300 dark:text-slate-600 text-xs"
        />,
      );
    }

    return stars;
  };

  return (
    <>
      {/* 4-STAR HOTELS PACKAGES (As requested by user, display nightly PKR estimates) */}
      <section
        id="hotels"
        className="py-24 bg-lightBg dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/60 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2">
              GLOBAL RESORT BASES
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f172a] dark:text-white uppercase">
              Hotel Bookings
            </h2>
            <p className="text-slateText dark:text-slate-400 mt-3 text-xs">
              Direct reservation setups with premium hotels globally. Fully
              transparent booking voucher issuances.
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
                              ? "bg-white/90 scale-125"
                              : "bg-white/50 hover:bg-white/70"
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
                  <div className="text-xs border-t border-slate-50 dark:border-slate-800/80 pt-4 mb-4">
                    <p className="text-[#0284c7] text-[13px] ">Starting from</p>
                    <div className='flex items-center justify-between text-xs"'>
                      <span className="text-slate-500 dark:text-slate-400 font-bold">
                        Nightly Room Rate
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-black text-sm">
                        {hotel.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory pricing warning notice below hotels */}
          <p className="text-center text-[15px] text-slate-400 dark:text-slate-500 italic mt-8 leading-relaxed max-w-2xl mx-auto font-large">
            * Starting fares. Final price depends on date and availability.
          </p>
        </div>
      </section>
    </>
  );
};
