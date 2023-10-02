import React from 'react';
import logo from './component-assets/D2LPP-logo.png';  // Make sure to place your logo in the same directory or update this path

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Logo Section */}
      <div style={{ margin: '10px' }}>
        <img src={logo} alt="Logo" style={{ width: '300px' }} />
      </div>
      
      {/* Intro Section */}
      <div>
        <h1>Welcome to our Senior Project Landing Page!</h1>
        <p>
           This site will serve as the online display of our project containing <br></br>
           our documentation, some advance feature explanations <br></br>
           and everything else required to fit our rubric. <br></br>
           Enjoy!
           
        </p>
      </div>
      <div>
        <h2>Team Members</h2>
        <ul>
          <li>Sean Work</li>
          <li>Kenneth Molinari</li>
          <li>Christopher Dymanus</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;