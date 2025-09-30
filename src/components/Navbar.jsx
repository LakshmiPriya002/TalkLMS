import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // height of navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinkStyle = {
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    whiteSpace: "nowrap",
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
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        height: "70px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "white",
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
          justifyContent: "flex-start",
          flexGrow: 1,
          marginLeft: "65rem",
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
      </div>
    </nav>
  );
}