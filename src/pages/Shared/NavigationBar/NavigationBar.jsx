import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.error(error.message)
        })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex align-items-center">
                            <ActiveLink to="/category/0">Home</ActiveLink>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to='/login'>
                                    <Button variant="secondary rounded-0"> Login </Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;