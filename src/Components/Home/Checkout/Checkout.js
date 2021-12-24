import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import { useAuth } from "../../../Hooks/useAuth/useAuth"
import { useCart } from '../../../Hooks/useCart/useCart';
import Navber from '../../Share/Navber/Navber';
import Bg23 from '../../Share/PageTitleArea/Bg23';
import Footer from '../../Share/Footer/Footer';
import '../../Sass/Styled-Sass/Checkout.scss'


const Checkout = () => {
    const { user } = useAuth();
    const { handleClear } = useCart()
    const { register, handleSubmit, reset } = useForm();
    const { cartItems } = useContext(UserContext)
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.body.price, 0)
    const taxPrice = itemsPrice * 0.20;
    const shippingPrice = itemsPrice > 100 && 1000 ? 60 : 10;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    const placeOrder = customerData => {

        const loading = toast.loading('Please wait a minute...')
        const allAmount = {
            itemsPrice: itemsPrice,
            taxPrice: taxPrice,
            shippingPrice: shippingPrice,
            totalPrice: totalPrice
        }

        const data = {
            email: user.email,
            allAmount,
            cartItems,
            customerData,
            orderTime: new Date().toLocaleString(),

        }
        axios.post("https://glacial-plains-17172.herokuapp.com/checkout", data)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal('Successful', 'Your order has been successful', 'success')
                }
                swal('Failed!', 'Something went wrong! Please try again', 'error')
            }).catch(error => {
                toast.dismiss(loading);
                swal('Failed!', 'Something went wrong! Please try again', 'error')
            })
        reset()
    }
    return (
        <>
            <Navber />
            <Bg23 />
            <section className="checkout-area ptb-100">
                <Container>
                    <Form onSubmit={handleSubmit(placeOrder)}>
                        <Row>
                            <Col lg={6} md={12}>
                                <div className="billing-details">
                                    <h3 className="title">Billing Details</h3>
                                    <Row>
                                        <Col lg={12} md={12}>
                                            <Form.Group>
                                                <Form.Label>Country<span className="required">*</span></Form.Label>
                                                <Form.Control as="select"  {...register("country", { required: true })} >
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="India">India</option>
                                                    <option value="South Korea">South Korea</option>
                                                    <option value="China">China</option>
                                                    <option value="Nepal">Nepal</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Form.Group>
                                                <Form.Label>First Name<span className="required">*</span></Form.Label>
                                                <Form.Control type="text" {...register("first-name", { required: true })} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Form.Group>
                                                <Form.Label>Last Name<span className="required">*</span></Form.Label>
                                                <Form.Control type="text" {...register("last-name", { required: true })} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} md={12}>
                                            <Form.Group>
                                                <Form.Label>Company Name</Form.Label>
                                                <Form.Control type="text" {...register("company")} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Address<span className="required">*</span></Form.Label>
                                                <Form.Control type="text" {...register("address", { required: true })} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <Form.Group>
                                                <Form.Label>Town / City<span className="required">*</span></Form.Label>
                                                <Form.Control type="text" {...register("town/city", { required: true })} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Form.Group>
                                                <Form.Label>State / Country<span className="required">*</span></Form.Label>
                                                <Form.Control type="text" {...register("state/country", { required: true })} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Form.Group>
                                                <Form.Label>Postcode / Zip<span className="required">*</span></Form.Label>
                                                <Form.Control type="text" {...register("postcode/zip", { required: true })} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Form.Group>
                                                <Form.Label>Email Address<span className="required">*</span></Form.Label>
                                                <Form.Control type="email" defaultValue={user?.email} {...register("email", { required: true })} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Form.Group>
                                                <Form.Label>Phone<span className="required">*</span></Form.Label>
                                                <Form.Control type="tel" {...register("mobileNumber", { required: true })} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} md={12}>
                                            <Form.Group>
                                                <Form.Check type="checkbox" {...register("ship-different-address")} />
                                                <Form.Label>Ship Different Address</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12} md={12}>
                                            <Form.Group>
                                                <Form.Control as="textarea" type="text" {...register("Order Notes")} placeholder="Order Notes" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={6} md="12">
                                <div className="order-details">
                                    <div className="order-table table-responsive">
                                        <h3 className="title">Your Order</h3>
                                        <Table className="table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product Price</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product-name">
                                                        <p>Subtotal</p>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="subtotal-amount">{itemsPrice.toFixed(2)}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="order-subtotal">
                                                        <span>Shipping</span>
                                                    </td>
                                                    <td className="order-subtotal-price">
                                                        <span className="order-subtotal-amount">{shippingPrice.toFixed(2)}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="order-subtotal">
                                                        <span>Tax</span>
                                                    </td>
                                                    <td className="order-subtotal-price">
                                                        <span className="order-subtotal-amount">{taxPrice.toFixed(2)}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="total-price">
                                                        <span>Order Total</span>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">{totalPrice.toFixed(2)}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="total-price">
                                                        <span>Payable Total</span>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount"><b>{totalPrice.toFixed(2)}</b></span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="payment-box">
                                        <div className="payment-method">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                            <p>
                                                <input type="radio" {...register("payment", { required: true })} value="paypal" id="paypal" />
                                                <label htmlFor="paypal">PayPal</label>
                                            </p>
                                            <p>
                                                <input type="radio" {...register("payment", { required: true })} value="cash" id="cash" />
                                                <label htmlFor="cash">Cash On Delivery</label>
                                            </p>
                                            <Button type="submit" onClick={handleClear} className="default-btn" >Place Order</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Checkout;