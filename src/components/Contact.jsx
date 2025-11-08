import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import team images
import johnImg from "../assets/John Smith.jpeg";
import emilyImg from "../assets/Emily Brown.jpg";
import michaelImg from "../assets/Michael Davis.jpeg";

export default function Contact() {
  const navigate = useNavigate();

  const supportTeam = [
    { name: "John Smith", role: "Support Lead", img: johnImg },
    { name: "Emily Brown", role: "Customer Support", img: emilyImg },
    { name: "Michael Davis", role: "Technical Support", img: michaelImg },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:8000/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmissionStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        const errorData = await response.json();
        setSubmissionStatus(`Error: ${errorData.error || "Submission failed"}`);
      }
    } catch (error) {
      setSubmissionStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => setSubmissionStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

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
        {/* Contact Header Section */}
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
            Contact Us
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
            Have a question or need support? Our team is here to help you with
            any inquiries about TalkLMS.
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
            Get in Touch
          </button>
        </section>

        {/* Support Team Section */}
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
              marginBottom: "2rem",
            }}
          >
            Meet Our Support Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2.5rem",
              maxWidth: "1200px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {supportTeam.map((member, index) => (
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
                  minHeight: "320px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    borderRadius: "100%",
                    width: "140px",
                    height: "140px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                  }}
                />
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#1e293b",
                    margin: "0.25rem 0",
                  }}
                >
                  {member.name}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#2563eb",
                    margin: 0,
                    fontWeight: "500",
                  }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            backgroundColor: "#f0f9ff",
            display: "flex",
            flexDirection: "column",
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
            Contact Information
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#475569",
              marginBottom: "2rem",
              maxWidth: "800px",
              lineHeight: "1.8",
            }}
          >
            Reach us through email, phone, or by visiting our office.
          </p>
          <div
            style={{
              display: "grid",
              gap: "1.2rem",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <p style={{ fontSize: "1.1rem" }}>
              <strong>Email:</strong> support@talklms.com
            </p>
            <p style={{ fontSize: "1.1rem" }}>
              <strong>Phone:</strong> +1-800-555-0123
            </p>
            <p style={{ fontSize: "1.1rem" }}>
              <strong>Address:</strong> 123 Learning Lane, EduCity, EC 12345
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          style={{
            width: "100vw",
            padding: "6rem 2rem",
            background: "linear-gradient(to right, #e0f2fe, #fef3c7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
              maxWidth: "500px", // reduced from 700px
              backgroundColor: "#fff",
              padding: "2.5rem", // reduced from 3rem
              borderRadius: "1rem",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#2563eb",
                marginBottom: "1rem",
              }}
            >
              Send Us a Message
            </h2>

            {submissionStatus && (
              <div
                style={{
                  backgroundColor: submissionStatus.includes("Error")
                    ? "#fee2e2"
                    : "#d1fae5",
                  color: submissionStatus.includes("Error")
                    ? "#b91c1c"
                    : "#065f46",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  fontWeight: "500",
                }}
              >
                {submissionStatus}
              </div>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "1rem",
                borderRadius: "0.5rem",
                border: errors.name ? "1px solid red" : "1px solid #cbd5e1",
                fontSize: "1rem",
              }}
              disabled={isSubmitting}
            />
            {errors.name && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.name}
              </span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "1rem",
                borderRadius: "0.5rem",
                border: errors.email ? "1px solid red" : "1px solid #cbd5e1",
                fontSize: "1rem",
              }}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.email}
              </span>
            )}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={{
                padding: "1rem",
                borderRadius: "0.5rem",
                border: errors.subject ? "1px solid red" : "1px solid #cbd5e1",
                fontSize: "1rem",
              }}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.subject}
              </span>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              style={{
                padding: "1rem",
                borderRadius: "0.5rem",
                border: errors.message ? "1px solid red" : "1px solid #cbd5e1",
                fontSize: "1rem",
                resize: "vertical",
              }}
              disabled={isSubmitting}
            />
            {errors.message && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.message}
              </span>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: isSubmitting ? "#93c5fd" : "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontSize: "1.1rem",
                fontWeight: "600",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1d4ed8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = isSubmitting
                  ? "#93c5fd"
                  : "#2563eb")
              }
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
