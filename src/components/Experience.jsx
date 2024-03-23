import React from 'react'
import SectionWrapper from '../HOC'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { experiences } from '../constants' 
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
const ExperienceCard=({ title,company_name,icon,iconBg,date,points })=>{ 
  return  <VerticalTimelineElement 
  contentStyle={{
    background: "#1d1836",
    color: "#fff",
  }}
  contentArrowStyle={{ borderRight: "7px solid  #232631" }}
  date={date}
  iconStyle={{ background:iconBg }}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img
        src={icon}
        alt={company_name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>
  }
>
  <div>
    <h3 className='text-white text-[24px] font-bold'>{title}</h3>
    <p
      className='text-secondary text-[16px] font-semibold'
      style={{ margin: 0 }}
    >
      {company_name}
    </p>
  </div>

  <ul className='mt-5 list-disc ml-5 space-y-2'>
    {points.map((point, index) => (
      <li
        key={`experience-point-${index}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider'
      >
        {point}
      </li>
    ))}
  </ul>
</VerticalTimelineElement>
}

const Experience = () => {
  return (
    <motion.div
      initial={{
         transparent:0
      }}
      animate={{
        transparent:1
      }}
      transition={{
         delay:1,
         duration:1
      }}
    >
      <div className='flex flex-col items-start gap-4'> 
      <motion.p
        className={styles.sectionSubText}
      >
         WHAT I HAVE DONE SO FAR
      </motion.p>
      <motion.h1
        className={styles.heroHeadText} 
      >
        Work Experience. 
      </motion.h1>
      </div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              {...experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Experience,'work')