import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='page'>
        <div className='Sign'>
            <h1>Sign up</h1>
            <p>please fill this form to create an account</p>
            <hr/>
            <div className='fields'>
                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder='Your Name' name='name' />
                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder='Your email' name='email'/>
                <label htmlFor="pass"><b>Password</b></label>
                <input type="password" placeholder='Your Password' name='pass'/>
                
                <p>By creating an account you agree to our
                Terms & Privacy.</p>


            </div>
            <button className='btn'>Continue</button>
            <div className='login'>
            <p className='pragph'>Aleady have an acount? <span>login</span></p>

        </div>
        </div>
        
    </div>
  )
}

export default Login