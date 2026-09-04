import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <div className="section-heading">
          <p>MY TECHNICAL TOOLKIT</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>

            <div className="skill-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database</h3>

            <div className="skill-list">
              <span>MongoDB</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Programming & Tools</h3>

            <div className="skill-list">
              <span>C</span>
              <span>C++</span>
              <span>Python</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;