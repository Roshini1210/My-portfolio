import '../styles/Hero.css';

import profile from '../assets/profile.jpeg';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2 className="hero-greeting"><strong>Hi, I'm</strong></h2>

        <h1>Roshini </h1>

        <h2>Computer Science Engineering Student</h2>
        <h3>MERN Stack Developer</h3>

        <p className="hero-description">
          I'm a Computer Science Engineering student with a strong interest
          in full-stack web development. I build responsive and user-focused
          applications using the MERN stack and enjoy turning ideas into
          functional products. Currently, I'm exploring image processing
          and expanding my skills toward research and advanced computing.
        </p>

        <div className="hero-stats">
          <div>
            <strong>9.4/10</strong>
            <span>CGPA</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>

          <a href="#contact" className="btn btn-outline-light">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Roshini" />
      </div>
    </section>
  );
}

export default Hero;