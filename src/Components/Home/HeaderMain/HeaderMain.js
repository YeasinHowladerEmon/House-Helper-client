import React from 'react';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import '../../Sass/Styled-Sass/SwiperStyled.scss'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Shape from '../../Share/image/home-slider-shape1.png'
SwiperCore.use([Autoplay, Pagination, Navigation]);


const HeaderMain = () => {
    return (
        <div className="hero-slider-area-dot">
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 10000,
                "disableOnInteraction": false
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className="slider-item slider-item-bg-1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <Row className="row align-items-center">
                                        <Col lg={9} md={6}>
                                            <div className="slide-text one">
                                                <h1>Cleaning passion for now</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae ad reiciendis similique harum quidem?</p>
                                                <div className="slide-btn">
                                                    <Link to="/contact" className="default-btn">Contact</Link>
                                                    <Link to="/" className="default-btn active">About Us</Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6}>
                                            <div className="video-btn-animat one">
                                                <a href="/" className="video-btn popup-youtube">
                                                    <FontAwesomeIcon style={{ position: 'relative', top: "-3px", left: "1px" }} icon={faPlay} />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item slider-item-bg-3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container fluid">
                                    <Row className="align-items-center">
                                        <Col lg={9}>
                                            <div className="slide-text one" >
                                                <h1>Cleaning passion for now</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae ad reiciendis similique harum quidem?</p>
                                                <div className="slide-btn" style={{ marginBottom: "10px" }}>
                                                    <Link to="/contact" className="default-btn">Contact</Link>
                                                    <Link to="/" className="default-btn active">About Us</Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="video-btn-animat one">
                                                <a href="" className="video-btn popup-youtube">
                                                    <FontAwesomeIcon style={{ position: 'relative', top: "-3px", left: "1px" }} icon={faPlay} />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item slider-item-bg-2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container fluid">
                                    <Row className="align-items-center">
                                        <Col lg={9}>
                                            <div className="slide-text one">
                                                <h1>Cleaning passion for now</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae ad reiciendis similique harum quidem?</p>
                                                <div className="slide-btn" style={{ marginBottom: "10px" }}>
                                                    <Link to="/contact" className="default-btn">Contact</Link>
                                                    <Link to="/" className="default-btn active">About Us</Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="video-btn-animat one">
                                                <a href="" className="video-btn popup-youtube">
                                                    <FontAwesomeIcon style={{ position: 'relative', top: "-3px", left: "1px" }} icon={faPlay} />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
        </div>
    );

};

export default HeaderMain;