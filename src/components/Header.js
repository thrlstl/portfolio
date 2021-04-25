import React, { useContext } from 'react'
import CustomIcon from './CustomIcon'
import ThemeContext from '../contexts/ThemeContext'
import isMobileContext from '../contexts/isMobileContext'

function Header() {

    const theme = useContext(ThemeContext)
    const isMobile = useContext(isMobileContext)
    const separator = '//'

    return (
        <div className='header' theme={theme}>
            {!isMobile ? <CustomIcon /> : null}
            <div className='header-content'>
                <span className='header-text-container'>
                    <span className='header-name'>Matthew Steele</span>
                    <span className='header-separator'>{separator}</span>
                    <span className='header-title'>Software Engineer</span>
                </span>
            </div>
        </div>
    )
}

export default Header;