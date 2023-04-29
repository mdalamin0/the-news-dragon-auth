import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <Container className='mt-5'>
            <h3>Our Term Conditions</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis provident labore atque amet perferendis ipsam pariatur facere obcaecati odit asperiores distinctio, reiciendis officiis soluta voluptatum nihil iure ratione recusandae reprehenderit quidem quod. Officia iure reprehenderit quia, ipsam ut est? Aliquid saepe maxime, hic sequi maiores deleniti tenetur optio, iure alias facilis dolorem porro praesentium laboriosam natus libero? Similique ex corrupti corporis pariatur, et dolorum eos nisi harum, quis fugiat magnam nam. Sapiente facere facilis hic animi. Fugiat atque amet et incidunt expedita! Ea dolore numquam reiciendis in nobis dolores minima quaerat placeat impedit odit unde qui, obcaecati similique dolorum.</p>
            <p>Go Back <Link to = '/register'>Register</Link> </p>
        </Container>
    );
};

export default TermsConditions;