import React, { useContext } from 'react'
import Resume from '../../assets/resume.pdf'
import isTabletOrMobileContext from '../../contexts/isTabletOrMobileContext'
import ThemeContext from '../../contexts/ThemeContext'

function ResumePDF() {
    return(
        <object
        className='resume-document' 
        data={Resume}
        type='application/pdf'>
        </object>
    )
}

function ResumeDownloadLink() {

    const { theme } = useContext(ThemeContext)

    return(
        <a
        className='resume-download-link' 
        theme={theme}
        href={Resume} 
        download='Matthew-Steele-Resume'
        target='_blank'
        rel="noreferrer">Download Resume</a>
    )
}

function ResumePage() {

    const isTabletOrMobile = useContext(isTabletOrMobileContext)

    return (
        isTabletOrMobile
        ? <ResumeDownloadLink />
        : <ResumePDF />
    )
}

export default ResumePage;