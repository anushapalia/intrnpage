import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BiodataPage from './BiodataPage';
import CounsellingPage from './CounsellingPage';
import BoyPage from './BoyPage'; // Import the BoyPage component
import GroupPage from './GroupPage'; // Import the GroupPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biodata" element={<BiodataPage />} />
        <Route path="/counselling" element={<CounsellingPage />} />
        <Route path="/boy" element={<BoyPage />} /> {/* Route for BoyPage */}
        <Route path="/group" element={<GroupPage />} /> {/* Route for GroupPage */}
      </Routes>
    </Router>
  );
}

export default App;


