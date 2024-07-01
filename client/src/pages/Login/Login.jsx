import React, { useState } from 'react'
import axios from 'axios'

import './login.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const [name, setname] = useState()
  const [email, setemail ] = useState()
  const [pass, setpass] = useState()
  const navigate = useNavigate();
  const handle = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/auth', {name, email, pass})
    .then(result => {
      console.log(result)
      if(result.data === 'already exist'){
        alert('E-mail already registered!')
        navigate('/auth-login')
      }else {
        alert('ok good login to continue')
        navigate('/auth-login')
      }
    }
  )
    .catch(err => console.log(err))
  }
  return (
    <div className='page'>
        <div className='Sign'>
            <h1>Sign up</h1>
            <p>please fill this form to create an account</p>
            <hr/>
            <form onSubmit={handle}>
            <div className='fields'>
                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder='Your Name' name='name'
                onChange={(e) => setname(e.target.value)} />
                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder='Your email' name='email'
                onChange={(e) => setemail(e.target.value)}/>
                <label htmlFor="pass"><b>Password</b></label>
                <input type="password" placeholder='Your Password' name='pass'
                onChange={(e) => setpass(e.target.value)}/>
                
                <p>By creating an account you agree to our
                Terms & Privacy.</p>
                <button type='submit' className='btn'>Continue</button>

            </div>
            </form>
            
            <div className='login'>
            <p className='pragph'>Aleady have an acount?
               <NavLink to ='/auth-login' ><span>login</span></NavLink></p>

        </div>
        </div>
        
    </div>
  )
}

export default Login