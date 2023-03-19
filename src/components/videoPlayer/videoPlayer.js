import ReactPlayer from 'react-player'
import React, { useState, useEffect, useRef } from 'react';
import '../videoPlayer/videoPlayer.scss'

function VideoPlayer({link, setVideoLink, lesson, shortId}) {
    const [played, setPlayed] = useState(0);
    const playerRef = useRef();

    useEffect(() => {
        const progress = localStorage.getItem(`${shortId}-lesson${lesson}-progress`);
        if (playerRef.current && progress) {
            playerRef.current.seekTo(parseFloat(progress));
            setPlayed(parseFloat(progress));
        }
    }, [shortId,lesson]);
    
    const handleProgress = (state) => {
        setPlayed(state.playedSeconds);
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
            />
        </div>
    );
}

export default VideoPlayer

