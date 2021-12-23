import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useAuth } from '../../../Hooks/useAuth/useAuth';
import '../../Sass/Styled-Sass/Profile.scss'

const Profile = () => {
    const { user, logOut } = useAuth()
    let navigate = useNavigate();
    const handleLogout = async () => {
        const loading = toast.loading('Please wait a minute...')
        try {
            toast.dismiss(loading)
            await logOut()
            navigate('/')
            toast.success('Successfully Log Out!!!');
        } catch {
            toast.dismiss(loading)
            alert("failed to log out")
        }
    }
    // console.log(user.email);
    return (
        <section className="profile-area ptb-100">
            <Container>
                <div className="card_inner d-flex justify-content-center">
                    <div className="card_content">
                        <Row className="information">
                            <Col md={6} lg={6} sm={12} className="padding-right">
                                {
                                    user.photoURL === null ? <img src="https://i.ibb.co/5GzXkwq/user.png" alt="" width="200" height="100" /> : <img src={user.photoURL} alt={user.photoURL} width="200" height="100" />
                                }
                            </Col>
                            <br />
                            <Col md={6} lg={6} sm={12} className="information-body">
                                <h4>Name:{" "}{user.displayName}</h4>
                                <p>Email:{" "}{user.email}</p>
                                <Button className="btn default-btn" onClick={handleLogout}>Log Out</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Profile;