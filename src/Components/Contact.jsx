import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xfmil0u",
        "template_xmda8fs",
        {
          from_name: formData.name,
          reply_to: formData.email,
          to_reply: formData.email,
          message: formData.message,
        },
        "YScosCT0KQGyZ140t"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
      <a href="/Haseeb Resume July 2025.pdf" download>
        <button className="resume-button">Download Resume</button>
      </a>
    </section>
  );
};

export default Contact;
