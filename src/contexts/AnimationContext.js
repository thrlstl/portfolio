import React from "react";
const AnimationContext = React.createContext({
    animation: 'none',
    setAnimation: () => {}
})
export default AnimationContext;