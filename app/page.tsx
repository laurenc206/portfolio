
import About from "@/components/About"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects";
import { BackgroundGradientAnimation } from "@/components/ui/gradient-bg";

import { NavBar } from "@/components/ui/nav-bar";
import { navItems } from "@/data";



export default function Home() {

  return (
   <main className="bg-black flex justify-center items-center flex-col relative overflow-x-hidden">
          
          <div className={`absolute top-0 left-0 h-[95vh] w-full contrast-200 brightness-100 saturate-200 overflow-hidden`}>
                  <BackgroundGradientAnimation containerClassName="opacity-70" /> 
          </div>
           
                     
      <div className="max-w-7xl w-full px-2 sm:px-10 md:px-6 lg:px-12">
          <div>
          
          <NavBar navItems={navItems} />
          <section id="Hero" >  

            <Hero />                            
          </section>    
         
         
         
            <section id="about" className="relative min-h-[calc(100vh-56px)] scroll-mt-14 mt-52 pb-72"> 
              <About/>
            </section>

            <section id="projects" className="relative scroll-mt-14 mt-14 lg:mt-0 lg:scroll-mt-0 pb-72">   
              <RecentProjects /> 
            </section>            


            <section id="experience" className="relative scroll-mt-14 mt-14 pb-72">      
                <Experience/> 
            </section>   


            <section id="contact" className="relative">             
                <Contact />
            </section>
          </div>

      </div>
  
      

   </main>
  );
}
