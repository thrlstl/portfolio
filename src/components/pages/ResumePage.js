import React from 'react'
import Resume from '../../assets/resume.pdf'

function ResumePage() {
    return (
        <embed className='resume-document' src={Resume} type="application/pdf" />
    )
}

export default ResumePage;