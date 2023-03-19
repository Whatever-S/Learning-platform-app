import ReactPlayer from 'react-player'
import React, {useRef } from 'react';
import '../videoPlayer/videoPlayer.scss'

function VideoPlayer({link, setVideoLink, lesson, shortId}) {
    const playerRef = useRef();

    const handleReady = () => {
        const progress = localStorage.getItem(`${shortId}-lesson${lesson}-progress`);
        if (playerRef.current && progress) {
            playerRef.current.seekTo(parseFloat(progress));
        }
    }
    
    const handleProgress = (state) => {
        localStorage.setItem(`${shortId}-lesson${lesson}-progress`, state.playedSeconds);
    };

    return (
        <div className='video_player'>
            <ReactPlayer 
            url={link}
            controls={true}
            width = '100%'
            height = '100%'
            onProgress={handleProgress}
            ref={playerRef}
            onReady={handleReady}
            pip={true}
            />
        </div>
    );
}

export default VideoPlayer

