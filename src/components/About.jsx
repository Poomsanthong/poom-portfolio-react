import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I'm a Frontend Developer with 2 years of experience building websites
        that work well and look great. I focus on writing clean code and
        creating designs that users enjoy.
        <br />
        <br />
        I started with HTML, CSS, and JavaScript, then moved on to modern tools
        like React and Next.js. I'm always learning and improving my skills.
        <br />
        <br />I completed professional web development courses at{" "}
        <a href="https://icecampus.com" target="_blank">
          Ice Malta
        </a>
        , which helped me master both technical and creative skills.
      </p>

      <div className="experience-stats">
        <div className="stat-grid">
          <div className="stat-card">
            <h3>2+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>

      <div className="certificates-section">
        <h3>Certifications</h3>
        <div className="certificates-grid">
          <a
            href="/assets/certificates/ACP Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <div className="certificate-content">
              <i className="fas fa-certificate"></i>
              <h4>Adobe Certificate Professional</h4>
              <p>Ice Malta - 2025</p>
            </div>
          </a>
          <a
            href="/assets/certificates/Frontend-Dev-Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <div className="certificate-content">
              <i className="fas fa-certificate"></i>
              <h4>Frontend Development Certificate</h4>
              <p>Ice Malta - 2025</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
