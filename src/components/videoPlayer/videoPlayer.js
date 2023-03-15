import ReactPlayer from 'react-player'

function VideoPlayer({link}) {
    return (
        <div>
            <ReactPlayer
            url={link}
            controls={true}
            width='700px'
            height='auto'
            />
        </div>
    );
}

export default VideoPlayer

