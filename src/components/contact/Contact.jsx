import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../utils/form/Form";
import "./Contact.css";

const Contact = ({ activeMenu }) => {
  useEffect(() => {
    activeMenu(2);
  }, []);

  return (
    <div className='contact'>
      <Form />
      <div className='go_button_container'>
        <Link to='/work'>
          <button>
            <span className='material-icons'>arrow_left</span> Work
          </button>
        </Link>
        <Link to='/resume'>
          <button>
            Resume <span className='material-icons'>arrow_right</span>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
