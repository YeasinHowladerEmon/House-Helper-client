import React, { useContext } from 'react';
import { faFacebookF, faInstagramSquare, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

import { UserContext } from '../../../App';
import '../../Sass/Styled-Sass/ServicesDetails.scss'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import Bg24 from '../../Share/PageTitleArea/Bg24';
import Navber from '../../Share/Navber/Navber';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const { details } = useContext(UserContext)
    let navigate = useNavigate();
    console.log(details);
    let { id } = useParams()
    const servicesDetails = (details._id === id) && details;
    console.log("paise", servicesDetails);
    if (servicesDetails === false) {
        navigate('/')
    }


    return (
        <>
            <Navber />
            <Bg24 />
            <div className="services-details-area pt-100 pb-70">
                <Container>
                    <Row>
                        <Col lg="4" >
                            <div className="services-sidebar">
                                <div className="services-img">
                                    <img src={servicesDetails.image} alt="" />
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon icon={faFacebookF} className="icon" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon className="icon" icon={faTwitter} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon className="icon" icon={faPinterestP} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <FontAwesomeIcon className="icon" icon={faYoutube} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="availability">
                                    <h3><FontAwesomeIcon className="icon" icon={faClock} />{" "}Availability</h3>
                                    <ul>
                                        <li>Monday - Friday
                                            <span>9.00 - 20.00</span>
                                        </li>
                                        <li>Saturday
                                            <span>10.00 - 16.00</span>
                                        </li>
                                        <li>Sunday
                                            <span>9.30 - 18.00</span>
                                        </li>
                                        <li>Friday
                                            <span>Closed</span>
                                        </li>
                                    </ul>
                                    <Link to="/" className="default-btn mt-4" href="">Request An Appointment</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg="8" >
                            <div className="services-detailss">
                                <div className="services-history">
                                    <h2>{servicesDetails.name}</h2>
                                    <span>Commercial Disinfection Services</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, totam! Dicta rerum deserunt itaque. Incidunt in quo architecto eveniet rem facere, necessitatibus, dolorem voluptas deleniti iure fuga magni velit molestiae ipsum dolor sit amet consectetur adipisicing elit. Repellat, totam adipisicing.</p>
                                    <div className="row borders">
                                        <Col lg={3} pe-0>
                                            <div className="left-title">
                                                <h3>Category</h3>
                                            </div>
                                        </Col>
                                        <Col lg={9} pe-0>
                                            <div className="right-title">
                                                <ul>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        House Cleaning
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        Window Cleaning
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        Apartment Cleaning
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        Industry Cleaning
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        Hospital & Health Care
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        Bathroom Cleaning
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </div>
                                    <Row className="borders">
                                        <Col lg={3} pe-0>
                                            <div className="left-title">
                                                <h3>Specialty</h3>
                                            </div>
                                        </Col>
                                        <Col lg={9} pe-0>
                                            <div className="right-title">
                                                <ul>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        5 Room Cleaning
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        2 Bathroom Cleaning
                                                    </li>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        Window Cleaning
                                                    </li>

                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="borders">
                                        <Col lg={3} pe-0>
                                            <div className="left-title">
                                                <h3>Experience</h3>
                                            </div>
                                        </Col>
                                        <Col lg={9} pe-0>
                                            <div className="right-title">
                                                <ul>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        25 years of Experience in Medicine
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="borders">
                                        <Col lg={3} pe-0>
                                            <div className="left-title">
                                                <h3>Address</h3>
                                            </div>
                                        </Col>
                                        <Col lg={9} pe-0>
                                            <div className="right-title">
                                                <ul>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        Manda, Mugda, Dhaka 1214
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="borders">
                                        <Col lg={3} pe-0>
                                            <div className="left-title">
                                                <h3>Phone</h3>
                                            </div>
                                        </Col>
                                        <Col lg={9} pe-0>
                                            <div className="right-title">
                                                <ul>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        +8801903245299
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="borders">
                                        <Col lg={3} pe-0>
                                            <div className="left-title">
                                                <h3>Email</h3>
                                            </div>
                                        </Col>
                                        <Col lg={9} pe-0>
                                            <div className="right-title">
                                                <ul>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        emonibnsalim@gmail.com
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="borders">
                                        <Col lg={3} pe-0>
                                            <div className="left-title">
                                                <h3>Linkdin</h3>
                                            </div>
                                        </Col>
                                        <Col lg={9} pe-0>
                                            <div className="right-title">
                                                <ul>
                                                    <li>
                                                        <FontAwesomeIcon icon={faHandPointRight} className="icon" />{" "}
                                                        <a href="https://www.linkedin.com/in/ariyanemon/">https://www.linkedin.com/in/ariyanemon/</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Footer/> */}

        </>
    );
};

export default ServicesDetail;