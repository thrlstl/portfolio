import React from 'react'
import MenuData from './MenuData'
import MenuItem from './MenuItem'
import { Link } from "react-router-dom";

function MenuItems() {

    return MenuData.map(item => {
        return(
            <Link
            className='menu-item-link'
            key={item.name} 
            to={item.route} >
                <MenuItem {...item} />
            </Link>
        )
    })
}

export default MenuItems;