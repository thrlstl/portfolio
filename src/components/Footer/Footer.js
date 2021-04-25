import React, { useContext, useState, useEffect } from 'react'
import MenuButton from './MenuButton'
import FooterMenu from './FooterMenu'
import isMobileContext from '../../contexts/isMobileContext'
import ThemeContext from '../../contexts/ThemeContext'

function Footer() {

    const isMobile = useContext(isMobileContext)
    const theme = useContext(ThemeContext)
    const [isMenuVisible, setIsMenuVisible] = useState(true)
    const [animationType, setAnimationType] = useState('enter')

    useEffect(() => {
        setIsMenuVisible(!isMobile)
    }, [isMobile])

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
            <FooterMenu animationType={animationType}/>
        </div>
    )
}

export default Footer;