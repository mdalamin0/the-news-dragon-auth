import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const {signInUser, loading} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true})
            form.reset()
        })
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <Container className='w-25 mx-auto mt-5 '>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="secondary w-100" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                        Don't Have an Account? <Link to = "/register">Register</Link>
                    </Form.Text>
                <Form.Text className="text-success">
                        
                    </Form.Text>
                    <Form.Text className="text-danger">
                        
                    </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;