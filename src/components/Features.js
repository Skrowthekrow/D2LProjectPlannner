
import React from 'react';
import './Features.css';  // Importing the CSS file for styling

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-title">Project Features</h1>
      
      <div className="features-box">
        <h3>D2L Web Application</h3>
        <p>This project is a React web application that communicates with our self-made API.</p>
        <h3>User Management</h3>
        <p>Students and teachers can log in and are identifiable. This prototype is made for our teacher Sharon Perry.</p>
        <h3>Homepage</h3>
        <p>The home page has options to return to the home page and login. Users are directed to the login page upon clicking the login button.</p>
        <h3>Login Options</h3>
        <p>Users can log in as an admin, student, or create a new account. The database API is currently under construction.</p>
        <h3>Student Dashboard</h3>
        <p>Students have the option to select a project and perform peer reviews.</p>
        <h3>Teacher Dashboard</h3>
        <p>Teachers have more options including creating a course, importing/exporting data, and viewing reports.</p>
      </div>
    </div>
  );
};
export default Features;
