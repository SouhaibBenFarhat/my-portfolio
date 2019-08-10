import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SecondaryButton = ({icon, withIcon, text, onClick, fullWidth}) => {
    const SecondaryButtonStyle = {
        backgroundColor: '#479FC8',
        padding: '8px 16px',
        border: '1px solid #479FC8',
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
            display: fullWidth ? 'inline' : 'inline-block'
        }
    };
    return (
        <div style={SecondaryButtonStyle.parent} className='d-print-none'>
            <div style={SecondaryButtonStyle} onClick={onClick}>
                <div style={{textAlign: 'center', width: '100%'}}>
                <span style={SecondaryButtonStyle.icon}>
                    {withIcon ? <FontAwesomeIcon icon={icon} className='text-light'/> : null}
                </span>
                    <span style={SecondaryButtonStyle.span}>
                    {text}
                </span>
                </div>
            </div>
        </div>
    )
};

export default SecondaryButton