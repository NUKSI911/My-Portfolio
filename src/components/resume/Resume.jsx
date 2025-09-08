import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {
    const experience = [
      {
        company: "Banque Misr (Contract)",
        position: "Senior Frontend Engineer",
        started: "Apr 2024",
        ended: "Jul 2025",
        description:
          "served as a Senior Frontend Engineer, leading the development and optimization of high-impact digital banking platforms.",
        achievements: [
          "Led the development and enhancement of critical user journeys across multiple digital banking platforms, delivering seamless and secure experiences that supported high user retention and operational efficiency.",
          "Architected and implemented scalable, reusable, and maintainable UI components using Angular (v2+), resulting in reduced development time across multiple projects.",
          "Designed and developed responsive, mobile-first interfaces for key banking applications, directly contributing to a 25% increase in customer satisfaction (based on post-release UX metrics).",
          "Collaborated cross-functionally with product managers, UX/UI designers, and backend engineers to translate business requirements into intuitive digital solutions, ensuring high usability and stakeholder alignment.",
          "Enforced WCAG and ARIA accessibility standards, enabling inclusive digital access for users with disabilities and aligning platforms with international compliance requirements.",
          "Optimized frontend performance through lazy loading, bundle minimization, and DOM virtualization, leading to 40% faster page load times and enhanced Core Web Vitals.",
          "Gained in-depth experience in multilingual application development, ensuring localization and RTL (right-toleft) compatibility across Arabic and English interfaces.",
          "Actively participated in code reviews, sprint planning, and agile ceremonies, contributing to a culture of continuous improvement and high code quality",
        ],
      },
      {
        company: "Daabil (Contract)",
        position: "Fullstack Engineer",
        started: "Nov 2021",
        ended: "Present",
        description:
          "Developed a web application for a prominent restaurant delivery service, facilitating users to order from various restaurant chains",
        achievements: [
          "Engineered a highly responsive, intuitive, and accessible user interface across web and mobile platforms, contributing to a 20% increase in user engagement and improved customer satisfaction.",
          "Designed and implemented core features enabling users to buy, sell, and exchange vehicles seamlessly.",
          "Built a dynamic car exchange platform, reducing friction in the trade-in process and boosting user conversion rates.",
          "Developed comprehensive Help & Advice sections using structured content components to enhance UX and support customer education.",
          "Championed cross-device compatibility and WCAGcompliant accessibility, ensuring inclusivity and broad reach.",
          "Collaborated closely with designers, and product managers in Agile sprints to continuously improve the platform and roll out new features.",
          "Leveraged performance monitoring and analytics tools to identify bottlenecks and iteratively improve load times and interactivity scores.",
        ],
      },
      {
        company: "Lunchbox (Contract)",
        position: "Frontend Developer",
        started: "Nov 2021",
        ended: "Present",
        description:
          "Developed  web applications for prominent restaurant delivery services, facilitating users to order from various restaurant chains",
        achievements: [
          "Co-architected and implemented a Backend For Frontend (BFF) architecture tailored for the web platform, significantly enhancing API efficiency and improving developer experience, leading to faster onboarding and reduced development time for new features.",
          "Led end-to-end development and served as the primary contributor and maintainer of scalable web solutions for a unified restaurant platform, streamlining B2B catering, multi-channel ordering, and guest engagement for high-volume enterprise clients.",
          "Integrated advanced observability tools including Telemetry and Datadog, improving system health monitoring and debugging, and enabling proactive issue resolution through enhanced logging and metrics dashboards.",
          "Delivered ordering and catering systems used by major restaurant chains such as The Salty Donut, LimeFresh, and Bareburger, enabling frictionless digital experiences across multiple locations, resulting in increased customer retention and order volume.",
        ],
      },
      {
        company: "Formplus",
        position: "Frontend Developer",
        started: "July 2021",
        ended: "March 2022",
        description:
          "Contributed as a frontend developer at Formplus, working on both product and website frontend.",
        achievements: [
          "Orchestrated the end-to-end migration from a legacy AngularJS framework to a modern React.js architecture, enhancing page speed by over 50% and establishing a scalable, component-based structure that streamlined developer collaboration and reduced onboarding time.",
          "Redesigned authentication flows and integrated SEO-optimized frontend strategies, accelerating user sign-in processes and improving both customer retention and mobile search visibility.",
          "Pioneered performance optimization efforts that reduced page load time by 65% through strategic implementation of browser caching, server-side caching, and code-splitting techniques.",
          "Designed and built a scalable design system from the ground up, standardizing UI components and increasing developer productivity while ensuring a cohesive and modern user experience across the entire application.",
        ],
      },
      {
        company: "Hardcore Biometric",
        position: "Frontend Developer",
        started: "January 2021",
        ended: "July 2021",
        description:
          "Worked with the hardcore biometric team where I  had the opportunity of building enterprise standard web applications for various client .",
        achievements: [
          "Orchestrated the development of scalable, enterprise-level microservice frontend applications for high-profile clients, including the Nigeria Police Force Criminal and Incident Department, reducing development time by 40% across teams and enhancing both deployment speed and long-term maintainability.",
          "Architected and advocated for scalable frontend solutions using React, TypeScript, and Redux, enabling smooth system integrations and elevating cross-platform performance for business-critical applications.",
          "Took full ownership of the QA pipeline, elevating test coverage to over 90% through comprehensive unit, integration, and end-to-end testing with Jest, React Testing Library, and Cypress, drastically reducing production regressions.",
          "Led frontend recruitment efforts by screening applicants, conducting technical interviews, and refining the hiring framework to secure top talent aligned with team objectives and technical excellence.",
          "Bridged technical and business stakeholders by negotiating feature trade-offs and mitigating risks, ensuring on-time delivery of high-quality solutions that balanced scope with strategic priorities.",
        ],
      },

      {
        company: "The OutSource Company",
        position: "Frontend Developer [Contract]",
        started: "February 2020",
        ended: "February 2021",
        description:
          "I worked with the outsource IT team on a contract basis to build a their web application and also help manage their IT infrastructure",
        achievements: [
          "Using React as the frontend framework in developing the frontend of various top-notch projects for both local and international clients for the company rising the company's revenue by 5%.",
          "Made use of tools like Notion & UsePastel for task management and feedback",
          "Adopted code-splitting for enhanced web performance such as; Lazy coding, Error boundaries, Memoization (Memo, useMemo ,useCallback), hooks etc. ",
          "Participated in code reviews on standards, best practices and following architectural patterns of the FE codebases.",
          "Maintained organization infrastructure and solved IT-related issue.",
        ],
      },

      {
        company: "The Outsource Company",
        position: "Frontend Developer [Intern]",
        started: "May 2018",
        ended: "November 2018",
        description:
          "I contributed in developing user interfaces for quite a number of products within three months while learning new skills and also provided IT support for staffs in the office",
        achievements: [
          "Worked with node.js developers to build a certificate generator",
          "Headed the frontend department of my team to deliver responsive web templates to be sold on envato market",
          "Built an open source micro API project alongside python (Django) Developers using Jinja template engine on the frontend",
        ],
      },
    ];

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
                https:href="https://drive.google.com/u/0/uc?id=15QXB1ASqBgQnzlQd4t4477XJ4zMMLw87&export=download"
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
              I’m a Frontend software developer, passionate about transforming
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
              HTML/CSS, SASS, Javascript [ES6], React Js, React Native,Next Js,
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
            <p>Scrum, CI/CD, Version Control, Best Practices</p>
          </div>

          <div className="divider">
            <p>Experience</p>
            <span></span>
          </div>

          <div className="exp_container">
            {experience.map((exp, index) => (
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
              <span class="material-icons">arrow_left</span> Contact
            </button>
          </Link>
          <Link to="/">
            <button>
              Home <span class="material-icons">arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
