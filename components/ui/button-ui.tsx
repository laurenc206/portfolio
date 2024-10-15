import React from 'react'

interface ButtonProps {
    text: string,

}

const Button = ({text}:
ButtonProps
) => {
  return (  
        <div className="border rounded-full min-w-fit flex relative bg-opacity-80 hover:bg-opacity-100 bg-purple py-[6px] px-4 sm:px-10">
            <div className="items-center justify-between flex flex-nowrap">
            <span className="md:text-lg text-base font-semibold text-zinc-950 text-nowrap">{text}</span>
            </div>
        </div> 
  )
}

export default Button