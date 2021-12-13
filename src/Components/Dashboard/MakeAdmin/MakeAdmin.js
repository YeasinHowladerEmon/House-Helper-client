import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../../../Hooks/useAuth/useAuth';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
const MakeAdmin = () => {
    const { token } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const loading = toast.loading('Please wait a minute...')
        axios.put('http://localhost:5000/users/admin', data, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal('Successful', 'WOW, Your make a Admin  has been successfully created', 'success')
                }
                swal('Failed!', 'Something went wrong! Sorry You do not have access Admin', 'error')
            })
            .catch(err => {
                console.log(err)
                toast.dismiss(loading);
                swal('Failed!', 'Something went wrong! Sorry You do not have access Admin', 'error')
            })
        reset()
    }
    return (
        <div className="user-area-all-style sign-up-area ptb-100">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="contact-form-action">
                            <div className="section-title">
                                <h1>Make An Admin</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                            </div>
                            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <Col md={12} sm={12}>
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Enter Email" {...register("email")} />
                                    </Form.Group>
                                </Col>
                                <Col style={{ marginTop: "15px" }} md={12} sm={12}>
                                    <Button className="default-btn btn-two" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="sign-up-img1"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;