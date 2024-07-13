import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiMoney } from "react-icons/tfi";
import { MdPayment } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const Section3 = () => {
  return (
    <>
      <div id='section3'>
        <div className='section3'>
            <CiDeliveryTruck className='iconsec3' size={70}/>
            <div>
                <h2>Free Delivery</h2>
                <p>For Your First Order</p>
            </div>
        </div>
        <div className='section3'>
            <TfiMoney className='iconsec3' size={70}/>
            <div>
                <h2>Money Back</h2>
                <p>Within 14 Days</p>
            </div>
        </div>
        <div className='section3'>
            <MdPayment className='iconsec3' size={70}/>
            <div>
                <h2>Payment Security</h2>
                <p>Safe Payment</p>
            </div>
        </div>
        <div className='section3'>
            <MdOutlineSupportAgent className='iconsec3' size={70}/>
            <div>
            <h2>24/7</h2>
            <p>Customer Support</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Section3
