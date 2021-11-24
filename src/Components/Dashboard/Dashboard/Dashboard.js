import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

import React from 'react';
import '../../Sass/Styled-Sass/Dashboard.scss'
import { faFileUpload, faListUl, faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import '../../Sass/Styled-Sass/Sidebar.scss'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <Container fluid>
                <Row>

                    <Col lg={2} md={12} sm={12}>
                        <div id="sidebar">
                            <div className={`${isOpen ? "d-block" : "d-lg-block d-none"} p-0 sidebar-wrapper`}>
                                <div className="sidebar-header">
                                    <div className="d-flex justify-content-between">
                                        <div className="logo">
                                            <Link to="/" >ℋ<span>-ℍ⒠𝓵p̅eͤԻ</span></Link>
                                        </div>
                                        <div className="toggle">
                                            <a href="#" onClick={() => {
                                                setIsOpen(false)
                                            }}
                                                id="sidebarCollapse"
                                                className={isOpen ? "d-block d-lg-none" : "d-none"}>
                                                <FontAwesomeIcon className="icon" style={{ color: "white" }} icon={faTimes} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-menu">
                                    <ul className=" list-unstyled components">
                                        <li className="sidebar-item active">
                                            <NavLink className={({ isActive }) => isActive ? "link-active" : ""} to="profile">
                                                <FontAwesomeIcon icon={faUserCircle} className="icon" /> <span>Profile</span>
                                            </NavLink>
                                        </li>
                                        <li className="sidebar-item active">
                                            <NavLink className={({ isActive }) => isActive ? "link-active" : ""} to="addProduct"><FontAwesomeIcon icon={faUserCircle} className="icon" /> <span>AddProduct</span></NavLink>
                                        </li>
                                        <li className="sidebar-item active">
                                            <NavLink className={({ isActive }) => isActive ? "link-active" : ""} to="orderList"><FontAwesomeIcon icon={faUserCircle} className="icon" /> <span>Order List</span></NavLink>
                                        </li>
                                        <li className="sidebar-item active">
                                            <NavLink className={({ isActive }) => isActive ? "link-active" : ""} to="productList"><FontAwesomeIcon icon={faUserCircle} className="icon" /> <span>Product List</span></NavLink>
                                        </li>
                                        <li className="sidebar-item active">
                                            <NavLink className={({ isActive }) => isActive ? "link-active" : ""} to="serviceList"><FontAwesomeIcon icon={faUserCircle} className="icon" /> <span>Service List</span></NavLink>
                                        </li>
                                       
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col lg={10} md={12} sm={12}>

                        <div id="main">
                            <header className="mb-3">
                                <a href="#" onClick={() =>
                                    setIsOpen(true)
                                }
                                    id="sidebarCollapse"
                                    className={isOpen ? "d-none" : "d-lg-none d-block"}>
                                    <FontAwesomeIcon className="icon" icon={faBars} />
                                </a>
                            </header>
                            <Outlet />
                        </div>

                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;