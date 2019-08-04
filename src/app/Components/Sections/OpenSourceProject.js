import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Kit/Typography/Title";
import Paper from "../Kit/Panels/Paper";

const OpenSourceProject = () => {
    return (
        <>
            <Paper>
                <Row>
                    <Col md={12}>
                        <Title title='Open Source Projects'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>This is a short overview about some of my open source projects, some of those projects are
                            usually build
                            for learning purposes as side projects where I can use and latest technologies in order to
                            improve my knowledge and discover new frameworks. And some other projects are build in
                            academical context as part of my University courses.</p>
                    </Col>
                </Row>
            </Paper>
            <Row>
                <Col md={12} className='text-center'>
                    <p className='text-dark-grey'>No project available currently.</p>
                </Col>
            </Row>
        </>
    )
};
export default OpenSourceProject