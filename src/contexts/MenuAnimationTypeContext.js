import React from "react";
const MenuAnimationTypeContext = React.createContext({
    menuAnimationType: 'none',
    setMenuAnimationType: () => {}
})
export default MenuAnimationTypeContext;