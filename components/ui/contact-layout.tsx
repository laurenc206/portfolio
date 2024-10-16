"use client"

import { FaRegSmile } from "react-icons/fa";
import { MdOutlineMail } from 'react-icons/md';
import ContactForm from "./contact-form";
import Image from 'next/image'
import toast from "react-hot-toast";

const Paragraph = () => {
  return (
    <div className="flex-col gap-y-2 font-light text-white text-sm lg:text-base">
    <h3>
      Thanks for checking out my portfolio! 
    </h3>
    <div className="pt-2 flex">
      <p className="leading-normal">
      If you&apos;re interested in working together I&apos;d love to hear from you! Reach out using the social media icon links below or fill out the contact form and I&apos;ll get back to you as soon as possible <FaRegSmile className="inline self-center"/>
      </p>

      
    </div>
  </div>
  )
}

const SocialLinks = () => {
  const handleEmailCopy = () => {
    navigator.clipboard.writeText("cavanaugh.lc@gmail.com");
    toast.success('Email Copied!')
  }
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-4 -ml-2 ">

                        <a href="https://www.linkedin.com/in/cavanaugh-lc/" target="_blank">
                            <div className="flex items-center gap-x-[6px] opacity-80 hover:opacity-100 p-2">
                              <Image src="/link.svg" alt="linkedin logo" width={16} height={16}/>
                         
                              <div className="text-xs underline md:hidden lg:flex">
                                /cavanaugh-lc
                              </div>
                            </div>
                        </a>

                        <a href="https://github.com/laurenc206/" target="_blank">
                            <div className=" flex items-center gap-x-[6px] opacity-80 hover:opacity-100 -ml-[2px] p-2">                   
                              <Image src="/github2.svg" alt="github logo"  width={18} height={18} />
                            
                              <div className="text-xs underline md:hidden lg:flex">
                                /laurenc206
                              </div>
                            </div>
                        </a>

                        <div className="flex flex-wrap opacity-80">
                            <button className="flex items-center gap-x-[6px] -mt-[4px] p-2" onClick={handleEmailCopy}>
                                <MdOutlineMail size={18}/>
                                <div className="text-xs  md:hidden lg:flex">
                                    cavanaugh.lc@gmail.com
                                </div>
                            </button>
                        </div>
                    </div>
                  
  )
}

const ContactLayout= () => {

  return (

    <div className="flex flex-col w-full opacity-0 sm:opacity-100 my-6">
        <h2 className="uppercase tracking-widest text-xs sm:text-sm text-blue-100 max-w-80 mb-3">
          Get In Touch
        </h2>

        <h1 className="mb-8 md:mb-10">
          <span className="font-domine font-semibold text-purple sm:text-7xl">Contact Me</span>
        </h1>
    
 
        <div className="w-full flex flex-col items-center justify-center">
          
          <div className="flex flex-row w-full px-2 justify-around md:justify-between md:px-0 max-w-xl md:max-w-3xl lg:max-w-4xl md:relative">
            
            <div className="w-1/2 max-w-[300px] md:w-[] md:max-w-[350px] flex flex-col p-2 space-y-5 lg:max-w-[450px]">
              <Paragraph />
           
              <SocialLinks />

              <div className="hidden md:flex">
                <ContactForm />
              </div>
             

            </div>





                      {/* RIGHT CONTAINER */}
            <div className="w-1/2 flex justify-center md:justify-end md:px-2">
              <div className="h-[300px] md:max-h-[450px] lg:h-[520px] flex">
                <img src="/headshot.JPEG" alt="headshot" className="h-[300px] md:h-[450px] lg:h-[520px]"/>
              </div>
            </div>
          </div>

                    
          <div className="w-full mt-5 px-2 md:hidden max-w-xl">
            <ContactForm />
          </div>


          
        </div>
      </div>




  )
}

export default ContactLayout;