import React from 'react';
import TechItem from "./TechItem";

const KeyWords = ({keyWords}) => {
    if (keyWords === undefined) return null;
    return (
        <>
            {keyWords.map((word, index) => {
                return (
                    <TechItem techName={word} key={index}/>
                )
            })}
        </>
    )
};

export default KeyWords