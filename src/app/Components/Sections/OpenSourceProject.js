import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Kit/Typography/Title";
import Paper from "../Kit/Panels/Paper";
import SecondaryButton from "../Kit/Control/SecondaryButtons";
import {withRouter} from "react-router-dom";

const OpenSourceProject = (props) => {
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
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>This is a short overview about some of the projects that I worked on and I'm allowed to show
                            them <b><i>Of course after taking permission from my bosses.</i></b>, some
                            of those projects are built during my previous experiences.
                            Beside that, I'm also showing other project that I made
                            for learning purposes as side projects where I can use and learn latest technologies in
                            order to
                            improve my knowledge and discover new frameworks. And some other projects are build in
                            academical context as part of my University courses.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {props.history.location.pathname !== '/open-source-project' ?
                            <SecondaryButton
                                fullWidth
                                onClick={() => props.history.push('/open-source-project')}
                                text={'Have a look'}
                                withIcon={false}/>
                            :
                            <SecondaryButton
                                fullWidth
                                onClick={() => props.history.push('/')}
                                text={'Back to work experience'}
                                withIcon={false}/>
                        }
                    </Col>
                </Row>
            </Paper>
            <Row>
                <Col md={12} className='text-center'>
                    {props.children}
                </Col>
            </Row>
        </>
    )
};
export default withRouter(OpenSourceProject);