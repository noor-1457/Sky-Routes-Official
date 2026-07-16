// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { FaPlaneDeparture, FaMapPin, FaChair } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { flightRates, searchFlight, getAirports, formatPriceRange } from '../data/flightRates';

export const Hero = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [flightClass, setFlightClass] = useState('Economy');
  const [searchResult, setSearchResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [airports, setAirports] = useState([]);
  const [filteredFrom, setFilteredFrom] = useState([]);
  const [filteredTo, setFilteredTo] = useState([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  useEffect(() => {
    const airportList = getAirports();
    setAirports(airportList);
  }, []);

  const handleFromChange = (value) => {
    setFrom(value);
    if (value.length > 1) {
      const filtered = airports.filter(airport =>
        airport.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFrom(filtered);
      setShowFromSuggestions(true);
    } else {
      setShowFromSuggestions(false);
    }
  };

  const handleToChange = (value) => {
    setTo(value);
    if (value.length > 1) {
      const filtered = airports.filter(airport =>
        airport.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTo(filtered);
      setShowToSuggestions(true);
    } else {
      setShowToSuggestions(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!from || !to) {
      setSearchResult({ error: 'Please select both departure and destination cities.' });
      setShowResult(true);
      return;
    }

    const result = searchFlight(from, to);

    if (result) {
      setSearchResult(result);
      setShowResult(true);
    } else {
      setSearchResult({
        error: `No direct flights found from "${from}" to "${to}". Please try different cities.`
      });
      setShowResult(true);
    }
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/5237590/5237590-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/15 via-white/85 to-[#f3f7fa] dark:from-[#05070f]/45 dark:via-[#05070f]/90 dark:to-[#05070f] transition-colors duration-300"></div>

      {/* Clouds */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden select-none opacity-40">
        <div className="absolute top-[12%] left-[10%] cloud-slow">
          <div className="w-96 h-36 bg-white dark:bg-slate-800 rounded-full blur-2xl opacity-85"></div>
        </div>
        <div className="absolute top-[45%] left-[55%] cloud-medium">
          <div className="w-[500px] h-48 bg-white dark:bg-slate-800 rounded-full blur-[80px] opacity-75"></div>
        </div>
        <div className="absolute top-[20%] left-[35%] cloud-fast">
          <div className="w-64 h-24 bg-white dark:bg-slate-800 rounded-full blur-xl opacity-90"></div>
        </div>
      </div>

      <div></div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Heading */}
          <div className="lg:col-span-6 text-center lg:text-left pt-6 lg:pt-0">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0284c7] dark:text-sky-400 block mb-2">
              READY FOR TAKE-OFF
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tight leading-none uppercase text-slate-900 dark:text-white mb-6">
              WHERE DO YOU
              <br />
              WANT TO
              <br />
              <span className="text-orange-500">EXPLORE?</span>
            </h1>
            <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm max-w-sm mx-auto lg:mx-0 mb-4 leading-relaxed font-medium">
              Plan journeys across Asia & the Gulf with Pakistan's premium
              travel advisors. Find accurate scheduling and direct pricing
              options instantly.
            </p>
          </div>

          {/* Right Side - Search Form */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative overflow-hidden transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent pointer-events-none"></div>

              <div className="text-center mb-6 relative z-10">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#0284c7] dark:text-sky-400 block mb-1">
                  <FaPlaneDeparture className="inline mr-1.5" /> Direct Ticketing Engine
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-1">
                  QUICK FLIGHT SEARCH
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-[10px] font-medium">
                  Direct connection to GDS flight pools. Lowest pricing guaranteed.
                </p>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* From Input */}
                  <div className="bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 p-3 rounded-xl text-left transition relative">
                    <label className="block text-[8px] uppercase tracking-wider font-extrabold text-slate-400 mb-0.5">
                      FROM WHERE?
                    </label>
                    <div className="relative flex items-center">
                      <FaPlaneDeparture className="text-slate-400 mr-2 text-xs" />
                      <input
                        type="text"
                        value={from}
                        onChange={(e) => handleFromChange(e.target.value)}
                        onFocus={() => setShowFromSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                        placeholder="Lahore (LHE), Pakistan"
                        className="w-full bg-transparent border-none focus:outline-none text-xs font-bold text-slate-800 dark:text-white placeholder-slate-400"
                        required
                      />
                    </div>
                    {showFromSuggestions && filteredFrom.length > 0 && (
                      <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 max-h-48 overflow-y-auto">
                        {filteredFrom.map((airport, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-200"
                            onMouseDown={() => {
                              setFrom(airport);
                              setShowFromSuggestions(false);
                            }}
                          >
                            {airport}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* To Input */}
                  <div className="bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 p-3 rounded-xl text-left transition relative">
                    <label className="block text-[8px] uppercase tracking-wider font-extrabold text-slate-400 mb-0.5">
                      TO WHERE?
                    </label>
                    <div className="relative flex items-center">
                      <FaMapPin className="text-slate-400 mr-2 text-xs" />
                      <input
                        type="text"
                        value={to}
                        onChange={(e) => handleToChange(e.target.value)}
                        onFocus={() => setShowToSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                        placeholder="Dubai (DXB), UAE"
                        className="w-full bg-transparent border-none focus:outline-none text-xs font-bold text-slate-800 dark:text-white placeholder-slate-400"
                        required
                      />
                    </div>
                    {showToSuggestions && filteredTo.length > 0 && (
                      <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 max-h-48 overflow-y-auto">
                        {filteredTo.map((airport, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-200"
                            onMouseDown={() => {
                              setTo(airport);
                              setShowToSuggestions(false);
                            }}
                          >
                            {airport}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 p-3 rounded-xl text-left transition">
                    <label className="block text-[8px] uppercase tracking-wider font-extrabold text-slate-400 mb-0.5">
                      DEPARTURE DATE
                    </label>
                    <div className="relative flex items-center">
                      <FaCalendarDays className="text-slate-400 mr-2 text-xs" />
                      <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="w-full bg-transparent border-none focus:outline-none text-xs font-bold text-slate-800 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 p-3 rounded-xl text-left transition">
                    <label className="block text-[8px] uppercase tracking-wider font-extrabold text-slate-400 mb-0.5">
                      CABIN CLASS
                    </label>
                    <div className="relative flex items-center">
                      <FaChair className="text-slate-400 mr-2 text-xs" />
                      <select
                        value={flightClass}
                        onChange={(e) => setFlightClass(e.target.value)}
                        className="w-full bg-transparent border-none focus:outline-none text-xs font-bold text-slate-800 dark:text-white cursor-pointer"
                      >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0284c7] to-blue-700 hover:from-blue-700 hover:to-[#0284c7] text-white font-extrabold py-3.5 px-4 rounded-xl text-[10px] uppercase tracking-widest transition duration-300 shadow-lg shadow-blue-500/25"
                >
                  SEARCH DIRECT FLIGHT RATES
                </button>

                {/* Search Result with Price Range */}
                {showResult && searchResult && (
                  <div className={`text-xs font-semibold rounded-xl px-4 py-3 border ${
                    searchResult.error
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                      : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                  }`}>
                    {searchResult.error ? (
                      <p className="text-red-600 dark:text-red-400">{searchResult.error}</p>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 dark:text-slate-300 text-[10px]">
                            {searchResult.from} → {searchResult.to}
                          </span>
                          <span className="text-slate-600 dark:text-slate-300 text-[9px] font-bold">
                            {searchResult.airline}
                          </span>
                        </div>
                        
                        {/* Price Range Display */}
                        <div className="flex justify-between items-center border-t border-green-200 dark:border-green-800 pt-2">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">Price Range</span>
                          <div className="text-right">
                            <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                              PKR {searchResult.priceRange.min.toLocaleString()}
                            </span>
                            <span className="text-xs text-slate-400 dark:text-slate-500 mx-1">-</span>
                            <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                              PKR {searchResult.priceRange.max.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-[8px] text-slate-400 dark:text-slate-500 mt-1 text-center">
                          * Prices vary based on season, availability & booking time
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;