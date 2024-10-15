import { cn } from '@/lib/utils'
import React from 'react'

const NoiseBackground = ({
    children,
    className,
    containerClassName
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
  return (
    <div
    className={cn(
      " bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
      containerClassName
    )}
  >
    <svg className="hidden">
      <defs>
        <filter id="blurMe">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <filter id='noiseFilter'>
          <feTurbulence 
          in="goo"
            type='fractalNoise' 
            baseFrequency='0.35' 
            numOctaves='5' 
            stitchTiles='stitch'
            result="noise"
        />
        </filter>
      </defs>
    </svg>
    <div className={cn("", className)}>{children}</div>

    <div
      className={cn(
        "gradients-container h-full w-full blur-lg",
       "[filter:url(#blurMe)_blur(40px)]",
       
      )}
    >  



    </div>
    </div>
  )
}

export default NoiseBackground