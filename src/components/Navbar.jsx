import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // height of navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // close mobile menu on click
    }
  };

  const navLinkStyle = {
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "500",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px", // fixed navbar height
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 20,
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "white",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        TalkLMS
      </div>

      {/* Hamburger for mobile */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "25px",
          height: "20px",
          cursor: "pointer",
        }}
        className="hamburger"
      >
        <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
        <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
        <span style={{ height: "3px", background: "white", borderRadius: "2px" }}></span>
      </div>

      {/* Nav Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          height: "100%",
        }}
        className={isOpen ? "nav-links open" : "nav-links"}
      >
        <Link to="/" style={navLinkStyle} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <a
          href="#features"
          onClick={(e) => handleScroll(e, "key-benefits")}
          style={navLinkStyle}
        >
          Features
        </a>
        <Link to="/about" style={navLinkStyle} onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/contact" style={navLinkStyle} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .hamburger {
              display: flex;
            }

            .nav-links {
              position: absolute;
              top: 70px;
              left: 0;
              right: 0;
              background: rgba(0,0,0,0.9);
              flex-direction: column;
              align-items: center;
              gap: 1.5rem;
              padding: 1rem 0;
              display: none;
            }

            .nav-links.open {
              display: flex;
            }
          }
        `}
      </style>
    </nav>
  );
}
