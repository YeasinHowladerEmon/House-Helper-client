import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import '../../Sass/Styled-Sass/service.scss'

const Service = ({ services }) => {
    const { setDetails } = useContext(UserContext)
    
    return (
        <Col lg={4} md={6} sm={12}>
            <div className="single-services">
                <Link to={`/service-Details/${services._id}`} onClick={() => setDetails(services)}>
                    <img src={services.image} alt="" />
                </Link>
                <div className="services-content">
                    <h3>{services.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui tempore asperiores quas repellendus eos tempora, deleniti ducimus labore nisi!</p>
                    <Link
                        to={`/service-Details/${services._id}`}
                        onClick={() => setDetails(services)}
                        className="read-more"
                    >Read More{" "}
                        <FontAwesomeIcon icon={faPlus} className="icon" />
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;