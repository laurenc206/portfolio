import React from 'react'

interface ButtonProps {
    text: string,

}

const Button = ({text}:
ButtonProps
) => {
  return (  
        <div className="rounded-full min-w-fit flex relative bg-purple py-3 px-8 sm:px-10">
            <div className="items-center justify-between flex flex-nowrap">
            <span className="md:text-lg text-base font-semibold text-zinc-950 text-nowrap">{text}</span>
            </div>
        </div> 
  )
}

export default Button