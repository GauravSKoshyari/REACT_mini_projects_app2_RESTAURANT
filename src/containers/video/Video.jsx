import React, { useRef, useState } from 'react'
import "./Video.css"
import { meal } from '../../constants'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


const Video = () => {

    const [playVideo, setPlayVideo] = useState(false)
    const vidRef = useRef();
    return (
        <div className='app__video'>
            <video
                ref={vidRef}
                src={meal}
                type="video/mp4"
                loop
                controls={false}
                muted
            />
            <div className="app__video-overlay">
                <div className="app__video-control" onClick={() => {
                    setPlayVideo(!playVideo)
                    if (!playVideo) {
                        vidRef.current.play()
                    }
                    else {
                        vidRef.current.pause()
                    }
                }}>
                    {playVideo ? <BsPauseFill fontSize={30} /> : <BsFillPlayFill fontSize={30} />}
                </div>
            </div>
        </div>
    )
}

export default Video