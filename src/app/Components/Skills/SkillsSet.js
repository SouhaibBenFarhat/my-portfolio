import React from 'react';
import SkillItem from "./SkillItem";

const SkillsSet = ({skills}) => {
    return (
        <>
            {skills.map((skill, index) => {
                return (
                    <SkillItem key={index} skillName={skill.name} level={skill.level}/>
                )
            })}
        </>
    )
};

export default SkillsSet