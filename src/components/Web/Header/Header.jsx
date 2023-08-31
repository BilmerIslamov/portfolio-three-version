import React from "react";
// import {useState} from "react";
import { Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import logos from "../../Svg/Group 1 1.png";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <div>
      <header className="header">
        <Container>
          <div className="header_top">
            <img className="header_logo" src={logos} alt="" />
            <div className="header_group">
              <ul className="header_list">
                <li className="header_item">
                  <a href="#about_id" className="header_link">
                    About
                  </a>
                </li>
                <li className="header_item">
                  <a href="#education" className="header_link">
                    Education
                  </a>
                </li>
                <li className="header_item">
                  <a href="#portfolio" className="header_link">
                    Portfolio
                  </a>
                </li>
                <li className="header_item">
                  <a href="#questions" className="header_link">
                    Questions
                  </a>
                </li>
                <li className="header_item">
                  <a href="#thoughts" className="header_link">
                    Thoughts
                  </a>
                </li>
                <li className="header_item">
                  <a href="#contact" className="header_link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
