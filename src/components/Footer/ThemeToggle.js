import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import isTabletOrMobile from '../../contexts/isTabletOrMobileContext'
import IconDark from '../../assets/images/theme-toggle/moon-icon.png'
import IconLight from '../../assets/images/theme-toggle/sun-icon.png'
import isTabletOrMobileContext from '../../contexts/isTabletOrMobileContext'

function ThemeToggle() {

    const { theme, setTheme } = useContext(ThemeContext)
    const isTabletOrMobile = useContext(isTabletOrMobileContext)
    const [iconType, setIconType] = useState(null)
    const [animationClass, setAnimationClass] = useState('')
    const [styleType, setStyleType] = useState(null)

    useEffect(() => {
        setStyleType(() => {
            return isTabletOrMobile
            ? 'mobile'
            : 'desktop'
        })
    }, [isTabletOrMobile])

    useEffect(() => {
        setIconType(() => {
            return theme === 'light'
            ? IconDark
            : IconLight
        })
    }, [theme])

    const handleClick = () => {
        setTheme(() => {
            return theme === 'light'
            ? 'dark'
            : 'light'
        })
    }

    return(
        <div 
        className='theme-toggle-container'
        onClick={handleClick}
        type={styleType}
        theme={theme}>
                <img 
                className='theme-toggle-icon'
                src={iconType}
                alt='theme-toggle'>
                </img>
            </div>
    )
}

export default ThemeToggle;