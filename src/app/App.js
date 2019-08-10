import React from 'react';
import Header from './Components/Layout/Header'
import '../Styles/main/app.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import RightSideBar from "./Components/Layout/RightSideBar";
import Row from "react-bootstrap/Row";
import GithubActivity from "./Components/Sections/GithubActivity";
import FixedPopup from "./Components/Layout/FixedPopup";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import LocationListener from "./HOC/LocationListener";
import AsyncComponent from './HOC/AsyncComponent';
import NavigationBar from "./Components/Layout/NavigationBar";
import GetInstagramFeed from "./HttpRequests/Instagram";


function App() {

    GetInstagramFeed().then((data) => {
        console.log(data);
    });

    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar/>
                <Header/>
                <Container>
                    <Row>
                        <Col md={8}>
                            <LocationListener>
                                <Switch>
                                    <Route exact path="/"
                                           component={AsyncComponent(() => import('./Pages/LandingPage'))}/>
                                    <Route exact path="/open-source-project"
                                           component={AsyncComponent(() => import('./Pages/OpenSourceProjectsPage'))}/>
                                </Switch>
                            </LocationListener>
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
                <FixedPopup/>
            </BrowserRouter>
        </div>
    );
}

export default App;
