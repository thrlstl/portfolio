import React from 'react'
import { useLocation } from 'react-router-dom'

function PageContainer(props) {

    const location = useLocation()
    const route = location.pathname.split('/')[1]

    return(
        <div className={`${route} page-container`}>
            {props.children}
        </div>
    )
}

export default PageContainer;