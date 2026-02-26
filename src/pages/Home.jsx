import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default Home;
