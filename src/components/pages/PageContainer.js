import React from 'react'
import { useLocation } from 'react-router-dom'

function PageContainer(props) {

    const location = useLocation()
    const currentRoute = location.pathname.split('/')[1]
    const homePage = 'about'

    const currentPage = () => {
        return currentRoute === ''
        ? homePage
        : currentRoute
    }

    return(
        <div className={`${currentPage()} page-container`}>
            {props.children}
        </div>
    )
}

export default PageContainer;