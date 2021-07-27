import React from 'react'

const VideoDetail = ({ video }) => {
        if(video === null){
            return(
                <div className="ui segment" style={{height: "315px", width: "560px"}}>
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            )
        }
        return (
        <div>
 
            <div className="ui segment">
            <div className="ui embed">
            <iframe width="560" height="315" 
            src={"https://www.youtube.com/embed/"+ video.id.videoId} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            </div>
                <div className="ui header">
                    {video.snippet.title}
                </div>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail