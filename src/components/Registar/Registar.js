import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContax } from '../../Contax/UserContax';
import './Registar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Registar = () => {
   
    const [error, setError] = useState('')
    const {signUpusers} = useContext(AuthContax)

    const handelRegistar = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const name = form.name.value 
        const password = form.password.value 
        const confirm = form.confirm.value 
        console.log(name, email, password, confirm)

        if(confirm !== password){
            setError('Password did not match')
            return

        }

        signUpusers(email, password)
        .then(res => {
            const user = res.user
            console.log(user)
            form.reset()
        })
        .catch(error => console.error(error))
    }


    return (
        <div>
            <div className='registar-container drop-shadow-lg'>
               <h1 className=' mt-5 text-center text-3xl font-semibold'>Sign up</h1>
    
                <form onSubmit={handelRegistar} className=' inp flex flex-col mt-10 '>
                    <input className='w-2/3 mx-auto  mb-10 p-3 rounded-md' type="text" name="name" placeholder='enter your name ' />
                    <input className='w-2/3 mx-auto  mb-10 p-3 rounded-md' type="email" name="email" placeholder='enter your email ' />
                    <input className='w-2/3 mx-auto  mb-10 p-3 rounded-md' type="password" name="password" placeholder='password' />
                    <input className='w-2/3 mx-auto  mb-2 p-3 rounded-md'  type="password" name="confirm" placeholder='confirm password ' />
                    <button className='bg-orange-200 hover:bg-orange-300 text-lg font-bold w-2/3 mx-auto  mb-5 p-3 rounded-md' >Sign Up</button>
                    <p className='text-center'>Do you have account? <Link className='text-orange-400' to="/login">Login</Link></p>
                    <p className='text-2xl  my-3 text-center'>Or</p>
                    <button className=' google text-lg font-bold w-2/3 mx-auto  mb-9 p-3 rounded-md' >  Continue with Google</button>
                </form>
                <p className='text-red-700 text-center mb-10'>{error}</p>
                
            </div>
        </div>
    );
};

export default Registar;