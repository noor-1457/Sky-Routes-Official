import { Hero } from "../components/Hero";
import { Profiler } from "../components/Profiler";
import { Contact } from "../components/Contact";
// import { WhatsAppButton } from "../components/WhatsAppButton";
import { Hotels } from "../components/Hotels";
import {Reviews} from "../components/Reviews"
import { Deals } from "../components/Deals.jsx"

export const Home = () => {
  return (
    <>
      <Hero />
      <Hotels/>
      <Profiler />
      <Reviews/>
      <Deals/>
      <Contact />
      {/* <WhatsAppButton /> */}
    </>
  );
};