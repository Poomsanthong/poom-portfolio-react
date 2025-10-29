import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Matching Game",
      img: "/assets/Matching-game.png",
      desc: "A fun and interactive matching game built with JavaScript. Flip cards to find matching pairs.",
      showcases:
        "Custom React hooks for game logic, CSS Grid for responsive card layout, React state management for game progression, Local storage for high scores",
      bonus: "Timer and move counter for added challenge",
      link: "https://matching-game-cyan.vercel.app/",
    },
    {
      title: "Interactive Menu",
      img: "/assets/Interactive-Menu.png",
      desc: "Interactive menu for a restaurant built with HTML, CSS, and JavaScript.",
      showcases:
        "CSS Grid and Flexbox layouts, Dynamic filtering with JavaScript, CSS transitions and animations, Responsive breakpoints with media queries",
      bonus: "Filterable categories and smooth animations",
      link: "https://porfolio-sbxn.vercel.app/",
    },
    {
      title: "Movie Finder App",
      img: "/assets/movie-finder.jpg",
      desc: "A movie search application that allows users to find information about their favorite films. Uses OMDb API.",
      showcases:
        "Async/await for API calls, React Query for data fetching, Debounced search implementation, Error boundary implementation",
      bonus: "Search functionality with real-time results",
      link: "https://react-movie-1392evspw-poom-s-projects-177e0ca6.vercel.app",
    },
    {
      title: "Thai Restaurant Website - Landing Page",
      img: "/assets/Thai-site.png",
      desc: "A visually appealing and user-friendly landing page for a Thai restaurant, showcasing the menu, ambiance, and AOS animations.",
      showcases:
        "Responsive design with CSS Flexbox and Grid, Smooth scrolling navigation, High-quality images and typography, Contact form integration",
      bonus: "Dark Mode and mobile-friendly layout",
      link: "https://restaurant-website-landing-page.vercel.app/",
    },
    {
      title: "Real-Time Stock Market",
      img: "/assets/stock-market.jpg",
      desc: "Real-Time Stock App Live prices, smart alerts, AI insights, charts, news, and custom watchlists powered by Next.js, ",
      showcases:
        "Next.js 13 App Router, Real-time WebSocket integration, TradingView charts API, Tailwind CSS for styling, Server-side rendering",
      bonus: "AI-powered market insights and alerts",
      link: "",
      status: "in progress",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-img-container">
              <img src={project.img} alt={project.title} />
            </div>
            <h3>
              {project.title} <br /> {project.status && "(In Progress)"}
            </h3>

            <div className="project-content">
              <p className="project-description">{project.desc}</p>

              <div className="project-features">
                <div className="feature-section">
                  <h4>Technical Showcases:</h4>
                  <ul>
                    {project.showcases.split(", ").map((showcase, index) => (
                      <li key={index}>{showcase}</li>
                    ))}
                  </ul>
                </div>

                <div className="feature-section">
                  <h4>Bonus Features:</h4>
                  <p>{project.bonus}</p>
                </div>
              </div>
            </div>
            {!project.status && (
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
