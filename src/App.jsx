import "./App.css";
import PublicLayout from "./layout/publicLayout.jsx";
// import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Home } from "./Pages/Home.jsx";
// import { FAQ } from "./Pages/FAQ.jsx";
import { AirlinesPage } from "./Pages/AirlinesPage.jsx";
// import { FlightDeals } from "./Pages/FlightDeals.jsx";
// import { Hotels } from "./Pages/Hotels.jsx";
// import { Airlines } from "./Pages/Airlines.jsx";
import { UmrahPackagesPage } from "./Pages/UmrahPackages.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/faq" element={<FAQ />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/airlinesPage" element={<AirlinesPage />} />
            {/* <Route path="/flight-deals" element={<FlightDeals />} /> */}
            {/* <Route path="/hotels" element={<Hotels />} /> */}
            {/* <Route path="/airlines" element={<Airlines />} /> */}
            <Route path="/umrah-packages" element={<UmrahPackagesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;