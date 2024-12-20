import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm [Your Name], a [Your Profession]. Check out my projects below.
        </p>
        <a
          className="App-link"
          href="#projects"
        >
          View Projects
        </a>
      </header>
      <section id="projects" className="App-section">
        <h2>Projects</h2>
        <div className="App-projects">
          <div className="App-project">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </div>
          <div className="App-project">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
    </div>
  );
}

export default App;
