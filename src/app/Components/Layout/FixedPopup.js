import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const FixedPopupStyle = {
    position: 'fixed',
    bottom: 0,
    right: 20,
    width: 200,
    height: 40,
    color: 'white',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    span: {
        marginTop: 'auto',
        marginBottom: 'auto'
    }
};

const FixedPopup = () => {
    return (
        <div className='bg-primary' style={FixedPopupStyle}
             onClick={() => window.open("https://github.com/SouhaibBenFarhat/my-portfolio")}>
            <FontAwesomeIcon className='my-auto mr-1' icon={faGithub}/>
            <span style={FixedPopupStyle.span}>Source Code</span>
        </div>
    )
};

export default FixedPopup;