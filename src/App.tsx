import Navbar from "./components/Navbar.js";
import HeroTest from "./components/HeroTest.js";
import Partner from "./components/Partner.js";
import CursePage from "./components/CursePage.js";
import Pricing from "./components/Pricing.js";
import About from "./components/About.js";
import Testimonials from "./components/Testimonials.js";
import Contact from "./components/Contact.js";

const App = () => {
  return(
    <div className="overflow-x-hidden text-neutral-300 antialiased
    selection:bg-emerald-200 selection:text-green-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 size-full bg-neutral-950">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(43,201,110,0.13)_0,rgba(43,201,110,0)_50%,rgba(43,201,110,0)_100%)]"></div>        </div>
      </div>
      <div className=" container mx-auto px-20 ">
        <Navbar />
        <HeroTest />
        <Partner />
        <CursePage />
        <Pricing />
        <About />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default App
