import React from 'react';
import downloadButton from './component-assets/download-btn.png';  // Import the download button image
import githubButton from './component-assets/github-btn.png';  // Import the GitHub button image

const Documentation = () => {
  const files = [
    { name: 'SP-4 - D2L 3rd Party App - Project Plan.docx', description: 'Project Plan' },
    { name: 'SP-4 No Color-D2L 3rd Party Application-Requirements.docx', description: 'Software Requirements Specifications' },
    { name: 'SP-4 No Color-D2L 3rd Party Application-Design.docx', description: 'Software Design Specifications' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>
      <h1>Documentation</h1>

      {/* List of files */}
      <div style={{ width: '80%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'gold', padding: '1em' }}>
        <h3>Available Documents</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {files.map((file, index) => (
            <li key={index} style={{ marginBottom: '1em' }}>
              <span>{file.description}</span>
              <a 
                href={`./files/${file.name}`}
                download 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={downloadButton} alt="Download" style={{ marginLeft: '10px', cursor: 'pointer', width: '20px', height: '20px' }} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* GitHub Section */}
      <div style={{ width: '80%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'gold', padding: '1em', marginTop: '20px' }}>
        <h3>GitHub Repositories</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <span>Landing Page Repo</span>
            <a href="https://github.com/Skrowthekrow/D2LProjectPlannner" target="_blank" rel="noopener noreferrer">
              <img src={githubButton} alt="GitHub" style={{ marginLeft: '10px', cursor: 'pointer', width: '20px', height: '20px' }} />
            </a>
          </li>
          <li>
            <span>D2L Project Planner Repo</span> 
            <a href="https://github.com/KSU-D2LPP/Main-Project" target="_blank" rel="noopener noreferrer">
              <img src={githubButton} alt="GitHub" style={{ marginLeft: '10px', cursor: 'pointer', width: '20px', height: '20px' }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Documentation;
