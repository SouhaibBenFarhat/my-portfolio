import React from 'react';

const PaperStyle = {
    padding: 20,
    marginBottom: 30,
    backgroundColor: 'white',
    position: 'relative'
};

const Paper = (props) => (
    <div style={PaperStyle}>
        {props.children}
    </div>);

export default Paper;