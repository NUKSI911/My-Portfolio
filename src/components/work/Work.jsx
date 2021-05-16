import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Project from "../utils/project/Project";
import uuid from "react-uuid";

export class Work extends Component {
  state = {
    projects: [

      {
        id: uuid(),
        title: "SUG AWARD",
        description: "Sug Award Nomination App. ",
        github: "https://github.com/NUKSI911/SUG-POLL-WEBSITE",
        stack: "Django + Vanilla JavaScript",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Expense Tracker",
        description: "A platform with  Real time Data Visualization of expenses",
        github: "https://github.com/NUKSI911/Expense-Tracker",
        stack: "React + Material UI + Victory + Express +NodeJS ",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "EndSars",
        description: "Web app to support the #EndSARS campaign",
        github: "https://github.com/NUKSI911/endsars",
        live: "https://endsars.vercel.app/",
        stack: "React",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Abuja Car Shop",
        description: "Ecommerce  App",
        github: "https://github.com/NUKSI911/SUG-POLL-WEBSITE",
        stack: " Django + React + SASS",
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
