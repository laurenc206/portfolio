"use client"

import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import VideoModal from './video-modal';
import { ClipboardCopy } from 'lucide-react';
import { Check } from 'lucide-react';
import TechIcon from './tech-icon';
import { SquareArrowOutUpRightIcon } from 'lucide-react';



const ProjectCard = ({
    id,
    title,
    des,
    img,
    link,
    githubLink,
    des2,
    username,
    password,
    techStack,
    imgclassName 
} : any) => {
    const [open, setOpen] = useState(false);
    const [usernameCopied, setUsernameCopied] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);

  
    const handleUsernameCopy = (username: string) => {
  
      const text= username
      navigator.clipboard.writeText(text);
  
      setUsernameCopied(true);
    }
  
    const handlePasswordCopy = (password: string) => {
      const text= password
      navigator.clipboard.writeText(text);
  
      setPasswordCopied(true);
    }
  
  
  
    useEffect(() => {
      if (usernameCopied) {
          const timer = setTimeout(() => setUsernameCopied(false), 3000)
  
          return () => clearTimeout(timer);
      }
  
      if (passwordCopied) {
          const timer = setTimeout(() => setPasswordCopied(false), 3000)
          
          return () => clearTimeout(timer)
      }
  
    }, [usernameCopied, passwordCopied])


  return (
  
    <div className="flex justify-center relative max-w-[660px] lg:max-w-[600px]" >
                    
                    <div className="items-center border border-white/[0.2] bg-[#000319] p-6 justify-between space-y-3 rounded-3xl">

                        {/* PROJECT IMAGE */}
                        <div className="relative flex items-center justify-center  overflow-hidden h-[10rem] mb-6">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                <img src="/bg.png" alt="bg-img" />
                            </div>    
                            
                            <img 
                                src={img}
                                alt={title}
                                className={`z-10 absolute ${title === 'HapMap' ? "h-full" : "translate-y-8 w-[70vw] max-w-[450px] rotate-[5deg] rounded-sm"} ${imgclassName}`}
                            />    
                        </div>


                        {/* TITLE */}
                        <h1 className="text-white text-2xl sm:text-3xl font-semibold ">
                            {title}
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="lg:font-normal font-light text-sm text-neutral-200">
                            {parse(des)}
                        </p>

                        {/* ICON LIST */}



                        <div className="flex items-center py-4 w-full relative justify-center md:justify-between">
                            <div className="flex flex-wrap gap-y-2 gap-x-2 md:gap-x-6 w-full">
                                {techStack.map((t : any) => (
                                    <TechIcon name={t} key={t}/>
                                ))}

                            </div>

                            
                        </div> 




                        {/* GITHUB BUTTON AND VIEW SITE */}
                        <div className="flex flex-wrap sm:flex-nowrap items-center justify-around gap-x-4 px-4 gap-y-3">
                            <a target="_blank" href={githubLink} className="grow">
                            <div className="border border-white/[0.2] rounded-full opacity-90 hover:opacity-100 hover:border-white/[0.5] grow">
                                <div className="flex items-center justify-center py-3 px-10">
                                    <div className="rounded-full flex justify-center items-center ">
                                        <img src="/github.svg" alt="/github.svg" className="h-[18px] md:h-[20px]" />
                                    </div>
                                    <p className="flex md:text-lg fold-semibold text-base ms-3">Github</p>
                                </div>
                            </div>
                            </a>
                            {link &&    
                            <a target="_blank" href={link} className="grow">   
                            <div className="border rounded-full  opacity-90 hover:opacity-100 bg-purple grow">
                                <div className="flex justify-center items-center py-3 px-6 gap-x-2 overflow-x-clip">
                                    <p className=" md:text-lg text-base font-semibold text-zinc-950">Live Demo</p>
                                   <SquareArrowOutUpRightIcon className="md:h-[18px] h-[16px] text-zinc-950"/>
                                </div>
                            </div> 
                            </a>
                            }
                            { title === "HapMap" &&
                            <div className="border grow rounded-full opacity-90 hover:opacity-100  bg-purple" onClick={() => { setOpen(true) }}>
                                <div className="flex justify-center items-center py-3 px-10 cursor-pointer ">
                                    <p className=" md:text-lg text-base font-semibold text-zinc-950 text-nowrap">View Demo</p>
                                    
                                </div>
                            </div>
                            }
                        </div>

                        {/* TEXT BELOW BUTTONS */}
                        { des2 && 
                            <div className={`pt-3 sm:pt-4 text-sm opacity-90`}>
                                <p>{des2}</p>
                            </div>

                        }

                        {/* USERNAME AND PASSWORD */}
                        { (username && password) && 
                   
                            <div className="flex flex-col gap-y-4 pt-2 justify-center">
                                <div className="flex flex-col gap-y-1 px-2 max-w-[440px]">
                                    <p className="uppercase tracking-widest text-xs text-blue-100">
                                        {`username:`}
                                    </p>
                                    <div className="flex flex-row gap-x-2">    
                                        <div className="flex grow border items-center px-4 opacity-90 hover:opacity-100 hover:border-white/[0.5] bg-slate-900">
                                            {username}
                                        </div>
                                        <button onClick={() => handleUsernameCopy(username)} className="p-2 border border-white/[0.2] rounded-md opacity-90 hover:opacity-100 hover:border-white/[0.5]">
                                            {usernameCopied ? <Check className="h-[24px]"/> : <ClipboardCopy className="h-[24px]" />}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 px-2 max-w-[440px]">
                                    <p className="uppercase tracking-widest text-xs text-blue-100">
                                        {`password:`}
                                    </p>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="flex grow border items-center px-4 opacity-90 hover:opacity-100 hover:border-white/[0.5] bg-slate-900">
                                            {password}    
                                        </div>
                                        <button onClick={() => handlePasswordCopy(password)} className="p-2 border border-white/[0.2] rounded-md opacity-90 hover:opacity-100 hover:border-white/[0.5]">
                                            {passwordCopied ? <Check className="h-[24px]"/> : <ClipboardCopy className="h-[24px]" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                    
                        }


                    </div>
                      
      {open &&
        <VideoModal open={open} onClose={() => setOpen(false)}/>
      }
             
                
            
                </div>
                
         


  )
}

export default ProjectCard