// src/components/VideoPlayer.tsx
"use client";
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        // url='/assets/homevideo.mp4'
        width='100%'
        playing={true}
        muted={true}
        height='100%'
        controls={true}
      />
    </div> 
  )
}

export default VideoPlayer
