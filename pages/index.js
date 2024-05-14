'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const router = useRouter();

  const emailhandler = (e)=>{
    setEmail(e.target.value);
  }
  const passwordhandler = (e)=>{
    setPassword(e.target.value);
  }

  

  useEffect(()=>{
    localStorage.setItem("loginStatus", loginStatus);
  },[loginStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.length <= 0 || password.length <= 0){
      setError(true);
    }else{
      localStorage.setItem("user", JSON.stringify({email, password}))
      setError(false);
      setLoginStatus(true);
      setEmail("");
      setPassword("");
      router.push("./login")
    }
  }

  return (
    <div className='register'>
      <h2>Register</h2>
      <form className='sign-up-form' onSubmit={handleSubmit}>
      { error ? (<p className='error-para'>"Email or password isn't entered!"</p>) : null}
        
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' value={email} onChange={emailhandler}/>
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' value={password} onChange={passwordhandler}/>
        </div>
        <button type='submit' className='register-btn'>
          Register
        </button>
      </form>
      <div>
        Already have an account?
        <Link href='./login'>
          <button className='login-link'>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
