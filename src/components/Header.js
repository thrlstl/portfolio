import React, { useContext } from 'react'
import headerIcon from '../assets/images/m-icon.png'
import ThemeContext from '../contexts/ThemeContext'
import isMobileContext from '../contexts/isMobileContext'

function Header() {

    const theme = useContext(ThemeContext)
    const isMobile = useContext(isMobileContext)
    const separator = '//'

    console.log(isMobile)

    const renderIcon = () => {
        return isMobile
        ? <img alt='header-icon' className='header-icon' src={headerIcon}></img>
        : null
    }

    return (
        <div theme={theme} className='header'>
            {renderIcon()}
            <div className='header-content'>
                    <span className='header-name'>Matthew Steele</span>
                    <span className='header-separator'>{separator}</span>
                    <span className='header-title'>Software Engineer</span>
            </div>
            {/* <div className='links-container'>
                <img alt='tbd' className='icon'></img>
            </div> */}
        </div>
    )
}

export default Header;