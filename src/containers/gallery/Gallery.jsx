import React, { useRef } from 'react'
import "./gallery.css"
import { Subheading } from '../../components'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';

const Gallery = () => {

    const sliderRef = useRef(null)

    const scroll = (direction) => {
        const slider = sliderRef.current
        if (direction === 'left') {
            slider.scrollLeft -= 300;
        } else {
            slider.scrollLeft += 300;
        }
    }


    return (
        <div className='app__gallery'>
            <div className="app__gallery-info">
                <Subheading text="Instagram" />
                <h1 className='font__cormorant' >Photo Gallery</h1>
                <p className='font__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
                <button className="custom-button">View More</button>
            </div>
            <div className="app__gallery-imgSlider_cover" >
                <div className="app__gallery-imgSlider" ref={sliderRef}>
                    <div className="imgSlider_img"><img src={images.gallery01} alt="image 1" /></div>
                    <div className="imgSlider_img"><img src={images.gallery02} alt="image 2" /></div>
                    <div className="imgSlider_img"><img src={images.gallery03} alt="image 3" /></div>
                    <div className="imgSlider_img"><img src={images.gallery04} alt="image 4" /></div>
                </div>
                <div className="app__gallery-arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll("left")} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll("right")} />
                </div>
            </div>

        </div>
    )
}

export default Gallery