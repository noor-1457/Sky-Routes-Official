import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Profiler } from "./components/Profiler.jsx";
import { Deals } from "./components/Deals.jsx";
import { Hotels } from "./components/Hotels.jsx"
import { Airlines } from "./components/Airlines.jsx";
import { Reviews } from "./components/Reviews.jsx";
import { FAQAccordian } from "./components/FAQAccordian.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { UmrahPackages } from "./components/UmrahPackages.jsx";
import { WhatsAppButton } from "./components/WhatsappButton.jsx";
// import { FlightSearch } from "./components/flightSearch.jsx";
function App() {

  return (
    <>
      <div>
      <Navbar/>
      <Hero />
      <UmrahPackages />
       {/* <FlightSearch /> */}
      <About/>
      <Profiler />
      <Deals />
      <Hotels />
      <Airlines />
      <Reviews />
      <FAQAccordian/>
      <Contact/>
      <WhatsAppButton/>
      <Footer/>
    </div>
    </>
  );
}

export default App;