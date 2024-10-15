"use client"

import { useMediaQuery } from '@/hooks/use-media-query';
import ContactLayout from './ui/contact-layout';
import ContactMobileLayout from './ui/contact-mobile-layout'

const Contact = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)")
  return (

    <div className="px-2 flex justify-center items-center min-h-screen">
      {
        isDesktop ? <ContactLayout/> : <ContactMobileLayout/>
      }

    </div>


  )
}

export default Contact;