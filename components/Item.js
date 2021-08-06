import { useState } from 'react';
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
        <div className={`container__video ${isFirst?'container__first':''}`} onMouseEnter={startPlaying} onMouseLeave={pausePlaying}>
            <ReactPlayer url={url} loop playing={playing} />
        </div>
    )
}

export default Item;