import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-content">

          <div className="contact-text">
            <h3>Have an idea or opportunity?</h3>

            <p>
              I'm always interested in learning, building new projects,
              collaborating with others and exploring opportunities in
              software development and research.
            </p>

            <p>
              Feel free to reach out. I'd be happy to connect.
            </p>
          </div>

          <div className="contact-links">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=roshinimurugan1210@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>Email</span>
              <strong>Let's talk →</strong>
            </a>

            <a
              href="https://github.com/Roshini1210"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>View my GitHub →</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/roshini-m-45b5b03ab/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Connect with me →</strong>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;