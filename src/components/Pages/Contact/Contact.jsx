import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import Iframe from "react-iframe";


import Context from "../../Layout/context/Context";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
    const { form, sendEmail, userName, onChangeName, userPhone, onChangeNumber, userEmail, onChangeEmail, userMessage, onChangeMessage, OnReset, onCopyText, Disable, ContactScroll } = useContext(Context);
    return (
        <React.Fragment>
            <section id="contact" className="contact">
                <nav className="about_navbar">
                    <Container>
                        <h4 className={`about_nav_title ${ContactScroll ? "active" : ""}`}>My Contact</h4>
                    </Container>
                </nav>
                <Container>
                    <div className="contact_top">
                        <div className="contact_info-group">
                            <h5 className="contact_info-title">Info</h5>
                            <p className="contact_info-text">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Possimus id officiis numquam eius
                                blanditiis soluta sunt deleniti iusto dicta rerum libero nihil
                                qui fugit pariatur officia minima molestias, eum ratione
                                consequatur? Tenetur vitae repudiandae nemo at! Autem vel
                                reiciendis officiis! Iusto omnis officia perferendis vitae.
                                Repellat voluptates officiis quia accusantium.
                            </p>
                        </div>
                        <div className="contact_tel-group">
                            <form className="contact_form" ref={form} onSubmit={sendEmail}>
                                <div className="contact_mail_group">
                                    <input className="contact_sent_mail" type="text" name="from_name" placeholder="Name" required value={userName} onChange={onChangeName}/>
                                    <input className="contact_sent_mail" type="text" name="from_phone" placeholder="Phone" required value={userPhone} onChange={onChangeNumber}/>
                                </div>
                                <input className="contact_mail-send" type="email" name="from_email" placeholder="E-Mail" required value={userEmail} onChange={onChangeEmail}/>
                                <textarea className="contact_mail-text" name="from_message" placeholder="Message" required value={userMessage} onChange={onChangeMessage}/>
                                <div className="contact_mail-btn">
                                    <Button onClick={OnReset} type="reset" className="contact_reset-btn">
                                        Clear message
                                    </Button>
                                    <Button type="submit" id="sentMail" className="contact_submit-btn">
                                        Send message
                                    </Button>
                                </div>
                            </form>
                            <ul className="contact_list">
                                <li className="contact_item">
                                    <a href="tel:+998950192824" className="">
                                        <BsTelephone className="contact_icon_link" />
                                        <p className="contact_text_link">+998 (95)-244-28-24</p>
                                    </a>
                                    <CopyToClipboard text="+998952442824">
                                        <Button className="contact_copy_text_btn" onClick={onCopyText} disabled={Disable}>
                                            <MdContentCopy id="copy_text_id" className="contact_copy_icon"/>
                                        </Button>
                                    </CopyToClipboard>
                                </li>
                                <li className="contact_item">
                                    <a href="#!" className="">
                                        <MdOutlineMailOutline className="contact_icon_link" />
                                        <p className="contact_text_link">
                                            sabitislamov2004@gmail.com
                                        </p>
                                    </a>
                                </li>
                                <li className="contact_item">
                                    <a href="#!" className="">
                                        <MdOutlineMailOutline className="contact_icon_link" />
                                        <p className="contact_text_link">
                                            bilmermailaccaund@gmail.com
                                        </p>
                                    </a>
                                </li>
                                <li className="contact_item">
                                    <a href="#!" className="">
                                        <MdOutlineMailOutline className="contact_icon_link" />
                                        <p className="contact_text_link">
                                            designerbilmer@gmail.com
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
                <div className="google">
                    <Iframe
                        some
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.741759870898!2d69.18410831541884!3d41.16198597928546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc8bca0decb2231f!2zNDHCsDA5JzQzLjIiTiA2OcKwMTEnMTAuNyJF!5e0!3m2!1suz!2s!4v1674467262473!5m2!1suz!2s"
                        className="google-maps"
                        id=""
                    />
                </div>
            </section>
        </React.Fragment>
    );
};

export default Contact;
