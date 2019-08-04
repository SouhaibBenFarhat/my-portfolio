import React from 'react';
import Paper from "../Kit/Panels/Paper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Kit/Typography/Title";

const Languages = () => {
    return (
        <>
            <Paper>
                <Row>
                    <Col>
                        <Title title='Languages'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><b>Arabic: </b>Native Speaker</p>
                        <p><b>English: </b>Fluent</p>
                        <p><b>French: </b>Fluent</p>
                        <p><b>German: </b>A1 (Currently learning)</p>
                    </Col>
                </Row>
            </Paper>
        </>
    )
};

export default Languages