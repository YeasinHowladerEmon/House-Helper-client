import React, { useContext } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Sass/Styled-Sass/Product.scss'
import { useCart } from '../../../Hooks/useCart/useCart';
import { UserContext } from '../../../App';

const Product = ({ products }) => {
    const { setProductDetails } = useContext(UserContext)
    const { onAdd } = useCart();
    const { body, image, } = products;
    return (
        <Col lg={4} md={6} sm={12}>
            <div className="single-product">
                <div className="product-img">
                    {
                        image.img ?
                            <img src={`data:image/png;base64,${image.img}`} alt="" width="500" height="400" /> :
                            <img src={`data:image/png;base64,${image}`} alt="" width="500" height="400" />
                    }
                    <Button onClick={() => onAdd(products)} className="default-btn">Add To Cart</Button>
                </div>
                <div className="product-content">
                    <h3 onClick={() => {
                        setProductDetails(products)
                    }}>
                        <Link to={`/product-Details/${products._id}`}>{body.name}</Link>
                    </h3>
                    <ul>
                        <li>${" "}{body.price}</li>
                        <li><del>${" "}{body.delPrice}</del></li>
                    </ul>
                    {
                        (window.location.pathname === "/shop") ?
                            <div className="ratings">
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                            </div>
                            : ""
                    }
                </div>
            </div>
        </Col >
    );
};

export default Product;