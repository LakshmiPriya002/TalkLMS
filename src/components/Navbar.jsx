// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinkStyle = {
    color: "#2c3e50", // Dark gray-blue text
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    whiteSpace: "nowrap",
    padding: "0.5rem 1rem",
    transition: "color 0.3s ease",
  };

  const buttonStyle = {
    color: "white",
    backgroundColor: "#007bff", // Normal blue (same as contact form)
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    fontSize: "1rem",
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "0 1rem",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 20,
        backgroundColor: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        height: "70px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#007bff", // Updated logo color to match contact form blue
          display: "flex",
          alignItems: "center",
        }}
      >
        TalkLMS
      </div>

      {/* Nav Links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "flex-end",
          flexGrow: 1,
          marginRight: "1rem",
        }}
      >
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <a
          href="#features"
          style={navLinkStyle}
          onClick={(e) => handleScroll(e, "key-features")}
        >
          Features
        </a>
        <Link to="/about" style={navLinkStyle}>
          About
        </Link>
        <Link to="/contact" style={navLinkStyle}>
          Contact
        </Link>
        <Link to="/benefits" style={navLinkStyle}>
          Benefits
        </Link>
        <Link to="/login" style={buttonStyle}>
          Log In
        </Link>
      </div>

      <style>
        {`
          a:hover {
            color: #007bff; /* Hover blue for text links */
          }
          [style*="background-color: #007bff"]:hover {
            background-color: #0056b3; /* Darker shade on hover */
          }

          @media (max-width: 768px) {
            nav {
              padding: 0 0.5rem;
              height: auto;
              flex-direction: column;
              align-items: flex-start;
            }
            div[style*="flex-grow: 1"] {
              justify-content: flex-start;
              margin-left: 0;
              margin-right: 0;
              flex-wrap: wrap;
              gap: 0.5rem;
              padding: 0.5rem 0;
            }
            [style*="font-size: 1.5rem"] {
              font-size: 1.2rem !important;
              padding: 0.5rem;
            }
            [style*="font-size: 1rem"] {
              font-size: 0.9rem !important;
              padding: 0.4rem 0.8rem;
            }
          }

          @media (max-width: 480px) {
            [style*="font-size: 1.5rem"] {
              font-size: 1rem !important;
            }
            [style*="font-size: 1rem"] {
              font-size: 0.85rem !important;
              padding: 0.3rem 0.6rem;
            }
          }
        `}
      </style>
    </nav>
  );
}
