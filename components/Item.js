import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const Item = ({url}) => {
    return (
        <div className={`container__video ${isFirst?'container__first':'container__video--lised'}`}>
            <ReactPlayer url={url} loop playing muted={true} style={{width:"1px", height: "1px"}} width={"100%"} height={isFirst?"unset":"100%"} />
        </div>
    )
}

export default Item;