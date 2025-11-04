import React, { useState, useEffect } from "react";
import "./EventSection.css";
import { ArrowRight } from "lucide-react";

const EventSection = () => {
  const events = [
    {
      id: 1,
      title: "WEDDINGS",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 2,
      title: "CORPORATE EVENTS",
      image:
        "https://images.unsplash.com/photo-1544531585-f14f463149ec?auto=format&fit=crop&q=80&w=1170",
    },
    {
      id: 3,
      title: "PRIVATE PARTIES",
      image:
        "https://plus.unsplash.com/premium_photo-1667516418534-98ae1df973dc?auto=format&fit=crop&q=80&w=1172",
    },
    {
      id: 4,
      title: "LUXURY CELEBRATIONS",
      image:
        "https://plus.unsplash.com/premium_photo-1664298349164-f15d90bd0be7?auto=format&fit=crop&q=80&w=1171",
    },
    {
      id: 5,
      title: "OUTDOOR FUNCTIONS",
      image:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto progress bar → moves to next card when filled
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds per slide roughly

    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev + 1 >= events.length - 2 ? 0 : prev + 1
    );
  };

  return (
    <section className="event-section">
       {/* HEADER SECTION */}
  <div className="event-header">
    <div className="event-header-left">
      <h4 className="event-subtitle">UNFORGETTABLE EVENTS AT LUXORT</h4>
    </div>
    <div className="event-header-right">
      <h2 className="event-title">
        Celebrate Life’s Finest Moments in Style and Elegance
      </h2>
      <p className="event-description">
        At Luxort, we create extraordinary settings for unforgettable events.
        Whether you’re planning an intimate gathering or a grand celebration.
      </p>
    </div>
  </div>

      <div className="event-gallery-wrapper">
        <div
          className="event-gallery"
          style={{
            transform: `translateX(-${activeIndex * (100 / 3)}%)`,
          }}
        >
          {events.map((event, index) => (
            <div key={index} className="event-gallery-item">
              <img
                src={event.image}
                alt={event.title}
                className="event-gallery-image"
              />
              <div className="event-navigation">
                <div className="event-nav-left">
                  <span>{String(event.id).padStart(2, "0")}</span>
                  <span>{event.title}</span>
                </div>
                <div className="event-nav-right" onClick={nextSlide}>
                  <span>NEXT</span> <ArrowRight size={16} />
                </div>
              </div>
              {index === activeIndex && (
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
