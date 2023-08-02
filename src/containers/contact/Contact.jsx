import React from 'react'
import "./contact.css"
import { images } from '../../constants'
import { Subheading } from '../../components'

const Contact = () => {
    return (
        <div className='app__contact section__padding'>
            <div className="app__contact-info">
                <Subheading text="Contact" />
                <h1 className="font__cormorant">Find Us</h1>
                <p className="font__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                <p className="font__cormorant">Opening Hours</p>
                <div className="app__contact-timing">
                    <p className="font__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
                    <p className="font__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
                </div>
                <button className="custom-button">Visit Us</button>
            </div>
            <div className="app__contact-img">
                <img src={images.findus} alt="find us image" />
            </div>
        </div>
    )
}

export default Contact