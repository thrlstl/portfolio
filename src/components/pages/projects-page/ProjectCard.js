import React, { useContext } from 'react'
import ThemeContext from '../../../contexts/ThemeContext'

function ProjectCard(props) {

    // const name = props.name
    const { theme } = useContext(ThemeContext)

    return(
        <div className='project-card-container' theme={theme}>
            <div className='project-card-header'></div>
            <div className='project-card'>

            </div>
            <div className='project-card-shadow-1'></div>
        </div>
    )
}

export default ProjectCard;