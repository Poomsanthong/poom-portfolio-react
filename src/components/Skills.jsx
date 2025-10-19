import React from "react";

const Skills = () => {
  const skills = [
    {
      icon: "fab fa-html5",
      title: "HTML",
      desc: "Semantic markup, accessibility, SEO basics",
    },
    {
      icon: "fab fa-css3-alt",
      title: "CSS",
      desc: "Responsive layouts, Flexbox, Grid, animations",
    },
    {
      icon: "fab fa-js-square",
      title: "JavaScript",
      desc: "DOM manipulation, ES6+, basic interactivity",
    },
    {
      icon: "fab fa-react",
      title: "React",
      desc: "Building interactive UIs and components",
    },
    {
      icon: "fab fa-bootstrap",
      title: "Bootstrap",
      desc: "Quick prototyping and responsive layouts",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      desc: "Mobile-first, cross-device compatibility",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      desc: "Version control, collaboration, open source",
    },
    {
      icon: "fas fa-pencil-ruler",
      title: "Design Tools",
      desc: "Basic Figma & Adobe XD for UI design",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <i className={skill.icon}></i>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
