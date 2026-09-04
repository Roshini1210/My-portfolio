
import '../styles/About.css';
function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>Building, Learning & Exploring</h3>

            <p>
              I'm a Computer Science Engineering student passionate about
              building web applications and exploring new technologies.
              I enjoy turning ideas into practical and user-friendly
              digital experiences.
            </p>

            <p>
              I work with the MERN stack and have built projects using
              React, Node.js, Express and MongoDB. Currently, I'm exploring
              image processing and developing my understanding of research
              and problem solving.
            </p>

            <p>
              I believe in learning by building, experimenting with new
              technologies, and continuously improving my problem-solving
              skills.
            </p>
          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <h4>9.4/10</h4>
              <p>CGPA</p>
            </div>

            <div className="highlight-card">
              <h4>MERN</h4>
              <p>Full Stack Development</p>
            </div>

            <div className="highlight-card">
              <h4>React</h4>
              <p>Frontend Development</p>
            </div>

            <div className="highlight-card">
              <h4>Research</h4>
              <p>Currently Exploring</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;