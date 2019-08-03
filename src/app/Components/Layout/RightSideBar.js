import React from 'react';
import Paper from "../Kit/Panels/Paper";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Contact from "../Sections/Contact";

const RightSideBar = () => {
    return (
        <Paper>
            <Row>
                <Col md={12}>
                    <Contact/>
                </Col>
            </Row>
        </Paper>
    )
};

export default RightSideBar;