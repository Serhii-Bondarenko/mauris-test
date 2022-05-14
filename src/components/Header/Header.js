import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {

    const { pathname } = useLocation();

    return (
        <header className='header'>
            {
                pathname.includes('date') &&
                <Link className='chevron' to="/"><i className='fas fa-chevron-left'/></Link>
            }
            <Link to='/'>
                SUPER FILM
            </Link>
        </header>
    );
};

export { Header };