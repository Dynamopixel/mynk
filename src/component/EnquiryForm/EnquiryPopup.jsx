import React, { useState } from "react";
import "./enquiryPopup.css";

const EnquiryPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Enquiry submitted!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Enquiry Form</h2>
        <p className="subtitle">Tell us about your smart ring requirement</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <select name="interest" onChange={handleChange} required>
            <option value="">Select Interest</option>
            <option value="fitness">Fitness Tracking</option>
            <option value="sleep">Sleep Monitoring</option>
            <option value="health">Health Monitoring</option>
            <option value="gift">Gift</option>
            <option value="bulk">Bulk Order</option>
          </select>

          <textarea
            name="message"
            placeholder="Your message..."
            rows="4"
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Enquiry</button>

        </form>
      </div>
    </div>
  );
};

export default EnquiryPopup;