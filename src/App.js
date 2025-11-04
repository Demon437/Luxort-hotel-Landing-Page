import React from "react";
import Navbar from "./components/Navbar";
import OfferBar from "./components/OfferBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Highlight from "./components/Highlight";
import EventSection from "./components/EventSection";
import FAQSection from "./components/FAQsection";
import TestimonialsSection from "./components/TestimonialsSection";
import FooterSection from "./components/FooterSection";
import NewsletterSection from "./components/NewsletterSection";
import Desktop from "./components/Desktop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <OfferBar />
      <HeroSection />
      <AboutSection/>
      <Highlight/>
      <EventSection/>
      <FAQSection/>
      <TestimonialsSection/>
      <FooterSection/>
      <NewsletterSection/>
      <Desktop/>

    </>
  );
}

export default App;
