import React from 'react';
import './CounsellingPage.css'; // Add styles here

const CounsellingPage = () => {
  return (
    <div className="counselling-page">
      <h2>Apply for Counselling</h2>
      <p>Fill out the form below to apply for counselling.</p>
      <form className="counselling-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Tell us about your counselling needs..." required></textarea>

        <button type="submit" className="apply-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default CounsellingPage;
