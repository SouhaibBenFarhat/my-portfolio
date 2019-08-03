import React from 'react';
import {Row, Col} from 'react-bootstrap'
import Title from "../Kit/Typography/Title";
import Paper from "../Kit/Panels/Paper";

const
    AboutMe = (props) => {
        return (
            <Paper>
                <Row>
                    <Col md={12}>
                        <Title title={'About Me'}/>
                    </Col>
                    <Col md={12}>
                        <p>
                            I'm a developer based in Munich, Germany specializing in building WEB & Mobile apps,
                            consider myself as full-stack developer mainly using ReactJS with redux, Angular, Nodejs and
                            Sprint-boot. I also enjoy making awesome mobile applications on different platforms
                            (Android/iOS) and tweaking with graphics animations with beautiful user experience. I like
                            coffee, cars and Linux. I enjoy building stuff, investigating new technologies and general
                            hacking. I tend to follow start-ups scene and amazing collaboration.
                        </p>
                    </Col>
                </Row>
            </Paper>
        )
    };

export default AboutMe;