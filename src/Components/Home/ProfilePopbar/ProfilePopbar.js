import React from 'react';
import { Button, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useAuth } from '../../../Hooks/useAuth/useAuth';

const ProfilePopbar = () => {
    const { logOut, user } = useAuth()
    let navigate = useNavigate()
    const logout = async () => {
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
    const popover = (
        <Popover id={`popover-positioned-bottom`}>
            <Popover.Content>
                <strong className="text-center d-block">{user?.displayName}</strong>
                <strong className="text-center d-block">{user?.email}</strong>
                <div className="d-flex justify-content-center mt-1"><Button size="sm" className="default-btn" style={{
                    fontSize: "13px",
                    padding: "3px"
                }} onClick={logout}>Logout</Button></div>
            </Popover.Content>
        </Popover>
    )
    return (
        <>
            <OverlayTrigger
                trigger="click"
                rootClose
                key="bottom"
                placement="bottom"
                overlay={popover}
            >
                <Image
                    src={user.photoURL === null ? "https://i.ibb.co/5GzXkwq/user.png" : user?.photoURL}
                    width="40"
                    height="40"
                    roundedCircle
                    className="d-inline-block align-top"
                />
            </OverlayTrigger >
        </>
    );
};

export default ProfilePopbar;