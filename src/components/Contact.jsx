import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import local images
import johnImg from "../assets/John Smith.jpeg";
import emilyImg from "../assets/Emily Brown.jpg";
import michaelImg from "../assets/Michael Davis.jpeg";

export default function Contact() {
  const navigate = useNavigate(); // Initialize useNavigate

  const supportTeam = [
    {
      name: "John Smith",
      role: "Support Lead",
      img: johnImg,
    },
    {
      name: "Emily Brown",
      role: "Customer Support",
      img: emilyImg,
    },
    {
      name: "Michael Davis",
      role: "Technical Support",
      img: michaelImg,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
        {/* Contact Us Section */}
        <section
          style={{
            width: "100vw",
            padding: "5rem 2rem 3rem",
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
            Contact Us
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            We’re here to help you with any questions or support needs. Reach
            out to us today!
          </p>
          <button
            onClick={() => navigate("/signup")} // Navigate to signup route
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
            Get in Touch
          </button>
        </section>

        {/* Our Support Team Section */}
        <section
          style={{
            width: "100vw",
            padding: "4rem 2rem",
            backgroundColor: "#fff",
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
              marginBottom: "1.5rem",
            }}
          >
            Our Support Team
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            Meet the dedicated team ready to assist you with your TalkLMS
            experience.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              width: "100%",
            }}
          >
            {supportTeam.map((member, index) => (
              <div
                key={index}
                style={{ flex: "1 1 200px", textAlign: "center" }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    borderRadius: "50%",
                    width: "140px",
                    height: "140px",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{
                    fontSize: "1rem",
                    margin: "0.5rem 0",
                    fontWeight: "bold",
                  }}
                >
                  {member.name}
                </p>
                <p style={{ fontSize: "1rem", color: "#1e40af" }}>
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
            padding: "3rem 2rem",
            backgroundColor: "#f9f9f9",
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
            Contact Information
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            Get in touch with us via email, phone, or visit our office.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "600px",
            }}
          >
            <p style={{ fontSize: "1.1rem", margin: 0 }}>
              <strong>Email:</strong> support@talklms.com
            </p>
            <p style={{ fontSize: "1.1rem", margin: 0 }}>
              <strong>Phone:</strong> +1-800-555-0123
            </p>
            <p style={{ fontSize: "1.1rem", margin: 0 }}>
              <strong>Address:</strong> 123 Learning Lane, EduCity, EC 12345
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          style={{
            width: "100vw",
            padding: "3rem 2rem",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "#f9f9f9",
              padding: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={{
                padding: "0.85rem",
                borderRadius: "0.35rem",
                border: errors.name ? "1px solid red" : "1px solid #ccc",
                fontSize: "1rem",
                width: "100%",
              }}
            />
            {errors.name && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.name}
              </span>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              style={{
                padding: "0.85rem",
                borderRadius: "0.35rem",
                border: errors.email ? "1px solid red" : "1px solid #ccc",
                fontSize: "1rem",
                width: "100%",
              }}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.email}
              </span>
            )}

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              style={{
                padding: "0.85rem",
                borderRadius: "0.35rem",
                border: errors.subject ? "1px solid red" : "1px solid #ccc",
                fontSize: "1rem",
                width: "100%",
              }}
            />
            {errors.subject && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.subject}
              </span>
            )}

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              style={{
                padding: "0.85rem",
                borderRadius: "0.35rem",
                border: errors.message ? "1px solid red" : "1px solid #ccc",
                fontSize: "1rem",
                width: "100%",
                resize: "vertical",
              }}
            ></textarea>
            {errors.message && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>
                {errors.message}
              </span>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                padding: "0.85rem",
                backgroundColor: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "0.35rem",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "0.5rem",
              }}
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}