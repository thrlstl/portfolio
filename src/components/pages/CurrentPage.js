import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './AboutPage'
import BlogPage from './BlogPage'
import ProjectsPage from './projects-page/ProjectsPage'
import ResumePage from './ResumePage'

function CurrentPage() {
    return(
        <Switch>
            <Route exact path='/' component={AboutPage}/>
            <Route exact path='/projects' component={ProjectsPage}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/resume' component={ResumePage}/>
            <Route exact path='/blog' component={BlogPage}/>
        </Switch>
    )
}

export default CurrentPage;