import React from 'react'
import MenuIcon from '../assets/images/hamburger-menu-icon.png'

function MenuButton(props) {

    return(
        <div 
        className='menu-button-container'>
            <img 
            onClick={() => props.toggleMenu()}
            className='menu-button'
            src={MenuIcon}
            alt='menu-icon'></img>
        </div>
    )
}

export default MenuButton;