import React from "react";
import { FaUsers, FaChartLine, FaHeadset, FaRegSmile } from "react-icons/fa";

export default function KeyBenefits() {
  const benefits = [
    {
      title: "Collaboration",
      desc: "Encourage teamwork with group discussions and projects.",
      gradient: "linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)",
      icon: <FaUsers size={50} color="#2563eb" />, // changed icon color to blue accent
    },
    {
      title: "Performance Tracking",
      desc: "Monitor progress with real-time reports and insights.",
      gradient: "linear-gradient(135deg, #BBF7D0 0%, #22C55E 100%)",
      icon: <FaChartLine size={50} color="#16a34a" />, // dark green icon for contrast
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock support for educators and learners.",
      gradient: "linear-gradient(135deg, #FEF9C3 0%, #FACC15 100%)",
      icon: <FaHeadset size={50} color="#ca8a04" />, // golden icon for warmth
    },
    {
      title: "User Satisfaction",
      desc: "Designed to provide a seamless learning experience.",
      gradient: "linear-gradient(135deg, #FBCFE8 0%, #BE185D 100%)",
      icon: <FaRegSmile size={50} color="#9d174d" />, // rich pink icon
    },
  ];

  return (
    <>
      <section
        id="key-benefits"
        style={{ padding: "4rem 1.5rem", backgroundColor: "#f9fafb" }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#1e40af",
            }}
          >
            Key Benefits of TalkLMS
          </h3>

          <p
            style={{
              fontSize: "1.5rem",
              color: "#4B5563",
              marginBottom: "2.5rem",
              lineHeight: "1.6",
            }}
          >
            Our LMS ensures effective collaboration, seamless support, and
            enhanced learning experiences that empower both educators and
            learners to achieve success.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                style={{
                  background: "#fff", // white background to replace color gradient
                  borderRadius: "1rem",
                  padding: "3rem 2rem",
                  color: "#1e293b",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)", // subtle shadow for material effect
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0, 0, 0, 0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  style={{
                    marginBottom: "1.5rem",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: b.gradient, // keep gradient behind the icon circle
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {b.icon}
                </div>
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                  }}
                >
                  {b.title}
                </h4>
                <p style={{ fontSize: "1.15rem", lineHeight: "1.6", color: "#4B5563" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @media (max-width: 1024px) {
            h3 {
              font-size: 2.5rem !important;
            }
            p {
              font-size: 1.3rem !important;
            }
          }
          @media (max-width: 768px) {
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
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </>
  );
}
