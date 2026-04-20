import React from "react";
import "./App.css";
import Header from "./Components/Hearder";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import Testimonials  from "./Components/Testimonials";
import Plans   from "./Components/Plans";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";





function App() {
  return (
    <div className="app">
      {/* Empty base - start building from here */}

      <Header />
      <Hero/>
      <WhyUs/>
      <HowItWorks/>
      <Testimonials/>
      <Plans/>
      <Footer/>
    </div>
  );
}

export default App;