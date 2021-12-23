
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../Sass/Styled-Sass/AboutArea.scss'
import aboutImg from '../../Share/image/about-img.jpg'
import aboutChild from '../../Share/image/about-child.jpg'
const AboutArea = () => {
    return (
        <div className="about-area pb-100">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="about-content">
                            <span>About Us</span>
                            <h2>COVID - 19 Virus Disinfection   {' '} & Sanitation</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare}
                                        className="icon" />
                                    Clean and Disinfect frequently touched surfaces
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare}
                                        className="icon" />
                                    Avoid touching your eyes, nose, and mouth
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare}
                                        className="icon" />
                                    Clean your hands with a hand sanitizer
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare}
                                        className="icon" />
                                    Cover coughs and sneezes
                                </li>
                            </ul>
                            <p className="block-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab deserunt hic natus eum adipisci optio maxime itaque et.</p>
                            <a href="/" className="default-btn">Learn More</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-img">
                            <img src={aboutImg} alt="" />
                            <div className="about-child">
                                <img src={aboutChild} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutArea;