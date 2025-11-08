// src/UseCases.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Benefits() {
  const navigate = useNavigate();

  const useCases = [
    {
      icon: "🎓",
      title: "Universities",
      desc: "Enhance research collaboration, streamline course management, and foster a vibrant academic community.",
      route: "/universities",
      heroText: "TalkLMS for Universities",
      heroSubText:
        "Enhance university learning experience with a comprehensive suite of tools designed to streamline course management, integrate multimedia content, boost student engagement, and foster a collaborative learning environment.",
    },
    {
      icon: "🏫",
      title: "Colleges",
      desc: "Boost student engagement, simplify administrative tasks, and create a flexible learning environment.",
      route: "/colleges",
      heroText: "TalkLMS for Colleges",
      heroSubText:
        "Enhance college learning with TalkLMS, a flexible and user-friendly platform tailored to meet the unique needs of college education. Our tools support a variety of teaching styles and learning objectives.",
    },
    {
      icon: "🏢",
      title: "Institutions",
      desc: "Facilitate professional development, create training programs, and track learner progress effectively.",
      route: "/institutions",
      heroText: "TalkLMS for Institutions",
      heroSubText:
        "Facilitate professional development and training with TalkLMS, designed to create effective programs and track learner progress seamlessly for institutions.",
    },
  ];

  const handleNavigate = (item) => {
    navigate(item.route, {
      state: { heroText: item.heroText, heroSubText: item.heroSubText },
    });
  };

  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          width: "100vw",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            width: "100vw",
            padding: "5rem 2rem",
            background: "linear-gradient(to right, #e6f2ff, #f9fbff)", // light contact-blue gradient
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#007bff", // normal contact blue
              marginBottom: "1rem",
            }}
          >
            Empowering Education with TalkLMS
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "1200px",
            }}
          >
            Discover how TalkLMS transforms learning experiences for universities, colleges, and institutions.
          </p>
        </section>

        {/* Use Cases Section */}
        <section
          style={{
            width: "100vw",
            padding: "5rem 2rem",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#007bff",
              marginBottom: "3rem",
            }}
          >
            Use Cases
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {useCases.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigate(item)}
                style={{
                  background: "linear-gradient(to bottom right, #f0f8ff, #fefefe)", // soft white-blue
                  padding: "2.5rem 2rem",
                  borderRadius: "1rem",
                  textAlign: "center",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  minHeight: "280px",
                  border: "1px solid #d6e4ff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                }}
              >
                <span style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                    color: "#007bff",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
