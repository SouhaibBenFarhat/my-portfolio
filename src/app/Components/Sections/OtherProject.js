import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Kit/Typography/Title";
import Paper from "../Kit/Panels/Paper";
import OtherProjectItem from "../OtherProject/OtherProjectItem";
import MyCarAndroid from '../../../../public/assets/images/other-projects/karhabti-android.png'
import MyCarIOS from '../../../../public/assets/images/other-projects/karhabti-ios.jpg'

const OtherProject = () => {
    return (
        <>
            <Paper>
                <Row>
                    <Col md={12}>
                        <Title title='Other Projects'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>Project made during my university courses.</p>
                    </Col>
                </Row>
            </Paper>
            <OtherProjectItem
                projectName={'MYCAR Android'}
                github={'https://github.com/SouhaibBenFarhat/MYCAR'}
                link={'https://www.behance.net/gallery/57396965/MYCAR'}
                subTitle={'(Android/Java)'}
                image={MyCarAndroid}
                keyWords={['Android', 'Firebase', 'Google plus Auth', 'Facebook Authentication', 'Google Map', 'Facebook Share', 'Social', 'Php', 'MySQL', 'HTTP', 'Material Design']}
                description={'MY CAR is a TUNISIAN application that offers its users the possibility to find resellers according to their needs, the application allows to filter the results of search to find the car that is best suited to your needs among several announcements. Our application is a free service that allows car buyers and sellers to connect on a common network.'}
            />
            <OtherProjectItem
                projectName={'Karhabti iOS'}
                github={'https://github.com/SouhaibBenFarhat/Karhabti-IOS'}
                link={'https://www.behance.net/gallery/57396389/Karhabti'}
                subTitle={'(iOS/Swift3)'}
                image={MyCarIOS}
                keyWords={['iOS', 'xCode', 'Swift 3', 'Google plus Auth', 'Facebook Authentication', 'Google Map', 'Facebook Share', 'Social', 'Php', 'MySQL', 'HTTP', 'Material Design', 'cocoaPods', 'cocoa controls', 'Alamofire', 'Auto Layout', 'GPS Localisation']}
                description={'Our application KARHABTI is an application that offers its users the possibility to find dealers according to their position and their need, the application allows to filter the search results to find the car that best suits your needs among several announcements.'}
            />
        </>
    )
};
export default OtherProject