import { Hero } from "../components/Hero";
import { Profiler } from "../components/Profiler";
// import { FAQAccordian } from "../components/FAQAccordian";
import { Contact } from "../components/Contact";
// import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Hotels } from "../components/Hotels";
import {Reviews} from "../components/Reviews"
import { Deals } from "../components/Deals.jsx"

export const Home = () => {
  return (
    <>
      <Hero />
      {/* <Pamphlets/> */}
      <Hotels/>
      <Profiler />
      <Reviews/>
      <Deals/>
      {/* <FAQAccordian /> */}
      <Contact />
      {/* <Footer /> */}
      <WhatsAppButton />
    </>
  );
};