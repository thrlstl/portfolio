import React from 'react'
import ProjectCard from './ProjectCard'
import projectsData from '../projects-page/ProjectsData'

function ProjectsPage() {

    function ProjectsFeed() {

        const renderProjects = () => {
            return projectsData.map(project => 
            <ProjectCard key={project.name} {...project} />)

        }

        return(
            <div className='projects-feed-container'>
                {renderProjects()}
            </div>
        )
    }

    return(
        <ProjectsFeed />
    )
}

export default ProjectsPage;