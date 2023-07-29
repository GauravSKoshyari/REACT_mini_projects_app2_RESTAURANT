import React, { useState } from 'react'
import "./navbar.css"
import { images } from "../../constants"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from 'react-icons/md';


const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false)
    return (
        <div className='app__navbar font__opensans'>
            <div className="app__navbar-logo">
                <img src={images.gericht} alt='logo image' />
            </div>

            <div className="app__navbar-links">
                <p><a href='#home'>Home</a></p>
                <p><a href='#about'>About</a></p>
                <p><a href='#menu'>Menu</a></p>
                <p><a href='#awards'>Awards</a></p>
                <p><a href='#contact'>Contact</a></p>
            </div>

            <div className="app__navbar-login">
                <a href='#login'>Log In / Registration</a>
                <div></div>
                <a href='/'>Book Table</a>
            </div>
            <div className="app__navbar-hamburger">

                {showMenu ? "" : <GiHamburgerMenu size={27} onClick={() => setshowMenu(true)} />}

                {showMenu &&
                    <div className="app__navbar-hamburger_expand">
                        <div className="app__navbar-close">
                            <MdOutlineRestaurantMenu size={27} onClick={() => setshowMenu(false)} />
                        </div>
                        <div className="app__navbar-hamburger_links">
                            <p><a href='#home' onClick={() => setshowMenu(false)}>Home</a></p>
                            {/* <p><a href='#home'>Home</a></p> */}
                            <p><a href='#about' onClick={() => setshowMenu(false)}>About</a></p>
                            <p><a href='#menu' onClick={() => setshowMenu(false)}>Menu</a></p>
                            <p><a href='#awards' onClick={() => setshowMenu(false)}>Awards</a></p>
                            <p><a href='#contact' onClick={() => setshowMenu(false)}>Contact</a></p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar