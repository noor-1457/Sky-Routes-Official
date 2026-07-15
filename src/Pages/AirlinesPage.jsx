import { useState } from "react"
import { WhatsAppButton } from "../components/WhatsAppButton.jsx"

export const AirlinesPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All")

  // Airlines data with icons (using emoji/unicode as placeholders - replace with actual icon imports)
  const airlines = [
    // International Airlines
    { 
      id: 1, 
      name: "Emirates", 
      code: "EK", 
      region: "Middle East", 
      icon: "✈️", 
      alliance: "Star Alliance",
      description: "Leading airline from Dubai"
    },
    { 
      id: 2, 
      name: "Qatar Airways", 
      code: "QR", 
      region: "Middle East", 
      icon: "✈️", 
      alliance: "Oneworld",
      description: "5-star airline from Doha"
    },
    { 
      id: 3, 
      name: "Etihad Airways", 
      code: "EY", 
      region: "Middle East", 
      icon: "✈️", 
      alliance: "None",
      description: "Premium airline from Abu Dhabi"
    },
    { 
      id: 4, 
      name: "Turkish Airlines", 
      code: "TK", 
      region: "Europe", 
      icon: "✈️", 
      alliance: "Star Alliance",
      description: "Connecting Europe and Asia"
    },
    { 
      id: 5, 
      name: "British Airways", 
      code: "BA", 
      region: "Europe", 
      icon: "✈️", 
      alliance: "Oneworld",
      description: "UK's flagship carrier"
    },
    { 
      id: 6, 
      name: "Lufthansa", 
      code: "LH", 
      region: "Europe", 
      icon: "✈️", 
      alliance: "Star Alliance",
      description: "Germany's largest airline"
    },
    { 
      id: 7, 
      name: "Air France", 
      code: "AF", 
      region: "Europe", 
      icon: "✈️", 
      alliance: "SkyTeam",
      description: "French flag carrier"
    },
    { 
      id: 8, 
      name: "KLM Royal Dutch", 
      code: "KL", 
      region: "Europe", 
      icon: "✈️", 
      alliance: "SkyTeam",
      description: "Netherlands' flag carrier"
    },
    { 
      id: 9, 
      name: "Singapore Airlines", 
      code: "SQ", 
      region: "Asia", 
      icon: "✈️", 
      alliance: "Star Alliance",
      description: "World-class airline from Singapore"
    },
    { 
      id: 10, 
      name: "Cathay Pacific", 
      code: "CX", 
      region: "Asia", 
      icon: "✈️", 
      alliance: "Oneworld",
      description: "Premium airline from Hong Kong"
    },
    { 
      id: 11, 
      name: "Malaysia Airlines", 
      code: "MH", 
      region: "Asia", 
      icon: "✈️", 
      alliance: "Oneworld",
      description: "Malaysia's flag carrier"
    },
    { 
      id: 12, 
      name: "Thai Airways", 
      code: "TG", 
      region: "Asia", 
      icon: "✈️", 
      alliance: "Star Alliance",
      description: "Thailand's flag carrier"
    },
    { 
      id: 13, 
      name: "American Airlines", 
      code: "AA", 
      region: "Americas", 
      icon: "✈️", 
      alliance: "Oneworld",
      description: "USA's largest airline"
    },
    { 
      id: 14, 
      name: "Delta Air Lines", 
      code: "DL", 
      region: "Americas", 
      icon: "✈️", 
      alliance: "SkyTeam",
      description: "Major US airline"
    },
    { 
      id: 15, 
      name: "United Airlines", 
      code: "UA", 
      region: "Americas", 
      icon: "✈️", 
      alliance: "Star Alliance",
      description: "Major US airline"
    },
    { 
      id: 16, 
      name: "Air Canada", 
      code: "AC", 
      region: "Americas", 
      icon: "✈️", 
      alliance: "Star Alliance",
      description: "Canada's flag carrier"
    },

    // Pakistani Airlines
    { 
      id: 17, 
      name: "PIA - Pakistan International", 
      code: "PK", 
      region: "Pakistan", 
      icon: "🇵🇰", 
      alliance: "None",
      description: "Pakistan's national flag carrier"
    },
    { 
      id: 18, 
      name: "Airblue", 
      code: "PA", 
      region: "Pakistan", 
      icon: "🇵🇰", 
      alliance: "None",
      description: "Pakistan's leading private airline"
    },
    { 
      id: 19, 
      name: "Serene Air", 
      code: "ER", 
      region: "Pakistan", 
      icon: "🇵🇰", 
      alliance: "None",
      description: "Premium airline from Pakistan"
    },
    { 
      id: 20, 
      name: "Fly Jinnah", 
      code: "9P", 
      region: "Pakistan", 
      icon: "🇵🇰", 
      alliance: "None",
      description: "Pakistan's newest airline"},

    // Gulf Airlines
    { 
      id: 21, 
      name: "Gulf Air", 
      code: "GF", 
      region: "Middle East", 
      icon: "✈️", 
      alliance: "None",
      description: "Bahrain's flag carrier"
    },
    { 
      id: 22, 
      name: "Oman Air", 
      code: "WY", 
      region: "Middle East", 
      icon: "✈️", 
      alliance: "None",
      description: "Oman's flag carrier"
    },
    { 
      id: 23, 
      name: "Kuwait Airways", 
      code: "KU", 
      region: "Middle East", 
      icon: "✈️", 
      alliance: "None",
      description: "Kuwait's flag carrier"
    },

    // Low Cost Airlines
    { 
      id: 24, 
      name: "Air Arabia", 
      code: "G9", 
      region: "Middle East", 
      icon: "✈️", 
      alliance: "None",
      description: "Leading low-cost carrier"
    },
    { 
      id: 25, 
      name: "Flydubai", 
      code: "FZ", 
      region: "Middle East", 
      icon: "✈️", 
      alliance: "None",
      description: "Dubai's low-cost airline"
    },
    { 
      id: 26, 
      name: "Wizz Air", 
      code: "W6", 
      region: "Europe", 
      icon: "✈️", 
      alliance: "None",
      description: "European low-cost carrier"
    },
    { 
      id: 27, 
      name: "Ryanair", 
      code: "FR", 
      region: "Europe", 
      icon: "✈️", 
      alliance: "None",
      description: "Europe's largest low-cost airline"
    },
    { 
      id: 28, 
      name: "easyJet", 
      code: "U2", 
      region: "Europe", 
      icon: "✈️", 
      alliance: "None",
      description: "British low-cost airline"
    },
  ]

  // Get unique regions for filter
  const regions = ["All", ...new Set(airlines.map(airline => airline.region))]

  // Filter airlines based on search and region
  const filteredAirlines = airlines.filter(airline => {
    const matchesSearch = airline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          airline.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === "All" || airline.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  // Group airlines by region for display
  const groupedAirlines = filteredAirlines.reduce((groups, airline) => {
    const region = airline.region
    if (!groups[region]) {
      groups[region] = []
    }
    groups[region].push(airline)
    return groups
  }, {})

  // Get color for alliance badge
  const getAllianceColor = (alliance) => {
    switch(alliance) {
      case "Star Alliance": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "Oneworld": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      case "SkyTeam": return "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300"
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#05070f] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0284c7] dark:text-skyBrand block mb-2">
              SKY ROUTES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partner Airlines
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We partner with the world's leading airlines to provide you with the best travel experience
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-10 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search airlines by name or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition-colors"
              />
            </div>
            <div className="sm:w-48">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition-colors"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredAirlines.length} airlines
          </div>

          {/* Airlines Grid */}
          {filteredAirlines.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No airlines found matching your criteria</p>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedAirlines).map(([region, airlines]) => (
                <div key={region}>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                    {region}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {airlines.map((airline) => (
                      <div
                        key={airline.id}
                        className="bg-white dark:bg-[#0a0f1e] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-[#0284c7] dark:hover:border-skyBrand group"
                      >
                        <div className="flex items-start space-x-4">
                          {/* Airline Icon */}
                          {/* <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0284c7]/10 to-[#0284c7]/5 dark:from-skyBrand/20 dark:to-skyBrand/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                            {airline.icon}
                          </div> */}
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                              {airline.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                                {airline.code}
                              </span>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${getAllianceColor(airline.alliance)}`}>
                                {airline.alliance}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 line-clamp-2">
                              {airline.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#0a0f1e] rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-[#0284c7] dark:text-skyBrand">{airlines.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Partner Airlines</div>
            </div>
            <div className="bg-white dark:bg-[#0a0f1e] rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-[#0284c7] dark:text-skyBrand">{regions.length - 1}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Regions Covered</div>
            </div>
            <div className="bg-white dark:bg-[#0a0f1e] rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-[#0284c7] dark:text-skyBrand">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Destinations</div>
            </div>
            <div className="bg-white dark:bg-[#0a0f1e] rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-[#0284c7] dark:text-skyBrand">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </>
  )
}