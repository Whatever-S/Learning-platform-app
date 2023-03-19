import ReactPlayer from 'react-player';
import React, {useRef, useEffect } from 'react';
import Error from '../Error';
import '../videoPlayer/videoPlayer.scss'

function VideoPlayer({link,  lesson, shortId, playbackRate, setPlaybackRate}) {
    const playerRef = useRef();

    const handleReady = () => {
        const progress = localStorage.getItem(`${shortId}-lesson${lesson}-progress`);
        if (playerRef.current && progress) {
            playerRef.current.seekTo(parseFloat(progress));
        }
    }
    
    const handleProgress = (state) => {
        localStorage.setItem(`${shortId}-lesson${lesson}-progress`, state.playedSeconds);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '+') {
            const newRate = playbackRate + 0.25;
            if (newRate <= 2) {
                setPlaybackRate(newRate);
            }
            } else if (e.key === '-') {
            const newRate = playbackRate - 0.25;
            if (newRate >= 0.5) {
                setPlaybackRate(newRate);
            }
        }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [playbackRate]);

    return (
        <div className='video_player'>
            {link ? <ReactPlayer 
            url={link}
            controls={true}
            width = '100%'
            height = '100%'
            onProgress={handleProgress}
            ref={playerRef}
            onReady={handleReady}
            pip={true}
            playbackRate={playbackRate}
            /> : <Error/>}
        </div>
    );
}

export default VideoPlayer

