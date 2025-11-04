import React from "react";
import "./Navbar.css";
import logo from "../Images/loading.png"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">EVENTS</a>
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
