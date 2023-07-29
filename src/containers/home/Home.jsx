import React from 'react'
import { images } from '../../constants'
import { Subheading } from '../../components'
import "./home.css"

const Home = () => {
    return (
        <div className='app__home section__padding' id="home">
            <div className="app__home-content">
                <Subheading text="Chase The New Flavour" />
                <h1 className='font__cormorant'>The Key To Fine Dining</h1>
                <p className='font__opensans'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
                <button className="custom-button">Explore Menu</button>
            </div>
            <div className="app__home-image">
                <img src={images.welcome} alt='welcome image' />
            </div>
        </div>
    )
}

export default Home