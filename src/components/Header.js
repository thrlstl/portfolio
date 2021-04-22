import RSSIcon from '../assets/icons/rss-icon-2.svg'

function Header() {
    return (
        <div className='header'>
            <div className='header-content'>
                <text className='header-name'>Matthew Steele</text>
                <text className='header-separator'>//</text>
                <text className='header-title'>Software Engineer</text>
            </div>
            <div className='links-container'>
                <img className='icon'></img>
            </div>
        </div>
    )
}

export default Header;