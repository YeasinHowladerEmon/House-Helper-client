import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate , useLocation  } from "react-router-dom";
import swal from 'sweetalert';
import { useAuth } from '../../Hooks/useAuth/useAuth';
import '../Sass/Styled-Sass/SignupPage.scss'

const RegisterPage = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const [loadings, setLoadings] = useState(false);
    const { signup, user, googleSignIn, logOut } = useAuth();


    // let navigate = useNavigate();
    // let location = useLocation();
    // const { path } = location.state || { path: "/" };
    
    // console.log(path);
    // console.log("location", location.state);

    // console.log({ navigate, location });


    const handleGoogle = async () => {
        const loading = toast.loading('Please wait a minute...')
        try {
            setLoadings(true)
            toast.dismiss(loading)
            await googleSignIn() 
            // navigate(path)
            // window.location.replace(path)          
        } catch {
            toast.dismiss(loading)
            swal('Failed!', 'Something went wrong! Please try again', 'error')
        }
    }
    const onSubmit = async data => {
        const { name, email, password } = data;
        console.log(data);
        const loading = toast.loading('Please wait a minute...')
        try {
            setLoadings(true)
            toast.dismiss(loading)
            await signup(name, email, password).then(res => res.name = name).catch(err => {
                toast.dismiss(loading);
                toast.error(err.message);
            })
            // navigate(path)
        } catch {
            toast.dismiss(loading)
            swal('Failed!', 'Something went wrong! Please try again', 'error')
        }
    }

    const logout = async () => {
        try {
            await logOut()
        } catch {
            alert("failed to log out")
        }
    }
    return (
        <div className="user-area-all-style sign-up-area ptb-100">
            <Container>
                <div className="section-title">
                    <h1>Create An Account</h1>
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
                                    <Col lg={6} md={6} sm={12}>
                                        <Form.Group  >
                                            <Form.Control type="text" placeholder="First Name" {...register("first")} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <Form.Group >
                                            <Form.Control type="text" placeholder="Last Name" {...register("last")} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Enter Your Username" {...register("name")} />
                                        </Form.Group>
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
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <Form.Group>
                                            <Form.Control type="password" placeholder="Confirm your Password"
                                                {...register("confirm_password",
                                                    {
                                                        validate: (value) => {
                                                            if (value === getValues('password')) { return true } else {
                                                                return <span>Password fields don't match</span>
                                                            }
                                                        },
                                                        required: "password required",
                                                        minLength: {
                                                            value: 6,
                                                            message: "Password must have at least 8 characters"
                                                        }
                                                    }
                                                )} />
                                            {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} sm={12} xs={12} className="form-condition">
                                        <div className="agree-label">
                                            <Form.Check id="chb1" type="checkbox" {...register("checkbox", { required: true })}
                                            />
                                            <Form.Label for="chb1">I agree with House-Helper {" "}
                                                <Link>Privacy Policy</Link>
                                            </Form.Label>
                                        </div>
                                        <div className="agree-label" >
                                            <Form.Check type="checkbox" id="chb2" {...register("checkbox1", { required: true })}
                                            />
                                            <Form.Label for="chb2">I agree with House-Helper {" "}
                                                <Link>Term Condition</Link>
                                            </Form.Label>
                                        </div>
                                    </Col>
                                    {errors.checkbox && <Alert variant="danger">Please clicked the checkbox</Alert>}
                                    {errors.checkbox1 && <Alert variant="danger">Please clicked the checkbox</Alert>}
                                    <Col style={{ marginTop: "15px" }} md={12} sm={12}>
                                        <Button disabled={loadings} className="default-btn btn-two" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <p className="account-desc">
                                            Already have an account?{" "}
                                            <Link to="/login">Login</Link>
                                        </p>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="sign-up-img"></div>
                    </Col>
                </Row>
                {user?.email}
                <button onClick={logout}>logOUt</button>
            </Container>
        </div>
    );
};

export default RegisterPage;