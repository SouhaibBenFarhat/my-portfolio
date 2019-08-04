import React from 'react';
import Header from './Components/Layout/Header'
import '../Styles/main/app.css';
import AboutMe from "./Components/Sections/AboutMe";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import RightSideBar from "./Components/Layout/RightSideBar";
import Row from "react-bootstrap/Row";
import WorkExperience from "./Components/Sections/WorkExperience";
import OpenSourceProject from "./Components/Sections/OpenSourceProject";
import OtherProject from "./Components/Sections/OtherProject";
import GithubActivity from "./Components/Sections/GithubActivity";

function App() {
    return (
        <div className="App">
            <Header/>
            <Container>
                <Row>
                    <Col md={8}>
                        <AboutMe/>
                        <WorkExperience/>
                        <OpenSourceProject/>
                        <OtherProject/>
                    </Col>
                    <Col md={4}>
                        <RightSideBar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <GithubActivity/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
