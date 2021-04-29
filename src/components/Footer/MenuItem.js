import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'

function MenuItem(props) {

    const location = useLocation()
    const name = props.name
    const itemRoute = props.route
    const currentRoute = location.pathname
    const theme = useContext(ThemeContext)
    const [animationClass, setAnimationClass] = useState('')

    useEffect(() => {
        setAnimationClass(() => {
            return itemRoute === currentRoute
            ? 'selected'
            : 'deselected'
        })
    }, [location])

    return(
        <div
        key={name} 
        className={`menu-item ${animationClass}`}
        theme={theme}>
            <span className={`menu-item-name ${animationClass}`}>
                { name ? name : null }
            </span>
        </div>
    )
}

export default MenuItem;