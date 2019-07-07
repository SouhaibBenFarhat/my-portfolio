import React from 'react';

const styledImage = {
    height: 220,
    width: 220,
    borderRadius: '50%'
};

export const CircularImage = (props) => {
    return (
        <img style={styledImage} alt='network error' src={props.src}/>
    )
};


export default CircularImage