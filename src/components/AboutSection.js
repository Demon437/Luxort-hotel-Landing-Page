import React, { useState, useEffect } from "react";
import "./AboutSection.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AboutSection = () => {
  const slides = [
    {
      id: "01",
      title: "COMFY AREA",
      mainUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      sideUrl:
        "https://plus.unsplash.com/premium_photo-1724707432344-4e8dff69297d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },

    {
      id: "02",
      title: "LUXURY LOUNGE",
      mainUrl:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      sideUrl:
        "https://images.unsplash.com/photo-1585548807335-e0bfa52ac220?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      id: "03",
      title: "DINING EXPERIENCE",
      mainUrl:
        "https://plus.unsplash.com/premium_photo-1661371792226-767cb88af3f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      sideUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "04",
      title: "POOL SIDE RELAX",
      mainUrl:
        "https://plus.unsplash.com/premium_photo-1678288606244-71ca32f243f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      sideUrl:
        "https://images.unsplash.com/photo-1761744401744-68498d67b73f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="about-section">
      {/* LEFT SIDE */}
      <div className="about-left">
        <div
          className="top-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519817914152-22f90e84896f?auto=format&fit=crop&w=800&q=80')",
          }}
        ></div>

        <h4 className="about-heading">ABOUT LUXORT</h4>

        <div className="about-image-tall"></div>

        <p className="about-desc">
          Luxort is where elegance meets comfort, creating unforgettable moments
          with every stay. Welcome to your perfect escape.
        </p>

        <div className="founder-info">
          <div className="founder-img"></div>
          <div>
            <h5>Roberto Poliye</h5>
            <p>Founder of Luxort</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <div className="right-text">
          <h2>
            Where Timeless Elegance Meets Exceptional Comfort and Unforgettable
            Experiences in Luxury Hospitality
          </h2>
          <p>
            At Luxort, we redefine the meaning of luxury hospitality. Our hotel
            offers a seamless blend of classic sophistication and modern comfort,
            providing guests with an unparalleled experience.
          </p>
        </div>

        {/* IMAGE CARDS */}
       <div className="about-images">
  <div className="main-image-container">
    <div
      className="main-image fade"
      style={{ backgroundImage: `url(${slides[current].mainUrl})` }}
    ></div>

    <div className="image-footer">
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
      <div className="image-info">
        <span>{slides[current].id}</span>
        <p>{slides[current].title}</p>
        <button onClick={nextSlide}>
          NEXT <span>→</span>
        </button>
      </div>
    </div>
  </div>

  {/* 👇 FIXED — Side image will now match the same current slide */}
  <div
    className="side-image"
    style={{
      backgroundImage: `url(${slides[current].sideUrl})`,
    }}
  ></div>
</div>


        {/* SLIDER BAR */}
        <div className="slider-bar">
          <button onClick={prevSlide} className="arrow-btn">
            <IoIosArrowBack />
          </button>
          <div className="slider-dots">
            {slides.map((_, i) => (
              <span key={i} className={i === current ? "active" : ""}></span>
            ))}
          </div>
          <button onClick={nextSlide} className="arrow-btn">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
