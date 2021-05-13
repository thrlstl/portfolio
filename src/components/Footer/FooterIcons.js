import React from 'react'
import CustomIcon from '../CustomIcon'
import Links from '../Header/Links'
import ThemeToggle from '../Footer/ThemeToggle'

function FooterIcons() {
    return(
        <div className='menu-item'>
            <CustomIcon />
            <Links />
            <ThemeToggle />
        </div>
    )
}

export default FooterIcons;