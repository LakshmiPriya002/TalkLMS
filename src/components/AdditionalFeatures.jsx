import React from "react";
import { FaTachometerAlt, FaCalendarAlt, FaComments } from "react-icons/fa";

export default function AdditionalBenefits() {
  const benefits = [
    {
      title: "Customizable Dashboards",
      desc: "Tailor dashboards to meet specific needs of faculty and users.",
      gradient: "linear-gradient(135deg, #34d399, #10b981)",
      icon: <FaTachometerAlt size={32} color="#fff" />,
    },
    {
      title: "Integrated Calendars",
      desc: "Keep everyone on track with integrated course and event calendars.",
      gradient: "linear-gradient(135deg, #facc15, #f59e0b)",
      icon: <FaCalendarAlt size={32} color="#fff" />,
    },
    {
      title: "Real-Time Communication",
      desc: "Instant messaging and chat to connect students and instructors.",
      gradient: "linear-gradient(135deg, #f87171, #ef4444)",
      icon: <FaComments size={32} color="#fff" />,
    },
  ];

  return (
    <section style={{ padding: "4rem 2rem", backgroundColor: "#f3f4f6" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "1rem", color: "#1e40af" }}>
          Additional Benefits
        </h3>
        <p style={{ fontSize: "1.25rem", color: "#4B5563", marginBottom: "3rem" }}>
          Discover more ways TalkLMS can enhance your educational environment.
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "3rem"
        }}>
          {benefits.map((b, i) => (
            <div key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                width: "300px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              }}
            >
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                background: b.gradient,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
              }}>
                {b.icon}
              </div>
              <h4 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>{b.title}</h4>
              <p style={{ fontSize: "1rem", color: "#4B5563" }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            div[style*="width: 300px"] {
              width: 100% !important;
            }
          }
        `}
      </style>
    </section>
  );
}
