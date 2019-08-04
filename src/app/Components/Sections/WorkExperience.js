import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from "../Kit/Panels/Paper";
import Title from "../Kit/Typography/Title";
import WorkExperienceItem from "../WorkExperience/Items/WorkExperienceItem";
import Achievements from "../WorkExperience/Items/Achievements";
import Moment from 'react-moment';
import MediaReader from "../Kit/Video/MediaReader";

const WorkExperience = () => {
    return (
        <>
            <Paper>
                <Row>
                    <Col md={12}>
                        <Title title='Work Experience'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>This is a short intro to what I've been up to lately.</p>
                    </Col>
                </Row>
            </Paper>
            <WorkExperienceItem
                jobTitle={'Full Stack Developer - Full Time (ReactJS/Rails)'}
                company={'Klarx'}
                address={'Munich'}
                companyLink={'https://www.klarx.de'}
                detailLink={'https://www.klarx.de/jobs'}
                expanded={true}
                dates={
                    <span>January 2019 - Present
                        <span> (<Moment diff='2019-01-01' unit='months'>{new Date()}</Moment> months)</span>
                    </span>
                }
                description={'klarx is a Munich based start-up operating an online platform for construction equipment and heavy machinery rental. As an independent full-service provider, klarx digitalizes the entire rental process for rental stations and lessees. The platform offers efficient and transparent overviews of final rental prices – including logistics and insurance – and availabilities for equipment all over Germany. Thus, klarx enables the customer to get the best price in the shortest time.'}
                keyWords={['ReactJS', 'Redux', 'CSS', 'HTML', 'Javascript', 'JQuery', 'RestAPI', 'UX/ UI Design', 'Component Based Architecture', 'Material-design', 'Rails', 'Ruby', 'MVC', 'PostgresQL', 'Rake Tasks', 'Delay Job']}>
                <Achievements achievements={
                    [
                        'Manage products, Rentals, Supplier stations.',
                        'Tracking equipments and planning rentals.',
                        'Manage Construction projects and rentals overview.',
                        'Manage outgoing and incoming Invoices',
                        'Online payment.',
                        'Responsible of improving automation for predefined rentals requirements for private customers.'
                    ]
                }
                />
                <MediaReader publication
                             link={'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fklarx.de%2Fposts%2F833729143693997&width=500'}/>
            </WorkExperienceItem>
            <WorkExperienceItem
                jobTitle={'Frontend Javascript Developer - Internship (ReactJS)'}
                company={'Motius With BMW'}
                companyLink={'https://360.here.com/socrates-2'}
                expanded={true}
                address={'Munich'}
                dates={
                    <span>July 2018 – November 2018
                        <span> (<Moment diff='2018-07-01' unit='months'>{'2018-11-01'}</Moment> months)</span>
                    </span>
                }
                description={'In this project for BMW the main goal was to extend an existing web app, which showcases BMW’s fleet management and ride hailing algorithms by simulating traffic conditions and visualising traffic patterns into a map. Our task was to take their existing app with the goal of improving the UI and extending the backend with some new features like adding routing strategies, adding new vehicle simulations etc.'}
                keyWords={['ReactJS', 'Redux', 'CSS', 'HTML', 'Javascript', 'JQuery', 'RestAPI', 'UI/UX Design', 'Component Based Architecture', 'Material-design', 'Open Layers', 'Here Technology', 'Geolocation', 'Websocket']}>
                <Achievements achievements={
                    [
                        'Active involvement of the customer (road user) and the communities (pre-trip, on-trip and post-trip)',
                        'Move from managing traffic to supporting individuals',
                        'Smart routing by optimising network traffic flow and showing individual routing towards public event locations',
                        'Actual speed and lane advices information',
                        'Local information and hazardous Road warnings',
                        'Environmental/areal information and constraints'
                    ]
                }
                />
                <MediaReader video link={'https://www.facebook.com/here/videos/474822936330920/'}/>
            </WorkExperienceItem>
            <WorkExperienceItem
                jobTitle={'Full Stack Developer - Internship (ReactJS/Django)'}
                company={'Motius'}
                companyLink={'https://www.motius.de'}
                address={'Munich'}
                expanded={true}
                dates={
                    <span>April 2018 – November 2018
                        <span> (<Moment diff='2018-04-01' unit='months'>{'2018-11-01'}</Moment> months)</span>
                    </span>
                }
                description={'Design and development of the new Motius platform internally called \'Talent Pool\'. This platform is the core product through which Motius manage a lot of internal company processes. The main goal was to switch from Django templates to a Reactjs (with redux) based Frontend that is more suitable for its use..'}
                keyWords={['ReactJS', 'Redux', 'CSS', 'HTML', 'Javascript', 'JQuery', 'RestAPI', 'Django', 'Django REST Framework', 'JWT', 'UX/UI Design', 'Component Based Architecture']}>
                <p>
                    Documentation, Talent profiles, Vacation tracking of employees, Project management, Workers Profile,
                    Time Tracking, Talent Matching, Open Opportunities, Contract management. and many more.
                </p>

                <MediaReader publication
                             link={'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmotius.de%2Fposts%2F1996918750347496%3A0&width=500&show_text=true&appId=1263398917074792&height=505'}/>
            </WorkExperienceItem>
            <WorkExperienceItem
                jobTitle={'Android Developer - Remote (Android, Java)'}
                company={'Lynq'}
                companyLink={'https://lynq.eu/'}
                address={'Cardiff, United Kingdom'}
                dates={
                    <span>September 2017 – December 2017
                        <span> (<Moment diff='2017-11-01' unit='months'>{'2018-02-01'}</Moment> months)</span>
                    </span>
                }
                description={'REP is an Android and iOS app where the objective is to become the first true payments social network. One of my main duties towards this project is to optimize the code to get the best possible performance across various devices. also my responsibility is to maintain and repair any bugs found, as well as create new features plans, graphics, and coding by collaborating with internal and external teams such as Product Managers and Testers.'}>
                <Achievements achievements={
                    [
                        'Users authentications and profile settings.',
                        'Developing a data caching module based on REALM library for android to optimize data transferring, and network usage in order to provide users offline functionalities.',
                        'Working with in-app-purchase and credit card scanning module (Card.io Library).'
                    ]
                }
                />
            </WorkExperienceItem>
            <WorkExperienceItem
                jobTitle={'Full Stack Javascript Developer - Working Student (Angular 4/Nodejs)'}
                company={'Xedyas'}
                companyLink={'https://www.gaimz.io'}
                address={'Tunis, Tunisia'}
                dates={
                    <span>June 2017 – November 2017
                        <span> (<Moment diff='2017-06-01' unit='months'>{'2017-11-01'}</Moment> months)</span>
                    </span>
                }
                description={'Working on a new Gaming platform name \'Gaimz\' which is a decentralized gaming platform for gamers, think of it as Twitch.tv meets Steam using. The core features are match making, live streaming, market place, events, news etc. it\'s the place to be for e-sport players who are looking for quick match-ups and fast payouts. Gaimz in an improved version of the GC-Esports projects.'}
                keyWords={['Nodejs', 'Express', 'Socket.io', 'JWT', 'RestAPI', 'MongoDB', 'Mongoose', 'Angular 4', 'TypeScript', 'Rxjs', 'Javascript']}>
                <p>
                    Responsible for collaborating with a team of 3 developers in order to develop a gaming platform for
                    video game players. My responsibilities are to understand the initial need, to discuss the technical
                    choices as well as the identification of the bugs and the correction of the problems encountered.
                </p>
                <Achievements achievements={
                    [
                        'Match Making: Gaimz provides both an automated matchmaking and an automated result reporting, which makes it both reliable and timely.',
                        'Live Streaming: Gaimz integrates in its system some well known third parties, such as Twitch, which is advantageous to those who have Twitch or Youtube accounts.',
                        'Player Finder: You can find any player on our platform, check their profiles, statistics, follow them, sponsor them, invite them to your team or just become friends.',
                        'News: Every user can contribute to the News section and get rewarded with Gaimz Tokens for doing so.',
                        'Social Components: On our platform, Gaimz provides all the needed components to socialize. You can chat, check the latest news, watch events or even organize them.',
                        'Events: Users can crowd-fund their events on our platform and get assistance from others in organizing their them.'
                    ]
                }
                />
            </WorkExperienceItem>
        </>
    )
};

export default WorkExperience