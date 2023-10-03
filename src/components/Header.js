import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'gold',
    textAlign: 'center',
    padding: '0px',
    position: 'fixed',
    width: '100%',
    top: '0',  // Append to the very top
    zIndex: 999 // High zIndex to keep it above other elements
  };

  const textStyle = {
    animation: 'scrollingText 25s linear infinite',
    whiteSpace: 'nowrap',
    fontSize: '14px'
  };

  return (
    <div style={headerStyle}>
      <p style={textStyle}>SRS and SDS is complete, Backend in progress, Frontend in progress -- Next meeting is 10/3</p>
      <style>{`
        @keyframes scrollingText {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Header;
