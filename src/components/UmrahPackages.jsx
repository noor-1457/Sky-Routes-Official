import { useState } from 'react';
import { 
  FaStar, 
  FaHotel, 
  FaPlane, 
  FaUsers, 
  FaCalendar,
  FaMapMarkerAlt,
  FaBed,
  FaUtensils,
  FaShuttleVan,
  FaMosque,
  FaClock,
  FaUserPlus,
  FaChild,
  FaBaby,
  FaSuitcase
} from 'react-icons/fa';
import { 
  FaStar as FaStarSolid,
  FaRegStar
} from 'react-icons/fa';

export const UmrahPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 'silver',
      name: 'SILVER PACKAGE',
      type: 'silver',
      icon: '🥈',
      badge: 'Economy',
      badgeColor: 'bg-slate-500',
      description: 'Comfortable Umrah experience with quality accommodation',
      departure: 'Lahore',
      airline: 'PIA',
      duration: '21 Days',
      pnr: '9BPVSM',
      publishedDate: '08 JUN 2026',
      flights: {
        outward: { flight: 'SV 735', date: '17JUL', from: 'LHE', to: 'JED', dep: '1030', arr: '1335' },
        return: { flight: 'SV 738', date: '06AUG', from: 'JED', to: 'LHE', dep: '1805', arr: '0100' }
      },
      packages: [
        {
          id: 1,
          city: 'Makkah',
          hotel: 'Fakhr Al Azizia',
          distance: 'Shuttle Service',
          nights: '8+4',
          prices: {
            sharing: '271,000',
            triple: '284,000',
            quad: '274,500',
            double: '302,500'
          }
        },
        {
          id: 2,
          city: 'Makkah',
          hotel: 'Qila Aiyad',
          distance: 'Shuttle Service',
          nights: '8+4',
          prices: {
            sharing: '283,000',
            triple: '302,000',
            quad: '288,000',
            double: '330,000'
          }
        },
        {
          id: 3,
          city: 'Madinah',
          hotel: 'Hala Taibah',
          distance: 'Shuttle Service',
          nights: '8',
          prices: {
            sharing: '313,000',
            triple: '380,000'
          }
        }
      ],
      infantPrice: '70,000',
      childPrice: '206,000',
      childWithBed: '20,000 less',
      baggage: '30kg/30kg'
    },
    {
      id: 'gold',
      name: 'GOLD PACKAGE',
      type: 'gold',
      icon: '🥇',
      badge: 'Premium',
      badgeColor: 'bg-amber-500',
      description: 'Premium Umrah experience with closer hotels',
      departure: 'Lahore',
      airline: 'PIA',
      duration: '22 Days',
      pnr: '9EKT7C',
      publishedDate: '14 MAY 2026',
      flights: {
        outward: { flight: 'PK859', date: '13JUL', from: 'LHE', to: 'JED', dep: '2350', arr: '0245' },
        return: { flight: 'PK860', date: '03AUG', from: 'JED', to: 'LHE', dep: '2050', arr: '0355' }
      },
      packages: [
        {
          id: 1,
          city: 'Makkah',
          hotel: 'Arafat Golden',
          distance: 'Shuttle Service',
          nights: '7+6',
          prices: {
            sharing: '270,500',
            triple: '285,000'
          }
        },
        {
          id: 2,
          city: 'Makkah',
          hotel: 'That Hotel',
          distance: '800-900 Mtr',
          nights: '7+6',
          prices: {
            sharing: '301,000',
            triple: '334,500'
          }
        },
        {
          id: 3,
          city: 'Makkah',
          hotel: 'Rukan Al Zawia',
          distance: '700-800 Mtr',
          nights: '7+6',
          prices: {
            sharing: '301,000',
            triple: '334,500'
          }
        },
        {
          id: 4,
          city: 'Madinah',
          hotel: 'Anwar Al Madain',
          distance: '700-750 Mtr',
          nights: '8',
          prices: {
            sharing: '312,500',
            triple: '379,000'
          }
        },
        {
          id: 5,
          city: 'Madinah',
          hotel: 'Majd Silver',
          distance: '600-700 Mtr',
          nights: '8',
          prices: {
            sharing: '328,000',
            triple: '409,500'
          }
        }
      ],
      infantPrice: '70,000',
      childPrice: '207,000',
      childWithBed: '20,000 less',
      baggage: '30kg/30kg'
    },
    {
      id: 'diamond',
      name: 'DIAMOND PACKAGE',
      type: 'diamond',
      icon: '💎',
      badge: 'Luxury',
      badgeColor: 'bg-sky-500',
      description: 'Luxury 28-day Umrah experience with 5-star hotels',
      departure: 'Lahore',
      airline: 'PIA',
      duration: '28 Days',
      isExclusive: true,
      travelDate: '15th Aug 2026',
      returnDate: '11th Sep 2026',
      passengers: '8 Adults',
      packages: [
        {
          id: 1,
          city: 'Makkah',
          hotel: 'Voco Makkah by IHG',
          distance: '1500 Mtr (Shuttle Service)',
          nights: '10',
          star: '5 Star',
          room: '2 Quad Rooms',
          meal: 'Room Only',
          prices: {
            perPerson: '220,000'
          }
        },
        {
          id: 2,
          city: 'Madinah',
          hotel: 'Triple One Medinah Hotel',
          distance: 'Near Haram',
          nights: '10',
          star: '4 Star',
          room: '2 Quad Rooms',
          meal: 'Room Only',
          prices: {
            perPerson: 'Included'
          }
        },
        {
          id: 3,
          city: 'Makkah',
          hotel: 'Voco Makkah by IHG',
          distance: '1500 Mtr (Shuttle Service)',
          nights: '7',
          star: '5 Star',
          room: '2 Quad Rooms',
          meal: 'Room Only',
          prices: {
            perPerson: 'Included'
          }
        }
      ],
      includes: [
        'Umrah Visa',
        'Private Transport by Hiace (JED Airport → Makkah Hotel → Medinah Hotel → Makkah Hotel → Jeddah Airport)',
        'Hotel Accommodation as Mentioned'
      ],
      prices: {
        withoutAir: '220,000',
        flightPerPerson: '186,000',
        withAir: '406,000',
        totalPackage: '3,248,000'
      }
    }
  ];

  const PackageCard = ({ pkg }) => {
    const isDiamond = pkg.type === 'diamond';
    
    return (
      <div 
        className={`group bg-white dark:bg-slate-900 rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl border-sky-400 dark:border-sky-500 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40' 
            `}
      >
        {/* Header */}
        <div className={`p-6 ${
          isDiamond 
            ? 'bg-gradient-to-r from-sky-600 to-blue-600' 
            : pkg.type === 'gold' 
              ? 'bg-gradient-to-r from-amber-600 to-amber-700' 
              : 'bg-gradient-to-r from-slate-600 to-slate-700'
        } text-white`}>
          <div className="flex items-center justify-between">
            <div>
              {/* <span className="text-3xl">{pkg.icon}</span> */}
              <h3 className="text-xl font-black uppercase mt-1 tracking-tight">{pkg.name}</h3>
              <span className={`inline-block px-3 py-0.5 rounded-full text-[9px] font-bold uppercase mt-1 ${pkg.badgeColor} bg-opacity-30`}>
                {pkg.badge}
              </span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black">{pkg.duration}</div>
              <div className="text-[8px] uppercase opacity-80 tracking-wider">{pkg.departure} Departure</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Description */}
          <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            {pkg.description}
          </p>

          {/* Flight Info */}
          {!isDiamond && (
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
              <div className="flex items-center justify-between text-[10px]">
                <div>
                  <span className="text-slate-400 dark:text-slate-500">PNR</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">{pkg.pnr}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500">Airline</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">{pkg.airline}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500">Baggage</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">{pkg.baggage}</span>
                </div>
              </div>
            </div>
          )}

          {/* Flights */}
          {!isDiamond && (
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg">
                <div className="flex items-center gap-1 text-[8px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <FaPlane className="text-[10px]" /> Outward
                </div>
                <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
                  {pkg.flights.outward.flight}
                </div>
                <div className="text-[8px] text-slate-500 dark:text-slate-400">
                  {pkg.flights.outward.date} • {pkg.flights.outward.from} → {pkg.flights.outward.to}
                </div>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/20 p-2 rounded-lg">
                <div className="flex items-center gap-1 text-[8px] text-rose-600 dark:text-rose-400 font-bold">
                  <FaPlane className="text-[10px]" /> Return
                </div>
                <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
                  {pkg.flights.return.flight}
                </div>
                <div className="text-[8px] text-slate-500 dark:text-slate-400">
                  {pkg.flights.return.date} • {pkg.flights.return.from} → {pkg.flights.return.to}
                </div>
              </div>
            </div>
          )}

          {/* Exclusive Package Details */}
          {isDiamond && (
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-[10px] text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1"><FaCalendar className="text-sky-500" /> {pkg.travelDate}</span>
                <span className="flex items-center gap-1"><FaCalendar className="text-sky-500" /> {pkg.returnDate}</span>
                <span className="flex items-center gap-1"><FaUsers className="text-sky-500" /> {pkg.passengers}</span>
              </div>
              <div className="bg-sky-50 dark:bg-sky-900/20 rounded-xl p-3">
                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  <div>
                    <span className="text-slate-400 dark:text-slate-500 block text-[8px]">Without Air</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">PKR {pkg.prices.withoutAir}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-slate-500 block text-[8px]">Flight</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">PKR {pkg.prices.flightPerPerson}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-slate-500 block text-[8px]">With Air</span>
                    <span className="font-bold text-sky-600 dark:text-sky-400">PKR {pkg.prices.withAir}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hotel Packages */}
          <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin">
            {pkg.packages.map((hotel, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <FaHotel className="text-[10px] text-[#0284c7]" />
                      <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
                        {hotel.hotel}
                      </span>
                      {hotel.star && (
                        <span className="text-[8px] text-amber-500">⭐ {hotel.star}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[8px] text-slate-500 dark:text-slate-400">
                      <span><FaMapMarkerAlt className="inline text-[#0284c7]" /> {hotel.distance}</span>
                      <span><FaClock className="inline text-[#0284c7]" /> {hotel.nights} Nights</span>
                      {hotel.room && <span><FaBed className="inline text-[#0284c7]" /> {hotel.room}</span>}
                    </div>
                  </div>
                  <div className="text-right">
                    {hotel.prices.perPerson ? (
                      <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        PKR {hotel.prices.perPerson}
                      </div>
                    ) : (
                      <div className="text-[8px] text-slate-500 dark:text-slate-400">
                        {Object.entries(hotel.prices).map(([key, val]) => (
                          <div key={key} className="text-[9px] font-semibold text-slate-700 dark:text-slate-300">
                            {key}: PKR {val}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Includes (Diamond only) */}
          {isDiamond && (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3">
              <div className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                 Package Includes
              </div>
              <ul className="space-y-1">
                {pkg.includes.map((item, idx) => (
                  <li key={idx} className="text-[9px] text-slate-600 dark:text-slate-400 flex items-start gap-1">
                    <span className="text-emerald-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Child/Infant Info */}
          {!isDiamond && (
            <div className="grid grid-cols-3 gap-1 text-[8px] bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Infant</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">PKR {pkg.infantPrice}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Child (No Bed)</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">PKR {pkg.childPrice}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Child (With Bed)</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">{pkg.childWithBed}</span>
              </div>
            </div>
          )}

          {/* Action Button */}
          <button 
           onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
            className={`w-full py-3 rounded-xl text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 ${
              isDiamond 
                ? 'bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-lg shadow-sky-500/30' 
                : 'bg-[#0284c7] hover:bg-sky-700 text-white shadow-lg shadow-blue-500/20'
            }`}
          >
            Contact Us
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="umrah-packages" className="py-20 bg-slate-50 dark:bg-[#05070f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2">
            Exclusive Offers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white uppercase">
            Umrah Packages
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
            Choose from our range of premium Umrah packages designed for comfort and spiritual fulfillment
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-[13px] text-slate-400 dark:text-slate-500">
            * Prices are per person in PKR. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
};