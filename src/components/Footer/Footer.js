import React, { useContext, useState, useEffect, useCallback } from 'react'
import MenuButton from './MenuButton'
import ProfilePhoto from './ProfilePhoto'
import isTabletOrMobileContext from '../../contexts/isTabletOrMobileContext'
import ThemeContext from '../../contexts/ThemeContext'
import FooterMenu from './FooterMenu'

function Footer(props) {

    const isTabletOrMobile = useContext(isTabletOrMobileContext)
    const theme = useContext(ThemeContext)
    const [isMenuVisible, setIsMenuVisible] = useState(true)
    const [menuType, setMenuType] = useState(null)
    const [animationType, setAnimationType] = useState('enter')

    useEffect(() => {
        return isTabletOrMobile
        ? setIsMenuVisible(!isTabletOrMobile)
        : null
    }, [isTabletOrMobile])

    useEffect(() => {
        return isTabletOrMobile
        ? setMenuType('mobile-menu')
        : setMenuType('desktop-menu')
    }, [isTabletOrMobile])

    useEffect(() => {
        setAnimationType(() => {
            return isMenuVisible
            ? 'enter'
            : 'exit'
        })
    }, [isMenuVisible])

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return(
        <div className='footer' theme={theme}>
            <MenuButton toggleMenu={toggleMenu} />
                <FooterMenu 
                menuType={menuType} 
                animationType={animationType}
                theme={theme} />
            <ProfilePhoto />
        </div>
    )
}

export default Footer;