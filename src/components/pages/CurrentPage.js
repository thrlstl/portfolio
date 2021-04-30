import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import ProjectsPage from './ProjectsPage'
import ResumePage from './ResumePage'

function CurrentPage() {
    return(
        <Switch>
            <Route exact path='/' component={AboutPage}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/contact' component={ContactPage}/>
            <Route exact path='/projects' component={ProjectsPage}/>
            <Route exact path='/resume' component={ResumePage}/>
        </Switch>
    )
}

export default CurrentPage;