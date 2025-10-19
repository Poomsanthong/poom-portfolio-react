// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  useEffect(() => {
    emailjs.init("D-4i4a3WY2XpgCSH3"); //  Emailjs key
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    //  FORM VALIDATION
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // ✅ SEND EMAIL
    setSending(true);

    emailjs
      .sendForm("default_service", "template_ldejkna", form.current)
      .then(() => {
        alert("✅ Message sent successfully!");
        setSending(false);
        form.current.reset(); // clear form after success
      })
      .catch((err) => {
        alert("❌ Failed to send: " + JSON.stringify(err));
        setSending(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} id="form" className="contact-form">
        <input type="text" name="name" id="name" placeholder="Your Name" />
        <input type="email" name="email" id="email" placeholder="Your Email" />
        <textarea name="message" id="message" placeholder="Your Message" />
        <input
          type="submit"
          id="button"
          value={sending ? "Sending..." : "Send Email"}
        />
      </form>
    </section>
  );
};

export default Contact;
