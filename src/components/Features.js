
import React from 'react';
import './Features.css'; 

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-box">
        <h1>Project Features</h1>
        <h2>D2L Web Application</h2>
        <p>This project is a React web application that communicates with our self-made API.</p>
        <h2>User Management</h2>
        <p>Students and teachers can log in and are identifiable. This prototype is made for our teacher Sharon Perry.</p>
        <h2>Homepage</h2>
        <p>The home page has options to return to the home page and login. Users are directed to the login page upon clicking the login button.</p>
        <h2>Login Options</h2>
        <p>Users can log in as an admin, student, or create a new account. The database API is currently under construction.</p>
        <h2>Student Dashboard</h2>
        <p>Students have the option to select a project and perform peer reviews.</p>
        <h2>Teacher Dashboard</h2>
        <p>Teachers have more options including creating a course, importing/exporting data, and viewing reports.</p>
      </div>
    </div>
  );
};

export default Features;
