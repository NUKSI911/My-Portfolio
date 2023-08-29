import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {
    const experience = [
      {
        company: 'Lunchbox (Contract)',
        position: 'Frontend Developer',
        started: 'Nov 2021',
        ended: 'Present',
        description:
          'Developed a web application for a prominent restaurant delivery service, facilitating users to order from various restaurant chains',
        achievements: [
          'Restructured codebase into TypeScript, enhancing readability and maintainability.',
          'Enhanced platform reliability through bug fixes and comprehensive testing, ensuring minimal impact on user experience.',
          'Translated client requirements into effective UI designs, aligning the application with Figma specifications.',
          'Designed responsive, accessible UIs to provide consistent user experiences across devices.',
        ],
      },
      {
        company: 'Formplus',
        position: 'Frontend Developer',
        started: 'July 2021',
        ended: 'March 2022',
        description:
          'Contributed as a frontend developer at Formplus, working on both product and website frontend.',
        achievements: [
          'Improved website performance by introducing browser caching and server-side caching reducing page load time by 65%',
          'Enhanced authentication experience and search engines visibility through implementing user-friendly and streamlined authentication processes and search engine optimization techniques such as optimized sitemaps and backlinks',
          'Co-led the initiative to migrate the frontend from AngularJS to React, resulting in faster page speed, cleaner code  architecture, and better developer experience.',
        ],
      },
      {
        company: 'Hardcore Biometric',
        position: 'Frontend Developer',
        started: 'January 2021',
        ended: 'July 2021',
        description:
          'Worked with the hardcore biometric team where I  had the opportunity of building enterprise standard web applications for various client .',
        achievements: [
          'Led the design and development of multiple enterprise-level microservice applications for all clients reducing development time across company team and product scalability.',
          'Responsible for negotiating liability both in writing and on the phone with clients, claimants and their representatives.',
          'Responsible for screening potential frontend hires, alongside conducting multiple interviews with emphasis on frontend roles.',
          'Boosted code coverage to more than 90% by writing units and integrated test using jest, react testing library and cypress.',
        ],
      },

      {
        company: 'The OutSource Company',
        position: 'Frontend Developer [Contract]',
        started: 'February 2020',
        ended: 'February 2021',
        description:
          'I worked with the outsource IT team on a contract basis to build a their web application and also help manage their IT infrastructure',
        achievements: [
          "Using React as the frontend framework in developing the frontend of various top-notch projects for both local and international clients for the company rising the company's revenue by 5%.",
          'Made use of tools like Notion & UsePastel for task management and feedback',
          'Adopted code-splitting for enhanced web performance such as; Lazy coding, Error boundaries, Memoization (Memo, useMemo ,useCallback), hooks etc. ',
          'Participated in code reviews on standards, best practices and following architectural patterns of the FE codebases.',
          'Maintained organization infrastructure and solved IT-related issue.',
        ],
      },

      {
        company: 'The Outsource Company',
        position: 'Frontend Developer [Intern]',
        started: 'May 2018',
        ended: 'November 2018',
        description:
          'I contributed in developing user interfaces for quite a number of products within three months while learning new skills and also provided IT support for staffs in the office',
        achievements: [
          'Worked with node.js developers to build a certificate generator',
          'Headed the frontend department of my team to deliver responsive web templates to be sold on envato market',
          'Built an open source micro API project alongside python (Django) Developers using Jinja template engine on the frontend',
        ],
      },
    ];

    return (
      <div className='resume'>
        <div className='resume_container'>
          <div className='top_row'>
            <h2>Nurudeen Yekeen</h2>
            <div className='buttons'>
              <a
                href='https://www.linkedin.com/in/nurudeen-yekeen-2a9a88154/'
                target='_blank'
                rel='noopener noreferrer'>
                <small>
                  <i className='fab fa-linkedin'></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href='https://drive.google.com/u/0/uc?id=1JYWozhHN4NdtHIZkRDvrzy4d8XjeKMFs&export=download'
                target='_blank'
                rel='noopener noreferrer'>
                <small>
                  <i className='fas fa-download'></i> <span>Download </span>
                </small>
              </a>
            </div>
          </div>

          <p className='subheading'>Frontend Developer</p>

          <div className='summary'>
            <p>
              I’m a Frontend software developer, passionate about transforming
              ideas from pixels to scalable products. I create functional
              applications with user experience as top priority.
            </p>
          </div>

          <div className='divider'>
            <p>Core Technologies</p>
            <span></span>
          </div>

          <div className='skills'>
            <p>
              HTML/CSS, SASS, Javascript [ES6], React Js, React Native,Next Js,
              CSS-in-JS, GraphQL, Redux,Tailwind,Gatsby,Remix,Typescript.
            </p>
          </div>

          <div className='divider'>
            <p>Familiar With</p>
            <span></span>
          </div>

          <div className='skills'>
            <p> Node Js, Express, Web Sockets, PWAs, SEO.</p>
          </div>

          <div className='divider'>
            <p>On The Job</p>
            <span></span>
          </div>

          <div className='skills'>
            <p>Scrum, CI/CD, Version Control, Best Practices</p>
          </div>

          <div className='divider'>
            <p>Experience</p>
            <span></span>
          </div>

          <div className='exp_container'>
            {experience.map((exp, index) => (
              <section className='experience' key={index}>
                <p className='title'>
                  {exp.company} - <i>{exp.position}</i>
                  <span>
                    <br /> {exp.started.toUpperCase()} -{' '}
                    {exp.ended === null ? 'PRESENT' : exp.ended.toUpperCase()}
                  </span>
                </p>

                <article className='description'>
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

          <div className='divider'>
            <p>Education</p>
            <span></span>
          </div>

          <div className='exp_container'>
            <section className='experience'>
              <p className='title'>
                Federal University Of Technology Minna,Niger State — B.Eng,
                Computer Engineering
                <span>
                  <br /> 2014-2019 <br /> Second Class Upper
                </span>
              </p>
            </section>
          </div>

          <div className='divider'>
            <p>Projects</p>
            <span></span>
          </div>

          <div className='exp_container'>
            <section className='experience'>
              <article className='description'>
                <p>
                  Links to my works can be found on <span> </span>{' '}
                  <Link to='/work'> {`${window.location.hostname}/work`} </Link>{' '}
                </p>
              </article>
            </section>
          </div>
        </div>

        <div className='go_button_container'>
          <Link to='/contact'>
            <button>
              <span class='material-icons'>arrow_left</span> Contact
            </button>
          </Link>
          <Link to='/'>
            <button>
              Home <span class='material-icons'>arrow_right</span>{' '}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
