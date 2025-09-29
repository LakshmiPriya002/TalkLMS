// src/Footer.js
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerStyle = {
    width: "100%",
    backgroundColor: "#9e979757",
    color: "#333",
    padding: "2rem 1rem",
    boxSizing: "border-box",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    margin: "0 1rem",
    display: "inline-block",
    marginBottom: "0.5rem",
  };

  const copyrightStyle = {
    fontSize: "0.875rem",
    marginTop: "0.5rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {["About Us", "Contact", "Privacy Policy"].map((link, idx) => (
            <Link
              key={idx}
              to={link === "About Us" ? "/about" : link === "Contact" ? "/contact" : "#"}
              style={linkStyle}
            >
              {link}
            </Link>
          ))}
        </div>
        {/* Copyright */}
        <p style={copyrightStyle}>
          &copy; {new Date().getFullYear()} TalkLMS. All rights reserved.
        </p>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            footer {
              padding: 1.5rem 1rem;
            }
            a {
              font-size: 0.95rem !important;
            }
            p {
              font-size: 0.8rem !important;
            }
          }

          @media (max-width: 480px) {
            footer {
              padding: 1rem 0.5rem;
            }
            a {
              font-size: 0.9rem !important;
              margin: 0 0.5rem !important;
            }
            p {
              font-size: 0.75rem !important;
            }
          }
        `}
      </style>
    </footer>
  );
}
