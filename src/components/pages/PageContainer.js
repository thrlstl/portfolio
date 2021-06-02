import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageContainer(props) {

    const { pathname } = useLocation()
    const currentRoute = pathname.split('/')[1]
    const pageContainer = document.querySelector('.page-container')

    useEffect(() => {
        return pageContainer
        ? pageContainer.scrollTo(0, 0)
        : null
    }, [pathname, pageContainer])

    return(
        <div className={`${currentRoute} page-container`}>
            {props.children}
        </div>
    )
}

export default PageContainer;