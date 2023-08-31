import React from "react";
import { Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import Logo from "../../Svg/Group 62.png";
import Button from "@mui/material/Button";
import { useContext } from "react";
import Context from "../../Layout/context/Context";


const Home = () => {
  const { OnActiveInfo } = useContext(Context);
  return (
    <div>
      <section className="home">
        <img className="home_logo" alt="logo" src={Logo}></img>
        <Container>
          <div className="home_center">
            <p className="home_text">/ welcome \</p>
            <h2 className="home_title">Islomov Sobit</h2>
            <div className="home_text_group">
              <p className="home_info">Frontend</p>
              <p className="home_info">Backend</p>
              <p className="home_info">Design</p>
            </div>
            <div className="home_btn-group">
              <a href="#!">
                <Button className="home_btn home_btn-white" variant="contained">
                  Cv download
                </Button>
              </a>
              <a href="#contact" onClick={OnActiveInfo}>
                <Button className="home_btn home_btn-black" variant="contained">
                  Contact
                </Button>
              </a>
            </div>
          </div>
          <div className="home_icon_group">
            <ul className="home_list">
              <li className="home_item"></li>
              <li className="home_item"></li>
              <li className="home_item"></li>
              <li className="home_item"></li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
