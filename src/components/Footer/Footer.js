import React, { useContext, useState, useEffect } from 'react'
import MenuButton from './MenuButton'
import LightDarkButton from './LightDarkButton'
import ProfilePhoto from './ProfilePhoto'
import isTabletOrMobileContext from '../../contexts/isTabletOrMobileContext'
import ThemeContext from '../../contexts/ThemeContext'
import FooterMenu from './FooterMenu'

function Footer() {

    const isTabletOrMobile = useContext(isTabletOrMobileContext)
    const { theme } = useContext(ThemeContext)
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
            { !isTabletOrMobile
            ?  <LightDarkButton /> : <MenuButton toggleMenu={toggleMenu} /> }
                <FooterMenu 
                menuType={menuType} 
                animationType={animationType}
                theme={theme} />
            <ProfilePhoto />
        </div>
    )
}

export default Footer;