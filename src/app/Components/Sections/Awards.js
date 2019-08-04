import React from 'react';
import Paper from "../Kit/Panels/Paper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Kit/Typography/Title";
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import TextWithIcon from "../Kit/Typography/TextWithIcon";
import MediaReader from "../Kit/Video/MediaReader";

const Awards = () => {
    return (
        <>
            <Paper>
                <Row>
                    <Col md={12}>
                        <Title title='Awards'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h5 className='font-weight-bold text-primary'>Winner at AIESEC Bardo Hackathon</h5>
                    </Col>
                    <Col md={12}>
                        <TextWithIcon icon={faCalendar} text={'March 2017'} iconColor='text-primary'/>
                    </Col>
                    <Col md={12} className='mt-4'>
                        <MediaReader publication
                                     height={'200px'}
                                     withTitle={false}
                                     link={'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FClubTunivisionsEsprit%2Fphotos%2Fa.1225461510907394%2F1225464337573778%2F%3Ftype%3D3&width=500'}/>
                    </Col>
                    <Col md={12}>
                        <a href='https://www.facebook.com/pg/ClubTunivisionsEsprit/photos/?tab=album&album_id=1225461510907394'
                           target='_blank' rel='noopener noreferrer'> More detail</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h5 className='font-weight-bold text-primary'>Finalist at Tech Innovation Community </h5>
                    </Col>
                    <Col md={12}>
                        <TextWithIcon icon={faCalendar} text={'June 2017'} iconColor='text-primary'/>
                    </Col>
                    <Col md={12} className='mt-4'>
                        <MediaReader publication
                                     height={'200px'}
                                     withTitle={false}
                                     link={'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FTechInnovationCommunity%2Fphotos%2Fa.1052471004852457%2F1052473048185586%2F%3Ftype%3D3&width=500'}/>
                    </Col>
                    <Col md={12}>
                        <a href='https://www.facebook.com/pg/TechInnovationCommunity/photos/?tab=album&album_id=1052498051516419'
                           target='_blank' rel='noopener noreferrer'> More detail</a>
                    </Col>
                </Row>
            </Paper>
        </>
    )
};

export default Awards