import React from 'react';
import Paper from "../Kit/Panels/Paper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import KeyWords from "../WorkExperience/Items/KeyWords";

const OtherProjectItem = ({projectName, subTitle, image, description, link, github, keyWords}) => {
    return (
        <Paper>
            <Row>
                <Col md={5}>
                    <div className='d-flex h-100'>
                        <img className='img-fluid my-auto' alt='Network error' src={image}/>
                    </div>
                </Col>
                <Col md={7}>
                    <Row>
                        <Col md={12}>
                            <div className='d-flex my-3'>
                                <a href={link} target='_blank' rel='noopener noreferrer'>
                                    <h5 className='my-auto font-weight-bold'>{projectName}</h5>
                                </a>
                                <h6 className='my-auto mx-3'>{subTitle}</h6>
                            </div>
                            <a href={github} target='_blank' rel='noopener noreferrer'>
                                <div className='d-flex'>
                                    <FontAwesomeIcon className='text-primary mr-2' icon={faLink}/>
                                    <h6>Github</h6>
                                </div>
                            </a>
                            <p>
                                {description}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <hr/>
                </Col>
            </Row>
            <Row>
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
        </Paper>
    )
};

export default OtherProjectItem;