import React from "react";
import "./contact.css";
import Swal from 'sweetalert2'

function contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "414c8e1b-ab00-46e0-bdc8-ee03eaee6172");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success"
      });
    }
  };

  return (
    <section id="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            name="name"
            type="text"
            className="field"
            placeholder="Enter your name."
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            className="field"
            placeholder="Enter your email address."
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field-mess"
            placeholder="Enter your message."
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default contact;
