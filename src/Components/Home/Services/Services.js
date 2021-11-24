import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/services")
            .then((res) => setServices(res.data))
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
                        services.map(services => <Service key={services._id} services={services} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;