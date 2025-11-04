import React from "react";
import "./TestimonialsSection.css";

const testimonialsColumn1 = [
  {
    name: "Jerome Bell",
    country: "Israel",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "5/27/19",
  },
  {
    name: "Savannah Nguyen",
    country: "Poland",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "9/18/23",
  },
  {
    name: "Ronald Richards",
    country: "Guinea",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "5/10/25",
  },
  {
    name: "Jerome Bell",
    country: "Israel",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "5/27/19",
  },
  {
    name: "Savannah Nguyen",
    country: "Poland",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "9/18/23",
  },
];

const testimonialsColumn2 = [
  {
    name: "Courtney Henry",
    country: "Monaco",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "1/15/20",
  },
  {
    name: "Arlene McCoy",
    country: "Saint Barthelemy",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "5/19/12",
  },
  {
    name: "Eleanor Pena",
    country: "Sao Tome and Principe",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "8/09/24",
  },
   {
    name: "Courtney Henry",
    country: "Monaco",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "1/15/20",
  },
  {
    name: "Arlene McCoy",
    country: "Saint Barthelemy",
    text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can’t wait to return!",
    date: "5/19/12",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      {/* LEFT SIDE */}
      <div className="testimonials-list">
        <h4 className="testimonials-subtitle">TESTIMONIALS</h4>
        <h2 className="testimonials-title">What Our Guests Say</h2>
        <p className="testimonials-desc">
          Exceptional Experiences, Shared by Those Who’ve Lived Them.
        </p>
        <button className="testimonials-btn">READ MORE TESTIMONIALS</button>
      </div>

      {/* RIGHT SIDE */}
      <div className="testimonials-gallery">
        <div className="column column-left">
          {testimonialsColumn1.map((item, index) => (
            <div key={index} className="testimonials-card">
              <div className="testimonial-header">
                <div className="avatar"></div>
                <div>
                  <h5>{item.name}</h5>
                  <p className="country">{item.country}</p>
                </div>
              </div>
              <p className="testimonial-text">{item.text}</p>
              <p className="testimonial-date">{item.date}</p>
            </div>
          ))}
        </div>

        <div className="column column-right">
          {testimonialsColumn2.map((item, index) => (
            <div key={index} className="testimonials-card">
              <div className="testimonial-header">
                <div className="avatar"></div>
                <div>
                  <h5>{item.name}</h5>
                  <p className="country">{item.country}</p>
                </div>
              </div>
              <p className="testimonial-text">{item.text}</p>
              <p className="testimonial-date">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
