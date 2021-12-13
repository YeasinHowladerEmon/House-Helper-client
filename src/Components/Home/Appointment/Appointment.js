import { faEnvelope, faMobileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import '../../Sass/Styled-Sass/Appointment.scss'
import axios from 'axios';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const Appointment = () => {
    const { register, handleSubmit, reset } = useForm();
    const [startDate, setStartDate] = useState(new Date());

    const onSubmit = data => {
        const loading = toast.loading('Please wait a minute...')
        console.log(data)
        const appointment = {
            data,
            startDate
        }

        axios.post("http://localhost:5000/appointment", appointment)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal('Successful', 'Your Appointment has been successfully', 'success')
                }
                swal('Failed!', 'Something went wrong! Please try again', 'error')
            }).catch(error => {
                toast.dismiss(loading);
                swal('Failed!', 'Something went wrong! Please try again', 'error')
            })
        reset()
    }
    return (
        <div className="appointment-area jarallax ptb-100">
            <Container>
                <div className="section-title white white-title">
                    <span>Call to Action</span>
                    <h2>Make An Appointment</h2>
                </div>
                <div className="appointment-here-form">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col lg={4} sm={6}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter Your Name" {...register("name")} />
                                    <FontAwesomeIcon className="icon" icon={faUser} />
                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={6}>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Enter Your Email" {...register("email")} />
                                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={6}>
                                <Form.Group>
                                    <Form.Control type="tel" placeholder="Mobile number" {...register("Mobile_number", { required: true, minLength: 11, maxLength: 11 })} />
                                    <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={6}>
                                <Form.Group>
                                    <Form.Control as="select" className="form-control"  {...register("select-service", { required: true })}>
                                        <option value="Select  Service">Select Service</option>
                                        <option value="House Cleaning">House Cleaning</option>
                                        <option value="Apartment Cleaning">Apartment Cleaning</option>
                                        <option value="Industry Cleaning">Industry Cleaning</option>
                                        <option value="Hospital & Health Care">Hospital &  Health Care</option>
                                        <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={6}>
                                <Form.Group>
                                    {/* <Form.Control defaultValue={new Date()} type="datetime-local" placeholder="Date-time" {...register("Date-time")}  /> */}
                                    <DatePicker selected={startDate} className="form-control" onChange={(date) => setStartDate(date)} />
                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={6}>
                                <Form.Group>
                                    <Form.Control as="select"   {...register("select-time", { required: true })}>
                                        <option value="select time">Select Time</option>
                                        <option value="9.00 AM To 10.00 AM">9.00 AM To 10.00 AM</option>
                                        <option value="10.00 AM To 11.00 AM">10.00 AM To 11.00 AM</option>
                                        <option value="11.00 AM To 12.00 AM">11.00 AM To 12.00 AM</option>
                                        <option value="12.00 AM To 1.00 PM">12.00 AM To 1.00 PM</option>
                                        <option value="1.00 PM To 3.00 PM">1.00 PM To 3.00 PM</option>
                                        <option value="4.00 PM To 6.00 PM">4.00 PM To 6.00 PM</option>
                                        <option value="7.00 PM To 10.00 PM">7.00 PM To 10.00 PM</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col as="div" className="col-12">
                                <Button className="default-btn" type="submit" >Confirm Your Appointment</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Appointment;