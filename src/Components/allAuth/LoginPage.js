import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Toast } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { useAuth } from '../../Hooks/useAuth/useAuth';
import '../Sass/Styled-Sass/SignupPage.scss'
import info from '../Share/image/info-emoji.svg'
import Navber from '../Share/Navber/Navber'

const LoginPage = () => {
    const [show, setShow] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loadings, setLoadings] = useState(false);
    const { login, user, googleSignIn } = useAuth();

    console.log(user)

    let navigate = useNavigate();
    let location = useLocation();
    const { path } = location.state || { path: "/" };

    const handleGoogle = async () => {
        const loading = toast.loading('Please wait a minute...')
        try {
            setLoadings(true)
            toast.dismiss(loading)
            await googleSignIn()
            navigate(path)
        } catch {
            toast.dismiss(loading)
            swal('Failed!', 'Something went wrong! Please try again', 'error')
        }
    }
    const onSubmit = async data => {
        const loading = toast.loading('Please wait a minute...')
        console.log(data);
        try {
            setLoadings(true)
            toast.dismiss(loading)
            await login(data.email, data.password).catch(err => {
                toast.dismiss(loading);
                toast.error(err.message);
            })
            navigate(path)

        } catch {
            toast.dismiss(loading)
            swal('Failed!', 'Something went wrong! Please try again', 'error')
        }
    }
    return (
        <section>
            <div className="user-area-all-style sign-up-area ptb-100">
                <Navber />
                <Toast className="toast-left" onClose={() => setShow(false)} show={show} delay={10000} autohide>
                    <Toast.Header>
                        <img src={info} className="rounded mr-2" alt="Info" />
                        <strong className="mr-auto">Important Info</strong>
                    </Toast.Header>
                    <Toast.Body className="text-center">
                        Use this account to <br /> Sign in as an admin to test the admin panel <br /> Or login with a different account as a user.
                    </Toast.Body>
                </Toast>
                <Container>
                    <div className="section-title">
                        <h1>Login An Account</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <div className="contact-form-action">
                                <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col lg={4} md={4} sm={12}>
                                            <Button disabled={loadings} onClick={handleGoogle} className="default-btn">Google</Button>
                                        </Col>
                                        <Col lg={4} md={4} sm={12}>
                                            <Button disabled={loadings} className="default-btn">Facebook</Button>
                                        </Col>
                                        <Col lg={4} md={4} sm={12}>
                                            <Button disabled={loadings} className="default-btn">Twitter</Button>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Group>
                                                <Form.Control type="email" defaultValue="admin@test.com" placeholder="Enter Email" {...register("email")} />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Group  >
                                                <Form.Control type="password"
                                                    defaultValue="123456" placeholder="Enter Password" {...register("password", {
                                                        required: "You must specify a password",
                                                        minLength: {
                                                            value: 6,
                                                            message: "Password must have at least 8 characters"
                                                        }
                                                    })} />
                                                {errors.password && <p>{errors.password.message}</p>}
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} sm={6} className="form-condition">
                                            <div className="agree-label">
                                                <Form.Check id="chb1" type="checkbox" {...register("checkbox", { required: true })}
                                                />
                                                <Form.Label htmlFor="chb1">Remember Me</Form.Label>
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={6} >
                                            <Link to="/forget-password" className="forget">Forget Password?</Link>
                                        </Col>
                                        <Col style={{ marginTop: "15px" }} md={12} sm={12}>
                                            <Button disabled={loadings} className="default-btn btn-two" type="submit">
                                                Submit
                                            </Button>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <p className="account-desc">
                                                Already have an account?{" "}
                                                <Link to='/sign-up'>Sign Up</Link>
                                            </p>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="sign-up-img1"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default LoginPage;