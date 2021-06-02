import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageContainer(props) {

    const location = useLocation()
    const currentRoute = location.pathname.split('/')[1]
    const homePage = 'about'
    const pageContainer = document.querySelector('.page-container')

    useEffect(() => {
        return pageContainer
        ? pageContainer.scrollTo(0, 0)
        : null
    }, [location])

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