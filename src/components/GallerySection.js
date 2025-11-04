import React, { useEffect, useState } from "react";
import "./GallerySection.css";

const GallerySection = () => {
  const images = [
    {
      id: "01",
      title: "GREEN AREA",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "02",
      title: "URBAN VIEW",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "03",
      title: "MOUNTAIN RANGE",
      url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "04",
      title: "CITY LIGHTS",
      url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "05",
      title: "SEA SHORE",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "06",
      title: "FOREST PATH",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 4 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 4 ? 0 : prev + 1
    );
  };

  return (
    <section className="gallery-section">
      <div
        className="gallery-track"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {images.map((img) => (
          <div className="gallery-card" key={img.id}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${img.url})` }}
            ></div>
            <div className="card-bottom">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="card-info">
                <span>{img.id}</span>
                <p>{img.title}</p>
                <button onClick={nextSlide}>
                  NEXT <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
