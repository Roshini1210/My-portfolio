import profile from '../assets/profile.jpeg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>Roshini</h1>

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
          <button className="btn btn-primary">
            View My Projects
          </button>

          <button className="btn btn-outline-light">
            Contact Me
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Roshini" />
      </div>
    </section>
  );
}

export default Hero;