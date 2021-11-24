import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
// import {  } from 'react-router';
import swal from 'sweetalert';
import { useAuth } from '../../Hooks/useAuth/useAuth';
import '../Sass/Styled-Sass/SignupPage.scss'

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loadings, setLoadings] = useState(false);
    const { login, user, googleSignIn, logOut } = useAuth();



    let navigate = useNavigate();
    let location = useLocation();
    const { path } = location.state || { path: "/" };
    console.log(path);
    console.log("location", location.state);

    console.log({ navigate, location });

    const handleGoogle = async () => {
        const loading = toast.loading('Please wait a minute...')
        try {
            setLoadings(true)
            toast.dismiss(loading)
            await googleSignIn()
            navigate(path)
            // window.location.replace(path)
            // toast.success('Successfully Logged In!!!');
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

    const logout = async () => {
        const loading = toast.loading('Please wait a minute...')
        try {
            toast.dismiss(loading)
            await logOut()
            toast.success('Successfully Log Out!!!');
        } catch {
            toast.dismiss(loading)
            alert("failed to log out")
        }
    }
    return (
        <div className="user-area-all-style sign-up-area ptb-100">
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
                                            <Form.Control type="email" placeholder="Enter Email" {...register("email")} />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <Form.Group  >
                                            <Form.Control type="password" placeholder="Enter Password" {...register("password", {
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
                                            <Form.Label for="chb1">Remember Me</Form.Label>
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
                                            <Link to='/s'>Sign Up</Link>
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
                {user?.email}
                <button onClick={logout}>logOUt</button>
            </Container>
        </div>
    );
};

export default LoginPage;