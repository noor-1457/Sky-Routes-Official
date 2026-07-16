import { US } from "country-flag-icons/react/3x2";
import { CA } from "country-flag-icons/react/3x2";
import { AU } from "country-flag-icons/react/3x2";
import { GB } from "country-flag-icons/react/3x2";
import { AT } from "country-flag-icons/react/3x2";
import { FR } from "country-flag-icons/react/3x2";
import { DE } from "country-flag-icons/react/3x2";
import { BR } from "country-flag-icons/react/3x2";
import { IT } from "country-flag-icons/react/3x2";
import { KR } from "country-flag-icons/react/3x2";
import { MA } from "country-flag-icons/react/3x2";
import { SA } from "country-flag-icons/react/3x2";
import { AE } from "country-flag-icons/react/3x2";
import { CN } from "country-flag-icons/react/3x2";
import { OM } from "country-flag-icons/react/3x2";
import { QA } from "country-flag-icons/react/3x2";
import { IR } from "country-flag-icons/react/3x2";
import { IQ } from "country-flag-icons/react/3x2";
// import { useNavigate } from "react-router-dom";

export const Visa = () => {
  // const navigate = useNavigate();

  const visaCountries = [
    {
      id: 1,
      name: "USA",
      icon: US,
      visaTypes: ["Tourist", "Business", "Student", "Work"],
    },
    {
      id: 2,
      name: "Canada",
      icon: CA,
      visaTypes: ["Tourist", "Business", "Student", "Work"],
    },
    {
      id: 3,
      name: "Australia",
      icon: AU,
      visaTypes: ["Tourist", "Business", "Student", "Work"],
    },
    {
      id: 4,
      name: "United Kingdom",
      icon: GB,
      visaTypes: ["Tourist", "Business", "Student", "Work"],
    },
    {
      id: 5,
      name: "Austria",
      icon: AT,
      visaTypes: ["Tourist", "Business", "Student"],
    },
    {
      id: 6,
      name: "France",
      icon: FR,
      visaTypes: ["Tourist", "Business", "Student"],
    },
    {
      id: 7,
      name: "Germany",
      icon: DE,
      visaTypes: ["Tourist", "Business", "Student", "Work"],
    },
    { id: 8, name: "Brazil", icon: BR, visaTypes: ["Tourist", "Business"] },
    {
      id: 9,
      name: "Italy",
      icon: IT,
      visaTypes: ["Tourist", "Business", "Student"],
    },
    {
      id: 10,
      name: "South Korea",
      icon: KR,
      visaTypes: ["Tourist", "Business", "Student"],
    },
    { id: 11, name: "Morocco", icon: MA, visaTypes: ["Tourist", "Business"] },
    {
      id: 12,
      name: "Saudi Arabia",
      icon: SA,
      visaTypes: ["Tourist", "Business", "Umrah", "Work"],
    },
    {
      id: 13,
      name: "Dubai (UAE)",
      icon: AE,
      visaTypes: ["Tourist", "Business", "Work", "Transit"],
    },
    {
      id: 14,
      name: "China",
      icon: CN,
      visaTypes: ["Tourist", "Business", "Student", "Work"],
    },
    {
      id: 15,
      name: "Oman",
      icon: OM,
      visaTypes: ["Tourist", "Business", "Work"],
    },
    {
      id: 16,
      name: "Qatar",
      icon: QA,
      visaTypes: ["Tourist", "Business", "Work"],
    },
    { id: 17, name: "Iran", icon: IR, visaTypes: ["Tourist", "Business"] },
    {
      id: 18,
      name: "Iraq",
      icon: IQ,
      visaTypes: ["Tourist", "Business", "Work"],
    },
  ];

  const additionalCountries = [
    "New Zealand",
    "Singapore",
    "Malaysia",
    "Thailand",
    "Japan",
    "Turkey",
    "Egypt",
    "South Africa",
    "Kenya",
    "Mexico",
    "Argentina",
    "Chile",
    "Colombia",
    "Peru",
    "Venezuela",
    "Netherlands",
    "Switzerland",
    "Sweden",
    "Norway",
    "Denmark",
    "Greece",
    "Spain",
    "Portugal",
    "Poland",
    "Hungary",
    "Czech Republic",
    "Russia",
    "Ukraine",
    "India",
    "Pakistan",
  ];

  //   const handleApplyVisa = (countryName) => {
  //     alert(`Starting visa application process for ${countryName}`);
  //   };

  const phoneNumber = "923111101470";
  const message =
    "Assalamu Alaikum! I would like to inquire about Visa packages.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-slate-200 p-6 pt-25 dark:bg-slate-800 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 dark:text-slate-100">
            Visa Services by Sky Routes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-slate-300">
            Professional visa processing for your international travel needs. We
            assist with tourist, business, student, work, and Umrah visas.
          </p>
          <div className="mt-4 inline-block bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
            🌍 50+ Countries Worldwide
          </div>
        </div>

        {/* Main Visa Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {visaCountries.map((country) => {
            const FlagIcon = country.icon;
            return (
              <div
                key={country.id}
                className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-sky-400 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-10 flex-shrink-0 shadow-sm rounded">
                      <FlagIcon className="w-full h-full object-cover rounded" />
                    </div>
                    <h3 className="dark:text-slate-200 text-xl font-semibold text-gray-800 group-hover:text-sky-600 transition-colors">
                      {country.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {country.visaTypes.map((type, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2 py-1 bg-sky-100 dark:bg-sky-200 text-sky-700 rounded-full border border-sky-200"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* <button
                    onClick={() => handleApplyVisa(country.name)}
                    className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Countries Section */}
        <div className="dark:bg-slate-900 bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center dark:text-slate-200">
            And Many More Countries
          </h2>
          <p className="text-center text-gray-600 mb-6 dark:text-slate-300">
            Sky Routes provides visa services for the following countries as
            well:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {additionalCountries.map((country, index) => (
              <span
                key={index}
                className="bg-sky-100 dark:bg-sky-200   text-sky-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default border border-gray-200"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-xl font-semibold dark:text-slate-200 text-gray-800 mb-2">
              Document Assistance
            </h3>
            <p className="text-gray-600 dark:text-slate-300">
              Help with document preparation, verification, and translation
              services
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl dark:text-slate-200 font-semibold text-gray-800 mb-2">
              Fast Processing
            </h3>
            <p className="text-gray-600 dark:text-slate-300">
              Expedited visa processing with dedicated support throughout the
              journey
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl dark:text-slate-200 font-semibold text-gray-800 mb-2">
              100% Success Rate
            </h3>
            <p className="text-gray-600 dark:text-slate-300">
              High success rate with professional guidance from experienced
              consultants
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-2xl shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            Contact Sky Routes today for professional visa assistance. We're
            here to make your travel dreams a reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Contact Us - Redirects to Home Contact Section */}
            <a
              href={whatsappUrl}
              target="blank"
              className="bg-white text-sky-700 hover:bg-sky-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>

            {/* Email Inquiry - Opens Gmail Compose */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=skyroutesmarketing@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
