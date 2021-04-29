import React, { useContext } from 'react'
import Links from './Links'
import CustomIcon from '../CustomIcon'
import HeaderContent from './HeaderContent'
import ThemeContext from '../../contexts/ThemeContext'
import isTableOrMobileContext from '../../contexts/isTabletOrMobileContext'

function Header() {

    const theme = useContext(ThemeContext)
    const isTabletOrMobile = useContext(isTableOrMobileContext)

    return (
        <div className='header' theme={theme}>
            {!isTabletOrMobile ? <CustomIcon /> : null}
            <HeaderContent />
            {!isTabletOrMobile ? <Links /> : null}
        </div>
    )
}

export default Header;