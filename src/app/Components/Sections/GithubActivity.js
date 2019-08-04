import React, {useEffect} from 'react';
import Paper from "../Kit/Panels/Paper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GitHubCalendar from 'github-calendar'
import {SubTitle} from "../Kit/Typography/Title";

const GithubActivity = () => {

    useEffect(() => {
        new GitHubCalendar('#github-calendar-container', 'SouhaibBenFarhat', {responsive: true})
    });

    return (
        <Paper>
            <Row>
                <Col>
                    <SubTitle title='Github Contributions Calendar'/>
                </Col>
            </Row>
            <Row>
                <Col id='github-calendar-container'>
                </Col>
            </Row>
        </Paper>
    )
};

export default GithubActivity