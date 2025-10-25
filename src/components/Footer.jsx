import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Poom Portfolio. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://github.com/Poomsanthong?tab=repositories"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/thanapoom-santhong-983337288/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
