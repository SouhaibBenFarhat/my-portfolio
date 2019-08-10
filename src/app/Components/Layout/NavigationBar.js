import React, {useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav'
import {withRouter} from 'react-router-dom'

const NavigationBar = ({history}) => {

    const [routeKey, setRouteKey] = useState(0);

    useEffect(() => {
        history.push(routeKey)
    }, [routeKey, history]);

    return (
        <div className='navigation'>
            <Nav
                className="justify-content-end"
                defaultActiveKey="/"
                onSelect={(selectedKey) => setRouteKey(selectedKey)}>
                <Nav.Item>
                    <Nav.Link eventKey="/">Work Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/open-source-project">Open Projects</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
};

export default withRouter(NavigationBar);