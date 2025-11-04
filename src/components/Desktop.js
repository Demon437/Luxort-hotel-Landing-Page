import React from "react";
import "./Desktop.css";
import LuxortLogo from "../Images/7a16185ae094dd26b67ee8827e0f0de4.jpg"; // <-- your local logo path

const Desktop = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* LEFT SIDE */}
                <div className="footer-brand">
                    <div className="footer-logo">
                      
                        <h2>LUXORT</h2>
                    </div>
                    <p className="footer-description">
                        Luxort combines timeless elegance with modern luxury, offering
                        unparalleled comfort and unforgettable experiences.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Events</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* SOCIAL MEDIA */}
                <div className="footer-social">
                    <h4>Social Media</h4>
                    <ul>
                        <li>X</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="footer-bottom">
                <hr />
                <div className="footer-bottom-content">
                    <p>© 2025 Luxort. All Right Reserved</p>
                    <div className="footer-links-inline">
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Desktop;
