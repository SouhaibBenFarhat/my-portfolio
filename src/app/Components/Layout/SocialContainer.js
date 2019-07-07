import React from 'react';
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faBehance} from '@fortawesome/free-brands-svg-icons'
import SocialBadge from "../Kit/Badges/SocialBadge";


const SocialContainer = () => {
    return (
        <div className='d-flex'>
            <SocialBadge icon={faTwitter}/>
            <SocialBadge icon={faGooglePlus}/>
            <SocialBadge icon={faGithub}/>
            <SocialBadge icon={faLinkedin}/>
            <SocialBadge icon={faBehance}/>
        </div>
    )
};

export default SocialContainer