import React from "react";
import { Container } from "react-bootstrap";
import Logo_1 from "../../Svg/Ellipse 28.png";
import Logo_2 from "../../Svg/Ellipse 29.png";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCode } from "@fortawesome/free-solid-svg-icons";





const Footer = () => {
    return (
        <>
            <footer className="footer">
                <img src={Logo_2} className="footer_logo_1" alt="" />
                <Container>
                    <div className="footer_top">
                        <h4 className="footer_top-title">Bilmer</h4>
                        <ul className="footer_list">
                            <li className="footer_item">
                                <a href="#!" className="footer_link">
                                    <BsInstagram />
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#!" className="footer_link">
                                    <FaTelegramPlane />
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#!" className="footer_link">
                                    <FaFacebookSquare />
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#!" className="footer_link">
                                    <FaGithub/>
                                </a>
                            </li>
                            <li className="footer_item">
                                <a href="#!" className="footer_link">
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
                <img src={Logo_1} className="footer_logo_2" alt="" />
            </footer>
        </>
    );
    
};


export default Footer;
