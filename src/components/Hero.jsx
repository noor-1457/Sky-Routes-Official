// src/components/Hero.jsx
import { useState, useEffect } from "react";
import {
  FaPlaneDeparture,
  FaMapPin,
  FaChair,
  FaUser,
  FaChild,
  FaBaby,
} from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { flightRates, searchFlight, getAirports } from "../data/flightRates";

export const Hero = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flightClass, setFlightClass] = useState("Economy");
  const [tripType, setTripType] = useState("oneway");
  const [searchResult, setSearchResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [airports, setAirports] = useState([]);
  const [filteredFrom, setFilteredFrom] = useState([]);
  const [filteredTo, setFilteredTo] = useState([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  // Passenger states
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    const airportList = getAirports();
    setAirports(airportList);
  }, []);

  // Calculate total passengers
  const getTotalPassengers = () => adults + children + infants;

  // Calculate price based on passengers for ONE WAY
  const calculatePriceWithPassengers = (basePrice) => {
    const totalPassengers = getTotalPassengers();
    if (totalPassengers === 0) return basePrice;

    let totalMin = 0;
    let totalMax = 0;

    // Adults: 100%
    totalMin += basePrice.min * adults;
    totalMax += basePrice.max * adults;

    // Children (2-12): 75%
    totalMin += basePrice.min * children * 0.75;
    totalMax += basePrice.max * children * 0.75;

    // Infants (0-2): 10%
    totalMin += basePrice.min * infants * 0.1;
    totalMax += basePrice.max * infants * 0.1;

    return {
      min: Math.round(totalMin),
      max: Math.round(totalMax),
    };
  };

  // Calculate price based on passengers for ROUND TRIP (return price is already doubled)
  const calculateReturnPriceWithPassengers = (returnPrice) => {
    const totalPassengers = getTotalPassengers();
    if (totalPassengers === 0) return returnPrice;

    let totalMin = 0;
    let totalMax = 0;

    // Adults: 100%
    totalMin += returnPrice.min * adults;
    totalMax += returnPrice.max * adults;

    // Children (2-12): 75%
    totalMin += returnPrice.min * children * 0.75;
    totalMax += returnPrice.max * children * 0.75;

    // Infants (0-2): 10%
    totalMin += returnPrice.min * infants * 0.1;
    totalMax += returnPrice.max * infants * 0.1;

    return {
      min: Math.round(totalMin),
      max: Math.round(totalMax),
    };
  };

  const handleFromChange = (value) => {
    setFrom(value);
    if (value.length > 1) {
      const filtered = airports.filter((airport) =>
        airport.toLowerCase().includes(value.toLowerCase()),
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
      const filtered = airports.filter((airport) =>
        airport.toLowerCase().includes(value.toLowerCase()),
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
      setSearchResult({
        error: "Please select both departure and destination cities.",
      });
      setShowResult(true);
      return;
    }

    if (tripType === "roundtrip" && !returnDate) {
      setSearchResult({ error: "Please select a return date for round trip." });
      setShowResult(true);
      return;
    }

    if (getTotalPassengers() === 0) {
      setSearchResult({ error: "Please select at least one passenger." });
      setShowResult(true);
      return;
    }

    const result = searchFlight(from, to);

    if (result) {
      // Calculate one way price with passengers
      const oneWayPrice = calculatePriceWithPassengers(result.priceRange);

      // Calculate return price with passengers (if returnPrice exists)
      let returnPriceWithPassengers = null;
      if (result.returnPrice) {
        returnPriceWithPassengers = calculateReturnPriceWithPassengers(
          result.returnPrice,
        );
      }

      setSearchResult({
        ...result,
        tripType: tripType,
        departureDate: departureDate,
        returnDate: returnDate,
        flightClass: flightClass,
        adults: adults,
        children: children,
        infants: infants,
        totalPassengers: getTotalPassengers(),
        priceRange: oneWayPrice,
        returnPrice: returnPriceWithPassengers,
        // Store original prices for reference
        originalPriceRange: result.priceRange,
        originalReturnPrice: result.returnPrice,
      });
      setShowResult(true);
    } else {
      setSearchResult({
        error: `No direct flights found from "${from}" to "${to}". Please try different cities.`,
      });
      setShowResult(true);
    }
  };

  // Passenger Control Component
  const PassengerControl = ({
    label,
    icon: Icon,
    value,
    setValue,
    min = 0,
    max = 9,
  }) => (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-1.5">
        <Icon className="text-slate-400 text-xs" />
        <span className="text-[9px] font-bold text-slate-600 dark:text-slate-300">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setValue(Math.max(min, value - 1))}
          disabled={value <= min}
          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition ${
            value <= min
              ? "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
              : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300"
          }`}
        >
          -
        </button>
        <span className="text-xs font-bold text-slate-800 dark:text-white w-4 text-center">
          {value}
        </span>
        <button
          type="button"
          onClick={() => setValue(Math.min(max, value + 1))}
          disabled={value >= max}
          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition ${
            value >= max
              ? "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
              : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );

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
            {/* ✅ ITALIC - Ready for Take-off */}
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0284c7] dark:text-sky-400 block mb-2 italic">
              ✈️ READY FOR TAKE-OFF
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tight leading-none uppercase text-slate-900 dark:text-white mb-6">
              WHERE DO YOU
              <br />
              WANT TO
              <br />
              {/* ✅ MIX - Orange with slight italic style */}
              <span className="text-orange-500 not-italic font-black">
                EXPLORE?
              </span>
            </h1>
            
            {/* ✅ ITALIC - Description with italic mix */}
            <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm max-w-sm mx-auto lg:mx-0 mb-4 leading-relaxed font-medium italic">
              Plan journeys across <span className="not-italic font-bold">Asia & the Gulf</span> with Pakistan's premium
              travel advisors. Find <span className="not-italic font-semibold">accurate scheduling</span> and 
              <span className="not-italic font-semibold"> direct pricing</span> options instantly.
            </p>
          </div>

          {/* Right Side - Search Form */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative overflow-hidden transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent pointer-events-none"></div>

              <div className="text-center mb-6 relative z-10">
                {/* ✅ ITALIC - Direct Ticketing Engine */}
                <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#0284c7] dark:text-sky-400 block mb-1 italic">
                  <FaPlaneDeparture className="inline mr-1.5 not-italic" /> Direct
                  Ticketing Engine
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-1">
                  QUICK FLIGHT SEARCH
                </h3>
                {/* ✅ ITALIC - Subtitle with mix */}
                <p className="text-slate-600 dark:text-slate-400 text-[10px] font-medium italic">
                  Direct connection to <span className="not-italic font-bold">GDS flight pools</span>. 
                  <span className="not-italic font-semibold"> Lowest pricing</span> guaranteed.
                </p>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                {/* Trip Type Toggle */}
                <div className="flex items-center gap-2 bg-slate-100/60 dark:bg-slate-800/60 p-1.5 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setTripType("oneway")}
                    className={`flex-1 py-2 px-3 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all ${
                      tripType === "oneway"
                        ? "bg-[#0284c7] text-white shadow-lg shadow-blue-500/25"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                    }`}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType("roundtrip")}
                    className={`flex-1 py-2 px-3 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all ${
                      tripType === "roundtrip"
                        ? "bg-[#0284c7] text-white shadow-lg shadow-blue-500/25"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                    }`}
                  >
                    Round Trip
                  </button>
                </div>

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
                        onBlur={() =>
                          setTimeout(() => setShowFromSuggestions(false), 200)
                        }
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
                        onBlur={() =>
                          setTimeout(() => setShowToSuggestions(false), 200)
                        }
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

                {/* Passengers Section */}
                <div className="bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 p-3 rounded-xl text-left transition">
                  <label className="block text-[8px] uppercase tracking-wider font-extrabold text-slate-400 mb-1.5">
                    PASSENGERS
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <PassengerControl
                      label="Adults"
                      icon={FaUser}
                      value={adults}
                      setValue={setAdults}
                      min={0}
                      max={9}
                    />
                    <PassengerControl
                      label="Children (2-12)"
                      icon={FaChild}
                      value={children}
                      setValue={setChildren}
                      min={0}
                      max={9}
                    />
                    <PassengerControl
                      label="Infants (0-2)"
                      icon={FaBaby}
                      value={infants}
                      setValue={setInfants}
                      min={0}
                      max={9}
                    />
                  </div>
                  <div className="text-[8px] text-slate-400 dark:text-slate-500 mt-1.5 text-right">
                    Total: {getTotalPassengers()} passenger
                    {getTotalPassengers() !== 1 ? "s" : ""}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Departure Date */}
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

                  {/* Return Date - Only show for Round Trip */}
                  {tripType === "roundtrip" && (
                    <div className="bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 p-3 rounded-xl text-left transition">
                      <label className="block text-[8px] uppercase tracking-wider font-extrabold text-slate-400 mb-0.5">
                        RETURN DATE
                      </label>
                      <div className="relative flex items-center">
                        <FaCalendarDays className="text-slate-400 mr-2 text-xs" />
                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          className="w-full bg-transparent border-none focus:outline-none text-xs font-bold text-slate-800 dark:text-white"
                          required={tripType === "roundtrip"}
                          min={departureDate}
                        />
                      </div>
                    </div>
                  )}

                  {/* Cabin Class - Adjust grid based on trip type */}
                  {tripType === "oneway" && (
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
                  )}
                </div>

                {/* Cabin Class - Full width for round trip */}
                {tripType === "roundtrip" && (
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
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0284c7] to-blue-700 hover:from-blue-700 hover:to-[#0284c7] text-white font-extrabold py-3.5 px-4 rounded-xl text-[10px] uppercase tracking-widest transition duration-300 shadow-lg shadow-blue-500/25"
                >
                  {tripType === "oneway"
                    ? "SEARCH DIRECT FLIGHT RATES"
                    : "SEARCH ROUND TRIP FLIGHT RATES"}
                </button>

                {/* Search Result with Price Range */}
                {showResult && searchResult && (
                  <div
                    className={`text-xs font-semibold rounded-xl px-4 py-3 border ${
                      searchResult.error
                        ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                        : "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                    }`}
                  >
                    {searchResult.error ? (
                      <p className="text-red-600 dark:text-red-400">
                        {searchResult.error}
                      </p>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            {/* ✅ ITALIC - Flight route */}
                            <span className="text-slate-600 dark:text-slate-300 text-[10px] italic">
                              {searchResult.from} → {searchResult.to}
                            </span>
                            <span className="text-[8px] text-slate-400 dark:text-slate-500 ml-2 not-italic">
                              {searchResult.tripType === "oneway"
                                ? "One Way"
                                : "Round Trip"}
                            </span>
                          </div>
                          <span className="text-slate-600 dark:text-slate-300 text-[9px] font-bold not-italic">
                            {searchResult.airline}
                          </span>
                        </div>

                        {/* Passenger Info */}
                        <div className="flex justify-between text-[8px] text-slate-500 dark:text-slate-400 border-t border-green-200 dark:border-green-800 pt-1">
                          <span className="italic">
                            {searchResult.adults > 0 &&
                              `${searchResult.adults} Adult${searchResult.adults > 1 ? "s" : ""}`}
                            {searchResult.children > 0 &&
                              `, ${searchResult.children} Child${searchResult.children > 1 ? "ren" : ""}`}
                            {searchResult.infants > 0 &&
                              `, ${searchResult.infants} Infant${searchResult.infants > 1 ? "s" : ""}`}
                            <span className="ml-1 text-[7px] text-slate-400 not-italic">
                              (Total: {searchResult.totalPassengers})
                            </span>
                          </span>
                          <span className="text-[7px] text-slate-400 not-italic">
                            {searchResult.flightClass || "Economy"}
                          </span>
                        </div>

                        {/* Dates Display */}
                        <div className="flex justify-between text-[8px] text-slate-500 dark:text-slate-400 border-t border-green-200 dark:border-green-800 pt-1">
                          <span className="italic">
                            Departure: {searchResult.departureDate || "N/A"}
                          </span>
                          {searchResult.tripType === "roundtrip" && (
                            <span className="italic">
                              Return: {searchResult.returnDate || "N/A"}
                            </span>
                          )}
                        </div>

                        {/* Price Range Display */}
                        <div className="flex justify-between items-center border-t border-green-200 dark:border-green-800 pt-2">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                            {searchResult.tripType === "oneway"
                              ? "Total Price"
                              : "Round Trip Price"}
                          </span>
                          <div className="text-right">
                            {searchResult.tripType === "roundtrip" &&
                            searchResult.returnPrice ? (
                              <>
                                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 not-italic">
                                  PKR{" "}
                                  {searchResult.returnPrice.min.toLocaleString()}
                                </span>
                                <span className="text-xs text-slate-400 dark:text-slate-500 mx-1">
                                  -
                                </span>
                                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 not-italic">
                                  PKR{" "}
                                  {searchResult.returnPrice.max.toLocaleString()}
                                </span>
                                {searchResult.totalPassengers > 1 && (
                                  <div className="text-[7px] text-slate-400 dark:text-slate-500 mt-0.5 italic">
                                    (Per person: PKR{" "}
                                    {Math.round(
                                      searchResult.returnPrice.min /
                                        searchResult.totalPassengers,
                                    ).toLocaleString()}{" "}
                                    -{" "}
                                    {Math.round(
                                      searchResult.returnPrice.max /
                                        searchResult.totalPassengers,
                                    ).toLocaleString()}
                                    )
                                  </div>
                                )}
                                <div className="text-[7px] text-slate-400 dark:text-slate-500 mt-0.5 italic">
                                  (One Way: PKR{" "}
                                  {searchResult.priceRange.min.toLocaleString()}{" "}
                                  -{" "}
                                  {searchResult.priceRange.max.toLocaleString()}
                                  )
                                </div>
                              </>
                            ) : (
                              <>
                                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 not-italic">
                                  PKR{" "}
                                  {searchResult.priceRange.min.toLocaleString()}
                                </span>
                                <span className="text-xs text-slate-400 dark:text-slate-500 mx-1">
                                  -
                                </span>
                                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 not-italic">
                                  PKR{" "}
                                  {searchResult.priceRange.max.toLocaleString()}
                                </span>
                                {searchResult.totalPassengers > 1 && (
                                  <div className="text-[7px] text-slate-400 dark:text-slate-500 mt-0.5 italic">
                                    (Per person: PKR{" "}
                                    {Math.round(
                                      searchResult.priceRange.min /
                                        searchResult.totalPassengers,
                                    ).toLocaleString()}{" "}
                                    -{" "}
                                    {Math.round(
                                      searchResult.priceRange.max /
                                        searchResult.totalPassengers,
                                    ).toLocaleString()}
                                    )
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>

                        {/* Cancellation Policy */}
                        <div className="mt-2 pt-2 border-t border-green-200 dark:border-green-800">
                          {/* ✅ ITALIC - Policy text */}
                          <p className="text-[14px] text-slate-400 dark:text-slate-500 text-center leading-relaxed italic">
                            Approximate fare. Final price may vary depending on
                            availability and booking date.
                          </p>
                        </div>
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