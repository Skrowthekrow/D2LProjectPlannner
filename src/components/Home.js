import React from 'react';
import logo from './component-assets/D2LPP-logo.png';  // Make sure to place your logo in the same directory or update this path

const Home = () => {
  const divStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    borderRadius: '10px', // Rounded edges
    color: 'gold', // Text color set to gold
    padding: '0px',
    textAlign: 'center',
    maxWidth: '700px',  // Set maximum width
    margin: '0 auto'  // Center the div
  };

  const listStyle = {
    listStyleType: 'none', // No bullets
    padding: 0,
    margin: 0
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Logo Section */}
      <div style={{ margin: '10px' }}>
        <img src={logo} alt="Logo" style={{ width: '300px' }} />
      </div>
      
      {/* Intro Section */}
      <div style={divStyle}>
        <h1>Welcome to our Senior Project Landing Page!</h1>
        <p>
          This site will serve as the online display of our project containing <br />
          our documentation, some advance feature explanations <br />
          and everything else required to fit our rubric. <br />
          Enjoy!
        </p>
  
      </div>
    </div>
  );
};

export default Home;
