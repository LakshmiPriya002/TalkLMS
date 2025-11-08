// src/Signup.jsx
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
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
    setApiError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setApiError("");
    try {
      const response = await fetch("http://localhost:8000/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          agree: formData.agree,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Signup failed");

      alert("Signup successful!");
      setFormData({ firstName: "", lastName: "", email: "", password: "", agree: false });
      navigate("/");
    } catch (error) {
      setApiError(error.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eaf3ff, #d6e9ff)", // lighter contact-style blue
        padding: "2rem",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "#fff",
          borderRadius: "1rem",
          padding: "2.5rem",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#1976d2",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          Create Your Account
        </h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "1rem" }}>
          Join TalkLMS and start your journey today
        </p>

        {apiError && (
          <span
            style={{
              color: "red",
              fontSize: "0.9rem",
              textAlign: "center",
              background: "#ffe6e6",
              padding: "0.5rem",
              borderRadius: "4px",
            }}
          >
            {apiError}
          </span>
        )}

        {/* First Name */}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name *"
          style={{
            padding: "0.8rem",
            borderRadius: "6px",
            border: errors.firstName ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 5px rgba(25,118,210,0.3)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        {errors.firstName && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.firstName}</span>}

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name *"
          style={{
            padding: "0.8rem",
            borderRadius: "6px",
            border: errors.lastName ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 5px rgba(25,118,210,0.3)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        {errors.lastName && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.lastName}</span>}

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          style={{
            padding: "0.8rem",
            borderRadius: "6px",
            border: errors.email ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 5px rgba(25,118,210,0.3)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        {errors.email && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.email}</span>}

        {/* Password */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password *"
          style={{
            padding: "0.8rem",
            borderRadius: "6px",
            border: errors.password ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 5px rgba(25,118,210,0.3)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        {errors.password && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.password}</span>}

        {/* Checkbox */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            style={{
              width: "18px",
              height: "18px",
              accentColor: "#1976d2",
              cursor: "pointer",
            }}
          />
          I agree to the{" "}
          <span style={{ color: "#1976d2", cursor: "pointer" }}>Terms and Policies</span>
        </label>
        {errors.agree && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.agree}</span>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.9rem",
            background: loading ? "#a6c8f7" : "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => !loading && (e.target.style.background = "#1565c0")}
          onMouseLeave={(e) => !loading && (e.target.style.background = "#1976d2")}
        >
          {loading ? "Signing Up..." : "Create Account"}
        </button>

        <p style={{ textAlign: "center", marginTop: "0.5rem", color: "#555" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#1976d2", cursor: "pointer", fontWeight: "600" }}
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </form>

      <style>
        {`
          @media (max-width: 600px) {
            form {
              padding: 1.8rem !important;
            }
            h2 {
              font-size: 1.6rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
