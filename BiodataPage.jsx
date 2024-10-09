import React from 'react';
import './BiodataPage.css'; // Add styles here
import personImage from './asstse/Screenshot girl.png';

const BiodataPage = () => {
  return (
    <div className="biodata-page">
      <div className="image-section">
        <img src={personImage} alt="Jaya Sinha" />
      </div>
      <h2>Jaya Sinha - Data Scientist</h2>
      <h3>Personal Information</h3>
      <p>
        <strong>Gender:</strong> Female <br />
        <strong>Nationality:</strong> Indian <br />
        <strong>Contact Number:</strong> +91-XXXXXXXXXX <br />
        <strong>Email Address:</strong> jaya.sinha@email.com <br />
        <strong>Address:</strong> 456, Elm Street, Mumbai, India
      </p>

      <h3>Educational Background</h3>
      <p>
        <strong>M.Sc. in Data Science</strong><br />
        University: Indian Institute of Technology, Bombay <br />
        Year of Graduation: 2020
      </p>

      <h3>Professional Experience</h3>
      <p>
        <strong>Data Scientist</strong><br />
        Company: Amazon <br />
        - Analyzing large datasets to uncover insights and trends.
      </p>
    </div>
  );
};

export default BiodataPage;

