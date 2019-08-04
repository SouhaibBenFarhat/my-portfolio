import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TextWithIconStyle =
    {
        height: 'auto',
        marginRight: 20
    };


const TextWithIcon = ({icon, text, iconColor, bold, link}) => {
    return (
        <div className='d-flex my-1'>
            <FontAwesomeIcon style={TextWithIconStyle} icon={icon} className={iconColor || 'text-grey'}/>
            {link ?
                <a href={link} target='_blank' rel="noopener noreferrer" className='my-auto'>
                    {bold ? <b>{text}</b> : text}
                </a>
                :
                <p className='my-auto'>
                    {bold ? <b>{text}</b> : text}
                </p>
            }
        </div>
    )
};

export default TextWithIcon;