import React, { useState } from "react";

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    email: "",
    organizationType: "",
    needs: "",
    howCanWeHelp: "",
    howDidYouHear: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Work Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.organizationType) newErrors.organizationType = "Organization Type is required";
    if (!formData.needs) newErrors.needs = "Please select an option";
    if (!formData.howCanWeHelp.trim()) newErrors.howCanWeHelp = "This field is required";
    if (!formData.howDidYouHear) newErrors.howDidYouHear = "Please select an option";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Demo request submitted successfully!");
      setFormData({
        email: "",
        organizationType: "",
        needs: "",
        howCanWeHelp: "",
        howDidYouHear: "",
        consent: false,
      });
      setErrors({});
    }
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "flex-start", // push form down instead of middle
        minHeight: "100vh",
        width: "100vw",
        paddingTop: "5rem", // adjust this to move more/less down
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
          maxWidth: "500px",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          color: "#333",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#3498db",
          }}
        >
          Schedule your customized demo
        </h2>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          style={{
            padding: "0.75rem",
            border: errors.email ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        {errors.email && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.email}</span>}

        <select
          name="organizationType"
          value={formData.organizationType}
          onChange={handleChange}
          style={{
            padding: "0.75rem",
            border: errors.organizationType ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">*Organization Type</option>
          <option value="education">Education</option>
          <option value="corporate">Corporate</option>
          <option value="nonprofit">Nonprofit</option>
        </select>
        {errors.organizationType && (
          <span style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.organizationType}
          </span>
        )}

        <select
          name="needs"
          value={formData.needs}
          onChange={handleChange}
          style={{
            padding: "0.75rem",
            border: errors.needs ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">*Which Best Describes Your Needs?</option>
          <option value="training">Training</option>
          <option value="compliance">Compliance</option>
          <option value="reporting">Reporting</option>
        </select>
        {errors.needs && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.needs}</span>}

        <textarea
          name="howCanWeHelp"
          value={formData.howCanWeHelp}
          onChange={handleChange}
          placeholder="*How Can We Help?"
          style={{
            padding: "0.75rem",
            border: errors.howCanWeHelp ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px",
            height: "100px",
          }}
        />
        {errors.howCanWeHelp && (
          <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.howCanWeHelp}</span>
        )}

        <select
          name="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={handleChange}
          style={{
            padding: "0.75rem",
            border: errors.howDidYouHear ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">How did you hear about us?</option>
          <option value="web">Website</option>
          <option value="referral">Referral</option>
          <option value="social">Social Media</option>
        </select>
        {errors.howDidYouHear && (
          <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.howDidYouHear}</span>
        )}

        <label style={{ fontSize: "0.9rem", color: "#333" }}>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            style={{ marginRight: "0.5rem" }}
          />
          I consent to receive marketing communications from TalkLMS in accordance with the privacy
          policy.
        </label>

        <button
          type="submit"
          style={{
            padding: "0.85rem",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            width: "100%",
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
