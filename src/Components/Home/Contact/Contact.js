import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../../Sass/Styled-Sass/Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import Bg23 from '../../Share/PageTitleArea/Bg23';
import Navber from '../../Share/Navber/Navber';


const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const sendEmail = (data) => {
        const loading = toast.loading('Please wait a minute...')

        axios.post("https://glacial-plains-17172.herokuapp.com/contact", data)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal('Successful', 'Your message has been sent successfully', 'success')
                }
                swal('Failed!', 'Something went wrong! Please try again', 'error')
            }).catch(error => {
                toast.dismiss(loading);
                swal('Failed!', 'Something went wrong! Please try again', 'error')
            })
        console.log(data);
        reset();
    }
    return (
        <>
            <Bg23 />
            <Navber />
            <div className="contact-area ptb-100">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="contact-wrap">
                                <div className="contact-form">
                                    <div className="section-title">
                                        <h2>Drop Us A Message For Any Query</h2>
                                    </div>
                                    <Form onSubmit={handleSubmit(sendEmail)}>
                                        <Row>
                                            <Col lg={6} sm={6}>
                                                <Form.Group>
                                                    <Form.Control type="text" placeholder="Your Name" {...register("name")} />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} sm={6}>
                                                <Form.Group>
                                                    <Form.Control type="email" placeholder="Your Email" {...register("email")} />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} sm={6}>
                                                <Form.Group>
                                                    <Form.Control type="tel" placeholder="Mobile number" {...register("Mobile_number", { required: true, minLength: 11, maxLength: 11 })} />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} sm={6}>
                                                <Form.Group>
                                                    <Form.Control type="text" placeholder="Your Subject" {...register("subject")} />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12} sm={12}>
                                                <Form.Group>
                                                    <Form.Control as="textarea" cols="30" row="5" type="text" placeholder="Your Message" {...register("message")} />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12} sm={12}>
                                                <Form.Group>
                                                    <Button className="default-btn" type="submit">Send Message</Button>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="quick-contact">
                                <h3>Quick Contact</h3>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                                        Location: <span>Manda, Mugda, Dhaka 1214, Bangladesh</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
                                        Call Us: <a href="tel:+8801903245299">+8801903245299</a>
                                        <a href="tel:+8801903245299">+8801903245299</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                        Email Us: <a href="mailto:emonibnsalim@gmail.com">emonibnsalim@gmail.com</a>
                                        <a href="mailto:emonibnsalim@gmail.com">emonibnsalim@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Contact;