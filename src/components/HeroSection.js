import React from "react";
import "./HeroSection.css";
import GallerySection from "../components/GallerySection";

const HeroSection = () => {
    return (
        <section className="hero">
            {/* LEFT SIDE */}
            <div className="hero-left">
                <h1>
                    WELCOME TO <br />
                    <span className="highlight">LUXORT</span>
                </h1>
            </div>

            {/* RIGHT SIDE */}
            <div className="hero-right">
                <p className="hero-description">
                    Discover a world where luxury and comfort blend seamlessly,
                    offering unforgettable experiences in a setting of elegance and tranquility.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">BOOK YOUR STAY</button>
                    <button className="btn-secondary">EXPLORE OUR SUITES</button>
                </div>
            </div>
             <GallerySection/>
        </section>
       
    );
};

export default HeroSection;
