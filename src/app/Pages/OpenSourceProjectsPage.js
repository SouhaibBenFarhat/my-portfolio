import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OpenSourceProject from "../Components/Sections/OpenSourceProject";

const OpenSourceProjectsPage = () => {
    return (
        <Row>
            <Col md={12}>
                <OpenSourceProject/>
            </Col>
        </Row>
    )
};

export default OpenSourceProjectsPage;