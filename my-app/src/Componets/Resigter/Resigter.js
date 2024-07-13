import React, { useState } from 'react'
import NavBar from '../Nav-Bar/NavBar'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button';

const intialState={
  userName: '',
  Email: '',
  Password: '',
  ConfirmPassword:''
}

const Resigter = () => {
const [User,setUser]=useState(intialState)  
const[erros,setErrors]=useState({})

const Validate=()=>{
  let formError={};
  if(!User.userName){
    formError.userName='UserName is required'
  }
  if(!User.Email){
    formError.Email='Email is required'
  }else if(! /\S+@\S+.\S/.test(User.Email)){
    formError.Email='Email is unvalid'
  }
  if(!User.Password){
    formError.Password='Password is reqired'
  }else if(User.Password.length<8){
    formError.Password='Your Password less than 8 Characters'
  }else if( ! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.,/,!,@,#,$,%,^,&,*])/.test(User.Password))
    {
      formError.Password='Your Password should have these [a-z]+[A-Z]+[0-9]+[.,/,!,@,#,$,%,^,&,*] '
    }
  if(User.Password !== User.ConfirmPassword){
    formError.ConfirmPassword='ConfirmPassword Not Match to Password'
  }
  return formError
}
const submit=(e)=>{
  e.preventDefault()
  const FormErrors =Validate();
  if(Object.keys(FormErrors).length === 0){
    console.log('Form is Ready', User)
    setUser({...intialState})
    setErrors({})
  }else{
    setErrors(FormErrors)
    console.log(erros)
  }
}
  
  return (
    <>
      <NavBar/>
      <form className='form' onSubmit={submit}>
        <div className='userName'>
        <label>UserName*</label>
        <input type='text' placeholder='UserName' required value={User.userName} onChange={(e)=>setUser({...User,userName: e.target.value})} />
        <p>{erros.userName}</p>
        </div>

        <div className='email'>
        <label>Email*</label>
        <input type='email' placeholder='Enter Your Email' required value={User.Email} onChange={(e)=>setUser({...User,Email: e.target.value})} />
        <p>{erros.Email}</p>
        </div>

        <div className='password'>
        <label>Password*</label>
        <input type='password' placeholder='Password' required value={User.Password} onChange={(e)=>setUser({...User,Password: e.target.value})} />
        <p>{erros.Password}</p>
        </div>

        <div className='confirm'>
        <label>Confirm Password*</label>
        <input type='password' placeholder='Confirm Password' required value={User.ConfirmPassword} onChange={(e)=>setUser({...User,ConfirmPassword: e.target.value})} />
        <p>{erros.ConfirmPassword}</p>
        </div>

        <Button variant="danger" className='view' id='sign' type='submit' >SignUp</Button>
      </form>
      <Footer/>
    </>
  )
}

export default Resigter
