import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // 1️⃣ Validate empty fields
    if (!name || !email || !phone || !message) {
      setStatus("⚠️ Please fill all fields");
      return;
    }

    // 2️⃣ Validate email format
    if (!validateEmail(email)) {
      setStatus("⚠️ Invalid email format");
      return;
    }

    try {
      // 3️⃣ API Call
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData
      );

      if (response.status === 200) {
        setStatus("✅ Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
        <p className="status">{status}</p>
      </form>
    </div>
  );
};

export default ContactForm;
