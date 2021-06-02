import React from 'react'
import Resume from '../../assets/resume.pdf'

function ResumePage() {
    return (
        <object
        className='resume-document' 
        data={Resume}
        type='application/pdf'>
        </object>
        // <embed className='resume-document' src={Resume} type="application/pdf" />
    )
}

export default ResumePage;