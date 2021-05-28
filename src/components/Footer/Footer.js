import React, { useContext, useState, useEffect } from 'react'
import MenuButton from './MenuButton'
import ThemeToggle from './ThemeToggle'
import ProfilePhoto from './ProfilePhoto'
import isTabletOrMobileContext from '../../contexts/isTabletOrMobileContext'
import ThemeContext from '../../contexts/ThemeContext'
import FooterMenu from './FooterMenu'

function Footer() {

    const isTabletOrMobile = useContext(isTabletOrMobileContext)
    const { theme } = useContext(ThemeContext)
    const [ menuAnimationType, setMenuAnimationType ] = useState('none')
    const [menuType, setMenuType] = useState(null)

    useEffect(() => {
        return isTabletOrMobile
        ? setMenuType('mobile-menu')
        : setMenuType('desktop-menu')
    }, [isTabletOrMobile])

    const toggleMenu = () => {
        setMenuAnimationType(() => {
            return menuAnimationType === 'enter'
            ? 'exit'
            : 'enter'
        })
    }

    return(
        <div className='footer' theme={theme}>
            { !isTabletOrMobile
            ?  <ThemeToggle /> 
            :  <MenuButton toggleMenu={toggleMenu} /> }
                <FooterMenu 
                menuType={menuType} 
                animationType={menuAnimationType}
                theme={theme} />
            <ProfilePhoto />
        </div>
    )
}

export default Footer;