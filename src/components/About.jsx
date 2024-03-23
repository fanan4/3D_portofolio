import React from 'react'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import { styles } from '../style'
import { fadeIn,textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import SectionWrapper from '../HOC'

const CardService=({index,title,icon})=>{
  // let Delay=index*0.5;
  //console.log('delay is ',Delay)
  return(
    <Tilt className='xs:w-[250px] w-full'> 
    <motion.div 
     initial={{
       opacity:0
     }}
      animate={{
        opacity:1
      }}
       transition={{
        duration:0.75, 
        delay:index*0.45, 
       }}

      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '  
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white font-bold text-[20px] text-center'>{title}</h3>  
        </div>
    </motion.div> 
       
  </Tilt>
  )
}
const About = () => {
  return (
    < > 
       <motion.div
       variants={textVariant()}
       >
         <p className={styles.sectionSubText}>
            introduction
         </p>
         <h2 className={styles.sectionHeadText}>Overview</h2> 
       </motion.div> 
       <motion.p 

          initial={{
            x:  '-100vw' ,
            // y: -100 : 0, 
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{
            type:'spring',
             delay:0.5,
             duration:1
          }}
          className='text-secondary mt-4 text-[17px] leading max-w-3xl leadin-[30px]'   
       > 
             I'm Abdelouahed Fanan, a versatile software engineer specializing
              in MEAN stack web development, as well as mobile apps with Kotlin
              and Flutter. With a full-stack skill set, I handle everything
              from UI design to backend architecture. 

               My passion lies in crafting innovative solutions
                to complex challenges. I take ownership of projects,
                delivering high-quality code and exceptional user experiences. 
                My adaptability allows me to contribute to a wide range
                of projects, from inception to enhancement.

              Constantly evolving alongside the tech landscape,
               I'm committed to staying current with the latest trends
               and technologies. Let's collaborate to transform ideas
               into impactful digital realities. 
       </motion.p>
       <div className='mt-20 flex flex-row flex-wrap gap-10'>
         {
          services.map((service , index)=>(
              <CardService
                 index={index} 
                 {...service }
              />
          ))
         }

       </div>

    </>
  )
}

export default SectionWrapper(About,"about")