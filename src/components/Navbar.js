import React from "react";
import "./Navbar.css";
import logo from "../Images/loading.png"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#events">EVENTS</a>
            </div>
            <div className="nav-center">
               <img src={logo} alt="logo" className="nav-logo" />

                <h2>LUXORT</h2>
            </div>

            <div className="nav-right">
                <span className="lang">
                    🌐 EN ▾
                </span>
                <span className="phone">+123 7564 8970</span>
                <button className="login-btn">LOGIN ↗</button>
            </div>
        </nav>
    );
};

export default Navbar;
