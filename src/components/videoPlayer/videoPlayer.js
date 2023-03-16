import ReactPlayer from 'react-player'
import '../videoPlayer/videoPlayer.scss'

function VideoPlayer({link}) {
    return (
        <div>
            <ReactPlayer className='video_player'
            url={link}
            controls={true}
            width='700px'
            height='auto'
            />
        </div>
    );
}

export default VideoPlayer

