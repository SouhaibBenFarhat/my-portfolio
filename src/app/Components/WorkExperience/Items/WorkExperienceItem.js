import React, {useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {SubTitle} from "../../Kit/Typography/Title";
import TextWithIcon from "../../Kit/Typography/TextWithIcon";
import {faArrowUp, faArrowDown, faMapPin} from '@fortawesome/free-solid-svg-icons/index';
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons/index';
import {faBuilding} from '@fortawesome/free-solid-svg-icons/index';
import Paper from "../../Kit/Panels/Paper";
import KeyWords from "./KeyWords";
import SecondaryButton from "../../Kit/Control/SecondaryButtons";

const WorkExperienceItem = ({jobTitle, dates, description, address, company, companyLink, keyWords, expanded, detailLink, ...props}) => {

    const [showMore, setShowMore] = useState(expanded);

    return (
        <Paper>
            <Row>
                <Col md={12}>
                    <SubTitle title={jobTitle}/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div>
                        <TextWithIcon
                            link={companyLink}
                            icon={faBuilding}
                            text={company}
                            iconColor='text-primary'
                            bold/>
                        <TextWithIcon
                            icon={faMapPin}
                            text={address}
                            iconColor='text-red'/>
                        <TextWithIcon
                            icon={faCalendarDay}
                            text={dates}
                            iconColor='text-secondary'/>
                    </div>
                </Col>
            </Row>
            {showMore &&
            <>
                <Row>
                    <Col md={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>{description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p><b>Main Achievements:</b></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {props.children}
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={12}>
                        <p>
                            <b>Key words:</b>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <KeyWords keyWords={keyWords}/>
                    </Col>
                </Row>
            </>
            }
            <Row>
                <Col md={12}>
                    <hr/>
                </Col>
                <Col md={12}>
                    <div className='d-flex'>
                        <div className='text-left'>
                            <SecondaryButton withIcon text={showMore ? 'Show Less' : 'Show More'}
                                             icon={showMore ? faArrowUp : faArrowDown}
                                             onClick={() => setShowMore(!showMore)}/>
                        </div>
                        <a className='ml-auto my-auto' href={detailLink || companyLink} target='_blank'
                           rel='noopener noreferrer'>
                            More detail.
                        </a>
                    </div>
                </Col>
            </Row>

        </Paper>
    )
};

export default WorkExperienceItem