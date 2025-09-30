// src/Universities.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Universities() {
  const benefits = [
    {
      icon: "📚",
      title: "Streamlined Course Management",
      desc: "Easily create, organize, and manage courses with our intuitive interface, automated updates, and seamless content integration.",
    },
    {
      icon: "👥",
      title: "Enhanced Student Engagement",
      desc: "Foster a collaborative learning environment with discussion forums, group projects, and interactive tools to enhance the learning experience.",
    },
    {
      icon: "📊",
      title: "Comprehensive Assessment Tools",
      desc: "Track progress with quizzes, exams, and assignments. Provide detailed feedback and track performance to support student success.",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          width: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Hero Section */}
        {/* Hero Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            backgroundImage:
              "url('https://via.placeholder.com/1200x400?text=University+Campus')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // vertical centering
            alignItems: "center", // horizontal centering
            textAlign: "center", // center text inside
            borderRadius: "10px",
            boxSizing: "border-box",
            minHeight: "400px",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#1e40af",
            }}
          >
            TalkLMS for Universities
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
              color: "#666",
            }}
          >
            Enhance university learning experience with a comprehensive suite of
            tools designed to streamline course management, integrate multimedia
            content, boost student engagement, and foster a collaborative
            learning environment.
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
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "1.5rem",
            }}
          >
            Key Benefits for Universities
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
                <span style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
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
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "1rem",
            }}
          >
            Get Started with TalkLMS
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
              color: "#666",
            }}
          >
            Universities can implement TalkLMS to modernize their learning
            management, improve student engagement, and track academic
            performance effectively.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
