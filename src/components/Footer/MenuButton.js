import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import IconDark from '../../assets/images/menu-icon-dark.png'
import IconLight from '../../assets/images/menu-icon-light.png'
import AnimationContext from '../../contexts/AnimationContext'
// import MobileMenuAnimationContext from '../../contexts/AnimationContext'

function MenuButton(props) {

    const { theme } = useContext(ThemeContext)
    const [iconType, setIconType] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [animationClass, setAnimationClass] = useState('')
    const { animation, setAnimation } = useContext(AnimationContext)
    // const { mobileMenuAnimation, setMobileMenuAnimation } = useContext(MobileMenuAnimationContext)

    useEffect(() => {
        setIconType(() => {
            return theme === 'light'
            ? IconDark
            : IconLight
        })
    }, [theme])

    useEffect(() => {
        setAnimationClass(() => {
            return clicked
            ? 'clicked'
            : ''
        })
    }, [clicked])

    const handleClick = () => {
        setClicked(!clicked)
        // setAnimation(() => {
        //     return animation === 'none'
        //     ? 'enter'
        //     : 'exit'
        // })
        props.toggleMenu()
    }

    return(
        <div 
        className='menu-button-container'>
            <img 
            onClick={handleClick}
            className={`menu-button ${animationClass}`}
            onAnimationEnd={() => setClicked(!clicked)}
            src={iconType}
            alt='menu-icon'></img>
        </div>
    )
}

export default MenuButton;