import React, { useState } from 'react';

const Login = () => {
    const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

 const submithandler = (e)=>{
      e.preventdefault();
      console.log(email);
      console.log(password);
  }
  return (
        <div className='form' onSubmit={submithandler}>
            <input value={email} placeholder='Enter your email' id='email' type='email' onChange={(e)=> setEmail(e.target.value)}></input>
            <input id='password' placeholder='Enter your password' value={password} type='password' onChange={(e)=> setEmail(e.target.value)}></input>
            <a href=''>Forgot password?</a>
            <button className='login-btn'>Log In</button>
        </div>
  )
}

export default Login;