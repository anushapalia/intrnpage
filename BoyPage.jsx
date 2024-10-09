import React from 'react';
import boyImage from './asstse/Screenshot boy.png'; // Path to the boy image
import './BoyPage.css'; // Import the CSS for BoyPage

const BoyPage = () => {
  return (
    <div className="boy-page">
      <img src={boyImage} alt="Rohit Sharma" />
      <h2>Rohit Sharma</h2>
      <p>
        <strong>Gender:</strong> Male <br />
        <strong>Nationality:</strong> Indian <br />
        <strong>Contact Number:</strong> +91-XXXXXXXXXX <br />
        <strong>Email Address:</strong> rohit.sharma@email.com <br />
        <strong>Address:</strong> 123, Maple Street, Delhi, India
      </p>
      <h3>Educational Background</h3>
      <p>
        <strong>B.Tech in Computer Science</strong><br />
        University: Delhi Technological University <br />
        Year of Graduation: 2016
      </p>
      <h3>Professional Experience</h3>
      <p>
        <strong>Front-End Developer</strong><br />
        Company: XYZ Technologies <br />
      </p>
    </div>
  );
};

export default BoyPage;


