"use client"

import { projects } from '@/data'
import ProjectCard from './ui/project-card';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import AnimatedProjectCard from './ui/animated-project-card';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useState } from 'react';
import VideoModal from './ui/video-modal';


const RecentProjects = () => {
  const [open, setOpen] = useState(false);
  const content = projects.map((project) => {
    return {
        title: project.title,
        description: project.des,
        content: (
            <div className="h-full w-full relative">
              <ProjectCard {...project} key={project.title}/>
            </div>
        )
    }
  })


  return (
   
    <div className="relative items-start flex flex-col px-2 h-full w-full">
      
      <div className="lg:sticky lg:-top-1 w-full z-20 bg-black lg:pt-14">
        <h1 className="pt-2 pb-10 sm:pt-4 md:pb-12 font-domine italic tracking-wider sm:tracking-wide font-semibold text-purple ml-2 sm:text-7xl text-[3.6rem] leading-none" >
              Recent Projects
        </h1>
      </div>

      <div className="w-full hidden lg:block">
        <StickyScroll content={content} />
      </div>
     
      <div className="flex lg:hidden flex-col gap-y-44 justify-center items-center w-full">
        
        {projects.map((project, index) => (
          <AnimatedProjectCard setOpen={setOpen} {...project} key={index}/>
        ))}
 
      </div>  

      {open &&
        <VideoModal open={open} onClose={() => setOpen(false)}/>
      }

    
        
    </div> 

  )
}

export default RecentProjects