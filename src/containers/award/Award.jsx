import React from 'react'
import "./award.css"
import { data, images } from '../../constants'
import { Subheading } from '../../components'

const Award = () => {
    return (
        <div className='app__award section__padding' id='awards'>
            <div className="app__award-info">
                <Subheading text="Awards & Recognition" />
                <h1 className='font__cormorant'>Our Laurels</h1>
                <div className="app__award-lists">
                    {data.awards.map((award) => (
                        <div className="award">
                            <div className="award__img">
                                <img src={award.imgUrl} alt="award immage" />
                            </div>
                            <div className="award__info">
                                <h2 className='font__cormorant'>{award.title}</h2>
                                <p className='font__opensans'>{award.subtitle}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="app__award-img">
                <img src={images.laurels} alt="awards and recognitions" />
            </div>
        </div>
    )
}

export default Award

