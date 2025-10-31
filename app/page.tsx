
import Navbar from "./compoenets/Navbar";
import Hero from "./compoenets/Hero";
import About from "./compoenets/About";
import Services from "./compoenets/Services";
import Contact from "./compoenets/Contact";
import Footer from "./compoenets/Footer";
import Works from "./compoenets/Works";
import Clients from "./compoenets/Clients";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Works/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}
