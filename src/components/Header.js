import headerIcon from '../assets/images/m-icon.png'

function Header() {
    return (
        <div className='header'>
            <img alt='header-icon' className='header-icon' src={headerIcon}></img>
            <div className='header-content'>
                <text className='header-name'>Matthew Steele</text>
                <text className='header-separator'>/</text>
                <text className='header-title'>Software Engineer</text>
            </div>
            <div className='links-container'>
                <img alt='tbd' className='icon'></img>
            </div>
        </div>
    )
}

export default Header;