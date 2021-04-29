import React from 'react'

function HeaderContent() {

    const separator = '//'

    return(
        <div className='header-content'>
            <span className='header-text-container'>
                <span className='header-name'>Matthew Steele</span>
                <span className='header-separator'>{separator}</span>
                <span className='header-title'>Software Engineer</span>
            </span>
        </div>
    )
}

export default HeaderContent;