import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SkeletonContainer from '../../Share/SkeletonContainer/SkeletonContainer';
import Service from '../Service/Service';
import '../../Sass/Styled-Sass/service.scss';
import '../../Sass/Styled-Sass/SwiperStyled.scss';


const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        axios.get("https://glacial-plains-17172.herokuapp.com/services")
            .then((res) => {
                setLoading(false)
                setServices(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="services-area pb-70">
            <Container>
                <div className="section-title">
                    <span className="top-title">Services</span>
                    <h2>Commercial Disinfection Services</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime vero reprehenderit vel accusantium, facilis architecto consectetur nobis tempore ullam suscipit tenetur mollitia corporis veritatis.</p>
                </div>
                <Row>
                    {
                        isLoading ? <> <SkeletonContainer/> <SkeletonContainer/> <SkeletonContainer/> </> : 
                        services.map(services => <Service key={services._id} services={services} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;