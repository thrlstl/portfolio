import React, { useContext } from 'react'
import Resume from '../../assets/resume.pdf'
import isTabletOrMobileContext from '../../contexts/isTabletOrMobileContext'

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
    return(
        <a
        className='resume-download-link' 
        href={Resume} download='Matthew-Steele-Resume'>Download Resume</a>
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