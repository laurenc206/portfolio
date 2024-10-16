"use client"

import { AnimatePresence, motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import ProjectCard from './project-card';

const AnimatedProjectCard = ( props : any) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref, 
        offset: ["start end", "start .2"],
    });



  return (
    <div className="pb-3 sm:pb-8 last:pb-0">
      <AnimatePresence mode="wait">
      <motion.div ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}} className="mb-3 sm:mb-8 last:mb:0">
       
        <ProjectCard {...props}/>
      </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedProjectCard