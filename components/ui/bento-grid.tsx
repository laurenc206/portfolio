import { cn } from "@/lib/utils";
import { AboutMe, AvaliableForWork, TechStack, DownloadResume, CurrentlyWorkingOn, Socials } from './grid-components';


interface GridItem {
    id: number, 
    title: string,
    header?: string,
    className?: string,
    content: React.ReactNode,
    visibleSmallScreen: boolean
}

export const GridFirstRow: GridItem[] = [
    {id: 1, header: "About Me", title: "About Me", visibleSmallScreen: true, className: "col-span-2 md:row-span-2 md:col-span-2 ", content: <AboutMe />}, 
    {id: 2, header: "Remote and On-Site", title: "Avaliable For Work", visibleSmallScreen: false, className: "row-span-1 col-span-1 h-[200px] md:h-full w-full", content: <AvaliableForWork />},
    {id: 3, header: "Download a Copy", title: "", visibleSmallScreen: false, className: "row-span-1 col-span-1 justify-center items-center h-[200px] md:h-full w-full", content: <DownloadResume />},
]

export const GridSecondRow: GridItem[] = [
    {id: 4, header: "Modern Web Development", title: "My Tech Stack", visibleSmallScreen: true, className: "col-span-1 w-full", content: <TechStack />},
    {id: 5, header: "Connect", title: "", visibleSmallScreen: false, className: "col-span-1 w-full row-start-1 md:row-start-auto", content: <Socials />},
]

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  return (
    <div className="flex flex-col space-y-6 ">

        
        {/* First Row */}
        <div
        className={cn(
            "grid grid-rows-auto grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
            className
        )}
        >
            {GridFirstRow.map((item) => (
                <BentoGridItem 
                    key={item.title}
                    {...item} />
            ))}
        </div>


        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GridSecondRow.map((item) => (
                <BentoGridItem 
                    key={item.title}
                    {...item} />
            ))}
        </div>
    </div>
  );
};

export const BentoGridItem = ({
    className,
    content,
}: {
  id: number,
  header?: string,
  title: string,
  className?: string,
  content: React.ReactNode,
  visibleSmallScreen: boolean
}) => {

  return (

    <div
      className={cn(
        "rounded-xl bg-black-100 bg-opacity-85 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-6 overflow-hidden",
        className
      )}
    >

        {content}
    
    </div>
  );
};

