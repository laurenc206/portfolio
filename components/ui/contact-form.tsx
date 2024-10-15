import React from 'react'

import { useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const defaultFormValues = {
    name: '',
    email: '',
    message: ''
  };

const ContactForm = () => {
    const email = "cavanaugh.lc@gmail.com";
    const formRef = useRef(null);
    const [form, setForm] = useState(defaultFormValues);
    const [loading, setLoading] = useState(false);
  
    const serviceId = "service_ddfrj6s";
    const templateId = "template_na0ey0l";
    const publicKey = "JcUurtGCxaOfzEVjR";
    const templateParams = {
      from_name: form.name, 
      from_email: form.email,
      to_name: "Lauren",
      to_email: "cavanaugh.lc@gmail.com",
      message: form.message,
    };
  
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
  
      setForm({ ...form, [name]: value })
    }
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setLoading(false);
          alert("Your message has been sent! I will get back to you as soon as possible.");
  
          setForm(defaultFormValues);
        }, (error: any) => {
          setLoading(false);
  
          console.log(error);
  
          alert("Something went wrong. If error persists, try reaching out to me directly at cavanaugh.lc@gmail.com");
        });
    }
  return (
    <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:gap-4 sm:w-full"
        >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-opacity-90 bg-slate-900 border border-white/[0.2] focus:border-white/[0.5] py-3 px-6 text-white outlined-none font-medium text-sm sm:text-base"
            />
     
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className=" bg-slate-900 border border-white/[0.2] focus:border-white/[0.5] py-3 px-6 text-white font-medium text-sm sm:text-base"
            />
        
            <textarea
              
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="bg-opacity-90 bg-slate-900 border border-white/[0.2] focus:border-white/[0.5] py-3 px-6 text-white outlined-none font-medium text-sm sm:text-base"
              
            />
          
          <div className="w-full justify-end flex">
         
            <button
              type="submit"
              className="border rounded-full min-w-fit flex relative bg-opacity-80 hover:bg-opacity-100 bg-purple py-[6px] px-12 text-black-100 font-bold"
            >
              {loading ? 'Sending...' : 'Send'}

            </button>
          </div>
        </form>
  )
}

export default ContactForm