import React from 'react';

import './Error.css';

const Error = ({ message }) => {

    return (
        <div className='error'>
            <h3> { message } </h3>
        </div>
    );
};

export { Error };