import React from 'react'

const Footer = ({ cart }) => {
    return (
        <>

            <div className={`footer bottom  ${cart ? 'bottom' : ''}`}>
                <div className='footer-info'>
                    <h2>ShopPo</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit sequi accusantium ipsam placeat repellat? Esse consequatur </p>
                </div>
                <div className='footer-info'>
                    <h2>About Us</h2>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </div>
                <div className='footer-info'>
                    <h2>Help</h2>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Phone: +12 987654321</li>
                </div>
                <div className='footer-info'>
                    <h2>Contact Us</h2>
                    <li>70 Washington Square South, New York, NY 10012,United States</li>
                    <li>Email: obaidsultan12@gmail.com</li>
                    <li>Phone: +12 987654321</li>
                </div>

            </div>
            <div className='copy-right'>copyright © {new Date().getFullYear()} All Rights Reserved</div>
        </>
    )
}

export default Footer
