import React from 'react'
import myPhoto from '../../assets/images/profile-photo.png'

function ProfilePhoto() {
    return(
        <img 
        className='profile-photo' 
        src={myPhoto}
        alt='profile-icon'></img>
    )
}

export default ProfilePhoto;