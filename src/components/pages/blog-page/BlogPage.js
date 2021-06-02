import React, { useContext } from 'react'
import blogsData from './BlogData'
import ThemeContext from '../../../contexts/ThemeContext'

function BlogFeed(props) {
    return(
        <div className='blog-feed-container'>
            {props.children}
        </div>
    )
}

function BlogCardContents(props) {
    return(
        <div className='blog-card-contents-container' onClick={props.handleClick}>
            {props.children}
        </div>
    )
}

function BlogThumbnail(props) {
    return(
        <div className='thumbnail-container'>
            <img className='thumbnail-image' src={props.thumbnail} alt={props.alt}/>
        </div>
    )
}

function BlogTitle(props){
    return(
        <p className='blog-title'>{props.title}</p>
    )
}

function BlogDescription(props) {

    const { theme } = useContext(ThemeContext)

    return(
        <p 
        className='blog-description'
        theme={theme}>{props.description}</p>
    )
}

function ReadMoreIcon() {
    return(
        <p 
        className='read-more-link'>Read More</p>
    )
}

function BlogCard(props) {

    const handleClick = () => {
        window.open(`${props.link}`, "_blank")
    }

    return(
        <BlogCardContents handleClick={() => handleClick()}>
            <BlogThumbnail thumbnail={props.thumbnail} alt={props.title}/>
            <BlogTitle title={props.title} />
            <BlogDescription description={props.description}/>
            <ReadMoreIcon />
        </BlogCardContents>
    )
}

function BlogPage() {

    const renderBlogs = () => {
        return blogsData.map(blog => <BlogCard key={blog.title} {...blog} />)
    }

    return(
        <BlogFeed>
            {renderBlogs()}
        </BlogFeed>
    )
}

export default BlogPage;