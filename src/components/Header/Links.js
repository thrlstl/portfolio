import React from 'react'
import LinkIcon from '../../components/Header/LinkIcon'

// Link Icon Sources
import LinkedInBlack from '../../assets/images/links/linkedin-black.png'
import LinkedInWhite from '../../assets/images/links/linkedin-white.png'
import GithubBlack from '../../assets/images/links/github-black.png'
import GithubWhite from '../../assets/images/links/github-white.png'
import BlogBlack from '../../assets/images/links/rss-black.png'
import BlogWhite from '../../assets/images/links/rss-white.png'


// Links Data
const linkIcons = [
    {
        name: 'LinkedIn Icon',
        link: 'https://www.linkedin.com/in/matthewsteeleonline/',
        light: LinkedInBlack,
        dark: LinkedInWhite
    },
    {
        name: 'Github Icon',
        link: 'https://github.com/thrlstl',
        light: GithubBlack,
        dark: GithubWhite
    },
    {
        name: 'Blog Icon',
        link: 'https://matthewsteeleonline.medium.com/',
        light: BlogBlack,
        dark: BlogWhite
    }
]

const renderLinks = () => {
    return linkIcons.map(link => {
        return <LinkIcon {...link}/>
    })
}

function Links() {
    return(
        <div className='header-links-container'>
            {renderLinks()}
        </div>
    )
}

export default Links;