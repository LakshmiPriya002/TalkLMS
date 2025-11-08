import React from "react";
import { FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    { 
      title: "User-Friendly Experience", 
      desc: "Intuitive interface for both instructors and students.", 
      icon: <FaUsers size={50} color="#10B981" />, 
    },
    { 
      title: "Secure & Reliable", 
      desc: "High-level security and smooth performance.", 
      icon: <FaShieldAlt size={50} color="#3B82F6" />, 
    },
    { 
      title: "Analytics & Insights", 
      desc: "Real-time analytics to track student performance.", 
      icon: <FaChartLine size={50} color="#F59E0B" />, 
    },
  ];

  return (
    <section id="why-choose-us" style={{ padding: "4rem 1.5rem", backgroundColor: "#ffffff" }}>
      
      {/* Section Heading */}
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", marginBottom: "3rem" }}>
        <h3 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "1rem" , color: "#2563eb" }}>
          Why Choose TalkLMS?
        </h3>
        <p style={{ fontSize: "1.4rem", color: "#4B5563", lineHeight: "1.8" }}>
          TalkLMS empowers institutions with modern tools for effective learning, administration, and analytics. Our platform ensures intuitive navigation, high security, and real-time insights.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}>
        {reasons.map((r, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              flex: "1 1 250px",
              maxWidth: "320px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "250px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ marginBottom: "1rem" }}>{r.icon}</div>
            <h4 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", color: "#111827" }}>
              {r.title}
            </h4>
            <p style={{ color: "#374151", fontSize: "1.1rem", lineHeight: "1.7" }}>{r.desc}</p>
          </div>
        ))}
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 1024px) {
            h3 {
              font-size: 2.4rem !important;
            }
            p {
              font-size: 1.2rem !important;
            }
          }

          @media (max-width: 768px) {
            section {
              padding: 3rem 1rem;
            }
            h3 {
              font-size: 2rem !important;
            }
            p {
              font-size: 1.1rem !important;
            }
          }

          @media (max-width: 480px) {
            h3 {
              font-size: 1.6rem !important;
            }
            p {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
