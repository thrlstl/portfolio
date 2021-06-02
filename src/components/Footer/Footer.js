import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
    const [ isScrollingOrClicked, setIsScrollingOrClicked ] = useState(false)
    const [menuType, setMenuType] = useState(null)
    const { pathname } = useLocation()
    
    useEffect(() => {
        return isTabletOrMobile
        ? setMenuType('mobile-menu')
        : setMenuType('desktop-menu')
    }, [isTabletOrMobile])
    
    useEffect(() => {
        const pageContainer = document.querySelector('.page-container')
        pageContainer.addEventListener('scroll', () => setIsScrollingOrClicked(true), setTimeout(() => setIsScrollingOrClicked(false), 1))
        pageContainer.addEventListener('click', () => setIsScrollingOrClicked(true), setTimeout(() => setIsScrollingOrClicked(false), 1))
    })

    useEffect(() => {
        return isScrollingOrClicked && menuAnimationType === 'entering'
        ? toggleMenu()
        : null
    })


    useEffect(() => {
        setMenuAnimationType(menuAnimationType => {
            return menuAnimationType === 'entering'
            ? 'exiting'
            : 'entering'
        })
    }, [pathname])

    const toggleMenu = () => {
        setMenuAnimationType(() => {
            return menuAnimationType === 'entering'
            ? 'exiting'
            : 'entering'
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