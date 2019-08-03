import React from 'react';
import {faMapPin} from '@fortawesome/free-solid-svg-icons';
import {faSkype} from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons';
import TextWithIcon from "../Kit/Typography/TextWithIcon";

const Contact = () => {
    return (
        <div>
            <TextWithIcon icon={faMapPin} text={'Munich, Germany'}/>
            <TextWithIcon icon={faSkype} text={<a href='/'>Souhaib.BENFARHAT</a>}/>
            <TextWithIcon icon={faPhone} text={<a href='/'>+491632149290</a>}/>
            <TextWithIcon icon={faMailBulk} text={<a href='/'>souhaib.b.farhat@gmail.com</a>}/>
        </div>
    )
};

export default Contact