import React from 'react'
import  Navbar from '../Nav-Bar/NavBar'
import Footer from  '../Footer/Footer'
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className='login'>
      <h1>SignIn</h1>
      <div className='input'>
      <input type='email' placeholder=' Enter You UserName'/>
      <input type='password' placeholder='Enter Your Password'/>
      </div>
      <Button variant="danger" className='view'>SignIn</Button>  
    </div>
    <Footer/>
    </>

)
}

export default Login
