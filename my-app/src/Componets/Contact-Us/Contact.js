import React from 'react'
import Footer from '../Footer/Footer';
import { MdLocationOn } from "react-icons/md"
import { IoIosMail } from "react-icons/io"
import { FaMobileScreen } from "react-icons/fa6";
import NavBar from '../Nav-Bar/NavBar';

const Contact = () => {
  return (
    <>
      <NavBar/>

      <div className='contact'>
            <h3>Contact Info</h3>
            <h5><MdLocationOn size={30}/>123 Street, NewYork, USA</h5>
            <h5><IoIosMail size={30} />   info@sitename.com </h5>
            <h5><FaMobileScreen size={30} />   + 457 789 789 65</h5>
        </div>

      <Footer/>
    </>
  )
}

export default Contact;