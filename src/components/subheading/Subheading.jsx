import React from 'react'
import "./subheading.css"
import { images } from '../../constants'

const Subheading = ({ text }) => {
    return (
        <div className='subheading '>
            <p className='font__cormorant'>{text}</p>
            <img src={images.spoon} alt="spoon" />
        </div>
    )
}

export default Subheading