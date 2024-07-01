import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Sign = () => {
    const [email, setemail ] = useState()
    const [pass, setpass] = useState()
    const navigate = useNavigate()
    const handle = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/auth-login', {email, pass})
      .then(result => {
        console.log(result)
        if(result.data === 'good'){
            alert('Login successful!')
            navigate('/home')
          
        }
    else {
        alert('incorrect password or email try again')
    }}
    )
      .catch(err => console.log(err))
    }
  return (
    <div className='page'>
        <div className='Sign'>
        <h1>Login</h1>
        <hr />
        <form onSubmit={handle}>
            <div className='fields'>
            <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder='Your email' name='email'
                onChange={(e) => setemail(e.target.value)}/>
                <label htmlFor="pass"><b>Password</b></label>
                <input type="password" placeholder='Your Password' name='pass'
                onChange={(e) => setpass(e.target.value)}/>
                <button type='submit' className='btn'>Login</button>
            </div>
            
        </form>
        <p className='pragph'>Dont have an acount?
             <NavLink to ='/auth' ><span>sign up</span></NavLink></p>
        </div>
        
    </div>
  )
}

export default Sign