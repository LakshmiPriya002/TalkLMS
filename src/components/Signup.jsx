import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Signup successful!");
      setFormData({ firstName: "", lastName: "", email: "", password: "", agree: false });
      setErrors({});
    }
  };

//   const handleGoogleSignup = () => {
//     window.location.href = "https://your-backend.com/auth/google"; // replace with real Google OAuth URL
//   };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f9f9f9",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Top-left arrow button */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "transparent",
          border: "none",
          fontSize: "1.8rem",
          cursor: "pointer",
          color: "#333",
        }}
        title="Go to Home"
      >
        ←
      </button>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          SIGN UP FOR A FREE TRIAL
        </h2>

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name *"
          style={{
            padding: "0.75rem",
            border: errors.firstName ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.firstName && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.firstName}</span>}

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name *"
          style={{
            padding: "0.75rem",
            border: errors.lastName ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.lastName && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.lastName}</span>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          style={{
            padding: "0.75rem",
            border: errors.email ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.email && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.email}</span>}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password *"
          style={{
            padding: "0.75rem",
            border: errors.password ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.password && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.password}</span>}

        <label style={{ fontSize: "0.9rem", color: "#666" }}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            style={{ marginRight: "0.5rem" }}
          />
          I agree to the TalkLMS Terms and policies
        </label>
        {errors.agree && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.agree}</span>}

        <button
          type="submit"
          style={{
            padding: "0.85rem",
            backgroundColor: "#2ecc71",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          SIGN UP
        </button>

        {/* <button
          type="button"
          onClick={handleGoogleSignup}
          style={{
            padding: "0.85rem",
            backgroundColor: "#4285f4",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ marginRight: "0.5rem" }}>🌐</span> SIGN UP WITH GOOGLE
        </button> */}
      </form>
    </section>
  );
}
