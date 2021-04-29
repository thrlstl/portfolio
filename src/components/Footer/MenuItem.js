import React from 'react'

function MenuItem(props) {

    const name = props.name

    return(
        <div
        key={name} 
        className='menu-item'>
            <span className='menu-item-name'>
                { name ? name : null }
            </span>
        </div>
    )
}

export default MenuItem;