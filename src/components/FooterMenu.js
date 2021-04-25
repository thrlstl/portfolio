import React from 'react'

function FooterMenu(props) {

    const animationType = props.animationType

    return(
        <div className={`footer-menu ${animationType}`}>
        </div>
    )
}

export default FooterMenu;