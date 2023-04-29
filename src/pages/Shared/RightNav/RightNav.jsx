import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import './RightNav.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';


const RightNav = () => {
    const {signInWithGoogle} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.error(error.message)
        })
    }
    return (
        <div>
            <h5 className='mb-4 '>Login With</h5>
            <Button onClick={handleGoogleLogin} variant="outline-primary w-100"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary w-100 mt-2"> <FaGithub /> Login with Github</Button>
            <div className='mt-5'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF /> Facebook </ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='create-news-container text-white text-center p-5'>
                <h2 className='  '>Create an Amazing Newspaper</h2>
                <p className='py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn btn-danger rounded-0'>Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;