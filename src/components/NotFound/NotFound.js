import React from 'react';
import {Link} from 'react-router-dom'


const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>This page is not found</h2>
            <p>Check your browser internet. Try again</p>
            <Link to="/shop">Go To Back Home Page</Link>
        </div>
    );
};

export default NotFound;