"use client"
import { X } from 'lucide-react';
import VideoPlayer from './video-player';

const VideoModal = ({ open, onClose }: any ) => {  

  return (
    <div  
        className={`
            z-50 fixed inset-0 flex justify-center items-center transition-colors h-full w-full
            ${open ? "visible bg-black/60" : "invisible"}`}>
                
            <div 
              
                className={`
                    px-3 py-6 sm:px-6 shadow transition-all  bg-zinc-950 rounded-xl border border-white/[.2]
                    ${open ? "opacity-100" : "opacity-0"}
                `}>
                    
                    <div className="flex justify-between items-center w-full pb-4 px-1 sm:px-4">
                       <p className="text-white text-[18px] sm:text-[24px] font-semibold lg:text-[32px]">
            
                            {`HapMap Demo`}
                        </p>
                        <button 
                            onClick={onClose}
                            className="items-center text-neutral-300 hover:text-white font-semibold h-full">
                                <X />
                        </button>
                    </div>
                    <div className="w-[80vw] max-w-[1000px] relative">
                    
                      <VideoPlayer />
                    
                    </div>
                    
                    

            </div>
    
    </div>
  )
}

export default VideoModal;