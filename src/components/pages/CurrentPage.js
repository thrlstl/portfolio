import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AboutPage from './AboutPage'
import BlogPage from './blog-page/BlogPage'
import ProjectsPage from './projects-page/ProjectsPage'
import ResumePage from './ResumePage'

function CurrentPage() {

    return(
        <Switch>
            <Route exact path="/">
                <Redirect to="/about" />
            </Route>
            <Route exact path='/projects' component={ProjectsPage}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/resume' component={ResumePage}/>
            <Route exact path='/blog' component={BlogPage}/>
        </Switch>
    )
}

export default CurrentPage;