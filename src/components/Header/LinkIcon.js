import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function LinkIcon(props) {

    const name = props.name
    const link = props.link
    const theme = useContext(ThemeContext)
    const [image, setImage] = useState(props.dark)

    useEffect(() => {
        setImage(() => {
            return theme === 'light'
            ? props.light
            : props.dark
        })
    }, [theme])

    return(
        <a 
        href={link}
        className='link'
        target="_blank">
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