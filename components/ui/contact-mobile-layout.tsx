
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineMail } from 'react-icons/md';
import ContactForm from "./contact-form";
import Image from "next/image";
import toast from "react-hot-toast";

const Paragraph = () => {
    return (
          <div className="flex-col gap-y-2 text-white text-sm mb-5 w-full">
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

const SocialIcons = () => {
  const handleEmailCopy = () => {
    navigator.clipboard.writeText("cavanaugh.lc@gmail.com");
    toast.success('Email Copied!')
  }
  return (
    <div className="flex flex-row w-3/4 max-w-[280px] flex-wrap justify-between mt-2 mb-3">

      <a href="https://www.linkedin.com/in/cavanaugh-lc/" target="_blank"> 
        <div className=" flex p-2 text-white-100 ">
          <Image src="/link.svg" alt="linked-in logo" width={18} height={18} />

        </div>
      </a>


      <a href="https://github.com/laurenc206/" target="_blank"> 
        <div className="flex -mt-[2px] p-2">     
          <Image src="/github2.svg" alt="github logo" width={20} height={20} className=""/>    
        </div>
      </a>


      <button className="flex flex-row gap-x-[6px] -mt-[4px] p-2" onClick={handleEmailCopy}>
        <MdOutlineMail size={20}/>
      </button>
    </div>

  )
}

const ContactMobileLayout = () => {


  return (
    <div className="w-full h-full max-w-xl my-6">

      <div className="flex h-full w-full items-center relative">
          

     

     
          <div className="z-30 w-full bg-black bg-opacity-10 bg-gradient-to-t from-black to-transparent mt-40">
            <div className="flex flex-col w-full pt-3 justify-start">
              <h2 className="uppercase tracking-widest text-xs sm:text-sm text-white-100 max-w-80 mb-3 ">
                Get In Touch
              </h2>

              <h1 className="heading mb-6">
                <span className="font-domine font-semibold text-purple text-[3.6rem] sm:text-[5rem] lg:text-7xl">Contact Me</span>
              </h1>
            
              <div className="p-2 w-full max-w-[320px]">
                <Paragraph />
                <SocialIcons />
              </div>


              <div>
                <ContactForm />
              </div>
            </div>
          </div>


          <div className="z-1 absolute right-0 top-0 z-0 opacity-90">
         
          <div className="flex w-full items-end justify-end p-2">
            <img src="/headshot.JPEG" className="w-3/5 max-w-[440px]"/>
          </div>
  
          </div>
      </div>
        



        

      </div>

  )
}

export default ContactMobileLayout;