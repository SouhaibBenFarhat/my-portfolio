import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TextWithIconStyle =
    {
        height: 'auto',
        marginRight: 20
    };


const TextWithIcon = ({icon, text}) => {
    return (
        <div className='d-flex my-3'>
            <FontAwesomeIcon style={TextWithIconStyle} icon={icon} className='text-grey'/>
            <p className='my-auto'>{text}</p>
        </div>
    )
};

export default TextWithIcon;