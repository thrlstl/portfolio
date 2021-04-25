import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function FooterMenu(props) {

    const animationType = props.animationType
    const theme = useContext(ThemeContext)

    return(
        <div 
        className={`footer-menu ${animationType}`} 
        theme={theme}>
        </div>
    )
}

export default FooterMenu;