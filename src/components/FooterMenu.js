import React from 'react'

function FooterMenu(props) {

    const animationType = props.animationType
    const className = 'footer-menu' + ' ' + animationType

    return(
        <div 
        className={className}>
        </div>
    )
}

export default FooterMenu;