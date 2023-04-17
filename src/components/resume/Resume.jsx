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
          'Working on a new product for a large restaurant delivery service. The product is a web application that enable users to order different menu on various restaurant chain. I am working on the frontend of the application using React and Remix.',
        achievements: [
          'Refactor and convert codebase to typescript and fix ESLint warnings to create efficiency and reduce efforts spent by making codes easier to read and understand',
          "Improve the platform's reliability by quickly fixing bugs and writing tests allowing for minimal impact on user experience",
          'Revamp the user interface to match Figma design by effectively translating client requests into application designs and systems requirements.',
          'Created accessible, responsive, and functional user interfaces to allow users on any device to have the same experienc',
        ],
      },
      {
        company: 'Formplus',
        position: 'Frontend Developer',
        started: 'July 2021',
        ended: 'March 2022',
        description:
          'I worked as a frontend developer at Formplus. I worked on the frontend of the company’s products and also worked on the company’s website.',
        achievements: [
          'Improved the performance of our static website pages',
          'mproved the authentication experience and ensured better reach on search engines through the blog and resources pages',
          'Created user interface wireframes, a makeshift design system, and user flows to improve the look and feel across web pages, ensuring design consistency.',
          'Started the migration of our legacy codebase in Angular JS to new architecture in React JS and a complete redesign',
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
          'Worked with React and SASS to build components from scratch',
          'Handled complex state management using react hooks',
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
          'Transformed figma prototypes to functional UIs using react js, react context and sass',
          'Made use of tools like Notion & UsePastel for task management and feedback',
          'Interacted with GraphQL apis from the client side using Apollo GraphQL',
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
                href='https://drive.google.com/file/d/189aARPcXFnu4Z4j-WOPH8-t36ErlgC2t'
                target='_blank'
                rel='noopener noreferrer'>
                <small>
                  <i className='fab fa-linkedin'></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href='https://drive.google.com/file/d/140AxWgmYAN_aiJIBHWKifrBC_WlYf4S4/view?usp=sharing'
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
              CSS-in-JS, GraphQL, Redux.
            </p>
          </div>

          <div className='divider'>
            <p>Familiar With</p>
            <span></span>
          </div>

          <div className='skills'>
            <p>Typescript, Flux, Node Js, Express, Web Sockets, PWAs, SEO.</p>
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
