import React from 'react';
import {faMapPin} from '@fortawesome/free-solid-svg-icons';
import {faSkype} from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import TextWithIcon from "../Kit/Typography/TextWithIcon";
import PrimaryButton from "../Kit/Control/PrimaryButton";

const Contact = () => {
    return (
        <div>
            <TextWithIcon icon={faMapPin} text={'Munich, Germany'}/>
            <TextWithIcon icon={faSkype} text={<a href='/'>Souhaib.BENFARHAT</a>}/>
            <TextWithIcon icon={faPhone} text={<a href='tel:+491632149290'>+491632149290</a>}/>
            <TextWithIcon icon={faMailBulk}
                          text={<a href='mailto:souhaib.b.farhat@gmail.com'>souhaib.b.farhat@gmail.com</a>}/>
            <div className='mt-2'>
                <PrimaryButton withIcon text={'Contact Me'} icon={faLocationArrow}/>
            </div>
        </div>
    )
};

export default Contact