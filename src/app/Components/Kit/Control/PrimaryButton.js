import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PrimaryButtonStyle = {
    backgroundColor: '#54ba4e',
    padding: '8px 16px',
    border: '1px solid #54ba4e',
    fontSize: 16,
    display: 'flex',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 6,
    cursor: 'pointer',
    span: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    icon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 10
    },
    parent: {
        display: 'inline-block'
    }
};

const PrimaryButton = ({icon, withIcon, text, onClick}) => {
    return (
        <div style={PrimaryButtonStyle.parent} className='d-print-none'>
            <div style={PrimaryButtonStyle} onClick={onClick}>
                <span style={PrimaryButtonStyle.icon}>
                    {withIcon ? <FontAwesomeIcon icon={icon} className='text-light'/> : null}
                </span>
                <span style={PrimaryButtonStyle.span}>
                    {text}
                </span>
            </div>
        </div>
    )
};

export default PrimaryButton