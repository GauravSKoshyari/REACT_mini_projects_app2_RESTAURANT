import React from 'react'
import "./footer.css"
import { Subheading } from '../../components'
import { images } from '../../constants'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='app__footer' id='login'>
            <div className="app__footer-bg">
                <div className="app__footer-bg_black"></div>
                <div className="app__footer-bg_img"></div>
            </div>
            <div className="app__footer-content section__padding">
                <div className="app__footer-newsletter">
                    <Subheading text="Newsletter" />
                    <h1 className='font__cormorant'>Subscribe To Our Newsletter</h1>
                    <p className='font__opensans'>And Never Miss Latest Updates!</p>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email address' />
                        <button className="custom-button">Subscribe</button>
                    </div>
                </div>
                <div className="app__footer-lower ">
                    <div className="footer-lower_contact">
                        <h3 className='font__cormorant'>Contact Us</h3>
                        <p className='font__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
                        <p className='font__opensans'>+1 212-344-1230</p>
                        <p className='font__opensans'>+1 212-555-1230</p>
                    </div>
                    <div className="footer-lower_gericht">
                        <img src={images.gericht} alt="gericht" />
                        <Subheading text='"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."' />
                        <div className="footer-lower_socials">
                            <FiFacebook />
                            <FiTwitter />
                            <FiInstagram />

                        </div>
                    </div>
                    <div className="footer-lower_workingHrs">
                        <h3 className='font__cormorant'>Working Hours</h3>
                        <div className="m-f">
                            <p className='font__opensans'>Monday-Friday:</p>
                            <p className='font__opensans'>08:00 Am - 12:00 Am</p>
                        </div>
                        <div className="sat-sun">
                            <p className='font__opensans'>Saturday-Sunday:</p>
                            <p className='font__opensans'>07:00 Am - 11:00 Pm</p>
                        </div>
                    </div>
                </div>

                <div className="app__footer-copyright">
                    <p className='font__opensans'>2023 Gericht. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer