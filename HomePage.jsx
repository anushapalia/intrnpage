import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Add your styles here
import whatsappIcon from './asstse/Screenshot 2024-10-10 011742.png';
import personImage from './asstse/Screenshot girl.png';
import boyImage from './asstse/Screenshot boy.png'; // Second image
import groupImage from './asstse/Screenshot group.png'; // Third image

const HomePage = () => {
  const navigate = useNavigate();

  const handleBiodataClick = () => {
    navigate('/biodata'); // Navigates to the biodata page
  };

  const handleCounsellingClick = () => {
    navigate('/counselling'); // Navigates to the counselling page
  };

  const handleBoyClick = () => {
    navigate('/boy'); // Navigates to the BoyPage
  };

  const handleGroupClick = () => {
    navigate('/group'); // Navigates to the GroupPage
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = '/path-to-syllabus-file/demo-syllabus.pdf'; // Provide the correct path to the syllabus file
    link.download = 'demo-syllabus.pdf';
    link.click();
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+91 89059 03621'); // Add your WhatsApp number here
  };

  return (
    <div className="home-page">
      <div className="top-section">
        <button className="download-btn" onClick={handleDownloadClick}>
          Download Syllabus
        </button>
      </div>

      <h1>Real Stories, Real Success</h1>
      <p>Discover what our learners say about us</p>

      <div>
        <div className="image-section" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img
            src={personImage}
            alt="Person"
            onClick={handleBiodataClick}
            style={{ width: '100px', height: 'auto', cursor: 'pointer' }} // Optional styles
          />
          <img
            src={boyImage}
            alt="Boy"
            onClick={handleBoyClick} // Navigate to BoyPage
            style={{ width: '100px', height: 'auto', cursor: 'pointer' }} // Optional styles
          />
          <img
            src={groupImage}
            alt="Group"
            onClick={handleGroupClick} // Navigate to GroupPage
            style={{ width: '100px', height: 'auto', cursor: 'pointer' }} // Optional styles
          />
        </div>
      </div>

      <div className="stats-section">
        <p>9K+ Successful Career Transitions</p>
        <p>175% Average Salary Hike</p>
      </div>

      <button className="apply-btn" onClick={handleCounsellingClick}>
        Apply For Counselling
      </button>

      <div className="whatsapp-button" onClick={handleWhatsAppClick}>
        <img src={whatsappIcon} alt="WhatsApp" /> {/* Add WhatsApp icon */}
      </div>
    </div>
  );
};

export default HomePage;
