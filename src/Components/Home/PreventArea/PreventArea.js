import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import preventImg from '../../Share/image/prevent-img.jpg'
import preventChild from '../../Share/image/prevent-child.jpg';
import '../../Sass/Styled-Sass/PreventArea.scss'

const PreventArea = () => {
    return (
        <div>
            <div className="prevent-area pb-70">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="prevent-content">
                                <span>Prevent</span>
                                <h2>Protect Yourself from Virus</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                <ul>
                                    <li>
                                        <h3>Wash your hands</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore minima cumque praesentium blanditiis nobis, dolore esse cupiditate</p>
                                    </li>
                                    <li>
                                        <h3>Use Hand sanitaizer</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore minima cumque praesentium blanditiis nobis, dolore esse cupiditate</p>
                                    </li>
                                    <li>
                                        <h3>Additional key times to clean hands</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore minima cumque praesentium blanditiis nobis, dolore esse cupiditate</p>
                                    </li>
                                    <li>
                                        <h3>Avoid touching</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore minima cumque praesentium blanditiis nobis, dolore esse cupiditate</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="prevent-img">
                                <img src={preventImg} alt="" />
                                <div className="prevent-child">
                                    <img src={preventChild} alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PreventArea;