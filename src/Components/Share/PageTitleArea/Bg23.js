import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import '../../Sass/Styled-Sass/bg24.scss'
const Bg23 = () => {
    return (
        <div className="page-title-area bg-23">
            <Container>
                <div className="page-title-content">
                    <h2>
                        {window.location.pathname.replace(/\//, '')}
                    </h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><FontAwesomeIcon icon={faLongArrowAltRight} className="icon" /></li>
                        <li className="active">{window.location.pathname.replace(/\//, '')}</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Bg23;