import React from 'react';

const Documentation = () => {
  const files = [
    { name: 'SP-4 - D2L 3rd Party App - Project Plan.docx', description: 'Project Plan' },
    { name: 'SP-4 No Color-D2L 3rd Party Application-Requirements.docx', description: 'Software Requirements Specifications' },
    { name: 'SP-4 No Color-D2L 3rd Party Application-Design.docx', description: 'Software Design Specifications' },
    // Add more files here
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin:'30px'}}>
      <h1>Documentation</h1>

      {/* List of files */}
      <div style={{ width: '80%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'gold', padding: '1em' }}>
        <h3>Available Documents</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {files.map((file, index) => (
            <li key={index} style={{ marginBottom: '1em' }}>
              <a 
                href={`/files/${file.name}`} 
                download 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
              <p>{file.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documentation;
