import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from './Slider.jsx'

import { useContext } from 'react';
import Context from '../../Layout/context/Context.jsx';

const Portfolio = () => {
    
    const { PortfolioScroll } = useContext(Context);
    
    return (
        <>
            <section id="portfolio" className="portfolio">
                <nav className="about_navbar">
                    <Container>
                        <h2 className={`about_nav_title ${PortfolioScroll ? "active" : ""}`}>My Portfolio</h2>
                    </Container>
                </nav>
                <Container>
                    <div className="portfolio_top">
                        <div className="portfolio_info">
                            <h4 className="portfolio_info_title">Info</h4>
                            <p className="portfolio_info_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus id officiis numquam eius blanditiis soluta sunt deleniti iusto dicta rerum libero nihil qui fugit pariatur officia minima molestias, eum ratione consequatur? Tenetur vitae repudiandae nemo at! Autem vel reiciendis officiis! Iusto omnis officia perferendis vitae. Repellat voluptates officiis quia accusantium.</p>
                        </div>
                        <h2 className="portfolio_web-title">Websites</h2>
                        <div className="portfolio_slider">
                            <Slider />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Portfolio