import { About } from "../components/About.jsx"
import { FAQAccordian } from "../components/FAQAccordian.jsx"
// import { WhatsAppButton } from "../components/WhatsAppButton.jsx"
import tour from "../assets/tour.jpg"

export const AboutPage = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <div className="mt-20 relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src={tour} 
          alt="Travel background"           
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay Gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/85 to-[#f3f7fa] dark:from-[#05070f]/20 dark:via-[#05070f]/60 dark:to-[#05070f]/80 transition-colors duration-300" />        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-[20px] bg-slate-400 font-bold uppercase tracking-[0.3em] text-[#0284c7] dark:text-skyBrand block mb-2">
                SKY ROUTES
              </h1>
              <p className="text-slateText dark:text-slate-300 text-xs md:text-sm max-w-sm mb-4 leading-relaxed font-medium">
                PAKISTAN'S MOST TRUSTED INTERNATIONAL TRAVEL AGENCY
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <About />
      <FAQAccordian />
      {/* <WhatsAppButton /> */}
    </>
  )
}