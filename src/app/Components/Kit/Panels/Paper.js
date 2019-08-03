import React from 'react';

const PaperStyle = {
    padding: 20,
    marginBottom: 30,
    backgroundColor: 'white'
};

const Paper = (props) => (
    <div style={PaperStyle}>
        {props.children}
    </div>);

export default Paper;