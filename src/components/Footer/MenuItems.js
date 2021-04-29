import React from 'react'
import MenuData from './MenuData'
import MenuItem from './MenuItem'
import { Link } from "react-router-dom";

function MenuItems() {
    return MenuData.map(item => {
        return(
            <Link to={item.route} key={item.name}>
                <MenuItem {...item} />
            </Link>
        )
    })
}

export default MenuItems;