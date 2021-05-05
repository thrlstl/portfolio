import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function PageContainer(props) {

    const location = useLocation()
    const route = location.pathname.split('/')[1]
    const isPageExpanded = props.isPageExpanded

    useEffect(() => {
        console.log(isPageExpanded)
    }, [isPageExpanded])

    return(
        <div className={`${route} page-container`}>
            {props.children}
        </div>
    )
}

export default PageContainer;