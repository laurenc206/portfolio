"use client"
import { SkeletonFour as Globe } from "./bento-globe";
import TechIcon from "./tech-icon";
import { MdOutlineMail } from "react-icons/md";
import { CgExternal } from "react-icons/cg";
import { BackgroundGradientAnimation } from "./gradient-bg"
import { HiOutlineDownload } from "react-icons/hi";
import { IoMdClipboard } from "react-icons/io";
import Image from "next/image";
import toast from 'react-hot-toast';
import Link from "next/link";


export const AboutMe = () => {
    return (
        <div className="p-4 z-10 bg-black-100 h-full w-full">
            <h2 className="uppercase tracking-widest text-xs sm:text-sm text-white-100 mb-2 mt-2">
              About Me
            </h2>
            <div className="p-1 sm:p-4">
            <h1 className="text-white text-[1.2rem] lg:text-3xl font-semibold mb-7 mt-2">
                Hi there! I&apos;m  Lauren, a Software Developer based in Seattle, Washington.
             
               
            </h1>
            <div className="flex flex-col gap-y-5 font-light text-neutral-300 text-sm lg:text-base">
                <p>
                    With over <span className="text-purple font-bold underline">6 years of coding experience</span>, I&apos;ve cultivated a deep love for technology and its possibilities.
                </p>
                <p>
                    I earned my Bachelor&apos;s degree in Computer Science from the renowned Paul G. Allen School at the University of Washington, where I honed my skills in backend development through courses in computer security, databases, software engineering, and distributed systems.
                </p>
                <p>
                    Since then, I&apos;ve expanded my expertise into front-end development, diving into full-stack projects that turn my ideas into reality. There&apos;s something magical about seeing a concept transform into a functioning application!
                </p>
                <p>
                    Currently, I work as an AI Consultant, evaluating and analyzing AI-generated code. This role not only sharpens my technical skills but also introduces me to cutting-edge libraries and frameworks.
                </p>
                <p>
                    I love coding, collaborating, and creating! Let&apos;s connect and explore how I can contribute to your next project.
            </p>
            </div>
           </div>
        </div>
    )
}

export const AvaliableForWork = () => {
    return (
        <div className="pt-4 pl-4 flex-col overflow-hidden relative z-10 bg-black-100 h-full w-full"> 
            <h2 className="uppercase tracking-widest text-xs sm:text-sm text-white-100 mb-3 mt-2 pr-2">
                Remote and On-Site
            </h2>

            <h1 className="font-sans font-normal text-neutral-300 text-sm md:text-base pr-2">
              Avaliable for Work
            </h1>

            

            <Globe />
        </div>
    )
}

export const TechStack = () => {
    const row1 = [
        {name: 'Java'},
        {name: 'Python'},
        {name: 'MySQL'},
        {name: 'Restful API'},
        {name: 'Git'}
    ]
    const row2 = [
        {name: 'JavaScript'},
        {name: 'HTML5'},
        {name: 'TypeScript'},
        {name: 'React'},
        {name: 'TailwindCSS'},
    ]
    return (
            <div className="p-4 justify-between flex flex-col z-10 bg-black-100 w-full min-w-fit h-fit my-3 relative">
                <h2 className="sm:hidden uppercase tracking-widest text-xs sm:text-sm text-white-100 mb-2 mt-2">
                    My Tech Stack
                </h2>

                <div className="absolute top-0 left-0 h-full w-full">
                    <Image src="/grid.svg" alt="grid" fill={true} />
                </div>

             
                <div className="flex flex-row w-full justify-between gap-x-2 flex-wrap pb-4">
                {
                    row1.map(({ name }) => (
                     
                        <TechIcon 
                            key={name}
                            name={name}
                        />   
                    ))
                }
                </div>

                <div className="hidden sm:flex pb-4">
                    <div className="uppercase tracking-widest text-xs sm:text-sm text-blue-100 mb-2 mt-2">
                        My Tech Stack
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between gap-x-2 flex-wrap">
                {
                    row2.map(({ name }) => (
                        
                        <TechIcon 
                            key={name}    
                            name={name}
                        />
                    ))
                }
                </div>
            </div>
          
            

    )
}

export const DownloadResume = () => {
    return (
      
     
         
        <BackgroundGradientAnimation containerClassName="opacity-80 z-1" className="z-20 h-full w-full flex justify-center items-center">
          
            <div className="gap-y-2 flex flex-col py-2 justify-center items-center h-full w-full p-4">
                        
                    
                <h2 className="z-10 uppercase tracking-widest text-xs sm:text-sm mb-2 mt-2 text-white-100 text-center flex">
                    Download a Copy
                </h2>
                    

                        <a href="/CavanaughResume.pdf" download="CavanaughResume" className="z-10" >   
                            <div className="rounded-md flex relative bg-opacity-80 hover:bg-opacity-100 py-[6px] px-4 hover:underline text-purple">
                            <div className="items-center justify-between flex flex-nowrap gap-x-2 text-purple">
                                <HiOutlineDownload className="h-[14px] w-[14px]"/>
                                <span className="text-sm font-semibold text-nowrap">My Resume</span>
                            </div>
                            </div> 
                        </a>
                </div>
            </BackgroundGradientAnimation>
      
    )
}

export const CurrentlyWorkingOn = () => {
    return (
        <div className="p-4">
            {"Currently Working On"}
        </div>
    )
}

export const Socials = () => {
    const handleEmailCopy = () => {
        navigator.clipboard.writeText("cavanaugh.lc@gmail.com");
        toast.success('Email Copied!')
    }

    return (
        <div className="p-4 flex flex-col w-full">
            <h2 className="uppercase tracking-widest text-xs sm:text-sm text-white-100 mb-4 mt-2">
                Connect 
            </h2>

                <div className="flex flex-col h-full px-4 gap-y-4">

                    
                   
                        
                            <div className="bg-opacity-90 bg-slate-900 flex items-center rounded-md py-1 px-2">
                            <div className="relative px-2 py-2 flex flex-row gap-x-2">
                                <img src="/link.svg" className="h-[18px] w-[18px]" />
                            </div>
                            <Link href="https://www.linkedin.com/in/cavanaugh-lc/" target="_blank" className="z-40 flex flex-row gap-x-1 hover:underline py-1">
                                <span className="text-sm"> 
                                /cavanaugh-lc
                                </span>
                                <CgExternal size={20} />
                               
                            </Link>
                            </div>
                           
                   
                 

                    
                               
                        
                            <div className="bg-opacity-90 bg-slate-900 flex items-center rounded-md py-1 px-2"> 
                            <div className="px-2 py-2 flex gap-x-2">
                                <img src="github2.svg" className="h-[18px] w-[18px]"/>
                            </div>
                            <Link href="https://github.com/laurenc206/" target="_blank" className="z-40 flex flex-row gap-x-1 hover:underline py-1" >
                                <span className=" text-sm" >
                                    /laurenc206
                                </span>
                                <CgExternal size={20}/>
                            </Link>
                            </div>
                    
                        
                    

                    <div className=" bg-opacity-90 bg-slate-900 flex items-center rounded-md py-1 px-2">
                        <button className="relative px-2 py-2 flex gap-x-2 items-center" onClick={handleEmailCopy}>
                            <MdOutlineMail />
                            <div className="flex flex-row gap-x-1 items-center hover:underline">
                                <text className="text-sm">
                                    cavanaugh.lc@gmail.com
                                </text>
                                <IoMdClipboard size={15}/>
                            </div>
                        </button>
                    </div>
                </div>
        </div>
    )
}
