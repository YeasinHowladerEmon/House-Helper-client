import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import '../../Sass/Styled-Sass/Project.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Pagination, Autoplay, Navigation]);


const Project = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/projects")
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <section className="project-area pt-100 pb-70">
            <Container fluid className="p-0">
                <div className="section-title">
                    <span>Projects</span>
                    <h2>Our Recent Projects</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem amet, nam odit in facere natus voluptatibus possimus corrupti eos animi.</p>
                </div>
                <Swiper autoplay={{
                    "delay": 10000,
                }} slidesPerView={4} spaceBetween={40} navigation={true} className="mySwiper">
                    {
                        projects.map(p =>
                            <SwiperSlide key={p._id}>
                                <div className="single-project">
                                    <img src={p.image} alt={p.image} />
                                    <div className="project-content">
                                        <h3><Link to="/">{p.name}</Link></h3>
                                        <span>{p.workplace}</span>
                                        <Link to="/">
                                            <FontAwesomeIcon icon={faChevronRight} className="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </Container>
        </section>
    );
};

export default Project;