import React from 'react'
import ProjectCard from './ProjectCard'
import projectsData from '../projects-page/ProjectsData'

function ProjectsFeed(props) {
    return(
        <div className='projects-feed-container'>
            {props.children}
        </div>
    )
}

function ProjectsPage() {

    return(
        <ProjectsFeed>
            {projectsData.map(project => 
            <ProjectCard key={project.name} project={project} /> )}
        </ProjectsFeed>
    )
}

export default ProjectsPage;