import React, { useContext } from 'react';
import { AuthContax } from '../../Contax/UserContax';

const About = () => {
    const {user} = useContext(AuthContax)
    return (
        <div>
            <h1>this is about</h1>
            <h4>{user.email}</h4>
        </div>
    );
};

export default About;