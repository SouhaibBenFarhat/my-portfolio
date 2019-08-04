import React from 'react';
import {faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faBehance} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import SocialBadge from "../Kit/Badges/SocialBadge";


const SocialContainer = () => {
    return (
        <div className='d-flex'>
            <a href='https://github.com/SouhaibBenFarhat'
               rel='noopener noreferrer'
               target='_blank'>
                <SocialBadge icon={faGithub}/>
            </a>
            <a href='https://stackoverflow.com/users/8846445/benfarhat-souhaib'
               rel='noopener noreferrer'
               target='_blank'>
                <SocialBadge icon={faStackOverflow}/>
            </a>
            <a href='https://www.linkedin.com/in/souhaib-ben-farhat-5667ab150/'
               rel='noopener noreferrer'
               target='_blank'>
                <SocialBadge icon={faLinkedin}/>
            </a>
            <a href='https://behance.net/SouhaibBen' rel='noopener noreferrer' target='_blank'>
                <SocialBadge icon={faBehance}/>
            </a>
            <a href='https://www.facebook.com/Souhaib882' rel='noopener noreferrer' target='_blank'>
                <SocialBadge icon={faFacebook}/>
            </a>
            <a href='https://www.instagram.com/souhaib_farhat/' rel='noopener noreferrer' target='_blank'>
                <SocialBadge icon={faInstagram}/>
            </a>
        </div>
    )
};

export default SocialContainer