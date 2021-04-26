import React from 'react'
import iconConnector from '../assets/images/icon/icon-triangle-connector.png'
import iconLeft from '../assets/images/icon/icon-left-triangle.png'
import iconRight from '../assets/images/icon/icon-right-triangle.png'

function SplashScreen() {
    return(
        <div className='splash-screen'>
            <div className='splash-icon-container'>
            <img className='splash-icon-connector' src={iconConnector} alt='splash-icon-connector'></img>
                <img className='splash-icon-left' src={iconLeft} alt='splash-icon-left'></img>
                <img className='splash-icon-right' src={iconRight} alt='splash-icon-right'></img>
            </div>
        </div>
    )
}

export default SplashScreen;