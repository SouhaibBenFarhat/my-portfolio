import React from 'react';
import Title from "../Kit/Typography/Title";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from "../Kit/Panels/Paper";
import SkillsSet from "../Skills/SkillsSet";

const skills = {
    frontend: [
        {
            name: 'Html',
            level: 88
        },
        {
            name: 'CSS Bootstrap',
            level: 88
        },
        {
            name: 'ReactJS',
            level: 80
        },
        {
            name: 'Angular',
            level: 70
        },
        {
            name: 'Javascript',
            level: 80
        },
        {
            name: 'Typescript',
            level: 60
        }
    ],
    backend: [
        {
            name: 'Java (Spring Boot/Java EE)',
            level: 50
        },
        {
            name: 'Ruby on Rails',
            level: 70
        },
        {
            name: 'Nodejs',
            level: 60
        },
        {
            name: 'Django (Rest Framework)',
            level: 40
        }
    ],
    database: [
        {
            name: 'PostgresQL',
            level: 80
        },
        {
            name: 'MySql',
            level: 70
        },
        {
            name: 'MongoDB',
            level: 60
        }
    ],
    tools: [
        {
            name: 'Mac OS X',
            level: 80
        },
        {
            name: 'Intellij IDE',
            level: 70
        },
        {
            name: 'GIT',
            level: 80
        },
        {
            name: 'Linux',
            level: 80
        },
        {
            name: 'Sketch',
            level: 80
        }
    ]
};

const Skills = () => {
    return (
        <>
            <Paper>
                <Row>
                    <Col md={12}>
                        <Title title='Skills'/>
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
                            During my career as a software developer, I worked hard on many different projects (Front &
                            backend) and that's helped me to acquire and build a good technical background in building
                            advanced web applications and to deliver high quality products. I always make sure to build
                            projects using last available technologies to ensure the maintainability and the good
                            performance.
                        </p>
                    </Col>
                </Row>
            </Paper>
            <Paper>
                <Row>
                    <Col md={12}>
                        <h5 className='font-weight-bold'>
                            Web
                        </h5>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h6 className='font-weight-bold'>
                            Frontend
                        </h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <SkillsSet skills={skills.frontend}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h6 className='font-weight-bold'>
                            Backend
                        </h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <SkillsSet skills={skills.backend}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h6 className='font-weight-bold'>
                            Databases
                        </h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <SkillsSet skills={skills.database}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h6 className='font-weight-bold'>
                            Tools
                        </h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <SkillsSet skills={skills.tools}/>
                    </Col>
                </Row>
            </Paper>
        </>
    )
};

export default Skills