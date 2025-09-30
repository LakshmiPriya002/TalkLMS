// src/Colleges.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Colleges() {
  const benefits = [
    {
      icon: "📚",
      title: "Flexible Learning Solutions",
      desc: "Support various learning formats, including online, hybrid, and in-person classes. Provide students with the flexibility to learn at their own pace.",
    },
    {
      icon: "👥",
      title: "Interactive Learning Tools",
      desc: "Engage students with interactive quizzes, polls, and virtual classrooms. Create a dynamic learning environment that encourages active participation.",
    },
    {
      icon: "📊",
      title: "Customizable Course Content",
      desc: "Tailor content to meet specific course requirements. Easily integrate multimedia resources and create custom assignments.",
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
            backgroundImage: "url('https://via.placeholder.com/1200x400?text=Classroom+Image')",
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
            TalkLMS for Colleges
          </h2>
          <p style={{ fontSize: "1.25rem", maxWidth: "800px", lineHeight: "1.8", marginBottom: "1.5rem", color: "#666" }}>
            Enhance college learning with TalkLMS, a flexible and user-friendly platform tailored to meet the unique needs of college education. Our tools support a variety of teaching styles and learning objectives.
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
            Key Benefits for Colleges
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
                <p style={{ fontSize: "1rem", margin: 0 }}>{item.desc}</p>
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
            Colleges can implement TalkLMS to modernize their learning management, improve student engagement, and track academic performance effectively.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
