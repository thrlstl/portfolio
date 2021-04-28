import React, { useContext } from 'react'
import CustomIcon from '../CustomIcon'
import Links from '../Header/Links'
import ThemeContext from '../../contexts/ThemeContext'
import isTableOrMobileContext from '../../contexts/isTabletOrMobileContext'

function Header() {

    const theme = useContext(ThemeContext)
    const isTabletOrMobile = useContext(isTableOrMobileContext)
    const separator = '//'

    function HeaderContent() {
        return(
            <div className='header-content'>
                <span className='header-text-container'>
                    <span className='header-name'>Matthew Steele</span>
                    <span className='header-separator'>{separator}</span>
                    <span className='header-title'>Software Engineer</span>
                </span>
            </div>
        )
    }

    return (
        <div className='header' theme={theme}>
            {!isTabletOrMobile ? <CustomIcon /> : null}
            <HeaderContent />
            {!isTabletOrMobile ? <Links /> : null}
        </div>
    )
}

export default Header;