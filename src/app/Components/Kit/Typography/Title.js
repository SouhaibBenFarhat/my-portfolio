import React from 'react'

const Title = ({title}) => {
    return (
        <h2 className='font-weight-bold'>
            {title}
        </h2>
    )
};

export const SubTitle = ({title}) => {
    return (
        <h5 className='font-weight-bold text-dark-grey'>
            {title}
        </h5>
    )
};

export default Title;
