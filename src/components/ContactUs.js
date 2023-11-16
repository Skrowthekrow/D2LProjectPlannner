import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '30px' }}>
      <h1>Contact Us</h1>
      
      {/* Team Information */}
      <div style={{ width: '80%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'gold', padding: '1em' }}>
        <h3>Project Team</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1em' }}>
            <span>Name: Sean Work</span><br />
            <span>Email: krownaes@gmail.com</span><br />
            <span>Role: Developer / Team Lead</span>
          </li>
          <li style={{ marginBottom: '1em' }}>
            <span>Name: Christopher Dymanus</span><br />
            <span>Email: chris.dymanus@example.com</span><br />
            <span>Role: Developer</span>
          </li>
          <li style={{ marginBottom: '1em' }}>
            <span>Name: Kenneth Molinari</span><br />
            <span>Email: kenneth.molinari@example.com</span><br />
            <span>Role: Developer</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
