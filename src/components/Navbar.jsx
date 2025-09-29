import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of your navbar
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
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
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        zIndex: 20,
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "white" }}>
        TalkLMS
      </div>

      {/* Nav Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          marginLeft: "65rem",
        }}
      >
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <a
          href="#features"
          onClick={(e) => handleScroll(e, "key-benefits")}
          style={navLinkStyle}
        >
          Features
        </a>
        <Link to="/about" style={navLinkStyle}>
          About
        </Link>
        <Link to="/contact" style={navLinkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
