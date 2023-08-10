import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
import Project from '../utils/project/Project';
import uuid from 'react-uuid';

export class Work extends Component {
  state = {
    projects: [
      {
        id: uuid(),
        title: 'DAAL Bil',
        description:
          'Developed and maintained DAAL Bil website, a leading online marketplace for used cars in Sweden.Utilized Nextjs and Storyblok CMX for development.',
        live: 'https://daalbil.se',
        stack: 'Nextjs + StoryBlok CMS + Typescript + linara',
        isPrivate: false,
      },

      {
        id: uuid(),
        title: 'Mileprix',
        description:
          'Successfully developed and launched a comprehensive website independently within a tight deadline of 3 weeks. Leveraged cutting-edge technology by utilizing Next.js13, integrated Open Graph and Twitter Card meta tags for enhanced social media sharing capabilities.',
        live: ' https://mileprix.com',
        stack: 'React + NextJS13  + Tailwind+ NodeJS ',
        isPrivate: false,
      },

      {
        id: uuid(),
        title: 'Utopeon',
        description:
          'A decentralized gaming platform that enables gamers make money online by participating in completions.',
        live: 'https://www.utopeon.com',
        stack: 'React + Typescript + Trpc + Tailwind + Web3',
        isPrivate: false,
      },

      {
        id: uuid(),
        title: 'Saido',
        description:
          'A Yaml based tool for monitoring metrics across multiple host.',
        github: 'https://github.com/bisohns/saido',
        stack: ' Material UI + React + SASS + SocketIO',
        isPrivate: false,
      },
    ],
  };

  componentDidMount() {
    this.props.activeMenu(0);
  }

  render() {
    return (
      <div className='work'>
        <div className='portfolio_showcase'>
          {this.state.projects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>

        <div className='go_button_container'>
          <Link to='/'>
            <button>
              <span class='material-icons'>arrow_left</span> Home
            </button>
          </Link>
          <Link to='/contact'>
            <button>
              Contact <span class='material-icons'>arrow_right</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work;
