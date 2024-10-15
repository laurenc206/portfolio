import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const ProjectWrapper = ({
    component,
    componentId,
    setVisibleProject, 
    children
}: {
    component: React.ReactNode | any,
    componentId: number,
    setVisibleProject: Function, 
    children?: React.ReactNode
}) => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start 0.4']
    })

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        
        if (current > 0) {
            setVisibleProject(componentId)
        } else if (current == 0) {
            setVisibleProject((current: number) => current - 1)
        }
    });

  return (
    <AnimatePresence mode="wait">
    <motion.div ref={ref} style={{opacity: scrollYProgress}}>
        {component}   
    </motion.div>
    </AnimatePresence>
  )
}

export default ProjectWrapper