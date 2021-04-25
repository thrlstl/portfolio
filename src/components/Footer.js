import React, { useContext, useState, useEffect } from 'react'
import MenuButton from './MenuButton'
import isMobileContext from '../contexts/isMobileContext'

function Footer() {

    const isMobile = useContext(isMobileContext)
    const [isMenuVisible, setIsMenuVisible] = useState(true)

    useEffect(() => {
        setIsMenuVisible(() => {
          return isMobile
          ? false
          : true
        })
      }, [isMobile])

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    const renderFooterMenu = () => {
        return isMenuVisible
        ? ( <div className='footer-menu'></div> )
        : null
    }

    return(
        <div className='footer'>
            <MenuButton toggleMenu={toggleMenu} />
            {renderFooterMenu()}
        </div>
    )
}

export default Footer;