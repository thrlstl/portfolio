import React, { useContext } from 'react'
import ThemeContext from '../../../contexts/ThemeContext'

function CardContainer(props) {

    const theme = props.theme

    return(
        <div className='project-card-container' theme={theme}>
                {props.children}
        </div>
    )
}

function CardContent() {
    return(
        <div className='card-contents-container'></div>
    )
}

function CardHeader() {
    return(
        <div className='card-header'></div>
    )
}

function CardShadow() {
    return(
        <div className='card-shadow'></div>
    )
}

function ProjectCard(props) {

    const { theme } = useContext(ThemeContext)

    return(
        <CardContainer theme={theme}>
            <CardHeader />
            <CardContent {...props.project} />
            <CardShadow />
        </CardContainer>
    )
}

export default ProjectCard;