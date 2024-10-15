"use client";
import React, { useState } from "react";
import ProjectWrapper from "./project-wrapper";

export const StickyScroll = ({
  content, 
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
}) => {
  const [visibleProject, setVisibleProject] = useState(0)

  


  return (
    <div
      className="flex relative items-start w-full min-gap-x-4 justify-around"
    > 
      {/* Left Menu */}
      <div className="space-y-10 min-w-fit sticky top-[216px] flex flex-col pt-4 pl-4 pr-10">
      {content.map((item, index) =>(
          <div key={`${item.title}-${index}`} className="justify-center items-center">
            <h1 className={`${visibleProject === index ? "text-purple" : "text-white"}`}>
              {item.title}
            </h1>
          </div>
        ))}
      </div>


      {/* Right Cards */}
      <div className="relative flex justify-center items-center flex-col pt-[50vh] space-y-[60vh]"> 
          {content.map((item, index) => (
      
            <ProjectWrapper key={index} componentId={index} component={item.content} setVisibleProject={setVisibleProject} />
              
     
          ))}
        </div>
    </div>
  );
};
