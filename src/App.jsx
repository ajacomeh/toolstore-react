import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;