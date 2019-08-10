import React, {useState, useEffect} from 'react';
import GetInstagramFeed from "../../HttpRequests/Instagram";
import Paper from "../Kit/Panels/Paper";

const FeedsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    imgWrapper: {
        margin: 5
    }
};

const InstagramFeed = () => {

    const [feeds, setFeeds] = useState([]);
    useEffect(() => {
        GetInstagramFeed().then((data) => {
            setFeeds(data.data);
        })
    }, []);

    return (
        <Paper>
            <div style={FeedsContainerStyle}>
                {feeds.map((feed) => {
                    return (
                        <div style={FeedsContainerStyle.imgWrapper} key={feed.id}>
                            <img height={50} width={50} src={feed.images.thumbnail.url} alt={''}/>
                        </div>
                    )
                })}
            </div>
        </Paper>
    )
};

export default InstagramFeed