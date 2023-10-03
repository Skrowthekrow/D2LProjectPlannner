import React from 'react';

const Footer = () => {
  const divStyle = {
    position: 'fixed',  // Fixed position
    bottom: '0',  // Set it to the bottom
    width: '100%',  // Full width
    height: '13px',  // Make it as thin as a line
    backgroundColor: 'gold',  // Line color
    color: 'black',  // Text color
    fontSize: '10px',
    textAlign: 'center'
  };

  return (
    <div style={divStyle}>KSU Senior Project - Sean Work, Kenneth Molinari, Christopher Dymanus - 2023</div>
  );
};

export default Footer;
