import { About } from "../components/About.jsx"
import { FAQAccordian } from "../components/FAQAccordian.jsx"
// import { WhatsAppButton } from "../components/WhatsAppButton.jsx"
import tour from "../assets/tour.jpg"

export const AboutPage = () => {
  return (
    <>
      {/* Hero Section with Background - Redesigned like Hajj page */}
      <div className="mt-20 bg-slate-200 dark:bg-slate-900">
        <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img 
            src={tour} 
            alt="Travel background"           
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay Gradient - Darker for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/60 to-slate-900/70 dark:from-[#05070f]/70 dark:via-[#05070f]/75 dark:to-[#05070f]/80" />
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
                Since December 2022
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                Sky Routes
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Pakistan's most trusted international travel agency. We're a Lahore-based travel and tour agency helping hundreds of families, students, and professionals book flights, hotels, and visa-ready travel files across the Gulf and beyond—with honest pricing and a real human on WhatsApp whenever you need us.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <About />
      <FAQAccordian />
      {/* <WhatsAppButton /> */}
    </>
  )
}