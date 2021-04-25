import React from 'react'
import iconLeft from '../assets/images/icon/icon-left-triangle.png'
import iconRight from '../assets/images/icon/icon-right-triangle.png'
import iconConnector from '../assets/images/icon/icon-triangle-connector.png'

function CustomIcon() {
    return(
        <div class='icon-container'>
            <img class='icon-connector' src={iconConnector} alt='icon-connector'></img>
            <img class='icon-left' src={iconLeft} alt='icon-left'></img>
            <img class='icon-right' src={iconRight} alt='icon-right'></img>
        </div>
    )
}

export default CustomIcon;