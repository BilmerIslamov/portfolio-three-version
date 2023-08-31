import React, { useContext } from "react";

import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { FaAngleLeft } from "react-icons/fa";

import CountUp from 'react-countup';

import Context from "../../Layout/context/Context.jsx"

const Question = () => {
    const {
        open_1,
        open_2,
        open_3,
        open_4,
        Tabs_1,
        Tabs_2,
        Tabs_3,
        Tabs_4,
        Scrolls_1,
        Scrolls_2,
        Scrolls_3,
        QuestionsScroll
    } = useContext(Context);
    return (
        <>
            <section id="questions" className="quictic">
                <nav className="about_navbar">
                    <Container>
                        <h2 className={`about_nav_title ${QuestionsScroll ? "active" : ""}`}>Frequently Asked Questions </h2>
                    </Container>
                </nav>
                <Container>
                    <div className="quictic_top">
                        <ul className="quictic_problem">
                            <Button
                                variant="contained"
                                onClick={Tabs_1}
                                className={`quictic_item ${open_1 && "active"}`}
                            >
                                <div className="quictic_title_group">
                                    <h4 className="quictic_title">
                                        How is the cost of the created project calculated?
                                    </h4>
                                    <FaAngleLeft className={`quictic_icons ${open_1 && "active"}`} />
                                </div>
                                <p className="quictic_text">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Button>
                            <Button
                                variant="contained"
                                onClick={Tabs_2}
                                className={`quictic_item ${open_2 && "active"}`}
                            >
                                <div className="quictic_title_group">
                                    <h4 className="quictic_title">How to transfer money?</h4>
                                    <FaAngleLeft className={`quictic_icons ${open_2 && "active"}`} />
                                </div>
                                <p className="quictic_text">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Button>
                            <Button
                                variant="contained"
                                onClick={Tabs_3}
                                className={`quictic_item ${open_3 && "active"}`}
                            >
                                <div className="quictic_title_group">
                                    <h4 className="quictic_title">
                                        How does your project stand out from the rest?
                                    </h4>
                                    <FaAngleLeft className={`quictic_icons ${open_3 && "active"}`} />
                                </div>
                                <p className="quictic_text">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Button>
                            <Button
                                variant="contained"
                                onClick={Tabs_4}
                                className={`quictic_item ${open_4 && "active"}`}
                            >
                                <div className="quictic_title_group">
                                    <h4 className="quictic_title">
                                        What is the project lead time?
                                    </h4>
                                    <FaAngleLeft className={`quictic_icons ${open_4 && "active"}`} />
                                </div>
                                <p className="quictic_text">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Button>
                        </ul>
                        <ul className="quictic_list">
                            <li className="quictic_com-item">
                                <div className="quictic_rom">
                                    <p className="quictic_rom-text">
                                        <CountUp start={0} end={Scrolls_1}>
                                            {({ countUpRef, }) => (
                                                <>
                                                    <span ref={countUpRef} />
                                                </>
                                            )}
                                        </CountUp>
                                        +
                                    </p>
                                </div>
                                <h2 className="quictic_rom-title">Years  Experience</h2>
                            </li>

                            <li className="quictic_com-item">
                                <div className="quictic_rom">
                                    <p className="quictic_rom-text">
                                        <CountUp start={0} end={Scrolls_2}>
                                            {({ countUpRef, }) => (
                                                <>
                                                    <span ref={countUpRef} />
                                                </>
                                            )}
                                        </CountUp>
                                        +
                                    </p>
                                </div>
                                <h2 className="quictic_rom-title">Completed  Projects</h2>
                            </li>

                            <li className="quictic_com-item">
                                <div className="quictic_rom">
                                    <p className="quictic_rom-text">
                                        <CountUp start={0} end={Scrolls_3}>
                                            {({ countUpRef, }) => (
                                                <>
                                                    <span ref={countUpRef} />
                                                </>
                                            )}
                                        </CountUp>
                                    </p>
                                </div>
                                <h2 className="quictic_rom-title">Companies  Work</h2>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Question;
