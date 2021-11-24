import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleRight, faAngleDoubleUp, faMapMarkerAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Sass/Styled-Sass/Footer.scss'

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <footer className="footer-top-area f-bg pt-100 pb-70 jarallax">
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <div className="single-widget">
                                <div className="foot-logo">
                                    <Link to="/">ℋ<span>-ℍ⒠𝓵p̅eͤԻ</span></Link>
                                </div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, repellendus nobis. Facilis id laudantium harum minus vitae non, in esse inventore amet doloremque iusto corrupti numquam mollitia expedita, blanditiis obcaecati.
                                </p>
                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon icon={faTwitter} className="icon" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="//">
                                                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon icon={faYoutube} className="icon" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="single-widget">
                                <h3>
                                    Our Services
                                </h3>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Main Service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Window Cleaning
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Domestic Cleaning
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Disinfection
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Office Cleaning
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            House Cleaning
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="single-widget">
                                <h3>
                                    Quick Links
                                </h3>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Prices
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Testimonials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                                            Projects
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="single-widget contact">
                                <h3>
                                    Get In Touch
                                </h3>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                                            <span>Hotline:</span>
                                            Phone: <a href="tel:+8801903245299">+8801903245299</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                            <span>Email:</span>
                                            <a href="mailto:emonibnsalim@gmail.com">emonibnsalim@gmail.com</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                                            <span>Address:</span>
                                            Manda, Mugda, Dhaka-1214
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="footer-bottom-area">
                <Container>
                    <div className="copy-rights">
                        <p>
                            @Copyright @
                            {" "}
                            {(new Date().getFullYear())}
                            {" "}
                            ℋ<span>-ℍ⒠𝓵p̅eͤԻ</span> All Rights Reserved By {' '}
                            <a href="/">Emon Ibn Salim</a>
                        </p>
                    </div>
                </Container>
            </div>
            <div className={`go-top ${scrolled ? "active d-block" : "d-none"}`} onClick={() => window.scrollTo(500, 0)}>
                <FontAwesomeIcon icon={faAngleDoubleUp} className="icon" />
                <FontAwesomeIcon icon={faAngleDoubleUp} className="icon" />
            </div>
        </>
    );
};

export default Footer;