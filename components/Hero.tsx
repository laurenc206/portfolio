
import { BackgroundGradientAnimation } from "./ui/gradient-bg"
import Button from './ui/button-ui'
import Link from "next/link";

const Hero = () => {
  return (
    
        <div className="h-[95vh] " >

   







        <div className="px-8 sm:px-2 md:px-4 relative items-center h-full w-full flex">
 
                                             {/* SCROLL DOWN */}
            <div className="opacity-40 absolute z-50 bottom-2 left-0 flex justify-center w-full overflow-hidden">
              <span className="h-[30px] w-[15px] border-2 border-white rounded-2xl flex ">
                <span className="block h-[10px] w-[10px] bg-white border rounded-full m-auto transition-transform animate-mouse">

                </span>
              </span>
            </div>                   

           

        <div className="flex relative my-20 z-10 w-full">
          <div className=" flex flex-col ">
            <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mb-6">
              Welcome to my portfolio!
            </h2>

            <h1 className="mb-4 -ml-2">
              <span className="text-[3.2rem] sm:text-[5.5rem] lg:text-[6rem] font-domine font-bold italic text-purple leading-none">
                Lauren Cavanaugh
              </span>
            </h1>

            <p className=" md:tracking-wider mb-16 lg:mb-20 text-base md:text-lg lg:text-2xl text-white">
              Full-Stack Developer
            </p>
            
            {/* ACTION BUTTONS */}
            <div className="flex items-center  ">
              

              
              <Link href="#projects">
                <Button text={"My Projects"}/>
              </Link>

              <div className="px-6 sm:px-10">
                <Link href="#contact">   
                  <div className="rounded-full min-w-fit flex relative py-[6px] px-4 opacity-90 hover:opacity-100">
                    <div className="items-center justify-between flex flex-nowrap">
                      <span className="md:text-lg text-base  text-white text-nowrap underline">Contact Me</span>
                    </div>
                  </div> 
                </Link>
              </div>
            </div>




            

          </div>

        </div>

        
    </div>

    </div>
    
  
  )
}

export default Hero