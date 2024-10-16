
import About from "@/components/About"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects";
import { BackgroundGradientAnimation } from "@/components/ui/gradient-bg";

import { NavBar } from "@/components/ui/nav-bar";
import { navItems } from "@/data";
import {Toaster} from 'react-hot-toast';


export default function Home() {

  return (
   <main className="bg-black flex justify-center items-center flex-col relative ">
        <Toaster />  
          <div className={`absolute top-0 left-0 h-[85vh] w-full contrast-200 brightness-100 saturate-200 overflow-hidden`}>
                  <BackgroundGradientAnimation containerClassName="opacity-70" /> 
          </div>
           
                     
      <div className="max-w-5xl lg:max-w-6xl w-full px-2 sm:px-10 md:px-6 lg:px-12">
          <div>
          
          <NavBar navItems={navItems} />
          <section id="Hero" className="md:px-8" >  

            <Hero />                            
          </section>    
         
         
         
            <section id="about" className="relative min-h-[calc(100vh-56px)] scroll-mt-14 mt-14 pb-72"> 
              <About/>
            </section>

            <section id="projects" className="relative scroll-mt-14 mt-14 lg:mt-0 lg:scroll-mt-0 pb-72 md:px-8">   
              <RecentProjects /> 
            </section>            


            <section id="experience" className="relative scroll-mt-14 mt-14 pb-72 md:px-8">      
                <Experience/> 
            </section>   


            <section id="contact" className="relative md:px-8">             
                <Contact />
            </section>

            
          </div>

      </div>
  
      

   </main>
  );
}
