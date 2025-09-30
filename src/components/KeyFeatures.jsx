import React from "react";
import { FaLaptop, FaCogs, FaLock, FaChalkboardTeacher } from "react-icons/fa";

export default function KeyFeatures() {
  const features = [
    {
      title: "Easy Access",
      desc: "Login anytime, anywhere on any device.",
      color: "#E0F7FA",
      icon: <FaLaptop size={50} color="#006064" />,
    },
    {
      title: "Customizable",
      desc: "Tailor the platform to your institution’s needs.",
      color: "#FFF3E0",
      icon: <FaCogs size={50} color="#EF6C00" />,
    },
    {
      title: "Secure",
      desc: "High-level security and data protection.",
      color: "#E8F5E9",
      icon: <FaLock size={50} color="#2E7D32" />,
    },
    {
      title: "Interactive Learning",
      desc: "Engage students with multimedia content.",
      color: "#FCE4EC",
      icon: <FaChalkboardTeacher size={50} color="#C2185B" />,
    },
  ];

  return (
    <section
      id="key-features"
      style={{ padding: "4rem 1.5rem", backgroundColor: "#ffffff" }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", textAlign: "left" }}>
        {/* Heading */}
        <h3
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
            color: "#1e40af",
          }}
        >
          Key Features of TalkLMS
        </h3>

        {/* Paragraph */}
        <p
          style={{
            fontSize: "1.5rem",
            color: "#4B5563",
            marginBottom: "3rem",
            lineHeight: "1.6",
            textAlign: "center",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          TalkLMS provides a complete suite of tools to enhance learning and
          administration, designed for educators, students, and institutions,
          ensuring seamless access, customizable features, and secure management
          of educational resources.
        </p>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
          }}
        >
          {features.map((b, i) => (
            <div
              key={i}
              style={{
                padding: "3rem",
                borderRadius: "0.75rem",
                backgroundColor: b.color,
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
              }}
            >
              <div style={{ marginBottom: "1.5rem" }}>{b.icon}</div>
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "#111827",
                }}
              >
                {b.title}
              </h4>
              <p style={{ color: "#374151", fontSize: "1.15rem" }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 1024px) {
            h3 { font-size: 2.5rem !important; text-align: center; }
            p { font-size: 1.3rem !important; text-align: center; }
            div[style*="padding: 3rem"] { padding: 2rem !important; }
          }

          @media (max-width: 768px) {
            h3 { font-size: 2rem !important; text-align: center; }
            p { font-size: 1.1rem !important; text-align: center; }
            div[style*="padding: 3rem"] { padding: 1.5rem !important; }
          }

          @media (max-width: 480px) {
            h3 { font-size: 1.6rem !important; }
            p { font-size: 1rem !important; }
            div[style*="padding: 3rem"] { padding: 1rem !important; }
          }
        `}
      </style>
    </section>
  );
}
