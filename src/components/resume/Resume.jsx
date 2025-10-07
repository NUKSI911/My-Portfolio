import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";
import { experiences } from "../../constant/experience";

const Resume = ({ activeMenu }) => {
  useEffect(() => {
    activeMenu(1);
  }, []);

  return (
      <div className="resume">
        <div className="resume_container">
          <div className="top_row">
            <h2>Nurudeen Yekeen</h2>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/nurudeen-yekeen-2a9a88154/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fab fa-linkedin"></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href="https://drive.google.com/file/d/1lPcVtumTKHZfShVxuYf6MfM9ly4ONZBj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fas fa-download"></i> <span>Download </span>
                </small>
              </a>
            </div>
          </div>

          <p className="subheading">Frontend Developer</p>

          <div className="summary">
            <p>
              I’m a Senior Frontend software developer, passionate about transforming
              ideas from pixels to scalable products. I create functional
              applications with user experience as top priority.
            </p>
          </div>

          <div className="divider">
            <p>Core Technologies</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              HTML/CSS, SASS, Javascript [ES6], React Js, React Native,Next Js, Angular,
              CSS-in-JS, GraphQL, Redux,Tailwind,Gatsby,Remix,Typescript.
            </p>
          </div>

          <div className="divider">
            <p>Familiar With</p>
            <span></span>
          </div>

          <div className="skills">
            <p> Node Js, Express, Web Sockets, PWAs, SEO.</p>
          </div>

          <div className="divider">
            <p>On The Job</p>
            <span></span>
          </div>

          <div className="skills">
            <p>Scrum, Testing, CI/CD, Version Control, Best Practices</p>
          </div>

          <div className="divider">
            <p>Experience</p>
            <span></span>
          </div>

          <div className="exp_container">
            {experiences.map((exp, index) => (
              <section className="experience" key={index}>
                <p className="title">
                  {exp.company} - <i>{exp.position}</i>
                  <span>
                    <br /> {exp.started.toUpperCase()} -{" "}
                    {exp.ended === null ? "PRESENT" : exp.ended.toUpperCase()}
                  </span>
                </p>

                <article className="description">
                  <p> {exp.description} </p>
                  {exp.achievements.map((achievement, index) => (
                    <p key={index}>
                      <span>■</span> {achievement}
                    </p>
                  ))}
                </article>
              </section>
            ))}
          </div>

          <div className="divider">
            <p>Education</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <p className="title">
                Federal University Of Technology Minna,Niger State — B.Eng,
                Computer Engineering
                <span>
                  <br /> 2014-2019 <br /> Second Class Upper
                </span>
              </p>
            </section>
          </div>

          <div className="divider">
            <p>Projects</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <article className="description">
                <p>
                  Links to my works can be found on <span> </span>{" "}
                  <Link to="/work"> {`${window.location.hostname}/work`} </Link>{" "}
                </p>
              </article>
            </section>
          </div>
        </div>

        <div className="go_button_container">
          <Link to="/contact">
            <button>
              <span className="material-icons">arrow_left</span> Contact
            </button>
          </Link>
          <Link to="/">
            <button>
              Home <span className="material-icons">arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Resume;
