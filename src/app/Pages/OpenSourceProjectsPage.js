import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OpenSourceProject from "../Components/Sections/OpenSourceProject";
import OpenProjectItem from "../Components/OpenProjects/OpenProjectItem";
import TechStampThumbnail from '../../../public/assets/images/open-source-projects/techstamp-thumbnail.jpg';
import GaimzThumbnail from '../../../public/assets/images/open-source-projects/gaimz-thumbnail.jpg';
import RepThumbnail from '../../../public/assets/images/open-source-projects/rep-thumbnail.png';
import EdashThumbnail from '../../../public/assets/images/open-source-projects/edash-thumbnail.png';

const OpenSourceProjectsPage = () => {
    return (
        <>
            <Row>
                <Col md={12}>
                    <OpenSourceProject/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <OpenProjectItem
                        openSource={true}
                        title={'TechStamp - Mean stack'}
                        thumbnail={TechStampThumbnail}
                        subTitle={'A responsive Bootstrap template designed for digital products'}
                        description={
                            <p>
                                <b>TECH-STAMP is </b>
                                an Online shopping web sites for retail sales direct to
                                consumers. Providing or participating in online marketplaces, which process third-party
                                business-to-consumer or consumer-to-consumer sales. Business-to-business buying and
                                selling; Gathering and using demographic data through web contacts and social media
                            </p>
                        }/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <OpenProjectItem
                        openSource={false}
                        title={'Gaimz (Android/Java/Nodejs)'}
                        thumbnail={GaimzThumbnail}
                        subTitle={'The platform that connects Gamers through features, innovation and stability.'}
                        description={
                            <p>
                                <b>Gaimz </b>
                                is a decentralized gaming platform for gamers, think of it as Twitch.tv meets
                                Steam using. The core features are match making, live streaming, market place, events,
                                news etc. it's the place to be for e-sport players who are looking for quick match-ups
                                and fast payouts. Gaimz in an improved version of the GC-Esports projects.
                            </p>
                        }/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <OpenProjectItem
                        openSource={false}
                        title={'Rep.Wales (Android/Java)'}
                        thumbnail={RepThumbnail}
                        subTitle={'REP is an Android app where the objective is to become the first true payments social network.'}
                        description={
                            <p>
                                <b>Rep </b>
                                is an Android, iOS and Web app where the objective is to become the first true payments
                                social network. The easiest way to communicate, organise plans and finances with groups
                                & friends. From food, drinks & tickets to splitting bills, travel, rent, holidays,
                                accommodation & more. Rep's entire infrastructure and backend is designed on top of
                                <b> Blockchain</b>, providing a secure, reliable and scalable system with very fast
                                processing
                                speeds.​​​​​​​
                            </p>
                        }/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <OpenProjectItem
                        openSource={true}
                        title={'E-DASH (AngularJS/Spring-Boot/Android)'}
                        thumbnail={EdashThumbnail}
                        description={
                            <p>
                                <b>E-DASH </b>
                                is the name of our project that I, and three of my colleagues, realized as part
                                of our ESPRIT training. The project boils down to automating the process of mixing
                                aromas to obtain an "E-Juice" for electronic cigarettes smokers. The main idea was to
                                create an ecosystem that group all the users of electronic cigarettes to share their
                                experiences and exchange the best recipes. they can also
                            </p>
                        }/>
                </Col>
            </Row>
        </>
    )
};

export default OpenSourceProjectsPage;