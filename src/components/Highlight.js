import React, { useState } from "react";
import "./Highlight.css";

const Highlight = () => {
    const highlights = [
        {
            title: "SWIMMING POOL",
            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "FINE DINING RESTAURANTS",
            image:
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
        },
        {
            title: "LUXURY ROOMS & SUITES",
            image:
                "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "SPA & WELLNESS",
            image:
                "https://plus.unsplash.com/premium_photo-1664910780091-341786373d85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        },
    ];

    const [active, setActive] = useState(0);

    return (
        <section className="highlight-section">
            <div className="highlight-title-container">
                <h4 className="highlight-subtitle">HOTEL HIGHLIGHTS</h4>
                <h2 className="highlight-title">Experience the Extraordinary</h2>
                <p className="highlight-description">
                    Experience elegance and comfort in our Luxury Rooms & Suites, where
                    modern amenities and timeless design create the perfect retreat.
                </p>
            </div>

            <div className="highlight-tabs">
                {highlights.map((item, index) => (
                    <button
                        key={index}
                        className={`highlight-tab ${active === index ? "active" : ""}`}
                        onClick={() => setActive(index)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div className="highlight-image-container">
                <img
                    src={highlights[active].image}
                    alt={highlights[active].title}
                    className="highlight-image"
                />
            </div>
        </section>
    );
};

export default Highlight;
