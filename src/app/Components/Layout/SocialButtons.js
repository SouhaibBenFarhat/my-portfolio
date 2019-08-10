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
                    <hr/>
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
                    <a href='https://www.linkedin.com/in/souhaib-ben-farhat-5667ab150/'
                       rel='noopener noreferrer'
                       target='_blank'>
                        <LinkedInLoginButton size={'40px'} iconSize={'20px'} style={{fontSize: 14}}>
                            <span>LinkedIn</span>
                        </LinkedInLoginButton>
                    </a>
                </Col>
                <Col md={12}>
                    <a href='https://github.com/SouhaibBenFarhat'
                       rel='noopener noreferrer'
                       target='_blank'>
                        <GithubLoginButton size={'40px'} iconSize={'20px'} style={{fontSize: 14}}>
                            <span>Github</span>
                        </GithubLoginButton>
                    </a>
                </Col>
                <Col md={6}>
                    <a href='https://www.facebook.com/Souhaib882' rel='noopener noreferrer' target='_blank'>
                        <FacebookLoginButton size={'40px'} iconSize={'20px'} style={{fontSize: 14}}>
                            <span>Facebook</span>
                        </FacebookLoginButton>
                    </a>
                </Col>
                <Col md={6}>
                    <a href='https://www.instagram.com/souhaib_farhat/' rel='noopener noreferrer' target='_blank'>
                        <InstagramLoginButton size={'40px'} iconSize={'20px'} style={{fontSize: 14}}>
                            <span>Instagram</span>
                        </InstagramLoginButton>
                    </a>
                </Col>
            </Row>
        </Paper>
    </>
);

export default SocialButtons