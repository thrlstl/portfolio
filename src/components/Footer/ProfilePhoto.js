import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import myPhoto from '../../assets/images/profile-photo.jpg'

function ProfilePhoto() {

    const theme = useContext(ThemeContext)

    return(
        <img 
        className='profile-photo' 
        theme={theme}
        src={myPhoto}
        alt='profile-icon'></img>
    )
}

export default ProfilePhoto;