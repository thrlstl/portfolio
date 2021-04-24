import React, { useContext } from 'react'
import headerIcon from '../assets/images/m-icon.png'
import ThemeContext from '../contexts/ThemeContext'

function Header() {

    const theme = useContext(ThemeContext)

    return (
        <div theme={theme} className='header'>
            <img alt='header-icon' className='header-icon' src={headerIcon}></img>
            <div className='header-content'>
                    <span className='header-name'>Matthew Steele</span>
                    <span className='header-separator'>/</span>
                    <span className='header-title'>Software Engineer</span>
            </div>
            {/* <div className='links-container'>
                <img alt='tbd' className='icon'></img>
            </div> */}
        </div>
    )
}

export default Header;