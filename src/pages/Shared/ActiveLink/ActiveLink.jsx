import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({isActive}) => isActive ? 'text-primary' : 'text-decoration-none text-secondary'}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;