import React from "react";
import "./App.css";
import Header from "./Components/Hearder";
import Hero from "./Components/Hero";

import WhyUs from "./Components/WhyUs"
function App() {
  return (
    <div className="app">
      {/* Empty base - start building from here */}

      <Header />
      <Hero/>
      <WhyUs/>
    </div>
  );
}

export default App;