import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Logo from '../../Svg/Group 12.png'

export default function App() {

    // const [localhost, setLocalhost] = useState()
    return (
        <>
            <Swiper
                breakpoints={{
                    1800: { slidesPerView: 4, },
                    1400: { slidesPerView: 3, },
                    1200: { slidesPerView: 2, },
                    820: { slidesPerView: 2, },
                    700: { slidesPerView: 2, },
                    640: { width: 640, slidesPerView: 2, },
                    600: { slidesPerView: 1, },
                }}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="portfolio_div_zba">
                        <img className="item_logo" src={Logo} alt="" />
                        <h2 className="portfolio_swipper_title">Project Title</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">type</h6>
                                <h6 className="portfolio_right_title">web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">language</h6>
                                <h6 className="portfolio_right_title">java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Framework</h6>
                                <h6 className="portfolio_right_title">React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Complated On</h6>
                                <h6 className="portfolio_right_title">20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">link</h6>
                                <a href="#!" className="portfolio_right_title">link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio_div_zba">
                        <img className="item_logo" src={Logo} alt="" />
                        <h2 className="portfolio_swipper_title">Project Title</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">type</h6>
                                <h6 className="portfolio_right_title">web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">language</h6>
                                <h6 className="portfolio_right_title">java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Framework</h6>
                                <h6 className="portfolio_right_title">React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Complated On</h6>
                                <h6 className="portfolio_right_title">20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">link</h6>
                                <a href="#!" className="portfolio_right_title">link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio_div_zba">
                        <img className="item_logo" src={Logo} alt="" />
                        <h2 className="portfolio_swipper_title">Project Title</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">type</h6>
                                <h6 className="portfolio_right_title">web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">language</h6>
                                <h6 className="portfolio_right_title">java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Framework</h6>
                                <h6 className="portfolio_right_title">React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Complated On</h6>
                                <h6 className="portfolio_right_title">20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">link</h6>
                                <a href="#!" className="portfolio_right_title">link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio_div_zba">
                        <img className="item_logo" src={Logo} alt="" />
                        <h2 className="portfolio_swipper_title">Project Title</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">type</h6>
                                <h6 className="portfolio_right_title">web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">language</h6>
                                <h6 className="portfolio_right_title">java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Framework</h6>
                                <h6 className="portfolio_right_title">React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Complated On</h6>
                                <h6 className="portfolio_right_title">20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">link</h6>
                                <a href="#!" className="portfolio_right_title">link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio_div_zba">
                        <img className="item_logo" src={Logo} alt="" />
                        <h2 className="portfolio_swipper_title">Project Title</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">type</h6>
                                <h6 className="portfolio_right_title">web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">language</h6>
                                <h6 className="portfolio_right_title">java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Framework</h6>
                                <h6 className="portfolio_right_title">React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Complated On</h6>
                                <h6 className="portfolio_right_title">20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">link</h6>
                                <a href="#!" className="portfolio_right_title">link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio_div_zba">
                        <img className="item_logo" src={Logo} alt="" />
                        <h2 className="portfolio_swipper_title">Project Title</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">type</h6>
                                <h6 className="portfolio_right_title">web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">language</h6>
                                <h6 className="portfolio_right_title">java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Framework</h6>
                                <h6 className="portfolio_right_title">React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">Complated On</h6>
                                <h6 className="portfolio_right_title">20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className="portfolio_left_title">link</h6>
                                <a href="#!" className="portfolio_right_title">link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
