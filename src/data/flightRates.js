// src/data/flightRates.js

// Helper function to calculate return prices
const calculateReturnPrice = (min, max) => {
  // For international flights, return is typically 1.8x to 2x the one-way price
  return {
    min: Math.round(min * 1.9),
    max: Math.round(max * 1.9)
  };
};

const calculateDomesticReturnPrice = (min, max) => {
  // For domestic flights, return is typically 1.6x to 1.8x
  return {
    min: Math.round(min * 1.7),
    max: Math.round(max * 1.7)
  };
};

export const flightRates = {
  // ==================== PAKISTAN TO GULF COUNTRIES ====================
  
  "LHE-DXB": { 
    from: "Lahore (LHE)", 
    to: "Dubai (DXB)", 
    currency: "PKR", 
    priceRange: { min: 55000, max: 90000 },
    airline: "Fly Dubai" 
  },
  "LHE-BAH": { 
    from: "Lahore (LHE)", 
    to: "Bahrain (BAH)", 
    currency: "PKR", 
    priceRange: { min: 45000, max: 75000 },
    airline: "Gulf Air" 
  },
  "LHE-RUH": { 
    from: "Lahore (LHE)", 
    to: "Riyadh (RUH)", 
    currency: "PKR", 
    priceRange: { min: 50000, max: 85000 },
    airline: "Saudia" 
  },
  "LHE-JED": { 
    from: "Lahore (LHE)", 
    to: "Jeddah (JED)", 
    currency: "PKR", 
    priceRange: { min: 52000, max: 88000 },
    airline: "Saudia" 
  },
  "LHE-DOH": { 
    from: "Lahore (LHE)", 
    to: "Doha (DOH)", 
    currency: "PKR", 
    priceRange: { min: 60000, max: 95000 },
    airline: "Qatar Airways" 
  },
  "LHE-MCT": { 
    from: "Lahore (LHE)", 
    to: "Muscat (MCT)", 
    currency: "PKR", 
    priceRange: { min: 42000, max: 70000 },
    airline: "Oman Air" 
  },
  "LHE-KWI": { 
    from: "Lahore (LHE)", 
    to: "Kuwait (KWI)", 
    currency: "PKR", 
    priceRange: { min: 46000, max: 76000 },
    airline: "Kuwait Airways" 
  },
  "LHE-AUH": { 
    from: "Lahore (LHE)", 
    to: "Abu Dhabi (AUH)", 
    currency: "PKR", 
    priceRange: { min: 54000, max: 88000 },
    airline: "Etihad Airways" 
  },
  "LHE-SHJ": { 
    from: "Lahore (LHE)", 
    to: "Sharjah (SHJ)", 
    currency: "PKR", 
    priceRange: { min: 48000, max: 78000 },
    airline: "Air Arabia" 
  },

  // Karachi to Gulf
  "KHI-DXB": { 
    from: "Karachi (KHI)", 
    to: "Dubai (DXB)", 
    currency: "PKR", 
    priceRange: { min: 48000, max: 80000 },
    airline: "Fly Dubai" 
  },
  "KHI-BAH": { 
    from: "Karachi (KHI)", 
    to: "Bahrain (BAH)", 
    currency: "PKR", 
    priceRange: { min: 42000, max: 70000 },
    airline: "Gulf Air" 
  },
  "KHI-RUH": { 
    from: "Karachi (KHI)", 
    to: "Riyadh (RUH)", 
    currency: "PKR", 
    priceRange: { min: 46000, max: 78000 },
    airline: "Saudia" 
  },
  "KHI-JED": { 
    from: "Karachi (KHI)", 
    to: "Jeddah (JED)", 
    currency: "PKR", 
    priceRange: { min: 48000, max: 80000 },
    airline: "Saudia" 
  },
  "KHI-DOH": { 
    from: "Karachi (KHI)", 
    to: "Doha (DOH)", 
    currency: "PKR", 
    priceRange: { min: 55000, max: 90000 },
    airline: "Qatar Airways" 
  },
  "KHI-MCT": { 
    from: "Karachi (KHI)", 
    to: "Muscat (MCT)", 
    currency: "PKR", 
    priceRange: { min: 40000, max: 68000 },
    airline: "Oman Air" 
  },
  "KHI-KWI": { 
    from: "Karachi (KHI)", 
    to: "Kuwait (KWI)", 
    currency: "PKR", 
    priceRange: { min: 44000, max: 74000 },
    airline: "Kuwait Airways" 
  },
  "KHI-AUH": { 
    from: "Karachi (KHI)", 
    to: "Abu Dhabi (AUH)", 
    currency: "PKR", 
    priceRange: { min: 50000, max: 84000 },
    airline: "Etihad Airways" 
  },
  "KHI-SHJ": { 
    from: "Karachi (KHI)", 
    to: "Sharjah (SHJ)", 
    currency: "PKR", 
    priceRange: { min: 45000, max: 75000 },
    airline: "Air Arabia" 
  },

  // Islamabad to Gulf
  "ISB-DXB": { 
    from: "Islamabad (ISB)", 
    to: "Dubai (DXB)", 
    currency: "PKR", 
    priceRange: { min: 53000, max: 86000 },
    airline: "Fly Dubai" 
  },
  "ISB-BAH": { 
    from: "Islamabad (ISB)", 
    to: "Bahrain (BAH)", 
    currency: "PKR", 
    priceRange: { min: 46000, max: 76000 },
    airline: "Gulf Air" 
  },
  "ISB-RUH": { 
    from: "Islamabad (ISB)", 
    to: "Riyadh (RUH)", 
    currency: "PKR", 
    priceRange: { min: 48000, max: 80000 },
    airline: "Saudia" 
  },
  "ISB-JED": { 
    from: "Islamabad (ISB)", 
    to: "Jeddah (JED)", 
    currency: "PKR", 
    priceRange: { min: 50000, max: 84000 },
    airline: "Saudia" 
  },
  "ISB-DOH": { 
    from: "Islamabad (ISB)", 
    to: "Doha (DOH)", 
    currency: "PKR", 
    priceRange: { min: 58000, max: 92000 },
    airline: "Qatar Airways" 
  },
  "ISB-MCT": { 
    from: "Islamabad (ISB)", 
    to: "Muscat (MCT)", 
    currency: "PKR", 
    priceRange: { min: 43000, max: 72000 },
    airline: "Oman Air" 
  },
  "ISB-KWI": { 
    from: "Islamabad (ISB)", 
    to: "Kuwait (KWI)", 
    currency: "PKR", 
    priceRange: { min: 47000, max: 78000 },
    airline: "Kuwait Airways" 
  },
  "ISB-AUH": { 
    from: "Islamabad (ISB)", 
    to: "Abu Dhabi (AUH)", 
    currency: "PKR", 
    priceRange: { min: 52000, max: 86000 },
    airline: "Etihad Airways" 
  },
  "ISB-SHJ": { 
    from: "Islamabad (ISB)", 
    to: "Sharjah (SHJ)", 
    currency: "PKR", 
    priceRange: { min: 49000, max: 80000 },
    airline: "Air Arabia" 
  },

  // Peshawar to Gulf
  "PEW-DXB": { 
    from: "Peshawar (PEW)", 
    to: "Dubai (DXB)", 
    currency: "PKR", 
    priceRange: { min: 50000, max: 82000 },
    airline: "Fly Dubai" 
  },
  "PEW-RUH": { 
    from: "Peshawar (PEW)", 
    to: "Riyadh (RUH)", 
    currency: "PKR", 
    priceRange: { min: 46000, max: 78000 },
    airline: "Saudia" 
  },
  "PEW-JED": { 
    from: "Peshawar (PEW)", 
    to: "Jeddah (JED)", 
    currency: "PKR", 
    priceRange: { min: 48000, max: 80000 },
    airline: "Saudia" 
  },
  "PEW-DOH": { 
    from: "Peshawar (PEW)", 
    to: "Doha (DOH)", 
    currency: "PKR", 
    priceRange: { min: 56000, max: 90000 },
    airline: "Qatar Airways" 
  },
  "PEW-KWI": { 
    from: "Peshawar (PEW)", 
    to: "Kuwait (KWI)", 
    currency: "PKR", 
    priceRange: { min: 45000, max: 75000 },
    airline: "Kuwait Airways" 
  },

  // Multan to Gulf
  "MUX-DXB": { 
    from: "Multan (MUX)", 
    to: "Dubai (DXB)", 
    currency: "PKR", 
    priceRange: { min: 49000, max: 80000 },
    airline: "Fly Dubai" 
  },
  "MUX-RUH": { 
    from: "Multan (MUX)", 
    to: "Riyadh (RUH)", 
    currency: "PKR", 
    priceRange: { min: 45000, max: 76000 },
    airline: "Saudia" 
  },
  "MUX-JED": { 
    from: "Multan (MUX)", 
    to: "Jeddah (JED)", 
    currency: "PKR", 
    priceRange: { min: 47000, max: 79000 },
    airline: "Saudia" 
  },
  "MUX-DOH": { 
    from: "Multan (MUX)", 
    to: "Doha (DOH)", 
    currency: "PKR", 
    priceRange: { min: 55000, max: 88000 },
    airline: "Qatar Airways" 
  },

  // Sialkot to Gulf
  "SKT-DXB": { 
    from: "Sialkot (SKT)", 
    to: "Dubai (DXB)", 
    currency: "PKR", 
    priceRange: { min: 48000, max: 78000 },
    airline: "Fly Dubai" 
  },
  "SKT-RUH": { 
    from: "Sialkot (SKT)", 
    to: "Riyadh (RUH)", 
    currency: "PKR", 
    priceRange: { min: 44000, max: 74000 },
    airline: "Saudia" 
  },
  "SKT-JED": { 
    from: "Sialkot (SKT)", 
    to: "Jeddah (JED)", 
    currency: "PKR", 
    priceRange: { min: 46000, max: 77000 },
    airline: "Saudia" 
  },
  "SKT-DOH": { 
    from: "Sialkot (SKT)", 
    to: "Doha (DOH)", 
    currency: "PKR", 
    priceRange: { min: 54000, max: 87000 },
    airline: "Qatar Airways" 
  },

  // Faisalabad to Gulf
  "LYP-DXB": { 
    from: "Faisalabad (LYP)", 
    to: "Dubai (DXB)", 
    currency: "PKR", 
    priceRange: { min: 49000, max: 80000 },
    airline: "Fly Dubai" 
  },
  "LYP-RUH": { 
    from: "Faisalabad (LYP)", 
    to: "Riyadh (RUH)", 
    currency: "PKR", 
    priceRange: { min: 45000, max: 76000 },
    airline: "Saudia" 
  },
  "LYP-JED": { 
    from: "Faisalabad (LYP)", 
    to: "Jeddah (JED)", 
    currency: "PKR", 
    priceRange: { min: 47000, max: 79000 },
    airline: "Saudia" 
  },

  // Quetta to Gulf
  "UET-DXB": { 
    from: "Quetta (UET)", 
    to: "Dubai (DXB)", 
    currency: "PKR", 
    priceRange: { min: 51000, max: 83000 },
    airline: "Fly Dubai" 
  },
  "UET-RUH": { 
    from: "Quetta (UET)", 
    to: "Riyadh (RUH)", 
    currency: "PKR", 
    priceRange: { min: 47000, max: 78000 },
    airline: "Saudia" 
  },

  // ==================== PAKISTAN TO EUROPE ====================
  
  "LHE-LHR": { 
    from: "Lahore (LHE)", 
    to: "London (LHR)", 
    currency: "PKR", 
    priceRange: { min: 120000, max: 200000 },
    airline: "British Airways" 
  },
  "LHE-CDG": { 
    from: "Lahore (LHE)", 
    to: "Paris (CDG)", 
    currency: "PKR", 
    priceRange: { min: 130000, max: 215000 },
    airline: "Air France" 
  },
  "LHE-FRA": { 
    from: "Lahore (LHE)", 
    to: "Frankfurt (FRA)", 
    currency: "PKR", 
    priceRange: { min: 125000, max: 205000 },
    airline: "Lufthansa" 
  },
  "LHE-MAN": { 
    from: "Lahore (LHE)", 
    to: "Manchester (MAN)", 
    currency: "PKR", 
    priceRange: { min: 115000, max: 195000 },
    airline: "British Airways" 
  },
  "LHE-AMS": { 
    from: "Lahore (LHE)", 
    to: "Amsterdam (AMS)", 
    currency: "PKR", 
    priceRange: { min: 128000, max: 210000 },
    airline: "KLM" 
  },
  "LHE-IST": { 
    from: "Lahore (LHE)", 
    to: "Istanbul (IST)", 
    currency: "PKR", 
    priceRange: { min: 85000, max: 145000 },
    airline: "Turkish Airlines" 
  },

  "KHI-LHR": { 
    from: "Karachi (KHI)", 
    to: "London (LHR)", 
    currency: "PKR", 
    priceRange: { min: 115000, max: 190000 },
    airline: "British Airways" 
  },
  "KHI-CDG": { 
    from: "Karachi (KHI)", 
    to: "Paris (CDG)", 
    currency: "PKR", 
    priceRange: { min: 125000, max: 205000 },
    airline: "Air France" 
  },
  "KHI-FRA": { 
    from: "Karachi (KHI)", 
    to: "Frankfurt (FRA)", 
    currency: "PKR", 
    priceRange: { min: 120000, max: 198000 },
    airline: "Lufthansa" 
  },
  "KHI-MAN": { 
    from: "Karachi (KHI)", 
    to: "Manchester (MAN)", 
    currency: "PKR", 
    priceRange: { min: 110000, max: 185000 },
    airline: "British Airways" 
  },
  "KHI-AMS": { 
    from: "Karachi (KHI)", 
    to: "Amsterdam (AMS)", 
    currency: "PKR", 
    priceRange: { min: 122000, max: 200000 },
    airline: "KLM" 
  },
  "KHI-IST": { 
    from: "Karachi (KHI)", 
    to: "Istanbul (IST)", 
    currency: "PKR", 
    priceRange: { min: 82000, max: 138000 },
    airline: "Turkish Airlines" 
  },

  "ISB-LHR": { 
    from: "Islamabad (ISB)", 
    to: "London (LHR)", 
    currency: "PKR", 
    priceRange: { min: 118000, max: 195000 },
    airline: "British Airways" 
  },
  "ISB-CDG": { 
    from: "Islamabad (ISB)", 
    to: "Paris (CDG)", 
    currency: "PKR", 
    priceRange: { min: 128000, max: 210000 },
    airline: "Air France" 
  },
  "ISB-FRA": { 
    from: "Islamabad (ISB)", 
    to: "Frankfurt (FRA)", 
    currency: "PKR", 
    priceRange: { min: 122000, max: 200000 },
    airline: "Lufthansa" 
  },
  "ISB-MAN": { 
    from: "Islamabad (ISB)", 
    to: "Manchester (MAN)", 
    currency: "PKR", 
    priceRange: { min: 113000, max: 190000 },
    airline: "British Airways" 
  },
  "ISB-IST": { 
    from: "Islamabad (ISB)", 
    to: "Istanbul (IST)", 
    currency: "PKR", 
    priceRange: { min: 84000, max: 142000 },
    airline: "Turkish Airlines" 
  },

  "PEW-LHR": { 
    from: "Peshawar (PEW)", 
    to: "London (LHR)", 
    currency: "PKR", 
    priceRange: { min: 117000, max: 193000 },
    airline: "British Airways" 
  },
  "PEW-IST": { 
    from: "Peshawar (PEW)", 
    to: "Istanbul (IST)", 
    currency: "PKR", 
    priceRange: { min: 83000, max: 140000 },
    airline: "Turkish Airlines" 
  },

  // ==================== PAKISTAN TO SOUTHEAST ASIA ====================
  
  "LHE-KUL": { 
    from: "Lahore (LHE)", 
    to: "Kuala Lumpur (KUL)", 
    currency: "PKR", 
    priceRange: { min: 75000, max: 125000 },
    airline: "Malaysia Airlines" 
  },
  "LHE-SIN": { 
    from: "Lahore (LHE)", 
    to: "Singapore (SIN)", 
    currency: "PKR", 
    priceRange: { min: 85000, max: 140000 },
    airline: "Singapore Airlines" 
  },
  "LHE-BKK": { 
    from: "Lahore (LHE)", 
    to: "Bangkok (BKK)", 
    currency: "PKR", 
    priceRange: { min: 78000, max: 130000 },
    airline: "Thai Airways" 
  },
  "LHE-CGK": { 
    from: "Lahore (LHE)", 
    to: "Jakarta (CGK)", 
    currency: "PKR", 
    priceRange: { min: 82000, max: 135000 },
    airline: "Garuda Indonesia" 
  },

  "KHI-KUL": { 
    from: "Karachi (KHI)", 
    to: "Kuala Lumpur (KUL)", 
    currency: "PKR", 
    priceRange: { min: 70000, max: 118000 },
    airline: "Malaysia Airlines" 
  },
  "KHI-SIN": { 
    from: "Karachi (KHI)", 
    to: "Singapore (SIN)", 
    currency: "PKR", 
    priceRange: { min: 80000, max: 135000 },
    airline: "Singapore Airlines" 
  },
  "KHI-BKK": { 
    from: "Karachi (KHI)", 
    to: "Bangkok (BKK)", 
    currency: "PKR", 
    priceRange: { min: 73000, max: 125000 },
    airline: "Thai Airways" 
  },
  "KHI-CGK": { 
    from: "Karachi (KHI)", 
    to: "Jakarta (CGK)", 
    currency: "PKR", 
    priceRange: { min: 78000, max: 130000 },
    airline: "Garuda Indonesia" 
  },

  "ISB-KUL": { 
    from: "Islamabad (ISB)", 
    to: "Kuala Lumpur (KUL)", 
    currency: "PKR", 
    priceRange: { min: 77000, max: 128000 },
    airline: "Malaysia Airlines" 
  },
  "ISB-SIN": { 
    from: "Islamabad (ISB)", 
    to: "Singapore (SIN)", 
    currency: "PKR", 
    priceRange: { min: 82000, max: 138000 },
    airline: "Singapore Airlines" 
  },
  "ISB-BKK": { 
    from: "Islamabad (ISB)", 
    to: "Bangkok (BKK)", 
    currency: "PKR", 
    priceRange: { min: 75000, max: 128000 },
    airline: "Thai Airways" 
  },

  // ==================== PAKISTAN TO CHINA ====================
  
  "LHE-PEK": { 
    from: "Lahore (LHE)", 
    to: "Beijing (PEK)", 
    currency: "PKR", 
    priceRange: { min: 65000, max: 110000 },
    airline: "Air China" 
  },
  "LHE-PVG": { 
    from: "Lahore (LHE)", 
    to: "Shanghai (PVG)", 
    currency: "PKR", 
    priceRange: { min: 68000, max: 115000 },
    airline: "China Eastern" 
  },
  "LHE-CAN": { 
    from: "Lahore (LHE)", 
    to: "Guangzhou (CAN)", 
    currency: "PKR", 
    priceRange: { min: 63000, max: 108000 },
    airline: "China Southern" 
  },

  "KHI-PEK": { 
    from: "Karachi (KHI)", 
    to: "Beijing (PEK)", 
    currency: "PKR", 
    priceRange: { min: 62000, max: 105000 },
    airline: "Air China" 
  },
  "KHI-PVG": { 
    from: "Karachi (KHI)", 
    to: "Shanghai (PVG)", 
    currency: "PKR", 
    priceRange: { min: 65000, max: 110000 },
    airline: "China Eastern" 
  },
  "KHI-CAN": { 
    from: "Karachi (KHI)", 
    to: "Guangzhou (CAN)", 
    currency: "PKR", 
    priceRange: { min: 60000, max: 102000 },
    airline: "China Southern" 
  },

  "ISB-PEK": { 
    from: "Islamabad (ISB)", 
    to: "Beijing (PEK)", 
    currency: "PKR", 
    priceRange: { min: 64000, max: 108000 },
    airline: "Air China" 
  },
  "ISB-PVG": { 
    from: "Islamabad (ISB)", 
    to: "Shanghai (PVG)", 
    currency: "PKR", 
    priceRange: { min: 67000, max: 113000 },
    airline: "China Eastern" 
  },
  "ISB-CAN": { 
    from: "Islamabad (ISB)", 
    to: "Guangzhou (CAN)", 
    currency: "PKR", 
    priceRange: { min: 62000, max: 106000 },
    airline: "China Southern" 
  },

  // ==================== PAKISTAN TO NORTH AMERICA ====================
  
  "LHE-JFK": { 
    from: "Lahore (LHE)", 
    to: "New York (JFK)", 
    currency: "PKR", 
    priceRange: { min: 170000, max: 280000 },
    airline: "American Airlines" 
  },
  "LHE-YYZ": { 
    from: "Lahore (LHE)", 
    to: "Toronto (YYZ)", 
    currency: "PKR", 
    priceRange: { min: 175000, max: 285000 },
    airline: "Air Canada" 
  },
  "LHE-IAD": { 
    from: "Lahore (LHE)", 
    to: "Washington (IAD)", 
    currency: "PKR", 
    priceRange: { min: 165000, max: 275000 },
    airline: "Pakistan Airlines" 
  },

  "KHI-JFK": { 
    from: "Karachi (KHI)", 
    to: "New York (JFK)", 
    currency: "PKR", 
    priceRange: { min: 165000, max: 270000 },
    airline: "American Airlines" 
  },
  "KHI-YYZ": { 
    from: "Karachi (KHI)", 
    to: "Toronto (YYZ)", 
    currency: "PKR", 
    priceRange: { min: 170000, max: 275000 },
    airline: "Air Canada" 
  },

  "ISB-JFK": { 
    from: "Islamabad (ISB)", 
    to: "New York (JFK)", 
    currency: "PKR", 
    priceRange: { min: 168000, max: 275000 },
    airline: "American Airlines" 
  },
  "ISB-YYZ": { 
    from: "Islamabad (ISB)", 
    to: "Toronto (YYZ)", 
    currency: "PKR", 
    priceRange: { min: 173000, max: 280000 },
    airline: "Air Canada" 
  },

  // ==================== PAKISTAN TO MIDDLE EAST ====================
  
  "LHE-AMM": { 
    from: "Lahore (LHE)", 
    to: "Amman (AMM)", 
    currency: "PKR", 
    priceRange: { min: 60000, max: 98000 },
    airline: "Royal Jordanian" 
  },
  "LHE-BEY": { 
    from: "Lahore (LHE)", 
    to: "Beirut (BEY)", 
    currency: "PKR", 
    priceRange: { min: 64000, max: 105000 },
    airline: "Middle East Airlines" 
  },
  "LHE-CAI": { 
    from: "Lahore (LHE)", 
    to: "Cairo (CAI)", 
    currency: "PKR", 
    priceRange: { min: 58000, max: 95000 },
    airline: "EgyptAir" 
  },

  "KHI-AMM": { 
    from: "Karachi (KHI)", 
    to: "Amman (AMM)", 
    currency: "PKR", 
    priceRange: { min: 57000, max: 94000 },
    airline: "Royal Jordanian" 
  },
  "KHI-BEY": { 
    from: "Karachi (KHI)", 
    to: "Beirut (BEY)", 
    currency: "PKR", 
    priceRange: { min: 61000, max: 100000 },
    airline: "Middle East Airlines" 
  },
  "KHI-CAI": { 
    from: "Karachi (KHI)", 
    to: "Cairo (CAI)", 
    currency: "PKR", 
    priceRange: { min: 55000, max: 92000 },
    airline: "EgyptAir" 
  },

  "ISB-AMM": { 
    from: "Islamabad (ISB)", 
    to: "Amman (AMM)", 
    currency: "PKR", 
    priceRange: { min: 59000, max: 96000 },
    airline: "Royal Jordanian" 
  },
  "ISB-CAI": { 
    from: "Islamabad (ISB)", 
    to: "Cairo (CAI)", 
    currency: "PKR", 
    priceRange: { min: 56000, max: 93000 },
    airline: "EgyptAir" 
  },

  // ==================== PAKISTAN TO AFRICA ====================
  
  "LHE-NBO": { 
    from: "Lahore (LHE)", 
    to: "Nairobi (NBO)", 
    currency: "PKR", 
    priceRange: { min: 72000, max: 120000 },
    airline: "Kenya Airways" 
  },
  "KHI-NBO": { 
    from: "Karachi (KHI)", 
    to: "Nairobi (NBO)", 
    currency: "PKR", 
    priceRange: { min: 68000, max: 115000 },
    airline: "Kenya Airways" 
  },

  "LHE-CPT": { 
    from: "Lahore (LHE)", 
    to: "Cape Town (CPT)", 
    currency: "PKR", 
    priceRange: { min: 115000, max: 185000 },
    airline: "South African Airways" 
  },
  "KHI-CPT": { 
    from: "Karachi (KHI)", 
    to: "Cape Town (CPT)", 
    currency: "PKR", 
    priceRange: { min: 110000, max: 180000 },
    airline: "South African Airways" 
  },

  // ==================== PAKISTAN TO AUSTRALIA ====================
  
  "LHE-SYD": { 
    from: "Lahore (LHE)", 
    to: "Sydney (SYD)", 
    currency: "PKR", 
    priceRange: { min: 145000, max: 235000 },
    airline: "Qantas" 
  },
  "LHE-MEL": { 
    from: "Lahore (LHE)", 
    to: "Melbourne (MEL)", 
    currency: "PKR", 
    priceRange: { min: 150000, max: 240000 },
    airline: "Qantas" 
  },

  "KHI-SYD": { 
    from: "Karachi (KHI)", 
    to: "Sydney (SYD)", 
    currency: "PKR", 
    priceRange: { min: 140000, max: 230000 },
    airline: "Qantas" 
  },
  "KHI-MEL": { 
    from: "Karachi (KHI)", 
    to: "Melbourne (MEL)", 
    currency: "PKR", 
    priceRange: { min: 145000, max: 235000 },
    airline: "Qantas" 
  },

  // ==================== DOMESTIC PAKISTAN FLIGHTS ====================
  
  "LHE-KHI": { 
    from: "Lahore (LHE)", 
    to: "Karachi (KHI)", 
    currency: "PKR", 
    priceRange: { min: 14000, max: 25000 },
    airline: "Pakistan Airlines" 
  },
  "LHE-ISB": { 
    from: "Lahore (LHE)", 
    to: "Islamabad (ISB)", 
    currency: "PKR", 
    priceRange: { min: 9000, max: 18000 },
    airline: "Pakistan Airlines" 
  },
  "LHE-PEW": { 
    from: "Lahore (LHE)", 
    to: "Peshawar (PEW)", 
    currency: "PKR", 
    priceRange: { min: 12000, max: 22000 },
    airline: "Pakistan Airlines" 
  },
  "LHE-MUX": { 
    from: "Lahore (LHE)", 
    to: "Multan (MUX)", 
    currency: "PKR", 
    priceRange: { min: 10000, max: 19000 },
    airline: "Pakistan Airlines" 
  },
  "LHE-SKT": { 
    from: "Lahore (LHE)", 
    to: "Sialkot (SKT)", 
    currency: "PKR", 
    priceRange: { min: 8500, max: 16000 },
    airline: "Pakistan Airlines" 
  },

  "KHI-ISB": { 
    from: "Karachi (KHI)", 
    to: "Islamabad (ISB)", 
    currency: "PKR", 
    priceRange: { min: 15000, max: 26000 },
    airline: "Pakistan Airlines" 
  },
  "KHI-PEW": { 
    from: "Karachi (KHI)", 
    to: "Peshawar (PEW)", 
    currency: "PKR", 
    priceRange: { min: 17000, max: 28000 },
    airline: "Pakistan Airlines" 
  },
  "KHI-MUX": { 
    from: "Karachi (KHI)", 
    to: "Multan (MUX)", 
    currency: "PKR", 
    priceRange: { min: 13000, max: 23000 },
    airline: "Pakistan Airlines" 
  },
  "KHI-SKT": { 
    from: "Karachi (KHI)", 
    to: "Sialkot (SKT)", 
    currency: "PKR", 
    priceRange: { min: 16000, max: 27000 },
    airline: "Pakistan Airlines" 
  },

  "ISB-PEW": { 
    from: "Islamabad (ISB)", 
    to: "Peshawar (PEW)", 
    currency: "PKR", 
    priceRange: { min: 7500, max: 15000 },
    airline: "Pakistan Airlines" 
  },
  "ISB-MUX": { 
    from: "Islamabad (ISB)", 
    to: "Multan (MUX)", 
    currency: "PKR", 
    priceRange: { min: 12000, max: 22000 },
    airline: "Pakistan Airlines" 
  },
  "ISB-SKT": { 
    from: "Islamabad (ISB)", 
    to: "Sialkot (SKT)", 
    currency: "PKR", 
    priceRange: { min: 10000, max: 19000 },
    airline: "Pakistan Airlines" 
  },
};

// ==================== HELPER FUNCTIONS ====================

// Get all unique airports for autocomplete
export const getAirports = () => {
  const airports = new Set();
  Object.values(flightRates).forEach(flight => {
    airports.add(flight.from);
    airports.add(flight.to);
  });
  return Array.from(airports).sort();
};

// Search flight by from and to
export const searchFlight = (from, to) => {
  const key = Object.keys(flightRates).find(k => 
    flightRates[k].from.toLowerCase().includes(from.toLowerCase()) &&
    flightRates[k].to.toLowerCase().includes(to.toLowerCase())
  );
  
  if (key) {
    const flight = flightRates[key];
    
    // Check if it's a domestic flight (Pakistan cities)
    const fromCode = flight.from.match(/\(([^)]+)\)/)?.[1] || '';
    const toCode = flight.to.match(/\(([^)]+)\)/)?.[1] || '';
    const isDomestic = fromCode && toCode && 
      ['LHE', 'KHI', 'ISB', 'PEW', 'MUX', 'SKT', 'LYP', 'UET', 'GIL'].includes(fromCode) &&
      ['LHE', 'KHI', 'ISB', 'PEW', 'MUX', 'SKT', 'LYP', 'UET', 'GIL'].includes(toCode);
    
    // Calculate return price based on domestic or international
    const returnPrice = isDomestic 
      ? calculateDomesticReturnPrice(flight.priceRange.min, flight.priceRange.max)
      : calculateReturnPrice(flight.priceRange.min, flight.priceRange.max);
    
    // Return flight data with return price
    return {
      ...flight,
      returnPrice: returnPrice
    };
  }
  return null;
};

// Format price range
export const formatPriceRange = (priceRange) => {
  return `PKR ${priceRange.min.toLocaleString()} - ${priceRange.max.toLocaleString()}`;
};

// Get price based on trip type
export const getPriceForTrip = (flight, tripType) => {
  if (tripType === 'roundtrip' && flight.returnPrice) {
    return flight.returnPrice;
  }
  return flight.priceRange;
};

export default flightRates;