import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Matching Game",
      img: "../assets/Matching-game.png",
      desc: "A fun and interactive matching game built with JavaScript. Flip cards to find matching pairs.",
      showcases:
        "State management with useState and useEffect , Dynamic rendering and responsive UI, Event handling for card flips and question controls ",
      bonus: "Timer and move counter for added challenge",
      link: "https://matching-game-cyan.vercel.app/",
    },
    {
      title: "Interactive Menu",
      img: "../assets/Interactive-Menu.png",
      desc: "Interactive menu for a restaurant built with HTML, CSS, and JavaScript.",
      showcases: "DOM manipulation, event handling, responsive design",
      bonus: "Filterable categories and smooth animations",
      link: "Interactive-menu/index.html",
    },
    {
      title: "Movie Finder App",
      img: "../assets/movie-finder.jpg",
      desc: "A movie search application that allows users to find information about their favorite films. Uses OMDb API.",
      showcases: "API integration, React (CMA), responsive UI, error handling",
      bonus: "Search functionality with real-time results",
      link: "https://react-movie-1392evspw-poom-s-projects-177e0ca6.vercel.app",
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
            <h3>{project.title}</h3>
            <div>
              {project.desc}
              <br />
              <strong>Showcases:</strong> {project.showcases}
              <br />
              <strong>Bonus:</strong> {project.bonus}
            </div>
            <a href={project.link} className="project-link" target="_blank">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
