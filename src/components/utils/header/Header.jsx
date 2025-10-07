import React, { useState } from 'react'
import logo from '../../../assets/svgs/nurudeen.svg'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [closed, setClosed] = useState(true);

  const toggleMenu = () => {
    setClosed(!closed);
  };

  return (
    <div id='header'>
      <div className="header_wrapper">
        <div className="logo_container">
          <Link to={"/"}><img src={logo} alt="nurudeen logo" height="50"/></Link>
        </div>

        <div className="menu_btn_wrapper">
          <button className={closed? 'menu_btn' : 'menu_btn menu_btn_open'} onClick={toggleMenu}>
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
          </button>
        </div>
      </div>

      { 
        !closed ? (
          <nav>
            <div className="mobile_menu_container">
              <ul>
                <li><Link to='/' onClick={toggleMenu}>Home</Link> </li>
                <li><Link to='/work' onClick={toggleMenu}>Projects</Link> </li>
                <li><Link to='/resume' onClick={toggleMenu}>Work</Link> </li>
                <li><Link to='/articles' onClick={toggleMenu}>Articles</Link> </li>
                <li><Link to='/contact' onClick={toggleMenu}>Contact</Link> </li>
              </ul>

              <div className="social_box">
              <h3>Connect With Me</h3>
                <div className="social_icons">
                  <a href="https://github.com/nurudeen38"><i className='fab fa-github'></i></a> 
                  <a href="https://twitter.com/nurudeenyekeen1"><i className='fab fa-twitter'></i></a>
                  <a href="https://www.linkedin.com/in/nurudeen-yekeen-2a9a88154/"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </nav>
        ) : ''
      }
    </div>
  )
}

export default Header
