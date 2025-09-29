// src/Footer.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Footer() {
  const footerStyle = {
    width: "100%",
    backgroundColor: "#9e979757", // Light gray background to match the image
    color: "#333", // Dark text to contrast with light background
    padding: "2rem 1rem", // Adjusted padding for a compact look
    boxSizing: "border-box",
    textAlign: "center", // Center all content
  };

  const linkStyle = {
    color: "#333", // Dark color to match the image
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    margin: "0 1rem", // Space between links
  };

  const copyrightStyle = {
    fontSize: "0.875rem",
    marginTop: "0.5rem",
  };

  return (
    <footer style={footerStyle}>
      <div>
        {/* Links */}
        {["About Us", "Contact", "Privacy Policy"].map((link, idx) => (
          <Link
            key={idx}
            to={link === "About Us" ? "/about" : link === "Contact" ? "/contact" : "#"}
            style={linkStyle}
          >
            {link}
          </Link>
        ))}
        {/* Copyright */}
        <p style={copyrightStyle}>
          &copy; {new Date().getFullYear()} TalkLMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}