// import React from 'react'
import React, { Component } from "react";
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
import { Helmet } from "react-helmet";

export class App extends Component {
  state = {
    menu: ["active_menu", "", ""],
  };

  activeMenu(id) {
    switch (id) {
      case 0:
        this.setState({ menu: ["active_menu", "", ""] });
        break;

      case 1:
        this.setState({ menu: ["", "active_menu", ""] });
        break;

      case 2:
        this.setState({ menu: ["", "", "active_menu"] });
        break;

      default:
        break;
    }
  }

  setFullscreen(value) {
    this.setState({ ...this.state, fullScreen: value });
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta property="og:site_name" content="Nurudeen Yekeen" />
          <meta
            property="og:title"
            content="Nurudeen Yekeen Portfolio"
          />
          <meta
            property="og:description"
            content="Frontend Developer"
          />
          <meta
            property="og:url"
            content="https://nurudeen.tech"
          />
          <meta property="og:type" content="article" />
          <meta
            property="article:publisher"
            content="https://nurudeen.tech"
          />
          <meta property="article:section" content="Coding,JavaScript" />
          <meta property="article:tag" content="Coding" />
          {/* <meta
            property="og:image"
            content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1"
          />
          <meta
            property="og:image:secure_url"
            content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1"
          /> */}
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
          <meta property="twitter:card" content="summary_large_image" />
          {/* <meta
            property="twitter:image"
            content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1"
          /> */}
          <meta property="twitter:site" content="@nurudeenyekeen1" />
        </Helmet>
        <Router>
          <div
            className="mobile_container"
            id={this.state.fullScreen ? "fullscreen" : ""}
          >
            <Header />
            <div>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Mobile
                      menu={this.state.menu}
                      fullScreen={this.setFullscreen.bind(this)}
                    />
                  )}
                />

                <Route
                  exact
                  path="/work"
                  render={(props) => (
                    <Work
                      menu={this.state.menu}
                      activeMenu={this.activeMenu.bind(this)}
                    />
                  )}
                />

                <Route
                  exact
                  path="/resume"
                  render={(props) => (
                    <Resume
                      menu={this.state.menu}
                      activeMenu={this.activeMenu.bind(this)}
                    />
                  )}
                />

                <Route
                  exact
                  path="/contact"
                  render={(props) => (
                    <Contact
                      menu={this.state.menu}
                      activeMenu={this.activeMenu.bind(this)}
                    />
                  )}
                />

                {/* <Route
                  exact
                  path='/blog'
                  render={(props) => (
                    <Blog
                      menu={this.state.menu}
                      activeMenu={this.activeMenu.bind(this)}
                    />
                  )}
                /> */}

                <Route component={Error} />
              </Switch>
            </div>

            <div className="social_buttons">
              <a
                href="https://github.com/nuksi911"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com/nurudeenyekeen1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nurudeen-yekeen-2a9a88154/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <div className="credits">
                <p>
                  Inspired by
                  <a
                    href="https://sarahdayan.dev/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Sarah Dayan
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="fixed">
              <Base menu={this.state.menu} />
            </div>

            <div className="main">
              <div className="pages_container">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <Work
                        menu={this.state.menu}
                        activeMenu={this.activeMenu.bind(this)}
                      />
                    )}
                  />

                  <Route
                    exact
                    path="/work"
                    render={(props) => (
                      <Work
                        menu={this.state.menu}
                        activeMenu={this.activeMenu.bind(this)}
                      />
                    )}
                  />

                  <Route
                    exact
                    path="/resume"
                    render={(props) => (
                      <Resume
                        menu={this.state.menu}
                        activeMenu={this.activeMenu.bind(this)}
                      />
                    )}
                  />

                  <Route
                    exact
                    path="/contact"
                    render={(props) => (
                      <Contact
                        menu={this.state.menu}
                        activeMenu={this.activeMenu.bind(this)}
                      />
                    )}
                  />

                  <Route component={Error} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
