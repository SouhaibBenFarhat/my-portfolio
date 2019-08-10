import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from "../Kit/Panels/Paper";
import {SubTitle} from "../Kit/Typography/Title";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const fixedTagStyle = {
    position: 'absolute',
    top: 0,
    right: 13,
    backgroundColor: '#479FC8',
    color: 'white',
    padding: 4,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    fontSize: 14
};

const thumbnailStyle = {
    width: '100%',
    height: 'auto'
}

const OpenProjectItem = ({thumbnail, title, subTitle, description, githubLink, openSource}) => {

    return (
        <Paper>
            {openSource && <div style={fixedTagStyle}>
                Open source
            </div>}
            <Row>
                <Col md={12}>
                    <SubTitle title={title}/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h6>{subTitle}</h6>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <img alt={''} src={thumbnail} style={thumbnailStyle}/>
                </Col>
            </Row>
            <Row style={{marginTop: 30}}>
                <Col md={12}>
                    <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                        <Tab eventKey="description" title="Description">
                            <Row style={{marginTop: 30}}>
                                <Col>
                                    {description}
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="screenshots" title="Screenshots">
                            <Row style={{marginTop: 30}}>
                                <Col>
                                    <p className='text-grey'>Content will be provided soon</p>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="more" title="More">
                            <Row style={{marginTop: 30}}>
                                <Col>
                                    <p className='text-grey'>Content will be provided soon</p>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Paper>
    )
};

export default OpenProjectItem