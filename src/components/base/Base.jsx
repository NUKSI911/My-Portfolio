import React from "react";
import { Link } from "react-router-dom";
import "./Base.css";
import avi from "../../assets/img/deen_big.png";
import navLine from "../../assets/svgs/menu-line.svg";
import logo from "../../assets/img/smallavi.png";
import arrow from "../../assets/svgs/arrow.svg";

const Base = ({ menu }) => {
  return (
    <div className='base_container'>
      <div className='hero'>
        <div className='intro_box'>
          <h1>
            Hello, I'm <br /> Nurudeen Yekeen.
          </h1>
          <div className='avi'>
            <img src={avi} alt='avatar' />
          </div>
        </div>

        <div className='description'>
          <p>
            <span>
              <span className='highlight'>Senior Frontend Engineer</span> focused on transforming business visions into <span className="highlight two">elegant, high-performance web applications.</span><span className="highlight"> I build interactive and accessible digital experiences </span> that are both <span className="highlight two"> user-centric and aesthetically precise.</span>
            </span>
          </p>
        </div>

        <div className='go_button_container'>
          <Link to='/work' className='explore'>
            <button className='explore'>
              Explore <span className='material-icons'>arrow_right</span>
            </button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              00
              <Link to='/'>
                <img src={navLine} alt='menu bullet' /> PROJECTS
              </Link>
            </small>
          </li>

          <li className={menu[1]}>
            <small>
              01
              <Link to='/resume'>
                <img src={navLine} alt='menu bullet' /> RESUME
              </Link>
            </small>
          </li>

          <li className={menu[2]}>
            <small>
              02{" "}
              <Link to='/articles'>
                <img src={navLine} alt='menu bullet' /> ARTICLES
              </Link>
            </small>
          </li>

          <li className={menu[3]}>
            <small>
              03{" "}
              <Link to='/contact'>
                <img src={navLine} alt='menu bullet' /> CONTACT
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className='footer'>
        <img src={logo} alt='' />
        <div className='social'>
          <a
            href='https://github.com/nurudeen38'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i> Github
            <img src={arrow} alt='pointer' />
          </a>

          <a
            href='https://twitter.com/nurudeenyekeen1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter'></i> Twitter{" "}
            <img src={arrow} alt='pointer' />
          </a>
        </div>


      </div>
    </div>
  );
};

export default Base;
