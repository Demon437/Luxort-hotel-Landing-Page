import React, { useState } from "react";
import "./FAQsection.css";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What are the check-in and check-out times?",
            answer:
                "Our check-in time is from 3:00 PM & check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
        },
        {
            question: "Does the hotel offer airport transportation?",
            answer:
                "Yes, Luxort offers airport pick-up and drop-off services. Please contact our concierge desk for arrangements prior to your arrival.",
        },
        {
            question: "Does the hotel have dining options?",
            answer:
                "Absolutely. Luxort features multiple fine-dining restaurants, cafés, and bars offering exquisite culinary experiences from around the world.",
        },
        {
            question: "Do you host weddings or special events?",
            answer:
                "Yes, we specialize in hosting weddings, corporate events, and private parties with customized décor, catering, and planning support.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            {/* FAQ Title Container */}
            <div className="faq-title-container">
                <h4 className="faq-subtitle">FAQ</h4>
                <h2 className="faq-title">Frequently Asked Questions</h2>
            </div>

            {/* FAQ List */}
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                    >
                        {/* Question */}
                        <div
                            className="faq-question-container"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="faq-question">{faq.question}</h3>
                            <ChevronDown
                                className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
                                size={18}
                            />
                        </div>

                        {/* Answer */}
                        <div
                            className="faq-answer"
                            style={{
                                maxHeight: activeIndex === index ? "120px" : "0px",
                            }}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
