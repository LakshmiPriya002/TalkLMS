// src/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setApiError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.password.trim())
      newErrors.password = "Password is required";
    else if (formData.password.length > 72)
      newErrors.password = "Password too long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setApiError("");
    try {
      const response = await fetch("http://localhost:8000/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Login failed");

      alert("Login successful!");
      setFormData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setApiError(error.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eaf3ff, #d6e9ff)", // lighter contact-style blue
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 2rem",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "2.5rem",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.9rem",
            fontWeight: "700",
            color: "#1976d2", // changed from dark navy to lighter blue
            marginBottom: "0.5rem",
          }}
        >
          Welcome Back
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.95rem",
            color: "#555",
            marginBottom: "1rem",
          }}
        >
          Log in to your <strong>TalkLMS</strong> account
        </p>

        {apiError && (
          <div
            style={{
              backgroundColor: "#fdecea",
              color: "#d32f2f",
              padding: "0.75rem",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "0.9rem",
              border: "1px solid #f5c6cb",
            }}
          >
            {apiError}
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: "0.85rem",
            borderRadius: "8px",
            border: errors.email ? "1px solid #e53935" : "1px solid #ccc",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #1976d2")}
          onBlur={(e) =>
            (e.target.style.border = errors.email
              ? "1px solid #e53935"
              : "1px solid #ccc")
          }
        />
        {errors.email && (
          <span style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.email}
          </span>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            padding: "0.85rem",
            borderRadius: "8px",
            border: errors.password ? "1px solid #e53935" : "1px solid #ccc",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #1976d2")}
          onBlur={(e) =>
            (e.target.style.border = errors.password
              ? "1px solid #e53935"
              : "1px solid #ccc")
          }
        />
        {errors.password && (
          <span style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.password}
          </span>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.9rem",
            backgroundColor: loading ? "#a6c8f7" : "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "1rem",
            fontWeight: "600",
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#1565c0") // hover blue
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = loading
              ? "#a6c8f7"
              : "#1976d2")
          }
        >
          {loading ? "Logging In..." : "Log In"}
        </button>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#444",
          }}
        >
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{
              color: "#1976d2",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Sign up
          </span>
        </p>
      </form>

      <style>
        {`
          @media (max-width: 768px) {
            section { padding: 3rem 1rem; }
            form { padding: 2rem; }
            h2 { font-size: 1.6rem !important; }
          }

          @media (max-width: 480px) {
            form { padding: 1.5rem; }
            h2 { font-size: 1.4rem !important; }
            input, button { font-size: 0.9rem !important; }
          }
        `}
      </style>
    </section>
  );
}
