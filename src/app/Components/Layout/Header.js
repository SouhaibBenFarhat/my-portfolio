import React from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import CircularImage from '../Kit/ImageComponents/CircularImage'
import image from '../../../../public/assets/images/souhaib.jpg'
import SocialContainer from "./SocialContainer";

const Header = () => {
    return (
        <div className='header d-flex'>
            <div className='w-100 my-auto'>
                <Container fluid>
                    <Row>
                        <Col md={2} className='text-right'>
                            <CircularImage src={image}/>
                        </Col>
                        <Col md={8} className='d-flex'>
                            <div className='my-auto'>
                                <Row>
                                    <Col>
                                        <h1 className='text-white font-weight-bold'>Souhaib BEN FARHAT</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h2 className='text-white'>Web & Mobile Developer</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <SocialContainer/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};


export default Header