// src/UseCases.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function UseCases() {
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
    navigate(item.route, { state: { heroText: item.heroText, heroSubText: item.heroSubText } });
  };

  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "100vw", margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            backgroundColor: "#e6f0fa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1e40af", marginBottom: "1rem" }}>
            Empowering Education with TalkLMS
          </h2>
          <p style={{ fontSize: "1.25rem", textAlign: "center", lineHeight: "1.8", maxWidth: "1200px" }}>
            Discover how TalkLMS transforms learning experiences for universities, colleges, and institutions.
          </p>
        </section>

        {/* Use Cases Section */}
        <section
          style={{
            width: "100vw",
            padding: "3rem 2rem",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1e40af", marginBottom: "2rem" }}>
            Use Cases
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              width: "100%",
            }}
          >
            {useCases.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigate(item)}
                style={{
                  flex: "1 1 300px",
                  backgroundColor: "#f0f4f8",
                  padding: "2rem",
                  borderRadius: "0.5rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "1.1rem", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
