import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@/pages/Work.css';
import Project from '@/components/molecules/Project';
import uuid from 'react-uuid';

const Work = ({ activeMenu }) => {
  const [projects] = useState([
    {
      id: uuid(),
      title: 'DAAL Bil',
      description:
        'Developed and maintained DAAL Bil website, a leading online marketplace for used cars in Sweden.Utilized Nextjs and Storyblok CMS for development.',
      live: 'https://daalbil.se',
      stack: 'Nextjs + StoryBlok CMS + Typescript + linara',
      isPrivate: false,
    },

    {
      id: uuid(),
      title: 'Mileprix',
      description:
        'Successfully developed and launched a feature-rich website within an ambitious 3-week time-frame.',
      live: ' https://mileprix.com',
      stack: 'React + Nextjs13  + Tailwind+ NodeJS ',
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
  ]);

  useEffect(() => {
    activeMenu(0);
  }, []);

  return (
    <div className='work'>
      <div className='portfolio_showcase'>
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>

      <div className='go_button_container'>
        <Link to='/'>
          <button>
            <span className='material-icons'>arrow_left</span> Home
          </button>
        </Link>
        <Link to='/contact'>
          <button>
            Contact <span className='material-icons'>arrow_right</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Work;
