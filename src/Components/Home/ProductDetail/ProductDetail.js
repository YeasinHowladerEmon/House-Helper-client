
import { faMinus, faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { UserContext } from '../../../App';
import { useCart } from '../../../Hooks/useCart/useCart';
import '../../Sass/Styled-Sass/ProductDetail.scss'
import Navber from '../../Share/Navber/Navber';
import Bg24 from '../../Share/PageTitleArea/Bg24';


const ProductDetail = () => {
    const { productDetails, cartItems } = useContext(UserContext)
    const { doubleAdded } = useCart();
    const [count, setCount] = useState(1)
    const [key, setKey] = useState('description');
    console.log(cartItems._id);
    let { pId } = useParams()
    const navigate = useNavigate();
    const products = (productDetails._id === pId) && productDetails;
    console.log("paise", products);
    useEffect(() => {
        if (productDetails === {}) {
            navigate('/')
        } else {
            console.log("true");
        }
    }, []);

    return (
        <>
            <Navber />
            <Bg24 />
            <div className="product-details-area ptb-100">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} md={12}>
                            <div className="product-details-image">
                                <img src={`data:image/jpeg;base64,${products.image.img}`} alt="" width="400" height="300" />
                                {/* <img src={product.image.img} alt="" width="500" height="400" /> */}
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="product-details-desc">
                                <h3>{products.body.name}</h3>
                                <div className="price">
                                    <span className="new-price">
                                        price: ${' '}
                                        {products.body.price}
                                    </span>
                                </div>
                                <div className="product-review">
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faStar} className="icon" />
                                        <FontAwesomeIcon icon={faStar} className="icon" />
                                        <FontAwesomeIcon icon={faStar} className="icon" />
                                        <FontAwesomeIcon icon={faStar} className="icon" />
                                        <FontAwesomeIcon icon={faStarHalf} className="icon" />
                                    </div>
                                    <a href="/" className="rating-count">3 Review</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempore commodi voluptatum inventore temporibus recusandae.</p>
                                <div className="product-add-to-cart">
                                    <div className="input-counter">
                                        <span onClick={() => setCount(count - 1)} className="minus-btn"><FontAwesomeIcon icon={faMinus} className="icon" /></span>
                                        <input type="text" min="1" max="10" readOnly value={count} />
                                        <span onClick={() => setCount(count + 1)} className="plus-btn"><FontAwesomeIcon icon={faPlus} className="icon" /></span>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            doubleAdded(products, count)
                                            toast.success('🦄 Successfully Add to Cart!', {
                                                position: "bottom-left",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            });

                                        }}
                                        className="default-btn">Add to Cart</Button>
                                </div>
                                <div className="buy-btn">
                                    <Button
                                        className="default-btn"
                                        onClick={() => {
                                            doubleAdded(products, count)
                                            navigate('/cart')
                                        }}>Buy it now</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} style={{ marginTop: "60px" }}>
                            <div className="tab product-details-tab">
                                <Row>
                                    <Col md={12} sm={12}>
                                        <Tabs
                                            id="controlled-tab-example"
                                            activeKey={key}
                                            onSelect={(k) => setKey(k)}
                                            className="mb-3"
                                        >
                                            <Tab eventKey="description" title="Description">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </Tab>
                                            <Tab eventKey="information" title="Additational Information">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, asperiores!</p>
                                            </Tab>
                                            <Tab eventKey="contact" title="Contact" disabled>
                                            </Tab>
                                        </Tabs>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ProductDetail;