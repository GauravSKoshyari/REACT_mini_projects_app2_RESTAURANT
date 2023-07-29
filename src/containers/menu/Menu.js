import React from 'react'
import "./Menu.css"
import { Subheading } from '../../components'
import { data, images } from '../../constants'

const Drinks = ({ data, classname }) => {
    return (

        <div className={classname}>
            {data.map((wine, index) => (
                <div className="row" key={wine.title + index}>
                    <div className="row__info">
                        <p className='font__cormorant'>{wine.title}</p>
                        <div />
                        <p className='font__cormorant'>{wine.price}</p>
                    </div>
                    <div className="row__tags">
                        <p className='font__opensans'>{wine.tags}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}


const Menu = () => {
    return (
        <div className='menu section__padding' id='menu'>
            <Subheading text="Menu That Fits Your Palatte" />
            <h1 className='font__cormorant'>Today's Special</h1>
            <div className="menu__table">
                <div className="menu__table-wines">
                    <h1 className='font__cormorant'>Wine & Beer</h1>
                    <Drinks data={data.wines} classname="wines" />

                </div>
                <div className="menu__image">
                    <img src={images.menu} alt="menu-image" />
                </div>
                <div className="menu__table-cocktails">
                    <h1 className='font__cormorant'>Cocktails</h1>

                    <Drinks data={data.cocktails} classname="cocktails" />

                </div>
            </div>
            <div className="button" style={{ marginTop: "3rem" }}>  <button className="custom-button">View More</button> </div>

        </div>
    )
}

export default Menu