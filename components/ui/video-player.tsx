"use client"
import { CldVideoPlayer, CloudinaryVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { MutableRefObject, useEffect, useRef, useState } from 'react';


const VideoPlayer = () => {
  const [videoPlayerInit, setVideoPlayerInit] = useState(false);

  const playerRef = useRef() as MutableRefObject<CloudinaryVideoPlayer>;
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>
  

  const onLoad = () => {
    setVideoPlayerInit(true) 
  }

  useEffect(() => {   
    if (videoRef?.current) {
      videoRef.current.setAttribute('data-cld-colors', '{"accent":"#cbacf9"}')
    }

    if (videoPlayerInit && playerRef.current) {     
      playerRef.current.volume(0.5)
      playerRef.current.source('HapMapDemo', {
        textTracks: {
          captions: {
          label: 'English',
          language: 'en',
          default: true,
          url: 'https://res.cloudinary.com/dhekoldby/raw/upload/v1726200679/HapMapCaptions_nzkw5x.vtt',
        
          },
          options: { 
            theme: "videojs-default"
          }
        }, 
        
      
        
      })
    }
    
  }, [videoPlayerInit, videoRef])
  
  return (
    <div>
      <CldVideoPlayer     

        onDataLoad={onLoad}
        playerRef={playerRef}
        videoRef={videoRef}
        src={"HapMapDemo"}
        logo={{
          imageUrl: getCldImageUrl({
            src: 'Logo'
          }),
         
        }}
        poster={
          {
            src: "HapMapPoster",
            border: "100px_solid_black"
          }
        }
          
        

    
        
          
          
        
        
        
      />
    </div>
  )
}

export default VideoPlayer