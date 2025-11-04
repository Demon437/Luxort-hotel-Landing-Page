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
        "https://images.unsplash.com/photo-1598300056483-9a9999f2596e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "02",
      title: "LUXURY LOUNGE",
      mainUrl:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      sideUrl:
        "https://images.unsplash.com/photo-1600607687644-a2eb23b9f96f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "03",
      title: "DINING EXPERIENCE",
      mainUrl:
        "https://images.unsplash.com/photo-1616627456764-7e3c2c1e89cb?auto=format&fit=crop&w=1600&q=80",
      sideUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "04",
      title: "POOL SIDE RELAX",
      mainUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
      sideUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

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

          <div
            className="side-image"
            style={{
              backgroundImage: `url(${slides[(current + 1) % slides.length].sideUrl
                })`,
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
