import React from 'react'
import { iconItems } from '@/data';


const TechIcon = ({ name } : { name: string }) => {
    if (!iconItems.has(name)) {
        return (
            <div></div>
        )
    }

  const icon = iconItems.get(name);
  return (
  
    <div className="flex flex-col items-center justify-center relative p-1">
        <div 
            key={icon} 
            className={`h-10 w-10 flex justify-center items-center`}
        >
            <img src={icon} alt={icon} title={icon} className={`${(name === "JavaScript" || name === "HTML5")  ? "p-2" : "p-1"}`}/>
        </div>
        <div className="flex flex-col text-[9px] items-center opacity-50 justify-center">
            {name}
        </div>

    </div>
  )
}

export default TechIcon