import React from 'react'
import {ProgressBar} from 'react-bootstrap'

const SkillItem = ({skillName, level}) => {
    return (
        <div className='my-4'>
            <h6 className='font-weight-bold'>
                {skillName}
            </h6>
            <ProgressBar now={level}/>
        </div>
    )
};

export default SkillItem
