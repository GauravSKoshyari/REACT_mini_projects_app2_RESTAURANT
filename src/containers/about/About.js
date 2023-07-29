import React from 'react'
import "./about.css"
import { Subheading } from '../../components'
import { images } from '../../constants'


const About = () => {
    return (
        <div className='about section__padding' id='about'>
            <div className="about__bg">
                <img src={images.G} alt="" />
            </div>
            <div className="about__content">
                <div className="about__us">
                    <Subheading text="About Us" />
                    <p className='font__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                    <button className="custom-button">Know More</button>
                </div>
                <div className="about__knifeImage">
                    <img src={images.knife} alt="" />
                </div>
                <div className="about__history">
                    <Subheading text="Our History" />
                    <p className='font__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                    <button className="custom-button">Know More</button>
                </div>
            </div>
        </div>
    )
}

export default About