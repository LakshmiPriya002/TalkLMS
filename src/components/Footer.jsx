// src/Footer.js
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerStyle = {
    width: "100%",
    backgroundColor: "#3498db", // same as navbar button color
    color: "#ffffff", // white text
    padding: "2.5rem 1rem",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "500",
    margin: "0 1rem",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  };

  const linkHover = (e, isHovering) => {
    e.currentTarget.style.color = isHovering ? "#e0e7ff" : "#ffffff";
  };

  const copyrightStyle = {
    fontSize: "0.9rem",
    marginTop: "1.5rem",
    opacity: 0.9,
  };

  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Footer Links */}
        <div style={{ marginBottom: "1rem" }}>
          {["About Us", "Contact", "Privacy Policy"].map((link, idx) => (
            <Link
              key={idx}
              to={
                link === "Home"
                  ? "/"
                  : link === "About Us"
                  ? "/about"
                  : link === "Contact"
                  ? "/contact"
                  : "#"
              }
              style={linkStyle}
              onMouseEnter={(e) => linkHover(e, true)}
              onMouseLeave={(e) => linkHover(e, false)}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p style={copyrightStyle}>
          &copy; {new Date().getFullYear()}{" "}
          <span style={{ fontWeight: "600" }}>TalkLMS</span>. All rights reserved.
        </p>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            footer {
              padding: 1.8rem 1rem;
            }
            a {
              display: block;
              margin: 0.4rem 0;
            }
          }
        `}
      </style>
    </footer>
  );
}
