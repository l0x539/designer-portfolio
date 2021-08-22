import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const Item = ({url, isFirst}) => {
    const [playing, setPlaying] = useState(false)
    const seeker = useRef();
    const startPlaying = () => {
        setPlaying(true)

    }

    const pausePlaying = () => {
        setPlaying(false)
    }

    const resetSeek = () => {
        seeker.current.seekTo(0)
    }

    return (
        <div className={`container__video ${isFirst?'container__first':'container__video--lised'}`} onMouseEnter={startPlaying} onMouseLeave={pausePlaying}>
            <ReactPlayer ref={seeker} onPause={resetSeek} url={url} loop playing={playing||isFirst} muted={true} style={{width:"1px", height: "1px"}} width={"100%"} height={isFirst?"unset":"100%"} />
        </div>
    )
}

export default Item;