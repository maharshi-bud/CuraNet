import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Hearder";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import Testimonials from "./Components/Testimonials";
import Plans from "./Components/Plans";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";

import Booking from "./Components/Booking";

function App() {
  const [page, setPage] = useState("home");
  const goToBooking = () => setPage("booking");
  const goHome = () => setPage("home")

  return (
    <div className="app">

      {page === "home" && (
        <>
          <Header goToBooking={goToBooking} goHome={goHome}/>
          <Hero goToBooking={goToBooking}/>
          <WhyUs />
          <HowItWorks />
          <Testimonials />
          <Plans goToBooking={goToBooking} />
          <Footer goToBooking={goToBooking} goHome={goHome} />
        </>
      )}

      {page === "booking" && (
        <Booking goHome={goHome} />
      )}

    </div>
  );
}

export default App;
