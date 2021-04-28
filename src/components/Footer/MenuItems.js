import React from 'react'
import MenuData from './MenuData'

function MenuItems() {
    return MenuData.map(item => {
        return <div className='menu-item' key={item.name}>
                <span className='menu-item-name'>{ item.name ? item.name : null }</span>
                </div>
    })
}

export default MenuItems;