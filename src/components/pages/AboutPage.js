import React, { useContext, useState, useEffect } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import SignatureBlack from '../../assets/images/about/signature-black.png'
import SignatureWhite from '../../assets/images/about/signature-white.png'
import BackgroundImageDark from '../../assets/images/about/background-image-dark.png'
import BackgroundImageLight from '../../assets/images/about/background-image-light.png'
import BackgroundShadowBlue from '../../assets/images/about/background-shadow-blue.png'
import BackgroundShadowRed from '../../assets/images/about/background-shadow-red.png'

function Signature(props) {
    return(
        <div className='signature-container'>
            <img className='signature' src={props.src} alt='signature' />
        </div>
    )
}

function BackgroundImages(props) {
    return(
        <div className='background-images-container'>
            <img className='background-image' src={props.backgroundImage} alt='self-portrait'/>
            <img className='background-shadow' src={props.backgroundShadow} alt='self-portrait-shadow' />
        </div>
    )
}

function Bio(props) {
    
    const { theme } = useContext(ThemeContext)

    return(
        <div className='bio-container' theme={theme}>
            <h2 className='intro'>Hey there,</h2>
            <h1 className='intro-2'>I'm Matthew!</h1>
        <p>I'm a Software Engineer driven to improve lives through people-first solutions. I'm also a former sales professional, Queer/Gay Man in Tech, Graphic Designer, Writer, Mariah Carey aficionado, life-long learner, and much more!</p>
        <p>I began my professional career in health and wellness, acting as a resource and liaison for people seeking to improve their lives. I’ve always been guided by my desire to help people and create change—which motivated me to continue learning and pursue a career in tech.</p>
        <p>In the last year, I've expanded my practice of collaborative coding in feedback-driven environments, translating UI designs into high-quality components, object-oriented programming, front-end development, and responsive web and mobile design.</p>
        <p>Currently, I volunteer my time with Code for America’s Chicago chapter and Code The Dream to help our underserved communities while continuing to learn and grow as an engineer. I'm eager to build with a team that celebrates my identity, empowers diverse talent, and aligns with my purpose—to help other people.</p>
        <Signature src={props.signature} />
        </div>
    )
}

function QuickFacts() {

    const { theme } = useContext(ThemeContext)

    const favorites = [
        'favorites', 
        'iced americano', 
        'mariah carey', 
        'blue', 
        'sichuan', 
        'photoshop' ]

    const hobbies = [
        'hobbies', 
        'music production', 
        'biking', 
        'cooking', 
        'traveling', 
        'reading' ]

    const renderFavorites = () => {
        return favorites.map((favorite, index) => <p key={index}>{favorite}</p>)
    }

    const renderHobbies = () => {
        return hobbies.map((hobby, index) => <p key={index}>{hobby}</p>)
    }

    return(
        <div className='quick-facts-container' theme={theme}>
            <div className='quick-facts-content'>
                <p className='location' theme={theme}>Current City — <span className='city'>Chicago, IL</span></p>
                <div className='favorites'>
                    {renderFavorites()}
                </div>
                <div className='hobbies'>
                    {renderHobbies()}
                </div>
            </div>
        </div>
    )
}

function AboutPage() {

    const { theme } = useContext(ThemeContext)
    const [images, setImages] = useState({
        signature: null,
        backgroundImage: null,
        backgroundShadow: null,
    })

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, [])

    useEffect(() => {
        setImages(() => {
            return theme === 'light'
            ? { signature: SignatureBlack,
                backgroundImage: BackgroundImageLight,
                backgroundShadow: BackgroundShadowRed }
            : { signature: SignatureWhite,
                backgroundImage: BackgroundImageDark,
                backgroundShadow: BackgroundShadowBlue }
        })
    }, [theme])

    return(
        <>
            <Bio 
            signature={images.signature} />
            <BackgroundImages 
            backgroundImage={images.backgroundImage}
            backgroundShadow={images.backgroundShadow} />
            <QuickFacts />
        </>
    )
}

export default AboutPage;