import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import process1 from '../../Share/image/process1.png'
import process2 from '../../Share/image/process2.png'
import process3 from '../../Share/image/process3.png';
import "../../Sass/Styled-Sass/ProcessArea.scss";

const ProcessArea = () => {
    return (
        <div className="process-area bg-color pt-100 pb-70">
            <Container>
                <div className="section-title">
                    <span>Process</span>
                    <h2>How It Works</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum quae magnam itaque ad at adipisci incidunt voluptatibus pariatur velit?</p>
                </div>
                <Row>
                    <Col lg={4} sm={6}>
                        <div className="single-process">
                            <img src={process1} alt="" />
                            <h3>Account & Check-In</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a className="read-more" href="">Get In Touch +</a>
                            <span>01</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="single-process">
                            <img src={process2} alt="" />
                            <h3>Choose Catagory</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a className="read-more" href="">Get In Touch +</a>
                            <span>02</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className="offset-sm-3 offset-lg-0">
                        <div className="single-process">
                            <img src={process3} alt="" />
                            <h3>Get Clean Property</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a className="read-more" href="">Get In Touch +</a>
                            <span>03</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProcessArea;