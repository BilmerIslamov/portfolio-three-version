import React from "react";
import { useContext } from 'react'
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from 'react-icons/fa';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Context from "../../Layout/context/Context.jsx";



const Customers = () => {
    const {
        scroll_star_1,
        scroll_star_2,
        scroll_star_3,
        scroll_star_4,
        scroll_star_5,
        CommentScroll
    } = useContext(Context);
    return (
        <>
            <section id="thoughts" className="comment">
                <nav className="about_navbar">
                    <Container>
                        <h2 className={`about_nav_title ${CommentScroll ? "active" : ""}`}>Clients always get exceptional work from me</h2>
                    </Container>
                </nav>
                <Container>
                    <div className="comment_top">
                        <Swiper
                            navigation={true}
                            // loop={true}
                            // slidesPerView={1}
                            spaceBetween={30}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="comment_slider">
                                <div className="comment_slider_bg">
                                    <div className="comment_slider_elip">

                                    </div>
                                    <p className="comment_slider_text">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has beenLorem Ipsum is
                                        simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been
                                    </p>
                                    <div className="comment_slider_star-wars">
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_1 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_2 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_3 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_4 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_5 ? "active" : ""}`} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="comment_slider">
                                <div className="comment_slider_bg">
                                    <div className="comment_slider_elip">

                                    </div>
                                    <p className="comment_slider_text">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has beenLorem Ipsum is
                                        simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been
                                    </p>
                                    <div className="comment_slider_star-wars">
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_1 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_2 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_3 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_4 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_5 ? "active" : ""}`} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="comment_slider">
                                <div className="comment_slider_bg">
                                    <div className="comment_slider_elip">

                                    </div>
                                    <p className="comment_slider_text">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has beenLorem Ipsum is
                                        simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been
                                    </p>
                                    <div className="comment_slider_star-wars">
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_1 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_2 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_3 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_4 ? "active" : ""}`} />
                                        <FaStar id="star_1" className={`comment_slider_star ${scroll_star_5 ? "active" : ""}`} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Customers;
