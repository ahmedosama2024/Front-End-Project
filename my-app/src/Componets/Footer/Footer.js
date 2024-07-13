import React from 'react'
import img from './airbnb.png'
import { MdLocationOn } from "react-icons/md"
import { IoIosMail } from "react-icons/io"
import { FaMobileScreen } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaXTwitter,FaPinterest,FaCcDiscover } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div id='Footer'>
      <div>
        <img src={img} alt=''/>
        <h3 className='Brand'>Shopping<span>Express</span></h3>
      </div>
      <div className='secondside'>
        <div className='contactinf'>
            <h3>Contact Info</h3>
            <h5><MdLocationOn size={30}/>123 Street, NewYork, USA</h5>
            <h5><IoIosMail size={30} />   info@sitename.com </h5>
            <h5><FaMobileScreen size={30} />   + 457 789 789 65</h5>
        </div>
        <div className='contactinf'>
            <Link to='/products'><h5>Catagory</h5></Link>
            <Link to='/products'><h6>Men's Clothes</h6></Link>
            <Link to='/products'><h6>Women'Clothes</h6></Link>
            <Link to='/products'><h6>Kids's Clothes</h6></Link>
            <Link to='/products'><h6>Bags</h6></Link>
            <Link to='/products'><h6>Electronics</h6></Link>
            <Link to='/about' className='h3a'><h5>About</h5></Link>
            <Link to='/login' className='h3a'><h5>Login</h5></Link>
            <Link to='/resigter' className='h3a'><h5>Resigter</h5></Link>
        </div>
        <div>
            <Link to='/not-found'><FaFacebookF size={30}/></Link>
            <Link to='/not-found'><FaInstagram size={30}/></Link>
            <Link to='/not-found'><FaXTwitter size={30}/></Link>
            <Link to='/not-found'><FaPinterest size={30}/></Link>
        </div>
      </div>
    </div>
    <div className='last'>
    <h6>&copy; 2024 All Rights Reserved by Bestwebcreator </h6>
    <div><SiVisa size={50} className='ic'/><FaCcPaypal size={50} className='ic'/><FaCcDiscover size={50} className='ic'/></div>
    </div>
    </>
  )
}

export default Footer;
