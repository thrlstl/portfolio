import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function LinkIcon(props) {

    const lightIcon = props.light
    const darkIcon = props.dark
    const name = props.name
    const link = props.link
    const theme = useContext(ThemeContext)
    const [image, setImage] = useState(darkIcon)

    useEffect(() => {
        setImage(() => {
            return theme === 'light'
            ? lightIcon
            : darkIcon
        })
    }, [theme, lightIcon, darkIcon])

    return(
        <a 
        href={link}
        className='link'
        target="_blank"
        rel="noreferrer">
            <div 
            className='link-container'
            theme={theme}>
                <img 
                className='link-icon'
                src={image}
                alt={name}>
                </img>
            </div>
        </a>
    )
}

export default LinkIcon;