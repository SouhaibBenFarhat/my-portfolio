import React from 'react';

const Achievements = ({achievements}) => {
    return (
        <>
            <ul>
                {achievements.map((achievement, index) => {
                    return (
                        <li key={index}>
                            {achievement}
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default Achievements;