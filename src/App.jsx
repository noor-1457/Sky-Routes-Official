import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Profiler } from "./components/Profiler.jsx";
import { Deals } from "./components/Deals.jsx";
import { Hotels } from "./components/Hotels.jsx"
import { Airlines } from "./components/Airlines.jsx";
import { Reviews } from "./components/Reviews.jsx";

function App() {

  return (
    <>
      <div>
      <Navbar/>
      <Hero />
      <About/>
      <Profiler />
      <Deals />
      <Hotels />
      <Airlines />
      <Reviews />
    </div>
    </>
  );
}

export default App;