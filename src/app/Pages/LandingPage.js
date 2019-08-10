import React from 'react';
import OpenSourceProject from "../Components/Sections/OpenSourceProject";
import OtherProject from "../Components/Sections/OtherProject";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WorkExperience from "../Components/Sections/WorkExperience";
import AboutMe from "../Components/Sections/AboutMe";

const LandingPage = () => {
    return (
        <Row>
            <Col md={12}>
                <AboutMe/>
                <OpenSourceProject/>
                <WorkExperience/>
                <OtherProject/>
            </Col>
        </Row>
    )
};

export default LandingPage;