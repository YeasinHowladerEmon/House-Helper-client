import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useAuth } from '../../../Hooks/useAuth/useAuth';
import ProfilePopbar from '../../Home/ProfilePopbar/ProfilePopbar';
import '../../Sass/Styled-Sass/Navber.scss'



const Navber = () => {
    const { cartItems } = useContext(UserContext)
    const [isCollapsed, setIsCollapsed] = useState(null)
    const [isSticky, setSticky] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Navbar
                collapseOnSelect
                fixed="top"
                variant="light"
                expand="lg"
                className={((window.location.pathname === "/login" || window.location.pathname === "/sign-up") || isSticky || isCollapsed) ? "shadow-sm bg-aqlik-blue py-2" : "py-4"}
            >
                <Container>
                    <Navbar.Brand
                        className="text-w"
                        href="/"
                    >ℋ<span>-ℍ⒠𝓵p̅eͤԻ</span>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-controls="basic-navbar-nav" className="text-ww" />
                    <Navbar.Collapse
                        className={`${isCollapsed} text-ww`}
                        id="basic-navbar-nav"
                    >
                        <Nav className="m-auto  fw-bold ">
                            <Nav.Link as={Link} to="/" onClick={() => window.scrollTo(500, 0)} className="text-ww me-xl-3">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="me-xl-3 text-ww">About</Nav.Link>
                            <Nav.Link as={Link} to="/service-container" className="me-xl-3 text-ww">Services</Nav.Link>
                            <Nav.Link as={Link} to="/shop" className="me-xl-3 text-ww">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard/profile" className="me-xl-3 text-ww">Dashboard</Nav.Link>
                        </Nav>
                        <Nav className="fw-bold text-ww others-option">
                            <Nav.Link as={Link} to="/Cart" className="me-xl-1 text-ww">
                                <div className="cart__icon">
                                    <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                                    {cartItems.length > 0 && (
                                        <div className='item__count'>
                                            <span>{cartItems.length}</span>
                                        </div>
                                    )}
                                </div>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="me-xl-3 text-ww">Contact</Nav.Link>
                            {
                                user ?
                                    <div
                                        className="ms-xl-3"> <ProfilePopbar />
                                    </div>
                                    : <Nav.Link className="text-ww" as={Link} to="/login" >Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navber;