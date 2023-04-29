import React from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png'
import Marquee from "react-fast-marquee";
import { Alert, Button, Container} from 'react-bootstrap';


const Header = () => {
    return (
        <Container>
            <div className="text-center mt-5">
                <img className='w-50 mb-3' src={logo} alt="" />
                <p className='text-secondary mb-1'><small>Journalism Without Fear or Favour</small></p>
                <p className='text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div >

                <Alert className='d-flex border-0 rounded-0' variant='secondary'>
                    <div className='me-2'>
                        <Button variant="danger rounded-0">Latest</Button>
                    </div>
                    <Marquee pauseOnHover={true} speed={80}>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </Alert>
            </div>
        </Container>
    );
};

export default Header;