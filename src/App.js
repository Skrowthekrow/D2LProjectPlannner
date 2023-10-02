import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Features from './components/Features';
import ContactUs from './components/ContactUs';  // Import the ContactUs component


function App() {
  const appStyle = {
    backgroundColor: 'black', // Set the background color for the entire App
  };

  const mainContentStyle = {
    marginLeft: '80px', // Assuming the width of the collapsed sidebar is 80px
    backgroundColor: '#333', // Gray background
    minHeight: '100vh', // Full height
    color: 'white', // Text color
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Sidebar />
        <div style={mainContentStyle}>
          <Header />
          <Routes>
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact-us" element={<ContactUs />} /> 
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
