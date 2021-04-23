import React from 'react'
import MenuIcon from '../assets/images/hamburger-menu-icon.png'

function MenuButton() {
    return(
        <div className='menu-button-container'>
            <img className='menu-button' src={MenuIcon}></img>
        </div>
    )
}

export default MenuButton;