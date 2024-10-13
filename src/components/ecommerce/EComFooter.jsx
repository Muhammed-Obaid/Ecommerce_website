import React from 'react'
import { FaTruckMoving } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoShieldHalfOutline } from "react-icons/io5";

import { BiSupport } from "react-icons/bi";


const EComFooter = () => {
    return (
        <div className='footer-top'>
            <div className='footer-box'>
                <FaTruckMoving className='footer-icon' />
                <h2>Worldwide Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque bha </p>
            </div>
            <div className='footer-box'>
                <MdOutlinePayment className='footer-icon' />
                <h2>Safe Payment</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque bha </p>
            </div>
            <div className='footer-box'>
                <IoShieldHalfOutline className='footer-icon' />
                <h2>Shop With Confidence</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque bha </p>
            </div>
            <div className='footer-box'>
                <BiSupport className='footer-icon' />
                <h2>24/7 Support</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque bha </p>
            </div>
        </div>
    )
}

export default EComFooter
