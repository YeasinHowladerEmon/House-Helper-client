import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useCart } from '../../../Hooks/useCart/useCart';
import '../../Sass/Styled-Sass/Cart.scss'
const Cart = (props) => {
    // const { cartItems, onAdd, onRemove } = props;
    const {  onAdd, onRemove, onItemRemove, handleClear } = useCart()
    const { cartItems } = useContext(UserContext)
    console.log("items", cartItems);

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.body.price, 0)
    const taxPrice = itemsPrice * 0.20;
    const shippingPrice = itemsPrice > 100 && 1000 ? 60 : 10;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <div className="cart-area ptb-100">
            <Container>
                <Row>
                    <Col>
                        {cartItems.length === 0 && <div><h1 className="text-center">Cart is empty</h1></div>}
                        <Form>
                            <div className="cart-wraps">
                                <div className="cart-table table-responsive">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Unit Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        {cartItems.map((products) => (
                                            <tbody key={products._id}>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <a href="">
                                                            {/* <img src={items.image.img} alt="" /> */}
                                                        </a>
                                                    </td>
                                                    <td className="product-name">
                                                        <a href="">
                                                            {products.body.name}
                                                        </a>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="unit-amount">{products.body.price}</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <div className="input-counter">
                                                            <span onClick={() => onRemove(products)} className="minus-btn"><FontAwesomeIcon icon={faMinus} className="icon" /></span>
                                                            <input type="text" min="1" max="10" readOnly value={products.qty} />
                                                            <span onClick={() => onAdd(products)} className="plus-btn"><FontAwesomeIcon icon={faPlus} className="icon" /></span>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">

                                                            <p>${products.qty * products.body.price}</p>
                                                        </span>
                                                        <a className="remove" onClick={() => onItemRemove(products)} href="">
                                                            <FontAwesomeIcon icon={faTimes} className="icon" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}

                                    </table>
                                </div>
                                <div className="cart-button">
                                    <Row>
                                        <Col lg={7} sm={7} md={7}>
                                            <div className="continue-shopping-box">
                                                <Link to="/shop" className="default-btn page-btn">Continue Shopping</Link>
                                            </div>
                                        </Col>
                                        <Col lg={5} sm={5} md={5} style={{textAlign: "right"}}>
                                            <a href="/" onClick={handleClear} className="default-btn page-btn">Remove all Items</a>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            {cartItems.length !== 0 && (
                                <Row>
                                    <Col lg={6} className="offset-lg-3">
                                        <div className="cart-totals">
                                            <h3>Cart Totals</h3>
                                            <ul>
                                                <li>Subtotal{" "}<span>${" "}{itemsPrice.toFixed(2)}</span></li>
                                                <li>Tax{" "}<span>${" "}{taxPrice.toFixed(2)}</span></li>
                                                <li>Shipping{" "}<span>${" "}{shippingPrice.toFixed(2)}</span></li>
                                                <li>Total{" "}<span>${" "}{totalPrice.toFixed(2)}</span></li>
                                                <li> <b>Payable Total</b><span>${" "}{totalPrice.toFixed(2)}</span></li>
                                            </ul>
                                            <div className="text-center">
                                                <a href="" className="default-btn page-btn">Checkout</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;