import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContax } from '../../Contax/UserContax';
import './Login.css'

const Login = () => {
    const {logIn} = useContext(AuthContax)
    const navigate = useNavigate()
    const location =useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value 

 
        logIn(email, password)
        .then(res => {
            const user = res.user
            console.log(user)
            form.reset()
            navigate(from)
        })
        .catch(error => console.error(error))
        
    }


    return (
  
            <div className='login-container drop-shadow-lg'>
               <h1 className='mt-5 text-center text-3xl font-semibold'>Login</h1>
               
                <form onSubmit={handleLogin} className='flex flex-col mt-10 '>
                    <input className='w-2/3 mx-auto border mb-10 p-3 rounded-md' type="email" name="email" placeholder='enter your email ' />
                    <input className='w-2/3 mx-auto border mb-10 p-3 rounded-md' type="password" name="password" placeholder='password' />
                    <button className='bg-orange-200 hover:bg-orange-300 text-lg font-bold w-2/3 mx-auto border mb-5 p-3 rounded-md' >Log in</button>
                    <p className='text-center'>New to Ema-Johan? <Link className='text-orange-400' to="/registar">Create New Account</Link></p>
                    <p className='text-2xl  my-5 text-center'>Or</p>
                    <button className=' google text-lg font-bold w-2/3 mx-auto  mb-9 p-3 rounded-md' > Continue with Google</button>

                </form>
                

            </div>
   
    );
};

export default Login;