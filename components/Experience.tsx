"use client"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/data';

interface ExperienceProps {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;

  points: string[];
}

const Experience = () => {

  return (
    <div className="">
      
      <div className="pt-2 pb-8 sm:pt-4 md:pb-10">
      <h1 className="font-domine italic font-semibold text-purple tracking-wide text-[3.6rem] sm:text-7xl ml-1 md:ml-2 leading-none">
        Experience
      </h1>
      </div>
      
      <VerticalTimeline
        layout="1-column-left"
        lineColor='#bec1dd'
        
      >
        {experiences.map((experience, index) => (
          <div key={`experience-${index}`} className="pb-16">
            <ExperienceCard  
              {...experience} 
            />
          </div>
        ))}
        
        <EducationCard />
      </VerticalTimeline>
    </div>
  )
}




const ExperienceCard = ({ 
  title,
  company_name,
  icon,
  points
 }: ExperienceProps) => {
  return (
    <div className="opacity-90">
    <VerticalTimelineElement
    contentStyle={{ background: '#000319', color: '#fff'}}
      contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
   
      visible={true}
      
      
      
      icon={
        <div className='z-[499] flex h-[50px] w-[50px] bg-black -ml-[5px] -mt-[5px] border-2 border-white-100 rounded-full overflow-hidden' >
          <img
            src={icon}
            alt={company_name}
            className="object-cover w-[60px]"
          />
        </div>
      }
    
    >
      <div>
        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-2 ">
          {title}
        </h3>

        <p className="font-semibold uppercase tracking-widest text-xs text-neutral-300" style={{ margin: 0 }}>
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 pb-2 ">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] pl-1 sm:tracking-wider text-white"
          >
            {point}
          </li>
        ))}
      </ul>

      <div>
        <h3 className="w-full justify-right flex items-center uppercase tracking-widest text-xs text-blue-100 -mb-5 mt-5">
          February 2024 - Current 
        </h3>
        </div>
    </VerticalTimelineElement>
    </div>
  )
}

const EducationCard = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#000319', color: '#fff', opacity: "90"}}
      contentArrowStyle={{ borderRight: '7px solid #0f172a' }}   
      className="bg-opacity-90"
      icon={
        <div className='z-[499] flex h-[50px] w-[50px] bg-black -ml-[5px] -mt-[5px] border-2 border-white-100 rounded-full overflow-hidden' >
          <img
            src="uw.svg"
            alt="uw"
            className="object-cover w-[60px]"
          />
        </div>
      }
      visible={true}
    >
      <div>
        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-2">
          {"University of Washington"}
        </h3>

        <p className="font-semibold uppercase md:tracking-widest text-xs text-neutral-300 mb-2" style={{ margin: 0 }}>
          {"Paul G. Allen School for Computer Science and Engineering"}
        </p>
      </div>

      <div className="mt-4 sm:mt-2 pl-2 sm:pl-5 italic text-sm text-neutral-300">
          {"Bachelors of Sciences, Computer Science"}
      </div>

      <div className="mt-4 pl-2 sm:pl-5 text-white-100 text-sm tracking-wider">
        <span className="font-semibold">{"Related Coursework: "}</span>
        <span className="font-light">{"Software Engineering, Distributed Systems, Database Systems, Systems Programming, Web Browser Engineering, Computer Security, Data Structures and Algorithms, Object-Oriented Programming, Probability & Statistics in Computer Science"}</span>
      </div>
    </VerticalTimelineElement>
  )
}




export default Experience