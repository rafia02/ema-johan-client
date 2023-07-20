import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import {NavLink} from 'react-router-dom'
import { AuthContax } from '../../Contax/UserContax';

const Header = () => {
    const {user, logOut} = useContext(AuthContax)


    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error=> console.error(error))
    }

    return (
        <nav className='headerStyle'>
         <img src={logo} alt="" />   
         <div>
            <NavLink to="/">Shop</NavLink>
            <NavLink to="orders">Orders</NavLink>
            <NavLink to="inventory">Inventory</NavLink>
            <NavLink to="about">About</NavLink>
            { user?.uid ? <NavLink onClick={handleLogOut} to="login">Logout</NavLink> 
                :
                <>
                <NavLink to="login">Login</NavLink>
                <NavLink to="registar">Registar</NavLink>
                </>

            }
         </div>
        </nav>
    );
};

export default Header;