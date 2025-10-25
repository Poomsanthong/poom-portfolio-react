import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I'm a Frontend Developer with 1 year of experience in building
        responsive and accessible web applications. I love creating
        user-friendly interfaces and ensuring a seamless user experience through
        clean code and beautiful designs.
        <br />
        <br />
        My web development journey started with a strong foundation in HTML,
        CSS, and JavaScript, and has since expanded to include modern frameworks
        like React and tools like Git.
        <br />
        <br />I have successfully completed professional courses in web
        development and design by{" "}
        <a href="https://icecampus.com" target="_blank">
          Ice Malta
        </a>
        , which helped me master both technical and creative skills.
      </p>

      <div className="experience-stats">
        <div className="stat-grid">
          <div className="stat-card">
            <h3>1+</h3>
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
