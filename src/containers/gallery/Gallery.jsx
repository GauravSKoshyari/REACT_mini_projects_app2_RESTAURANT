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
                    {
                        [images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((img, index) => (
                            <div className="imgSlider_img" key={index}>
                                <img src={img} alt="image" />
                                <div className="img__overlay">
                                    <BsInstagram fontSize={32} />
                                </div>
                            </div>

                        ))
                    }

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