import { faAward, faBroom, faHeadset, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../Sass/Styled-Sass/FeatureArea.scss'

const FeatureArea = () => {
    return (
        <div className="feature-area pb-100">
            <Container>
                <Row>
                    <Col lg={9}>
                        <div className="feature-wrap">
                            <Row>
                                <Col lg={4} sm={6}>
                                    <div className="single-feature">
                                        <FontAwesomeIcon icon={faAward} className="icon" />
                                        <h3>Satisfaction</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </Col>
                                <Col lg={4} sm={6}>
                                    <div className="single-feature">
                                        <FontAwesomeIcon icon={faBroom} className="icon" />
                                        <h3>Expert Cleaner</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </Col>
                                <Col lg={4} sm={6} className="offset-sm-2 offset-lg-0">
                                    <div className="single-feature">
                                        <FontAwesomeIcon icon={faHeadset} className="icon" />
                                        <h3>24/7 Support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="hot-line">
                            <span>Hot Line</span>
                            <h3>
                                <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                                Contact Us Today
                            </h3>
                            <a href="tel:+8801903245299">+880193245299</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FeatureArea;