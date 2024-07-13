import React from 'react'
import NavBar from '../Nav-Bar/NavBar'
import Footer from '../Footer/Footer'
import img from './error-1406588-1188708.webp'

const NotFound = () => {
  return (
    <>
      <NavBar/>

      <div className='error'>
      <img src={img}alt=''/>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      </div>

      <Footer/>
    </>
  )
}

export default NotFound
