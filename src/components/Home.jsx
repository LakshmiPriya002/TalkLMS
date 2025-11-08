import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

export default function Home() {
  const headingStyle = {
    color: "#1e293b", // Deep slate blue
    fontSize: "2.8rem",
    fontWeight: "800",
    textAlign: "left",
    textShadow: "2px 3px 10px rgba(37,99,235,0.10)",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.3",
  };

  const paragraphStyle = {
    color: "#475569",
    fontSize: "1.15rem",
    marginTop: "1.2rem",
    textAlign: "left",
    textShadow: "0.5px 1px 2px rgba(37,99,235,0.08)",
    lineHeight: "1.7",
    maxWidth: "600px",
  };

  const buttonBase = {
    marginTop: "1.5rem",
    color: "white",
    padding: "0.8rem 1.5rem",
    borderRadius: "0.75rem",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };

  const buttonGreen = {
    ...buttonBase,
    background: "linear-gradient(90deg, #2563eb, #3b82f6)",
    boxShadow: "0 4px 10px rgba(37,99,235,0.18)",
  };

  const textButton = {
    ...buttonBase,
    background: "transparent",
    color: "#22d3ee",
    boxShadow: "none",
    padding: "0.8rem 1rem",
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "left",
        background: "linear-gradient(135deg, #f3f5f7 0%, #e0e7ef 100%)",
        padding: "5rem 2rem 3rem",
        overflowX: "hidden", // ✅ Remove horizontal scroll
        boxSizing: "border-box",
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(59,130,246,0.10), transparent 50%), radial-gradient(circle at bottom right, rgba(34,211,238,0.10), transparent 50%)",
          overflow: "hidden", // ✅ no overflow from background gradient
        }}
      ></div>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: "1 1 500px",
          paddingRight: "1rem",
          maxWidth: "700px",
        }}
      >
        <h1 style={headingStyle}>TalkLMS Turns Training into Progress</h1>
        <p style={paragraphStyle}>
          Help your organization build real skills and stay compliant with
          intuitive courses, mobile access, and reporting that shows what's
          working across your organization.
        </p>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link to="/demo-request">
            <button
              style={buttonGreen}
              onMouseOver={(e) =>
                (e.target.style.boxShadow = "0 6px 14px #2563eb55")
              }
              onMouseOut={(e) =>
                (e.target.style.boxShadow = "0 4px 10px rgba(37,99,235,0.18)")
              }
            >
              Request Demo
            </button>
          </Link>

          <Link to="/signup">
            <button
              style={textButton}
              onMouseOver={(e) => {
                e.target.style.color = "#0ea5e9";
                e.target.style.textDecoration = "underline";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#22d3ee";
                e.target.style.textDecoration = "none";
              }}
            >
              Get a Free Trial
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: "1 1 400px",
          textAlign: "center",
          overflow: "hidden", // ✅ Prevents overflow from image
        }}
      >
        <img
          src={heroImage}
          alt="TalkLMS in action"
          style={{
            width: "100%",
            maxWidth: "550px",
            height: "auto",
            maxHeight: "480px",
            borderRadius: "1rem",
            boxShadow: "0 8px 24px rgba(37,99,235,0.08)",
            border: "3px solid #e5e7eb",
            background: "#fff",
          }}
        />
      </div>

      {/* Responsive Design */}
      <style>
        {`
          html, body {
            overflow-x: hidden; /* ✅ Prevents page-level scrollbar */
          }

          @media (max-width: 1024px) {
            section {
              padding: 4rem 2rem;
              overflow-x: hidden;
            }
          }

          @media (max-width: 768px) {
            section {
              flex-direction: column;
              text-align: center;
              padding: 3rem 1.5rem;
              overflow-x: hidden;
            }
            section > div:nth-child(2) {
              padding-right: 0;
            }
            section > div:nth-child(3) {
              margin-top: 2rem;
            }
            h1 {
              font-size: 2.2rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            button {
              width: 100%;
            }
          }

          @media (max-width: 480px) {
            section {
              overflow-x: hidden;
            }
            h1 {
              font-size: 1.7rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
