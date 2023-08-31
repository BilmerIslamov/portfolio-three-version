import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import React from "react";
import { useContext } from 'react';
import Context from '../../Layout/context/Context.jsx';
// import image from "../../Svg/Group 1 1.png";
export default function About() {
  const {AboutScroll} = useContext(Context);
  return (
    <React.Fragment>
      <section id="about_id" className="about">
        <nav className="about_navbar">
          <Container>
            <h2 className={`about_nav_title ${AboutScroll ? "active" : ""}`}>About me</h2>
          </Container>
        </nav>
        <Container>
          <div className="about_top">
            <div className="about_bio">
              <div className="about_image">
                {/* <img src={image} alt="image" className="about_logo" /> */}
              </div>
              <div className="about_biography">
                <div className="about_title_bio">
                  <span className="about_bio_span" />
                  <h2 className="about_title">BIOGRAPHY</h2>
                  <span className="about_bio_span" />
                </div>
                <ul className="about_list">
                  <li className="about_item">
                    <p className="about_text_1 about_text">Birthday:</p>
                    <p className="about_text_2 about_text">17,March 2004</p>
                  </li>
                  <li className="about_item">
                    <p className="about_text_1 about_text">City:</p>
                    <p className="about_text_2 about_text">Tashkent</p>
                  </li>
                  <li className="about_item">
                    <p className="about_text_1 about_text">Country:</p>
                    <p className="about_text_2 about_text">Uzbekistan</p>
                  </li>
                  <li className="about_item">
                    <p className="about_text_1 about_text">Phone:</p>
                    <p className="about_text_2 about_text">
                      +998 (95) 019 28 24
                    </p>
                  </li>
                  <li className="about_item">
                    <p className="about_text_1 about_text">Age:</p>
                    <p className="about_text_2 about_text">18 Years</p>
                  </li>
                  <li className="about_item">
                    <p className="about_text_1 about_text">Degree:</p>
                    <p className="about_text_2 about_text">Training Center</p>
                  </li>
                  <li className="about_item">
                    <p className="about_text_1 about_text">Email:</p>
                    <p className="about_text_2 about_text">
                      sabitislamov2004@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about_bottom">
              <h2 className="about_bottom_title">For More Information</h2>
              <p className="about_bottom_text">
                &nbsp;&nbsp;&nbsp;&nbsp;"Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum."
              </p>
            </div>
            <Button className="about_cv_btn" variant="contained">
              Cv download
            </Button>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}
