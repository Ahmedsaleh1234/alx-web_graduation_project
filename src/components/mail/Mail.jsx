import React from 'react'
import './mail.css'

const Mail = () => {
  return (
    <div className='email'>
        <h1>Get Exclusive offer on your email</h1>
        <p>Subscribe and stay updated</p>
        <div>
            <input type="email" placeholder='enter your email' />
            <button>SubScribe</button>
        </div>

    </div>
  )
}

export default Mail