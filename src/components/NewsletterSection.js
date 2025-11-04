import React from "react";
import "./NewsletterSection.css";

const NewsletterSection = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-content">
                <h2 className="newsletter-title">
                    GET EXCLUSIVE OFFERS,<br />
                    EVENT UPDATES, AND INSIDER NEWS
                </h2>

                <form className="newsletter-form">
                    <div className="newsletter-input-container">
                        <input
                            type="email"
                            placeholder="Your email address..."
                            className="newsletter-input"
                        />
                    </div>
                    <div className="newsletter-button-container">
                        <button type="submit" className="newsletter-button">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSection;
