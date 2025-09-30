// src/Institutions.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Institutions() {
  const benefits = [
    {
      icon: "🎓",
      title: "Professional Development",
      desc: "Offer tailored training sessions to upskill employees and enhance professional competencies across various departments.",
    },
    {
      icon: "🏢",
      title: "Custom Training Programs",
      desc: "Design and deploy customized training modules to meet specific organizational goals and industry standards.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      desc: "Monitor learner progress with detailed analytics and reports to ensure continuous improvement and accountability.",
    },
  ];

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "100vw", margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            backgroundImage: "url('https://via.placeholder.com/1200x400?text=Institution+Campus')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "10px",
            minHeight: "400px",
          }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", color: "#1e40af" }}>
            TalkLMS for Institutions
          </h2>
          <p style={{ fontSize: "1.25rem", maxWidth: "800px", lineHeight: "1.8", marginBottom: "1.5rem", color: "#666" }}>
            Empower institutional training with TalkLMS, a robust platform designed to facilitate professional development, create customized training programs, and effectively track learner progress.
          </p>
          <button
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "#1e40af",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            Learn More
          </button>
        </section>

        {/* Key Benefits Section */}
        <section
          style={{
            width: "100vw",
            padding: "3rem 2rem",
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1e40af", marginBottom: "1.5rem" }}>
            Key Benefits for Institutions
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            {benefits.map((item, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 300px",
                  backgroundColor: "#fff",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                  textAlign: "center",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{item.icon}</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "1rem", margin: 0, color: "#666" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section
          style={{
            width: "100vw",
            padding: "3rem 2rem",
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
            Get Started with TalkLMS
          </h2>
          <p style={{ fontSize: "1.25rem", maxWidth: "800px", lineHeight: "1.8", marginBottom: "1.5rem", color: "#666" }}>
            Institutions can implement TalkLMS to improve professional training, streamline employee development, and track progress effectively.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
