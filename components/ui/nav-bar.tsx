"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";


export const NavBar = ({
  navItems
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  const { scrollYProgress, scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  const [atTop, setAtTop] = useState(true);

  const [mobileOpen, setMobileOpen] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollY.getPrevious();
      
      if (current < 70) {
        setAtTop(true)
      } else if (atTop) {
        setAtTop(false)
      }

      if (mobileOpen) {
        setMobileOpen(!mobileOpen)
      }

      if (current > previous! && current > 150) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    }
  });
  

  




 



  return (    
<AnimatePresence mode="wait">
    <motion.nav
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className={cn(
        `w-full flex fixed top-0 inset-x-0 mx-auto z-[5000] 
        ${(atTop && !mobileOpen) ? "bg-transparent" : " bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"} `,
      )}
    >

    <nav className="w-full relative ">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-14 ">
            <div className="relative flex h-14  items-center justify-between">
                {/* MOBILE MENU */}
                <div className={`absolute inset-y-0 left-0 items-center sm:hidden ${scrollYProgress.get() === 0 ? "hidden" : "flex"}`}>
                    <button onClick={() => {setMobileOpen((mobileOpen) => !mobileOpen)}}>
                        <span className="absolute -inset-0.5"></span>
                        {/* Mobile Menu Closed */}
                        {mobileOpen ? 
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        :
                          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                        }
                    </button>

                </div>

                {/* Left Menu (Icon) */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                            >
                            <div className="flex flex-shrink-0">
                            <p className="text-md font-bold cursor-pointer flex items-center text-white">
                                
                                <img src="/logo.svg" className="h-7 w-auto pr-1"/>
                              
                             
                                <span className="hidden sm:block ">| LaurenDEV</span>
                            </p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right Menu (Links) */}
                <div className="hidden sm:block ">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ">
                            <span className="absolute -inset-1.5"></span>
                            
                            <ul className="list-none hidden sm:flex flex-row gap-x-4 items-center">
                                {navItems.map(({ name, link }, idx: number) => (
                                  <li
                                    key={`link=${idx}`}
                                    className={`${
                                      "text-neutral-300"
                                             }  px-3 py-2 rounded-full text-sm font-medium cursor-pointer relative items-center flex space-x-1 hover:text-white `} 
                                     
                                  > 
                                    
                                                 
                                    <Link href={link}>{name}</Link>
                                  </li>
                                ))}
                                
                                <li className="hidden md:flex">
                                  <a href="/CavanaughResume.pdf" download="CavanaughResume">   
                                    <div className="rounded-md flex relative py-2 px-3 underline text-purple">
                                    <div className="items-center justify-between flex flex-nowrap gap-x-2 text-purple">
                                    <HiOutlineDownload className="h-[14px] w-[14px]"/>
                                    <span className="text-sm font-semibold text-nowrap">My Resume</span>
                                    </div>
                                    </div> 
                                  </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen &&
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pb-3 pt-2">

                    <ul className="space-y-1">
                        {navItems.map(({name, link, icon}, idx: number) => (
                            <li
                                onClick={() => setMobileOpen((mobileOpen) => !mobileOpen)}
                                key={`link=${idx}`}
                                className={`text-white block px-3 py-2 text-base font-medium cursor-pointer relative items-center space-x-1 hover:text-white hover:bg-gray-700 `}
                            >
                                <Link href={link}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        }
    </nav>
</motion.nav>

</AnimatePresence>
  );
};