import React from 'react';
import Paper from "../Kit/Panels/Paper";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Contact from "../Sections/Contact";
import Skills from "../Sections/Skills";
import Languages from "../Sections/Languages";

const RightSideBar = () => {
    return (
        <>
            <Paper>
                <Row>
                    <Col md={12}>
                        <Contact/>
                    </Col>
                </Row>
            </Paper>
            <Row>
                <Col md={12}>
                    <Skills/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Languages/>
                </Col>
            </Row>
        </>
    )
};

export default RightSideBar;