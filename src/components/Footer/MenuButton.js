import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import IconDark from '../../assets/images/menu-icon-dark.png'
import IconLight from '../../assets/images/menu-icon-light.png'

function MenuButton(props) {

    const theme = useContext(ThemeContext)
    const [iconType, setIconType] = useState(null)

    useEffect(() => {
        setIconType(() => {
            return theme === 'light'
            ? IconDark
            : IconLight
        })
    }, [theme])

    return(
        <div 
        className='menu-button-container'>
            <img 
            onClick={() => props.toggleMenu()}
            className='menu-button'
            src={iconType}
            alt='menu-icon'></img>
        </div>
    )
}

export default MenuButton;