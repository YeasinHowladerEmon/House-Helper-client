import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useAuth } from '../../Hooks/useAuth/useAuth';
import '../Sass/Styled-Sass/SignupPage.scss'

const ResetPassword = () => {
    const { resetPassword } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const loading = toast.loading('Please wait a minute...')
        try {
            toast.dismiss(loading)
            await resetPassword(data.email).catch(err => {
                toast.dismiss(loading);
                toast.error(err.message);
            })
            toast.success('Successfully Reset Please Check Your mail box !!!');
        } catch {
            toast.dismiss(loading)
            swal('Failed!', 'Something went wrong! Please try again', 'error')
        }

    }
    return (
        <div className="user-area-all-style recover-password-area ptb-100">
            <Container>
                <Row>
                    <Col>
                        <div className="contact-form-action">
                            <div className="form-heading text-center">
                                <h3 className="form-title">Reset Password</h3>
                                <p className="reset-desc">Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password <Link to="contact-us">contact us.</Link></p>
                            </div>
                            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col className="col-12">
                                        <Form.Group>
                                            <Form.Control type="email" placeholder="Enter Email" {...register("email")} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <Link to="/login" className="now-login">Login Your Account</Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <p className="register-not">Not a Member ? <Link to="/sign-up">Sign Up</Link></p>
                                    </Col>
                                    <Col className="col-12">
                                        <Button className="default-btn btn-two" type="submit">Reset Password</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ResetPassword;