
import About from "@/components/About"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects";

import { NavBar } from "@/components/ui/nav-bar";
import { navItems } from "@/data";



export default function Home() {

  return (
   <main className="bg-black">

           
                     
      <div className="max-w-6xl w-full px-2 sm:px-10 md:px-6 lg:px-12 flex  justify-center items-center flex-col">
          <div>
          
          <NavBar navItems={navItems} />
          
          <section id="Hero" >  

              <Hero />                            
            </section>
         
         
            <section id="about" className="relative min-h-[calc(100vh-56px)] scroll-mt-14 mt-52 pb-52"> 
              <About/>
            </section>

            <section id="projects" className="relative scroll-mt-14 mt-14 lg:mt-0 lg:scroll-mt-0 pb-52">   
              <RecentProjects /> 
            </section>            


            <section id="experience" className="relative scroll-mt-14 mt-14 pb-52">      
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
