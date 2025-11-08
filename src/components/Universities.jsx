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
          overflowX: "hidden",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            width: "100vw",
            padding: "5rem 2rem",
            background: "linear-gradient(to right, #e0f2fe, #fef3c7)", // same as contact form
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
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
              color: "#007bff",
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
              color: "#374151",
            }}
          >
            Enhance university learning experience with a comprehensive suite of
            tools designed to streamline course management, integrate multimedia
            content, boost student engagement, and foster a collaborative
            learning environment.
          </p>
          <button
            style={{
              padding: "0.9rem 2rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "0.6rem",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            Learn More
          </button>
        </section>

        {/* Key Benefits Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            backgroundColor: "#fff",
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
              color: "#007bff",
              marginBottom: "2rem",
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
              maxWidth: "1200px",
            }}
          >
            {benefits.map((item, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 300px",
                  background: "linear-gradient(to bottom right, #f0f9ff, #fefce8)",
                  padding: "2rem 1.5rem",
                  borderRadius: "1rem",
                  textAlign: "center",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 18px rgba(0,0,0,0.1)";
                }}
              >
                <span style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                    color: "#007bff",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "1rem", color: "#374151", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            background: "linear-gradient(to right, #e0f2fe, #fef3c7)",
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
              color: "#007bff",
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
              color: "#374151",
            }}
          >
            Universities can implement TalkLMS to modernize their learning
            management, improve student engagement, and track academic
            performance effectively.
          </p>
          <button
            style={{
              padding: "1rem 2.5rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "0.6rem",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            Contact Us
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
}
