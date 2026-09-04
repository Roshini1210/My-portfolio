import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="section-heading">
          <p>WHAT I'VE BUILT</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {/* Movie Ticket Booking */}
          <div className="project-card">
            <div className="project-content">

              <p className="project-number">01</p>

              <h3>Movie Ticket Booking</h3>

              <p>
                A full-stack movie ticket booking platform built with the
                MERN stack. Users can explore movies and interact with the
                booking interface.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

              <a
                href="https://movie-ticket-booking-mocha-psi.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>
          </div>


          {/* Agile Board */}
          <div className="project-card">
            <div className="project-content">

              <p className="project-number">02</p>

              <h3>Agile / Kanban Board</h3>

              <p>
                A task management board inspired by Agile and Kanban
                workflows, designed to organize tasks across different
                stages of development.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a
                href="https://agile-board-woad.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>
          </div>


          {/* Habit Tracker */}
          <div className="project-card">
            <div className="project-content">

              <p className="project-number">03</p>

              <h3>Habit Tracker</h3>

              <p>
                A web application designed to help users track and maintain
                their daily habits through a simple and focused interface.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a
                href="https://habit-tracker-bice-iota.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>
          </div>


          {/* Instagram Clone */}
          <div className="project-card">
            <div className="project-content">

              <p className="project-number">04</p>

              <h3>Instagram Clone</h3>

              <p>
                An ongoing project inspired by Instagram, built while
                exploring modern frontend development and recreating
                social media functionality.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a
                href="https://instagram-clone-smoky-delta.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project →
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;