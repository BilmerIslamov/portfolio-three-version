import { Container } from "react-bootstrap";
// import { Button } from "@mui/material";
// import { FaSquare } from 'react-icons/fa'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { CgCoffee } from 'react-icons/cg'
import { SiStartrek } from 'react-icons/si';

import { useContext } from 'react';
import Context from '../../Layout/context/Context.jsx';

const Education = () => {
    const {
        ResumeScroll
    } = useContext(Context);
    return (
        <>
            <section id="education" className="education">
                <nav className="about_navbar">
                    <Container>
                        <h2 className={`about_nav_title ${ResumeScroll ? "active" : ""}`}>My Resume</h2>
                    </Container>
                </nav>
                <Container>
                    <div className="block-one">
                        <div className="block-one_title-group">
                            <BsFillInfoCircleFill className="block-one-icon" />
                            <h4 className="block-one_title">Education</h4>
                        </div>
                        <div className="block-one_text-group">
                            <p className="block-one_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla itaque dolorum rerum nihil incidunt facilis veniam necessitatibus, aliquam, recusandae quam accusantium impedit tenetur cupiditate. Possimus tenetur neque animi cumque commodi autem non voluptatum laboriosam harum unde, dolorum fugit fugiat quos, qui voluptates ipsum dicta ratione? Recusandae eveniet tempore iure hic at voluptatibus velit quisquam aliquid aspernatur cupiditate, distinctio autem asperiores animi facilis quibusdam id neque optio itaque cumque placeat officia. Assumenda eos quibusdam dignissimos quasi et? Non quis repudiandae praesentium molestias aut consequatur. Quod quidem numquam quia? Quo nulla quaerat repudiandae rerum, dicta nisi. Labore commodi tempore at maiores ea.
                            </p>
                        </div>
                    </div>
                    <div className="block-two">
                        <div className="block-one_title-group">
                            <CgCoffee className="block-one-icon" />
                            <h4 className="block-one_title">Skills <span>Frond-end</span></h4>
                        </div>
                        <ul className="block-two_list">
                            <li className="block-two_item">
                                <p className="block-two_title">Markup Styling Language</p>
                                <span className="block-two_span">htnl/pug</span>
                            </li>

                            <li className="block-two_item">
                                <p className="block-two_title">Css Frameeorks</p>
                                <span className="block-two_span">bootstrp/react-bootstrap/reactstrap</span>
                            </li>

                            <li className="block-two_item">
                                <p className="block-two_title">Css Preprocessor</p>
                                <span className="block-two_span">css/scss</span>
                            </li>

                            <li className="block-two_item">
                                <p className="block-two_title">Pragramming Language</p>
                                <span className="block-two_span">javaScript</span>
                            </li>

                            <li className="block-two_item">
                                <p className="block-two_title">JavaScript Frameeorks</p>
                                <span className="block-two_span">react.js</span>
                            </li>

                            <li className="block-two_item">
                                <p className="block-two_title">Package Managers</p>
                                <span className="block-two_span">npm/yarn</span>
                            </li>

                            <li className="block-two_item">
                                <p className="block-two_title">Tols</p>
                                <span className="block-two_span">github/netlife</span>
                            </li>
                        </ul>
                    </div>
                    <div className="block-three">
                        <div className="block-one_title-group">
                            <SiStartrek className="block-one-icon" />
                            <h4 className="block-one_title">Certificate</h4>
                        </div>
                        <div className="block-three_certificate">
                            <div className="block-three_images"></div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Education;
