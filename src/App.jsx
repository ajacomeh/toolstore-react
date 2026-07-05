import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import BestSellers from "./components/BestSellers";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Products />

      <Benefits />

      <BestSellers />

      <Statistics />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />
    </>
  );
}

export default App;