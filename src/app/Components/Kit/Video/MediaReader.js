import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'

const MediaReader = ({withTitle = true, video, publication, link, height = '450px'}) => {
    return (
        <div>
            {withTitle && <Row>
                <Col>
                    <p><b>Media</b></p>
                </Col>
            </Row>}
            <Row>
                <Col>
                    {video && <ReactPlayer
                        controls={true}
                        url={link}
                        width='100%'
                        height='100%'/>}
                    {publication &&
                    <Iframe url={link}
                            width="100%"
                            height={height}
                            frameBorder={0}
                            display="initial"
                            position="relative"/>
                    }
                </Col>
            </Row>
        </div>
    )
};

export default MediaReader;