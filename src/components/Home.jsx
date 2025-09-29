import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

export default function Home() {
  const headingStyle = {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "left",
    textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
  };

  const paragraphStyle = {
    color: "white",
    fontSize: "1.1rem",
    marginTop: "1rem",
    textAlign: "left",
    textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    marginTop: "1.5rem",
    backgroundColor: "#16a34a",
    color: "white",
    padding: "0.75rem 1.25rem",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "65vh",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "left",
        backgroundColor: "#1a2a44",
        padding: "5rem 2rem 2rem",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: "1 1 500px",
          paddingRight: "1rem",
        }}
      >
        <h1 style={headingStyle}>TalkLMS Turns Training into Progress</h1>
        <p style={paragraphStyle}>
          Help your organization build real skills and stay compliant with
          intuitive courses, mobile access, and reporting that shows what's
          working across your organization.
        </p>
        <Link to="/demo-request">
          <button style={buttonStyle}>Request Demo</button>
        </Link>
        <Link to="/signup">
          <button
            style={{
              ...buttonStyle,
              marginLeft: "1rem",
              backgroundColor: "#2563eb",
            }}
          >
            Get a Free Trial
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: "1 1 400px",
          textAlign: "center",
        }}
      >
        <img
          src={heroImage}
          alt="TalkLMS in action"
          style={{
            width: "100%",
            maxWidth: "550px",
            height: "auto",
            maxHeight: "500px",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </section>
  );
}