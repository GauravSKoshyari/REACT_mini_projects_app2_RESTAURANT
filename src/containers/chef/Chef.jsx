import React from 'react'
import "./Chef.css"
import { images } from '../../constants'
import { Subheading } from '../../components'

const About = () => {
    return (
        <div className='chef section__padding'>
            <div className="chef__img">
                <img src={images.chef} alt="chef-image" />
            </div>
            <div className="chef__info">
                <Subheading text="Chef's Word" />
                <h1 className='font__cormorant'>What We Believe In</h1>
                <div className="quote">
                    <img src={images.quote} alt="quote-image" />
                    <p className='font__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit</p>
                </div>
                <p className='font__opensans' style={{ marginBottom: "2rem" }}>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
                <div className="chef__nameAndDesig">
                    <p className='font__cormorant' style={{ fontSize: "32px" }}>Kevin Luo</p>
                    <p className='font__opensans'>Chef & Founder</p>
                </div>
                <div className="chef__sign">
                    <img src={images.sign} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About