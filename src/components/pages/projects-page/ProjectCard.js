import React, { useContext, useState } from 'react'
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

function RightInfoContainer(props) {
    return(
        <div className='right-info-container'>
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
        return stack.map(item => <StackItem key={item.type} {...item}/>)
    }

    return(
        <div className='project-stack-container'>
            {renderStackItems()}
        </div>
    )
}

function LinkItem(props) {
    return(
        <a
        className='link-item' 
        href={props.URL}
        target="_blank"
        rel="noreferrer">{props.type}</a>
    )
}

function ProjectLinks(props) {

    const links = props.links

    const renderLinkItems = () => {
        return links.map(item => <LinkItem key={item.type} {...item} />)
    }

    return(
        <div className='project-links-container'>
            {renderLinkItems()}
        </div>
    )
}

function MoreInfoButton(props) {

    const { theme } = useContext(ThemeContext)

    const handleClick = () => {
        props.setIsModalVisible()
    }

    return(
        <p 
        className='more-info-button'
        theme={theme}
        onClick={handleClick}>More Info</p>
    )
}

function MoreInfoModal(props) {

    const { theme } = useContext(ThemeContext)

    return(
        <div 
        className='more-info-modal'
        theme={theme}>
            {props.children}
        </div>
    )
}

function CloseButton(props) {

    const { theme } = useContext(ThemeContext)

    const handleClick = () => {
        props.setIsModalVisible()
    }

    return(
        <p 
        className='close-button'
        onClick={handleClick}
        theme={theme}>Close</p>
    )
}

function ProjectTags(props) {
    return(
        <div className='tags-container'>
            {props.children}
        </div>
    )
} 

function TagItem(props) {

    const { theme } = useContext(ThemeContext)
    const tags = props.tags

    return(
        <>
        <p 
        className='tag-item'
        type='title'
        theme={theme}>tags</p>
        {tags.map((item, index) => 
        <p 
        key={index}
        className='tag-item'
        type={item.type}
        theme={theme}>
        {item.type}
        </p> )}
        </>
    )
}

function ProjectDescription(props) {
    return(
        <p className='project-description'>{props.description}</p>
    )
}

function Content(props) {

    const [isModalVisible, setIsModalVisible] = useState(false)

    return(
        <ContentContainer>
            <RightInfoContainer>
                <ProjectType type={props.type} />
                <MoreInfoButton setIsModalVisible={() => setIsModalVisible(!isModalVisible)} />
            </RightInfoContainer>
                { isModalVisible ? 
                <MoreInfoModal>
                    <CloseButton setIsModalVisible={() => setIsModalVisible(!isModalVisible)} />
                            <ProjectDescription description={props.description}/>
                        <ProjectTags>
                            <TagItem tags={props.tags} />
                        </ProjectTags>
                </MoreInfoModal> : null }
            <ProjectName name={props.name} />
            <ProjectStack stack={props.stack} />
            <ProjectLinks links={props.links}/>
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