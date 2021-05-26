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
        <div className='blog-card-contents-container'>
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

function ReadMoreLink(props) {
    return(
        <a 
        className='read-more-link'
        href={props.link}
        target="_blank"
        rel="noreferrer">Read More</a>
    )
}

function BlogCard(props) {

    return(
        <BlogCardContents>
            <BlogThumbnail thumbnail={props.thumbnail} alt={props.title}/>
            <BlogTitle title={props.title} />
            <BlogDescription description={props.description}/>
            <ReadMoreLink link={props.link} />
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