import "./App.css";
import PublicLayout from "./layout/publicLayout.jsx";
import { Contact } from "./components/Contact.jsx";
import { Home } from "./Pages/Home.jsx";
import { AirlinesPage } from "./Pages/AirlinesPage.jsx";
import { UmrahPackagesPage } from "./Pages/UmrahPackages.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage.jsx";
import { Hajj } from "./Pages/Hajj.jsx";
import { TermsAndConditions } from "./Pages/TermsAndConditions.jsx";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Visa from "./Pages/Visa.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/airlinesPage" element={<AirlinesPage />} />
            <Route path="/umrah-packages" element={<UmrahPackagesPage />} />
            <Route path="/hajj" element={<Hajj />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/visa" element={<Visa />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
