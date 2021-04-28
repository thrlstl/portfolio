import React, { useContext } from 'react'
import MenuItems from './MenuItems'
import FooterIcons from './FooterIcons'
import isTabletOrMobileContext from '../../contexts/isTabletOrMobileContext'

function FooterMenu(props) {

    const menuType = props.menuType
    const animationType = props.animationType
    const theme = props.theme
    const isTabletOrMobile = useContext(isTabletOrMobileContext)

    return(
        <div 
            className={`new-menu ${menuType} ${animationType}`}
            theme={theme}>
            { isTabletOrMobile ? 
            <FooterIcons /> : null }
            <MenuItems />
        </div>
    )
}

export default FooterMenu;