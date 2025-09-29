// src/About.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";
import Footer from "./Footer";
import sarahImg from "../assets/Sarah Chen.webp";
import davidImg from "../assets/David Lee.avif";
import mariaImg from "../assets/Maria Rodriguez.avif";

export default function About() {
  const navigate = useNavigate(); // Initialize useNavigate

  const teamMembers = [
    { name: "Sarah Chen", role: "CEO", img: sarahImg },
    { name: "David Lee", role: "CTO", img: davidImg },
    {
      name: "Maria Rodriguez",
      role: "Head of Customer Success",
      img: mariaImg,
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
        {/* About TalkLMS Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem 3rem",
            backgroundColor: "#e6f0fa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
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
            About TalkLMS
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              textAlign: "center",
              lineHeight: "1.8",
              maxWidth: "1200px",
            }}
          >
            Our mission is to empower educational institutions with innovative
            learning management solutions that enhance teaching and learning
            experiences.
          </p>
          
          <button
            onClick={() => navigate("/signup")} // Navigate to signup route
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 2rem",
              backgroundColor: "#1e40af",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            Get Started
          </button>
        </section>

        {/* Our Values Section */}
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
            Our Values
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {[
              {
                icon: "💡",
                title: "Innovation",
                desc: "We continuously seek new and creative ways to improve our platform and the educational experience.",
              },
              {
                icon: "👥",
                title: "Collaboration",
                desc: "We work closely with our clients to understand their needs and deliver tailored solutions.",
              },
              {
                icon: "✅",
                title: "Integrity",
                desc: "We are committed to honesty, transparency, and ethical conduct in all our operations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 300px",
                  backgroundColor: "#f0f4f8",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    color: "#1e40af",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    margin: "0.5rem 0",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team Section */}
        <section
          style={{
            width: "100vw",
            padding: "3rem 2rem",
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
            Meet the Team
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
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{ flex: "1 1 200px", textAlign: "center" }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ fontSize: "1rem", margin: "0.5rem 0" }}>
                  {member.name}
                </p>
                <p style={{ fontSize: "0.9rem", color: "#1e40af" }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
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
            Our Story
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              textAlign: "center",
              maxWidth: "1200px",
            }}
          >
            TalkLMS was founded in 2019 by a group of educators and technology
            experts who recognized the need for a more flexible and
            user-friendly learning management system. Since then, we have been
            growing from a small startup to a company creating engaging and
            effective online learning environments.
          </p>
        </section>

        {/* Our Achievements Section */}
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
            Our Achievements
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2.5rem",
              width: "100%",
            }}
          >
            {[
              { number: "500+", label: "Institutions Served" },
              { number: "1M+", label: "Active Users" },
              { number: "10K+", label: "Courses Delivered" },
            ].map((item, index) => (
              <div
                key={index}
                style={{ flex: "1 1 200px", textAlign: "center" }}
              >
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#1e40af",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.number}
                </h3>
                <p style={{ fontSize: "1rem", margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}