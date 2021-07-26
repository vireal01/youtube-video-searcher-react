import './VideoItem.css'
import React from 'react'

const VideoItem = ({video}) => {
    return (<div className="video-item item">
                <img className="ui small image" src={video.snippet.thumbnails.medium.url} alt=''></img>
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
            </div>)
}


export default VideoItem