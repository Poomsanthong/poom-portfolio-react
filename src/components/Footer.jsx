import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Poom Portfolio. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://github.com/Poomsanthong?tab=repositories"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
