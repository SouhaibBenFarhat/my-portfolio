import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import * as Scroll from 'react-scroll/modules';

const LocationListener = ({history, ...props}) => {
    const scroll = Scroll.animateScroll;

    useEffect(() => history.listen(() => {
        scroll.scrollToTop();
    }));

    return (
        <>
            {props.children}
        </>
    )
};

export default withRouter(LocationListener)
