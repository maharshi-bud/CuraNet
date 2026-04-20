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

  return (
    <div className="app">

      {page === "home" && (
        <>
          <Header goToBooking={goToBooking} />
          <Hero goToBooking={goToBooking}/>
          <WhyUs />
          <HowItWorks />
          <Testimonials />
          <Plans goToBooking={goToBooking} />
          <Footer goToBooking={goToBooking} />
        </>
      )}

      {page === "booking" && (
        <Booking goHome={() => setPage("home")} />
      )}

    </div>
  );
}

export default App;
