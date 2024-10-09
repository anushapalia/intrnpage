import React from 'react';
import groupImage from './asstse/Screenshot group.png'; // Path to the group image
import './GroupPage.css'; // Import the CSS for GroupPage

const GroupPage = () => {
  return (
    <div className="group-page">
      <h2>About the Group</h2>
      <div className="image-section">
        <img src={groupImage} alt="Group" />
      </div>
      <p>
        We are a community of passionate individuals dedicated to making a positive impact through technology and innovation. Our journey began in 2020, when a group of friends came together to share their skills and knowledge.
      </p>
      
      <h3>Mission</h3>
      <p>
        Our mission is to empower individuals by providing access to resources, knowledge, and opportunities in the tech space. We believe in fostering a collaborative environment where everyone can learn and grow together.
      </p>

      <h3>Activities</h3>
      <p>
        We engage in various activities, including:
        <ul>
          <li>Workshops on the latest technologies</li>
        </ul>
      </p>

    </div>
  );
};

export default GroupPage;


