import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const socialBadgeStyle = {
    height: 50,
    width: 50,
    borderRadius: '50%',
    fontSize: 24,
    display: 'flex',
    margin: 5
};

const SocialBadge = (props) => {
    let {icon} = props;
    return (
        <div className='text-white bg-primary' style={socialBadgeStyle}>
            <span className='m-auto'>
            <FontAwesomeIcon icon={icon}/>
            </span>
        </div>
    )
};

export default SocialBadge