import React, { useContext, useState, useEffect } from 'react'
import MenuButton from './MenuButton'
import FooterMenu from './FooterMenu'
import isMobileContext from '../contexts/isMobileContext'

function Footer() {

    const isMobile = useContext(isMobileContext)
    const [isMenuVisible, setIsMenuVisible] = useState(true)

    // useEffect(() => {
    //     setIsMenuVisible(() => {
    //       return isMobile
    //       ? false
    //       : true
    //     })
    //   }, [isMobile])

    useEffect(() => {
        setIsMenuVisible(!isMobile)
    }, [isMobile])

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return(
        <div className='footer'>
            <MenuButton toggleMenu={toggleMenu} />
            {isMenuVisible ? <FooterMenu /> : null}
        </div>
    )
}

export default Footer;