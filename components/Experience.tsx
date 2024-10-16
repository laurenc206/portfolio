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
      
      <div className="pt-2 pb-10 sm:pt-4 md:pb-12">
      <h1 className="font-domine italic font-semibold text-purple tracking-wide text-[3.6rem] sm:text-7xl ml-2 leading-none">
        Experience
      </h1>
      </div>
      
      <VerticalTimeline
        layout="1-column-left"
        lineColor='#bec1dd'
        
      >
        {experiences.map((experience, index) => (
          <div key={`experience-${index}`} className="pb-20">
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

    <VerticalTimelineElement
      contentStyle={{ 
        background: '#000319', 
        color: '#fff',
        boxShadow: 'none',
        border: '1px solid rgba(255, 255, 255, .2)',
        borderRadius: '24px'

      }}
      contentArrowStyle={{ 
        borderRight: '7px solid #bec1dd', 

      }}
   
      visible={true}
      

      
      icon={
        <div className='z-[499] flex h-[50px] w-[50px] bg-black -ml-[5px] -mt-[5px] border-[1px] border-[#bec1dd] rounded-full overflow-hidden' >
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

        <p className="font-semibold uppercase tracking-widest text-xs text-neutral-200" style={{ margin: 0 }}>
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 pb-2 ">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="lg:font-normal text-sm sm:text-base text-neutral-200 leading-normal"
          >
            {point}
          </li>
        ))}
      </ul>

      <div>
        <h3 className="w-full justify-right flex items-center uppercase tracking-widest text-xs text-white-100 -mb-5 mt-5">
          February 2024 - Current 
        </h3>
        </div>

    </VerticalTimelineElement>
   
  )
}

const EducationCard = () => {
  return (
    <VerticalTimelineElement
    contentStyle={{ 
      background: '#000319', 
      color: '#fff',
      boxShadow: 'none',
      border: '1px solid rgba(255, 255, 255, .2)',
      borderRadius: '24px'

    }}
    contentArrowStyle={{ 
      borderRight: '7px solid #bec1dd', 

    }}
     

      icon={
        <div className='z-[499] flex h-[50px] w-[50px] bg-black -ml-[5px] -mt-[5px] border-[1px] border-[#bec1dd] rounded-full overflow-hidden' >
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

        <p className="font-semibold uppercase md:tracking-widest text-xs text-neutral-200 mb-2" style={{ margin: 0 }}>
          {"Paul G. Allen School for Computer Science and Engineering"}
        </p>
      </div>

      <div className="mt-4 sm:mt-2 pl-2 sm:pl-5 italic text-sm text-neutral-200">
          {"Bachelors of Sciences, Computer Science"}
      </div>

      <div className="mt-4 pl-2 sm:pl-5 text-white-100 text-[14px] tracking-wider">
        <span className="font-semibold">{"Related Coursework: "}</span>
        <span className="font-light">{"Software Engineering, Distributed Systems, Database Systems, Systems Programming, Web Browser Engineering, Computer Security, Data Structures and Algorithms, Object-Oriented Programming, Probability & Statistics in Computer Science"}</span>
      </div>
    </VerticalTimelineElement>
  )
}




export default Experience