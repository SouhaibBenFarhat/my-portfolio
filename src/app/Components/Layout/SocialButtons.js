import React from 'react';
import {FacebookLoginButton} from "react-social-login-buttons";
import {LinkedInLoginButton} from "react-social-login-buttons";
import {InstagramLoginButton} from "react-social-login-buttons";
import {GithubLoginButton} from "react-social-login-buttons";
import Paper from "../Kit/Panels/Paper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Kit/Typography/Title";

const SocialButtons = () => (
    <>
        <Paper>
            <Row>
                <Col md={12}>
                    <Title title='Social'/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <p>
                        Here you can find me on social media.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <LinkedInLoginButton size={'40px'} iconSize={'20px'} style={{fontSize: 14}}>
                        <span>LinkedIn</span>
                    </LinkedInLoginButton>
                </Col>
                <Col md={12}>
                    <GithubLoginButton size={'40px'} iconSize={'20px'} style={{fontSize: 14}}>
                        <span>Github</span>
                    </GithubLoginButton>
                </Col>
                <Col md={6}>
                    <FacebookLoginButton size={'40px'} iconSize={'20px'} style={{fontSize: 14}}>
                        <span>Facebook</span>
                    </FacebookLoginButton>
                </Col>
                <Col md={6}>
                    <InstagramLoginButton size={'40px'} iconSize={'20px'} style={{fontSize: 14}}>
                        <span>Instagram</span>
                    </InstagramLoginButton>
                </Col>
            </Row>
        </Paper>
    </>
);

export default SocialButtons