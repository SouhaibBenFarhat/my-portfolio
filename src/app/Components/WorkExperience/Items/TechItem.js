import React from 'react';
import Badge from "react-bootstrap/Badge";

const TechItemStyle = {
    margin: 5,
    padding: 5,
    fontSize: 14
};

const TechItem = ({techName}) => {
    return (
        <Badge style={TechItemStyle} variant="success">{techName}</Badge>
    )
};

export default TechItem;