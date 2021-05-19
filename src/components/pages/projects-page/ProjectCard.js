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

function ContentContainer(props) {
    return(
        <div className='card-contents-container'>
            {props.children}
        </div>
    )
}

function ProjectType(props) {
    return(
        <p className='project-type'>{props.type}</p>
    )
}

function ProjectName(props) {
    return(
        <p className='project-name'>{props.name}</p>
    )
}

function StackItem(props) {
    return(
        <p 
        className='stack-item'
        type={props.type}>{props.type}</p>
    )
}

function ProjectStack(props) {

    const stack = props.stack

    const renderStackItems = () => {
        return stack.map(item => <StackItem {...item}/>)
    }

    return(
        <div className='project-stack-container'>
            {renderStackItems()}
        </div>
    )
}

function Content(props) {
    return(
        <ContentContainer>
            <ProjectType type={props.type} />
            <ProjectName name={props.name} />
            <ProjectStack stack={props.stack} />
        </ContentContainer>
    )
}


function ProjectCard(props) {

    const { theme } = useContext(ThemeContext)

    return(
        <CardContainer theme={theme}>
            <CardHeader />
                <Content {...props.project} />
            <CardShadow />
        </CardContainer>
    )
}

export default ProjectCard;