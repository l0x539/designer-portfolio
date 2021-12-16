import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const Item = ({url, isFirst}) => {
    const [playing, setPlaying] = useState(false)
    const startPlaying = () => {
        setPlaying(true)

    }

    const pausePlaying = () => {
        setPlaying(false)
    }

    return (
        <div className={`container__video ${isFirst?'container__first':'container__video--lised'}`} onMouseEnter={startPlaying} onMouseLeave={pausePlaying}>
            <ReactPlayer url={url} loop playing={playing||isFirst} muted={true} style={{width:"1px", height: "1px"}} width={"100%"} height={isFirst?"unset":"100%"} />
        </div>
    )
}

export default Item;