import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import sarahImg from "../assets/Sarah Chen.webp";
import davidImg from "../assets/David Lee.avif";
import mariaImg from "../assets/Maria Rodriguez.avif";

export default function About() {
  const navigate = useNavigate();

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
          fontFamily: "'Poppins', sans-serif",
          color: "#1e293b",
          width: "100vw",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        {/* About TalkLMS Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem 3rem",
            backgroundColor: "#e0f2fe",
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
              fontWeight: "700",
              color: "#2563eb",
              marginBottom: "1rem",
            }}
          >
            About TalkLMS
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto",
              color: "#475569",
            }}
          >
            Our mission is to empower educational institutions with innovative
            learning management solutions that enhance teaching and learning
            experiences.
          </p>
          <button
            onClick={() => navigate("/signup")}
            style={{
              marginTop: "2rem",
              padding: "0.8rem 2.5rem",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "0.75rem",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1.15rem",
              boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            Get Started
          </button>
        </section>

        {/* Our Values Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            backgroundColor: "#fff",
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
              fontWeight: "700",
              color: "#2563eb",
              marginBottom: "2.5rem",
            }}
          >
            Our Values
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "7rem",
              maxWidth: "1200px",
              margin: "0 auto",
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
                  backgroundColor: "#f3f4f6",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.07)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "220px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontSize: "3rem",
                    color: "#2563eb",
                    marginBottom: "1rem",
                  }}
                >
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    margin: "0.5rem 0",
                    color: "#1e293b",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ margin: 0, color: "#475569" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            backgroundColor: "#f0f9ff",
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
              fontWeight: "700",
              color: "#2563eb",
              marginBottom: "2rem",
            }}
          >
            Meet the Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // modified to grid with 3 columns
              gap: "2.5rem",
              maxWidth: "1200px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  cursor: "default",
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "none")
                }
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    borderRadius: "100%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                    alignSelf: "center",
                  }}
                />
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    margin: "0.25rem 0",
                    color: "#1e293b",
                  }}
                >
                  {member.name}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#2563eb",
                    margin: 0,
                    fontWeight: "600",
                  }}
                >
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
            padding: "4rem 2rem",
            backgroundColor: "#fff",
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
              fontWeight: "700",
              color: "#2563eb",
              marginBottom: "1rem",
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto",
              color: "#475569",
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
            padding: "4rem 2rem",
            backgroundColor: "#e0f2fe",
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
              fontWeight: "700",
              color: "#2563eb",
              marginBottom: "2.5rem",
            }}
          >
            Our Achievements
          </h2>
          <div
            style={{
              display: "grid", // changed from flex to grid aligned like ’Meet the Team’
              gridTemplateColumns: "repeat(3, 1fr)", // 3 columns same as team
              gap: "2.5rem",
              maxWidth: "1200px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {[
              { number: "500+", label: "Institutions Served" },
              { number: "1M+", label: "Active Users" },
              { number: "10K+", label: "Courses Delivered" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 20px rgba(30, 41, 59, 0.07)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.number}
                </h3>
                <p style={{ fontSize: "1rem", margin: 0, color: "#475569" }}>
                  {item.label}
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
