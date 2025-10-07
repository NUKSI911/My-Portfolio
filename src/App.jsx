import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";
import Base from "./components/base/Base";
import Work from "./components/work/Work";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Mobile from "./components/base/Mobile";
import Header from "./components/utils/header/Header";
import Error from "./components/error404/Error";
import Articles from "./components/blog/Blog";
import ArticleDetail from "./components/blog/ArticleDetail";
import { Helmet } from "react-helmet";

const App = () => {
  const [menu, setMenu] = useState(["active_menu", "", "", ""]);
  const [fullScreen, setFullScreen] = useState(false);

  const activeMenu = (id) => {
    switch (id) {
      case 0:
        setMenu(["active_menu", "", "", ""]);
        break;

      case 1:
        setMenu(["", "active_menu", "", ""]);
        break;

      case 2:
        setMenu(["", "", "active_menu", ""]);
        break;

      case 3:
        setMenu(["", "", "", "active_menu"]);
        break;

      default:
        break;
    }
  };

  const setFullscreen = (value) => {
    setFullScreen(value);
  };

  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <meta property='og:site_name' content='Nurudeen Yekeen' />
        <meta property='og:title' content='Nurudeen Yekeen Portfolio' />
        <meta property='og:description' content='Frontend Developer' />
        <meta property='og:url' content='https://www.nurudeen.dev' />
        <meta property='og:type' content='website' />

        <meta
          name='keywords'
          content='Coding,JavaScript,React,Frontend,Developer,Web,Development,Nigeria,Remote'
        />
        <meta property='article:tag' content='Coding' />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='640' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content='@nurudeenyekeen1' />
        <meta property='twitter:title' content='Nurudeen Yekeen Portfolio' />
        <meta property='twitter:description' content='Frontend Developer' />
        </Helmet>
      <Router>
        <Switch>
          {/* Article Detail Route - Without Header */}
          <Route
            exact
            path='/articles/:id'
            component={ArticleDetail}
          />
          
          {/* All other routes with header */}
          <Route path="/">
            <div
              className='mobile_container'
              id={fullScreen ? 'fullscreen' : ''}>
              <Header />
              <div>
                <Switch>
                  <Route
                    exact
                    path='/'
                    render={(props) => (
                      <Mobile
                        menu={menu}
                        fullScreen={setFullscreen}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/work'
                    render={(props) => (
                      <Work
                        menu={menu}
                        activeMenu={activeMenu}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/resume'
                    render={(props) => (
                      <Resume
                        menu={menu}
                        activeMenu={activeMenu}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/contact'
                    render={(props) => (
                      <Contact
                        menu={menu}
                        activeMenu={activeMenu}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/articles'
                    render={(props) => (
                      <Articles
                        menu={menu}
                        activeMenu={activeMenu}
                      />
                    )}
                  />

                  <Route component={Error} />
                </Switch>
              </div>

              <div className='social_buttons'>
                <a
                  href='https://github.com/nurudeen38'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fab fa-github'></i>
                </a>
                <a
                  href='https://x.com/shadeof_deen'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/nurudeen-yekeen-2a9a88154/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fab fa-linkedin'></i>
                </a>

                <div className='credits'>
                  <p>
                    Inspired by
                    <a
                      href='https://sarahdayan.dev/'
                      target='_blank'
                      rel='noreferrer noopener'>
                      Sarah Dayan
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='fixed'>
                <Base menu={menu} />
              </div>

              <div className='main'>
                <div className='pages_container'>
                  <Switch>
                    <Route
                      exact
                      path='/'
                      render={(props) => (
                        <Work
                          menu={menu}
                          activeMenu={activeMenu}
                        />
                      )}
                    />

                    <Route
                      exact
                      path='/work'
                      render={(props) => (
                        <Work
                          menu={menu}
                          activeMenu={activeMenu}
                        />
                      )}
                    />

                    <Route
                      exact
                      path='/resume'
                      render={(props) => (
                        <Resume
                          menu={menu}
                          activeMenu={activeMenu}
                        />
                      )}
                    />

                    <Route
                      exact
                      path='/contact'
                      render={(props) => (
                        <Contact
                          menu={menu}
                          activeMenu={activeMenu}
                        />
                      )}
                    />

                    <Route
                      exact
                      path='/articles'
                      render={(props) => (
                        <Articles
                          menu={menu}
                          activeMenu={activeMenu}
                        />
                      )}
                    />

                    <Route component={Error} />
                  </Switch>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;