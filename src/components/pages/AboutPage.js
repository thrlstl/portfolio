import React from 'react'
import SignatureBlack from '../../assets/images/about/signature-black.png'
import SignatureWhite from '../../assets/images/about/signature-white.png'

function Signature() {
    return(
        <div className='signature-container'>
            <img className='signature' src={SignatureWhite} alt='signature' />
        </div>
    )
}

function AboutPageBio() {

    return(
        <div className='bio-container'>
            <h2 className='intro'>Hey there,</h2>
            <h1 className='intro-2'>I'm Matthew!</h1>
        <p>
            I'm a Software Engineer and design-thinker 
            motivated to improve lives through people-first solutions. 
            I'm also a former sales professional, Queer/Gay Man in Tech, 
            Graphic Designer, Writer, Mariah Carey aficionado, life-long learner, 
            and much more!
        </p>
        <p>
            I began my professional career in health and wellness, 
            acting as a resource and liaison for people seeking to improve 
            their lives. I’ve always been guided by my desire to help people and 
            create change—which motivated me to continue learning and pursue a 
            career in technology and development.
        </p>
        <p>
            Most recently, I completed Flatiron School's Software Engineering 
            immersive, expanding my practice in the following areas: collaborative 
            coding in a feedback-driven environment, object-oriented programming, 
            delivering high-quality solutions in rapid iterations, and handcrafting 
            UI components for enhanced user experiences.
        </p>
        <p>
            Currently, I volunteer my time with Code for America’s Chicago chapter 
            and Code The Dream to help our underserved communities while continuing 
            to learn and grow as an engineer. I'm eager to build with a team that 
            celebrates my identity, values my unique contributions, and empowers a 
            diverse workforce.
        </p>
        </div>
    )
}

function AboutPage() {
    return(
        <div className='about-content-container'>
            <AboutPageBio />
            <Signature />
        </div>
    )
}

export default AboutPage;