import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Sass/Styled-Sass/Product.scss'
import { useCart } from '../../../Hooks/useCart/useCart';

const Product = (props) => {
    const  {products} = props
    const { onAdd } = useCart();
    const { body, image, id } = products;
    //    console.log("id", props.id);
    return (
        <Col lg={4} md={6} sm={12}>
            <div className="single-product">
                <div className="product-img">
                    <img src={`data:image/jpeg;base64,${image.img}`} alt="" width="500" height="400" />
                    <Button onClick={() => onAdd(products)} className="default-btn">Add To Cart</Button>
                </div>
                <div className="product-content">
                    <h3>
                        <Link to="/">{body.name}</Link>
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