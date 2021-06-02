import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageContainer(props) {

    const { location, pathname } = useLocation()
    const currentRoute = pathname.split('/')[1]
    // const homePage = 'about'
    const pageContainer = document.querySelector('.page-container')

    useEffect(() => {
        return pageContainer
        ? pageContainer.scrollTo(0, 0)
        : null
    }, [location, pageContainer])

    // const currentPage = () => {
    //     return currentRoute === ''
    //     ? homePage
    //     : currentRoute
    // }

    return(
        <div className={`${currentRoute} page-container`}>
            {props.children}
        </div>
    )
}

export default PageContainer;